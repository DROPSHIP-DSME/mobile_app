import { combineReducers } from 'redux';
import Auth from './Auth';
import Vendor from './Vendor';
import Coupon from './Coupon';
import Bank from './Bank';

// Combine app reducers
const appReducer = combineReducers({
  auth: Auth,
  vendor: Vendor,
  coupon: Coupon,
  bank: Bank
});

// Root reducer
const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

export default rootReducer;
