import React, {useState, useContext} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import Strings from '../../../../../strings/Strings';
import HeadingAndCaption from '../../../../../components/HeadingAndCaption';
import styles from './styles';
import Colors from '../../../../../colors/Colors';
import { AuthContext } from '../../../../../Context/Providers/AuthProvider';

function UserBMI(props) {
  const authentication = useContext(AuthContext);

  const [isheight, setHeight] = useState(0);
  const [isweight, setWeight] = useState(0);
  const [BmiResult, setBmiResult] = useState('');
  const [bmi, setbmi] = useState(0);

  const nextPressed = () =>{
    // props.navigation.navigate('UserGoal');
    authentication.dispatch({type:'PARAMETERS'});
  }

  const BMI = (height, weight) => {
    var result = (parseFloat(weight) * 10000) / (parseFloat(height) * parseFloat(height));
    result.toFixed(2);
    setbmi(result);
    if (result < 18.5) {
      setBmiResult('Underweight');
    } else if (result >= 18.5 && result < 25) {
      setBmiResult('Normal weight');
    } else if (result >= 25 && result < 30) {
      setBmiResult('Overweight');
    } else if (result >= 30) {
      setBmiResult('Obese');
    } else {
      // alert('Incorrect Input!');
      setBmiResult('');
    }
  };
  return (
    <>
      <View style={styles.container}>
        {/* heaging and caption for height */}
        <HeadingAndCaption
          headingText={Strings.HeightHeadingText}
          captionText={Strings.HeightCaptionText}
        />

        {/* height input */}
        <View style={styles.inputFieldsContainer}>
          <TextInput
            placeholder={Strings.cmLabel}
            placeholderTextColor={Colors.lightDark} 
            style={styles.inputField}
            onChangeText={text => setHeight(text)}
          />
        </View>

        {/* heaging and caption for weight */}
        <HeadingAndCaption
          headingText={Strings.WeightHeadingText}
          captionText={Strings.WeightCaptionText}
        />

        {/*weight input */}
        <View style={styles.inputFieldsContainer2}>
          <TextInput
            placeholder={Strings.kgLabel}
            placeholderTextColor={Colors.lightDark} 
            style={styles.inputField}
            onChangeText={text => setWeight(text)}
            onPress={() => BMI(isheight, isweight)}
          />
        </View>


        {/* calculate button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => BMI(isheight, isweight)}>
          <Text style={styles.nextButtonText}>Calculate </Text>
        </TouchableOpacity>
          
        <Text style={styles.label}>{bmi}</Text>
        <Text style={styles.resultText}>{BmiResult}</Text>
        
        {/* next button */}
        <TouchableOpacity
          style={styles.nextButton2}
          onPress={nextPressed}>
          <Text style={styles.nextButtonText}>{Strings.nextText}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default UserBMI;
