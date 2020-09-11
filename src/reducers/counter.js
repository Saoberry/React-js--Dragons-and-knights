import {
    SET_COUNTER,
    STOP_COUNTER
 } from "../constants/actions";
 
 const stateInit = {
    counter : 0,
    status : false
 }
 
 const reducer = (state = stateInit, action = {}) => {
 
     switch (action.type) {
 
        case SET_COUNTER:
             return {
                ...state,
                counter : state.counter + action.payload
             }
        case STOP_COUNTER:
            // let status = action.payload;
            
            // if (status === true) {
            //     status = false
            // } else {
            //     status = true
            // }
            // console.log (status)
            let status = action.payload
            return {
                ...state,
                status : status
            }

         default:
             return state;
     }
 }
 
 export default reducer;