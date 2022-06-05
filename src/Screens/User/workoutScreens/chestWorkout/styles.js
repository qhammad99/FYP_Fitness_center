import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
      header: {
        backgroundColor: "#f2f3f8",
        height: 130,
        width: 350,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "flex-start",
        marginStart: 30,
        marginTop: 10,
        alignItems: "center",
      },
      headerText: {
        fontSize: 20,
        paddingStart: 10,
        fontWeight: "bold",
        position: "absolute",
        color: 'black'
      },
      headerImage: {
        height: 130,
        width: 350,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "flex-start",
      },
      scrollView: {
        marginBottom: 10,
      },
});

export default styles;