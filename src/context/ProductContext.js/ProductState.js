import { useReducer } from "react";
import ProductReducer from "./ProductReducer";
import ProductContext from "./ProductContext";
import axios from "../../config/axios";
import {
  DELETE_PRODUCT,
  GET_ORDERS,
  GET_PRODUCTS,
  SELECT_PRODUCT,
  SELECT_QTY,
  SEND_BUY,
  GET_DETAILS,
  LOGOUT_USER
} from "../index";
import Notifications from "../../notifications/notifications";
const ProductState = (props) => {
  const initialState = {
    products: [],
    car: [],
    count: 0,
    total: 0,
    orders: [],
    detail: []
  };
  const GetAllProducts = async () => {
    const res = await axios.get("/products");
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data.results,
    });
  };

  const AddProduct = (value) => {
    Notifications("Producto agregado", "success");
    dispatch({
      type: SELECT_PRODUCT,
      payload: value,
    });
  };
  const DeleteProduct = (value, price) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: { value, price },
    });
  };

  const GetQty = (value, type) => {
    dispatch({
      type: SELECT_QTY,
      payload: { value, type },
    });
  };

  const SaveOrder = async value => {
      const res = await axios.post('/products', value);
       const id_order = res.data.results.insertId;
      const { car } = value;
      car.map(async e => {
        await axios.post('/detail', {id_producto: e.id_productos,id_order});
      })
      Notifications('Su compra se realizó con éxito', 'success')
      dispatch({
        type: SEND_BUY,
      })
  }

  const GetOrders = async value => {
    const res = await axios.post('/history', value);

    dispatch({
      type: GET_ORDERS,
      payload: res.data.results
    })
  }

  const GetDetail = async value => {
    const res = await axios.get(`/history/${value}:`);
    dispatch({
      type: GET_DETAILS,
      payload: res.data.results
    })
  }

  const LogoutProducts = () => {
    dispatch({
      type: LOGOUT_USER
    })
  }

  const [state, dispatch] = useReducer(ProductReducer, initialState);
  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        car: state.car,
        count: state.count,
        total: state.total,
        orders: state.orders,
        detail: state.detail,
        GetAllProducts,
        AddProduct,
        DeleteProduct,
        GetQty,
        SaveOrder,
        GetOrders,
        GetDetail,
        LogoutProducts
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
