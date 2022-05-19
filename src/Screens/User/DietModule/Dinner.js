import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Recipes from '../../../components/DietComponents/Recipes';

const Dinner = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Recipes
          image={require('../../../images/DietImages/khichri.png')}
          text1="Khichri with Raita"
          text2="Calories: 375"
          price="Price: 200$"
          ingredients={
            'Green Moong Dal\nRice\nOnion\nCoconut\nSalt\nCardamom seeds\nCinnamon Stick\nCumin Seeds\nCashew Nuts\nOlive oil'
          }
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/fish.png')}
          text1="Fish Curry"
          text2="Calories: 309"
          price="Price: 200$"
          ingredients={
            'Fish\nGinger Garlic paste\nTurmeric\nRed chili powder\nOil\nCumin\nTomatoes\nOnions'
          }
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/palak.jpg')}
          text1="Palak Paneer"
          text2="Calories: 350"
          price="Price: 200$"
          ingredients={
            'Paneer\nPalak\nOil\nGreen chilis\nTomatoes\nOnions\nPuree\nGinger garlic paste\nSalt\nGaram masala\nFenugreek leaves\nCumin Seeds\nGreen Cardamoms\nCinnamon'
          }
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/tikka.jpg')}
          text1="Chicken Tikka Masala"
          text2="Calories: 548"
          price="Price: 200$"
          ingredients={
            'Chicken\nYogurt\nCumin powder\nTurmeric powder\nGinger\nGarlic\nRed chili\nFenugreek leaves\nSalt\nOnion\nTomato\nCinnamon powder\nOil\nCashew Nuts\nCoriander powder'
          }
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/groundBeef.jpg')}
          text1="Ground Beef & Potatoes Skillet"
          text2="Calories: 322"
          price="Price: 200$"
          ingredients={
            'Olive oil\nBeef\nCumin\nSalt\nPepper\nPotatoes\nOnion\nBell pepper\ngarlic\nlacinato kale\ntomatoes\n'
          }
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/vegan.jpg')}
          text1="Vegan Coconut Chickpea Curry"
          text2="Calories: 471"
          price="Price: 200$"
          ingredients={
            'Avocado oil\nOnion\nBell pepper\nZucchini\nCan chickpeas\nCoconut curry simmer sauce\nVegetable broth\nBaby spinach\nBrown rice'
          }
          quantity="Quantity: 1 Serving"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default Dinner;
