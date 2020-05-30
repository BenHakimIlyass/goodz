import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import CartScreen from "../screens/CartScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerTitle: "Goodz",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  });
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} route={routeName} name="md-home" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} route={routeName} name="md-cart" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          title: "Favourite",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} route={routeName} name="md-heart" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
