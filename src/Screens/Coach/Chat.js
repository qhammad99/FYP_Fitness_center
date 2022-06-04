import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';

export default function Chat(props) {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 20}}>
        <View style={styles.user1View}>
          <View
            style={{
              height: 30,
              width: 60,
              backgroundColor: '#E26F1E',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
            }}>
            <Text style={styles.user1}>Hello</Text>
          </View>
        </View>

        <View style={styles.user2View}>
          <View
            style={{
              height: 30,
              width: 130,
              backgroundColor: 'grey',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
            }}>
            <Text style={styles.user2}>How are you doing?</Text>
          </View>
        </View>

        <View style={styles.user1View}>
          <View
            style={{
              height: 40,
              width: 170,
              backgroundColor: '#E26F1E',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
            }}>
            <Text style={styles.user1}>I am doing great. What about you?</Text>
          </View>
        </View>

        <View style={styles.user2View}>
          <View
            style={{
              height: 30,
              width: 100,
              backgroundColor: 'grey',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
            }}>
            <Text style={styles.user2}>All good here</Text>
          </View>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          position: 'absolute',
          bottom: 10,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <TextInput
          placeholder="Type your message"
          placeholderTextColor="grey"
          style={{
            color: 'black',
            borderRadius: 40,
            backgroundColor: '#fff',
            width: 360,
            paddingStart: 15,
            borderWidth: 1,
            borderColor: '#C0C0C0',
          }}
        />
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            borderColor: '#C0C0C0',
            borderWidth: 1,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#E26F1E'
          }}>
          <Image
            source={require('../../images/send.png')}
            resizeMode="contain"
            style={{tintColor: 'white', height: 30, width: 30, }}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  user1View: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 5,
  },
  user2View: {
    paddingHorizontal: 20,
  },
  user1: {
    color: 'white',
  },
  user2: {
    color: 'white',
  },
});
