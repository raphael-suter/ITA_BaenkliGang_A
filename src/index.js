import registerRootComponent from "expo/build/launch/registerRootComponent";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { DataContextProvider } from "./Data/Data";
import SignUpScreen from "./Screens/SignUpScreen";
import SignInScreen from "./Screens/SignInScreen";
import CreateScreen from "./Screens/CreateScreen";
import CameraScreen from "./Screens/CameraScreen";

const Stack = createStackNavigator();
const SignUpScreenOptions = { title: "Sign Up" };
const SignInScreenOptions = { title: "Sign In" };
const HomeScreenOptions = { title: "Home" };
const CreateScreenOptions = { title: "Create" };
const CameraScreenOptions = { title: "Camera" };

const App = () => (
  <DataContextProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={SignUpScreenOptions}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={SignInScreenOptions}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={HomeScreenOptions}
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
);

registerRootComponent(App);
