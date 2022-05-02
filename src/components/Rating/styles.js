import {StyleSheet} from 'react-native';
import Colors from '../../colors/Colors';

const styles = StyleSheet.create({
    ratingContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical: 4
    },
    star:{
        marginHorizontal:0.5
    },
    ratingCount:{
        color:Colors.darkColor,
        marginLeft:2,
        fontWeight:'bold',
        fontStyle:'italic'
    },
});

export default styles;