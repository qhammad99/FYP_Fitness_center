import {StyleSheet} from 'react-native';
import Colors from '../../../colors/Colors';

const styles = StyleSheet.create({
    root:{
        height:'100%',
        width:'100%',
        backgroundColor:'#fff'
    },
    header:{
        backgroundColor: Colors.primary,
        alignItems:'center',
        height:'40%'
    },
    profileIcon: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop:20
    },
    name:{
        color:Colors.lightColor,
        marginTop:8,
        fontWeight:'600',
        fontSize:24
    },
    infoContainer:{
        width:"90%",
        marginTop:-40,
        alignSelf:'center',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        borderColor:'#e8e8e8',
        backgroundColor:Colors.lightColor,
        borderLeftWidth:3,
        borderRightWidth:3,
        borderTopWidth:3,
        padding:10,
        elevation:10
    },
    rowContainer:{
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1,
        paddingBottom:8,
        marginVertical:10,
        flexDirection:'row',
        alignItems:'center'   
    },
    label:{
        width:'30%',
        fontSize:16,
        color:Colors.lightDark
    },
    value:{
        fontSize:17,
        fontWeight:'400',
        color: Colors.darkColor    
    },
    modalContainer:{
        width:'100%',
        height:'30%',
        backgroundColor: Colors.lightColor,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    modalTitle:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:20,
        color: Colors.darkColor
    },
    modalInput:{
        borderRadius:2,
        width:'30%',
        alignSelf:'center',
        marginTop:20,
        borderColor:Colors.primary,
        borderWidth:1,
        backgroundColor:'#fff',
        paddingLeft:10
    },
    buttonContainer:{
        backgroundColor:Colors.primary,
        alignSelf:'center',
        padding:10,
        borderRadius:4,
        marginTop:10
    },
    buttonText:{
        color:Colors.lightColor,
        fontWeight:'600',
        fontSize:16
    }
});

export default styles;