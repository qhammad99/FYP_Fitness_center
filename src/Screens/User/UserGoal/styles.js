import { StyleSheet } from "react-native";
import Colors from "../../../colors/Colors";

const styles= StyleSheet.create({
    container:{
        flex:1,
        padding: '10%',
        alignItems:'center'
    },
    headingText:{
        fontSize:18,
        fontWeight:'bold',
        marginTop: 50,
        textAlign:'center',
        color:Colors.darkColor
    },
    bmiResult:{
        fontSize:18,
        fontWeight: 'bold',
        color: Colors.selectedColor
    },
    captionText:{
        marginTop: 5, 
        textAlign: 'center',
        color:Colors.darkColor
    },
    containerHeading:{
        color:Colors.darkColor, 
        marginTop:30, 
        width:'100%', 
        textAlign:'center'
    },
    inputFieldsContainer:{ 
        marginTop: 10,
        flexDirection:'row', 
        alignItems: 'center', 
        justifyContent:'space-between' 
    },
    containerLabel:{
        fontWeight:'bold', 
        marginTop:10, 
        color: Colors.darkColor,
        width:60
    },
    inputValueField:{
        marginLeft:10, 
        flex:1,
        borderBottomColor:Colors.primary, 
        borderBottomWidth:1,
        color: Colors.darkColor
    },
    unitContainer:{
        backgroundColor: '#fff', 
        width:135, 
        height:'100%', 
        marginLeft: 20,
        alignItems: 'center'
    },
    unit:{
        color: Colors.selectedColor,
        marginTop:14,
        fontSize:16
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