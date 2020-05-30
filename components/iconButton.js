import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components";

const IconButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <Img source={props.source} />
  </TouchableOpacity>
);
const Img = styled(Image)`
  width: 34px;
  height: 34px;
`;
export default IconButton;
