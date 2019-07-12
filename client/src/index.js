import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from "./components/auth-components/Auth";

const auth = new Auth();

let state = {};
window.setState = (changes) => {
    state = Object.assign({}, state, changes);
    ReactDOM.render(<App {...state} />, document.getElementById('root'));
};

let user = auth.getProfile();

let initialState = {
    // eslint-disable-next-line no-restricted-globals
    location: location.pathname.replace(/^\/?|\/$/g, ""),
    auth,
    user
};

window.setState(initialState);

serviceWorker.unregister();