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
import styles from './styles';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import Largebutton from '../../components/dropshipbutton/Largebutton';
import { passwordValidationRegx, phoneRegExp } from '../../services/helper';
import Loader from '../../components/modals/Loader';
import PhoneMaskInput from '../../components/forms/inputField/PhoneMaskInput';
import AsyncStorage from '@react-native-community/async-storage';
import { useValidation } from 'react-native-form-validator';
import PasswordInputText from '../../components/react-native-hide-show-password-input';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
//import { LoginManager } from "react-native-fbsdk-next";
import { useTailwind } from 'tailwind-rn';

const RegistrationShop = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference
    const tailwind = useTailwind();
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
    const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
        useValidation({
            state: { email, password, },
        });

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '512487199242-cp48gba87neibcgvoo98i8tca01tr0i0.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        });
        requestUserPermission();
        //getBrandUserId();
    }, [])

    const getBrandUserId = async () => {
        var getUserId = await AsyncStorage.getItem('userLogin');
        if (getUserId == "1") {
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
                "password": password,
                "deviceToken": deviceToken,
                "otheruserid": props?.loginuserid,
                "type": "shop"
            }
            props.shoplogin(request, props.navigation, 'user', 'shop')
            //props.signup(request, props.navigation, "salesman");
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

    const getLinkedToken = (data) => {
        console.log(data)
        getLinkedinProfileData(data)
        // call this to get the profile data
        //https://api.linkedin.com/v2/me
    }
    return (
        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>

              <View style={tailwind('items-center mt-[16%]')}>
                  <Image source={ImageIcons.logored_1} style={tailwind('w-[90] h-[73]')}  />
              </View>
            <View>
                <Text style={styles.headingText1}>Login</Text>
            </View>
          <View>


                <View style={tailwind('mx-1 my-3 flex rounded-md items-center')}>
                    <TextInput
                        style={tailwind('w-11/12 rounded-lg sm:text-sm bg-zinc-200 border-gray-300 pl-3')}
                        placeholder="Email address"
                        autoCompleteType='email'
                        placeholderTextColor="#000000"
                        onChangeText={onChangeText1}
                        value={email}
                        onSubmitEditing={() => handleRegistrationSubmit()}
                    />
                    {isFieldInError('email') &&
                        <Text style={tailwind('text-red-700 mx-8 my-2')}>must be required field</Text>
                    }
                </View>

                <View style={tailwind('mx-1 mt-3 mb-1 flex rounded-md items-center')} >
                    <PasswordInputText
                        style={tailwind('w-11/12 rounded-lg sm:text-sm bg-zinc-200 border-gray-300 pl-3')}
                        placeholder="Password"
                        placeholderTextColor="#000000"
                        onChangeText={onChangeText2}
                        value={password}
                        secureTextEntry={true}
                        onSubmitEditing={() => handleRegistrationSubmit()}
                    />
                    {isFieldInError('password') &&
                        <Text style={tailwind('text-red-700 mx-8 my-2')}>must be required field</Text>
                    }
                </View>
                <View style={tailwind('mt-2 flex flex-row ml-3 mb-4')}>
                    <CheckBox
                        onCheckColor='#b80000'
                        value={false}
                    />
                    <Text style={tailwind('mt-1 text-base')}>Remember me</Text>
                </View>

            </View>

            <Largebutton
              text="Login"
              onPress={() => handleRegistrationSubmit()}
            />

            <Loader isVisible={props?.loginLoader} />

            <View style={tailwind('flex flex-row justify-center mt-6')}>
                <Text style={tailwind('text-base text-gray-600 items-center tracking-wide')}>Forgot your password?</Text>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("ForgetPassword")}>
                    <Text style={tailwind('text-base text-blue-500 items-center tracking-wide')}> Click here.</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.twotextviewcreatetop}>
                <Text style={tailwind('text-base text-gray-600 items-center tracking-wide')}>Don’t have an account yet?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("CreateAccountShop")}>
                    <Text style={tailwind('text-base text-blue-500 items-center tracking-wide')}> Sign up here.</Text>
                </TouchableOpacity>
            </View>

        </View>


    )

}


export default RegistrationShop
