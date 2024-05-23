import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import  ProductItem  from "./components/productItem";
import Message from "./components/Message"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:_id" element={<ProductItem />} />

        <Route path="/success" element={<Message />} />

      </Routes>
    </>
  );
}

export default App;
