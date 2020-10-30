import { countAdd, countReset } from "@/redux/modules/count";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Presenter from "./Presenter";

interface CountState {
  count: number;
}

interface Store {
  count: CountState;
}

const Count: React.FC = () => {
  // 리덕스 사용 코드
  const { count } = useSelector<Store, CountState>((store) => store.count);
  const dispatch = useDispatch();

  const onClick = (type: "reset" | "add") => () => {
    switch (type) {
      case "add":
        dispatch(countAdd());
        break;
      case "reset":
        dispatch(countReset());
        break;
    }
  };

  /* 이전 코드
  const [count, setCount] = useState(0);

  const onClick = (type: "reset" | "add") => () => {
    switch (type) {
      case "add":
        setCount(count + 1);
        break;
      case "reset":
        setCount(0);
        break;
    }
  };
  */

  return <Presenter count={count} onClick={onClick} />;
};

export default Count;
