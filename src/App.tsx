import React, { ReactElement } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";

function App(): ReactElement {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/product-detail/:id" element={<ProductDetail />}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
