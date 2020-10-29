/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { ReactNode } from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Test from "@/Test";

const App: () => ReactNode = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Test />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
