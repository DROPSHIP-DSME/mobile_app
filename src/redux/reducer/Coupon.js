import {
    CREATE_COUPONS_SUCCESS,
    CREATE_COUPONS_LOADER,
    COUPONS_LIST_LOADER,
    SET_COUPONS_LIST,
    REDEEMED_COUPONS_LOADER,
    SET_REDEEMED_COUPONS,
    SET_IS_STORE,
    REDEEMED_COUPONS_TRACKING_LOADER,
    SET_REDEEMED_TRACKING_COUPONS, 
    SUBSCRIPTION_PLAN_DATA,
    SUBSCRIPTION_PLAN_DATA_LOADER,
    SUBSCRIPTION_PURCHASED_DATA,
    SUBSCRIPTION_STATUS,
    SUBSCRIPTION_PURCHASED_LOADER,
    SET_PLAN_SELECTED_FLAG,
    SET_REMAING_COUPON_CREDIT,
    SET_PAYMENT_PROCESS,
    PAYMENT_PROCESS_LOADER
} from '../actions/ActionTypes';

// Redux states
const initialState = {
    createCouponLoader: false,
    createCouponSuccess: null,
    couponsList: [],
    couponsListLoader: false,
    redeemedCoupons: [],
    redeemedCouponsLoader: false,
    redeemedCouponTrackingData: null,
    redeemedCouponTrackingLoader: false,
    subscriptionPlanData: [],
    subscriptionPlanDataLoader: false,
    subscriptionPurchaseData: null,
    subscriptionPurchaseLoader: false,
    planSelected: false,
    couponCredits: 0,
    paymentDetail:null,
    paymentLoader:false
};

const Coupon = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_COUPONS_LOADER:
            return {
                ...state,
                createCouponLoader: action.payload,
            };
        case CREATE_COUPONS_SUCCESS:
            return {
                ...state,
                createCouponSuccess: action.payload,
            };
        case COUPONS_LIST_LOADER:
            return {
                ...state,
                couponsListLoader: action.payload,
            };
        case SET_COUPONS_LIST:
            return {
                ...state,
                couponsList: action.payload,
            };
        case REDEEMED_COUPONS_LOADER:
            return {
                ...state,
                redeemedCouponsLoader: action.payload,
            };
        case SET_REDEEMED_COUPONS:
            return {
                ...state,
                redeemedCoupons: action.payload,
            };
        case REDEEMED_COUPONS_TRACKING_LOADER:
            return {
                ...state,
                redeemedCouponTrackingLoader: action.payload,
            };
        case SET_REDEEMED_TRACKING_COUPONS:
            return {
                ...state,
                redeemedCouponTrackingData: action.payload,
            };
        case SUBSCRIPTION_PLAN_DATA_LOADER:
            return {
                ...state,
                subscriptionPlanDataLoader: action.payload,
            };
        case SUBSCRIPTION_PLAN_DATA:
            console.log('subscriptionStatus screen reducer:', action.payload)
            return {
                ...state,
                subscriptionPlanData: action.payload,
            };
        case SUBSCRIPTION_PURCHASED_LOADER:
            return {
                ...state,
                subscriptionPurchaseLoader: action.payload,
            };
        case SUBSCRIPTION_PURCHASED_DATA:
            return {
                ...state,
                subscriptionPurchaseData: action.payload,
            };
        
        case SUBSCRIPTION_STATUS:
            return {
                ...state,
                subscriptionStatus: action.payload,
            };
        case SET_PLAN_SELECTED_FLAG:
            return {
                ...state,
                planSelected: action.payload,
            };
        case SET_REMAING_COUPON_CREDIT:
            return {
                ...state,
                couponCredits: action.payload,
            };
        case SET_PAYMENT_PROCESS:
            return {
                ...state,
                paymentDetail: action.payload,
            };
        case PAYMENT_PROCESS_LOADER:
            return {
                ...state,
                paymentLoader: action.payload,
            };
        default:
            return state;
    }
};

export default Coupon;
