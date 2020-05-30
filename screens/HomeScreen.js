import * as React from "react";
import { Text } from "react-native";
import { Container, Cloison } from "../components/layouts/";
import P from "../components/text";
import Product from "../components/product";
export default function HomeScreen() {
  const arr = new Array(10).fill("");
  return (
    <Container>
      <P isBlack>Recommended products</P>

      {arr.map((_, key) => (
        <Product key={key} id={key} />
      ))}
      <Cloison space={4} />
    </Container>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
