import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from 'redux/store';

// plugins styles from node_modules
// import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
// plugins styles downloaded
// import "assets/vendor/fullcalendar/dist/fullcalendar.min.css";
// import "assets/vendor/sweetalert2/dist/sweetalert2.min.css";
// import "assets/vendor/select2/dist/css/select2.min.css";
// import "assets/vendor/quill/dist/quill.core.css";
// import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";

import "assets/scss/argon-dashboard-pro-react.scss?v1.0.0";


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
