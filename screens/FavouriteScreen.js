import * as React from "react";
import P from "../components/text";
import Product from "../components/product";
import Button from "../components/button";
import { Cloison, Container, inAxis } from "../components/layouts/";
import { useSelector } from "react-redux";

export default function FavouriteScreen() {
  const { products } = useSelector((state) => state.product);
  const favourite = useSelector((state) => state.favourite.products);

  return (
    <Container>
      <P isBlack>Favourite products</P>
      {favourite.length > 0 ? (
        <>
          {favourite.map((item, key) => (
            <Product key={key} isFavourite data={item} />
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
        </>
      ) : (
        <P style={{ ...inAxis, marginTop: "60%" }}>
          Seems like you didn't put a like yet
        </P>
      )}
      <Cloison space={4} />
    </Container>
  );
}

FavouriteScreen.navigationOptions = {
  header: null,
};
