import React from "react";
import styled from "styled-components";
import { Image, View, Text, TouchableOpacity } from "react-native";
import P from "./text";
import IconButton from "./iconButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
const data = {
  id: "21234",
  name: "Fresh shampoo AIR",
  brand: "Febreze",
  price: "189",
  oldPrice: "225",
};
const URL =
  "https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80";
const Product = ({ isFavourite, isInCart, id, ...rest }) => {
  const [state, set] = React.useState(false);
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const filter = (arr, id) => arr.filter((e) => e !== id);

  const setProducts = () => {
    set(!state);
    dispatch({
      type: "SET_PRODUCTS",
      products: !state ? [...products, id] : filter(products, id),
    });
  };
  const router = useNavigation();
  const hasSelect = () => isInCart || isFavourite;
  return (
    <Cluster alignItems="center">
      {hasSelect() && (
        <Select onPress={setProducts}>
          {state ? (
            <Image source={require("../assets/images/toggleon.png")} />
          ) : (
            <Image source={require("../assets/images/toggleoff.png")} />
          )}
        </Select>
      )}
      <TouchableOpacity {...rest} onPress={() => router.navigate("Product")}>
        <Cluster style={{ marginTop: 20 }}>
          <Img source={{ uri: URL }} />
          <View style={{ marginTop: 30, marginLeft: 18 }}>
            <Cluster>
              <Price>{data.price} MAD</Price>
              <OldPrice>{data.oldPrice} MAD</OldPrice>
            </Cluster>
            <P isBold>{data.name}</P>
            <Brand>{data.brand}</Brand>
            <Cluster style={{ justifyContent: "space-between", width: 90 }}>
              {!isInCart && (
                <IconButton source={require("../assets/images/cart.png")} />
              )}
              {!isFavourite && (
                <IconButton source={require("../assets/images/like.png")} />
              )}
            </Cluster>
          </View>
        </Cluster>
      </TouchableOpacity>
    </Cluster>
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
const Select = styled(TouchableOpacity)`
  margin-right: 6px;
  margin-left: 4px;
  margin-top: 16px;
`;
export default Product;
