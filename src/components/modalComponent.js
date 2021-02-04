import { Dialog } from "@material-ui/core";
import { useContext } from "react";
import UserContext from "../context/UserContext/UserContex";

const ModalComponent = (props) => {
    const { modal, StateModal } = useContext(UserContext);
    return ( 
        <Dialog open={modal !== '' ? true : false} onClose={()=>StateModal('')}>
            {props.children}
        </Dialog>
    );
}
 
export default ModalComponent;