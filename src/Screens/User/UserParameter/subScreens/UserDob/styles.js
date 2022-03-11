import { StyleSheet } from "react-native";
import Colors from '../../../../../colors/Colors';

const styles= StyleSheet.create({
    container:{
        flex:1,
        padding: '10%',
        alignItems:'center'
    },
    claendarIconContainer:{
        width:60, 
        height:60, 
        alignSelf:'center'
    },
    claendarIcon:{
        width:60, 
        height:60
    },
    displayDate: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        fontSize: 18, 
        marginTop:20, 
        paddingBottom: 5,
        textAlign:'center',
        color: Colors.darkColor
    },
    displayAge:{
        marginTop:5, 
        fontWeight:'bold', 
        textAlign:'center',
        color: Colors.selectedColor
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