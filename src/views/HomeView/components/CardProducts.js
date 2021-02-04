import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import ProductContext from "../../../context/ProductContext.js/ProductContext";
import UserContex from "../../../context/UserContext/UserContex";

const CardProducts = ({ name, price, id, img, data }) => {
  const { AddProduct } = useContext(ProductContext);
  const { StateModal, token } = useContext(UserContex);
  return (
    <Card style={{ width: "85%", margin: 10, borderRadius: 20 }} elevation={5}>
      <CardActionArea>
        <CardMedia image={img} component="img" height={250} />
        <CardContent>
          <Grid container>
            <Grid item xs={8} container justify="flex-start">
              <Typography
                variant="caption"
                style={{ textTransform: "capitalize", fontWeight: "bold" }}
              >
                {name}
              </Typography>
            </Grid>
            <Grid item xs={4} container justify="flex-end">
              <Typography
                variant="caption"
                style={{ textTransform: "capitalize", fontWeight: "bold" }}
              >{`$${parseFloat(price).toFixed(2)}`}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          style={{ textTransform: "capitalize", borderRadius: 20 }}
          onClick={token ? ()=> AddProduct(data) : ()=>StateModal('login')}
        >
          Agregar al Carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardProducts;
