import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducer';
import { createLogger } from 'redux-logger';
/*========================================================
    * function Name: createStore
    * function Purpose: call all midddleWare and reducers
    * function Parameters: reducers, midddleWare
    * function ReturnType: store
    * function Description: createStore using midddleWare and reducers
    *=====================================================*/

const middleWare = [
  thunk
];

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development', 
});

middleWare.push(loggerMiddleware)

const store = createStore(rootReducer, applyMiddleware(...middleWare));

export default store;

