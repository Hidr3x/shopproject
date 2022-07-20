import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./shopPage/ShopPage";
import ShoppingCartPage from "./shoppingCartPage/ShoppingCartPage";
import basket from "./Base/basket";


function App(props) {
  const makeUniq = (arr) => [...new Set(arr)];
  return (
    <BrowserRouter>
      <div>
    
        <Routes>
          <Route path="/"  element={<ShopPage  />} />
          <Route path="/shop" element={<ShopPage rerender={props.rerender} basket={basket}/>} />
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
