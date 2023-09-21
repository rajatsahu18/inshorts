import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Linking,
} from "react-native";
import React from "react";
import { styles } from "./styles/singleNewsStyles";

export default function SingleNews({ item, index, darkTheme }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.urlToImage }} style={styles.containerImage} />
      <View
        style={{
          ...styles.description,
          backgroundColor: darkTheme ? "#282C35" : "white",
        }}
      >
        <Text style={{ ...styles.title, color: darkTheme ? "white" : "black" }}>
          {item.title}
        </Text>
        <Text
          style={{ ...styles.content, color: darkTheme ? "white" : "black" }}
        >
          {item.description}
        </Text>
        <Text style={{ color: darkTheme ? "white" : "black" }}>
          Short by
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            {item.author ?? "unknown"}
          </Text>
        </Text>
      </View>
      <ImageBackground
        blurRadius={30}
        style={styles.footer}
        source={{ uri: item.urlToImage }}
      >
        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
          <Text style={{ fontSize: 15, color: "white" }}>
            '{item?.content?.slice(0, 75)}...'
          </Text>
          <Text style={styles.readMore}>Read More</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
