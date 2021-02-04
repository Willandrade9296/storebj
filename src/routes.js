import { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import UserContext from "./context/UserContext/UserContex";
import PrivateRoute from "./privateRoute/PrivateRoute";
import { CarView, HistoryView, HomeView } from "./views";

const Routes = () => {
  const { GetUser } = useContext(UserContext);

  useEffect(() => {
    GetUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Switch>
      <Route exact path="/" component={HomeView} />
      <PrivateRoute exact path="/cart" component={CarView} />
      <PrivateRoute exact path="/history" component={HistoryView} />
    </Switch>
  );
};

export default Routes;
