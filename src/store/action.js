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

const loadDataSuccess = (payload) => {
  return {
    type: LOAD_DATA_SUCCESS,
    payload,
  };
};

const loadDataFailed = (payload) => {
  return {
    type: LOAD_DATA_FAILED,
    payload,
  };
};

const deleteProduct = (payload) => {
  return {
    type: DELETE_PRODUCT,
    payload,
  };
};

const decreaseProduct = (payload) => {
  return {
    type: DECREASE_PRODUCT,
    payload,
  };
};

const increaseProduct = (payload) => {
  return {
    type: INCREASE_PRODUCT,
    payload,
  };
};

const totalProduct = (payload) => {
  return {
    type: TOTAL_PRODUCT,
    payload,
  };
};

const totalPrice = (payload) => {
  return {
    type: TOTAL_PRICE,
    payload,
  };
};

const deleteAll = (payload) => {
  return {
    type: DELETE_ALL,
    payload,
  };
};

export {
  loadDataSuccess,
  loadDataFailed,
  deleteProduct,
  increaseProduct,
  decreaseProduct,
  totalProduct,
  totalPrice,
  deleteAll,
};
