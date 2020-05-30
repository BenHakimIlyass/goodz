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
export default function ProductScreen({ navigation }) {
  const URL =
    "https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80";

  return (
    <Container navigation={navigation} back={"true"}>
      <Img source={{ uri: URL }} />
      <Cloison space={4} />
      <P isBlack style={{ textAlign: "center" }}>
        Fresh shampoo
      </P>
      <Brand>Febreze</Brand>
      <Cloison space={4} />
      <Description>
        We brought our heads (of hair) together to test the latest cleansing and
        conditioning launches for this year's SELF Healthy Beauty Awards. The
        curly girls took the co-washes, the bleach blondes tried the purple
        shampoos, and the fine-haired ladies snatched up the foam conditioner
        (yes, that does exist). In the end, we came up with a list of favorites
        that span many hair types and textures—and for all the shampoo agnostics
        out there, one that simply rocks the basics: clean, soft, good-smelling
        hair.
      </Description>

      <Cloison space={4} />
      <Price>189 MAD</Price>
      <OldPrice>225 MAD</OldPrice>
      <Cloison space={4} />
      <Button style={inAxis}>Checkout</Button>
      <Cloison space={4} />
      <Button style={inAxis} pink>
        Add to cart
      </Button>
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
