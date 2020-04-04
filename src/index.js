import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IdentityContextProvider } from 'react-netlify-identity'
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom'

const identityUrl = "https://gemma-demma.netlify.com/"

ReactDOM.render(
  <React.StrictMode>
    <IdentityContextProvider url={identityUrl}>
      <Router>
        <App />
      </Router>
    </IdentityContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
