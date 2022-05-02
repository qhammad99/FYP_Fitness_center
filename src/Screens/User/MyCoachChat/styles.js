import {StyleSheet} from 'react-native';
import Colors from '../../../colors/Colors';

const styles = StyleSheet.create({
    searchBarContainer:{
        marginTop:-8,
        zIndex:1,
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
        width:'100%'
    }
});

export default styles;