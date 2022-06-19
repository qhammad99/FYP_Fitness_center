import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { AuthContext } from '../../Context/Providers/AuthProvider';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../colors/Colors';
import Urls from '../../config/env';
import {URL} from '@env';
import axios from 'axios';

export default function Users({socket}) {
  const navigation = useNavigation();
  const authentication = useContext(AuthContext);
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [onlineUsers, setOnlineUsers] = useState(null);

  let user = JSON.parse(authentication.state.user);

  const addUsers = async() => {
    let token = user.token;

    if(!loading)
        setLoading(true);
  
    var API_URL=Urls.CoachClients;
    axios.get(API_URL,{
        headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
        }
    })
    .then((response)=>{
        if(response.data.success){
            setData(response.data.clients);
        }
        setLoading(false);
    })
    .catch((error)=>{
        if(error.response.status == 401)
          setLoading(false);
        else
          alert(" "+ error);
      });
  }

  useEffect(()=>{
    socket.emit('sending');
    socket.on('getUsers', users => setOnlineUsers(users));
  },[]);

  useEffect(() => {  
    addUsers();
  }, []);

  const RenderItem = ({item, index}) => {
    let onlineStatus = false;
    let finder;
    if(onlineUsers)
      finder = onlineUsers.find(user=>user.userId == item.user_id);
    if(finder)
      onlineStatus= true;

    return (
      <View>
        <TouchableOpacity
          style={styles.parentView}
          onPress={() => navigation.navigate('Chat', {user: item})}>
          <View>
            <Image
              source={{uri:URL+'/public/userImages/'+item.img_file}}
              resizeMode="contain"
              style={{width: 60, height: 60, marginRight: 15, borderRadius: 10}}
            />

            {/* online badge */}
            <View style={{
              width:15, 
              height:15, 
              backgroundColor:finder?'green':'grey', 
              position:'relative',
              left:50,
              bottom:10,
              borderRadius:7
              }}/>
          </View>

          <View>
            <Text style={{color: '#262D37', fontSize: 16, fontWeight: 'bold'}}>
              {item.name}
            </Text>
            {/* <Text style={{color: 'grey'}}>{item.message}</Text> */}
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
      {
        loading
        ?
        <ActivityIndicator />
        :
        <FlatList
          data={data}
          renderItem={RenderItem}
          ItemSeparatorComponent={Separator}
          ListEmptyComponent = {()=> 
            <Text style={{
                color: Colors.darkColor, 
                alignSelf:'center', 
                fontSize:18
            }}>
                No clients
            </Text>
          }
        />
      }
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
