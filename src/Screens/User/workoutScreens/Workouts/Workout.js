import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {AuthContext} from '../../../../Context/Providers/AuthProvider';
import Urls from '../../../../config/env';
import styles from './styles';
import {URL} from '@env';
import axios from 'axios';

export default function Workout({route}) {
  const item = route.params;
  const authentication = useContext(AuthContext);
  const user = JSON.parse(authentication.state.user);

  const [workouts, setWorkouts] = useState(null);

  const addWorkouts = async() => {
    let token = user.token;
  
    var API_URL=`${Urls.WorkoutsByCategory}${item.id}`;
    axios.get(API_URL,{
        headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
        }
    })
    .then((response)=>{
        if(response.data.success){
          setWorkouts(response.data.workouts);
        }
    })
    .catch((error)=>{
          alert(" "+ error);
      });
  }

  useEffect(()=>{
    addWorkouts();
  },[]);


  return (
    <View style={styles.container}>

      {/* header section, containing workout name and header image */}
      <View style={styles.header}>
        <Image source={{uri:URL+'/public/workoutCategory/'+item.img_file}} style={styles.headerImage} />
        <Text style={styles.headerText}> {item.name} </Text>
      </View>
      
      {
        workouts &&
        <FlatList
          data={workouts}
          renderItem={({ item }) => {
            return (
              <View style={styles.exercises}>
              <View style={styles.insideExercises}>
                {/* name of the exercises come here */}
    
                <Text style={styles.exeText}>{item.name}</Text>
    
                {/* add button */}
                <TouchableOpacity style={styles.startButton}>
                  <Text style={styles.startButtonText}> Add</Text>
                </TouchableOpacity>
              </View>
    
              {/* number of sets and repetitions */}
              <View>
                <Text style={{color: 'grey', paddingStart: 10}}>
                  sets: {item.number_of_sets}, repititions: {item.repititions}
                </Text>
              </View>
    
              {/* calories in the workouts */}
              <View>
                <Text style={{color: 'grey', paddingStart: 10}}>
                  Calories: {item.calorie}
                </Text>
              </View>
            </View>
            )
          }}
          ListEmptyComponent={() =>
            <Text style={{
              color: Colors.darkColor,
              alignSelf: 'center',
              fontSize: 18
            }}>
              No workouts
            </Text>
          }
          ListFooterComponent={<View/>}
          ListFooterComponentStyle={{height:50}}
        />
      }
    </View>
  );
}


