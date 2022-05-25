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
    VENDOR_UPDATE_LOADER,
    VENDOR_UPDATED_INFO,
    SET_SINGLE_VENDOR_LOADER,
    SET_SINGLE_VENDOR_INFO,
    ACCEPT_VENDOR_LOADER,
    ACCEPT_VENDOR_INFO,
    SET_IS_STORE,
    SET_STORE_AUTOFILL_INFO,
    SET_VENDOR_NOTIFICATION_INFO,
    SET_SEARCH_CATEGORY_LOADER,
    SET_SEARCH_CATEGORY_RESULT,
    SET_USER_ID_RESET_PASSWORD,
    SET_DEFAULT_AUTH_SCREEN,
    SET_LOGIN_CREDENTIAL,
    SET_TRACK_EARNING_LOADER,
    SET_TRACK_EARNING_DATA,
    SET_VERIFICAITON_STATUS,
    SET_PLAN_SELECTED_FLAG,
    SET_VERIFICAITON_STEPS
} from './ActionTypes';
import { Alert } from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import { Api, Utilise } from '../../common';
import { search } from '../../common/SearchApiCalling';
import { CommonActions, StackActions } from '@react-navigation/native';

// Add New Vendor 
export const addNewVendor = (vendorRequest) => {
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: SET_VENDOR_LOADER, payload: true });
                let response = await Utilise.apiCalling('POST', Api.addVendor, vendorRequest)
                dispatch({ type: SET_VENDOR_LOADER, payload: false });
                if (response?.status) {
                    dispatch({ type: VENDOR_ADDED_SUCCESS, payload: true });
                } else {
                    Alert.alert("WallPon", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: SET_VENDOR_LOADER, payload: false });
                dispatch({ type: VENDOR_ADDED_SUCCESS, payload: false });
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};

// Update Vendor 
export const updateVendor = (updateVendorRequest, vendorId, navigation) => {
    return async (dispatch, getState) => {
        // let loginCredentials = await getState().auth?.loginCredentials;
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                let url = Api.insertOrUpdateVendor;
                if (vendorId && vendorId !== null) {
                    url = `${Api.insertOrUpdateVendor}?vendorId=${vendorId}`;
                }
                dispatch({ type: VENDOR_UPDATE_LOADER, payload: true });
                let response = await Utilise.apiCalling('POST', url, updateVendorRequest)
                dispatch({ type: VENDOR_UPDATE_LOADER, payload: false });
                if (response?.status) {
                    dispatch({ type: VENDOR_UPDATED_INFO, payload: response?.data });
                    navigation?.navigate("Vendor");
                    dispatch(getVendorList())
                    // Send dynamic link for reset password
                    // dispatch(sendResetPasswordLink(response?.data?._id))
                } else {
                    Alert.alert("WallPon", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: VENDOR_UPDATE_LOADER, payload: false });
                dispatch({ type: VENDOR_UPDATED_INFO, payload: null });
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};

// Send reset Paasword link
export const sendResetPasswordLink = (vendorId) => {
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                // Send dynamic link for reset password
                const link = await dynamicLinks().buildLink({
                    link: `https://resetPaswword/${vendorId}`,
                    // domainUriPrefix is created in your Firebase console
                    domainUriPrefix: 'https://wallpon.page.link',
                    ios: {
                        bundleId: "com.wallpon.agent.business"
                    },
                    android: {
                        packageName: "com.wallpon.agent.business"
                    }
                });
                if (link) {
                    console.log("dynamic resetlink=>", link)
                    let response = await Utilise.apiCalling('POST', `${Api.sendResetLink}/${vendorId}`, { "dynamicLink": link })
                    if (response?.status) {
                        console.log("sendDynamicLink success==>", response?.data)
                    } else {
                        console.log("sendDynamicLink failed==>", response?.data)
                    }
                }
            } catch (error) {
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};

// Get Vendor List
export const getVendorList = () => {
    return async (dispatch, getState) => {
        let loginCredentials = await getState().auth?.loginCredentials;
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: SET_VENDOR_LIST_LOADER, payload: true });
                let response = await Utilise.apiCalling('GET', `${Api.getVendorsList}/${loginCredentials?._id}`)
                dispatch({ type: SET_VENDOR_LIST_LOADER, payload: false });
                if (response?.status) {
                    dispatch({ type: SET_VENDOR_LIST, payload: response.data });
                } else {
                    console.log("getVendorList=API==>", String(response?.message))
                    // Alert.alert("WallPon", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: SET_VENDOR_LIST_LOADER, payload: false });
                dispatch({ type: SET_VENDOR_LIST, payload: null });
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};

// Get Single Vendor // it not in use
export const getSingleVendor = () => {
    return async (dispatch, getState) => {
        let loginCredentials = await getState().auth?.loginCredentials;
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: SET_SINGLE_VENDOR_LOADER, payload: true });
                let response = await Utilise.apiCalling('GET', `${Api.getVendor}/${loginCredentials?._id}`)
                dispatch({ type: SET_SINGLE_VENDOR_LOADER, payload: false });

                if (response?.status) {
                    dispatch({ type: SET_SINGLE_VENDOR_INFO, payload: response.data });
                } else {
                    Alert.alert("WallPon", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: SET_SINGLE_VENDOR_LOADER, payload: false });
                dispatch({ type: SET_SINGLE_VENDOR_INFO, payload: null });
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};

