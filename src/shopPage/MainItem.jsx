import React from "react";
import style from "./MainItem.module.css";


function MainItem(props) {
 
  return (
    <div className={style.div_mainItem}>
      <div className={style.div_mainItem_image}>
        <img src ={props.image} alt='food'/>
      </div>
      <div className={style.div_mainItem_menu}>
        <span>{props.name.toUpperCase()} </span>
       <div className={style.div_mainItem_button}><button onClick = {()=>{props.basket.push(props.store[props.ID-1])}} className={style.mainItem_button}>add to Cart</button></div> 
      </div>
    </div>
  );
}

export default MainItem;
