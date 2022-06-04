import {StyleSheet} from 'react-native';
import Colors from '../../../colors/Colors';

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    itemContainer:{ 
        flexDirection: 'row', 
        alignItems:'center',
        marginHorizontal: 10, 
        marginTop: 30 
    },
    itemLabel:{ 
        fontSize: 16, 
        paddingTop: 5, 
        color: Colors.darkColor, 
        fontWeight:'500',
        width: 100 
    },
    unit:{ 
        fontSize: 20,
        paddingLeft:10,  
        color: Colors.darkColor, 
        fontWeight:'bold',
    },
    inputValueContainer:{
        flexDirection:'row',
        backgroundColor:'white',
        borderWidth:1,
        borderColor:Colors.primary,
        borderRadius:5,
        paddingHorizontal:8,
        paddingVertical:4,
        alignItems:'center'
    },
    itemValueText:{ 
        fontSize: 18, 
        color:Colors.darkColor,
        padding:0,
    },
    buttonContainer:{
        backgroundColor: Colors.primary,
        padding: 10,
        width: 170,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 40,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{ 
        fontSize: 18, 
        color: '#ffff' 
    }
});

export default styles;