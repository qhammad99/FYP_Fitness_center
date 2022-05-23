import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: "100%"
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
        color: 'black',
        position: "absolute",
      },
      headerImage: {
        height: 130,
        width: 350,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "flex-start",
      },
      exercises: {
        backgroundColor: "#f2f3f8",
        height: 68,
        width: 350,
        borderRadius: 10,
        borderWidth: 1,
        marginStart: 30,
        borderColor: '#E26F1E',
        marginTop: 20,
      },
      insideExercises: {
        alignItems: "flex-start",
        borderColor: '#E26F1E',
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 5,
        height: 20
      },
      exeText: {
        paddingStart: 10,
        fontWeight: '400',
        color: 'black'
      },
      startButton: {
        width: 70,
        height: 30,
        borderColor: "#fff",
        backgroundColor: "#E26F1E",
        borderWidth: 2,
        borderRadius: 15,
        marginEnd: 10,
        justifyContent: "center",
        alignItems: "center",
      },
      startButtonText: {
        color: "#fff",
      },
      scrollView: {
        marginBottom: 10,
      },
      gif: {
        width: 70,
        height: 30,
        marginEnd: "10%",
        justifyContent: "center",
        alignItems: "center",
      },
});

export default styles;