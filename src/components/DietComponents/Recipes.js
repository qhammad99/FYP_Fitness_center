import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Recipes = ({image, text1, text2, ingredients, price, quantity}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <Image
          source={image}
          style={{
            height: 55,
            width: 55,
            borderRadius: 10,
            marginRight: 8,
            borderWidth: 0.5,
            borderColor: 'grey',
          }}
        />
        <View>
          <Text style={{color: '#E26F1E', fontSize: 15, fontWeight: 'bold'}}>
            {text1}
          </Text>
          <Text style={{color: 'grey'}}>{text2}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#E26F1E',
          height: 40,
          width: 80,
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() =>
          navigation.navigate('Recipe', {
            recipeName: text1,
            calories: text2,
            recipeImage: image,
            recipeIngredients: ingredients,
            recipePrice: price,
            foodQuantity: quantity
          })
        }>
        <Text style={{color: 'white'}}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Recipes;
