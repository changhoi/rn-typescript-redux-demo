import React from "react";
import { Button } from "react-native";
import styled from "styled-components/native";

interface Props {
  //   value: string;
  onChangeValue: () => void;
  onSearch: () => void;
}

export default (props: Props) => {
  const { onChangeValue, onSearch } = props;
  return (
    <>
      <SearchInput onChangeText={onChangeValue} />
      <Button title="검색" onPress={onSearch} />
    </>
  );
};

const SearchInput = styled.TextInput``;
