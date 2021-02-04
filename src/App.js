import LayoutVIew from "./layout/LayoutVIew";
import UserState from "./context/UserContext/UserState";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import ProductState from "./context/ProductContext.js/ProductState";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <UserState>
      <ProductState>
        <Router>
          <LayoutVIew>
            <Routes />
            <ToastContainer />
          </LayoutVIew>
        </Router>
      </ProductState>
    </UserState>
  );
}

export default App;
