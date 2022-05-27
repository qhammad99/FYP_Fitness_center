import { StyleSheet } from "react-native";
import Colors from '../../../colors/Colors';

const styles=StyleSheet.create({
    headerContainer:{ 
        height:50,
        width:'100%',
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingHorizontal: 10, 
        backgroundColor:Colors.primary 
    },
    headerTitle:{ 
        fontSize: 18, 
        fontWeight: 'bold', 
        color: Colors.lightColor 
    },
    searchBarContainer:{
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
        width:'100%',
        color:Colors.darkColor
    },
    categoriesContainer:{
        height:50, 
        flexDirection:'row', 
        alignItems:'center'
    },
    selectedCategory:{
        backgroundColor:Colors.primary, 
        paddingHorizontal:10, 
        paddingVertical:5, 
        borderRadius:14, 
        marginHorizontal:2
    },
    categoryText:{
        color:Colors.lightColor, 
        fontSize:16
    },
    allCategories:{
        backgroundColor:Colors.lightDark, 
        paddingHorizontal:10, 
        paddingVertical:5, 
        borderRadius:14, 
        marginHorizontal:10
    },
    ingredientContainer:{
        backgroundColor:Colors.lightColor,
        flex:1, 
        width:'50%',
        paddingHorizontal:10, 
        paddingVertical:5, 
        borderRadius:14, 
        margin:10,
        elevation:5
    },
    ingredientName:{
        color:Colors.lightDark, 
        fontSize:16,
        fontWeight:'600',
        textAlign:'center',
        fontStyle:'italic'
    },
    label:{
        fontWeight:'400',
        color:Colors.lightDark
    },
    ingredientCategory:{
        fontWeight: '600',
        color: Colors.lightDark,
        paddingLeft:4,
        flex:1
    },
    ingredientPrice:{
        color:Colors.darkColor,
        fontWeight:'600'
    },
    modalContainer:{
        width:'100%',
        height:'30%',
        backgroundColor: Colors.lightColor,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    modalTitle:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:20,
        color: Colors.darkColor
    },
    modalInput:{
        borderRadius:2,
        width:'40%',
        alignSelf:'center',
        marginTop:20,
        borderColor:Colors.primary,
        borderWidth:1,
        backgroundColor:'#fff',
        color:Colors.darkColor
    },
    buttonContainer:{
        backgroundColor:Colors.primary,
        alignSelf:'center',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:4,
        marginTop:10
    },
    buttonText:{
        color:Colors.lightColor,
        fontWeight: '700'
    },
    editButton:{
        width:60, 
        height:60, 
        position:'absolute', 
        zIndex:1, 
        backgroundColor:Colors.minorColor, 
        borderRadius:50, 
        right:10, 
        bottom:10, 
        justifyContent:'center', 
        alignItems:'center'

    },
    fullModalContainer:{
        width:'100%',
        height:'100%',
        backgroundColor: Colors.lightColor,
    },
    fullModalTitle:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:20,
        color: Colors.darkColor
    },
    fullModalInput:{
        borderRadius:2,
        width:300,
        alignSelf:'center',
        marginTop:20,
        borderColor:Colors.primary,
        borderWidth:1,
        backgroundColor:'#fff',
        color:Colors.darkColor
    },
});

export default styles;