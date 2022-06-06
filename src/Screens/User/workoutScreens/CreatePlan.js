import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../../../colors/Colors';

export default function CreatePlan({route}) {
  const {data} = route.params;

  // render item function for FlatList

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.exercises}>
        <View style={styles.insideExercises}>
          {/* name of the exercises come here */}

          <Text style={styles.exeText}>{item.title}</Text>

          {/* add button */}
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.startButtonText}> Add</Text>
          </TouchableOpacity>
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
            Calories: {item.calories}
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

      {/* plan name view */}
      <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
          Plan Name
        </Text>
        <TextInput
          placeholder="Enter Plan Name"
          placeholderTextColor="grey"
          style={styles.input}
        />

        {/* plan image comes here */}
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Plan Image
        </Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: 'grey'}}>Select image for your plan</Text>
          <TouchableOpacity>
            <Image
              source={require('../../../Assets/profileImageLogo.png')}
              resizeMode="contain"
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View>

        {/* select workouts using flatlist */}
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
          <FlatList data={data} renderItem={renderItem} />
        </View>

        {/* create plan button */}
        <View style={{alignItems: 'center', marginTop: 100}}>
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
            }}>
            <Text style={{color: 'white'}}>Create Plan</Text>
          </TouchableOpacity>
        </View>
      </View>
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
