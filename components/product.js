import React from "react";
import styled from "styled-components";
import { Image, View, Text, TouchableOpacity } from "react-native";
import P from "./text";
import IconButton from "./iconButton";
const URL =
  "https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80";
const Product = (props) => {
  return (
    <TouchableOpacity {...props}>
      <Cluster style={{ marginTop: 20 }}>
        <Img source={{ uri: URL }} />
        <View style={{ marginTop: 30, marginLeft: 18 }}>
          <Cluster>
            <Price>189 MAD</Price>
            <OldPrice>225 MAD</OldPrice>
          </Cluster>
          <P isBold>Fresh shampoo AIR</P>
          <Brand>Febreze</Brand>
          <Cluster style={{ justifyContent: "space-between", width: 90 }}>
            <IconButton source={require("../assets/images/cart.png")} />
            <IconButton source={require("../assets/images/like.png")} />
          </Cluster>
        </View>
      </Cluster>
    </TouchableOpacity>
  );
};
const Img = styled(Image)`
  width: 160px;
  height: 160px;
  border-radius: 30px;
`;
const Cluster = styled(View)`
  display: flex;
  flex-direction: row;
`;
const OldPrice = styled(Text)`
  font-size: 12px;
  line-height: 36px;
  padding-left: 4px;
  text-decoration-line: line-through;
  color: #232126;
`;
const Price = styled(Text)`
  font-weight: bold;
  font-family: Lato;
  font-size: 24px;
  line-height: 29px;
  color: #b9c3c7;
`;
const Brand = styled(Text)`
  font-weight: bold;
  font-family: Lato;
  font-size: 14px;
  line-height: 29px;
  color: #b9c3c7;
`;
export default Product;
