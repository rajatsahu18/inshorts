import { View, Text, Dimensions, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { NewsContext } from "../api/Context";
import Carousel from "react-native-snap-carousel";
import SingleNews from "../components/SingleNews";
import { styles } from "./styles/newsScreenStyles";

export default function NewsScreen() {
  const {
    news: { articles },
    darkTheme,
  } = useContext(NewsContext);
  const [activeIndex, setActiveIndex] = useState();
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          firstItem={articles.slice(0, 10).length - 1}
          layout={"stack"}
          data={articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item, index }) => (
            <SingleNews item={item} index={index} darkTheme={darkTheme} />
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View>
  );
}
