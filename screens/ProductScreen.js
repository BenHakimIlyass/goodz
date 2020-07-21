import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import styled from "styled-components";
import { Text, View, Image } from "react-native";
import {
  window,
  Cloison,
  Container,
  Center,
  inAxis,
} from "../components/layouts/";
import P from "../components/text";
import { useSelector } from "react-redux";
import Button from "../components/button";
export default function ProductScreen({ navigation }) {
  const URL =
    "https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80";

  const data = useSelector((state) => state.currentProduct.currentProduct);
  console.log("l", data);
  return (
    <Container back>
      <Img source={{ uri: data.url }} />
      <Cloison space={4} />
      <P isBlack style={{ textAlign: "center" }}>
        {data.name}
      </P>
      <Brand>{data.brand}</Brand>
      <Cloison space={4} />
      <Description>{data.body}</Description>

      <Cloison space={4} />
      <Price>{data.price} MAD</Price>
      <OldPrice>{data.oldPrice} MAD</OldPrice>
      <Cloison space={4} />
      <Button style={inAxis}>Checkout</Button>
      <Cloison space={4} />
      <Button style={inAxis} pink>
        Add to cart
      </Button>
      <Cloison space={4} />
    </Container>
  );
}
const Img = styled(Image)`
  width: 100%;
  height: ${window.width}px;
  border-radius: 30px;
`;
const Description = styled(Text)`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: black;
`;
const Brand = styled(Text)`
  font-weight: bold;
  font-family: Lato;
  font-size: 14px;
  text-align: center;
  line-height: 29px;
  color: #b9c3c7;
`;
const OldPrice = styled(Text)`
  font-size: 12px;
  text-decoration-line: line-through;
  color: #232126;
  ${Center}
`;
const Price = styled(Text)`
  font-weight: bold;
  font-family: Lato;
  font-size: 24px;
  line-height: 29px;
  ${Center}
  color: #b9c3c7;
`;
ProductScreen.navigationOptions = {
  header: null,
};
