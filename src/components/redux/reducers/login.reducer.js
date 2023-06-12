import { FETCH_AUTH_SUCCESS, FETCH_AUTH_ERROR } from "../type/types";
  
  
  const INITIAL_STATE = {
    
    loading: false,
    isAuthenticated: null,
    auth: [],
    
  };
  
  
  
  export default function (state = INITIAL_STATE, action) {

    const { type, payload } = action;

    switch (type) {

      case FETCH_AUTH_SUCCESS:
        return {
          loading: false,
          auth: payload,
          isAuthenticated:true
          
        };
      case FETCH_AUTH_ERROR:
        return {
          loading: false,
          auth: [],
         
          
        };
      
      

       

      default:
        return state;
    }
  };