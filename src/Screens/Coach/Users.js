import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

export default function Users({navigation}) {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Mr Thomas',
      image: require('../../images/user1.png'),
      message: 'Most recent message will show here',
    },
    {
      id: 2,
      name: 'Mr Butch',
      image: require('../../images/user2.jpg'),
      message: 'Most recent message will show here',
    },
    {
      id: 3,
      name: 'Spike',
      image: require('../../images/user3.jpg'),
      message: 'Most recent message will show here',
    },
    {
      id: 4,
      name: 'Jane Doe',
      image: require('../../images/user4.jpg'),
      message: 'Most recent message will show here',
    },
    {
      id: 5,
      name: 'John Doe',
      image: require('../../images/user5.jpg'),
      message: 'Most recent message will show here',
    },
  ]);

  const RenderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.parentView}
          onPress={() => navigation.navigate('Chat', {userName: item.name})}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={{width: 60, height: 60, marginRight: 15, borderRadius: 10}}
          />
          <View>
            <Text style={{color: '#262D37', fontSize: 16, fontWeight: 'bold'}}>
              {item.name}
            </Text>
            <Text style={{color: 'grey'}}>{item.message}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const Separator = () => {
    return (
      <View
        style={{
          backgroundColor: 'grey',
          height: 1,
          width: '80%',
          marginTop: 10,
          alignSelf: 'center',
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={RenderItem}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  parentView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 20,
    alignItems: 'center',
  },
});
