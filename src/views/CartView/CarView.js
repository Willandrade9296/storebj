import { Button, Grid, Typography } from "@material-ui/core";
import { Fragment, useContext } from "react";
import ProductContext from "../../context/ProductContext.js/ProductContext";
import { CardCart, FormConfirm } from "./components";
import ModalComponent from '../../components/modalComponent'
import UserContext from "../../context/UserContext/UserContex";
const CarView = () => {
  const { car, total } = useContext(ProductContext);
  const { StateModal } = useContext(UserContext);
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} container justify="flex-end">
          {total !== 0 ? (
            <Button
              variant="contained"
              color="primary"
              style={{ borderRadius: 20, marginBottom: 10 }}
              onClick={()=>StateModal('car')}
            >
              Ordenar ahora
            </Button>
          ) : null}
        </Grid>
      </Grid>
      {car.map((e, index) => (
        <CardCart data={e} key={index} />
      ))}
      <Grid container>
        <Grid item xs={12} container justify="flex-end">
          <Typography variant='h5'>{`Total: $${total.toFixed(2)}`}</Typography>
        </Grid>
      </Grid>
      
      <ModalComponent>
        <FormConfirm />
      </ModalComponent>
    </Fragment>
  );
};

export default CarView;
