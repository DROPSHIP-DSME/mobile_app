import {
  LOGIN_USER_ID,
  LOGIN_USER_STATUS,
  SIGNUP_CREDENTIALS,
  CHANGE_REMBER_ME_LOGIN_CREDENTIALS,
  SIGNUP_SUCCESS,
  SET_LOGIN_CREDENTIAL,
  OTP_VERIFIED,
  OTP_RESEND_SUCCESS,
  SET_REGISTRATION_LOADER,
  SET_OTP_LOADER,
  SET_LOGIN_LOADER,
  SET_PHONESIGNUP_LOADER,
  SET_FORGET_PASSWORD_LOADER,
  SET_RESET_PASSWORD_LOADER,
  SET_FORGET_PASSWORD_SUCCESS,
  SET_RESET_PASSWORD_SUCCESS,
  SET_NETWORK_STATE,
  VENDOR_REQUEST_LOADER,
  VENDOR_REQUESTED_INFO,
  SET_DEFAULT_AUTH_SCREEN,
  CART_LIST_DATA,
  CART_LIST_DATA1,
  GET_ALL_SHOP,
  SET_BRAND_LOADER,
  SET_PRODUCT_LOADER,
  SET_PRODUCT2_LOADER,
  SET_PRODUCT3_LOADER,
  SET_CHECKOUT_LOADER,
  SET_SAVEADDRESS_LOADER,
  SET_CATEGORY_LOADER,
  GET_ALL_CATEGORY,
  GET_ALL_PRODUCT,
  GET_ALL_WatchPRODUCT,
  GET_ALL_PRODUCTDETAILS,
  SET_ADDCART_LOADER,
  INCREMENT_CART_LIST,
  DELETE_CART_LIST,
  DELETE_ADDRESS_LIST,
  DELETE_CARD_LIST,
  REMOVE_CATEGORY_LIST,
  REMOVE_ITEM_LIST,
  SET_SUPPORT_LOADER,
  GET_SUPPORT_LIST1,
  GET_PROFILEUSER_LIST,
  GET_USERADDRESS_LIST,
  GET_USERCARD_LIST,
  GET_INCOMINGORDER_LIST,
  GET_PROCESSORDER_LIST,
  GET_ORDER_LIST,
  LIVE_LIST_DATA,
  SET_SCHEDULE_LOADER,
  SET_UPDATEPROFILE_LOADER,
  SET_UPDATEPASSWORD_LOADER,
  SET_BRAND_NAME,
  GET_LIVEEVENT_LIST,
  GET_LIVECOMMENT_LIST,
  SET_COMMENT_LOADER,
  SET_CATEGORYPRODUCT_LOADER,
  COUNTRY_LIST_DATA,
  BRANDS_LIST_DATA,
  ALLEVENT_LIST_DATA,
  GET_BRAND_DETAILS,
  GET_BRAND_PRODUCT,
  GET_CHANNEL_COUNT,
  TOTAL_CART_PRICE,
  GET_SELL_DESHBOARD,
  GET_TOP_SELL,
  GET_TOP_COUNTRY,
  GET_SHOP_PRODUCT,
  GET_SHOPSELL_COUNT,
  NEW_PROFILE,
  GETCALLTOKEN,
  POST_EDIT_USER,
  DELETE_USER,
  SEARCH_LIST_ITMES,
  ALLSEARCH_LIST_DATA,
  LIVESTREAM_RECAP,
} from '../actions/ActionTypes';

// Redux states
const initialState = {
  isInternetConnected: false,
  signupCredentials: null,
  registrationLoader: false,
  otpVerified: false,
  optResent: undefined,
  otpVerificationLoader: false,
  signupSuccess: false,
  loginCredentials: null,
  loginLoader: false,
  signupphoneLoader: false,
  remeberMeLoginCredentials: false,
  forgetPasswordLoader: false,
  resetPasswordLoader: false,
  forgetPasswordSuccess: false,
  resetPasswordSuccess: false,
  vendorRequestLoader: false,
  vendorRequestedInfo: null,
  defaultAuthScreen: "Login",
  cartlistdata: null,
  countrylistdata: null,
  Brandlistdata: null,
  cartlistdata1: null,
  livedetail: null,
  newprofileLoader: false,
  incrementcartlioder: null,
  getlistshop: null,
  addcartLoader: false,
  addcategoryproductLoader: false,
  brandLoader: false,
  scheduleLoader: false,
  updateprofileLoader: false,
  updatepasswordLoader: false,
  productLoader: false,
  productLoader2: false,
  productLoader3: false,
  supportLoder: false,
  commentLoder: false,
  chekoutLoder: false,
  saveaddressLoder: false,
  categoryLoader: false,
  getlistcategory: null,
  getshopselllist: null,
  getlistproduct: null,
  getwatchlistproduct: null,
  getorderlist: null,
  getinconeorderlist: null,
  getprocessorderlist: null,
  getlistproductdetails: null,
  getchatsupportlist: null,
  getchatsupportlist1: null,
  getprofileuserlist: null,
  getuseraddresslist: null,
  getusercardlist: null,
  deletedatalioder: null,
  deletecardlioder: null,
  deleteaddresslioder: null,
  removedatalioder: null,
  removecategorylioder: null,
  getshopproductlist: null,
  brandName: null,
  searchlistitmes: null,
  searchlistdata: null,
  getalleventdata: null,
  getliveeventlist: null,
  getlivecommentlist: null,
  gettopsellproduct: null,
  getBranddetails: null,
  getlisttopcountry: null,
  getlistselldeshboard: null,
  loginuserid: null,
  loginuserstatus: 0,
  getlistbranddetails: null,
  audiancecount: null,
  totalcartprice: 0,
  getcalltokendata: null,
  seteditprofileuser: null,
  setdeleteuser: null,
  livestreamrecaplist: null,

};

