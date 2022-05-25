import {
    COUPONS_LIST_LOADER,
    CREATE_COUPONS_LOADER,
    CREATE_COUPONS_SUCCESS,
    SET_COUPONS_LIST,
    REDEEMED_COUPONS_LOADER,
    SET_REDEEMED_COUPONS,
    REDEEMED_COUPONS_TRACKING_LOADER,
    SET_REDEEMED_TRACKING_COUPONS,
    SUBSCRIPTION_PLAN_DATA,
    SUBSCRIPTION_PURCHASED_DATA,
    SUBSCRIPTION_PURCHASED_LOADER,
    SUBSCRIPTION_STATUS,
    SUBSCRIPTION_PLAN_DATA_LOADER,
    SET_PLAN_SELECTED_FLAG, 
    SET_REMAING_COUPON_CREDIT,
    SET_PAYMENT_PROCESS,
    PAYMENT_PROCESS_LOADER
} from './ActionTypes';
import { Alert } from 'react-native';
import { Api, Utilise } from '../../common';


// Create New Coupon 
export const createNewCoupon = (couponRequest, navigation, couponId) => {
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                let url = Api.createOrUpdateCoupon;
                if (couponId && couponId !== null) {
                    url = `${Api.createOrUpdateCoupon}?couponId=${couponId}`
                }
                dispatch({ type: CREATE_COUPONS_LOADER, payload: true });
                let response = await Utilise.apiCalling('POST', url, couponRequest)
                dispatch({ type: CREATE_COUPONS_LOADER, payload: false });
                if (response?.status) {
                    dispatch({ type: CREATE_COUPONS_SUCCESS, payload: response.data });
                    dispatch(getCouponList())
                    navigation?.navigate("Coupons")
                } else {
                    Alert.alert("WallPon", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: CREATE_COUPONS_LOADER, payload: false });
                dispatch({ type: CREATE_COUPONS_SUCCESS, payload: null });
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};

// get Coupon list
export const getCouponList = () => {
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;

        if (isInternetConnected) {
            try {
                                   // Alert.alert("WallPon", String("Some thing went wrong."))
                    console.log("Store is not found")
                
            } catch (error) {
                dispatch({ type: COUPONS_LIST_LOADER, payload: false });
                dispatch({ type: SET_COUPONS_LIST, payload: [] });
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};

// get Redeemed coupon  list
export const getRedeemedCoupons = () => {
    return async (dispatch, getState) => {
        let loginCredentials = await getState().auth?.loginCredentials;
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: REDEEMED_COUPONS_LOADER, payload: true });
                let response = await Utilise.apiCalling('GET', `${Api.redeemCoupon}/${loginCredentials?._id}`)
                dispatch({ type: REDEEMED_COUPONS_LOADER, payload: false });
                if (response?.status) {
                    dispatch({ type: SET_REDEEMED_COUPONS, payload: response.data });
                } else {
                    Alert.alert("WallPon", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: REDEEMED_COUPONS_LOADER, payload: false });
                dispatch({ type: SET_REDEEMED_COUPONS, payload: [] });
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};

// get Redeemed tracking data
export const getRedeemedTrackingData = (couponId) => {
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: REDEEMED_COUPONS_TRACKING_LOADER, payload: true });
                let response = await Utilise.apiCalling('GET', `${Api.getRedeemCouponTracking}?couponId=${couponId}`)
                dispatch({ type: REDEEMED_COUPONS_TRACKING_LOADER, payload: false });
                if (response?.status) {
                    dispatch({ type: SET_REDEEMED_TRACKING_COUPONS, payload: response.data });
                } else {
                    Alert.alert("WallPon", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: REDEEMED_COUPONS_TRACKING_LOADER, payload: false });
                dispatch({ type: SET_REDEEMED_TRACKING_COUPONS, payload: [] });
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};

// get Subscription Plan data
export const getSubscriptionPlans = () => {
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: SUBSCRIPTION_PLAN_DATA_LOADER, payload: true });
                let response = await Utilise.apiCalling('GET', `${Api.getSubscroptionPlan}`)
                dispatch({ type: SUBSCRIPTION_PLAN_DATA_LOADER, payload: false });
                if (response?.status) {
                    dispatch({ type: SUBSCRIPTION_PLAN_DATA, payload: response.data });
                } else {
                    Alert.alert("WallPon", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: SUBSCRIPTION_PLAN_DATA_LOADER, payload: false });
                dispatch({ type: SUBSCRIPTION_PLAN_DATA, payload: [] });
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};

