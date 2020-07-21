import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import ProductScreen from "./screens/ProductScreen";
import Choice1 from "./screens/Choice1";
import Choice2 from "./screens/Choice2";
import Choice3 from "./screens/Choice3";
import Login from "./screens/Login";
const Stack = createStackNavigator();
import { useSelector } from "react-redux";
export default function Main(props) {
  const { user } = useSelector((state) => state.auth);
  const initialPage = user ? "Root" : "Login";
  return (
    <>
      <NavigationContainer linking={LinkingConfiguration}>
        <Stack.Navigator
          initialRouteName={initialPage}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Root" component={BottomTabNavigator} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Product" component={ProductScreen} />
          <Stack.Screen name="Choice1" component={Choice1} />
          <Stack.Screen name="Choice2" component={Choice2} />
          <Stack.Screen name="Choice3" component={Choice3} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
