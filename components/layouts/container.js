import * as React from "react";
import { View, ScrollView } from "react-native";
import Nav from "../../components/nav";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = ({ children, ...props }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Frame>
      {user && <Nav {...props} />}
      <Box>{children}</Box>
    </Frame>
  );
};
const Box = styled(ScrollView)`
  position: relative;
  width: 100%;
  top: 80px;
  background-color: #ffffff;
`;
const Frame = styled(View)`
  width: 100%;
  padding: 0px 4px;
  flex: 1;
  background-color: #fff;
  padding-bottom: 80px;
`;
export default Container;
