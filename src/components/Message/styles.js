import {StyleSheet} from 'react-native';
import Colors from '../../colors/Colors';

const styles = StyleSheet.create({
    reciverTextContainer:{
        backgroundColor: Colors.lightColor,
        padding:7,
        margin:10,
        borderRadius:10,
        maxWidth:'75%',
        marginRight:'auto',
    },
    reciverText:{
        color: Colors.darkColor
    },
    myTextContainer:{
        backgroundColor: Colors.primary,
        padding:7,
        margin:10,
        borderRadius:10,
        maxWidth:'75%',
        marginLeft: 'auto'
    },
    myText:{
        color: '#fff'
    },
    myMessageTime:{
        marginLeft:20,
        marginTop:0,
        fontSize:9,
        color:Colors.lightColor,
        alignSelf:'flex-end',
        fontWeight:'600'
    },
    messageTime:{
        marginLeft:20,
        marginTop:0,
        fontSize:9,
        alignSelf:'flex-end',
        fontWeight:'600'
    }
});

export default styles;