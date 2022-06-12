import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../../Context/Providers/AuthProvider';
import {URL} from '@env';
import Urls from '../../../config/env';
import axios from 'axios';

const RecipDetails = ({route}) => {
  const item = route.params;
  const authentication = useContext(AuthContext);
  const user = JSON.parse(authentication.state.user);

  const [ing, setIng] = useState(null);

  const addIngredients = async () => {
    let token = user.token;

    var API_URL = Urls.RecipieIngredients + item.recipie_id;
    axios
      .get(API_URL, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        if (response.data.success) {
          setIng(response.data.ingredients);
        }
      })
      .catch(error => {
        alert(' ' + error);
      });
  };
  useEffect(() => {
    addIngredients();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.headerImage}
          source={{uri: URL + '/public/recipies/' + item.image}}
        />
      </View>

      <View style={styles.recipeNameView}>
        <Text style={styles.recipeNameText}>{item.name}</Text>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'grey', fontWeight: 'bold'}}>
          {' '}
          ──────────────────────────
        </Text>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.infoText}>{`calories: ${item.calorie}`}</Text>
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
        {ing && (
          <View style={styles.insideIngredients}>
            <FlatList
              data={ing}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{color: 'black'}}>{item.name}</Text>

                    {/* ingredients quantity comes here */}
                    <Text style={{color: 'black'}}>quantity</Text>
                  </View>
                );
              }}
              ListEmptyComponent={() => (
                <Text
                  style={{
                    color: Colors.darkColor,
                    alignSelf: 'center',
                    fontSize: 18,
                  }}>
                  No category
                </Text>
              )}
              ListFooterComponent={<View />}
              ListFooterComponentStyle={{height: 100}}
            />
          </View>
        )}
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
    justifyContent: 'center',
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
    marginTop: 8,
    paddingBottom: 150,
  },
});

export default RecipDetails;
