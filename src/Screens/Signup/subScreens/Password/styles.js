import { StyleSheet } from "react-native";
import Colors from '../../../../colors/Colors';

const styles= StyleSheet.create({
    container:{
        flex:1,
        padding: '10%',
        alignItems:'center'
    },
    inputFieldsContainer:{ 
        marginTop: 20, 
        alignItems: 'center', 
        justifyContent:'space-between',
        width: '80%',
        maxWidth: '80%', 
    },
    inputField: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        fontSize: 18,
        marginHorizontal:5,
        width: '100%',
        maxWidth: '100%',
        color:Colors.darkColor 
    },
    passwordField: {
        borderBottomColor: Colors.primary,
        fontSize: 16,
        width: 280,
        color:Colors.darkColor,
    },
    passwordFieldContainer: {
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        marginTop: 10,
        fontSize: 16,
        width: 300,
        color:Colors.darkColor,
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
        color: "white",
        fontSize: 16,
        justifyContent: "center",
        textAlign: "center",
    },
});
export default styles;