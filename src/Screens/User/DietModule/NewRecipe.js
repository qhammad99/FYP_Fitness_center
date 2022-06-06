import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Colors from '../../../colors/Colors';

export default function NewRecipe() {
  return (
    <View style={styles.container}>
      {/* header title  */}
      <View style={{marginTop: 40, alignItems: 'center'}}>
        <Text style={{color: 'black', fontSize: 24, fontWeight: 'bold'}}>
          Add Your New Recipe
        </Text>
      </View>

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
        />

        {/* Quantity section */}
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Quantity
        </Text>
        <TextInput
          placeholder="Enter Recipe Quantity"
          placeholderTextColor="grey"
          style={styles.input}
        />

        {/* recipe price section */}
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Recipe Price
        </Text>
        <TextInput
          placeholder="Enter Recipe Price"
          placeholderTextColor="grey"
          style={styles.input}
        />

        {/* recipe ingredients section */}
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Recipe Ingredients
        </Text>
        <TextInput
          placeholder="Enter Recipe Ingredients"
          placeholderTextColor="grey"
          style={styles.input}
        />

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
});
