import {
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import ProductContext from "../../../context/ProductContext.js/ProductContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import UserContext from "../../../context/UserContext/UserContex";
const FormConfirm = () => {
  const { total, car, SaveOrder } = useContext(ProductContext);
  const { StateModal,user, token } = useContext(UserContext);
  const iva = total * 0.12;
  const subtotal = total - iva;

  const formik = useFormik({
    initialValues: {
      ubicacion: "",
      iva: "",
      subtotal: "",
      total: "",
      fecha: "",
    },
    validationSchema: Yup.object({
      ubicacion: Yup.string().required("Campo obligatorio*"),
    }),
    onSubmit: (values) => {
        const fecha = new Date();
      values.fecha = fecha.getDay() + "-"+ fecha.getMonth() + "-"+ fecha.getFullYear()
      values.iva= iva.toFixed(2);
      values.subtotal=subtotal;
      values.total=total;
      values.car = car;
      values.token = token;
      values.usuario = user.email;
      formik.resetForm();
      SaveOrder(values)
      StateModal('');
    },
  });
  return (
    <Grid container style={{ padding: 10, width: 250 }}>
      <Grid item xs={12} style={{ marginBottom: 10 }}>
        <Typography variant="overline">Confirmar compra</Typography>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Dirección de entrega"
          variant="outlined"
          name="ubicacion"
          size="small"
          value={formik.values.ubicacion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.errors.ubicacion && formik.touched.ubicacion ? formik.errors.ubicacion: null}
          error={formik.errors.ubicacion && formik.touched.ubicacion ? true: false}
        />
      </Grid>
      <Grid item xs={12} container style={{ marginTop: 10 }}>
        <Grid item xs={6}>
          <Typography variant="overline" style={{ fontSize: 15 }}>
            IVA
          </Typography>
        </Grid>
        <Grid item xs={6} container justify="flex-end">
          <Typography variant="overline">{`$${iva.toFixed(2)}`}</Typography>
        </Grid>
      </Grid>

      <Grid item xs={12} container style={{ marginTop: 10 }}>
        <Grid item xs={6}>
          <Typography variant="overline" style={{ fontSize: 13 }}>
            Subtotal
          </Typography>
        </Grid>
        <Grid item xs={6} container justify="flex-end">
          <Typography variant="overline">{`$${subtotal}`}</Typography>
        </Grid>
      </Grid>

      <Grid item xs={12} container style={{ marginTop: 10 }}>
        <Grid item xs={6}>
          <Typography variant="overline" style={{ fontSize: 13 }}>
            Total
          </Typography>
        </Grid>
        <Grid item xs={6} container justify="flex-end">
          <Typography variant="overline">{`$${total}`}</Typography>
        </Grid>
      </Grid>

      <Grid item xs={12} container style={{ marginTop: 10 }}>
        <Grid item xs={6}>
          <Typography variant="overline" style={{ fontSize: 13 }}>
            Tipo de pago
          </Typography>
        </Grid>
        <Grid item xs={6} container justify="flex-end">
          <Typography variant="overline">{`Efectivo`}</Typography>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Button fullWidth variant="contained" color="primary" onClick={formik.submitForm}>
          Si, confirmar
        </Button>
      </Grid>
    </Grid>
  );
};

export default FormConfirm;
