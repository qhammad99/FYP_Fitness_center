import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
      header: {
        backgroundColor: "#f2f3f8",
        height: 80,
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
        color: 'black',
        paddingStart: 125
      },
      headerImage: {
        height: 80,
        width: 350,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "flex-start",
      },
      scrollView: {
        marginBottom: 10,
      },
      exercises: {
        backgroundColor: '#f2f3f8',
        height: 68,
        width: 350,
        borderRadius: 10,
        borderWidth: 1,
        marginStart: 30,
        borderColor: '#E26F1E',
        marginTop: 20,
      },
      insideExercises: {
        alignItems: 'flex-start',
        borderColor: '#E26F1E',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        height: 20,
      },
      exeText: {
        paddingStart: 10,
        color: 'black',
      },
      startButton: {
        width: 70,
        height: 30,
        borderColor: '#fff',
        backgroundColor: '#E26F1E',
        borderWidth: 2,
        borderRadius: 15,
        marginEnd: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      startButtonText: {
        color: '#fff',
      },
});

export default styles;