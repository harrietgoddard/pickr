import { createStore, compose } from 'redux';
import persistState from 'redux-localstorage';
import reducer from './reducer';
import initial from './initial';

//localstorage middleware and redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// setup store
const store = createStore(
    reducer,
    initial,
    composeEnhancers(persistState()),
);

export default store;