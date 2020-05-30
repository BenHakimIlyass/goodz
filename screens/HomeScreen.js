import * as React from "react";
import { Text } from "react-native";
import { Container } from "../components/layouts/";
import P from "../components/text";
import Product from "../components/product";
export default function HomeScreen({ navigation }) {
  const navigate = (page) => navigation.navigate(page);
  return (
    <Container>
      <P isBlack>Recommended products</P>
      <Product onPress={() => navigate("Product")} />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Text>
        Open up the code for this screen code for this screen code for this
        screen:
      </Text>
    </Container>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
