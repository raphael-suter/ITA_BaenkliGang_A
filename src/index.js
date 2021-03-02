import registerRootComponent from "expo/build/launch/registerRootComponent";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { DataContextProvider } from "./Data/Data";
import SignUpScreen from "./Screens/SignUpScreen";
import SignInScreen from "./Screens/SignInScreen";
import CreateScreen from "./Screens/CreateScreen";
import { Root } from "native-base";
import CameraScreen from "./Screens/CameraScreen";
import * as Font from "expo-font";
import ItemScreen from "./Screens/ItemScreen";

const Stack = createStackNavigator();
const SignUpScreenOptions = { title: "Sign Up", headerLeft: null };
const SignInScreenOptions = { title: "Sign In", headerLeft: null };
const HomeScreenOptions = { title: "Home", headerLeft: null };
const ItemScreenOptions = { title: "Item" };
const CreateScreenOptions = { title: "Create" };
const CameraScreenOptions = { title: "Camera" };

const App = () => {
  Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  });

  return (
    <Root>
      <DataContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="SignInScreen"
              component={SignInScreen}
              options={SignInScreenOptions}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
              options={SignUpScreenOptions}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={HomeScreenOptions}
            />
            <Stack.Screen
              name="ItemScreen"
              component={ItemScreen}
              options={ItemScreenOptions}
            />
            <Stack.Screen
              name="CreateScreen"
              component={CreateScreen}
              options={CreateScreenOptions}
            />
            <Stack.Screen
              name="CameraScreen"
              component={CameraScreen}
              options={CameraScreenOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </DataContextProvider>
    </Root>
  );
};

registerRootComponent(App);
