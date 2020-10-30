import React from "react";
import { Button, Text, View } from "react-native";

interface Props {
  onClick: (type: "reset" | "add") => () => void;
  count: number;
}

export default (props: Props) => {
  const { onClick, count } = props;
  return (
    <View>
      <Text>{count}</Text>
      <Button onPress={onClick("add")} title="Add 1" />
      <Button onPress={onClick("reset")} title="Reset" />
    </View>
  );
};
