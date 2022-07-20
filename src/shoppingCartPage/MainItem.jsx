import React from "react";
import style from "./MainItem.module.css";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import total from "../Base/total";

function MainItem(props) {
  const [count, setCount] = useState(1);
  function set(count) {
    if (count > 1) {
      return setCount(count - 1);
    }
  }
  return (
    <div className={style.div_mainItem}>
      <div className={style.div_mainItem_image}>
        <img src={props.image} alt="food" />
      </div>

      <div className={style.div_mainItem_menu}>
        <div className={style.div_span}>
          <span>{props.name.toUpperCase()} </span>
          <span>Price:{props.price}</span>
        </div>
        <label
          className={style.up_input}
          for={props.for}
          onClick={() => setCount(count + 1)}
        ></label>
        <label
          className={style.down_input}
          for={props.for}
          onClick={() => set(count)}
        ></label>
        <div className={style.div_mainItem_input}>
          <input
            id={props.for}
            type={props.type}
            min="1"
            value={count}
            className={style.mainItem_input}
          ></input>
        </div>
        <FaTrash
          className={style.delete_icon}
          onClick={function () {
            const index = props.basket.findIndex((n) => n.ID === props._id);
            if (index !== -1) {
              props.basket.splice(index, 1);
            }
            props.rerender();
          }}
        />
      </div>
    </div>
  );
}

export default MainItem;
