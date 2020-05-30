import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { View, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
const Menu = (props) => {
  const object = useSelector((state) => state.sidebar.sidebar);
  const set = useDispatch();
  const toggle = () =>
    object ? set({ type: "CLOSE_SIDEBAR" }) : set({ type: "OPEN_SIDEBAR" });
  const spring = useSpring({
    width: object ? 25 : 20,
  });

  return (
    <TouchableOpacity
      style={{ width: 30 }}
      onPress={() => {
        toggle();
      }}
    >
      <Line />
      <Line style={spring} />
      <Line />
    </TouchableOpacity>
  );
};
const Line = styled(animated(View))`
  width: 25px;
  height: 2px;
  background-color: black;
  border-radius: 5px;
  margin: 3px 0px;
  margin-left: auto;
  margin-right: 0px;
`;

export default Menu;
