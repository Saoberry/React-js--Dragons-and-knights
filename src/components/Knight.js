import React from 'react';
import {
  useDispatch,
} from 'react-redux';

import { delete_knight } from '../actions/actions-types';

const Knight = ({ knight }) => {

  const dispatch = useDispatch();

  return (
    <div>
      <div className="containerList">
        <div className="row">
            <div className="col-12">
              <p>Name : {knight}</p>
              <button className="btn btn-dark" onClick={() => dispatch(delete_knight(knight))}>
                Delete {knight}
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Knight;

