import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import P from "../components/text";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import CartScreen from "../screens/CartScreen";
import HistoryScreen from "../screens/HistoryScreen";
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

const Label = (focused, route, color) => (
  <P
    style={{
      fontSize: 10,
      paddingBottom: 4,
      color: focused ? color : "#ccc",
    }}
  >
    {route}
  </P>
);
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
          tabBarLabel: ({ focused }) => Label(focused, "Home", "#232126"),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              color="#232126"
              route={routeName}
              name="md-home"
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          title: "Favourite",
          tabBarLabel: ({ focused }) => Label(focused, "Favourite", "#EDABC7"),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              color="#EDABC7"
              route={routeName}
              name="md-heart"
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          title: "History",
          tabBarLabel: ({ focused }) => Label(focused, "History", "#FEA40C"),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              color="#FEA40C"
              route={routeName}
              name="ios-paper"
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Cart",
          tabBarLabel: ({ focused }) => Label(focused, "Cart", "#18D1D5"),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              color="#18D1D5"
              route={routeName}
              name="md-cart"
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
