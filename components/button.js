import styled from "styled-components";
import { TouchableOpacity, Text } from "react-native";
import React from "react";

const Content = styled(Text)`
  color: #fff;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
`;

const Button = styled(({ children, ...props }) => (
  <TouchableOpacity {...props}>
    <Content>{children}</Content>
  </TouchableOpacity>
))`
  width: 180px;
  height: 36px;
  background-color: ${(props) =>
    props.pink
      ? "#EDABC7"
      : props.yellow
      ? "#FEA40C"
      : props.black
      ? "#232126"
      : "#18d1d5"};
  border-radius: 20px;
`;
export default Button;
