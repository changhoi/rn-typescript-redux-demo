import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

interface Props {
  onClick: (type: "start" | "add") => () => void;
  count: number;
}

export default (props: Props) => {
  const { count, onClick } = props;
  return (
    <CenterizedView>
      <Wrapper isEven={!Boolean(count % 2)}>
        <Text>{count}</Text>
        <TouchableOpacity onPress={onClick("add")}>
          <Text>Add 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClick("start")}>
          <Text>Start</Text>
        </TouchableOpacity>
      </Wrapper>
    </CenterizedView>
  );
};

const CenterizedView = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.View<{ isEven: boolean }>`
  ${(props) => `
  border: 1px solid ${props.isEven ? "green" : "red"};
  
  `}
`;
