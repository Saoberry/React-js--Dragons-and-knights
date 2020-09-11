import {
    SET_KNIGHT,
    ADD_KNIGHT,
    DELETE_KNIGHT
} from "../constants/actions";

import {
    checkElemExist
} from "../actions/actions-types";

const stateInit = {
    knights: [
        "Babar",
        "Arthur",
        "Perceval"
    ],
    knight: '',
    count: 3,
    message: ''
}

const reducer = (state = stateInit, action = {}) => {

    let knight, knights;

    switch (action.type) {

        case SET_KNIGHT:
            knight = action.payload;

            return {
                ...state,
                knight,
                message: ''
            }
        case ADD_KNIGHT:
            knight = state.knight;
            knights = state.knights;

            if (knight.trim() === '')
                return {
                    ...state,
                    message: `Attention votre champ de saisi est vide`,
                    knight: ''
                }

            if (checkElemExist(knight, knights) === true)
                return {
                    ...state,
                    message: `Attention le chevalier ${knight} existe déjà dans la liste `,
                    dragon: ''
                }

            // On l'ajoute sinon dans un nouveau tableau
            knights = knights.concat(state.knight);

            return {
                ...state,
                knights,
                count: state.count + 1,
                dragon: ''
            }
        case DELETE_KNIGHT:
            knight = action.payload;
            knights = [...state.knights];

            // si on travaille avec des données sur un serveur (...)
            if (checkElemExist(knight, knights) === false)
                return {
                    ...state,
                    message: `Le chevalier ${knight} que vous essayez de supprimer n'existe pas `,
                    dragon: ''
                }

                knights = state.knights.filter(d => d !== knight);
            return {
                ...state,
                knights,
                message: `votre chevalier ${knight} a bien été supprimé`,
                count: state.count - 1
            }

        default:
            return state;
    }
}

export default reducer;