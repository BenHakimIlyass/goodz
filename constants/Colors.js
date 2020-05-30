const black = "#232126";
const pink = "#EDABC7";
const blue = "#18D1D5";
const selected = {
  Home: black,
  Cart: blue,
  Favourite: pink,
};
const handleColor = (route) => selected[route];
export default (route) => ({
  blue,
  tabIconDefault: "#ccc",
  tabIconSelected: handleColor(route),
  tabBar: blue,
  errorBackground: "red",
  errorText: "#fff",
  warningBackground: "#EAEB5E",
  warningText: blue,
  noticeBackground: blue,
  noticeText: "#fff",
});
