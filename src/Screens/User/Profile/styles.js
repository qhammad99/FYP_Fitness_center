import {StyleSheet} from 'react-native';
import Colors from '../../../colors/Colors';

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
    profileIconContainer:{
        marginTop:20,
        justifyContent:'center', 
        alignItems:'center', 
        alignSelf:'center', 
        backgroundColor:'white', 
        width:141, 
        height:141, 
        borderWidth:1, 
        borderRadius:141/2,
        borderColor:Colors.lightDark
    },
    profileIcon: {
        width: 140,
        height: 140,
        borderRadius: 140/2
    },
    changeImgBtnContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:4,
        alignSelf:'center',
        marginBottom:15,
    },
    changeImgBtnTxt:{
        fontSize:16,
        fontWeight: 'bold',
        color: Colors.selectedColor
    },
    itemContainer:{
        alignSelf:'flex-start',
        alignItems:'center',
        width:'100%',
        flexDirection:'row',
        margin:10,
        borderBottomWidth:0.3,
        paddingBottom:10,
        borderBottomColor: Colors.lightDark
    },
    itemLabel:{
        color: Colors.lightDark,
        width:60,
        fontSize:16
    },
    itemContent:{
        color: Colors.darkColor,
        fontSize:18
    }
});

export default styles;