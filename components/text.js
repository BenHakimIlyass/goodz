import styled from "styled-components";
import { Text } from "react-native";
const P = styled(Text)`
  font-weight: 900;
  font-size: 18px;
  color: black;
  font-family: ${(props) =>
    props.isBold ? "LatoBold" : props.isBlack ? "LatoBlack" : "Lato"};
`;
export default P;
