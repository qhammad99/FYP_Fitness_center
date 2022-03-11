import { StyleSheet } from "react-native";
import Colors from '../../../../colors/Colors';

const styles= StyleSheet.create({
    container:{
        flex:1,
        padding: '10%',
        alignItems:'center'
    },
    itemsContainer:{
        marginTop: 0,
        alignItems: 'center'
    },
    showImage:{
        width:200,
        height: 200
    },
    nextButton: {
        width: 300,
        height: 38,
        marginTop: 40,
        backgroundColor: Colors.primary,
        padding: 6,
        borderRadius: 5,
    },
    nextButtonText: {
        color: "white",
        fontSize: 16,
        justifyContent: "center",
        textAlign: "center",
    },
    bottomButton: {
        width: 300,
        marginBottom:10,
        backgroundColor: Colors.noBackground,
        padding: 6
    },
    bottomButtonText: {
        color: Colors.primary,
        fontSize: 15,
        justifyContent: "center",
        textAlign: "center",
    },
});

export default styles;