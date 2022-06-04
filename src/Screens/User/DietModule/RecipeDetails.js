import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const RecipDetails = ({route}) => {
  const {recipeName, calories, recipeImage, recipeIngredients, recipePrice, foodQuantity} =
    route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.headerImage} source={recipeImage} />
      </View>

      <View style={styles.recipeNameView}>
        <Text style={styles.recipeNameText}>{recipeName}</Text>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'grey', fontWeight: 'bold'}}>
          {' '}
          ──────────────────────────
        </Text>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.infoText}>{calories}</Text>
        <Text style={styles.infoText}>{foodQuantity}</Text>
        <Text style={styles.infoText}>{recipePrice}</Text>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'grey', fontWeight: 'bold'}}>
          {' '}
          ──────────────────────────
        </Text>
      </View>

      <View style={styles.ingredientsView}>
        <Text style={{color: '#E26F1E', fontSize: 20, fontWeight: 'bold'}}>
          Ingredients
        </Text>
        <View style={styles.insideIngredients}>
          <Text style={{color: 'black'}}>{recipeIngredients}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  headerImage: {
    height: 250,
    width: 250,
    borderRadius: 10,
  },
  recipeNameView: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipeNameText: {
    color: '#E26F1E',
    fontSize: 22,
    fontWeight: 'bold',
  },
  infoView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40
  },
  infoText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  ingredientsView: {
    paddingHorizontal: 20,
  },
  insideIngredients: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    height: 350,
    padding: 5,
    marginTop: 8
  },
});

export default RecipDetails;
