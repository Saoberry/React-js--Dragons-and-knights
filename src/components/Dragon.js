import React from 'react';
import {
  useDispatch,
} from 'react-redux';

import { delete_dragon } from '../actions/actions-types';

const Dragon = ({ dragon }) => {

  const dispatch = useDispatch();

  return (
    <div>
      <div className="containerList">
        <div className="row">
            <div className="col-6">
              <p>Name : {dragon}</p>
              <button className="btn btn-dark" onClick={() => dispatch(delete_dragon(dragon))}>Delete {dragon}
              </button>    
            </div>        
        </div>
      </div>
    </div>
  );
}

export default Dragon;