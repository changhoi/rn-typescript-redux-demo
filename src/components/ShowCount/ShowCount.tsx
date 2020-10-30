import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

interface CountState {
  count: number;
}

interface Store {
  count: CountState;
}

const ShowCount = () => {
  const { count } = useSelector<Store, CountState>((store) => store.count);
  return (
    <View>
      <Text>{count}</Text>
    </View>
  );
};

export default ShowCount;
