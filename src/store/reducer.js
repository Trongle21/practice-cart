import {
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILED,
  DELETE_PRODUCT,
  DECREASE_PRODUCT,
  INCREASE_PRODUCT,
  TOTAL_PRODUCT,
  TOTAL_PRICE,
  DELETE_ALL,
} from "./contains";

const initState = {
  products: [],
  error: null,
  loading: false,
  totalProduct: 0,
  totalPrice: 0,
};

const reducer = (state, action) => {
  let newProduct;
  let initialTotalPrice;
  let totalAllProduct;

  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case LOAD_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_PRODUCT:
      newProduct = state.products.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        products: newProduct,
      };

    case DECREASE_PRODUCT:
      newProduct = state.products.map((product) => {
        if (product.id === action.payload) {
          if (product.quantity > 1) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return null;
          }
        }
        return product;
      });

      newProduct = newProduct.filter((product) => product !== null);
      return {
        ...state,
        products: newProduct,
      };

    case INCREASE_PRODUCT:
      newProduct = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      return {
        ...state,
        products: newProduct,
      };

    case TOTAL_PRODUCT:
      totalAllProduct = state.products.reduce(
        (total, product) => total + product.quantity,
        0
      );

      return {
        ...state,
        totalProduct: totalAllProduct,
      };

    case TOTAL_PRICE:
      initialTotalPrice = state.products.reduce(
        (total, product) => total + product.quantity * product.price,
        0
      );
      return {
        ...state,
        totalPrice: initialTotalPrice,
      };

    case DELETE_ALL:
      return {
        ...state,
        products: [],
      };

    default:
      throw new Error("Invalid action");
  }
};

export { initState };
export default reducer;
