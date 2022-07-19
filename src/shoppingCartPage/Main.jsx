import React from 'react';
import style from "./Main.module.css"
import MainItem from './MainItem';




 

function Main(props) {
  const makeUniq = (arr) => [...new Set(arr)];
  const foodItem = makeUniq(props.basket).map((item) => (
    <MainItem basket={props.basket} name={item.name} ID={item.ID} image={item.image} price={item.price} type='number' for={`input${item.ID}`} rerender={props.rerender}/>
  ));
    return (
      <div className={style.div_main} >
 {foodItem}
      </div>
    );
  }
  
  export default Main;
  