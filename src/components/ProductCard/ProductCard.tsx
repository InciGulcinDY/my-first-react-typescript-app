import { ProductModel } from "../../models/responses/ProductModel";
import { Link } from "react-router-dom";
import { AddToCartAction, IncreasingCartNumber } from "../../store/actions/cartActions";
import { useAppDispatch } from "../../store/AppHooks";
import "./ProductCard.css";

type Product = {
  product: ProductModel;
};

const ProductCard = (props: Product) => {
  const dispatch = useAppDispatch();

  const increasingAction: IncreasingCartNumber = {
    type: "INCREASING_CART_NUMBER",
    payload: 1,
  };

  const addAction: AddToCartAction = {
    type: "ADD_TO_CART",
    payload: props.product,
  };

  const handleAddToCart = () => {
    dispatch(increasingAction);
    dispatch(addAction);
  };

  return (
    <div className="card productCard">
      <img
        src={props.product.thumbnail}
        className="card-img-top productImage"
        alt="product image"
      />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>
        <p>{props.product.price}₺</p>
      </div>
      <div className=" mb-3 ms-3">
        <Link
          to={"/productdetail/" + props.product.id}
          className="btn btn-primary me-2"
        >
          Details
        </Link>
        <button className="btn btn-success" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
