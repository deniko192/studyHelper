import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from '@reatom/core';
import { userAtom } from './StartPage/model/userAtom';
import { context } from '@reatom/react';

const store = createStore(userAtom);

ReactDOM.render(
  <React.StrictMode>
    <context.Provider value={store}>
      <App />
    </context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
