import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import ProductScreen from "./screens/ProductScreen";
const Stack = createStackNavigator();

export default function Main(props) {
  return (
    <>
      <NavigationContainer linking={LinkingConfiguration}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Root" component={BottomTabNavigator} />
          <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
