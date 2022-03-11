import { StyleSheet } from "react-native";
import Colors from '../../colors/Colors';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        backgroundColor: Colors.lightColor
    },
    bannerImageContainer:{
        width: '100%',
        height: '30%'
    },
    bannerImage:{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.primary
    },
    languageSelector: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:5
    },
    languageButton:{
        marginHorizontal:3,
    },
    btnLnText:{
        fontSize:14,
        color: Colors.darkColor
    },
    fieldsContainer: {
        paddingHorizontal: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    inputField: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        marginTop: 10,
        fontSize: 16,
        width: 300,
        color:Colors.darkColor,
    },
    passwordField: {
        borderBottomColor: Colors.primary,
        fontSize: 16,
        width: 280,
        color:Colors.darkColor,
    },
    passwordFieldContainer: {
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        marginTop: 10,
        fontSize: 16,
        width: 300,
        color:Colors.darkColor,
    },
    loginButton: {
        width: 300,
        height: 38,
        marginTop: 30,
        backgroundColor: Colors.primary,
        padding: 6,
        borderRadius: 5,
    },
    loginButtonText: {
        color: "white",
        fontSize: 16,
        justifyContent: "center",
        textAlign: "center",
    },
    forgotPwdButton: {
        width: 300,
        marginTop: 5,
        backgroundColor: Colors.noBackground,
        padding: 6
    },
    forgotPwdButtonText: {
        color: Colors.primary,
        fontSize: 16,
        justifyContent: "center",
        textAlign: "center",
    },
    separator:{ 
        marginVertical: 30,  
        textAlign: 'center',
        color: Colors.lightDark 
    },
    signupButtons:{
        alignItems:'center'
    }
});

export default styles;