import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import CustomSwitch from '../../../components/DietComponents/CustomSwitch';
import Colors from '../../../colors/Colors';
import {AuthContext} from '../../../Context/Providers/AuthProvider';
import Recipes from '../../../components/DietComponents/Recipes';
import Urls from '../../../config/env';
import axios from 'axios';

const DietPlans = ({navigation}) => {
  const authentication = useContext(AuthContext);
  const user = JSON.parse(authentication.state.user);

  const [rec, setRec] = useState(null);
  const [mealTab, setMealTab] = useState(1);
  const [loading, setLoading] = useState(true);

  const adding = () => {
    let token = user.token;
    setLoading(true);

    var API_URL = mealTab == 1 ? Urls.MyRecipies : Urls.GeneralRecipies;
    axios
      .get(API_URL, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        if (response.data.success) {
          setRec(response.data.recipies);
        }
        setLoading(false);
      })
      .catch(error => {
        alert(' ' + error);
        setLoading(false);
      });
  };

  useEffect(() => {
    adding();
  }, []);

  useEffect(() => {
    adding();
  }, [mealTab]);

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
          option1="My recipie"
          option2="General recipies"
          onSelectSwitch={value => setMealTab(value)}
        />

        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginTop: 5,
            paddingHorizontal: 40,
          }}>

            {/* button to add new recipe */}
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 3,
              marginBottom: 5,
              height: 40,
              width: 100,
              borderRadius: 20,
              backgroundColor: Colors.minorColor,
            }}
            onPress={() => navigation.navigate('New')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Add Recipe</Text>
          </TouchableOpacity>


          {/* button to add new diet plan */}
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 3,
              marginBottom: 5,
              height: 40,
              width: 100,
              borderRadius: 20,
              backgroundColor: Colors.minorColor,
            }}
            onPress={() => navigation.navigate('plan')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>New Plan</Text>
          </TouchableOpacity>
        </View>
      </View>
      {mealTab == 1 &&
        (!rec ? (
          <Text style={{color: '#000'}}>no recipie found</Text>
        ) : (
          <FlatList
            data={rec}
            renderItem={({item}) => {
              return (
                <Recipes
                  image={require('../../../images/DietImages/cherrySmoothie.jpg')}
                  text1={item.name}
                  item={item}
                  text2={`Calories: ${item.calorie}`}
                  price="Price: 200$"
                  ingredients={
                    'Oat milk\nAlmond butter\nCocoa powder\nVanilla extract\nDark sweet cherries\nBrown sugar'
                  }
                  quantity="Quantity: 1 Serving"
                />
              );
            }}
            ListEmptyComponent={() => (
              <Text
                style={{
                  color: '#000',
                  alignSelf: 'center',
                  fontSize: 18,
                }}>
                No recpie
              </Text>
            )}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{height: 100}}
          />
        ))}
      {mealTab == 2 && !loading && (
        <FlatList
          data={rec}
          renderItem={({item}) => {
            return <Recipes item={item} />;
          }}
          ListEmptyComponent={() => (
            <Text
              style={{
                color: '#000',
                alignSelf: 'center',
                fontSize: 18,
              }}>
              No recpie
            </Text>
          )}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{height: 200}}
        />
      )}
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
