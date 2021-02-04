import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AccountCircle, Face, Help } from "@material-ui/icons";
import { Fragment, useContext } from "react";
import UserContext from "../../context/UserContext/UserContex";
const useStyle = makeStyles((theme) => ({
  list: {
    color: "#000",
  },
}));
const ListLogout = () => {
  const clasess = useStyle();
  const { StateModal } = useContext(UserContext);

  return (
    <Fragment>
      <Grid container>
        <Grid
          item
          xs={12}
          container
          justify="center"
          alignItems="center"
          style={{ height: 80 }}
        >
          <Typography variant="overline">SMART SOLUTIONS BJ</Typography>
        </Grid>
      </Grid>
      <List>
        <div onClick={() => StateModal("login")}>
          <ListItem button>
            <ListItemIcon>
              <Face className={clasess.list} />
            </ListItemIcon>
            <ListItemText primary="Iniciar Sesion" className={clasess.list} />
          </ListItem>
        </div>
        <Divider />
        <div onClick={() => StateModal("register")}>
          <ListItem button>
            <ListItemIcon>
              <AccountCircle className={clasess.list} />
            </ListItemIcon>
            <ListItemText primary="Registrarse" className={clasess.list} />
          </ListItem>
        </div>
        <Divider />
        <div onClick={() => StateModal("help")}>
          <ListItem button>
            <ListItemIcon>
              <Help className={clasess.list} />
            </ListItemIcon>
            <ListItemText primary="Ayuda" className={clasess.list} />
          </ListItem>
        </div>
        <Divider />
      </List>
    </Fragment>
  );
};

export default ListLogout;
