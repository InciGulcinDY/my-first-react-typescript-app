import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductModel } from "../../models/responses/ProductModel";
import ProductService from "../../services/ProductService";

type SideBarProps = {};

const SideBar = (props: SideBarProps) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    ProductService.getAll().then((response) => {
      setProducts(response.data.products);
    });
  };

  return (
    <div>
      <ul className="list-group">
        {products.map((product) => (
          <Link to={"/"} className="list-group-item" key={product.id}>
            {product.category}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
