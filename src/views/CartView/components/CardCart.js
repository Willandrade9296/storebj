import { Button, Card, Grid, IconButton, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useContext, useState } from "react";
import ProductContext from "../../../context/ProductContext.js/ProductContext";

const CardCart = ({ data }) => {
  const { DeleteProduct,GetQty } = useContext(ProductContext);
  const [qty, setQty] = useState(data.qty);
  const changeQty = (value, type) => {
    if (type === '+') {
      setQty(qty+1)
      GetQty(value, '+', data.id_productos, qty)
    }else{
      setQty(qty-1)
      GetQty(value, '-', data.id_productos, qty)
    }
  }
  return (
    <Card style={{ marginBottom: 10, borderRadius: 20 }} elevation={5}>
      <Grid container>
        <Grid item xs={4} sm={2}>
          <img src={data.img} alt="imagen" width={100} height={100} />
        </Grid>
        <Grid item xs={8} sm={3} container alignItems="center">
          <Typography
            variant="overline"
            style={{
              textTransform: "capitalize",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {data.nombre_producto}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} container alignItems="center">
          <Grid container item xs={4} justify="flex-end">
            <Button variant="contained" color="secondary" onClick={()=>changeQty(data.precio, '-')} disabled={qty === 1 ? true : false}>
              -
            </Button>
          </Grid>
          <Grid container item xs={4} justify="center">
            <Typography>{qty}</Typography>
          </Grid>
          <Grid container item xs={4}>
            <Button variant="contained" color="secondary" onClick={()=>changeQty(data.precio, '+')} disabled={qty === parseInt(data.stock) ? true : false}> 
              +
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3}container alignItems="center" justify="center" >
          <Typography
            variant="overline"
            style={{
              textTransform: "capitalize",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {`$${(data.precio*qty).toFixed(2)}`}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={1} container alignItems="center" justify="center">
            <IconButton color="secondary" onClick={()=> DeleteProduct(data.id_productos, (data.precio*qty))}>
                <Delete/>
            </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CardCart;
