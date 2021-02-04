import { Grid, Typography } from "@material-ui/core";
import { Fragment, useContext, useEffect } from "react";
import ProductContext from "../../context/ProductContext.js/ProductContext";
import UserContex from "../../context/UserContext/UserContex";
import CardHistory from "./components/CardHistory";
import { ModalComponent } from "../../components/";
const HistoryView = () => {
  const { user, token } = useContext(UserContex);
  const { orders, detail, GetOrders } = useContext(ProductContext);

  useEffect(() => {
    GetOrders({ email: user.email, token });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      <Grid container>
        {orders.map((e) => (
          <Grid item xs={5} key={e.id_ventas}>
            <CardHistory data={e} />
          </Grid>
        ))}
      </Grid>
      <ModalComponent>
        <Grid container style={{ padding: 10 }}>
          <Grid item xs={12} container>
            <Grid item xs={3}>
              <Typography variant="overline" style={{ fontWeight: "bold" }}>
                #
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="overline" style={{ fontWeight: "bold" }}>
                Nombre
              </Typography>
            </Grid>
            <Grid item xs={4} container justify="flex-end">
              <Typography variant="overline" style={{ fontWeight: "bold" }}>
                Precio
              </Typography>
            </Grid>
          </Grid>
          {detail.map((e, index) => (
            <Grid item xs={12} container key={e.id_detalle_ventas}>
              <Grid item xs={3}>
                <Typography variant="overline">{index + 1}</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="overline">{e.nombre_producto}</Typography>
              </Grid>
              <Grid item xs={4} container justify="flex-end">
                <Typography variant="overline">{`$${e.precio}`}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </ModalComponent>
    </Fragment>
  );
};

export default HistoryView;
