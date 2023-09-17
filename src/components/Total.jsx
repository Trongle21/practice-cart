import { useEffect } from "react";
import { useCartContext } from "../hooks/useCartContext";
import { actions } from "../store";
import Button from "./Button";

const Total = () => {
  const [state, dispatch] = useCartContext();

  const { products, totalPrice } = state;

  useEffect(() => {
    dispatch(actions.totalPrice());
  }, [products, dispatch]);

  const handleDeleteAll = () => {
    const isDeleteAll = window.confirm(
      "Bạn chắc chắn muốn xóa hết sản phẩm khỏi giỏ hàng"
    );
    if (isDeleteAll) {
      dispatch(actions.deleteAll());
    }
  };

  const formattedTotalPrice = totalPrice
    ? totalPrice.toLocaleString("vi-VN", {
        style: "currency",
        currency: "USD",
      })
    : "0 USD";

  return (
    <div className="container">
      <div className="total">
        <h3>total</h3>
        <span>{formattedTotalPrice}</span>
      </div>
      <div className="total-clear">
        <Button context="Clear cart" onClick={handleDeleteAll} />
      </div>
    </div>
  );
};

Total.propTypes = {};

export default Total;
