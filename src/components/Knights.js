import React from 'react';
import {
    useSelector
} from 'react-redux';

import Knight from './Knight';

const Knights = () => {
    const { knights } = useSelector(state => state.knightReducer);

    if (knights.length > 0)
        return (
            <div className="Dragons-principal">
                {knights.map((knight, i) => (
                    <Knight
                        key={i}
                        knight={knight}
                    />
                ))}
            </div>
        );

    return (
        <p>Désolé aucun chevalier dans la base</p>
    )
}

export default Knights;