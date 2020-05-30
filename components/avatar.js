import React from "react";
import styled from "styled-components";
import { View, Text, Image } from "react-native";
const Avatar = () => {
  const URL =
    "https://images.unsplash.com/photo-1587613754760-cd9a285831b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
  return (
    <Box>
      <Img source={{ uri: URL }} alt="lol" />
      <View>
        <Name>Caterine Laun</Name>
        <Role>827.00 MAD</Role>
      </View>
    </Box>
  );
};
const Img = styled(Image)`
  width: 30px;
  border-radius: 15px;
  height: 30px;
  margin-right: 6px;
`;
const Box = styled(View)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-right: -16px;
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
export default Avatar;
