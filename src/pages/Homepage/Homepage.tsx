import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductModel } from "../../models/responses/ProductModel";
import ProductService from "../../services/ProductService";
import SideBar from "../../layouts/SideBar/SideBar";

type Props = {};

const Homepage = (props: Props) => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    ProductService.getAll().then((response) => {
      setProducts(response.data.products);
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-md-3 sticky-top">
          <SideBar></SideBar>
        </div>


        <div className="col-md-9 row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6 col-12 mb-5">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
