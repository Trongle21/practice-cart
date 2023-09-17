import { useContext } from "react";
import CartContext from "../store/CartContext";

const useCartContext = () => {
  const [state, dispatch] = useContext(CartContext);

  return [state, dispatch];
};

export { useCartContext };
