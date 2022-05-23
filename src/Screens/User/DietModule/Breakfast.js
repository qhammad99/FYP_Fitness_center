import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Recipes from '../../../components/DietComponents/Recipes';

const Breakfast = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Recipes
          image={require('../../../images/DietImages/cherrySmoothie.jpg')}
          text1="Cherry Smoothie"
          text2="Calories: 232"
          price="Price: 200$"
          ingredients={
            'Oat milk\nAlmond butter\nCocoa powder\nVanilla extract\nDark sweet cherries\nBrown sugar'
          }
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/machaOats.png')}
          text1="Macha Oats with Berries"
          text2="Calories: 373"
          price="Price: 200$"
          ingredients={
            'Nonfat milk\nOld-fashioned oats\nMatcha powder\nChia seeds\nPure maple syrup\nBlueberries\nRaspberries\nSalt\nSliced almonds'
          }
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/strawSmoothie.jpg')}
          text1="Strawberry Peach Smoothie"
          text2="Calories: 170"
          price="Price: 200$"
          ingredients={
            'Apple juice\nYogurt\nCauliflower rice\nStrawberries\nPeaches\nGranulated sugar'
          }
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/eggParatha.png')}
          text1="Egg Paratha"
          text2="Calories: 198"
          price="Price: 200$"
          ingredients={
            'Wheat flour\nPotato\nPomegranate seeds\nGreen Chili\nSalt\nButter\nEggs\nOil'
          }
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/bananaPancakes.jpg')}
          text1="Banana Pancakes"
          text2="Calories: 124"
          price="Price: 200$"
          ingredients={'Eggs\nBanana\nPancakes'}
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/farro.jpg')}
          text1="Farro Porridge"
          text2="Calories: 240"
          price="Price: 200$"
          ingredients={'Unsweetened oat milk\nFarro\nSalt'}
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/lentile.jpg')}
          text1="Lentil & Goat Cheese Toast"
          text2="Calories: 282"
          price="Price: 200$"
          ingredients={
            'Goat cheese\nOlive sourdough bread\nFrench green lentils\nWalnuts'
          }
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/pecanButter.jpg')}
          text1="Pecan Butter & Pear Toast"
          text2="Calories: 209"
          price="Price: 200$"
          ingredients={'Pecan butter\nGrain bread\nPear'}
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/green.jpg')}
          text1="Green Smoothie"
          text2="Calories: 343"
          price="Price: 200$"
          ingredients={
            'Ripe banana\nbaby kale\nunsweetened vanilla almond milk\nripe avocado\nchia seeds\nhoney\nice cubes'
          }
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/Omelet.jpg')}
          text1="Omelet"
          text2="Calories: 232"
          price="Price: 200$"
          ingredients={
            'Eggs\nCheese\nSalt and pepper\nTomatoes\nRed onion\nHam'
          }
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/brownRice.jpg')}
          text1="Brown Rice Porridge"
          text2="Calories: 280"
          price="Price: 200$"
          ingredients={'Unsweetened oat milk\nBrown rice\nSalt'}
          quantity="Quantity: 1 Serving"
        />
        <Recipes
          image={require('../../../images/DietImages/cinamon.jpg')}
          text1="Cinnamon-Roll Oats"
          text2="Calories: 191"
          price="Price: 200$"
          ingredients={
            'Unsweetened nondairy milk\nOats\nLight brown sugar\nVanilla extract\nCinnamon\nSalt'
          }
          quantity="Quantity: 1 Serving"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 10,
    // marginBottom: 35
    paddingBottom: 160,
  },
});

export default Breakfast;
