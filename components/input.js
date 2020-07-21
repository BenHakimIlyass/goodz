import styled from "styled-components";
import { TextInput } from "react-native";
const Input = styled(TextInput)`
  font-size: 14px;
  padding: 8px;
  width: 80%;
  font-family: Lato;
  margin-right: auto;
  margin-left: auto;
  border-radius: 5px;
  height: 32px;
  background-color: ${(props) => (!props.error ? "#fbfbfb" : "#EDABC7")};
  color: ${(props) => (!props.error ? "black" : "#AE3350")};
`;
export default Input;
