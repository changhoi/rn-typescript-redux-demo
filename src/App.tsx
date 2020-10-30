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
import Main from "./screens/Main";

const App: () => ReactNode = () => {
  const store = getStore();

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Main />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
