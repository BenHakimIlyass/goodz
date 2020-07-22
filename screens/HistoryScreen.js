import * as React from "react";
import P from "../components/text";
import Product from "../components/product";
import { Cloison, Container } from "../components/layouts/";
import { history } from "../data/history";

export default function HistoryScreen() {
  return (
    <Container>
      {history.map((item, _) => (
        <>
          <Cloison space={4} />
          <P isBlack>{item.date}</P>
          <Cloison space={4} />
          {item.data.map((products, i) => (
            <Product key={i} data={products} />
          ))}
          <Cloison space={4} />
        </>
      ))}

      <Cloison space={6} />
    </Container>
  );
}

HistoryScreen.navigationOptions = {
  header: null,
};
