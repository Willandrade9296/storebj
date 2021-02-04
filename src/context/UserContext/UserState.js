import { useReducer } from "react";
import UserReducer from "./UserReducer";
import UserContex from "./UserContex";
import {GET_USER, LOGOUT_USER, STATE_MODAL, USER_REGISTER, LOGIN_USER, GET_LOCATION} from '../index';
import axios from '../../config/axios'
import Notifications from '../../notifications/notifications'
const UserState = (props) => {
    const initialState = {
        modal: '',
        user: '',
        token: null,
        location: ''
    }

    const StateModal = value => {
        dispatch({
            type: STATE_MODAL,
            payload: value
        })
    }

    const NewUser =async values => {
        try {
            const res = await axios.post('/register', values);
            if (res.data.code === 0) {
                Notifications(res.data.msg,'success')
                dispatch({
                    type: USER_REGISTER,
                    payload: {
                        user: res.data.session,
                        token: res.data.token,
                    }
                })
            } else {
                Notifications(res.data.msg,'error')
            }
        } catch (error) {
        }
    }
    const GetUser = () => {
        const user= localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if (user && token) {
            dispatch({
                type: GET_USER,
                payload:{
                    user: JSON.parse(user),
                    token: token
                }
            })
        }
    }
    const LogoutUser = () => {
        dispatch({
            type: LOGOUT_USER
        })
    }

    const LoginUser = async value => {
        try {
            const res = await axios.post('/auth', value);
            if (res.data.code === 0) {
                Notifications(`Bienvenido ${res.data.session.user}`,'info')
                dispatch({
                    type: LOGIN_USER,
                    payload: {
                        user: res.data.session,
                        token: res.data.token,
                    }
                })
            } else {
                Notifications(res.data.msg,'error')
            }
        } catch (error) {
        }
    }

    const GetLocation = value => {
        dispatch({
            type: GET_LOCATION,
            payload: value,
        })
    }
    const [state, dispatch] = useReducer(UserReducer, initialState)
    return ( 
        <UserContex.Provider 
            value={{
                modal: state.modal,
                user: state.user,
                token: state.token,
                location: state.location,
                StateModal,
                NewUser,
                GetUser,
                LogoutUser,
                LoginUser,
                GetLocation
            }}
        >
            {props.children}
        </UserContex.Provider>
        
    );
}
 
export default UserState;