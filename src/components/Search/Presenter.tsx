import React from "react";
import { Button } from "react-native";
import styled from "styled-components/native";

interface Props {
  value: string;
  onChangeValue: (text: string) => void;
  onSearch: () => void;
}

export default (props: Props) => {
  const { value, onChangeValue, onSearch } = props;
  return (
    <>
      <SearchInput onChangeText={onChangeValue} value={value} />
      <Button title="Search" onPress={onSearch} />
    </>
  );
};

const SearchInput = styled.TextInput``;
