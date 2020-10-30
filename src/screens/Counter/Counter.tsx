import React, { useEffect, useState } from "react";
import Presenter from "./Presenter";

type onClickParam = "add" | "start";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isStart, setIsStart] = useState(false);

  let interval: NodeJS.Timeout;

  const onClick = (type: onClickParam) => () => {
    switch (type) {
      case "add":
        setCount(count + 1);
        break;
      case "start":
        // setIsStart(true);
        // setTimeout(() => {
        //   setCount(count - 1);
        // }, 1000);
        break;
    }
  };

  return <Presenter count={count} onClick={onClick} />;
};

export default Counter;
