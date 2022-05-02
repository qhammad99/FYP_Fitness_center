import {StyleSheet} from 'react-native';
import Colors from '../../../colors/Colors';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    inputContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:10,
        marginVertical:5
    },
    messageInput:{
        flex:1,
        marginRight:8,
        backgroundColor:'#f2f2f2',
        borderWidth:0.5,
        borderColor:'#dedede',
        borderRadius:20,
        paddingHorizontal:10,
        paddingVertical:5
    }
});

export default styles;