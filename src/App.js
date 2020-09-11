import React from 'react';
import './App.css';

import {
  useSelector
} from 'react-redux';

import Dragons from './components/Dragons';
import Knights from './components/Knights';
import Form from './components/Form';
import Header from './components/Header';

const App = () => {
  const { logs } = useSelector(state => state.logReducer);

  return (

    <div className="container">
      <div className="row">
        <div className="col-12 header-dragons">
          <Header />  
        </div>
      </div>
      <div className="row">
        <div className="col-4 partLeft">
          <Form />
          <ul>
            <li>Log(s) :</li>
            {logs.map((log, i) => <li key={i} >{log}</li>)}
          </ul>
        </div>
        <div className="col-8 partRight">
        <div className="row">
          <div className="col-6">
            <Dragons />  
          </div>
          <div className="col-6">
            <Knights />
          </div>
        </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default App;