// Create New Store 
export const createOrUpdateStore = (storeRequest, navigation) => {
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        let storeAutofilInfo = await getState().vendor?.storeAutofilInfo;
        let loginCredentials = await getState().auth?.loginCredentials;
        if (isInternetConnected) {
            let url = Api.createOrUpdateStore;
            if (storeAutofilInfo && storeAutofilInfo !== null && storeAutofilInfo?._id) {
                url = `${Api.createOrUpdateStore}?storeId=${storeAutofilInfo?._id}`
            }
            try {
                dispatch({ type: SET_CREATE_STORE_LOADER, payload: true });
                let response = await Utilise.apiCalling('POST', url, storeRequest);
                dispatch({ type: SET_CREATE_STORE_LOADER, payload: false });
                // console.log("===createOrUpdateStore===", response?.data)
                if (response?.status) {
                    dispatch({ type: SET_CREATE_STORE_INFO, payload: response?.data });
                    dispatch({ type: SET_VERIFICAITON_STATUS, payload: response?.data?.verificationStatus })
                    dispatch({ type: SET_VERIFICAITON_STEPS, payload: 1 });
                    dispatch(setStoreAutofilInfo(response?.data, response?.data?._id, response?.data?.verificationStatus))
                   
                    navigation?.navigate("VerificationForm2");
                } else {
                    Alert.alert("WallPon", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: SET_CREATE_STORE_LOADER, payload: false });
                dispatch({ type: SET_CREATE_STORE_INFO, payload: null });
                
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};

// Set store autofil information
export const setStoreAutofilInfo = (storeAutofillInfo, storeId, verificationStatus) => {
    return async (dispatch, getState) => {
        try {
           
            let storeDetail = {
                "_id": storeId,
                "businessAddress": storeInfo?.businessAddress || "",
                "businessName": storeInfo?.businessName || "",
                "businessType": storeInfo?.businessType,
                "contactPerson": storeInfo?.contactPerson || storeInfo?.fullName,
                "countryCode": storeInfo?.countryCode,
                "email": storeInfo?.email,
                "isDeleted": false,
                "verificationStatus": verificationStatus,
                "location": storeInfo?.location,
                "phone": storeInfo?.phone,
            }
            dispatch({ type: SET_VERIFICAITON_STATUS, payload: verificationStatus })
            dispatch({ type: SET_STORE_AUTOFILL_INFO, payload: storeDetail });
            // dispatch({ type: SET_CREATE_STORE_INFO, payload: storeDetail });
        } catch (error) {
            dispatch({ type: SET_STORE_AUTOFILL_INFO, payload: null });
           
        }
    }
};

// upload Store Utility Bill
export const uploadStoreUtilityBill = (utilityBillRequest, navigation) => {
    return async (dispatch, getState) => {
        let storeInfo = await getState().vendor?.storeInfo;
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: SET_UTILITYBILL_LOADER, payload: true });
                let response = await Utilise.apiCalling('POST', `${Api.uploadUtilityBill}/${storeInfo?._id}`, utilityBillRequest)
                dispatch({ type: SET_UTILITYBILL_LOADER, payload: false });
                // console.log("===uploadStoreUtilityBill===", response?.data)
                if (response?.status) {
                    dispatch({ type: SET_UTILITYBILL_INFO, payload: response.data });
                    dispatch({ type: SET_VERIFICAITON_STEPS, payload: 2 })
                    dispatch({ type: SET_VERIFICAITON_STATUS, payload: response.data?.verificationStatus })
                    navigation?.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: "VerificationForm4" }],
                        })
                    );
                } else {
                    Alert.alert("WallPon", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: SET_UTILITYBILL_LOADER, payload: false });
                dispatch({ type: SET_UTILITYBILL_INFO, payload: null });
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};

