import {StyleSheet} from 'react-native';
import Colors from '../../colors/Colors';

const styles = StyleSheet.create({
    reciverTextContainer:{
        backgroundColor: Colors.primary,
        padding:10,
        margin:10,
        borderRadius:10,
        maxWidth:'75%',
        marginRight: 'auto'
    },
    reciverText:{
        color: '#fff'
    },
    myTextContainer:{
        backgroundColor: Colors.lightColor,
        padding:10,
        margin:10,
        borderRadius:10,
        maxWidth:'75%',
        marginLeft:'auto'
    },
    myText:{
        color: Colors.darkColor
    },
    myMessageTime:{
        fontSize:11,
        alignSelf:'flex-end'
    },
    messageTime:{
        fontSize:11,
        color:Colors.lightColor,
        alignSelf:'flex-end'
    }
});

export default styles;