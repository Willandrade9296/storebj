/* eslint-disable import/no-anonymous-default-export */

import { GET_LOCATION, GET_USER, LOGIN_USER, LOGOUT_USER, STATE_MODAL, USER_REGISTER } from "..";


export default (state, accion) => {
    switch (accion.type) {
        case STATE_MODAL:
            return {
                ...state,
                modal: accion.payload
            }
        case USER_REGISTER:
        case LOGIN_USER:
            localStorage.setItem('token', accion.payload.token)
            localStorage.setItem('user', JSON.stringify(accion.payload.user))
            return {
                ...state,
                modal: '',
                user: accion.payload.user,
                token: accion.payload.token
            }
        case GET_USER:
            return {
                ...state,
                user: accion.payload.user,
                token: accion.payload.token
            }
        case LOGOUT_USER:
            localStorage.removeItem('user') 
            localStorage.removeItem('token') 
        return {
            ...state,
            user: '',
            token: null
        }
        case GET_LOCATION: 
        return {
            ...state,
            location: accion.payload
        }
        default:
            return state;
    }
}