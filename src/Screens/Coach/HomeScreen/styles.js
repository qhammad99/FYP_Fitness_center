import { StyleSheet } from "react-native";
import Colors from '../../../colors/Colors';

const styles=StyleSheet.create({
    menuButton: {
        width: 300,
        height: 38,
        marginTop: 30,
        backgroundColor: Colors.primary,
        padding: 6,
        borderRadius: 5,
    },
    menuButtonText: {
        color: "white",
        fontSize: 16,
        justifyContent: "center",
        textAlign: "center",
    },
});

export default styles;