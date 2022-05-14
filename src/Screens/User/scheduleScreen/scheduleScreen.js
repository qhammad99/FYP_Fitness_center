import React, {useState} from 'react';
import styles from './styles';
import DatePicker from 'react-native-date-picker';
import {Text, View, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
export default function scheduleScreen() {
  const [selectedValue, setSelectedValue] = useState('sun');

  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());

  const [selectedCategory, setSelectedCategory] = useState('work');
  const [selectedLevel, setSelectedLevel] = useState('1');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}> Create Your Schedule </Text>
      </View>

      <View style={styles.picker}>
        <Text style={styles.viewText}>Select Day</Text>
        <Picker
          selectedValue={selectedValue}
          style={{height: 50, width: 150, color: 'black'}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Sunday" value="sun" />
          <Picker.Item label="Monday" value="mon" />
          <Picker.Item label="Tuesday" value="tue" />
          <Picker.Item label="Wednesday" value="wed" />
          <Picker.Item label="Thursday" value="thu" />
          <Picker.Item label="Friday" value="fri" />
          <Picker.Item label="Saturday" value="sat" />
        </Picker>
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

      <View style={styles.picker}>
        <Text style={styles.viewText}>Select Category</Text>
        <Picker
          selectedValue={selectedCategory}
          style={{height: 50, width: 150, color: 'black'}}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCategory(itemValue)
          }>
          <Picker.Item label="Workout" value="work" />
          <Picker.Item label="Diet" value="diet" />
        </Picker>
      </View>

      <View style={styles.picker}>
        <Text style={styles.viewText}>Select Level</Text>
        <Picker
          selectedValue={selectedLevel}
          style={{height: 50, width: 150, color: 'black'}}
          onValueChange={(itemValue, itemIndex) => setSelectedLevel(itemValue)}>
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.schedulButton}>
        <Text style={{color: '#fff'}}>Create Schedule</Text>
      </TouchableOpacity>
    </View>
  );
}
