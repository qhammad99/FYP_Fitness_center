import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      header: {
        backgroundColor: "#E26F1E",
       borderRadius: 20,
        height: 60,
        width: 350,
        flexDirection: "row",
        justifyContent: 'center',
        marginStart: 30,
        marginTop: 55,
        alignItems: "center",
      },
      headerText: {
        color: '#262D37',
        fontSize: 20,
        fontWeight: 'bold',
      },
      picker: {
        backgroundColor: "#f2f3f8",
        height: 50,
        width: 350,
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        marginStart: 30,
        borderColor: "#E26F1E",
        marginTop: 20,
        alignItems: "center",
        justifyContent: "space-between",
      },
      viewText: {
        paddingStart: 10,
      },
      dayPicker: {
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
      timeView: {
        backgroundColor: "#f2f3f8",
        height: 100,
        width: 350,
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        marginStart: 30,
        borderColor: "#E26F1E",
        marginTop: 20,
        alignItems: "center",
        justifyContent: "space-between",
      },
      timePicker: {
        width: 150,
        height: 90,
        backgroundColor: "#f2f3f8",
        borderWidth: 2,
        borderRadius: 15,
        marginEnd: 10,
        justifyContent: "center",
        alignItems: "center",
      },
      schedulButton: {
        backgroundColor: "#E26F1E",
        borderRadius: 25,
        height: 40,
        width: 150,
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 30,
        alignItems: "center",
        marginStart: "30%"
      }
});

export default styles;