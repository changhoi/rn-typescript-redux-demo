import { receipeSearch } from "@/redux/modules/receipe";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Presenter from "./Presenter";

const Search = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const onChangeValue = (text: string) => {
    setTerm(text);
  };

  const onSearch = () => {
    dispatch(receipeSearch(term));
  };

  return (
    <Presenter onChangeValue={onChangeValue} onSearch={onSearch} value={term} />
  );
};

export default Search;
