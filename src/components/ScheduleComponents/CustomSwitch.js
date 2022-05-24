import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CustomSwitch =({
  selectionMode,
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  onSelectSwitch,
}) => 
{

  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View
      style={{
        height: 40,
        width: '100%',
        backgroundColor: '#f2f3f8',
        borderRadius: 10,
        borderColor: '#AD40AF',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 1 ? '#E26F1E' : '#f2f3f8',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 1 ? 'white' : '#E26F1E',
            fontSize: 14,
            fontWeight: 'bold'
          }}>
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 2 ? '#E26F1E' : '#f2f3f8',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 2 ? 'white' : '#E26F1E',
            fontSize: 14,
            fontWeight: 'bold'
          }}>
          {option2}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(3)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 3 ? '#E26F1E' : '#f2f3f8',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 3 ? 'white' : '#E26F1E',
            fontSize: 14,
            fontWeight: 'bold'
          }}>
          {option3}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(4)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 4 ? '#E26F1E' : '#f2f3f8',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 4 ? 'white' : '#E26F1E',
            fontSize: 14,
            fontWeight: 'bold'
          }}>
          {option4}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(5)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 5 ? '#E26F1E' : '#f2f3f8',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 5 ? 'white' : '#E26F1E',
            fontSize: 14,
            fontWeight: 'bold'
          }}>
          {option5}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(6)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 6 ? '#E26F1E' : '#f2f3f8',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 6 ? 'white' : '#E26F1E',
            fontSize: 14,
            fontWeight: 'bold'
          }}>
          {option6}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(7)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 7 ? '#E26F1E' : '#f2f3f8',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 7 ? 'white' : '#E26F1E',
            fontSize: 14,
            fontWeight: 'bold'
          }}>
          {option7}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomSwitch;