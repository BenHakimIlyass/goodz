import React from "react";
import { animated } from "react-spring";
import styled, { css } from "styled-components";
import { View, Text } from "react-native";
import { borderRadius } from "./layouts";
const Sidebar = (props) => {
  return (
    <Box style={props.style}>
      <Text>sssss</Text>
      <Text>sssss</Text>
      <Text>sssss</Text>
    </Box>
  );
};
function shadow(elevation) {
  return {
    elevation,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 * elevation },
    shadowRadius: elevation,
  };
}
const Box = styled(animated(View))`
  background-color: #ffffff;
  ${borderRadius([24, 24, 0, 0])}
  padding: 8px;
  position: absolute;
  z-index: 999;
  ${shadow(10)}
`;
export default Sidebar;
