import React from "react";
import style from "./Main.module.css";
import MainItem from "./MainItem";

function Main(props) {
  const makeUniq = (arr) => [...new Set(arr)];
  const foodItem = makeUniq(props.basket).map((item) => (
    <MainItem
      basket={props.basket}
      name={item._name}
      ID={item._id}
      image={item._image}
      price={item._price}
      type="number"
      for={`input${item._id}`}
      rerender={props.rerender}
    />
  ));
  return <div className={style.div_main}>{foodItem}</div>;
}

export default Main;
