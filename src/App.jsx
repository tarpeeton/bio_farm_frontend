import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Products";
import { ProductItem } from "./components/productItem";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:_id" element={<ProductItem />} />
      </Routes>
    </>
  );
}

export default App;
