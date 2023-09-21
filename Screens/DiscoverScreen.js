import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { NewsContext } from "../api/Context";
import Carousel from "react-native-snap-carousel";
import { categories, country, sources } from "../api/api";
import Search from "../components/Search";
import { styles } from "./styles/discoverStyles";

export default function DiscoverScreen() {
  const windowWidth = Dimensions.get("window").width;
  const SLIDE_WIDTH = Math.round(windowWidth / 3.5);
  const { setCategory, setSource, darkTheme } = useContext(NewsContext);

  return (
    <>
      <ScrollView style={styles.container}>
        <Search />
        {/* Categories */}
        <Text
          style={{ ...styles.subtitle, color: darkTheme ? "white" : "dark" }}
        >
          Categories
        </Text>
        <Carousel
          layout={"default"}
          data={categories}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => setCategory(item.name)}
                style={styles.category}
              >
                <Image
                  source={{ uri: item.pic }}
                  style={styles.categoryImage}
                />
                <Text
                  style={{
                    ...styles.name,
                    color: darkTheme ? "white" : "black",
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
          sliderWidth={windowWidth}
          itemWidth={SLIDE_WIDTH}
          activeSlideAlignment={"start"}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
        />

        {/* Countries */}

        {/* <Text
          style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}
        >
          Countries
        </Text>
        <Carousel
          layout={"default"}
          data={country}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => setCategory(item.name)}
                key={item.id}
                style={styles.category}
              >
                <Image
                  source={{ uri: item.pic }}
                  style={styles.categoryImage}
                />
                <Text
                  style={{
                    ...styles.name,
                    color: darkTheme ? "white" : "black",
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
          sliderWidth={windowWidth}
          itemWidth={SLIDE_WIDTH}
          activeSlideAlignment={"start"}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
        /> */}


        {/* Sources */}
        
        <Text style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}>Sources</Text>

        <View style={styles.sources}>
          {sources.map((s) => (
            <TouchableOpacity
              onPress={() => setSource(s.id)}
              key={s.id}
              style={styles.sourceContainer}
            >
              <Image source={{ uri: s.pic }} style={styles.sourceImage} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
}