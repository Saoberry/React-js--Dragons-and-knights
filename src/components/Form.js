import React from 'react';

import {
    useSelector, 
    useDispatch
} from 'react-redux';

import { set_dragon, add_dragon, set_knight, add_knight } from '../actions/actions-types'

const Form = () => {
    const { dragon, knight, message } = useSelector(state => {

        return {
          dragon : state.dragonReducer.dragon,
          knight : state.knightReducer.knight
        }
      });
    const dispatch = useDispatch();

    const handleChangeDragon = e => {
        const { value: dragon } = e.target;
        dispatch(set_dragon(dragon));
    }

    const handleChangeKnight = e => {
        const { value: knight } = e.target;
        dispatch(set_knight(knight));
    }

    const handleSubmitDragon = (e) => {
        e.preventDefault();
        dispatch(add_dragon());
    }

    const handleSubmitKnight = (e) => {
        e.preventDefault();
        dispatch(add_knight());
    }

    return (
        <>
        {/** Attention utilisez des parenthèses pour rendre du contenu multiple */}
            {message !== '' && (
                <div className="Form-error">
                    <p>{message}</p>
                </div>
            )}
            <form onSubmit={handleSubmitDragon}>
                <div>
                    <label>Ajouter un dragon</label>
                    <input
                        type="text"
                        onChange={handleChangeDragon}
                        value={dragon}
                    />
                </div>
                <div>
                    <button type="submit" className="btn btn-info">Add</button>
                </div>
            </form>
            <form onSubmit={handleSubmitKnight}>
                <div>
                    <label>Ajouter un Chevalier</label>
                    <input
                        type="text"
                        onChange={handleChangeKnight}
                        value={knight}
                    />
                </div>
                <div>
                    <button type="submit" className="btn btn-info">Add</button>
                </div>
            </form>
        </>
    );
}

export default Form;