import { useEffect } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useCartContext } from "../hooks/useCartContext";
import { actions } from "../store";

const Header = () => {
  const [state, dispatch] = useCartContext();

  const { products, totalProduct } = state;

  useEffect(() => {
    dispatch(actions.totalProduct());
  }, [dispatch, products]);

  return (
    <div className="header-cart">
      <div className="container">
        <h1>UseReducer</h1>
        <div className="cart__icon">
          <div className="cart-icon">
            <BsFillCartPlusFill />
          </div>
          <span>{totalProduct}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
