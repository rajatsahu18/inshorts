import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    subtitle: {
      fontSize: 20,
      fontWeight: "bold",
      paddingBottom: 8,
      marginHorizontal: 5,
      borderBottomColor: "#007FFF",
      borderBottomWidth: 5,
      alignSelf: "flex-start",
      borderRadius: 10,
    },
    category: {
      height: 130,
      margin: 10,
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    categoryImage: {
      height: "60%",
      width: "100%",
      resizeMode: "contain",
    },
    name: {
      fontSize: 12,
      textTransform: "capitalize",
    },
  
    country: {
      height: 130,
      margin: 10,
      alignItems: "center",
      justifyContent: "space-evenly",
    },
  
    sources: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      paddingVertical: 15,
    },
    sourceContainer: {
      height: 150,
      width: "40%",
      borderRadius: 10,
      margin: 15,
      backgroundColor: "#cc313d",
    },
    sourceImage: {
      height: "100%",
      borderRadius: 10,
      resizeMode: "cover",
    },
  });