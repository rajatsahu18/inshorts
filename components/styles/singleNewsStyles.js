import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    transform: [{ scaleY: -1 }],
  },
  containerImage: { height: "45%", resizeMode: "cover", width: windowWidth },
  description: {
    padding: 15,
    flex: 1,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  content: { fontSize: 18, paddingBottom: 10 },
  footer: {
    height: 80,
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#d7be69",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  readMore:{ fontSize: 17, fontWeight: "bold", color: "white" },
});
