import {
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { Close, Email, Face, Lock, Phone } from "@material-ui/icons";
import { useContext } from "react";
import UserContext from "../../../context/UserContext/UserContex";
import { useFormik } from "formik";
import * as Yup from "yup";
const FormRegister = () => {
  const { StateModal, NewUser } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      user: "",
      phone: "",
      confirm: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("El campo es obligatorio")
        .email("Ingrese un correo válido"),
      user: Yup.string().required("El campo es obligatorio"),
      phone: Yup.string()
        .required("El campo es obligatorio")
        .matches(/[0-9]+/, 'Ingrese solo números')
        .min(10, "Ingrese un teléfono válido")
        .max(10, "Ingrese un teléfono válido"),
      password: Yup.string()
        .required("El campo es obligatorio")
        .min(6, "La contraseña debe tener almenos 6 caracteres"),
      confirm: Yup.string()
        .required("El campo es obligatorio")
        .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden"),
    }),
    onSubmit: values => {
      NewUser(values);
      formik.resetForm()
    }
  });

  return (
    <Grid container spacing={2} style={{ margin: 10, width: "300px" }}>
      <Grid item xs={12} container>
        <Grid item xs={6}>
          <Typography variant="overline">Registrarme</Typography>
        </Grid>
        <Grid item xs={6} container justify="flex-end">
          <IconButton
            onClick={() => StateModal("")}
            size="small"
            color="primary"
          >
            <Close />
          </IconButton>
        </Grid>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Nombre"
          name="user"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user}
          helperText={
            formik.touched.user && formik.errors.user
              ? formik.errors.user
              : null
          }
          error={formik.touched.user && formik.errors.user ? true : false}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <Face />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Correo electrónico"
          fullWidth
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          helperText={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
          error={formik.touched.email && formik.errors.email ? true : false}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <Email />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Telefono"
          fullWidth
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          helperText={
            formik.touched.phone && formik.errors.phone
              ? formik.errors.phone
              : null
          }
          error={formik.touched.phone && formik.errors.phone ? true : false}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <Phone />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Contraseña"
          fullWidth
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          helperText={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
          error={
            formik.touched.password && formik.errors.password ? true : false
          }
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <Lock />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Confirmar contraseña"
          fullWidth
          type="password"
          name="confirm"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirm}
          helperText={
            formik.touched.confirm && formik.errors.confirm
              ? formik.errors.confirm
              : null
          }
          error={formik.touched.confirm && formik.errors.confirm ? true : false}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <Lock />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" fullWidth color="primary" onClick={formik.submitForm}>
          Ingresar
        </Button>
      </Grid>
    </Grid>
  );
};

export default FormRegister;
