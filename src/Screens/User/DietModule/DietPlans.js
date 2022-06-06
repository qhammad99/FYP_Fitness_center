import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomSwitch from '../../../components/DietComponents/CustomSwitch';
import Colors from '../../../colors/Colors';

import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DietPlans = ({navigation}) => {
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
        <TouchableOpacity
          style={{alignItems: 'center', marginTop: 3, marginBottom: 5}}
          onPress={() => navigation.navigate('New')}>
          <Text style={{color: Colors.minorColor, fontWeight: 'bold'}}>
            Click to add new recipe
          </Text>
        </TouchableOpacity>
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
