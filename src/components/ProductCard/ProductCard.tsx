import { ProductModel } from "../../models/responses/ProductModel";
import { Link } from "react-router-dom";
import { IncreasingCartNumber } from "../../store/actions/cartActions";
import { useAppDispatch, useAppSelector } from "../../store/AppHooks";

type Product = {
  product: ProductModel;
  title?: string; //optional
};

const ProductCard = (props: Product) => {
  const dispatch = useAppDispatch()
const count = useAppSelector((state) => state.cartItem.value)
const action: IncreasingCartNumber = {
  type: "INCREASING_CART_NUMBER",
  payload: 1, // or any other value you want to pass as payload
};

  const handleAddToCart = () => {
    // Dispatch the action, not the reducer
    dispatch(action );
  }


  return (
    <div className="card">
      <img src={props.product.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>
        <p>{props.product.price}₺</p>
        <Link
          to={"/product-detail/" + props.product.id}
          className="btn btn-primary me-2"
        >
          Details
        </Link>
        <button className="btn btn-success me-2" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard
