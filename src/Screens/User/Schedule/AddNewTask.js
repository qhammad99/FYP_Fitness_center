import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React, {useState, useContext} from 'react';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';
import userPhoto from '../../../Context/Actions/userPhoto';
import {AuthContext} from '../../../Context/Providers/AuthProvider';
import Colors from '../../../colors/Colors';
import {URL} from '@env';

export default function AddNewTask({route}) {
  const [selectedValue, setSelectedValue] = useState('Diet');

  const [photoModal, setPhotoModal] = useState(false);
  const authentication = useContext(AuthContext);
  const user = JSON.parse(authentication.state.user);

  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());

  const {DayName} = route.params;

  const cameraPicker = () => {
    const options = {
      options: {
        mediaType: 'Photo',
      },
    };
    launchCamera(options, response => {
      if (!response.didCancel && !response.error)
        userPhoto(response.assets[0])(authentication);
    });
    setPhotoModal(false);
  };

  const galleryPicker = () => {
    const options = {
      options: {
        mediaType: 'Photo',
      },
    };
    launchImageLibrary(options, response => {
      if (!response.didCancel && !response.error)
        userPhoto(response.assets[0])(authentication);
    });
    setPhotoModal(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        isVisible={photoModal}
        animationIn={'bounceInUp'}
        animationOut={'bounceOutDown'}
        onBackButtonPress={() => setPhotoModal(false)}
        onBackdropPress={() => setPhotoModal(false)}
        style={{margin: 0, justifyContent: 'flex-end'}}>
        <View
          style={{
            width: '100%',
            height: 150,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.lightColor,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}>
          <TouchableOpacity onPress={cameraPicker}>
            <Text
              style={{
                color: Colors.selectedColor,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Open Camera
            </Text>
          </TouchableOpacity>
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: Colors.lightDark,
              marginVertical: 15,
            }}
          />
          <TouchableOpacity onPress={galleryPicker}>
            <Text
              style={{
                color: Colors.selectedColor,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Choose From Gallery
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Create Schedule</Text>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#E26F1E', fontWeight: 'bold'}}>
          {DayName}'s Schedule
        </Text>
      </View>

      <View style={styles.pickerView}>
        <Text style={{color: 'black', paddingStart: 10}}>
          Select Plan Category
        </Text>
        <Picker
          selectedValue={selectedValue}
          style={{height: 50, width: 150, color: 'black'}}
          dropdownIconColor="#E26F1E"
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Diet" value="Diet" />
          <Picker.Item label="Workout" value="Workout" />
        </Picker>
      </View>

      <View style={styles.taskView}>
        <Text style={{color: 'black', paddingRight: 20}}>Task Name</Text>
        <TextInput
          placeholder="Enter Task Name"
          placeholderTextColor="grey"
          style={{color: 'black'}}
        />
      </View>

      <View style={styles.taskView}>
        <Text style={{color: 'black', paddingRight: 20}}>Task Photo</Text>
        <TouchableOpacity onPress={() => setPhotoModal(true)}>
          <Image
            source={{uri: URL + '/public/userImages/' + user.img_file}}
            style={{height: 30, width: 50}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.timeView}>
        <Text style={styles.viewText}>Select Start Time</Text>
        <DatePicker
          style={styles.timePicker}
          mode="time"
          date={date}
          onDateChange={setDate}
          fadeToColor={'#f2f3f8'}
          textColor={'#E26F1E'}
        />
      </View>

      <View style={styles.timeView}>
        <Text style={styles.viewText}>Select Finish Time</Text>
        <DatePicker
          style={styles.timePicker}
          mode="time"
          date={date2}
          onDateChange={setDate2}
          fadeToColor={'#f2f3f8'}
          textColor={'#E26F1E'}
        />
      </View>

      <View style={styles.buttonsView}>
        <TouchableOpacity style={styles.firstButton}>
          <Text style={{color: 'white'}}>My {selectedValue}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondButton}>
          <Text style={{color: 'white'}}>General {selectedValue}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerTextView: {
    marginTop: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  pickerView: {
    backgroundColor: '#f2f3f8',
    height: 50,
    width: 350,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginStart: 30,
    borderColor: '#E26F1E',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskView: {
    backgroundColor: '#f2f3f8',
    height: 50,
    width: 350,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    marginStart: 30,
    borderColor: '#E26F1E',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingStart: 10,
  },
  buttonsView: {
    marginTop: 30,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstButton: {
    marginRight: 20,
    height: 40,
    width: 120,
    backgroundColor: '#E26F1E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  secondButton: {
    height: 40,
    width: 120,
    backgroundColor: '#E26F1E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  timeView: {
    backgroundColor: '#f2f3f8',
    height: 100,
    width: 350,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginStart: 30,
    borderColor: '#E26F1E',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timePicker: {
    width: 150,
    height: 90,
    backgroundColor: '#f2f3f8',
    borderWidth: 2,
    borderRadius: 15,
    marginEnd: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewText: {
    paddingStart: 10,
    color: 'black',
  },
});
