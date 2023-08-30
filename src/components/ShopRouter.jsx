import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import PageNotFound from "../pages/PageNotFound";

const ShopRouter = () => {
  return (
    <>
      <BrowserRouter>
        <div className="w-screen h-screen bg-secondary ">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default ShopRouter;
