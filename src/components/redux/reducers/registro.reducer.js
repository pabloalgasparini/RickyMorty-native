
import {
    FETCH_REGISTRO_SUCCESS,
    FETCH_REGISTRO_ERROR,
 
  } from "../type/types";
  
  
  const INITIAL_STATE = {

    loading: false,
    
    data: [],
    
  };
  
  
  
  export default function (state = INITIAL_STATE, action) {

    const { type, payload } = action;

    switch (type) {
      
      case FETCH_REGISTRO_SUCCESS:
        return {
          loading: false,
          
          data: payload,
          
        };

      case FETCH_REGISTRO_ERROR:
        return {
          loading: false,
          data: [],
         
        };
      
     
      default:
        return state;
    }
  };
  