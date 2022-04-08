import {StyleSheet} from 'react-native';
import Colors from '../../../../colors/Colors';

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: '10%',
        alignItems:'center'
    },
    inputFieldsContainer:{ 
        marginTop: 20,
        flexDirection:'row', 
        alignItems: 'center', 
        justifyContent:'space-between' 
    },
    inputField: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        fontSize: 18,
        width: '90%',
        maxWidth: '90%',
        marginHorizontal:5,
        color: Colors.darkColor
    },
    nextButton: {
        width: 100,
        height: 38,
        marginTop: 40,
        backgroundColor: Colors.primary,
        padding: 6,
        borderRadius: 5,
    },
    nextButtonText: {
        color: "white",
        fontSize: 16,
        justifyContent: "center",
        textAlign: "center",
    },
});

export default styles;