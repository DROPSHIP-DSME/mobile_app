import { combineReducers } from 'redux';
import Auth from './Auth';

// Combine app reducers
const appReducer = combineReducers({
  auth: Auth
});

// Root reducer
const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

export default rootReducer;
