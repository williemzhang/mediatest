import React, { PureComponent } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import appReducer from "./src/reducer.js";

import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStore } from "redux";

const store = createStore(appReducer);

import Screen from "./src/Screen.js";

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Screen />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
