import React, {useContext} from 'react';
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
import {ParametersContext} from '../../../../../Context/Providers/ParametersProvider';
import addParameters from '../../../../../Context/Actions/addParameters';

const UserBMI = props => {
  const authentication = useContext(AuthContext);
  const Parameters = useContext(ParametersContext);

  const nextPressed = () =>{
    if(!Parameters.parameters.height || !Parameters.parameters.weight ||
      Parameters.parameters.height.length == 0  || Parameters.parameters.weight.length == 0 )
      alert("Empty fields not allowed");
    else if(Parameters.parameters.height < 90 || Parameters.parameters.height > 240)
      alert("Enter real height");
    else if(Parameters.parameters.weight < 18 || Parameters.parameters.weight >200)
      alert("Enter real weight");
    else
      addParameters(Parameters)(authentication);
  }

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
            defaultValue = {Parameters.parameters.height}
            onChangeText={text => Parameters.setParameters({type:"HEIGHT", payload:text})}
          />
        </View>

        {/* heaging and caption for weight */}
        <HeadingAndCaption
          headingText={Strings.WeightHeadingText}
          captionText={Strings.WeightCaptionText}
        />

        {/*weight input */}
        <View style={styles.inputFieldsContainer}>
          <TextInput
            placeholder={Strings.kgLabel}
            placeholderTextColor={Colors.lightDark} 
            style={styles.inputField}
            defaultValue= {Parameters.parameters.weight}
            onChangeText={text => Parameters.setParameters({type:"WEIGHT", payload:text})}
          />
        </View>
        
        {/* next button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={nextPressed}>
          <Text style={styles.nextButtonText}>{Strings.nextText}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default UserBMI;
