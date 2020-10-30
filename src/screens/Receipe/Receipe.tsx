import Search from "@/components/Search";
import React from "react";
import styled from "styled-components/native";

const Receipe = () => {
  return (
    <Wrapper>
      <Search />
    </Wrapper>
  );
};

export default Receipe;

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
`;
