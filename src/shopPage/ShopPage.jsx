import React from 'react';
import Main from './Main';
import Header from './Header';
import Sidebar from './Sidebar';
import style from "./ShopPage.module.css";
import store from '../Base/store';


function ShopPage(props) {
    return (
      <div className={style.app_main}>
        <Header />
        <div className={style.app_wrapper}>
          <Sidebar rerender={props.rerender}/>
          <Main store={store} basket={props.basket}/>
          </div>
      </div>
    );
  }
  
  export default ShopPage;
  