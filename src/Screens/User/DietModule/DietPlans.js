import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native';
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
        else{
          setRec(null);
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
    <View style={styles.root}>
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

        {/* button to add new recipe */}
        <TouchableOpacity
          style={{alignItems: 'center', marginTop: 3, marginBottom: 5}}
          onPress={() => navigation.navigate('New')}>
          <Text style={{color: Colors.minorColor, fontWeight: 'bold'}}>
            Add new recipe
          </Text>
        </TouchableOpacity>
      </View>
      {mealTab == 1 && !loading &&
        (!rec ? (
          <Text style={{color: '#000'}}>no recipie found</Text>
        ) : (
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
            keyExtractor={(item, index) => `recipie-${index}`}
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
          keyExtractor={(item, index) => `recipie-${index}`}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{height: 200}}
        />
      )}

      {/* floating action button to create new workout plan */}
      <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          position: 'absolute',
          zIndex: 1,
          backgroundColor: Colors.primary,
          borderRadius: 30,
          right: 10,
          bottom: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('plan')}>
        <Image
          source={require('../../../Assets/dietPlan.png')}
          resizeMode="contain"
          style={{height: 60, width: 60, borderRadius:30}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root:{
    flex:1
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
});

export default DietPlans;
