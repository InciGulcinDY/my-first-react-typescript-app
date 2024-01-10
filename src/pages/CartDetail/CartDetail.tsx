import { Link } from "react-router-dom";
import { ProductModel } from "../../models/responses/ProductModel";
import { useAppSelector } from "../../store/AppHooks";

const CartDetail = () => {

  // Reaching cartdetail state
  const cartDetail = useAppSelector((state) => state.cartDetail.cartProduct);
  
  // Make sure cartDetail is an array before using map
  const cartProducts = Array.isArray(cartDetail) ? cartDetail : [];

  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          {/* Map over the cartDetail array to render cards for each product */}
          <div className="row">
            {cartProducts.map((product: ProductModel) => (
              <div key={product.id} className="col-md-4">
                <div className="card mb-3">
                  <img
                    src={product.thumbnail}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    {/* Add any other information you want to display */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-3">
          {/* Cart Summary: */}
          <div className="card text-center">
            <div className="card-header">Summary</div>
            <div className="card-body">
              <h5 className="card-title">My Cart</h5>
              <p className="card-text">Product total amount: </p>
              <p className="card-text">Shipping amount: </p>
              <div className="card-footer text-body-secondary border-bottom mb-3">
              <h4 className="card-title ">Total: </h4>
              </div>
              
              <Link to={"/"} className="btn btn-primary me-2">Keep Shopping</Link>
              <Link to={"/"} className="btn btn-success">Confirm Cart</Link>
            </div>
            <div className="card-footer text-body-secondary">Happy Shopping</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
