import { useReducer } from "react";
import CartContext from "./CartContext";
import reducer, { initState } from "./reducer";

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
