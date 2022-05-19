import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomSwitch from '../../../components/DietComponents/CustomSwitch';

import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';


const DietPlans = () => {
  const [mealTab, setMealTab] = useState(1);
  const onSelectSwitch = value => {
    setMealTab(value);
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={{color: 'black', fontSize: 24, fontWeight: 'bold'}}>
          Diet Plans
        </Text>
      </View>

      <View style={{paddingHorizontal: 10}}>
        <CustomSwitch
          selectionMode={1}
          option1="Breakfast"
          option2="Lunch"
          option3="Dinner"
          onSelectSwitch={onSelectSwitch}
        />
      </View>
      {mealTab == 1 && <Breakfast />}
      {mealTab == 2 && <Lunch />}
      {mealTab == 3 && <Dinner />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
});

export default DietPlans;
