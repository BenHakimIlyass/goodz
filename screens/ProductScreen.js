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
import Button from "../components/button";
import { useSelector, useDispatch } from "react-redux";

export default function ProductScreen({ navigation }) {
  const data = useSelector((state) => state.currentProduct.currentProduct);
  const dispatch = useDispatch();
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
      <Button
        style={inAxis}
        pink
        onPress={() => dispatch({ type: "SEND_TO_CART", product: data })}
      >
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
