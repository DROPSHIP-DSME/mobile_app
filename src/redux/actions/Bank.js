import {
    ADD_NEW_BANK_ACCOUNT_LOADER,
    ADDED_BANK_INFO,
    BANK_ACCOUNT_LIST_LOADER,
    BANK_ACCOUNT_LIST,
    UPDATED_BANK_ACCOUNT_INFO,
    UPDATE_BANK_ACCOUNT_LOADER,
    GET_BANKS_LOADER,
    GET_BANKS
} from './ActionTypes';
import { Alert } from 'react-native';
import { Api, Utilise } from '../../common';


// Add New Bank Account 
export const addNewBankAccount = (accountRequest, navigation) => {
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: ADD_NEW_BANK_ACCOUNT_LOADER, payload: true });
                let response = await Utilise.apiCalling('POST', Api.addUserAccount, accountRequest);
                dispatch({ type: ADD_NEW_BANK_ACCOUNT_LOADER, payload: false });
                if (response?.status) {
                    dispatch({ type: ADDED_BANK_INFO, payload: response.data });
                    dispatch(getBankAccountList());
                    navigation?.navigate("ManageBank")
                } else {
                    Alert.alert("WallPon", String(response?.message))
                }

            } catch (error) {
                dispatch({ type: ADD_NEW_BANK_ACCOUNT_LOADER, payload: false });
                dispatch({ type: ADDED_BANK_INFO, payload: null });
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};

// Updates Bank Account details
export const updateBankAccount = (accountRequest, navigation) => {
    return async (dispatch, getState) => {
        let addedBankInfo = await getState().bank?.addedBankInfo;
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: UPDATE_BANK_ACCOUNT_LOADER, payload: true });
                let response = await Utilise.apiCalling('POST', `${Api.addUserAccount}/${addedBankInfo?.data?._id}`, accountRequest);
                dispatch({ type: UPDATE_BANK_ACCOUNT_LOADER, payload: false });
                if (response?.status) {
                    dispatch({ type: UPDATED_BANK_ACCOUNT_INFO, payload: response.data });
                    navigation?.navigate("ManageBank")
                } else {
                    Alert.alert("WallPon", String(response?.message))
                }

            } catch (error) {
                dispatch({ type: UPDATE_BANK_ACCOUNT_LOADER, payload: false });
                dispatch({ type: UPDATED_BANK_ACCOUNT_INFO, payload: null });
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};

// Get Bank Account list 
export const getBankAccountList = () => {
    return async (dispatch, getState) => {
        let loginCredentials = await getState().auth?.loginCredentials;
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: BANK_ACCOUNT_LIST_LOADER, payload: true });
                let response = await Utilise.apiCalling('GET', `${Api.getAccountList}/${loginCredentials?._id}`)
                dispatch({ type: BANK_ACCOUNT_LIST_LOADER, payload: false });
                if (response?.status) {
                    dispatch({ type: BANK_ACCOUNT_LIST, payload: response.data });
                } else {
                    Alert.alert("WallPon", String(response?.message))
                }

            } catch (error) {
                dispatch({ type: BANK_ACCOUNT_LIST_LOADER, payload: false });
                dispatch({ type: BANK_ACCOUNT_LIST, payload: null });
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};

// Get Banks list 
export const getBankList = () => {
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: GET_BANKS_LOADER, payload: true });
                let response = await Utilise.apiCalling('GET', Api.getBanks)
                dispatch({ type: GET_BANKS_LOADER, payload: false });
                if (response?.status) {
                    dispatch({ type: GET_BANKS, payload: response.data });
                } else {
                    Alert.alert("WallPon", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_BANKS_LOADER, payload: false });
                dispatch({ type: GET_BANKS, payload: [] });
                Alert.alert("WallPon", String(error?.message))
            }
        };
    }
};