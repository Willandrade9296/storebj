import {
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { AccessTime, Close, Home, ShoppingCart } from "@material-ui/icons";
import { Fragment, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ProductContext from "../../context/ProductContext.js/ProductContext";
import UserContext from "../../context/UserContext/UserContex";

const useStyles = makeStyles((theme) => ({
  listPath: {
    background: "#3f51b5",
    color: "#fff",
    "&:hover": {
      background: "#576bcc",
      color: "#fff",
    },
  },
  iconPath: {
    color: "#fff",
  },
  menu: {
    color: "#000",
  },
}));
const ListDrawerLogin = () => {
  const classes = useStyles();
  const { LogoutUser } = useContext(UserContext);
  const { count, LogoutProducts } = useContext(ProductContext);
  const history = useHistory();
  const location = useLocation();
  const logoutButton = () => {
    LogoutUser();
    LogoutProducts();
  }
  return (
    <Fragment>
      <Grid container>
        <Grid
          item
          xs={12}
          container
          justify="center"
          alignItems="center"
          style={{ height: 100 }}
        >
          <div
            style={{
              width: 90,
              height: 90,
              background: 'url("/assets/user.jpg")',
              backgroundSize: "cover",
            }}
          />
        </Grid>
      </Grid>
      <List>
        <div onClick={() => history.push("/")}>
          <ListItem
            button
            className={
              location.pathname === "/" ? classes.listPath : classes.menu
            }
          >
            <ListItemIcon>
              <Home
                className={
                  location.pathname === "/" ? classes.iconPath : classes.menu
                }
              />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItem>
        </div>
        <Divider />
        <div onClick={() => history.push("/cart")}>
          <ListItem
            button
            className={
              location.pathname === "/cart" ? classes.listPath : classes.menu
            }
          >
            <ListItemIcon>
              <ShoppingCart
                className={
                  location.pathname === "/cart"
                    ? classes.iconPath
                    : classes.menu
                }
              />
            </ListItemIcon>
            <ListItemText primary="Carrito" />
            {count !== 0 ? (
              <ListItemSecondaryAction>
                <Chip label={count} color="secondary" size="small"/>
              </ListItemSecondaryAction>
            ) : null}
          </ListItem>
        </div>
        <Divider />
        <div onClick={() => history.push("/history")}>
          <ListItem
            button
            className={
              location.pathname === "/history" ? classes.listPath : classes.menu
            }
          >
            <ListItemIcon>
              <AccessTime
                className={
                  location.pathname === "/history"
                    ? classes.iconPath
                    : classes.menu
                }
              />
            </ListItemIcon>
            <ListItemText primary="Historial" />
          </ListItem>
        </div>
        <div onClick={() => logoutButton()}>
          <ListItem
            button
            className={
              location.pathname === "/close" ? classes.listPath : classes.menu
            }
          >
            <ListItemIcon>
              <Close
                className={
                  location.pathname === "/close"
                    ? classes.iconPath
                    : classes.menu
                }
              />
            </ListItemIcon>
            <ListItemText primary="Cerrar sesión" />
          </ListItem>
        </div>
        <Divider />
      </List>
    </Fragment>
  );
};

export default ListDrawerLogin;
