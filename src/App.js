import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./shopPage/ShopPage";
import ShoppingCartPage from "./shoppingCartPage/ShoppingCartPage";
import basket from "./Base/basket";



var axios = require('axios');
var data = JSON.stringify({
    "collection": "users",
    "database": "test",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1,
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-zhtjd/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '74Uwu5MBbTvJhKATTX8ErGmUH88DjZ5sNmQDCrCovlOmu3vLCaGTDummhbhqCwj7',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

function App(props) {
  const makeUniq = (arr) => [...new Set(arr)];
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/shop" element={<ShopPage  basket={basket}/>} />
          <Route
            path="/shopping-cart"
            element={<ShoppingCartPage  rerender={props.rerender} basket={basket}/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
