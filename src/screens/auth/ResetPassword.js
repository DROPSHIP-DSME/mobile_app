import React, { useEffect, useRef, useState } from 'react';

import { Text,TextInput,Image, View,TouchableOpacity, 
 ImageBackground, ScrollView, Alert, KeyboardAvoidingView, Platform, Keyboard, Linking } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import messaging from '@react-native-firebase/messaging';
import CheckBox from '@react-native-community/checkbox';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import { passwordValidationRegx, phoneRegExp } from '../../services/helper';
import Loader from '../../components/modals/Loader';
import PhoneMaskInput from '../../components/forms/inputField/PhoneMaskInput';
import AsyncStorage from '@react-native-community/async-storage';
import { useValidation } from 'react-native-form-validator';
import PasswordInputText from '../../components/react-native-hide-show-password-input';

const ResetPassword = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const phoneRef = useRef();
    const fullnameRef = useRef();

    

    // Local States
    const [isShowPassword, setIsShowPassword] = useState(true);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(true);
    const [deviceToken, setDeviceToken] = useState();
    const [isCheckPrivacy, setIsCheckPrivacy] = useState(false)
    const [text, onChangeText] = React.useState("fullName");
    const [email, onChangeText1] = React.useState("");
    const [password, onChangeText2] = React.useState("");
    const [text3, onChangeText3] = React.useState("Confirm password");
    const [UserID, setUserID] = useState("");

    const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { email, password, },
    });

    useEffect(() => {
        requestUserPermission();
        //getBrandUserId();
    }, [])

    const getBrandUserId = async () => {
        var getUserId = await AsyncStorage.getItem('userLogin');
        if(getUserId=="1"){
            props.navigation.navigate("watchlist")
        }
    }

    // Request FCM Permission & get device token
    const requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            // console.log('Authorization status:', authStatus);
            const _deviceToken = await messaging().getToken();
            setDeviceToken(_deviceToken)
        }
    }
    

    // Registration request submission
    const handleRegistrationSubmit = () => {
        Keyboard.dismiss();
            validate({
                email: { email: true },
                password: { password: true },
            }); {
            //props.navigation.navigate("Overview")
            let request = {
                "email": email,
               
                "type":"shop"
            }
            props.navigation.navigate("ResetPassword");
            //props.shoplogin(request,props.navigation,'user','shop')
            //props.signup(request, props.navigation, "salesman");
        }
    }

    return (
        <View style={{backgroundColor:'#ffffff',flex:1}}>
            <View style={[styles.heading,{marginTop:'15%',marginBottom:'5%'}]}>
                <Image source={ImageIcons.logored_1} style={styles.setlogonewdata}  />
            </View>
            <View style={[styles.heading,{marginTop:'15%',marginBottom:'5%'}]}>
                <Image source={ImageIcons.greentick}   />
            </View>
            <View style={{ justifyContent:'center',width:'100%', alignItems:'center'}}>
                <Text style={[styles.headingText1,{fontSize:22}]}>Password Reset</Text>
            </View>
            <View style={{ justifyContent:'center',width:'100%', alignItems:'center'}}>
                <Text style={{textAlign:'center', color:"#1A1A1A",
            fontFamily: 'hinted-AvertaStd-Regular',fontWeight:'400',fontSize:16,width:'80%',marginTop:20}}>An email has been sent with instructions on how to reset your password.</Text>
            </View>
            <TouchableOpacity style={styles.Touchablelogin}
                onPress={() => props.navigation.navigate("Registration")}>
                <Text style={styles.TouchableloginTEXT}>Return to Login</Text>
            </TouchableOpacity>
            <Loader isVisible={props?.loginLoader} />
        </View>
   ) 

}


export default ResetPassword