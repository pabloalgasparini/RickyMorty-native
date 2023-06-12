//La función combineReducers devuelve un objeto cuyos valores son 
//diferentes funciones reductoras en una única función reductora que puedes
// enviar a createStore.
import { combineReducers } from "redux";

import  login  from './login.reducer';
import  registro  from './registro.reducer';

export default combineReducers({
   login,
   registro
})