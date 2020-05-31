import React from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { Cluster } from "./layouts";
import { Ionicons } from "@expo/vector-icons";
import { Linking } from "react-native";
const IconicLink = ({ children, color, name, link, ...props }) => {
  const navigation = useNavigation();
  const colors = {
    pink: "#EDABC7",
    blue: "#18d1d5",
    black: "#232126",
    yellow: "#FEA40C",
  };
  const handleColor = () => colors[color];

  return (
    <TouchableOpacity {...props} onPress={() => Linking.openURL(link)}>
      <Cluster alignItems="center" justifyContent="flex-start">
        <Ionicons name={name} color={handleColor(color)} size={22} />
        <Link style={{ color: handleColor(color) }}>{children}</Link>
      </Cluster>
    </TouchableOpacity>
  );
};
const Link = styled(Text)`
  font-size: 18px;
  line-height: 19px;
  color: #232126;
  padding-left: 8px;
`;
export default IconicLink;
