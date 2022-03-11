import { StyleSheet } from "react-native";
import Colors from '../../colors/Colors';

const styles = StyleSheet.create({
    container:{
      flex: 1, 
      backgroundColor:Colors.lightColor
    },
    backgroundImage:{
      paddingVertical:10, 
      backgroundColor:Colors.primary, 
      borderBottomRightRadius:40
    },
    sideMenuProfileIconContainer:{
      marginTop:10,
      justifyContent:'center', 
      alignItems:'center', 
      alignSelf:'center', 
      backgroundColor:'white', 
      width:101, 
      height:101, 
      borderWidth:1, 
      borderRadius:51
    },
    sideMenuProfileIcon: {
      width: 100,
      height: 100,
      borderRadius: 50
    },
    iconStyle: {
      width: 15,
      height: 15,
      marginHorizontal: 5,
    },
    nameText:{
      width:'80%', 
      color:'#fff', 
      fontWeight:'bold', 
      fontSize:18, 
      textAlign:'center', 
      alignSelf:'center', 
      marginTop:10, 
      fontStyle:'italic'
    },
    numberOfGoals:{
      width:'80%', 
      color:'#fff', 
      fontSize:14, 
      textAlign:'center', 
      alignSelf:'center'
    },
    bottomItem:{
      marginLeft:-25, 
      fontSize:15, 
      color:Colors.selectedColor
    }
  });

  export default styles;