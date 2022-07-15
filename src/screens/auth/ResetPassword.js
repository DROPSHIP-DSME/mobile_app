import React, { useEffect, useRef, useState } from 'react';

import { Text,TextInput,Image, View,TouchableOpacity,
 ImageBackground, ScrollView, Alert, KeyboardAvoidingView, Platform, Keyboard, Linking } from 'react-native';

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
import tw from 'twrnc';
import Largebutton from '../../components/dropshipbutton/Largebutton';
import { CheckCircleIcon } from 'react-native-heroicons/solid';

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
        //requestUserPermission();
        //getBrandUserId();
    }, [])

    

    

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
         <View style={tw.style('items-center my-18 w-full h-24')}>
                <Image source={ImageIcons.logored_1} style={tw.style('w-[32%] h-26.7')}  />
            </View>
         <View style={tw.style('mb-7 mt-10 items-center')}>
             <CheckCircleIcon color="white" fill="green" size={70}/>
         </View>
         <View style={{ justifyContent:'center',width:'100%', alignItems:'center'}}>
             <Text style={tw.style('text-2xl text-gray-700 mt-4 font-bold')}>Password Reset</Text>
         </View>
         <View style={tw.style('justify-center items-center mb-8 mt-4')}>
             <Text style={tw.style('text-center text-base text-gray-600 w-10/12')}>An email has been sent with instructions on how to reset your password.</Text>
         </View>
         <View style={tw.style('mt-30 mx-5')}>
           <Largebutton
             text="Return to Login"
             onPress={() => props.navigation.navigate("RegistrationShop")}
           />
         </View>
         <Loader isVisible={props?.loginLoader} />
     </View>
   )

}


export default ResetPassword
