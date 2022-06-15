import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import Colors from '../../../colors/Colors';

export default function NewRecipe() {
  const DATA = [
    {
      id: 1,
      title: 'Ingredient 1',
    },
    {
      id: 2,
      title: 'Ingredient 2',
    },
    {
      id: 3,
      title: 'Ingredient 3',
    },
  ];

  // render ingredients function to render ingredients for FlatList
  const renderIngredients = ({item, index}) => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, alignItems: 'center',}}>
        <Text style={{color: 'black'}}>{item.title}</Text>
        
        <View style={{alignItems: 'center', justifyContent: 'center',}}>
        <TextInput
          placeholder="quantity"
          placeholderTextColor="grey"
          style={{height: 35, width: 80, borderWidth: 1, borderColor: 'grey', color: 'black', marginTop: 5, borderRadius: 10}}
        />
        </View>
        

        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}> Add</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>

      {/* recipe name  */}
      <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
          Recipe Name
        </Text>
        <TextInput
          placeholder="Enter Recipe Name"
          placeholderTextColor="grey"
          style={styles.input}
        />

        {/* recipe image comes here */}
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Recipe Image
        </Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: 'grey'}}>Select image for your recipe</Text>
          <TouchableOpacity>
            <Image
              source={require('../../../Assets/profileImageLogo.png')}
              resizeMode="contain"
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View>

        {/* Calories section  */}
        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
          Calories
        </Text>
        <TextInput
          placeholder="Enter Recipe Calories"
          placeholderTextColor="grey"
          style={styles.input}
          editable={false}
        />

        {/* recipe ingredients section */}
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Select Recipe Ingredients
        </Text>
        <View style={[styles.input, {height: 100}]}>
          <FlatList data={DATA} renderItem={renderIngredients} />
        </View>

        {/* add recipe button */}
        <View style={{alignItems: 'center', marginTop: 60}}>
          <TouchableOpacity
            style={{
              bottom: 30,
              width: 300,
              height: 38,
              backgroundColor: Colors.primary,
              padding: 6,
              alignItems: 'center',
              borderRadius: 5,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white'}}>Add Recipe</Text>
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
