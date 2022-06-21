import {
  SIGNUP_CREDENTIALS,
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
  SET_IS_STORE,
  VENDOR_REQUEST_LOADER,
  VENDOR_REQUESTED_INFO,
  SET_DEFAULT_AUTH_SCREEN,
  SET_USER_ID_RESET_PASSWORD,
  SET_VERIFICAITON_STATUS,
  SET_CREATE_STORE_INFO,
  SET_VERIFICAITON_STEPS,
  CART_LIST_DATA,
  CART_LIST_DATA1,
  GET_ALL_SHOP,
  SET_BRAND_LOADER,
  SET_PRODUCT_LOADER,
  SET_PRODUCT2_LOADER,
  SET_PRODUCT3_LOADER,
  SET_CHECKOUT_LOADER,
  SET_CATEGORY_LOADER,
  GET_ALL_CATEGORY,
  GET_ALL_PRODUCT,
  GET_ALL_WatchPRODUCT,
  GET_ALL_PRODUCTDETAILS,
  SET_ADDCART_LOADER,
  SET_CATEGORYPRODUCT_LOADER,
  INCREMENT_CART_LIST,
  DELETE_CART_LIST,
  DELETE_ADDRESS_LIST,
  DELETE_CARD_LIST,
  REMOVE_ITEM_LIST,
  SET_SUPPORT_LOADER,
  SET_COMMENT_LOADER,
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
  REMOVE_CATEGORY_LIST,
  SET_BRAND_NAME,
  GET_LIVEEVENT_LIST,
  GET_LIVECOMMENT_LIST,
  LOGIN_USER_ID,
  LOGIN_USER_STATUS,
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
  GET_SHOPSELL_COUNT,
  GET_SHOP_PRODUCT,
  NEW_PROFILE,
  GETCALLTOKEN,
  POST_EDIT_USER,
  DELETE_USER,
  SEARCH_LIST_ITMES,
  ALLSEARCH_LIST_DATA,
  LIVESTREAM_RECAP,
  SET_RATING_REVIEW,
  GET_ALL_RATING,
} from '../actions/ActionTypes';
import { Alert } from 'react-native';
import { Api, Utilise } from '../../common';
import { setStoreAutofilInfo } from './Vendor';
import NetInfo from "@react-native-community/netinfo";
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage'; 

//Set Network Connection
export const setNetworkConnection = (networkState) => {
  return async (dispatch, getState) => {
    dispatch({ type: SET_NETWORK_STATE, payload: networkState });
  }
}

//logout
export const logoutreducerfun = (dummyuserId) => {
  return async (dispatch, getState) => {
    dispatch({ type: LOGIN_USER_ID, payload: dummyuserId });
    dispatch({ type: LOGIN_USER_STATUS, payload: 1 });
  }
}
// LOGIN      

export const login = (loginCredentials,navigation,type, usertype) => {
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: SET_LOGIN_LOADER, payload: true });
        dispatch({ type: LOGIN_USER_ID, payload: ''});

        let response = await Utilise.apiCalling('POST', Api.login, loginCredentials);
        dispatch({ type: SET_LOGIN_LOADER, payload: false });
        if (response?.status) {
          
          dispatch({ type: SET_LOGIN_CREDENTIAL, payload: response?.data });
          global.authToken = response?.data?.token || null;
          await AsyncStorage.setItem('UserId',response.data._id);
          await AsyncStorage.setItem('userLogin',"1");
         // Alert.alert("User LoggedIn successfully")
          dispatch({ type: LOGIN_USER_ID, payload: response.data._id });
          dispatch({ type: LOGIN_USER_STATUS, payload: 1 });
          if(usertype == 'shop'){
           setTimeout(function(){ navigation.navigate("watchlist",{ userId:response.data._id }); },1);
          } else{
          setTimeout(function(){ navigation.navigate("Overview",{ userId:response.data._id }); },1);
        } } else {
           
          Alert.alert("DROPSHIP", String(response?.message))
        }
      } catch (error) {
        dispatch({ type: SET_LOGIN_LOADER, payload: false });
        dispatch(changeLoginCredentials(null));
        //Alert.alert("DROPSHIP", String(error?.message))
      }
    }
  };
};
//shopsignupphone
export const shopsignupphone = (loginCredentials,navigation,type, usertype) => {
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: SET_PHONESIGNUP_LOADER, payload: true });
        dispatch({ type: LOGIN_USER_ID, payload: ''});

        let response = await Utilise.apiCalling('POST', Api.shopsignupphone, loginCredentials);
        dispatch({ type: SET_PHONESIGNUP_LOADER, payload: false });
        if (response?.status) {
          
          dispatch({ type: SET_LOGIN_CREDENTIAL, payload: response?.data });
          global.authToken = response?.data?.token || null;
          await AsyncStorage.setItem('UserId',response.data._id);
          await AsyncStorage.setItem('userLogin',"1");
         // Alert.alert("User LoggedIn successfully")
          dispatch({ type: LOGIN_USER_ID, payload: response.data._id });
          dispatch({ type: LOGIN_USER_STATUS, payload: 1 });
          if(usertype == 'shop'){
           setTimeout(function(){ navigation.navigate("watchlist",{ userId:response.data._id }); },1);
          } else{
          setTimeout(function(){ navigation.navigate("Overview",{ userId:response.data._id }); },1);
        } } else {
           
          Alert.alert("DROPSHIP", String(response?.message))
        }
      } catch (error) {
        dispatch({ type: SET_PHONESIGNUP_LOADER, payload: false });
        dispatch(changeLoginCredentials(null));
        //Alert.alert("DROPSHIP", String(error?.message))
      }
    }
  };
};

