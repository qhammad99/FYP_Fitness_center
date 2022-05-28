import React, {useContext, useState, useEffect} from 'react';
import {
  View, 
  Text, 
  TouchableOpacity, 
  Alert, 
  TextInput, 
  FlatList, 
  ActivityIndicator,
  Image,
  ScrollView
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../../Context/Providers/AuthProvider';
import { AdminContext} from '../../../Context/Providers/AdminProvider';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Picker} from '@react-native-picker/picker';
import Modal from 'react-native-modal';
import Colors from '../../../colors/Colors';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import Urls from '../../../config/env';
import {URL} from '@env';

const Home = () => {
    const authentication = useContext( AuthContext);
    const administration = useContext(AdminContext);

    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [ingredients, setIngredients] = useState(null);
    const [showIngredients, setShowIngredients] = useState(null);

    const [showPriceModal, setShowPriceModal] = useState(false);
    const [updatePrice, setUpdatePrice] = useState("");
    const [selectedItem, setSelectedItem] = useState("");

    const [addIngModal, setAddIngModal] = useState(false);
    const [photoModal, setPhotoModal] = useState(false);

    const [photo, setPhoto] = useState(null);
    const [selectedPicker, setSelectedPicker] = useState(1);//category
    const [newName, setNewName] = useState("");
    const [newPrice, setNewPriceForm] = useState("");
    const [newCalories, setNewCalories] = useState("");
    const [newWeight, setNewWeight] = useState("");

    const loadIngredients = async()=>{
      let user = JSON.parse(authentication.state.user);
      let token = user.token;

      var API_URL = Urls.Ingredients;
      axios.get(API_URL, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then((response) => {
          if (response.data.success) {
            setIngredients(response.data.ingredients);
            setShowIngredients(response.data.ingredients);
          }
          administration.dispatch({ type: 'LOADING_STOP' });
        })
        .catch((error) => {
          if (error.response)
            alert(" " + error.response.data.message);
          else
            alert(" " + error);
        });
    }

    useEffect(()=>{
        const loadCategories = async()=>{
          let user = JSON.parse(authentication.state.user);
          let token = user.token;
          administration.dispatch({ type: 'LOADING_START' });

          var API_URL = Urls.IngredientsCategory;
          axios.get(API_URL, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          })
            .then((response) => {
              if (response.data.success) {
                setCategories([{id:0, name: 'All'}, ...response.data.category ]);
              }
              else
                administration.dispatch({ type: 'LOADING_STOP' });
            })
            .catch((error) => {
              if (error.response)
                alert(" " + error.response.data.message);
              else
                alert(" " + error);
            });
        }

        loadCategories();
    },[]);

    useEffect(()=>{
      if(categories != null){
        setSelectedCategory(categories[0]);
        loadIngredients();
      }
    },[categories]);

    useEffect(()=>{
      if(selectedCategory && ingredients){
        let showItems;
        selectedCategory.id == 0
        ?
          showItems = ingredients
        :
          showItems= ingredients.filter(item=>item.category == selectedCategory.name)
      setShowIngredients(showItems);
      }
    },[selectedCategory, ingredients])

    const clearLoactStorage = async() =>{
        try{
          await AsyncStorage.removeItem('USER');
        }catch(e){
          console.log("error in clearing local storage, ", e);
        }
    
        authentication.dispatch({type:'SIGN_OUT'});
      }

    const logoutAlert = () => {
        Alert.alert(
          'Logout', 
          "Are you sure to logout?",
          [
            {
              text:"CANCEL",
              styles:"cancel"
            },
            {
              text: "YES",
              onPress:()=>clearLoactStorage()
            }
          ]);
      }

    const updatePriceClicked = (item)=>{
      setSelectedItem(item);
      setUpdatePrice(item.price);
      setShowPriceModal(true);
    }

    const setNewPrice = async() =>{
        let user = JSON.parse(authentication.state.user);
        let token = user.token;

        var API_URL = Urls.IngredientsUpdate;
        axios.post(API_URL, {
          id:selectedItem.id,
          price:updatePrice
        },{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
          .then((response) => {
            if (response.data.success) {
              administration.dispatch({ type: 'LOADING_START' });
              setShowPriceModal(false);
              loadIngredients();
            }
          })
          .catch((error) => {
            if (error.response)
              alert(" " + error.response.data.message);
            else
              alert(" " + error);
          });
    }

    const cameraPicker = () =>{
      setPhotoModal(false)
      const options = {
          options:{
              mediaType: 'Photo'
          }
      };
      launchCamera(options, response=>{
          if(!response.didCancel && !response.error)
              setPhoto(response.assets[0]);
      })
  }  

  const galleryPicker = () =>{
    setPhotoModal(false)
      const options = {
          options:{
              mediaType: 'Photo'
          }
      };
      launchImageLibrary(options, response=>{
          if(!response.didCancel && !response.error)
              setPhoto(response.assets[0]);
      })
  }

  const ingredientAdd = async() =>{
    if(!photo || !newName || !newPrice || !newCalories || !newWeight)
      alert("can't add empty fields")
    else{
      let user = JSON.parse(authentication.state.user);
      let token = user.token;
      
      let formData = new FormData();
      formData.append('photo',{
        uri: photo.uri,
        type: photo.type,
        name: photo.fileName
      });

      formData.append('category', selectedPicker);
      formData.append('name', newName);
      formData.append('price', newPrice);
      formData.append('calories', newCalories);
      formData.append('weight', newWeight);

      var API_URL= Urls.Ingredients;
      axios({
        url: API_URL,
        method: 'PATCH',
        data: formData,
        headers: {
          'Authorization' : `Bearer ${token}`,
          'Content-Type': `multipart/form-data`,
        },
        transformRequest: (data, error) => {
          return formData;
        }
      })
      .then((response)=>{
        if(response.data.success){
         setIngredients(prev=> [...prev, {
           id: response.data.id, 
           name: newName,
           category: selectedPicker,
           calories: newCalories, 
           weight: newWeight,
           price: newPrice,
           image: response.data.image 
          }]) 

          setAddIngModal(false);
          setNewName("");
          setNewPriceForm("");
          setNewCalories("");
          setNewWeight("");
          setSelectedPicker(1);
          setPhoto(null);
        }
        else
          alert(response.data.message);
      })
      .catch((error)=>{
        if (error.response) {
          //response status is an error code
          console.log(error.response.status);
        }
        else if (error.request) {
          //response not received though the request was sent
          console.log(error.request);
        }
        else {
          //an error occurred when setting up the request
          console.log(error.message);
        }
      });
    }
  }

    return(
      !administration.state.isLoading
      ?(
        categories == null ?
        <>
          <View style={{alignItems:'center'}}>
            <Text style={{color: Colors.darkColor}}>No ingredients</Text>
          </View>
        </>
        :
      <>
        {/* update Price modal */}
        <Modal
          isVisible={showPriceModal}
          style={{margin:0, justifyContent:'flex-end'}}
          onBackButtonPress={()=>setShowPriceModal(!showPriceModal)}
          onBackdropPress={()=>setShowPriceModal(!showPriceModal)}
          >

            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Update Price</Text>
              <TextInput      
                  placeholder='Price' 
                  style={styles.modalInput}
                  onChangeText={(text)=>setUpdatePrice(text)}
                  placeholderTextColor={Colors.lightDark}
                  defaultValue={updatePrice}
                  />
              <TouchableOpacity style={styles.buttonContainer} onPress={setNewPrice}>
                  <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>
            </View>

        </Modal>

        {/* add ingredient modal */}
        <Modal
          isVisible={addIngModal}
          style={{margin:0, justifyContent:'flex-end'}}
          onBackButtonPress={()=>setAddIngModal(!addIngModal)}
          onBackdropPress={()=>setAddIngModal(!addIngModal)}
          >

            <ScrollView style={styles.fullModalContainer}>
              <Text style={styles.fullModalTitle}>Add Ingredient</Text>
              {
                photo != null ? 
                <Image 
                  source={{uri:`${photo.uri}`}} 
                  style={{
                    width:120, 
                    height:120, 
                    borderRadius:50,
                    alignSelf:'center',
                    marginTop:10
                  }}/>

                  :
                  <MaterialCommunityIcons 
                    name={'camera-outline'} 
                    color={Colors.selectedColor} 
                    size={35} 
                    style={{
                      alignSelf:'center', 
                      marginTop:20
                    }}/>
              }

              <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>setPhotoModal(true)}>
                <Text 
                  style={{
                    color:Colors.selectedColor, 
                    fontWeight:'bold', 
                    fontSize:18,
                    marginTop:10
                    }}>
                      Add Photo
                </Text>
              </TouchableOpacity>

              <Picker
                    selectedValue={selectedPicker}
                    style={{
                      width: 300, 
                      alignSelf:'center', 
                      backgroundColor:'#fff', 
                      color:Colors.selectedColor,
                      marginTop:10
                     }}
                    onValueChange={(itemValue) => setSelectedPicker(itemValue)}
                    dropdownIconColor={Colors.selectedColor}
                >
                    {categories.map(item=> item.id!=0 && <Picker.Item label={item.name} value={item.id} key={`item ${item.id}`}/>)}
                </Picker>
              <TextInput      
                  placeholder='Name' 
                  style={styles.fullModalInput}
                  onChangeText={(text)=>setNewName(text)}
                  placeholderTextColor={Colors.lightDark}
                  defaultValue={newName}
                  />

              <TextInput      
                  placeholder='Price' 
                  style={styles.fullModalInput}
                  onChangeText={(text)=>setNewPriceForm(text)}
                  placeholderTextColor={Colors.lightDark}
                  defaultValue={newPrice}
                  />

              <TextInput      
                  placeholder='Calories' 
                  style={styles.fullModalInput}
                  onChangeText={(text)=>setNewCalories(text)}
                  placeholderTextColor={Colors.lightDark}
                  defaultValue={newCalories}
                  />

              <TextInput      
                  placeholder='Weight' 
                  style={styles.fullModalInput}
                  onChangeText={(text)=>setNewWeight(text)}
                  placeholderTextColor={Colors.lightDark}
                  defaultValue={newWeight}
                  />
              <TouchableOpacity style={styles.buttonContainer} onPress={ingredientAdd}>
                  <Text style={[styles.buttonText, {fontSize:17}]}>Add</Text>
              </TouchableOpacity>
            </ScrollView>

        </Modal>


        {/* photo option modal */}
        <Modal
            isVisible={photoModal}
            animationIn={'bounceInUp'}
            animationOut={'bounceOutDown'}
            onBackButtonPress={()=>setPhotoModal(false)}
            onBackdropPress={()=>setPhotoModal(false)}
            style={{margin:0, justifyContent:'flex-end'}}>
                <View style={{
                    width:'100%', 
                    height: 150, 
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:Colors.lightColor,
                    borderTopLeftRadius:10,
                    borderTopRightRadius:10
                    }}
                >
                    <TouchableOpacity onPress={cameraPicker}>
                        <Text style={{
                            color:Colors.selectedColor, 
                            fontWeight:'bold',
                            fontSize:16
                        }}>
                            Open Camera
                        </Text>
                    </TouchableOpacity>
                    <View 
                        style={{
                            height:0.5,
                            width:'100%',
                            backgroundColor:Colors.lightDark,
                            marginVertical:15
                        }}
                    />
                    <TouchableOpacity onPress={galleryPicker}>
                        <Text style={{
                            color:Colors.selectedColor, 
                            fontWeight:'bold',
                            fontSize:16
                        }}>
                            Choose From Gallery
                        </Text>
                    </TouchableOpacity>
                </View>
        </Modal>

        {/* header*/}
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>
            Admin
          </Text>

          <TouchableOpacity onPress={logoutAlert} >
            <Ionicons name={"exit-outline"} color={Colors.lightColor} size={35} />
          </TouchableOpacity>
        </View>

        {/* search bar */}
        <View style={styles.searchBarContainer}>
            <View style={styles.searchBar}>
                <Icon 
                    name={"search-web"} 
                    size={25} 
                    color={Colors.lightDark} 
                    style={{marginHorizontal:5}}
                    />

                <TextInput 
                    placeholder='Search'
                    style={styles.searchBarInput}
                    placeholderTextColor={Colors.lightDark}
                    defaultValue={search}
                    onChangeText={(text)=>setSearch(text)}
                    />
            </View>
          </View>

        {/* categories */}
        <View style={styles.categoriesContainer}>

          {/* selected category */}
          <View style={styles.selectedCategory}>
            <Text style={styles.categoryText}>
              {selectedCategory.name}
            </Text>
          </View>

         <FlatList 
            data={categories.filter(item=>item.id != selectedCategory.id)}
            keyExtractor={(item)=>`item-${item.id}`}
            renderItem={
              ({item})=>
                <TouchableOpacity style={styles.allCategories} onPress={()=>setSelectedCategory(item)}>
                  <Text style={styles.categoryText}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
            }
            horizontal
            showsHorizontalScrollIndicator={false}
            />
        </View>
        
        {/* ingredients */}
        <View style={{flex:1}}>
        <FlatList 
            data={
                showIngredients.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
            }
            extraData={showIngredients}
            numColumns={2}
            key={2}
            keyExtractor={(item)=>`ingredient-${item.id}`}
            renderItem={
              ({item})=>
                <TouchableOpacity style={styles.ingredientContainer} onPress={()=>updatePriceClicked(item)}>

                  <Image 
                    source={{uri:URL+'/public/ingredients/'+item.image}}
                    style={{
                      width:'100%', 
                      height:150, 
                      borderRadius:5
                      }}
                      />

                  <Text style={styles.ingredientName}>
                    {item.name}
                  </Text>

                  <Text style={styles.label}>
                    Price: 
                    <Text style={styles.ingredientPrice}>
                      {`  ${item.price}`}
                    </Text>
                  </Text>
                  
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>
                      Category:   
                    </Text>
                    <Text style={styles.ingredientCategory}>
                        {item.category}
                    </Text>
                  </View>
                  
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>
                      Quantity:   
                    </Text>
                    <Text style={styles.ingredientCategory}>
                        {item.weight}
                    </Text>
                  </View>
                </TouchableOpacity>
            }

            ListEmptyComponent={
              <Text style={{color:Colors.darkColor}}>
                No item found
              </Text>
            }
            ListFooterComponent={<View/>}
            ListFooterComponentStyle={{height:200}}
            />
        </View>

        <TouchableOpacity style={styles.editButton} onPress={()=>setAddIngModal(true)}>
          <MaterialCommunityIcons name={'plus-thick'} color={'#fff'} size={30} />
        </TouchableOpacity>
      </>)
      :
      <ActivityIndicator />
    );
};

export default Home;