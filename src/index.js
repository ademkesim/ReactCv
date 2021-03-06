import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from 'react-redux';
import store from './redux/reducers/configureStore';
import {BrowserRouter} from 'react-router-dom';
import"../src/style.css";
import 'alertifyjs/build/css/alertify.min.css';


ReactDOM.render( <BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById("root"));

serviceWorker.unregister();
