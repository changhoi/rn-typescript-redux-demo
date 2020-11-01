import { Meal } from "@receipe/redux-store";
import React from "react";
import Presenter from "./Presenter";

const MealDetail = () => {
    return <Presenter detail={{instruction: "example", name: "food", thumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
}

export default MealDetail;