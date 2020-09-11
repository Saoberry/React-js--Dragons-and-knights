import {
    SET_DRAGON,
    ADD_DRAGON,
    DELETE_DRAGON,
    REVERSE_DRAGON_LIST,
    SET_KNIGHT,
    ADD_KNIGHT,
    DELETE_KNIGHT,
    SET_LOG,
    RESET_LOG,
    SET_COUNTER,
    STOP_COUNTER
} from '../constants/actions';

import moment from 'moment';

// reducer dragon
export const set_dragon = payload => {
    return {
        type: SET_DRAGON, payload
    };
}

export const add_dragon = () => {
    return {
        type: ADD_DRAGON
    };
}

export const delete_dragon = payload => {
    return {
        type: DELETE_DRAGON, payload
    };
}

export const reverse_dragon_list = () => {
    return {
        type: REVERSE_DRAGON_LIST
    };
}

// reducer knight
export const set_knight = payload => {
    return {
        type: SET_KNIGHT, payload
    };
}

export const add_knight = () => {
    return {
        type: ADD_KNIGHT
    };
}

export const delete_knight = payload => {
    return {
        type: DELETE_KNIGHT, payload
    };
}

// reducer log
export const set_log = payload => {
    return {
        type: SET_LOG, payload
    };
}

export const reset_log = () => {
    return {
        type: RESET_LOG
    };
}

// reducer counter
// Cette action est synchrone
export const  set_counter = payload => {
    return {
      type: SET_COUNTER, payload
    };
}
  
// Fonctions utiles
export const checkElemExist = (elem, elems) => {
  
    if(elems.lenght === 0 ) return false;

    if( elems.find( e => e === elem ) ) return true;

    return false;
}

export const getDateNow = () => {

    return moment().format('DD MM YYYY hh:mm:ss');
}

let interval;

export const startCounter = () => {

   return dispatch => {
        interval= setInterval(() => {
            dispatch(set_counter(1)); // Se fait toutes les TIME (1s) de manière asynchrone
        }, 1000);
  };
}; 

export const stopCounter = payload => {
    clearInterval(interval);

    return { type : STOP_COUNTER, payload }
   };
