import React, {useContext, useState, useEffect} from 'react';
import {
  View, 
  Text, 
  TouchableOpacity, 
  Alert, 
  TextInput, 
  FlatList, 
  ActivityIndicator,
  Image
} from 'react-native';
import { AuthContext } from '../../../Context/Providers/AuthProvider';
import { AdminContext} from '../../../Context/Providers/AdminProvider';
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

    const [showPriceModal, setShowPriceModal] = useState(false);
    const [updatePrice, setUpdatePrice] = useState("");

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

      if(categories != null){
        setSelectedCategory(categories[0]);
        loadIngredients();
      }
    },[categories]);

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
      setUpdatePrice(item.price);
      setShowPriceModal(true);
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
              <TouchableOpacity style={styles.buttonContainer} onPress={()=>console.log("price update")}>
                  <Text style={styles.buttonText}>Update</Text>
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
              selectedCategory.id == 0
              ?
              ingredients.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
              :
              ingredients.filter(item=>item.category == selectedCategory.name && item.name.toLowerCase().includes(search.toLowerCase()))
            }
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
      </>)
      :
      <ActivityIndicator />
    );
};

export default Home;