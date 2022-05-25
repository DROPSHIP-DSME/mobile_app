import {
    SET_CREATE_STORE_INFO,
    SET_CREATE_STORE_LOADER,
    SET_VENDOR_LOADER,
    VENDOR_ADDED_SUCCESS,
    SET_UTILITYBILL_INFO,
    SET_UTILITYBILL_LOADER,
    SET_STOREIMAGE_LOADER,
    SET_STOREIMAGE_INFO,
    SET_VENDOR_LIST_LOADER,
    SET_VENDOR_LIST,
    VENDOR_UPDATED_INFO,
    VENDOR_UPDATE_LOADER,
    SET_SINGLE_VENDOR_INFO,
    SET_SINGLE_VENDOR_LOADER,
    ACCEPT_VENDOR_LOADER,
    ACCEPT_VENDOR_INFO,
    SET_STORE_AUTOFILL_INFO,
    SET_VENDOR_NOTIFICATION_INFO,
    SET_SEARCH_CATEGORY_LOADER,
    SET_SEARCH_CATEGORY_RESULT,
    SET_USER_ID_RESET_PASSWORD,
    SET_IS_STORE,
    SET_TRACK_EARNING_LOADER,
    SET_TRACK_EARNING_DATA,
    SET_VERIFICAITON_STATUS,
    SET_VERIFICAITON_STEPS
} from '../actions/ActionTypes';

// Redux states
const initialState = {
    addVendorLoader: false,
    vendorAddedSuccess: false,
    vendorList: [],
    vendorListLoader: false,
    createStoreLoader: false,
    storeInfo: null,
    storeAutofilInfo: null,
    utilityBillInfo: null,
    uploadUtilitybillLoader: false,
    storeImageUploadInfo: null,
    storeImageUploadLoader: false,
    updatedVendorInfo: null,
    updateVendorLoader: false,
    singleVendorDetails: null,
    singleVendorDetailsLoader: null,
    acceptVendorInfo: null,
    acceptVendorLoader: null,
    vendorInfo: null,
    categorySearchLoader: false,
    categorySearchResult: null,
    userIdResetpassoword: null,
    isStore: false,
    verificationSteps: 0,
    verificationStatus: {
        "isStore": false,
        "isStoreImage": false,
        "isUtilityBill": false
    },
    trackEarningData: null,
    trackEarningLoader: false
};

const Vendor = (state = initialState, action) => {
    switch (action.type) {
        case SET_VENDOR_LOADER:
            return {
                ...state,
                addVendorLoader: action.payload,
            };
        case VENDOR_ADDED_SUCCESS:
            return {
                ...state,
                addVendorLoader: action.payload,
            };
        case SET_VENDOR_LIST:
            return {
                ...state,
                vendorList: action.payload,
            };
        case SET_VENDOR_LIST_LOADER:
            return {
                ...state,
                vendorListLoader: action.payload,
            };
        case SET_CREATE_STORE_LOADER:
            return {
                ...state,
                createStoreLoader: action.payload,
            };
        case SET_CREATE_STORE_INFO:
            return {
                ...state,
                storeInfo: action.payload,
            };
        case SET_STORE_AUTOFILL_INFO:
            return {
                ...state,
                storeAutofilInfo: action.payload,
            };
        case SET_UTILITYBILL_INFO:
            return {
                ...state,
                utilityBillInfo: action.payload,
            };
        case SET_UTILITYBILL_LOADER:
            return {
                ...state,
                uploadUtilitybillLoader: action.payload,
            };
        case SET_STOREIMAGE_LOADER:
            return {
                ...state,
                storeImageUploadLoader: action.payload,
            };
        case SET_STOREIMAGE_INFO:
            return {
                ...state,
                storeImageUploadInfo: action.payload,
            };
        case VENDOR_UPDATE_LOADER:
            return {
                ...state,
                updateVendorLoader: action.payload,
            };
        case VENDOR_UPDATED_INFO:
            return {
                ...state,
                updatedVendorInfo: action.payload,
            };
        case SET_SINGLE_VENDOR_LOADER:
            return {
                ...state,
                singleVendorDetailsLoader: action.payload,
            };
        case SET_SINGLE_VENDOR_INFO:
            return {
                ...state,
                singleVendorDetails: action.payload,
            };
        case ACCEPT_VENDOR_LOADER:
            return {
                ...state,
                acceptVendorLoader: action.payload,
            };
        case ACCEPT_VENDOR_INFO:
            return {
                ...state,
                acceptVendorInfo: action.payload,
            };
        case SET_VENDOR_NOTIFICATION_INFO:
            return {
                ...state,
                vendorInfo: action.payload,
            };
        case SET_SEARCH_CATEGORY_LOADER:
            return {
                ...state,
                categorySearchLoader: action.payload,
            };
        case SET_SEARCH_CATEGORY_RESULT:
            return {
                ...state,
                categorySearchResult: action.payload,
            };
        case SET_USER_ID_RESET_PASSWORD:
            return {
                ...state,
                userIdResetpassoword: action.payload,
            };
        case SET_IS_STORE:
            return {
                ...state,
                isStore: action.payload,
            };
        case SET_TRACK_EARNING_LOADER:
            return {
                ...state,
                trackEarningLoader: action.payload,
            };
        case SET_TRACK_EARNING_DATA:
            return {
                ...state,
                trackEarningData: action.payload,
            };
        case SET_VERIFICAITON_STATUS:
            return {
                ...state,
                verificationStatus: action.payload,
            };
        case SET_VERIFICAITON_STEPS:
            return {
                ...state,
                verificationSteps: action.payload,
            };
        default:
            return state;
    }
};

export default Vendor;
