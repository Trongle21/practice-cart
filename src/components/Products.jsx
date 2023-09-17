import { useEffect } from "react";
import Button from "./Button";
import { actions } from "../store";
import {
  HiOutlineArrowSmallDown,
  HiOutlineArrowSmallUp,
} from "react-icons/hi2";
import { useCartContext } from "../hooks/useCartContext";

const Products = () => {
  const [state, dispatch] = useCartContext();

  const { products } = state;

  useEffect(() => {
    let ignore = false;
    const getProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");

        if (!res.ok) {
          throw new Error("not found data");
        }

        const data = await res.json();

        const addQuantity = data.products.map((product) => ({
          ...product,
          quantity: 1,
        }));
        
        if (!ignore) dispatch(actions.loadDataSuccess(addQuantity));
      } catch (error) {
        if (!ignore) dispatch(actions.loadDataFailed(error));
      }
    };

    getProducts();
    return () => {
      ignore = true;
    };
  }, [dispatch]);

  const limitedProducts = products && products.slice(0, 5);

  return (
    <>
      {limitedProducts.map((product) => (
        <li className="products" key={product.id}>
          <div className="info-product">
            <img src={product.thumbnail} alt="Samsung Galaxy S8" />
            <div className="detail-product">
              <h3>{product.title}</h3>
              <span>${product.price}</span>
              <Button
                context="Remove"
                onClick={() => dispatch(actions.deleteProduct(product.id))}
              />
            </div>
          </div>
          <div className="quantity">
            <button
              className="button-increase"
              onClick={() => dispatch(actions.increaseProduct(product.id))}
            >
              <HiOutlineArrowSmallUp />
            </button>
            <span>{product.quantity}</span>
            <button
              className="button-decrease"
              onClick={() => dispatch(actions.decreaseProduct(product.id))}
            >
              <HiOutlineArrowSmallDown />
            </button>
          </div>
        </li>
      ))}
    </>
  );
};

export default Products;
