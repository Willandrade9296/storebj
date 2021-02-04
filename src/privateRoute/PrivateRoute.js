import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../context/UserContext/UserContex";
const PrivateRoute = ({ component: Component, ...props }) => {
  const { token } = useContext(UserContext);

  return (
    <Route
      {...props}
      render={(props) =>
        !token ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
