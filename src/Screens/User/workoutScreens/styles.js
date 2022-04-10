import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAED",
      },
      categoriesWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
        alignItems: "center",
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
      },
      items: {
        marginTop: 30,
      },
      buttonStyle: {
        height: 30,
        width: 70,
        color: "#fff",
      },
      textStyle: {
        fontSize: 15,
        fontWeight: "bold",
        position: "absolute",
      },
      item: {
        backgroundColor: "#fff",
        height: 80,
        width: 350,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginStart: 30,
        marginTop: 30,
      },
      itemDupl: {
        backgroundColor: "#fff",
        height: 80,
        width: 350,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginStart: 30,
        marginTop: 10,
      },
      imageStyle: {
        width: 350,
        height: 80,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
      searchBar: {
        height: 35,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
        marginStart: 80,
        marginTop: 10,
        paddingStart: 8,
    
      },
      searchButton: {
        width: 80,
        height: 35,
        backgroundColor: '#FFFAE5',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        marginStart: 170,
        marginTop: 5
      },
});

export default styles;