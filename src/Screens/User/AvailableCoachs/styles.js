import {StyleSheet} from 'react-native';
import Colors from '../../../colors/Colors';

const styles = StyleSheet.create({
    searchBarContainer:{
        marginTop:-5,
        height:50,
        backgroundColor: Colors.primary,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:5
    },
    searchBar:{
        backgroundColor:'#fff',
        width:'90%',
        borderRadius:10,
        paddingHorizontal:5,
        flexDirection:'row',
        alignItems:'center'
    },
    searchBarInput:{
        width:'100%',
        color:Colors.darkColor
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
        width:'40%',
        alignSelf:'center',
        marginTop:20,
        borderColor:Colors.primary,
        borderWidth:1,
        backgroundColor:'#fff',
        color:Colors.darkColor
    },
    buttonContainer:{
        backgroundColor:Colors.primary,
        alignSelf:'center',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:4,
        marginTop:10
    },
    buttonText:{
        color:Colors.lightColor,
        fontWeight: '700'
    },
});

export default styles;