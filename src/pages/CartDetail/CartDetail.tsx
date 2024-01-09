
import { ProductModel } from "../../models/responses/ProductModel";
import { useAppSelector } from "../../store/AppHooks";



const CartDetail=() => {

  const cartDetail = useAppSelector((state) => state.cartDetail.cartProduct );
// Make sure cartDetail is an array before using map
const cartProducts = Array.isArray(cartDetail) ? cartDetail : [];

return (
  <div className="container">
    {/* Map over the cartDetail array to render cards for each product */}
    <div className="row">
      {cartProducts.map((product: ProductModel) => (
        <div key={product.id} className="col-md-4">
          <div className="card mb-3">
            <img src={product.thumbnail} className="card-img-top" alt={product.title} />
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
  );
};

export default CartDetail;
