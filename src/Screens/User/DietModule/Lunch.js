import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Recipes from '../../../components/DietComponents/Recipes';
const Lunch = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Recipes
          image={require('../../../images/DietImages/mixedVeg.jpg')}
          text1="Mixed Vegetable Curry"
          text2="Calories: 233"
          price="Price: 200$"
          ingredients={
            'Mixed frozen vegetables\nOnion\nTomatoes\nGreen chiles\nGinger\nGarlic\nVegetable oil\nCoriander\nCumin\nRed chili powder\nTurmeric\nGaram masala\nUnsweetened yogurt\nSalt'
          }
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/whiteBean.jpg')}
          text1="White Bean & Veggie Salad"
          text2="Calories: 360"
          price="Price: 200$"
          ingredients={
            'Salad greens\nVeggies\nWhite beans\nAvocado\nVinegar\nOlive oil\nSalt\nPepper'
          }
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/turkeyBurger.jpg')}
          text1="Greek Turkey Burger"
          text2="Calories: 376"
          price="Price: 200$"
          ingredients={
            'Spinach\nTurkey\nCheese\nGarlic powder\nOregano\nSalt\nPepper\nHamburger buns\nTzatziki\nCucumber\nRed onion'
          }
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/chickenStew.jpg')}
          text1="Chicken & White Bean Stew"
          text2="Calories: 493"
          price="Price: 200$"
          ingredients={
            'Cannellini beans\nChicken broth\nOnion\nCarrots\nRosemary\nCheese\nChicken breasts\nKale\nLemon juice\nSalt\nPepper\nOlive oil\nParsley leaves'
          }
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/grilledKabab.jpg')}
          text1="Grilled Chicken Kabab"
          text2="Calories: 350"
          price="Price: 200$"
          ingredients={
            'Greek yogurt\nChicken\nOlive oil\nPaprika\nCumin\nCinnamon\nRed pepper\nLemon\nLemon juice\nSalt\nBlack pepper\nRed onion'
          }
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/shrimp.jpg')}
          text1="Spicy Shrimp Tacos"
          text2="Calories: 421"
          price="Price: 200$"
          ingredients={
            'Olive oil\nShrimp\nShrimp seasoning\nSalt\nRed cabbage\ncilantro\nLime juice\nCorn Tortillas\nPico de gallo'
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

export default Lunch;
