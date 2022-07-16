import React, { useEffect, useRef, useState } from 'react';
import {
    Text, TextInput, Image, View, TouchableOpacity,
    ImageBackground, ScrollView, Alert, KeyboardAvoidingView, Platform, Keyboard, Linking
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import messaging from '@react-native-firebase/messaging';
import CheckBox from '@react-native-community/checkbox';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../screens/common/styles';
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
import { GoogleSignin } from '@react-native-google-signin/google-signin';
//import { LoginManager } from "react-native-fbsdk-next";
import tw from 'twrnc';
import Largebutton from '../../components/dropshipbutton/Largebutton';
import { EyeIcon, EyeOffIcon } from "react-native-heroicons/solid";
import AwesomeAlert from '../../components/modals/AlertModal';
import Logobase from '../../components/baseassests/Logobase';


const RegistrationShop = (props) => {

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
    const instaLogin = useRef()
    const linkedInLogin = useRef()
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
    const [passwordsecure, setpasswordsecure] = useState(true)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [showotherAlert, setshowotherAlert] = React.useState(false);
    const [showalertmsg, setshowalertmsg] = React.useState('');


    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '512487199242-cp48gba87neibcgvoo98i8tca01tr0i0.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        });
        requestUserPermission();
        getrememberMe();
        if(props?.alertmessage=='Invalid Email or Password'){
            setshowotherAlert(true)
            setshowalertmsg('Invalid Email or Password')
        }

    }, [props?.alertmessage])

    const getrememberMe = async () => {
        var getpassword = await AsyncStorage.getItem('rememberpassword');
        var getemail = await AsyncStorage.getItem('rememberemail');
        onChangeText1(getemail);
        onChangeText2(getpassword);
        if(getemail!=null){
            setToggleCheckBox(true)
        }else{
            setToggleCheckBox(false)
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
        if (email == "") {
            setshowotherAlert(true)
            setshowalertmsg('Email is required')
        }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setshowotherAlert(true)
            setshowalertmsg('Invalid Email')
        }else if (password == "" ) {
            setshowotherAlert(true)
            setshowalertmsg('Password is required')
        }else{
            getrememberMe();
            let request = {
                "email": email,
                "password": password,
                "deviceToken": deviceToken,
                "otheruserid": '',
                "type": "shop"
            }
            if(email!="" && password!=""){
                props.shoplogin(request, props.navigation, 'user', 'shop')
            }
        }
    }
    const googleSignIn = async () => {
        try {
            await GoogleSignin.signOut();
            const userInfo = await GoogleSignin.signIn();
            console.log('GOOGLE', userInfo)
        } catch (error) {
            console.log('ERROR', JSON.stringify(error))
        }
    }
    const facebookSignIn = async () => {
        // LoginManager.logInWithPermissions(["public_profile", "email"]).then(
        //     function (result) {
        //         if (result.isCancelled) {
        //             console.log("Login cancelled");
        //         } else {
        //             console.log("Login Success ", JSON.stringify(result));
        //         }
        //     },
        //     function (error) {
        //         console.log("Login fail with error: " + error);
        //     }
        // );
    }
    const instaLoginWeb = (data) => {
        console.log('InstaLogin', data)
        instaLogin.current.hide()
    }

    const Rememberme = async (newValue) => {
        setToggleCheckBox(newValue);
        if(newValue==true){
           await AsyncStorage.setItem('rememberpassword',password);
           await AsyncStorage.setItem('rememberemail',email);
        }else {
           await AsyncStorage.setItem('rememberpassword','');
           await AsyncStorage.setItem('rememberemail','');
        }
    }

    return (
      <View style={{ backgroundColor: '#ffffff', flex: 1 }}>

            <View style={tw.style('items-center mt-[20%] mb-[10%]')}>
                <Logobase />
            </View>
          <View>
              <Text style={styles.headingText1}>Login</Text>
          </View>
        <View>

        <AwesomeAlert showotherAlert={showotherAlert} showalertmsg={showalertmsg} onSelect={(checked) => setshowotherAlert(checked)} />


              <View style={tw.style('mx-1 my-3 flex rounded-md items-center')}>
                  <TextInput
                      style={tw.style('w-11/12 rounded-lg sm:text-sm bg-zinc-200 text-gray-700 border-gray-300 pl-3')}
                      placeholder="Email address"
                      autoCompleteType='email'
                      placeholderTextColor="#000000"
                      onChangeText={onChangeText1}
                      value={email}
                      onSubmitEditing={() => handleRegistrationSubmit()}
                  />

              </View>

              <View style={tw.style('mx-1 mt-3 mb-1 flex items-center rounded-lg')} >
                  <TextInput
                      style={tw.style('w-11/12 sm:text-sm bg-zinc-200 rounded-lg text-gray-700 border-gray-300 pl-3')}
                      placeholder="Password"
                      placeholderTextColor="#000000"
                      onChangeText={onChangeText2}
                      value={password}
                      secureTextEntry={passwordsecure}
                      onSubmitEditing={() => handleRegistrationSubmit()}
                  />
                  <View style={tw`absolute top-3 right-8`}>
                    <TouchableOpacity onPress={() => setpasswordsecure(s=>!s)}>
                        {passwordsecure==false ?
                            <EyeOffIcon color="red" fill="black" size={24} />
                        :
                            <EyeIcon color="red" fill="black" size={24} />
                        }
                    </TouchableOpacity>
                  </View>

              </View>
              <View style={tw.style('mt-2 flex flex-row ml-3 mb-4')}>
                  <CheckBox
                        value={toggleCheckBox}
                        onValueChange={(newValue) => {
                                Rememberme(newValue)
                            }
                        }
                        tintColors={'#9E663C'}
                        onCheckColor={'#6F763F'}
                        onFillColor={'#4DABEC'}
                        onTintColor={'#F4DCF8'}
                     />
                  <Text style={tw.style('mt-1 text-base')}>Remember me</Text>
              </View>


          </View>
          <View style={tw`mx-5`}>
            <Largebutton text="Login" onPress={() => handleRegistrationSubmit()} />
          </View>

          <Loader isVisible={props?.loginLoader} />

          <View style={tw.style('flex flex-row justify-center mt-6')}>
              <Text style={tw.style('text-base text-gray-600 items-center tracking-wide')}>Forgot your password?</Text>
              <TouchableOpacity
                  onPress={() => props.navigation.navigate("ForgetPassword")}>
                  <Text style={tw.style('text-base text-blue-500 items-center tracking-wide')}> Click here.</Text>
              </TouchableOpacity>
          </View>


          <View style={styles.twotextviewcreatetop}>
              <Text style={tw.style('text-base text-gray-600 items-center tracking-wide')}>Don’t have an account yet?</Text>
              <TouchableOpacity onPress={() => props.navigation.navigate("CreateAccountShop")}>
                  <Text style={tw.style('text-base text-blue-500 items-center tracking-wide')}> Sign up here.</Text>
              </TouchableOpacity>
          </View>

      </View>


    )

}


export default RegistrationShop
