import React from "react";
import { animated } from "react-spring";
import styled, { css } from "styled-components";
import { View, Text } from "react-native";
import { window, shadow, borderRadius } from "./layouts";

const Sidebar = (props) => {
  return (
    <Box
      style={{
        ...props.style,
        width: window.width,
        height: 0.6 * window.height,
      }}
    >
      <Text>sssss</Text>
      <Text>sssss</Text>
      <Text>sssss</Text>
    </Box>
  );
};

const Box = styled(animated(View))`
  background-color: #ffffff;
  ${borderRadius([24, 24, 0, 0])}
  padding: 8px;
  position: absolute;
  z-index: 999;
  ${shadow(10)}
  bottom:-2px;
`;

export default Sidebar;