// Purchase Subscription Plan 
export const purchaseSubscriptionPlan = (purchaseCouponRequest, navigation) => {
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        let loginCredentials = await getState().auth?.loginCredentials;
        //loginCredentials?._id
        if (isInternetConnected) {
            purchaseCouponRequest.user_id = loginCredentials?._id;
            console.log("purchaseCouponRequest==>", purchaseCouponRequest)
            try {
                dispatch({ type: SUBSCRIPTION_PURCHASED_LOADER, payload: true });
                let response = await Utilise.apiCalling('POST', `${Api.purchaseSubscription}`, purchaseCouponRequest)
                dispatch({ type: SUBSCRIPTION_PURCHASED_LOADER, payload: false });
                console.log("purchaseSubscriptionPlan.data==>", response)
                if (response?.status) {
                    dispatch({ type: SUBSCRIPTION_PURCHASED_DATA, payload: response?.data });
                    // dispatch({ type: SET_PLAN_SELECTED_FLAG, payload: true });
                    // navigation?.dispatch(
                    //     StackActions.replace('TransactionDetail')
                    // );
                    navigation?.navigate("TransactionDetail");
                    // Alert.alert("WallPon", String(response?.data?.charge?.message))
                } else {
                    Alert.alert("WallPon", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: SUBSCRIPTION_PURCHASED_LOADER, payload: false });
                dispatch({ type: SUBSCRIPTION_PURCHASED_DATA, payload: null });
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};


// // Payment process 
// export const paymentProcess = (paymentRequest, purchaseCouponRequest, navigation) => {
//     return async (dispatch, getState) => {
//         let isInternetConnected = await getState().auth?.isInternetConnected;
//         if (isInternetConnected) {
//             try {
//                 dispatch({ type: PAYMENT_PROCESS_LOADER, payload: true });
//                 let response = await Utilise.apiCalling('POST', `${Api.paymentGatewayAuthorization}`, paymentRequest)
//                 dispatch({ type: PAYMENT_PROCESS_LOADER, payload: false });
//                 console.log("paymentProcess.data==>", response.data)
//                 if (response?.status) {
//                     dispatch({ type: SET_PAYMENT_PROCESS, payload: response.data });
//                     // dispatch(purchaseSubscriptionPlan(purchaseCouponRequest, navigation))
//                     navigation?.dispatch(
//                         StackActions.replace('TransactionDetail')
//                     );
//                     Alert.alert("WallPon", String(response?.data?.message))
//                 } else {
//                     Alert.alert("WallPon", String(response?.message))
//                 }
//             } catch (error) {
//                 dispatch({ type: PAYMENT_PROCESS_LOADER, payload: false });
//                 dispatch({ type: SET_PAYMENT_PROCESS, payload: null });
//                 Alert.alert("WallPon", String(error?.message))
//             }
//         };
//     }
// };


// get Subscription Status 
export const getSubscriptionStatus = (navigation) => {
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        let loginCredentials = await getState().auth?.loginCredentials;
        
        if (isInternetConnected) {
            var getSubscriptionStatusData = [];
            getSubscriptionStatusData.user_id = loginCredentials?._id;
            console.log("getSubscriptionStatusDataReq==>", loginCredentials?._id)
            try {
                dispatch({ type: SUBSCRIPTION_PURCHASED_LOADER, payload: true });
                let response = await Utilise.apiCalling('POST', `${Api.subscriptionStatus}`, getSubscriptionStatus)
                dispatch({ type: SUBSCRIPTION_PURCHASED_LOADER, payload: false });
                console.log("getSubscriptionStatus.data==>", response)
                if (response?.status) {
                    dispatch({ type: SUBSCRIPTION_STATUS, payload: response?.data });                                        
                } else {
                    Alert.alert("WallPon", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: SUBSCRIPTION_PURCHASED_LOADER, payload: false });
                dispatch({ type: SUBSCRIPTION_STATUS, payload: null });
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};