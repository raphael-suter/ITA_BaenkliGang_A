import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, Toast } from "native-base";
import { DataContext } from "../Data/Data";

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 8, justifyContent: "space-between" },
  wrapper: {
    paddingRight: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: { flex: 1, marginVertical: 8, marginHorizontal: 18, fontSize: 16 },
  button: {
    marginVertical: 20,
    alignSelf: "center",
    backgroundColor: "tomato",
  },
  buttonText: {
    width: 90,
    padding: 20,
    textAlign: "center",
    color: "white",
  },
  link: {
    marginVertical: 20,
    alignSelf: "center",
    justifyContent: "center",
  },
  linkText: {
    color: "tomato",
  },
});

const SignInScreen = ({ navigation }) => {
  const { token, setToken } = useContext(DataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    fetch("http://192.168.100.1:8080/api/sign_in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        switch (response.status) {
          case 200:
            response.json().then(({ message }) => {
              setEmail("");
              setPassword("");
              setToken(message);

              navigation.navigate("HomeScreen");
            });

            break;
          case 400:
          case 404:
            response
              .json()
              .then(({ message }) =>
                Toast.show({ text: message, duration: 2000 })
              );

            break;
          default:
            alert("ERROR!");
        }
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    if (token && token.trim() !== "") {
      navigation.navigate("HomeScreen");
    }
  }, [token]);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="E-Mail-Adresse"
            value={email}
            onChangeText={setEmail}
            style={styles.textInput}
          />
          <Ionicons name="mail" size={22} color="tomato" />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            secureTextEntry={true}
            placeholder="Passwort"
            value={password}
            onChangeText={setPassword}
            style={styles.textInput}
          />
          <Ionicons name="lock-closed" size={22} color="tomato" />
        </View>
        <Button style={styles.button} rounded onPress={signIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Button>
      </View>
      <Button
        style={styles.link}
        transparent
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        <Text style={styles.linkText}>Sign Up</Text>
      </Button>
    </View>
  );
};

export default SignInScreen;