export const shoplogin = (loginCredentials,navigation,type, usertype) => {
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: SET_LOGIN_LOADER, payload: true });
       // dispatch({ type: LOGIN_USER_ID, payload: ''});

        let response = await Utilise.apiCalling('POST', Api.login, loginCredentials);
        dispatch({ type: SET_LOGIN_LOADER, payload: false });
        if (response?.status) {
          
          dispatch({ type: SET_LOGIN_CREDENTIAL, payload: response?.data });
          global.authToken = response?.data?.token || null;
          await AsyncStorage.setItem('UserId',response.data._id);
          await AsyncStorage.setItem('userLogin',"1");
          //alert(response.data._id)
          dispatch({ type: LOGIN_USER_ID, payload: response.data._id });
          dispatch({ type: LOGIN_USER_STATUS, payload: 1 });
          setTimeout(function(){ navigation.navigate("watchlist",{ userId:response.data._id }); },1);
        } else {
           
          //Alert.alert("DROPSHIP", String(response?.message))
        }
      } catch (error) {
        dispatch({ type: SET_LOGIN_LOADER, payload: false });
        dispatch(changeLoginCredentials(null));
        //Alert.alert("DROPSHIP", String(error?.message))
      }
    }
  };
};

//createcategory

 export const createcategory = (signupRequest, navigation, role,islogin) => {
    
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.createcategory, signupRequest);
        if (response?.status) {
          if (navigation) {
             if(islogin=="1"){
               navigation.navigate("Category")
             }else {
              navigation.navigate("AddProduct",{ categoryId:response.data._id, categoryName:response.data.categoryName  })
            }
              //Alert.alert("DROPSHIP", "Category added successfully")
          
          }
        }
      } catch (error) {
        //Alert.alert("DROPSHIP", String(error?.message))
      }
    }
  }
};

//createcategoryproduct
  export const createcategoryproduct = (signupRequest, navigation, role) => {
    
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        //dispatch({ type: GET_ALL_PRODUCT, payload: [] });
        let response = await Utilise.apiCalling('POST', Api.createcategoryproduct, signupRequest);
        if (response?.status) {
          
          dispatch({ type: GET_ALL_PRODUCT, payload: response.data });
        }
      } catch (error) {
       // Alert.alert("DROPSHIP", String(error?.message))
      }
    }
  }
};

//postrating
export const postrating = (signupRequest, navigation, role) => {
    console.log("lavleshpostresponserating=====>",signupRequest)
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        //dispatch({ type: SET_RATING_REVIEW, payload: [] });
        let response = await Utilise.apiCalling('POST', Api.postratingnew, signupRequest);
        console.log('lavleshpostresponserating=====>',response)
        if (response?.status) {
          
          dispatch({ type: SET_RATING_REVIEW, payload: response.data });

        }else{
          //Alert.alert("DROPSHIP", "Category added successfully")
        }
      } catch (error) {
         console.log("lavleshpostresponserating=====>",error)
       // Alert.alert("DROPSHIP", String(error?.message))
      }
    }
  }
};

//getpostrating
export const getpostrating = (productId) => {
  //alert(productId)
    let request = {
      productId:productId,
    }
    console.log('showserating=====>',request)
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected; 
        if (isInternetConnected) {
            try {
                //dispatch({ type: GET_ALL_RATING, payload: [] });
                let response = await Utilise.apiCalling('POST', `${Api.getpostratingnew}`,  request);
                console.log('newshowserating=====>',response)
                if (response?.status) {
                    dispatch({ type: GET_ALL_RATING, payload: response.data});
                } else {
                    //Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
               console.log('showserating=====>',error)
                dispatch({ type: GET_ALL_RATING, payload: [] });
                //Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};


//getchanneltoken
export const getchanneltoken = (signupRequest, navigation, role) => {
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        //dispatch({ type: GET_ALL_PRODUCT, payload: [] });
        let response = await Utilise.apiCalling('POST', Api.getchanneltoken, signupRequest);
        if (response?.status) {
          dispatch({ type: GETCALLTOKEN, payload: response.data });
        }
      } catch (error) { }
    }
  }
};

//addcart
export const cartadd = (signupRequest, navigation, role) => {
    
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.cartadd, signupRequest);

        if (response?.status) {
        }
      } catch (error) {
        
      }
    }
  }
};

//updatepassword
 export const updatepassword = (signupRequest, navigation, role) => {
    
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        
        let response = await Utilise.apiCalling('POST', Api.updatepassword, signupRequest);
      } catch (error) {
        
      }
    }
  }
};

//updateprofile
export const updateprofile = (signupRequest, navigation, role) => {
    
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.updateprofile, signupRequest);
        if (response?.status) {
          dispatch({ type: SIGNUP_CREDENTIALS, payload: response.data });
        } 
      } catch (error) {
        //Alert.alert("DROPSHIP", String(error?.message)
      }
    }
  }
};

//newprofile
export const newprofile = (request, navigation, role) => {
   
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try { 
        let response = await Utilise.apiCalling('POST', Api.newprofile, request);
       
        if (response?.status) {

          dispatch({ type: NEW_PROFILE, payload: response.data });
        } 
      } catch (error) {
        //Alert.alert("DROPSHIP", String(error?.message)
      }
    }
  }
};

//schudelEvent 

export const schuleEvent = (signupRequest, navigation, role) => {
    
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.schuleEvent, signupRequest);
        if (response?.status) {
          if (navigation) {
             alert('Event scheduled successfully')
             navigation.navigate("Overview")
          }
        }
      } catch (error) {
      }
    }
  }
};

export const schuleEventstart = (signupRequest, navigation, role) => {
    
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.startEvent, signupRequest);
        if (response?.status) {
          if (navigation) {
            // alert('Event scheduled successfully')
             //navigation.navigate("Overview")
          }
        }
      } catch (error) {
      }
    }
  }
};

export const updateleftcount = (signupRequest, navigation, role) => {
    
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.updateleftcount, signupRequest);
        if (response?.status) {
          if (navigation) {
            // alert('Event scheduled successfully')
             //navigation.navigate("Overview")
          }
        }
      } catch (error) {
      }
    }
  }
};

export const updatewatchlist = (signupRequest, navigation, role) => {   
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.updatewatchlist, signupRequest);
        if (response?.status) { }
      } catch (error) {
      }
    }
  }
};

export const updatediscount = (signupRequest, navigation, role) => {
    
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.updatediscount, signupRequest);
        if (response?.status) {
          if (navigation) {
            // alert('Event scheduled successfully')
             //navigation.navigate("Overview")
          }
        }
      } catch (error) {
      }
    }
  }
};

