import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useTransition } from "react-spring";

import P from "./text";
import Avatar from "./avatar";
import Sidebar from "./sidebar";
import Menu from "./menu";
import { window, Cluster, Stack } from "./layouts";

const Nav = ({ navigation, back }) => {
  const object = useSelector((state) => state.sidebar);
  const transitions = useTransition(object, null, {
    from: {
      height: 0,
      bottom: -20,
    },
    enter: {
      width: window.width,
      height: 0.6 * window.height,
      bottom: -2,
    },
    leave: {
      height: 0,
      bottom: -20,
    },
  });
  return (
    <>
      <Box style={{ width: "100%" }}>
        <P isBold>Goodz</P>
        <Avatar />
      </Box>
      {transitions.map(
        ({ item, key, props }) => item && <Sidebar style={props} key={key} />
      )}
      <Cluster
        justifyContent="space-between"
        alignItems="center"
        style={{ height: 30, top: 65 }}
      >
        {back ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back source={require("../assets/images/arrow.png")} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <Menu />
      </Cluster>
    </>
  );
};
const Box = styled(View)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 70px;
  position: absolute;
  padding-left: 4px;
  padding-right: 12px;
  top: 0px;
`;
const Back = styled(Image)`
  width: 25px;
  height: 25px;
`;
export default Nav;
