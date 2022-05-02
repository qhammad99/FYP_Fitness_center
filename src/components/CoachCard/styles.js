import {StyleSheet} from 'react-native';
import Colors from '../../colors/Colors';

const styles = StyleSheet.create({
    root:{
        flexDirection:'row',
        borderWidth: 0.5,
        marginVertical:10,
        marginHorizontal:5,
        borderRadius:10,
        backgroundColor: '#fff',
        borderColor: Colors.lightDark
    },
    image:{
        height:150,
        flex:2,
        resizeMode: 'contain',
        borderRadius:4,
        marginLeft:5
    },
    rightContainer:{
        flex:3,
        padding: 10
    },
    name:{
        fontSize:18,
        color: Colors.darkColor
    },
    experience:{
        fontSize:16,
        color: Colors.lightDark
    },
    charges:{
        fontSize:16,
        fontWeight: 'bold',
        color: Colors.darkColor,
    },
    buttonContainer:{
        backgroundColor:Colors.primary,
        alignSelf:'flex-end',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:4
    },
    buttonText:{
        color:Colors.lightColor,
        fontWeight: '700'
    },
    bottomRowContainer:{
        flexDirection:'row', 
        justifyContent: 'space-between', 
        alignItems:'flex-end',
    },
    joiningDate:{
        color: Colors.lightDark,
        fontSize:10
    }
});

export default styles;