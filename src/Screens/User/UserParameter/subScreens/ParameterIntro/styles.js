import { StyleSheet } from "react-native";
import Colors from '../../../../../colors/Colors';

const styles= StyleSheet.create({
    container:{
        flex:1,
        marginTop:'30%',
        padding: '10%',
        alignItems:'center'
    },
    checkIcon:{
        width:80, 
        height:80
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
        width: '50%',
        maxWidth: '50%',
        marginHorizontal:5
    },
    nextButton: {
        width: 300,
        height: 38,
        marginTop: 80,
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