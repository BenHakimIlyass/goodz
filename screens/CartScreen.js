import * as React from "react";
import P from "../components/text";
import Product from "../components/product";
import Button from "../components/button";
import { Cloison, Container, inAxis } from "../components/layouts/";
import { useSelector } from "react-redux";

export default function CartScreen() {
  const { products } = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart.products);

  return (
    <Container>
      <P isBlack>My cart</P>
      {cart.length > 0 ? (
        <>
          {cart.map((item, key) => (
            <Product key={key} isInCart data={item} />
          ))}
          {products.length > 0 && (
            <>
              <Cloison space={4} />
              <Button style={inAxis}>Get Selected items</Button>
            </>
          )}
          <Cloison space={4} />
          <Button style={inAxis} yellow>
            Checkout all
          </Button>
        </>
      ) : (
        <P style={{ ...inAxis, marginTop: "60%" }}>Your cart is empty</P>
      )}
      <Cloison space={4} />
    </Container>
  );
}

CartScreen.navigationOptions = {
  header: null,
};
