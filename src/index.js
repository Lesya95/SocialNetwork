import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import SocialApp from "./App";

ReactDOM.render(
    <SocialApp/>,
    document.getElementById('root')
);

serviceWorker.unregister();
