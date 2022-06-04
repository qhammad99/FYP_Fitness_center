import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../colors/Colors';
const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container:{ 
        height: '100%' 
    },
    headerContainer:{ 
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center', 
        padding: 20,  
        backgroundColor: Colors.primary 
    },
    menuIcon:{
        height:30,
        width:30,
        tintColor:'white'
    },
    logo:{
        height:40,
        width:40,
        resizeMode:'contain'
    },
    modalContainer:{
        backgroundColor: 'rgba(0,0,0,0.3)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalSubContainer:{
        height: height * 0.8,
        width: width * 0.9,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingBottom: 10
    },
    itemContainer:{ 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginHorizontal: 10, 
        marginTop: 30 
    },
    itemLabel:{ 
        fontSize: 16, 
        paddingTop: 5, 
        color: Colors.primary, 
        width: 80 
    },
    itemValueContainer:{ 
        flex:1,
        fontSize: 14, 
        borderColor: Colors.primary, 
        borderWidth: 1, 
        borderRadius: 10,
        marginLeft:10 ,
        color:Colors.darkColor,
        paddingHorizontal:8,
        paddingVertical:3
    },
    itemsSecton:{
        marginLeft: 10,
        fontSize: 18,
        marginTop: 20,
        fontWeight:'bold',
        textDecorationLine: 'underline',
    },
    modalButtonContainer:{
        backgroundColor: Colors.primary,
        padding: 10,
        width: 170,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 10
    },
    modalButtonText:{ 
        fontSize: 18, 
        textAlign: 'center', 
        color: '#ffff' 
    }
});

export default styles;