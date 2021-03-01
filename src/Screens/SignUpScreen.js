import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "native-base";

const styles = StyleSheet.create({
  container: { paddingTop: 8 },
  wrapper: {
    display: "flex",
    paddingRight: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: { flex: 1, marginVertical: 8, marginHorizontal: 18, fontSize: 16 },
  button: {
    width: 90,
    height: 40,
    marginVertical: 20,
    alignSelf: "center",
    backgroundColor: "tomato",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
  },
});

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");

  return (
    <View style={styles.container}>
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
      <View style={styles.wrapper}>
        <TextInput
          secureTextEntry={true}
          placeholder="Passwort wiederholen"
          value={repPassword}
          onChangeText={setRepPassword}
          style={styles.textInput}
        />
        <Ionicons name="repeat" size={22} color="tomato" />
      </View>
      <Button style={styles.button} rounded>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Button>
    </View>
  );
};

export default SignUpScreen;
