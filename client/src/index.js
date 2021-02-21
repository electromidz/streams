import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore , applyMiddleware } from 'redux';


import App from './components/App';
import reducers from './reducers';

const composeEnhancer = window.__REDUX_DEFTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers , composeEnhancer(applyMiddleware()));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

