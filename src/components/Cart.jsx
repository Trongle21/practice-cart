import { useCartContext } from "../hooks/useCartContext";
import Header from "./Header";
import ListProduct from "./ListProduct";
import Total from "./Total";

const Cart = () => {
  const [state] = useCartContext();

  const { loading, error } = state;

  return (
    <div className="cart">
      <Header />
      {loading ? (
        <div>
          <h2>Loading....</h2>
        </div>
      ) : error ? (
        <div>
          <h2>Error</h2>
        </div>
      ) : (
        <>
          <ListProduct />
          <Total />
        </>
      )}
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
