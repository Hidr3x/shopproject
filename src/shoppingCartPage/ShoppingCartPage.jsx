import React from "react";
import Main from "./Main";
import Header from "./Header";
import style from "./ShoppingCartPage.module.css";
import Sidebar from "./Sidebar";

function ShoppingCartPage(props) {
  function toBasketServer() {
    var axios = require("axios");
    var data = JSON.stringify({
      collection: "basket",
      database: "basket",
      dataSource: "Cluster0",
      document: {
        price: "500",
        name: "Roll",
        image:
          "https://roll-club.kh.ua/wp-content/uploads/2015/09/vechtchina-griby.jpg",
      },
    });
    var config = {
      method: "post",
      url: "https://data.mongodb-api.com/app/data-zhtjd/endpoint/data/v1/action/insertOne",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key":
          "74Uwu5MBbTvJhKATTX8ErGmUH88DjZ5sNmQDCrCovlOmu3vLCaGTDummhbhqCwj7",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        JSON.parse(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const makeUniq = (arr) => [...new Set(arr)];
  let total = makeUniq(props.basket).map((item) => Number(item._price));
  total.getSum = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  };
  return (
    <div className={style.app_main}>
      <Header />
      <div className={style.app_wrapper}>
        <Sidebar />
        <Main basket={props.basket} rerender={props.rerender} />
      </div>
      <div className={style.div_submit}>
        <span>Total price:{total.getSum(total)}</span>
        <button className={style.submit} onClick={toBasketServer}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
