import styled from "styled-components";
import { View } from "react-native";
const arr = [0, 2, 4, 8, 16, 32, 64];

const Cloison = styled(View)`
  height: ${(props) => arr[props.space] || 0}px;
`;
export default Cloison;