// upload Store Facade Service
export const uploadStoreFacade = (fecadeRequest, navigation) => {
    return async (dispatch, getState) => {
        let storeInfo = await getState().vendor?.storeInfo;
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: SET_STOREIMAGE_LOADER, payload: true });
                let response = await Utilise.apiCalling('POST', `${Api.uploadStoreFacade}/${storeInfo?._id}`, fecadeRequest)
                dispatch({ type: SET_STOREIMAGE_LOADER, payload: false });
                if (response?.status) {
                    dispatch({ type: SET_VERIFICAITON_STATUS, payload: response?.data?.verificationStatus })
                    dispatch({ type: SET_STOREIMAGE_INFO, payload: response?.data });
                    dispatch({ type: SET_PLAN_SELECTED_FLAG, payload: true });
                    dispatch({ type: SET_VERIFICAITON_STEPS, payload: 3 })
                    navigation?.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: "CouponsStack" }],
                        })
                    );
                } else {
                    Alert.alert("WallPon", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: SET_STOREIMAGE_LOADER, payload: false });
                dispatch({ type: SET_STOREIMAGE_INFO, payload: null });
                // dispatch({ type: SET_IS_STORE, payload: false });
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};

// Accept vendor 
export const acceptVendor = (acceptVendorRequest, navigation) => {
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: ACCEPT_VENDOR_LOADER, payload: true });
                let response = await Utilise.apiCalling('POST', Api.acceptVendor, acceptVendorRequest)
                dispatch({ type: ACCEPT_VENDOR_LOADER, payload: false });
                if (response?.status) {
                    dispatch({ type: ACCEPT_VENDOR_INFO, payload: response.data });
                    dispatch({ type: SET_VENDOR_NOTIFICATION_INFO, payload: null });
                    dispatch(getVendorList())
                    navigation?.navigate("Vendor")

                } else {
                    Alert.alert("WallPon", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: ACCEPT_VENDOR_LOADER, payload: false });
                dispatch({ type: ACCEPT_VENDOR_INFO, payload: null });
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};

// Search Category (Business Type)
export const searchCategory = (searchRequest) => {
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: SET_SEARCH_CATEGORY_LOADER, payload: true });
                let response = await search(`${Api.businessType}?search=${searchRequest}`)
                dispatch({ type: SET_SEARCH_CATEGORY_LOADER, payload: false });
                if (response?.status) {
                    dispatch({ type: SET_SEARCH_CATEGORY_RESULT, payload: response.data });
                } else {
                    // Alert.alert("WallPon", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: SET_SEARCH_CATEGORY_LOADER, payload: false });
                dispatch({ type: SET_SEARCH_CATEGORY_RESULT, payload: null });
                // Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};

// Set vendor information from notification
export const setVendorInfo = (vendorInfo) => {
    return async (dispatch, getState) => {
        try {
           
                dispatch({ type: SET_VENDOR_NOTIFICATION_INFO, payload: null });
           
        } catch (error) {
            dispatch({ type: SET_VENDOR_NOTIFICATION_INFO, payload: null });
            
        }
    }
};

// Set vendor ID from reset password link
export const setVendorIdResetPassword = (resetLink) => {
    return async (dispatch, getState) => {
        try {
            console.log("resetLink===>", resetLink)
            let vendorId = String(resetLink).split('/').pop()
            dispatch({ type: SET_USER_ID_RESET_PASSWORD, payload: vendorId });
            dispatch({ type: SET_DEFAULT_AUTH_SCREEN, payload: "ResetPassword" });
                } catch (error) {
            dispatch({ type: SET_USER_ID_RESET_PASSWORD, payload: null });
            dispatch({ type: SET_DEFAULT_AUTH_SCREEN, payload: "Login" });
           }
    }
};

// Get track earning data
export const getTrackEarningData = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: SET_TRACK_EARNING_LOADER, payload: true });
            let response = await Utilise.apiCalling('POST', Api.getCommissionsListOfSalesman)
            console.log("response==getTrackEarningData==>", JSON.stringify(response?.data));
            dispatch({ type: SET_TRACK_EARNING_LOADER, payload: false });
            if (response?.status) {
                dispatch({ type: SET_TRACK_EARNING_DATA, payload: response?.data });
            } else {
                // Alert.alert("WallPon", String(response?.message))
            }
        } catch (error) {
            dispatch({ type: SET_TRACK_EARNING_LOADER, payload: null });
            dispatch({ type: SET_TRACK_EARNING_DATA, payload: [] });
        }
    }
};