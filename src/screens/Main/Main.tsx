import React from "react";
import { View } from "react-native";
import Count from "@/components/Count";
import ShowCount from "@/components/ShowCount";

const Main = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Count />
      <ShowCount />
      <ShowCount />
      <ShowCount />
    </View>
  );
};

export default Main;
