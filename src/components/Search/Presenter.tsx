import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

interface Props {
  value: string;
  onChangeValue: (text: string) => void;
  onSearch: () => void;
}

export default (props: Props) => {
  const { value, onChangeValue, onSearch } = props;
  return (
    <Search>
      <SearchInput onChangeText={onChangeValue} value={value} />
      <SearchButton onPress={onSearch}>
        <Text>Search</Text>
      </SearchButton>
    </Search>
  );
};


const Search = styled.View`
  padding: 30px;
  justify-content: center;
  align-items: center;
`;

const SearchButton = styled.TouchableOpacity`
  padding: 10px;
  margin-top: 10px;
  width: 40%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #EDCBED;
`;


const SearchInput = styled.TextInput`
  border: 1px solid black;
  border-radius: 15px;
  width: 80%;
  margin: 0 auto;

`;