//createproduct
export const createproduct = (signupRequest, navigation, role,islogin) => {
    
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.createproduct, signupRequest);
        //Alert.alert("DROPSHIP", "Product added successfully")
        if (response?.status) {
          if (navigation) {
              //if(islogin=="1"){
                 //alert('Event scheduled successfully')
                navigation.navigate("Dashproduct",{productreload:1})
              //}else {
                //navigation.navigate("CreateAccount")
              //}
          }
        }
      } catch (error) {
      }
    }
  }
};

//createproduct
export const uploadpic = (signupRequest, navigation, role,islogin) => {
    
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.uploadproductpic, signupRequest);
        if (response?.status) {
          
        }
      } catch (error) { }
    }
  }
};

export const addproducttoevent = (eventId,product_id,userId) => {
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
          let sendparam = {
            eventId:eventId,
            product_id:product_id,
            userId:userId,
          }
          
          let newresponse = await Utilise.apiCalling('POST', Api.addItemInEvent, sendparam);
          if (newresponse?.status) {  
              dispatch({ type: LIVE_LIST_DATA, payload: newresponse.data });
          }
      } catch (error) { }
    }
  }
};


//createproduct2
export const createproduct2 = (signupRequest, navigation, role,eventId,todopage) => {
    
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.createproduct2, signupRequest);
        if (response?.status) {
          //
          
          if(eventId!=""  && eventId!=undefined){
            let sendparam = {
              eventId:eventId,
              product_id:response.data._id,
              userId:response.data.userId,
            }
            
            // let newresponse = await Utilise.apiCalling('POST', Api.addItemInEvent, sendparam);
            // if (newresponse?.status) {
                
            //     dispatch({ type: LIVE_LIST_DATA, payload: newresponse.data });
            // } 
          }

            let setrequest = {
              userId:response.data.userId,
            }
           let newghresponse = await Utilise.apiCalling('POST', `${Api.getlistproduct}`,  setrequest);
            
            if (newghresponse?.status) {
                dispatch({ type: GET_ALL_PRODUCT, payload: newghresponse.data });
            }

          if (navigation) {
             if(todopage!="" && todopage!=undefined){
               navigation.navigate(todopage)
             }else {
              navigation.navigate("StartRecording")
            }
             // Alert.alert("DROPSHIP", "Product added successfully")
          }
        }
      } catch (error) {
      }
    }
  }
};
//savepaymentaddress
export const savepaymentaddress = (request, navigation, role) => {
    
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        
        let response = await Utilise.apiCalling('POST', Api.savepaymentaddress, request);
        console.log("responseatm-",response)
        navigation.navigate("Account")
        
      } catch (error) {
        
      }
    }
  }
};

// saveaddress
export const saveaddress = (request, navigation, role) => {
   
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.saveaddress, request);
        Alert.alert("DROPSHIP", "Shipping information added Successfully")
      } catch (error) {
       
      }
    }
  }
};
//chekout
  
export const chekout = (signupRequest, navigation, role) => {
    
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        
        let response = await Utilise.apiCalling('POST', Api.chekout, signupRequest);
      } catch (error) {
       
      }
    }
  }
};



//createproduct3
export const createproduct3 = (signupRequest, navigation, role) => {
    
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.createproduct3, signupRequest);
        if (response?.status) {
          if (navigation) {
              navigation.navigate("NameStore")
          }
        }
      } catch (error) {
      }
    }
  }
};
//postcomment
 export const postcomment = (signupRequest, navigation, role) => {
    
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.postcomment, signupRequest);
      } catch (error) {
      }
    }
  }
};


//support
 
export const support = (signupRequest, navigation, role) => {
    
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.support, signupRequest);
        if (response?.status) {
           dispatch({ type: GET_SUPPORT_LIST1, payload: response.data });
        }
      } catch (error) {
      }
    }
  }
};

//createbrand
export const createbrand = (signupRequest, navigation, role) => {
    
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.createbrand, signupRequest);
        dispatch({ type: SET_BRAND_LOADER, payload: false }); 
        dispatch({ type: VENDOR_REQUEST_LOADER, payload: false });
        if (response?.status) {
          if (navigation) { 
              navigation.navigate("Accountproduct",{ brandId:response.data._id  })
            //  Alert.alert("DROPSHIP", "Brand added successfully")
          
          }
        }
      } catch (error) {
      }
    }
  }
};


// shop 

export const createshop = (signupRequest, navigation, role) => {
  
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', Api.createshop, signupRequest);
        if (response?.status) {
          dispatch({ type: GET_ALL_SHOP, payload: response.data });
          if (navigation) {
              navigation.navigate("AddStore");
          }
        }
      } catch (error) {
       // Alert.alert("DROPSHIP", String(error?.message))
      }
    }
  }
};


// SIGNUP 
export const signup = (signupRequest, navigation, role,type) => {
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try { 
        dispatch({ type: SET_REGISTRATION_LOADER, payload: true });
        dispatch({ type: LOGIN_USER_ID, payload: '' });
        let response = await Utilise.apiCalling('POST', Api.signup, signupRequest);
        dispatch({ type: SET_REGISTRATION_LOADER, payload: false });
        dispatch({ type: VENDOR_REQUEST_LOADER, payload: false });
        if (response?.status) {
          
          if (role === "vendor") {
            dispatch({ type: VENDOR_REQUESTED_INFO, payload: response.data });
          } else {
            dispatch({ type: SIGNUP_CREDENTIALS, payload: response.data });
          }
          if (navigation) {
            dispatch({ type: LOGIN_USER_ID, payload: response.data._id });
            dispatch({ type: LOGIN_USER_STATUS, payload: 1 });

            if (type == 'shop' ) {
              navigation.navigate("watchlist",{ userId:response.data._id });
            }else {
              navigation.navigate("Overview",{ userId:response.data._id });
            }
             // Alert.alert("DROPSHIP", "User Registered successfully")  

          }
        } else {
          if(response?.message!="Email already exists"){
          //  Alert.alert("DROPSHIP", String(response?.message))
          }
        }
      } catch (error) {
       // Alert.alert("DROPSHIP", String(error?.message))
        dispatch({ type: SET_REGISTRATION_LOADER, payload: false });
        dispatch({ type: VENDOR_REQUEST_LOADER, payload: false });
      }
    }
  }
};

