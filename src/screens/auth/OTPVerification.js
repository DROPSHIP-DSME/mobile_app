import React, { useEffect, useRef, useState } from 'react';
import { Text, Image, View, TextInput, BackHandler, TouchableOpacity,ScrollView, Alert,   KeyboardAvoidingView, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CountDown from 'react-native-countdown-component';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../screens/common/styles';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import Loader from '../../components/modals/Loader';
import { useDispatch } from 'react-redux';
import { SET_DEFAULT_AUTH_SCREEN } from '../../redux/actions/ActionTypes';

const OTPVerification = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Redux methods
    const dispatch = useDispatch();
    //References
    const countdownRef = useRef();
    // Local states
    const [countdown, setCountdown] = useState(true);

    // Otp request submission
    const handleOTPSubmit = () => {
        if (errors.otp) {
            Alert.alert(CommonStrings.AppName, errors.otp)
        } else {
            let { signupCredentials } = props;
            let isForgetPassword = props && props.route && props.route.params || false;
            let request = {
                "userId": signupCredentials?._id,
                "otp": Number(values.otp)  // default opt:  6364
            }
            props.verifyOtp(request, props.navigation, isForgetPassword);
        }
    }

    useEffect(() => {
        if (props?.route?.params?.isForgetPassword) {
            dispatch({ type: SET_DEFAULT_AUTH_SCREEN, payload: "ResetPassword" })
        }
    }, [props?.route?.params?.isForgetPassword])

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            hardwareBackPress
        );
        return () => backHandler.remove();
    }, [])

    // Hanlde hardware back
    const hardwareBackPress = () => {
        dispatch({ type: SET_DEFAULT_AUTH_SCREEN, payload: "Login" })
        BackHandler.exitApp()
    }

    // Resend opt request submission
    const handleResendOpt = () => {
        if (!countdown) {
            props.resendOtp()
            setCountdown(true);
        }
    }

    return (
       
        <View style={{flex:1,backgroundColor:'#fce8e8'}}> 
         
        <View  style={{fontSize:16,marginTop:'15%'}}>
                       <Text  style={{fontSize:18,paddingLeft:'35%',color:'#4F4F4F'}}>
                           Create an account 
                        
                       </Text>

        </View>
        <View style={{flexDirection:'row',marginTop:"10%"}} >
        <View style={{marginLeft:"15%"}}>
              <Image source={ImageIcons.goo} style={{height:40,width:40}} />
      </View>
       <View style={{marginLeft:"10%"}}>
              <Image source={ImageIcons.facebook} style={{height:40,width:40}} />
      </View>
       <View style={{marginLeft:"10%"}}>
              <Image source={ImageIcons.chat} style={{height:40,width:40}} />
      </View>
       <View style={{marginLeft:"10%"}}>
              <Image source={ImageIcons.twitter} style={{height:40,width:40}} />
      </View>
      </View>

         <View style={{marginLeft:'5%',marginRight:'5%',marginTop:'10%'}}>
                            <TextInput style = {{borderWidth:1,borderRadius:4,color:'#000000'}}
                              underlineColorAndroid = "transparent"
                              placeholder = "Email address"
                              placeholderTextColor="#999999"
                              autoCapitalize = "none"
                              />
                     </View>

                      <View style={{marginLeft:'5%',marginRight:'5%',marginTop:'5%',color:'#000000'}}>
                            <TextInput style = {{borderWidth:1,borderRadius:4}}
                              underlineColorAndroid = "transparent"
                              placeholder = "Password"
                              placeholderTextColor="#999999"
                              autoCapitalize = "none"
                              />
                     </View>

                      <View style={{alignItems:'center',marginTop:'8%'}}>
                    <TouchableOpacity
                        style={styles.Touchableselltexte}
                        activeOpacity = { .5}
                         onPress={() => {props.navigation.navigate("OTPVerification") }}>
                        <Text style={{ textAlign:'center',color:'#ffffff',fontSize:16,}}>Login to your account </Text>
                    </TouchableOpacity>
               </View>

               <View  style={{fontSize:16,marginTop:'10%'}}>
                       <Text  style={{fontSize:16,paddingLeft:'25%'}}>
                             New customer?   
                        <Text style={{fontSize:16,color:'#B80000',paddingLeft:'22%'}}>
                                      Create an account.
                       </Text>
                       </Text>

               </View>
        </View>
    )
}


export default OTPVerification