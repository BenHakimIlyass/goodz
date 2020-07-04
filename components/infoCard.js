import React from "react";
import styled from "styled-components";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const colors = {
  blue: ["#178e91", "#18d1d5"],
  yellow: ["#D18300", "#FEA40C"],
  pink: ["#AF4170", "#EDABC7"],
};

const handleBg = (color) => colors[color];
const InfoCard = ({ color, title, subTitle, data, image }) => {
  return (
    <TouchableOpacity style={{ marginRight: 20 }}>
      <Card colors={handleBg(color)}>
        {image ? (
          <Image
            source={image.img}
            style={{
              width: image.width,
              height: image.height,
              position: "absolute",
              right: -20,
              top: 20,
              resizeMode: "stretch",
            }}
          />
        ) : (
          <Title>{title}</Title>
        )}
        <Box style={{ left: subTitle.right ? subTitle.right : 30 }}>
          <Title>{subTitle.content}</Title>
        </Box>
      </Card>
    </TouchableOpacity>
  );
};
const Card = styled(LinearGradient)`
  width: 248px;
  position: relative;
  height: 153px;
  border-radius: 30px;
  overflow: hidden;
  text-align: center;
`;
const Title = styled(Text)`
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  line-height: 100px;
`;
const Box = styled(View)`
  position: absolute;
  top: 65px;
`;
export default InfoCard;