// SIGNUP 
export const shopsignup = (signupRequest, navigation, role,type) => {
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try { 
        dispatch({ type: SET_REGISTRATION_LOADER, payload: true });
        dispatch({ type: LOGIN_USER_ID, payload: '' });
        let response = await Utilise.apiCalling('POST', Api.signup, signupRequest);
        dispatch({ type: SET_REGISTRATION_LOADER, payload: false });
        dispatch({ type: VENDOR_REQUEST_LOADER, payload: false });
        if (response?.status) {
          
          if (role === "vendor") {
            dispatch({ type: VENDOR_REQUESTED_INFO, payload: response.data });
          } else {
            dispatch({ type: SIGNUP_CREDENTIALS, payload: response.data });
          }
          if (navigation) {
            dispatch({ type: LOGIN_USER_ID, payload: response.data._id });
            dispatch({ type: LOGIN_USER_STATUS, payload: 1 });
            navigation.navigate("Verification",{ userId:response.data._id });
          }
        } else {
         // if(response?.message!="Email already exists"){
           Alert.alert("DROPSHIP", String(response?.message))
          //}
        }
      } catch (error) {
       // Alert.alert("DROPSHIP", String(error?.message))
        dispatch({ type: SET_REGISTRATION_LOADER, payload: false });
        dispatch({ type: VENDOR_REQUEST_LOADER, payload: false });
      }
    }
  }
};

// VERFY OTP 
export const verifyOtp = (otpCredentials, navigation, isForgetPassword) => {
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: SET_OTP_LOADER, payload: true });
        let response = await Utilise.apiCalling('POST', Api.verifyOTP, otpCredentials);
        dispatch({ type: SET_OTP_LOADER, payload: false });
        if (response.status) {
          if (navigation) {
            if (isForgetPassword) {
              navigation.dispatch(
                StackActions.replace('ResetPassword')
              );
            } else {
              navigation.dispatch(
                StackActions.replace('Login')
              );
            }
          }
          dispatch({ type: OTP_VERIFIED, payload: response || false });
        } else {
        //  Alert.alert("DROPSHIP", String(response?.message))
        }
      } catch (error) {
       // Alert.alert("DROPSHIP", String(error?.message))
        dispatch({ type: SET_OTP_LOADER, payload: false });
        dispatch({ type: OTP_VERIFIED, payload: false });
      }
    };
  }
};

// RESEND OTP 
export const resendOtp = () => {
  return async (dispatch, getState) => {
    let signUpCredential = await getState().auth?.signupCredentials;
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        let response = await Utilise.apiCalling('POST', `${Api.resendOTP}?userId=${signUpCredential?._id}`)
        if (response.status) {
          dispatch({ type: OTP_RESEND_SUCCESS, payload: response || false });
        }
      } catch (error) {
       // Alert.alert("DROPSHIP", String(error?.message))
        dispatch({ type: OTP_RESEND_SUCCESS, payload: false });
      }
    };
  }
};

// FORGET PASSWORD
export const forgetPassword = (request, navigation) => {
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: SET_FORGET_PASSWORD_LOADER, payload: true });
        let response = await Utilise.apiCalling('POST', `${Api.forgotPassword}`, request);
        dispatch({ type: SET_FORGET_PASSWORD_LOADER, payload: false });
        if (response.status) {
          dispatch({ type: SET_FORGET_PASSWORD_SUCCESS, payload: response || false });
          dispatch({ type: SIGNUP_CREDENTIALS, payload: { _id: response?.data?.userId } });
          dispatch({ type: SET_USER_ID_RESET_PASSWORD, payload: response?.data?.userId });
          if (navigation) {
            navigation.dispatch(
              StackActions.replace('OTPVerification', { isForgetPassword: true })
            );
          }
        } else {
         // Alert.alert("DROPSHIP", String(response?.message))
        }
      } catch (error) {
       // Alert.alert("DROPSHIP", String(error?.message))
        dispatch({ type: SET_FORGET_PASSWORD_SUCCESS, payload: false });
        dispatch({ type: SET_FORGET_PASSWORD_LOADER, payload: false });
      }
    };
  }
};

// RESET PASSWORD
export const resetPassword = (request, userId, navigation) => {
  return async (dispatch, getState) => {
    let isInternetConnected = await getState().auth?.isInternetConnected;
    if (isInternetConnected) {
      try {
        dispatch({ type: SET_RESET_PASSWORD_LOADER, payload: true });
        let response = await Utilise.apiCalling('POST', `${Api.resetPassword}?userId=${userId}`, request)
        dispatch({ type: SET_RESET_PASSWORD_LOADER, payload: false });
        if (response.status) {
          dispatch({ type: SET_RESET_PASSWORD_SUCCESS, payload: response || false });
          dispatch({ type: SET_DEFAULT_AUTH_SCREEN, payload: "Login" });
          dispatch(logout())
          NetInfo.fetch().then(state => {
            dispatch(setNetworkConnection(state.isConnected));
          });
          dispatch({ type: SET_DEFAULT_AUTH_SCREEN, payload: "Login" })
        } else {
         // Alert.alert("DROPSHIP", String(response?.message))
        }
      } catch (error) {
       // Alert.alert("DROPSHIP", String(error?.message))
        dispatch({ type: SET_RESET_PASSWORD_SUCCESS, payload: false });
        dispatch({ type: SET_RESET_PASSWORD_LOADER, payload: false });
      }
    };
  }
};

// CHANGE LOGIN CRENDENTIAL 
export const changeLoginCredentials = (loginCredentials) => {
  
  return async (dispatch, getState) => {
    dispatch({ type: SET_LOGIN_CREDENTIAL, payload: loginCredentials });
    global.authToken = loginCredentials?.token || null;
  };
};


