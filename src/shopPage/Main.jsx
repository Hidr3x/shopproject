import React from 'react';
import style from "./Main.module.css"
import MainItem from './MainItem';



  
function Main(props) {
  const foodItem = props.store.map((item) => (
    <MainItem store={props.store}  basket={props.basket} name={item.name} ID={item.ID} image={item.image} price={item.price} />
  ));
    return (
      <div className={style.div_main} >
  {foodItem}
      </div>
    );
  }
  
  export default Main;
  