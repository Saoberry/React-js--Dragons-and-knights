import { combineReducers } from 'redux';

import dragon from './dragon';
import knight from './knight';
import log from './log';
import counter from './counter';

export default combineReducers({
    dragonReducer : dragon,
    knightReducer : knight,
    logReducer : log,
    counterReducer : counter
});
