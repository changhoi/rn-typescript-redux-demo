/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { ReactNode } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Provider } from "react-redux";
import getStore from "./redux/configureStore";
import Counter from "./screens/Counter";
import Receipe from "./screens/Receipe";

const App: () => ReactNode = () => {
  const store = getStore();

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Receipe />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
