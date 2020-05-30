import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    bottomTabs: { visible: true, animate: false },
    Root: {
      path: "root",
      screens: {
        Home: "home",
        Links: "links",
      },
    },
  },
};
