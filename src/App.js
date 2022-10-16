import './App.css';
import Authorization from "./pages/Authorization/Authorization";

import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main/Main";
import CreateOrder from "./pages/CreateOrder/CreateOrder";
import Orders from "./pages/Orders/Orders";
import CheckOrderInfo from "./pages/CheckOrderInfo/CheckOrderInfo";
import OrdersArchive from "./pages/OrdersArchive/OrdersArchive";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Authorization/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/createOrder" element={<CreateOrder/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/checkOrder" element={<CheckOrderInfo/>}/>
            <Route path="/ordersArchive" element={<OrdersArchive/>}/>
        </Routes>
    </div>
  );
}

export default App;
