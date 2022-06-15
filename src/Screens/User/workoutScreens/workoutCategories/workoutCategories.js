import React, {useState, useEffect, useContext} from 'react';
import styles from './styles';
import {Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import {AuthContext} from '../../../../Context/Providers/AuthProvider';
import Colors from '../../../../colors/Colors';
import Urls from '../../../../config/env';
import {URL} from '@env';
import axios from 'axios';

export default function workoutCategories({navigation}) {
  const authentication = useContext(AuthContext);
  const user = JSON.parse(authentication.state.user);

  const [categories, setCategories] = useState(null);

  const addCategories = async() => {
    let token = user.token;
  
    var API_URL=Urls.WorkoutCategories;
    axios.get(API_URL,{
        headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
        }
    })
    .then((response)=>{
        if(response.data.success){
          setCategories(response.data.category);
        }
    })
    .catch((error)=>{
          alert(" "+ error);
      });
}
  useEffect(()=>{
    addCategories();
  },[]);

  return (
    <View style={styles.container}>
      {/* title */}
      <View style={styles.categoriesWrapper}>
        <Text style={styles.sectionTitle}>Workout Categories</Text>
      </View>

      {
        categories &&
        <FlatList
          data={categories}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.item}
                onPress={() =>
                  navigation.navigate('Workouts', item)
                }>
                <Image
                  source={{uri:URL+'/public/workoutCategory/'+item.img_file}}
                  style={styles.imageStyle}
                />
                <Text style={styles.textStyle}>{item.name} workout</Text>
              </TouchableOpacity>
            )
          }}
          ListEmptyComponent={() =>
            <Text style={{
              color: Colors.darkColor,
              alignSelf: 'center',
              fontSize: 18
            }}>
              No category
            </Text>
          }
          keyExtractor={(item, index) => `workoutC-${index}`}
          ListFooterComponent={<View/>}
          ListFooterComponentStyle={{height:100}}
        />
      }

      {/* floating action button to create new workout plan */}
      <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          position: 'absolute',
          zIndex: 1,
          backgroundColor: Colors.primary,
          borderRadius: 50,
          right: 10,
          bottom: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Create', {data: categories})}>
        <Image
          source={require('../../../../Assets/createPlan.png')}
          resizeMode="contain"
          style={{height: 30, width: 30, tintColor: 'white'}}
        />
      </TouchableOpacity>
    </View>
  );
}
