import React from "react";
import { animated } from "react-spring";
import styled, { css } from "styled-components";
import { ScrollView, View, Text, Image } from "react-native";
import { window, shadow, borderRadius, inAxis, Cloison } from "./layouts";
import P from "./text";
import Button from "./button";
import IconicLink from "./iconicLink";
const Sidebar = (props) => {
  const URL =
    "https://images.unsplash.com/photo-1590781585743-7b5fb00a0cc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=661&q=80";
  return (
    <Box
      style={{
        ...props.style,
        width: window.width,
        height: 0.6 * window.height,
      }}
    >
      <Cloison space={4} />
      <P style={{ ...inAxis, color: "#b9c3c7" }} isBold>
        Menu
      </P>
      <Cloison space={5} />
      <Img source={{ uri: URL }} style={inAxis} />
      <Cloison space={4} />
      <Name style={inAxis}>Caterine Laun</Name>
      <Cloison space={2} />
      <Role style={inAxis}>872.00 MAD</Role>
      <Cloison space={5} />
      <View style={inAxis}>
        <IconicLink color={"black"} name="md-call" link="tel:+212539652312">
          + 212 5 39 65 23 12
        </IconicLink>
        <Cloison space={4} />
        <IconicLink
          color={"pink"}
          name="md-mail"
          link="mailto:contact@goodz.com"
        >
          contact@goodz.com
        </IconicLink>
        <Cloison space={4} />
        <IconicLink
          color={"yellow"}
          name="md-map"
          link="https://www.google.com/maps/search/?api=1&query=600 Coal Street, PA"
        >
          600 Coal Street, PA
        </IconicLink>
      </View>
      <Cloison space={5} />
      <Button style={inAxis} black>
        Logout
      </Button>
    </Box>
  );
};
const Img = styled(Image)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
const Box = styled(animated(ScrollView))`
  background-color: #ffffff;
  ${borderRadius([24, 24, 0, 0])}
  padding: 8px;
  position: absolute;
  z-index: 999;
  ${shadow(10)}
  bottom:-2px;
`;
const Name = styled(Text)`
  font-style: normal;
  font-weight: bold;
  color: black;
  text-align: right;
  font-size: 14px;
  margin: 0;
`;
const Role = styled(Text)`
  font-style: normal;
  color: grey;
  margin: 0;
  font-weight: 400;
  font-size: 12px;
  text-align: right;
`;
export default Sidebar;
