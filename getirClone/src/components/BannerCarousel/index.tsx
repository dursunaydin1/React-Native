//import liraries
import React, { Component, useState } from "react";
import { View, Text, FlatList, Image, Dimensions } from "react-native";
import styles from "./styles";

const { width, height } = Dimensions.get("window");
// create a component
const Index = () => {
  const [banners, setBanners] = useState([
    "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg",
    "https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg",
    "https://cdn.getir.com/promos/6221aef965805c5b1e703845_banner_tr_1646723453154.jpeg",
    "https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg",
  ]);

  return (
    <FlatList
      data={banners}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item }}
          style={{ width: width, height: height * 0.25, resizeMode: "stretch" }}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      snapToAlignment={"center"}
      decelerationRate={"fast"}
    />
  );
};

//make this component available to the app
export default Index;
