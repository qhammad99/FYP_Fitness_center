import {StyleSheet} from 'react-native';
import Colors from '../../../colors/Colors';

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
    caloriesContainer:{
        flexDirection:'row',
        backgroundColor: Colors.primary,
        borderRadius:24,
        justifyContent:'space-around',
        alignItems:'center',
        padding:20,
        margin:20
    },
    verticalLine:{
        width:2,
        height:'98%',
        borderRadius:90,
        backgroundColor: Colors.lightDark
    },
    label:{
        fontSize:18,
        color:Colors.lightColor,
        textAlign:'center'
    },
    value:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:Colors.lightColor
    },
    chartLabelContainer:{
        flexDirection:'row',
        marginTop:10,
        alignItems:'center',
        justifyContent:'space-between'
    },
    colorLabel:{
        flexDirection: 'row',
        alignItems:'center'
    }
});

export default styles;