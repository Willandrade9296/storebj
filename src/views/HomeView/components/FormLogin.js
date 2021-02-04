import {
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { Close, Email, Lock } from "@material-ui/icons";
import { useContext } from "react";
import UserContext from "../../../context/UserContext/UserContex";
import {useFormik} from 'formik';
import * as Yup from 'yup'
const FormLogin = () => {
  const { StateModal,LoginUser } = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
      .required('El campo es obligatorio')
      .email('Ingrese un correo válido'),
      password: Yup.string()
      .required('El campo es obligatorio')
    }),
    onSubmit: values => {
      formik.resetForm()
      LoginUser(values)
    }
  })
  return (
    <Grid container spacing={2} style={{ margin: 10, width: "300px" }}>
      <Grid item xs={12} container>
        <Grid item xs={6}>
          <Typography variant="overline">Iniciar Sesion</Typography>
        </Grid>
        <Grid item xs={6} container justify="flex-end">
          <IconButton
            onClick={() => StateModal("")}
            size="small"
            color="primary"
          >
            {" "}
            <Close />{" "}
          </IconButton>
        </Grid>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Correo electronico"
          fullWidth
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          helperText={ formik.touched.email && formik.errors.email ? formik.errors.email : null }
          error={ formik.touched.email && formik.errors.email ? true : false }
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
          label="Contraseña"
          fullWidth
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          helperText={ formik.touched.password && formik.errors.password ? formik.errors.password : null }
          error={ formik.touched.password && formik.errors.password ? true : false }
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

export default FormLogin;