const Auth = (state = initialState, action) => {
  switch (action.type) {

    case DELETE_USER:
      return {
        ...state,
        setdeleteuser: action.payload,
      };
    case POST_EDIT_USER:
      return {
        ...state,
        seteditprofileuser: action.payload,
      };
    case SET_NETWORK_STATE:
      return {
        ...state,
        isInternetConnected: action.payload,
      };
    case LOGIN_USER_ID:
      return {
        ...state,
        loginuserid: action.payload,
      };

    case GETCALLTOKEN:
      return {
        ...state,
        getcalltokendata: action.payload,
      };

    case LOGIN_USER_STATUS:
      return {
        ...state,
        loginuserstatus: action.payload,
      };
    case SIGNUP_CREDENTIALS:
      return {
        ...state,
        signupCredentials: action.payload,
      };
    case SET_REGISTRATION_LOADER:
      return {
        ...state,
        registrationLoader: action.payload,
      };
    case CHANGE_REMBER_ME_LOGIN_CREDENTIALS:
      return {
        ...state,
        remeberMeLoginCredentials: action.payload,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupSuccess: action.payload,
      };
    case SET_LOGIN_CREDENTIAL:
      return {
        ...state,
        loginCredentials: action.payload,
      };

    case SET_PHONESIGNUP_LOADER:
      return {
        ...state,
        signupphoneLoader: action.payload,
      };

    case SET_LOGIN_LOADER:
      return {
        ...state,
        loginLoader: action.payload,
      };

    case SET_BRAND_LOADER:
      return {
        ...state,
        brandLoader: action.payload,
      };

    case TOTAL_CART_PRICE:
      return {
        ...state,
        totalcartprice: action.payload,
      };


    case SET_UPDATEPASSWORD_LOADER:
      return {
        ...state,
        updatepasswordLoader: action.payload,
      };

    case SET_UPDATEPROFILE_LOADER:
      return {
        ...state,
        updateprofileLoader: action.payload,
      };

    case NEW_PROFILE:
      return {
        ...state,
        newprofileLoader: action.payload,
      };

    case SET_SCHEDULE_LOADER:
      return {
        ...state,
        scheduleLoader: action.payload,
      };

    case SET_PRODUCT_LOADER:
      return {
        ...state,
        productLoader: action.payload,
      };

    case SET_PRODUCT2_LOADER:
      return {
        ...state,
        productLoader2: action.payload,
      };

    case SET_PRODUCT3_LOADER:
      return {
        ...state,
        productLoader3: action.payload,
      };

    case SET_SUPPORT_LOADER:
      return {
        ...state,
        supportLoder: action.payload,
      };

    case SET_COMMENT_LOADER:
      return {
        ...state,
        commentLoder: action.payload,
      };

    case SET_CHECKOUT_LOADER:
      return {
        ...state,
        chekoutLoder: action.payload,
      };

    case SET_SAVEADDRESS_LOADER:
      return {
        ...state,
        saveaddressLoder: action.payload,
      };

    case SET_ADDCART_LOADER:
      return {
        ...state,
        addcartLoader: action.payload,
      };

    case SET_CATEGORYPRODUCT_LOADER:
      return {
        ...state,
        addcategoryproductLoader: action.payload,
      };

    case SET_CATEGORY_LOADER:
      return {
        ...state,
        categoryLoader: action.payload,
      };

    case OTP_VERIFIED:
      return {
        ...state,
        otpVerified: action.payload,
      };
    case SET_OTP_LOADER:
      return {
        ...state,
        otpVerificationLoader: action.payload,
      };
    case OTP_RESEND_SUCCESS:
      return {
        ...state,
        optResent: action.payload,
      };
    case SET_FORGET_PASSWORD_LOADER:
      return {
        ...state,
        forgetPasswordLoader: action.payload,
      };
    case SET_RESET_PASSWORD_LOADER:
      return {
        ...state,
        resetPasswordLoader: action.payload,
      };
    case SET_FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        forgetPasswordSuccess: action.payload,
      };
    case SET_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: action.payload,
      };
    case VENDOR_REQUEST_LOADER:
      return {
        ...state,
        vendorRequestLoader: action.payload,
      };
    case VENDOR_REQUESTED_INFO:
      return {
        ...state,
        vendorRequestedInfo: action.payload,
      };
    case SET_DEFAULT_AUTH_SCREEN:
      return {
        ...state,
        defaultAuthScreen: action.payload,
      };

    case LIVE_LIST_DATA:
      return {
        ...state,
        livedetail: action.payload,
      };

    case CART_LIST_DATA:
      return {
        ...state,
        cartlistdata: action.payload,
      };
    case CART_LIST_DATA1:
      return {
        ...state,
        cartlistdata1: action.payload,
      };
    case SEARCH_LIST_ITMES:
      return {
        ...state,
        searchlistitmes: action.payload,
      };
    case ALLSEARCH_LIST_DATA:
      return {
        ...state,
        searchlistdata: action.payload,
      };
    case BRANDS_LIST_DATA:
      return {
        ...state,
        Brandlistdata: action.payload,
      };

    case COUNTRY_LIST_DATA:
      return {
        ...state,
        countrylistdata: action.payload,
      };

    case INCREMENT_CART_LIST:
      return {
        ...state,
        incrementcartlioder: action.payload,
      };

    case REMOVE_CATEGORY_LIST:
      return {
        ...state,
        removecategorylioder: action.payload,
      };

    case REMOVE_ITEM_LIST:
      return {
        ...state,
        removedatalioder: action.payload,
      };

    case DELETE_CARD_LIST:
      return {
        ...state,
        deletecardlioder: action.payload,
      };

    case DELETE_ADDRESS_LIST:
      return {
        ...state,
        deleteaddresslioder: action.payload,
      };

    case DELETE_CART_LIST:
      return {
        ...state,
        deletedatalioder: action.payload,
      };

    case GET_ALL_SHOP:
      return {
        ...state,
        getlistshop: action.payload,
      };

    case GET_SHOP_PRODUCT:
      return {
        ...state,
        getshopproductlist: action.payload,
      };

    case GET_ALL_CATEGORY:
      return {
        ...state,
        getlistcategory: action.payload,
      };

    case GET_SELL_DESHBOARD:
      return {
        ...state,
        getlistselldeshboard: action.payload,
      };

    case GET_ALL_PRODUCT:
      return {
        ...state,
        getlistproduct: action.payload,
      };
    case GET_ALL_WatchPRODUCT:
      return {
        ...state,
        getwatchlistproduct: action.payload,
      };

    case GET_PROFILEUSER_LIST:
      return {
        ...state,
        getprofileuserlist: action.payload,
      };

    case GET_USERCARD_LIST:
      return {
        ...state,
        getusercardlist: action.payload,
      };

    case GET_USERADDRESS_LIST:
      return {
        ...state,
        getuseraddresslist: action.payload,
      };

    case GET_SUPPORT_LIST1:
      return {
        ...state,
        getchatsupportlist1: action.payload,
      };

    case GET_PROCESSORDER_LIST:
      return {
        ...state,
        getprocessorderlist: action.payload,
      };

    case GET_INCOMINGORDER_LIST:
      return {
        ...state,
        getinconeorderlist: action.payload,
      };

    case GET_ORDER_LIST:
      return {
        ...state,
        getorderlist: action.payload,
      };

    case ALLEVENT_LIST_DATA:
      return {
        ...state,
        getalleventdata: action.payload,
      };

    case GET_BRAND_DETAILS:
      return {
        ...state,
        getBranddetails: action.payload,
      };

    case GET_LIVECOMMENT_LIST:
      return {
        ...state,
        getlivecommentlist: action.payload,
      };

    case GET_TOP_COUNTRY:
      return {
        ...state,
        getlisttopcountry: action.payload,
      };

    case GET_BRAND_PRODUCT:
      return {
        ...state,
        getlistbranddetails: action.payload,
      };

    case GET_SHOPSELL_COUNT:
      return {
        ...state,
        getshopselllist: action.payload,
      };

    case GET_CHANNEL_COUNT:
      return {
        ...state,
        audiancecount: action.payload,
      };

    case GET_LIVEEVENT_LIST:
      return {
        ...state,
        getliveeventlist: action.payload,
      };
    case LIVESTREAM_RECAP:
      console.log("liveatreamcap=------->",action.payload)
      return {
        ...state,
        livestreamrecaplist: action.payload,
      };
    case GET_TOP_SELL:
      return {
        ...state,
        gettopsellproduct: action.payload,
      };

    case GET_ALL_PRODUCTDETAILS:
      return {
        ...state,
        getlistproductdetails: action.payload,
      };
    case SET_BRAND_NAME:
      return {
        ...state,
        brandName: action.payload,
      };
    default:
      return state;
  }
};

export default Auth;
