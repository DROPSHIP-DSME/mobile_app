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
import tw from 'twrnc';
import Largebutton from '../../components/dropshipbutton/Largebutton';

const ForgetPassword = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference

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


      <View style={tw.style('flex flex-1 bg-white')}>

        <View style={tw.style('items-center mt-24 w-full')}>
            <Image source={ImageIcons.logored_1} style={tw.style('w-30 h-24')}  />
        </View>

        <View>
            <Text style={tw.style('text-2xl text-gray-700 tracking-wide mt-8 mb-3 ml-5')}>Forgot Password</Text>
        </View>
         <View>
            <Text style={tw.style('text-base font-normal text-gray-600 mx-5')}>If you've forgotten your password, please enter your registered email address. We'll send you a link to reset your password.</Text>
        </View>
      <View>

        <View style={tw.style('mx-1 mt-3 mb-1 flex rounded-md items-center my-7')}>
          <TextInput
           style={tw.style('w-11/12 rounded-lg text-sm text-gray-700 bg-zinc-200 border-gray-300 pl-3 h-14')}
           placeholder="Email address"
           autoCompleteType='email'
           placeholderTextColor="#999999"
          onChangeText={onChangeText1}
          value={email}
          onSubmitEditing={() => handleRegistrationSubmit()}
          />
          {isFieldInError('email') &&
              <Text style={styles.stringerror}>must be required field</Text>
          }
        </View>
      </View>

        <Largebutton
          text="Confirm Email"
          onPress={() => handleRegistrationSubmit()}
        />
       <Loader isVisible={props?.loginLoader} />
    </View>
   )
}
export default ForgetPassword
