import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../colors/Colors';

const CustomSwitch =({onSelectSwitch}) => {

  const [getSelectionMode, setSelectionMode] = useState(1);

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
        
      {
        ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((item, index)=>{
          return(
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => updateSwitchData(index+1)}
              key={`day-${index}`}
              style={{
                flex: 1,
                backgroundColor: (getSelectionMode == (index+1)) ? Colors.primary : '#f2f3f8',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: getSelectionMode == (index+1) ? 'white' : Colors.primary,
                  fontSize: 14,
                  fontWeight: 'bold'
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  );
}

export default CustomSwitch;