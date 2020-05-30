import { Dimensions } from "react-native";
import { View } from "react-native";
import styled, { css } from "styled-components";
const isPresent = (item, substitute, base) =>
  item ? item : substitute ? substitute : base;
/**window */
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const window = {
  width,
  height,
};
/**Cloison */
const arr = [0, 2, 4, 8, 16, 32, 64];

export const Cloison = styled(View)`
  height: ${(props) => arr[props.space] || 0}px;
`;

/**Cluster */
export const Cluster = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-wrap: wrap;
`;

/**Container */
export { default as Container } from "./container";

/**Stack */
export const Stack = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

/**center */
export const Center = css`
  text-align: center;
`;

/**inAxis */
export const inAxis = {
  marginLeft: "auto",
  marginRight: "auto",
};

/**Border radius */
export function borderRadius(arr) {
  return {
    borderTopLeftRadius: arr[0],
    borderTopRightRadius: arr[1],
    borderBottomRightRadius: arr[2],
    borderBottomLeftRadius: arr[3],
  };
}

/**shadow */
export function shadow(elevation) {
  return {
    elevation,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 * elevation },
    shadowRadius: elevation,
  };
}
