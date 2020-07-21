import * as React from "react";
import P from "../components/text";
import Product from "../components/product";
import { Cloison, Container, inAxis } from "../components/layouts/";
import { useSelector } from "react-redux";
import { Image } from "react-native";
import styled from "styled-components";
import data from "../data/choice3";

export default function Choice2() {
  return (
    <Container back>
      <Img source={require("../assets/images/heroChoice2.png")} />

      <P isBlack>Discover our original products</P>
      {data.map((item, key) => (
        <Product key={key} data={item} />
      ))}

      <Cloison space={6} />
      <P isBlack>Just for you</P>
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
Choice2.navigationOptions = {
  header: null,
};
