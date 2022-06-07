import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TextInput, TouchableOpacity} from 'react-native';
import { AuthContext } from '../../../Context/Providers/AuthProvider';
import Colors from '../../../colors/Colors';
import Urls from '../../../config/env';
import {URL} from '@env';
import axios from 'axios';

export default function CreatePlan({route, navigation}) {
  const {data} = route.params; //categories
  const authentication = useContext(AuthContext);
  const user = JSON.parse(authentication.state.user);

  const [workouts, setWorkouts] = useState(null);
  const [selectedId, setSelectedId] = useState([]);
  const [planName, setPlanName] = useState("");

  const addPlan=()=>{
    if(!planName || !selectedId)
      alert("can't add empty fields");
    else{
      let output=[];
      for(i=0; i<selectedId.length; i++){
        let keyValue={};
        keyValue["id"] = selectedId[i];
        output.push(keyValue);
      }

      let token = user.token;
  
      var API_URL=Urls.AddWorkoutPlan;
      axios.post(API_URL,{
        name: planName,
        workouts: output
      },{
          headers:{
          'Content-Type' : 'application/json',
          'Authorization' : `Bearer ${token}`
          }
      })
      .then((response)=>{
          if(response.data.success){
            navigation.navigate('Categories');
          }
      })
      .catch((error)=>{
            alert(" "+ error);
        });
    }
  }

  const addWorkouts = async() => {
    let token = user.token;
  
    var API_URL=Urls.AllWorkouts;
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

  // render item function for FlatList

  const renderItem = ({item, index}) => {
    const finder = selectedId.find(selected => selected == item.id);
    return (
      <View style={styles.exercises}>
        <View style={styles.insideExercises}>
          {/* name of the exercises come here */}

          <Text style={styles.exeText}>{item.name}</Text>

          {/* add button */}
          {!finder &&
            <TouchableOpacity style={styles.startButton} onPress={()=>setSelectedId([...selectedId, item.id])}>
              <Text style={styles.startButtonText}> Add</Text>
            </TouchableOpacity>
          }
        </View>

        {/* number of sets and repetitions */}
        <View>
          <Text style={{color: 'grey', paddingStart: 10}}>
            {item.sets} {item.repetitions}
          </Text>
        </View>

        {/* calories in the workouts */}
        <View>
          <Text style={{color: 'grey', paddingStart: 10}}>
            Calories: {item.calorie}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>

      {/* header title  */}
      <View style={{marginTop: 40, alignItems: 'center'}}>
        <Text style={{color: 'black', fontSize: 24, fontWeight: 'bold'}}>
          Create Your Workout Plan
        </Text>
      </View>

      {workouts &&
      // plan name view 
      <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
          Plan Name
        </Text>
        <TextInput
          placeholder="Enter Plan Name"
          placeholderTextColor="grey"
          style={styles.input}
          onChangeText={(text)=>setPlanName(text)}
        />

        {/* select workouts using flatlist  */}
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Select Workouts
        </Text>

        <View
          style={{
            alignItems: 'center',
            height: 240,
            backgroundColor: '#f2f3f8',
            borderRadius: 10,
            marginTop: 10,
          }}>
          <FlatList data={workouts} renderItem={renderItem} />
        </View>

        {/* create plan button */}
        <View style={{alignItems: 'center', marginTop: 50}}>
          <TouchableOpacity
            style={{
              bottom: 30,
              width: 300,
              height: 38,
              backgroundColor: Colors.primary,
              padding: 6,
              alignItems: 'center',
              borderRadius: 5,
              justifyContent: 'center'
            }}
            onPress={addPlan}>
            <Text style={{color: 'white'}}>Create Plan</Text>
          </TouchableOpacity>
        </View>
      </View>
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    color: 'black',
    height: 45,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 5,
  },
  exercises: {
    backgroundColor: '#f2f3f8',
    height: 68,
    width: 350,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E26F1E',
    marginTop: 15,
  },
  insideExercises: {
    alignItems: 'flex-start',
    borderColor: '#E26F1E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    height: 20,
  },
  exeText: {
    paddingStart: 10,
    color: 'black',
  },
  startButton: {
    width: 70,
    height: 30,
    borderColor: '#fff',
    backgroundColor: '#E26F1E',
    borderWidth: 2,
    borderRadius: 15,
    marginEnd: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
  },
});
