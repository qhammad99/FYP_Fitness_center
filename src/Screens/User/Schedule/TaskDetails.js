import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React from 'react';
import Colors from '../../../colors/Colors';

export default function TaskDetails({route}) {
  const data = [
    {
      id: 1,
      name: 'Workout/Recipe Name',
      calories: 123,
    },
    {
      id: 2,
      name: 'Workout/Recipe Name',
      calories: 123,
    },
    {
      id: 3,
      name: 'Workout/Recipe Name',
      calories: 123,
    },
  ];

  const renderDetails = ({item, index}) => {
    return(
      <View>
        <View style={{marginTop: 5}}>
        <Text style={{color: 'black'}}>{item.name}</Text>
        <Text style={{color: 'black'}}>Calories: {item.calories}</Text>
        </View>
        
      </View>
    )
  }

  const {TaskName, TaskImage, Category} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={{width: '91%', height: 200}}
          resizeMode="stretch"
          source={TaskImage}
        />
      </View>

      <View style={styles.textView}>
        <Text style={{color: '#E26F1E', fontSize: 20, fontWeight: 'bold'}}>
          {TaskName}
        </Text>
      </View>

      <View style={styles.detailsView}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Task Category:</Text>
        <Text style={{color: 'black', paddingLeft: 10}}>{Category}</Text>
      </View>

      <View style={styles.detailsView}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>
          Task Start Time:{' '}
        </Text>
        <Text style={{color: Colors.primary}}>00:00:00</Text>
      </View>

      <View style={styles.detailsView}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>
          Task Finish Time:{' '}
        </Text>
        <Text style={{color: Colors.primary}}>00:00:00</Text>
      </View>

      <View style={{marginStart: 30}}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Workouts/Recipes in Task
        </Text>
      </View>
      <View style={[styles.detailsView, {height: 150}]}>
        <FlatList data={data} renderItem={renderDetails}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  detailsView: {
    backgroundColor: '#f2f3f8',
    height: 50,
    width: 350,
    borderRadius: 10,
    borderWidth: 1,
    marginStart: 30,
    borderColor: '#E26F1E',
    marginTop: 20,
    alignItems: 'center',
    paddingStart: 10,
    flexDirection: 'row',
  },
});
