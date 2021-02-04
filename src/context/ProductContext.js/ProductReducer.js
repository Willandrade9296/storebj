/* eslint-disable import/no-anonymous-default-export */

import {
  DELETE_PRODUCT,
  GET_DETAILS,
  GET_ORDERS,
  GET_PRODUCTS,
  LOGOUT_USER,
  SELECT_PRODUCT,
  SELECT_QTY,
  SEND_BUY,
} from "..";

export default (state, accion) => {
  switch (accion.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: accion.payload,
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        car: [...state.car, accion.payload],
        count: state.car.length + 1,
        total: state.total + parseFloat(accion.payload.precio),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        car: state.car.filter((e) => e.id_productos !== accion.payload.value),
        count: state.car.length - 1,
        total: state.total - accion.payload.price,
      };
    case SELECT_QTY:
      const op =
        accion.payload.type === "+"
          ? accion.payload.value
          : -accion.payload.value;
      return {
        ...state,
        total: state.total + parseFloat(op),
      };
    case LOGOUT_USER:
    case SEND_BUY:
      return {
        ...state,
        car: [],
        count: 0,
        total: 0,
        orders: [],
        detail: []
      };
      case GET_ORDERS:
        return{
          ...state,
          orders: accion.payload
        }
      case GET_DETAILS:
        return{
          ...state,
          detail: accion.payload
        }
    default:
      return state;
  }
};
