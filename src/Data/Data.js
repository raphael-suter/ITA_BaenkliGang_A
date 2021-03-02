import React, { createContext, useEffect, useState } from "react";
import { AsyncStorage } from "react-native";

const DataContext = createContext({});

const save = (key, value) => {
  try {
    AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

const read = (key) => {
  try {
    const value = AsyncStorage.getItem(key);

    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
};

const DataContextProvider = ({ children }) => {
  const [token, _setToken] = useState("");
  const [items, _setItems] = useState([]);

  const setToken = (input) => {
    _setToken(input);
    save("token", input);
  };

  const setItems = (input) => {
    _setItems(input);
    save("items", JSON.stringify(input));
  };

  useEffect(() => {
    read("token").then((data) => {
      _setToken(data);
    });

    read("items").then((data) => {
      _setItems(JSON.parse(data || "[]"));
    });
  }, []);

  const value = { token, setToken, items, setItems };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataContext, DataContextProvider };
