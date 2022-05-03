import {StyleSheet} from 'react-native';
import Colors from '../../../colors/Colors';

const styles = StyleSheet.create({
    header:{
        zIndex:1,
        height:50,
        backgroundColor: Colors.primary,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:5,
    },
    statusContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    onlineStatus:{
        width:16,
        height:16,
        borderRadius:8,
        backgroundColor:'#31a24c'
    },
    offlineStatus:{
        width:16,
        height:16,
        borderRadius:8,
        backgroundColor:Colors.lightDark
    },
    statusText:{
        color:Colors.lightColor,
        fontSize:14,
        marginLeft:5,
        fontWeight:'600'
    },
    coachName:{
        color:Colors.lightColor,
        fontSize:18,
        fontWeight:'800'  
    },
    profileImage:{
        width:40,
        height:40,
        borderRadius:20,
        resizeMode:'contain'
    },
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    inputContainer:{
        flexDirection:'row',
        alignItems:'center',
        margin:10,
        marginTop:-5
    },
    messageInput:{
        flex:1,
        marginRight:8,
        backgroundColor:'#f2f2f2',
        borderWidth:0.5,
        borderColor:'#dedede',
        borderRadius:20,
        paddingHorizontal:10
    }
});

export default styles;