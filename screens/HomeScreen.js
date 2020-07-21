import * as React from "react";
import { View, ScrollView } from "react-native";
import styled from "styled-components";
import { Container, Cloison } from "../components/layouts/";
import P from "../components/text";
import Product from "../components/product";
import InfoCard from "../components/infoCard";
import { useNavigation } from "@react-navigation/native";
import data from "../data/choice3";

export default function HomeScreen() {
  const router = useNavigation();
  const arr = new Array(10).fill("");
  return (
    <Container>
      <P isBlack>Home</P>
      <Cloison space={4} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <XScroll>
          <InfoCard
            color="pink"
            onPress={() => router.navigate("Choice1")}
            subTitle={{ content: "Top sells of the month", right: "10%" }}
            image={{
              img: require("../assets/images/pork.png"),
              width: 140,
              height: 120,
            }}
          />
          <InfoCard
            color="yellow"
            onPress={() => router.navigate("Choice2")}
            subTitle={{ content: "Meals and hot drinks", right: "10%" }}
            image={{
              img: require("../assets/images/coffeeCup.png"),
              width: 110,
              height: 110,
            }}
          />
          <InfoCard
            color="blue"
            onPress={() => router.navigate("Choice3")}
            subTitle={{ content: "Summer collection", right: "10%" }}
            image={{
              img: require("../assets/images/girlHair.png"),
              width: 140,
              height: 100,
            }}
          />
        </XScroll>
      </ScrollView>
      <Cloison space={5} />
      <P isBlack>Recommended products</P>
      <Cloison space={4} />
      {data.map((item, key) => (
        <Product key={key} id={key} data={item} />
      ))}
      <Cloison space={4} />
    </Container>
  );
}
const XScroll = styled(View)`
  height: 155px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
HomeScreen.navigationOptions = {
  header: null,
};
