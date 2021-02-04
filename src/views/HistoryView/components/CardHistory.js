import {
  Button,
  Card,
  CardActions,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import ProductContext from "../../../context/ProductContext.js/ProductContext";
import UserContext from "../../../context/UserContext/UserContex";
const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
}));
const CardHistory = ({ data }) => {
  const classes = useStyles();
  const { StateModal } = useContext(UserContext);
  const { GetDetail } = useContext(ProductContext);
  const viewDetail = id => {
    StateModal('detail')
    GetDetail(id)
  }
  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="overline">{`Pedido #: ${data.id_ventas}`}</Typography>
          <Divider />
        </Grid>

        <Grid item xs={12} container>
          <Grid item xs={6}>
            <Typography variant="overline">{`Fecha`}</Typography>
          </Grid>
          <Grid item xs={6} container justify="flex-end">
            <Typography variant="overline">{`${data.fecha}`}</Typography>
          </Grid>
          <Divider />
        </Grid>

        <Grid item xs={12} container>
          <Grid item xs={6}>
            <Typography variant="overline">{`Dirección`}</Typography>
          </Grid>
          <Grid item xs={6} container justify="flex-end">
            <Typography variant="overline">{`${data.ubicacion}`}</Typography>
          </Grid>
          <Divider />
        </Grid>

        <Grid item xs={12} container>
          <Grid item xs={6}>
            <Typography variant="overline">{`Subtotal`}</Typography>
          </Grid>
          <Grid item xs={6} container justify="flex-end">
            <Typography variant="overline">{`${parseFloat(
              data.subtotal
            ).toFixed(2)}`}</Typography>
          </Grid>
          <Divider />
        </Grid>

        <Grid item xs={12} container>
          <Grid item xs={6}>
            <Typography variant="overline">{`IVA`}</Typography>
          </Grid>
          <Grid item xs={6} container justify="flex-end">
            <Typography variant="overline">{`${parseFloat(data.iva).toFixed(
              2
            )}`}</Typography>
          </Grid>
          <Divider />
        </Grid>

        <Grid item xs={12} container>
          <Grid item xs={6}>
            <Typography variant="overline">{`Total`}</Typography>
          </Grid>
          <Grid item xs={6} container justify="flex-end">
            <Typography variant="overline">{`${parseFloat(data.total).toFixed(
              2
            )}`}</Typography>
          </Grid>
          <Divider />
        </Grid>
      </Grid>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ borderRadius: 20, textTransform: "capitalize" }}
          onClick={()=>viewDetail(data.id_ventas)}
        >
          Ver detalle
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardHistory;
