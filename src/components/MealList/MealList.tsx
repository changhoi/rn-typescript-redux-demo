import React from "react";
import { useSelector } from "react-redux";
import { ReceipeState, RootStore } from "@receipe/redux-store";
import Presenter from "./Presenter";

const MealList = () => {
  const { list } = useSelector<RootStore, ReceipeState>(
    (store) => store.receipe
  );

  const onClickMeal = (id: number) => () => {
    console.log(id);
  };

  return <Presenter list={list} onClickMeal={onClickMeal} />;
};

export default MealList;
