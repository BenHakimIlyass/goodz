import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Container } from "../components/layouts/";
import P from "../components/text";
import Nav from "../components/nav";
export default function AboutScreen() {
  return (
    <Container>
      <P>Recommended products</P>
      <Text>
        Open up thdddddd ddddddddd screen code for this screen code for this
        screen:
      </Text>
    </Container>
  );
}

AboutScreen.navigationOptions = {
  header: null,
};
