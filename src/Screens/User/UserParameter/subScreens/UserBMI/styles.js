import { StyleSheet } from "react-native";
import Colors from '../../../../../colors/Colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: '5%',
      alignItems: 'center',
    },
    inputFieldsContainer: {
      marginTop: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    inputField: {
      borderBottomColor: Colors.primary,
      borderBottomWidth: 2,
      fontSize: 18,
      width: '60%',
      maxWidth: '60%',
      marginHorizontal: 2,
      textAlign:'center',
      color: Colors.darkColor
    },
    nextButton: {
      width: 300,
      height: 38,
      marginTop: 40,
      backgroundColor: Colors.primary,
      padding: 6,
      borderRadius: 5,
    },
    nextButtonText: {
      color: 'white',
      fontSize: 16,
      justifyContent: 'center',
      textAlign: 'center',
    },
    label: {
      marginTop: 15,
      textAlign: 'center',
      fontSize: 20,
      color:Colors.selectedColor
    }
});

export default styles;