//liveeventdetail
  export const liveeventdetail = (userId) => {
    let request = {
      userId:userId 
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                let response = await Utilise.apiCalling('POST', `${Api.liveeventdetail}`,  request);
                console.log('liveeventdetailstatus',response.data);
                if (response?.status) {
                  // Alert.alert("DROPSHIP", 'Livedetail successfully')
                    dispatch({ type: LIVE_LIST_DATA, payload: response.data });
                } else {
                  //  Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: LIVE_LIST_DATA, payload: [] });
              //  Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};
//getalleventlist
export const getalleventlist = (userId) => {

   let request = {
      userId:userId
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                let response = await Utilise.apiCalling('POST', `${Api.getalleventlist}`,  request);
                
                if (response?.status) {
                   //Alert.alert("DROPSHIP", 'alleventlist successfully')
                    dispatch({ type: ALLEVENT_LIST_DATA, payload: response.data });
                } else {
                  //  Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                //dispatch({ type: ALLEVENT_LIST_DATA, payload: [] });
               // Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};
//getlivestreamrecap
export const getlivestreamrecap = (channelId) => {
//alert(channelId)
  let request = {
    "channelId": channelId
   }
   return async (dispatch, getState) => {
       let isInternetConnected = await getState().auth?.isInternetConnected;
       if (isInternetConnected) {
           try {
               let response = await Utilise.apiCalling('POST', `${Api.getlivestreamrecap}`,  request);
               console.log("responselivestream------>>>>",response)
               if (response?.status) {
                  //Alert.alert("DROPSHIP", 'livestreamlist successfully')
                   dispatch({ type: LIVESTREAM_RECAP, payload: response.data });
               } else {
                 //  Alert.alert("DROPSHIP", String(response?.message))
               }
           } catch (error) {
               dispatch({ type: LIVESTREAM_RECAP, payload: [] });
              // Alert.alert("DROPSHIP", String(error?.message))
           }
       };
   }
};

//getalleventlist1
export const getalleventlist1 = (userId) => {
      let request = {
        userId:userId
      }
      return async (dispatch, getState) => {
          dispatch({ type: ALLEVENT_LIST_DATA, payload: [] });
          if(userId!=1){
              dispatch({ type: ALLEVENT_LIST_DATA, payload: userId });
           }else {
              let isInternetConnected = await getState().auth?.isInternetConnected;
              if (isInternetConnected) {
                  try {
                      let response = await Utilise.apiCalling('POST', `${Api.getalleventlist}`,  request);
                      
                      if (response?.status) {
                         //Alert.alert("DROPSHIP", 'alleventlist successfully')
                          dispatch({ type: ALLEVENT_LIST_DATA, payload: response.data });
                      } else {
                        //  Alert.alert("DROPSHIP", String(response?.message))
                      }
                  } catch (error) {
                      //dispatch({ type: ALLEVENT_LIST_DATA, payload: [] });
                     // Alert.alert("DROPSHIP", String(error?.message))
                  }
              };
          }
    }
};

//getsearchlist
export const getsearchlist = (userId) => {
      let request = {
        userId:userId
      }
                        console.log('getsearchlistresponse',request);

      return async (dispatch, getState) => {
          dispatch({ type: ALLSEARCH_LIST_DATA, payload: [] });
          let isInternetConnected = await getState().auth?.isInternetConnected;
          if (isInternetConnected) {
              try {
                  let response = await Utilise.apiCalling('POST', `${Api.searchlistdata}`,  request);
                  console.log('getsearchlistresponse',response);
                  if (response?.status) {
                      dispatch({ type: ALLSEARCH_LIST_DATA, payload: response.data });
                  }
              } catch (error) { }
          };
    }
};

//Brandslist data

export const Brandslist = (userId) => {
  
   let request = {
      userId:userId
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                let response = await Utilise.apiCalling('POST', `${Api.Brandslist}`,  request);
                
                if (response?.status) {
                   //Alert.alert("DROPSHIP", 'Brandslist successfully')
                    dispatch({ type: BRANDS_LIST_DATA, payload: response.data });
                } else {
                   // Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: BRANDS_LIST_DATA, payload: [] });
               // Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};

export const searchbrand = (userId,search) => {
  
   let request = {
      userId:userId,
      search:search
    }
    
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                 dispatch({ type: BRANDS_LIST_DATA, payload: [] });
                let response = await Utilise.apiCalling('POST', `${Api.SearchBrandslist}`,  request);
               
                if (response?.status) {
                   //Alert.alert("DROPSHIP", 'Brandslist successfully')
                    dispatch({ type: BRANDS_LIST_DATA, payload: response.data });
                } else {
                   // Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: BRANDS_LIST_DATA, payload: [] });
               // Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};
//searchitmes
export const searchitems = (search,userId) => {
   let request = {
      search:search,
      userId:userId
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                 dispatch({ type: SEARCH_LIST_ITMES, payload: [] });
                let response = await Utilise.apiCalling('POST', `${Api.searchlistitmes}`,  request);
               
                if (response?.status) {
                   //Alert.alert("DROPSHIP", 'Brandslist successfully')
                    dispatch({ type: SEARCH_LIST_ITMES, payload: response.data });
                } else {
                   // Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: SEARCH_LIST_ITMES, payload: [] });
               // Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};

//countrylist data

export const countrylist = (userId) => {
   let request = {
      userId:userId
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                let response = await Utilise.apiCalling('POST', `${Api.countrylist}`,  request);
                
                if (response?.status) {
                    dispatch({ type: COUNTRY_LIST_DATA, payload: response.data });
                } else {
                  
                }
            } catch (error) {
                dispatch({ type: COUNTRY_LIST_DATA, payload: [] });
               
            }
        };
    }
};


// get cart list data
export const cartPrice = (userId) => {
   let request = {
      userId:userId
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
              let response = await Utilise.apiCalling('POST', `${Api.cartprice}`,  request);
              if (response?.status) {
                  dispatch({ type: TOTAL_CART_PRICE, payload: response.data });
              }
          } catch (error) {
                dispatch({ type: TOTAL_CART_PRICE, payload: [] });
                
            }
        };
    }
};

// get cart list data
export const cartdata = (userId) => {
   let request = {
      userId:userId
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                let response = await Utilise.apiCalling('POST', `${Api.cartdata}`,  request);
                
                if (response?.status) {
                    dispatch({ type: CART_LIST_DATA1, payload: response.data });
                } else {
                  
                }
            } catch (error) {
                dispatch({ type: CART_LIST_DATA1, payload: [] });
              
            }
        };
    }
};
//deletecardaddress
export const deletecardaddress = (id,navigation) => {
 
  let request = {
    "id":id
    }

    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
             // alert(JSON.stringify(request));
              
                let response = await Utilise.apiCalling('POST', `${Api.deletecardaddress}`,  request);
                
                // alert(JSON.stringify(response));
                
                if (response?.status) {
                
                 // navigation.navigate("Cart");
                   dispatch({ type: DELETE_CARD_LIST, payload: [] });
                   // dispatch({ type: DELETE_CART_LIST, payload: response.data });
                } else {
                  
                }
            } catch (error) {
                dispatch({ type: DELETE_CARD_LIST, payload: [] });
               
            }
        };
    }
};

//deleteaddress

export const deleteaddress = (id,navigation) => {
 
  let request = {
    "id":id
    }

    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
             // alert(JSON.stringify(request));
              
                let response = await Utilise.apiCalling('POST', `${Api.deleteaddress}`,  request);
                
                // alert(JSON.stringify(response));
                
                if (response?.status) {
                
                 // navigation.navigate("Cart");
                   dispatch({ type: DELETE_ADDRESS_LIST, payload: [] });
                   // dispatch({ type: DELETE_CART_LIST, payload: response.data });
                } else {
                  
                }
            } catch (error) {
                dispatch({ type: DELETE_ADDRESS_LIST, payload: [] });
               
            }
        };
    }
};

//deletedata
  
  export const deletedata = (cartId,navigation) => {
 
  let request = {
    cartId:cartId,
    
    }

    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
             // alert(JSON.stringify(request));

                let response = await Utilise.apiCalling('POST', `${Api.deletedata}`,  request);
                
                // alert(JSON.stringify(response));
                
                if (response?.status) {
                
                 // navigation.navigate("Cart");
                   dispatch({ type: CART_LIST_DATA1, payload: [] });
                   // dispatch({ type: DELETE_CART_LIST, payload: response.data });
                } else {
                  
                }
            } catch (error) {
                dispatch({ type: DELETE_CART_LIST, payload: [] });
               
            }
        };
    }
};
//removecategory  

 export const removecategory = (categoryId,navigation) => {
 
  let request = {
    categoryId:categoryId,
    }

    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
             // alert(JSON.stringify(request));

                let response = await Utilise.apiCalling('POST', `${Api.removecategory}`,  request);
                
                // alert(JSON.stringify(response));
                
                if (response?.status) {
                 
                 // navigation.navigate("Cart");
                   dispatch({ type: REMOVE_CATEGORY_LIST, payload: [] });
                   // dispatch({ type: DELETE_CART_LIST, payload: response.data });
                } else {
                  //  Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: REMOVE_CATEGORY_LIST, payload: [] });
              //  Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};
//shopsellcount
export const shopsellcount = (shopId) => {
 // alert(shopId)
    let request = {
      shopId:shopId,
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: GET_SHOPSELL_COUNT, payload: [] });
                let response = await Utilise.apiCalling('POST', `${Api.shopsellcount}`,  request);
                
                if (response?.status) {
                  //Alert.alert("DROPSHIP", "shop product successfully")
                    dispatch({ type: GET_SHOPSELL_COUNT, payload: response.data });
                } else {
                   // Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_SHOPSELL_COUNT, payload: [] });
              //  Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};

//shopproductlist
export const shopproduct = (shopId) => {
 // alert(shopId)
    let request = {
      shopId:shopId,
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: GET_SHOP_PRODUCT, payload: [] });
                let response = await Utilise.apiCalling('POST', `${Api.shopproduct}`,  request);
                
                if (response?.status) {
                  //Alert.alert("DROPSHIP", "shop product successfully")
                    dispatch({ type: GET_SHOP_PRODUCT, payload: response.data });
                } else {
                   // Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_SHOP_PRODUCT, payload: [] });
              //  Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};


//branddetails
 export const branddetails = (userId) => {
  
    let request = {
      brandId:userId,
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: GET_ALL_CATEGORY, payload: [] });
                let response = await Utilise.apiCalling('POST', `${Api.branddetails}`,  request);
                
                if (response?.status) {
                  // Alert.alert("DROPSHIP", "Brand details successfully")
                    dispatch({ type: GET_BRAND_DETAILS, payload: response.data.data });

                    dispatch({ type: GET_BRAND_PRODUCT, payload: response.data.prouduct });

                } else {
                   // Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_BRAND_DETAILS, payload: [] });
              //  Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};

//namebrand
export const getbrandName = (UserId,navigation) => {
    let request = {
      userId:UserId,
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                let response = await Utilise.apiCalling('POST', `${Api.getbrandName}`,  request);
                
                // alert(JSON.stringify(response));
                if (response?.status) {
                 // Alert.alert("DROPSHIP", 'brandName successfully')
                   dispatch({ type: SET_BRAND_NAME, payload: response.data });
                } else {
                   // Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: REMOVE_CATEGORY_LIST, payload: [] });
              //  Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};

//namebrand
export const getchannelbrandName = (channelId,navigation) => {
    let request = {
      channelId:channelId,
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                 dispatch({ type: SET_BRAND_NAME, payload: [] });
                let response = await Utilise.apiCalling('POST', `${Api.getchannelbrandName}`,  request);
                
                // alert(JSON.stringify(response));
                if (response?.status) {
                 // Alert.alert("DROPSHIP", 'brandName successfully')
                   dispatch({ type: SET_BRAND_NAME, payload: response.data });
                } else {
                  //  Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: REMOVE_CATEGORY_LIST, payload: [] });
               // Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};

//removedata

 export const removedata = (eventId,product_id,navigation) => {
 
  let request = {
    eventId:eventId,
    product_id:product_id
    }

    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
             // alert(JSON.stringify(request));

                let response = await Utilise.apiCalling('POST', `${Api.removedata}`,  request);
                
                // alert(JSON.stringify(response));
                
                if (response?.status) {
                  Alert.alert("DROPSHIP", 'Item remove successfully')
                 // navigation.navigate("Cart");
                   dispatch({ type: REMOVE_ITEM_LIST, payload: [] });
                   // dispatch({ type: DELETE_CART_LIST, payload: response.data });
                } else {
                   // Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: REMOVE_ITEM_LIST, payload: [] });
               // Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};

//increcartlist

 export const increcartlist = (newcartId,quantity) => {
 
  let request = {
    cartId:newcartId,
    productQuantity:quantity
    }

    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
             // alert(JSON.stringify(request));

                let response = await Utilise.apiCalling('POST', `${Api.increcartlist}`,  request);
                
                // alert(JSON.stringify(response));
                if (response?.status) {
                 // Alert.alert("DROPSHIP", 'Cart updated successfully')
                    dispatch({ type: INCREMENT_CART_LIST, payload: response.data });
                } else {
                    //Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: INCREMENT_CART_LIST, payload: [] });
               // Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};
//gettopsell
export const gettopsell = (userId,limit) => {
  
    let request = {
      userId:userId,
      limit:limit,
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: GET_TOP_SELL, payload: [] });
                let response = await Utilise.apiCalling('POST', `${Api.gettopsell}`,  request);
                
                if (response?.status) {
                 // Alert.alert("DROPSHIP", 'dashboard updated successfully')
                    dispatch({ type: GET_TOP_SELL, payload: response.data });
                } else {
                    //Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_TOP_SELL, payload: [] });
                //Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};
//gettopcountry
export const gettopcountry = (userId,limit) => {
  
    let request = {
      userId:userId,
      
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: GET_TOP_COUNTRY, payload: [] });
                let response = await Utilise.apiCalling('POST', `${Api.gettopcountry}`,  request);
                
                if (response?.status) {
                 // Alert.alert("DROPSHIP", 'dashboard updated successfully')
                    dispatch({ type: GET_TOP_COUNTRY, payload: response.data });
                } else {
                    //Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_TOP_COUNTRY, payload: [] });
                //Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};

//getselldeshboard
  export const getselldeshboard = (userId) => {
  
    let request = {
      userId:userId,
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: GET_SELL_DESHBOARD, payload: [] });
                let response = await Utilise.apiCalling('POST', `${Api.getselldeshboard}`,  request);
                
                if (response?.status) {
                 // Alert.alert("DROPSHIP", 'dashboard updated successfully')
                    dispatch({ type: GET_SELL_DESHBOARD, payload: response.data });
                } else {
                    //Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_SELL_DESHBOARD, payload: [] });
                //Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};


//listcategory
   export const getAllcategory = (userId) => {
  
    let request = {
      userId:userId,
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: GET_ALL_CATEGORY, payload: [] });
                let response = await Utilise.apiCalling('POST', `${Api.getAllcategory}`,  request);
                
                if (response?.status) {
                    dispatch({ type: GET_ALL_CATEGORY, payload: response.data });
                } else {
                    //Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_ALL_CATEGORY, payload: [] });
                //Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};

//listproductdetails
   export const getAllproductdetails = (productId) => {
  
    let request = {
      productId:productId,
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected; 
        if (isInternetConnected) {
            try {
                dispatch({ type: GET_ALL_PRODUCTDETAILS, payload: [] });
                let response = await Utilise.apiCalling('POST', `${Api.getlistproductdetails}`,  request);
                console.log(response,'aaaaa')
                if (response?.status) {
                    dispatch({ type: GET_ALL_PRODUCTDETAILS, payload: response.data });
                } else {
                    //Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_ALL_PRODUCTDETAILS, payload: [] });
                //Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};

  //listproduct
   export const getAllproduct = (userId) => {
  //alert(userId);
    let request = {
      userId:userId,
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                if(userId!=1){
                  dispatch({ type: GET_ALL_PRODUCT, payload: [] });
                }
                let response = await Utilise.apiCalling('POST', `${Api.getlistproduct}`,  request);
                
                if (response?.status) {
                    dispatch({ type: GET_ALL_PRODUCT, payload: response.data });
                } else {
                   // Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_ALL_PRODUCT, payload: [] });
                //Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};

export const getwatchlistproduct = (userId) => {
    let request = {
      userId:userId,
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                let response = await Utilise.apiCalling('POST', `${Api.getwatchlist}`,  request);
                if (response?.status) {
                    dispatch({ type: GET_ALL_WatchPRODUCT, payload: response.data });
                }
            } catch (error) {
                dispatch({ type: GET_ALL_WatchPRODUCT, payload: [] });
            }
        };
    }
};

//listproduct
export const selectAllproduct = (responsedata) => {
    return async (dispatch, getState) => {
        dispatch({ type: GET_ALL_PRODUCT, payload: [] });
        dispatch({ type: GET_ALL_PRODUCT, payload: responsedata });
    }
};

//listproduct
  export const searchproduct = (userId,search) => {
    let request = {
      userId:userId,
      search:search
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: GET_ALL_PRODUCT, payload: [] });
                let response = await Utilise.apiCalling('POST', `${Api.getsearchproduct}`,  request);
                if (response?.status) {
                    dispatch({ type: GET_ALL_PRODUCT, payload: response.data });
                } else {
                   // Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_ALL_PRODUCT, payload: [] });
                //Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};
//getusercard
export const getusercard = (userId) => {
  
  let request = {
      userId:userId
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
              
                let response = await Utilise.apiCalling('POST', `${Api.getuserCard}`,  request);
                
                if (response?.status) {
                  
                  dispatch({ type: GET_USERCARD_LIST, payload: response.data });
                } else {
                   // Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_USERCARD_LIST, payload: [] });
                //Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};

//getuseraddress
export const getuseraddress = (userId) => {
  //alert('userdata')
  //alert(userId)
  let request = {
      userId:userId
    }
    return async (dispatch, getState) => {
      let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
              
                let response = await Utilise.apiCalling('POST', `${Api.getuseraddress}`,  request);
                console.log('responseresponse',response)
                if (response?.status) {
                  
                  dispatch({ type: GET_USERADDRESS_LIST, payload: response.data });
                } else {
                   // Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_USERADDRESS_LIST, payload: [] });
                //Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};

//getprofileuser
export const getprofileuser = (userId) => {
  let request = {
      userId:userId
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                let response = await Utilise.apiCalling('POST', `${Api.getprofileuser}`,  request);
               
                if (response?.status) {
                  
                  dispatch({ type: GET_PROFILEUSER_LIST, payload: response.data });
                } else {
                   // Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_PROFILEUSER_LIST, payload: [] });
                //Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};

//updateaudiancecount
export const updateaudiancecount = (channelId,count) => {
    let request = {
      channelId:channelId,
      count:count
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                let response = await Utilise.apiCalling('POST', `${Api.updateAudianceCount}`,  request);
                if (response?.status) {
                  dispatch({ type: GET_CHANNEL_COUNT, payload: response.data });
                }
            } catch (error) {
                dispatch({ type: GET_CHANNEL_COUNT, payload: [] });
            }
        };
    }
};

//getaudiancecount
export const getaudiancecount = (channelId,timer) => {
    let request = {
      channelId:channelId,
      timer:timer
    }
    //alert(channelId)
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                let response = await Utilise.apiCalling('POST', `${Api.getchannelAudiance}`,  request);
               

                if (response?.status) {
                  dispatch({ type: GET_CHANNEL_COUNT, payload: response.data });
                }
            } catch (error) {
                dispatch({ type: GET_CHANNEL_COUNT, payload: [] });
            }
        };
    }
};

// get supportchatlist
export const getsupportlist = (userId) => {

  
  let request = {
      userId:userId
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                let response = await Utilise.apiCalling('POST', `${Api.getsupportlist}`,  request);
               
                if (response?.status) {
                   
                  //Alert.alert("DROPSHIP", 'Chat successfully')
                    dispatch({ type: GET_SUPPORT_LIST1, payload: response.data });
                } else {
                    //Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_SUPPORT_LIST, payload: [] });
                //Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};


// get processorderlist
export const getprocesstlist = (userId) => {

  
  let request = {
      userId:userId
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                let response = await Utilise.apiCalling('POST', `${Api.getprocesstlist}`,  request);
               
                if (response?.status) {
                   
                    dispatch({ type: GET_PROCESSORDER_LIST, payload: response.data });
                } else {
                   // Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_PROCESSORDER_LIST, payload: [] });
                //Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};


// get incomingorderlist
export const getincomingtlist = (userId) => {

  let request = {
      userId:userId
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                let response = await Utilise.apiCalling('POST', `${Api.getincomingtlist}`,  request);
                //console.log(response,'darshan')
                if (response?.status) {
                    dispatch({ type: GET_INCOMINGORDER_LIST, payload: response.data });
                } else {
                    //Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_INCOMINGORDER_LIST, payload: [] });
                //Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};
//getLivecommentCustomer
  export const getLivecommentCustomer = (orderNumber) => {

  
  let request = {
      eventId:orderNumber
    }
    console.log('responsegetLivecommentCustomer',request)
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                let response = await Utilise.apiCalling('POST', `${Api.getLivecommentCustomer}`,  request);
                console.log('responsegetLivecommentCustomer',response)
                if (response?.status) {
                    dispatch({ type: GET_LIVECOMMENT_LIST, payload: response.data });
                } else {
                   // Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_LIVECOMMENT_LIST, payload: [] });
                //Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};


//getLiveCustomer
 export const getLiveCustomer = (eventId) => {
 
  
  let request = {
      eventId:eventId
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                dispatch({ type: GET_LIVEEVENT_LIST, payload: [] });
                let response = await Utilise.apiCalling('POST', `${Api.getLiveCustomer}`,  request);
                
                if (response?.status) {
                   
                 // Alert.alert("DROPSHIP", 'eventlist successfully')
                    dispatch({ type: GET_LIVEEVENT_LIST, payload: response.data });
                } else {
                   // Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_LIVEEVENT_LIST, payload: [] });
                //Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};


// getorderlist
export const getorderdetail = (orderNumber) => {

  
  let request = {
      orderNumber:orderNumber
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                let response = await Utilise.apiCalling('POST', `${Api.getorderdetail}`,  request);
               
                if (response?.status) {
                   
                  //Alert.alert("DROPSHIP", 'orderlist successfully')
                    dispatch({ type: GET_ORDER_LIST, payload: response.data });
                } else {
                    //Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_ORDER_LIST, payload: [] });
                //Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};


//allshop

export const getAllshop = (userId,usertype) => {
    //alert(userId)
    let request = {
      userId:userId
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
              if(usertype !=1){
                 dispatch({ type: GET_ALL_SHOP, payload: [] });
              }
                
                let response = await Utilise.apiCalling('POST', `${Api.getAllshop}`,  request);
                
                if (response?.status) {
                    dispatch({ type: GET_ALL_SHOP, payload: response.data });
                } else {
                    //Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_ALL_SHOP, payload: [] });
                //Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};

//allshop

export const updateorderdetail = (orderNumber,status) => {
    let request = {
      orderNumber:orderNumber,
      status:status
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                let response = await Utilise.apiCalling('POST', `${Api.updateorderstatus}`,  request);
                
                if (response?.status) {
                    alert('Order Status updated successfully')
                   // dispatch({ type: GET_ALL_SHOP, payload: response.data });
                } else {
                    //Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                dispatch({ type: GET_ALL_SHOP, payload: [] });
                //Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};

export const editUser = (orderNumber,status) => {
    let request = {
      orderNumber:orderNumber,
      status:status
    }
    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
                let response = await Utilise.apiCalling('POST', `${Api.editUser}`,  request);
                
                if (response?.status) {
                    //alert('Order Status updated successfully')
                    dispatch({ type: POST_EDIT_USER, payload: response.data });
                } else {
                    //Alert.alert("DROPSHIP", String(response?.message))
                }
            } catch (error) {
                //dispatch({ type: GET_ALL_SHOP, payload: [] });
                Alert.alert("DROPSHIP", String(error?.message))
            }
        };
    }
};

// LOGOUT  
export const logout = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "USER_LOGOUT", payload: null });
    global.authToken = null;
   // let loginDetail = await AsyncStorage.getItem('@rememberMe');
    //await AsyncStorage.clear();
    if (loginDetail && loginDetail !== null) {
      //await AsyncStorage.setItem('@rememberMe', loginDetail);
    }
  };
};

//deletuser
export const deleteUseraccount = (id,navigation) => {
 
  let request = {
    "id":id
    }

    return async (dispatch, getState) => {
        let isInternetConnected = await getState().auth?.isInternetConnected;
        if (isInternetConnected) {
            try {
             // alert(JSON.stringify(request));
              
                let response = await Utilise.apiCalling('POST', `${Api.deleteUser}`,  request);
                
                // alert(JSON.stringify(response));
                
                if (response?.status) {
                
                 // navigation.navigate("Cart");
                   dispatch({ type: DELETE_USER, payload: [] });
                   // dispatch({ type: DELETE_CART_LIST, payload: response.data });
                } else {
                  
                }
            } catch (error) {
                dispatch({ type: DELETE_USER, payload: [] });
               
            }
        };
    }
};