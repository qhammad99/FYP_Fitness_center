import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function DayTitle({dayNumber}) {
  return (
    <View style={styles.dayTextView}>
      <Text style={{color: '#E26F1E', fontWeight: 'bold' }}>
        {
        dayNumber==1 ? 'Sunday' :
        dayNumber==2 ? 'Monday':
        dayNumber==3 ? 'Tuesday':
        dayNumber==4 ? 'Wednesday':
        dayNumber==5 ? 'Thursday':
        dayNumber==6 ? 'Friday': 'Saturday'
        }'s Tasks</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  dayTextView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
}
});
