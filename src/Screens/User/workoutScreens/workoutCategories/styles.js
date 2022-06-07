import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: '100%',
        
      },
      categoriesWrapper: {
        paddingTop: 40,
        paddingHorizontal: 20,
        alignItems: "center",
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'black'
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
        color: "black"
      },
      item: {
        backgroundColor: "#fff",
        height: 80,
        width: 350,
        borderRadius: 10,
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
        height: 40,
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
        marginStart: 80,
        marginTop: 10,
        paddingStart: 8,
        color: 'black'
    
      },
      searchButton: {
        backgroundColor: '#E26F1E',
        width: 80,
        height: 30,
        marginTop: 5,
        padding: 6,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: '41%'
      },
      scheduleText: {
        color: '#E26F1E', 
        marginTop: 20, 
        fontSize: 15, 
        paddingLeft: 10, 
        fontWeight: 'bold'
      },
      scheduleButton: {
        backgroundColor: '#E26F1E',
        width: 300,
        height: 38,
        marginTop: 5,
        padding: 6,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: '14%'
      },
      
});

export default styles;