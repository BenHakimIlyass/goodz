import * as React from "react";
import P from "../components/text";
import TextInput from "../components/input";
import Button from "../components/button";
import { Cloison, Container, Cluster, inAxis } from "../components/layouts/";
import { useDispatch } from "react-redux";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [user, set] = React.useState({ email: "", password: "" });
  const [error, setError] = React.useState(false);

  const auth = useDispatch();
  const router = useNavigation();

  const writeUser = (args) => set({ ...user, ...args });
  const isNotEmpty = (e) => e !== "" && e !== undefined;

  const login = () => {
    if (isNotEmpty(user.email) && isNotEmpty(user.password)) {
      auth({
        type: "LOGIN",
        user,
      });
      router.navigate("Root");
    } else {
      setError(true);
    }
  };
  const errorHandler = {
    error,
    placeholderTextColor: !error ? "gray" : "#85112D",
  };
  return (
    <Container>
      <Cluster
        alignItems="center"
        space="0.3rem"
        style={{ width: 160, ...inAxis }}
      >
        <P isBlack style={{ ...inAxis, fontSize: 26 }}>
          Goodz
        </P>
        <Image
          source={require("../assets/images/icon.png")}
          style={{ width: 80, height: 80 }}
        />
      </Cluster>
      <Cloison space={4} />
      {/* login */}
      <P isBlack style={inAxis}>
        Login
      </P>
      <Cloison space={5} />

      <TextInput
        {...errorHandler}
        onChangeText={(email) => writeUser({ email: email })}
        value={user.email}
        placeholder="Email..."
      />

      <Cloison space={4} />
      <TextInput
        {...errorHandler}
        onChangeText={(pass) => writeUser({ password: pass })}
        value={user.password}
        secureTextEntry={true}
        textContentType="password"
        placeholder="Password..."
      />
      <Cloison space={4} />
      <Button style={inAxis} yellow onPress={login}>
        Login
      </Button>
      <Cloison space={5} />
      {/* register */}
      <P isBlack style={inAxis}>
        Register
      </P>
      <Cloison space={5} />
      <TextInput onChangeText={(user) => set(user)} placeholder="Email..." />
      <Cloison space={4} />
      <TextInput
        onChangeText={(email) => writeUser({ email: email })}
        placeholder="Your name..."
      />
      <Cloison space={4} />
      <TextInput
        onChangeText={(user) => set(user)}
        secureTextEntry={true}
        textContentType="password"
        placeholder="Password..."
      />
      <Cloison space={4} />
      <TextInput
        onChangeText={(user) => set(user)}
        secureTextEntry={true}
        textContentType="password"
        placeholder="Confirm your password..."
      />
      <Cloison space={4} />
      <Button style={inAxis} blue>
        Register
      </Button>
      <Cloison space={4} />
    </Container>
  );
}

Login.navigationOptions = {
  header: null,
};
