import React from "react";
import { animated } from "react-spring";
import styled from "styled-components";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
} from "react-native";
import {
  window,
  shadow,
  borderRadius,
  inAxis,
  Cluster,
  Cloison,
} from "./layouts";
import P from "./text";
import Button from "./button";
import IconicLink from "./iconicLink";
const Sidebar = (props) => {
  const [state, set] = React.useState(false);
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
      {state ? (
        <Wallet toggle={() => set(false)} />
      ) : (
        <>
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
          <Cluster style={{ ...inAxis, width: 300 }}>
            <Button
              style={{ ...inAxis, width: 120 }}
              blue
              onPress={() => set(true)}
            >
              Add amount
            </Button>
            <Button style={{ ...inAxis, width: 120 }} black>
              Logout
            </Button>
          </Cluster>
        </>
      )}
    </Box>
  );
};
const Wallet = ({ toggle }) => {
  const [amount, setAmount] = React.useState(0);
  return (
    <>
      <Cloison space={3} />
      <TouchableOpacity onPress={toggle}>
        <Back source={require("../assets/images/arrow.png")} />
      </TouchableOpacity>
      <P style={{ ...inAxis, color: "#b9c3c7" }} isBold>
        Wallet
      </P>
      <Cloison space={5} />
      <Role style={inAxis}>Current amount</Role>
      <Role style={{ ...inAxis, fontSize: 28, color: "#000" }}>872.00 MAD</Role>
      <Cloison space={5} />
      <Image
        style={{ width: "100%", ...inAxis, height: 100, borderRadius: 15 }}
        source={{
          uri:
            "https://www.panierdachat.com/wp-content/uploads/fly-images/7655/vendre-en-ligne-avec-paypal-1010x9999.png",
        }}
      />
      <Cloison space={4} />
      <Input
        selectionColor="#18D1D5"
        underlineColorAndroid="#18D1D5"
        placeholder="Add amount"
        placeholderTextColor="#B9C3C7"
        keyboardType="numeric"
        onChangeText={(e) => setAmount(e)}
        style={{
          borderWidth: 0,
          height: 60,
          fontSize: 16,
          borderColor: "#fff",
          borderWidth: 1,
          ...inAxis,
          width: 180,
        }}
      />
      <Cloison space={4} />
      {amount > 0 && (
        <Button style={{ ...inAxis, width: 120 }} blue>
          Add amount
        </Button>
      )}
    </>
  );
};
const Back = styled(Image)`
  width: 25px;
  height: 25px;
`;
const Input = styled(TextInput)`
  border-color: white;
  padding-left: 6px;
  height: 40px;
`;
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
