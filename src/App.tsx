import { ReactElement } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
import ProductAdd from "./pages/ProductAdd/ProductAdd";
import CartDetail from "./pages/CartDetail/CartDetail";

function App(): ReactElement {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/productdetail/:id" element={<ProductDetail />}></Route>
        <Route path="/productadd" element={<ProductAdd />}></Route>
        <Route path="/cartdetail" element={<CartDetail />}></Route>
        <Route path="*" element={<Homepage />}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
