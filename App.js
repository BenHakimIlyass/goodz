import * as React from "react";
import { Provider } from "react-redux";
import useCachedResources from "./hooks/useCachedResources";
import { StatusBar } from "react-native";
import { useFonts } from "@use-expo/font";

import store from "./redux/redux";
import Main from "./main";

export default function App(props) {
  const [fontsLoaded] = useFonts({
    Lato: require("./assets/fonts/Lato-Regular.ttf"),
    LatoBold: require("./assets/fonts/Lato-Bold.ttf"),
    LatoBlack: require("./assets/fonts/Lato-Black.ttf"),
  });
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete && !fontsLoaded) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <StatusBar
          translucent={false}
          barStyle="dark-content"
          backgroundColor="#ffffff"
        />
        <Main />
      </Provider>
    );
  }
}
