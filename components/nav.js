import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useTransition } from "react-spring";

import P from "./text";
import Avatar from "./avatar";
import Sidebar from "./sidebar";
import Menu from "./menu";
import { Cluster } from "./layouts";
import { useNavigation } from "@react-navigation/native";

const Nav = ({ back }) => {
  const object = useSelector((state) => state.sidebar.sidebar);
  const router = useNavigation();
  const transitions = useTransition(object, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
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
          <TouchableOpacity onPress={() => router.goBack()}>
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
