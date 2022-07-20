import React from 'react';
import store from '../Base/store';
import style from "./Main.module.css"
import MainItem from './MainItem';


var axios = require('axios');
var data = JSON.stringify({
    "collection": "store",
    "database": "store",
    "dataSource": "Cluster0",
   
});       
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-zhtjd/endpoint/data/v1/action/find',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '74Uwu5MBbTvJhKATTX8ErGmUH88DjZ5sNmQDCrCovlOmu3vLCaGTDummhbhqCwj7',
    },
    data: data
};        
 axios(config)
    .then(function (response) {
        (JSON.parse(JSON.stringify(response.data)).documents).map((item)=>store.push(item));
    })
    .catch(function (error) {
        console.log(error);
    });
    

console.log(store)
function Main(props) {
  const foodItem = store.map((item) => (
    <MainItem  store={store} basket={props.basket} name={item._name} ID={item._id} image={item._image} price={item._price} />
  ));
    return (
      <div className={style.div_main} >
  {foodItem}
      </div>
    );
  }
  
  export default Main;
  