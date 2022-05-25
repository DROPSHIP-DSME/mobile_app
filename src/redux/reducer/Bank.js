import {
    ADD_NEW_BANK_ACCOUNT_LOADER,
    ADDED_BANK_INFO,
    BANK_ACCOUNT_LIST_LOADER,
    BANK_ACCOUNT_LIST,
    UPDATED_BANK_ACCOUNT_INFO,
    UPDATE_BANK_ACCOUNT_LOADER,
    GET_BANKS_LOADER,
    GET_BANKS
} from '../actions/ActionTypes';

// Redux states
const initialState = {
    addBankAccountLoader: false,
    addedBankInfo: null,
    bankAccountList: [],
    bankAccountListLoader: false,
    updateBankLoader: false,
    bankListLoader:false,
    banklist:[]
};

const Bank = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_BANK_ACCOUNT_LOADER:
            return {
                ...state,
                addBankAccountLoader: action.payload,
            };
        case ADDED_BANK_INFO:
            return {
                ...state,
                addedBankInfo: action.payload,
            };
        case BANK_ACCOUNT_LIST_LOADER:
            return {
                ...state,
                bankAccountListLoader: action.payload,
            };
        case BANK_ACCOUNT_LIST:
            return {
                ...state,
                bankAccountList: action.payload,
            };
        case UPDATE_BANK_ACCOUNT_LOADER:
            return {
                ...state,
                updateBankLoader: action.payload,
            };
        case UPDATED_BANK_ACCOUNT_INFO:
            return {
                ...state,
                addedBankInfo: action.payload,
            };
        case GET_BANKS_LOADER:
            return {
                ...state,
                bankListLoader: action.payload,
            };
        case GET_BANKS:
            return {
                ...state,
                banklist: action.payload,
            };
        default:
            return state;
    }
};

export default Bank;
