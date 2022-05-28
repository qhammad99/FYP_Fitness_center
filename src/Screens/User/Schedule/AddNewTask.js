import React, {useState, useContext, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {AuthContext} from '../../../Context/Providers/AuthProvider';
import {useNavigation} from '@react-navigation/native'
import Colors from '../../../colors/Colors';
import Urls from '../../../config/env';
import axios from 'axios';
import moment from 'moment';

export default function AddNewTask({route}) {
  const {DayName} = route.params;
  const authentication = useContext(AuthContext);
  const user = JSON.parse(authentication.state.user);

  const navigation = useNavigation();

  const [selectedValue, setSelectedValue] = useState('Diet');
  const [photoModal, setPhotoModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [photo, setNewPhoto] = useState(null);
  const [planes, setPlanes] = useState(null);
  const [button, setButton] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(()=>{
    let token = user.token;
    var API_URL;
    if(selectedValue == 'Diet')
      API_URL = button == 1 ? Urls.MyDietPlans : Urls.GeneralDietPlans;
    else
      API_URL = button == 1 ? Urls.MyWorkoutPlans : Urls.GeneralWorkoutPlans;

    axios.get(API_URL, {
        headers:{
          'Authorization' : `Bearer ${token}`
        }
    })
    .then((response)=>{
        if(response.data.success){
          if(selectedPlan)
            setSelectedPlan(null);
          setPlanes(selectedValue == 'Diet'? response.data.dietPlans : response.data.workoutPlans)
        }
    })
    .catch((error)=>{
        if(error.response){
            if(error.response.data.message == "You don't have your any own diet plan");
              setPlanes("empty");
        }
        else
            alert(" "+ error);
    });
  },[selectedValue, button]);

  const addSchedule = async()=>{
    if(!photo || (date == date2) || !selectedPlan)
      alert("incorrect data")
    else{
      let token = user.token;
          
      let formData = new FormData();
      formData.append('photo',{
        uri: photo.uri,
        type: photo.type,
        name: photo.fileName
      });
      formData.append('day_no', DayName);
      formData.append('category', selectedValue)
      if(selectedValue=='Diet')
        formData.append('diet_id', selectedPlan.diet_id);
      else
        formData.append('workout_plan_id', selectedPlan.workout_plan_id);
      formData.append('start_time', moment(date).local().format('HH:mm:ss'));
      formData.append('finish_time', moment(date2).local().format('HH:mm:ss'));

      var API_URL= Urls.ScheduleAdd;
      axios({
        url: API_URL,
        method: 'PATCH',
        data: formData,
        headers: {
          'Authorization' : `Bearer ${token}`,
          'Content-Type': `multipart/form-data`,
        },
        transformRequest: (data, error) => {
          return formData;
        }
      })
      .then((response)=>{
        if(response.data.success){
          selectedValue == 'Diet'
          ?
          navigation.navigate('Schedule', {
            day_no: DayName, 
            category: selectedValue,
            diet_id: selectedPlan.diet_id,
            start_time: moment(date).local().format('HH:mm:ss'),
            finish_time: moment(date2).local().format('HH:mm:ss')
          })
          :
          navigation.navigate('Schedule', {
            day_no: DayName, 
            category: selectedValue,
            workout_plan_id: selectedPlan.workout_plan_id,
            start_time: moment(date).local().format('HH:mm:ss'),
            finish_time: moment(date2).local().format('HH:mm:ss')
          })
        }
        else
          alert(response.data.message);
      })
      .catch((error)=>{
        if (error.response) {
          //response status is an error code
          console.log(error.response.status);
        }
        else if (error.request) {
          //response not received though the request was sent
          console.log(error.request);
        }
        else {
          //an error occurred when setting up the request
          console.log(error.message);
        }
      });
      }
  }

  const cameraPicker = () => {
    const options = {
      options: {
        mediaType: 'Photo',
      },
    };
    launchCamera(options, response => {
      if (!response.didCancel && !response.error)
        setNewPhoto(response.assets[0]);
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
        setNewPhoto(response.assets[0]);
    });
    setPhotoModal(false);
  };

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
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

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#E26F1E', fontWeight: 'bold'}}>
          Day: 
          {
           DayName == 1 ? ' Sunday':
           DayName == 2 ? ' Monday':
           DayName == 3 ? ' Tuesday':
           DayName == 4 ? ' Wednesday':
           DayName == 5 ? ' Thursday':
           DayName == 6 ? ' Friday': ' Saturday'
           }
        </Text>
      </View>
      
      {
        photo != null ? 
        <Image 
          source={{uri:`${photo.uri}`}} 
          style={{
            width:120, 
            height:120, 
            borderRadius:50,
            alignSelf:'center',
            marginTop:10
          }}/>

          :
          <MaterialCommunityIcons 
            name={'camera-outline'} 
            color={Colors.selectedColor} 
            size={35} 
            style={{
              alignSelf:'center', 
              marginTop:10,
              padding:40
            }}/>
      }
      <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>setPhotoModal(true)}>
        <Text 
          style={{
            color:Colors.selectedColor, 
            fontWeight:'bold', 
            fontSize:18,
            marginTop:10
            }}>
              Add Photo
        </Text>
      </TouchableOpacity>

      <View style={styles.itemContainer}>
        <Text style={{color: Colors.darkColor, fontSize:16, width:'25%'}}>
          Category:
        </Text>
        <Picker
          selectedValue={selectedValue}
          style={{height: 50, flex:1, color: Colors.darkColor, backgroundColor:Colors.lightColor}}
          dropdownIconColor={Colors.primary}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Diet" value="Diet" />
          <Picker.Item label="Workout" value="Workout" />
        </Picker>
      </View>

      <View style={styles.timeView}>
        <View>
          <Text style={styles.timeLabel}>Start Time</Text>
          <DatePicker
            style={styles.timePicker}
            mode="time"
            date={date}
            onDateChange={setDate}
            fadeToColor={'#f2f3f8'}
            textColor={'#E26F1E'}
          />
        </View>

        <View style={{
          width:1,
          height:'80%',
          backgroundColor:Colors.primary
        }} />

        <View>
          <Text style={styles.timeLabel}>Finish Time</Text>
          <DatePicker
            style={styles.timePicker}
            mode="time"
            date={date2}
            onDateChange={setDate2}
            fadeToColor={'#f2f3f8'}
            textColor={'#E26F1E'}
          />
        </View>
      </View>

      {/* selection buttons */}
      <View style={styles.buttonsView}>
        <TouchableOpacity style={button == 1?styles.selectedButton: styles.normalButton} onPress={()=>setButton(1)}>
          <Text style={{color: Colors.primary, fontWeight:'bold'}}>My {selectedValue}s</Text>
        </TouchableOpacity>
        <TouchableOpacity style={button == 2?styles.selectedButton: styles.normalButton} onPress={()=>setButton(2)}>
          <Text style={{color: Colors.primary, fontWeight:'bold'}}>General {selectedValue}s</Text>
        </TouchableOpacity>
      </View>

      {/* planes */}
      <View style={{marginBottom:10, marginHorizontal:30, marginTop:10}}>
        {
          (planes && planes == "empty")
          ? 
          <Text style={{
            color:Colors.darkColor, 
            fontWeight:'bold'
            }}>
              No planes found
          </Text>
          :
          <ScrollView 
            style={{maxHeight:350, backgroundColor:Colors.lightColor}}
            nestedScrollEnabled={true}
            >
              {
                selectedPlan&&
                <View>
                  <Text>{selectedPlan.name}</Text>
                </View>
              }
            {planes&&planes.map(item=>
                <TouchableOpacity 
                  style={{height:40, paddingLeft:10}} 
                  key={`plane-${item.name}`}
                  onPress={()=>setSelectedPlan(item)}
                  >
                  <Text>{item.name}</Text>
                </TouchableOpacity>
                )}
          </ScrollView>
        }
      </View>


      {/* add button */}
      <TouchableOpacity 
        style={{
          marginBottom:50, 
          alignSelf:'center',
          backgroundColor:Colors.primary,
          paddingHorizontal:20,
          paddingVertical:10,
          alignItems:'center',
          justifyContent:'center',
          borderRadius:5
          }}
        onPress={addSchedule}
        >
          <Text style={{
            color:'white',
            fontWeight:'bold',
            fontSize:17
          }}>Add</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal:30,
    justifyContent: 'space-between',
  },
  itemInput:{
    color: Colors.darkColor,
    backgroundColor: Colors.lightColor,
    flex:1,
  },
  timeView: {
    marginTop: 20,
    marginHorizontal:30,
    padding:8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f2f3f8',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E26F1E',
  },
  timeLabel:{
    color:Colors.darkColor,
    textAlign:'center',
    marginBottom:8
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
  buttonsView: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal:30
  },
  normalButton: {
    flex:1,
    height: 40,
    backgroundColor: Colors.lightColor,
    borderBottomWidth: 2,
    borderBottomColor: Colors.lightColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    flex:1,
    height: 40,
    backgroundColor: Colors.lightColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth:2,
    borderBottomColor:Colors.selectedColor,
  },
});
