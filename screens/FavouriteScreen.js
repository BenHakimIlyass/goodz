import * as React from "react";
import P from "../components/text";
import Product from "../components/product";
import Button from "../components/button";
import { Cloison, Container, inAxis } from "../components/layouts/";
import { useSelector } from "react-redux";
export default function FavouriteScreen() {
  const { products } = useSelector((state) => state.product);

  const arr = new Array(10).fill("");
  return (
    <Container>
      <P isBlack>Favourite products</P>
      {arr.map((_, key) => (
        <Product key={key} isFavourite />
      ))}
      {products.length > 0 && (
        <>
          <Cloison space={4} />
          <Button style={inAxis} pink>
            Get Selected items
          </Button>
        </>
      )}
      <Cloison space={4} />
      <Button style={inAxis} yellow>
        Checkout all
      </Button>
      <Cloison space={4} />
    </Container>
  );
}

FavouriteScreen.navigationOptions = {
  header: null,
};
