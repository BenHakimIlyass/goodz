import * as React from "react";
import P from "../components/text";
import Product from "../components/product";
import { Cloison, Container } from "../components/layouts/";
import { useSelector } from "react-redux";
import { Image } from "react-native";
import styled from "styled-components";
import data from "../data/choice1";

export default function Choice1() {
  return (
    <Container back>
      <Img source={require("../assets/images/heroChoice1.png")} />
      <Cloison space={4} />
      <P isBlack>Top sells</P>
      {data.map((item, key) => (
        <Product key={key} data={item} />
      ))}

      <Cloison space={6} />
      <P isBlack>You can like also</P>
      {data.map((item, key) => (
        <Product key={key} data={item} />
      ))}

      <Cloison space={4} />
    </Container>
  );
}
const Img = styled(Image)`
  width: 100%;
`;
Choice1.navigationOptions = {
  header: null,
};
