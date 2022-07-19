import React from 'react';
import Main from './Main';
import Header from './Header';
import style from "./ShoppingCartPage.module.css"
import Sidebar from './Sidebar';
import { useState } from 'react';



function ShoppingCartPage(props) {
  const makeUniq = (arr) => [...new Set(arr)];
  let total = makeUniq(props.basket).map((item) => item.price);
total.getSum = function (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum +=arr[i];
  }
  return sum;
};
    return (
      <div className={style.app_main}>
        <Header />
        <div className={style.app_wrapper}>
          <Sidebar />
          <Main basket={props.basket} rerender={props.rerender}/>
          </div>
            <div className={style.div_submit}><span>Total price:{total.getSum(total)}</span><button className={style.submit}>Submit</button></div>
      </div>
    );
  }
  
  export default ShoppingCartPage;
  