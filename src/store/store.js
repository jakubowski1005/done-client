import { createStore, applyMiddleware, compose } from 'redux'
//import axiosMiddleware from 'redux-axios-middleware'
import thunk from 'redux-thunk';
//import axios from 'axios'
import rootReducer from '../reducers/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {   
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
}

const store = configureStore()

export default store;