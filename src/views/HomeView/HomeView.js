import { Grid } from "@material-ui/core";
import { Fragment, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ModalComponent } from "../../components";
import ProductContext from "../../context/ProductContext.js/ProductContext";
import UserContext from "../../context/UserContext/UserContex";
import CardProducts from "./components/CardProducts";
import FormLogin from "./components/FormLogin";
import FormRegister from "./components/FormRegister";

const HomeView = () => {
  const { modal, GetLocation } = useContext(UserContext);
  const { products, GetAllProducts } = useContext(ProductContext);
  const location = useLocation();
  useEffect(() => {
    GetLocation(location.pathname);
    GetAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      <Grid container>
        {products.map((e) => (
          <Grid item xs={12} sm={3} key={e.id_productos} container>
            <CardProducts name={e.nombre_producto} img={e.img} price={e.precio} data={e}/>
          </Grid>
        ))}
      </Grid>
      
      <ModalComponent>
        {modal === "login" ? (
          <FormLogin />
        ) : modal === "register" ? (
          <FormRegister />
        ) : null}
      </ModalComponent>
    </Fragment>
  );
};

export default HomeView;
