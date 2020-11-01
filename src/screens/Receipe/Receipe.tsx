import MealList from "@/components/MealList";
import Search from "@/components/Search";
import MealDetail from "@/components/MealDetail";
import React from "react";
import styled from "styled-components/native";

const Receipe = () => {
  return (
    <Wrapper>
      <Scroll>
        <Search />
        <MealList />
        <MealDetail/>
      </Scroll>
    </Wrapper>
  );
};

export default Receipe;

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
`;

const Scroll = styled.ScrollView `
  width: 100%;
`
