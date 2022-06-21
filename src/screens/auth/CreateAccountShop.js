import React, { useEffect, useRef, useState } from 'react';
import { Text,TextInput,Image,TouchableOpacity, View, ImageBackground, ScrollView,  Alert, KeyboardAvoidingView, Platform, Keyboard, Linking } from 'react-native';
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PasswordInputText from '../../components/react-native-hide-show-password-input';
import { useTailwind } from 'tailwind-rn';
import Largebutton from '../../components/dropshipbutton/Largebutton';

const CreateAccountShop = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference
    const tailwind = useTailwind();

    // Local States
    const [deviceToken, setDeviceToken] = useState();
    const [isCheckPrivacy, setIsCheckPrivacy] = useState(false)
    const [FullName, onChangeText] = React.useState("");
    const [email, onChangeText1] = React.useState("");
    const [username, onChangeText6] = React.useState("");
    const [phone, onChangeText4] = React.useState("");
    const [password, onChangeText2] = React.useState("");
    const [confirmPassword, onChangeText3] = React.useState("");
    const [UserID, setUserID] = useState("");

    useEffect(() => {
        requestUserPermission();
        getBrandUserId();
    }, [])

    const getBrandUserId = async () => {
         var getUserId = await AsyncStorage.getItem('UserId');
         setUserID(getUserId);
         //alert(getUserId)
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
            Alert.alert('email is required')
        }else if(email == "email" ){
            Alert.alert('This email is Already used')
        }else if (password == "" || password.length<8) {
            Alert.alert('password is required')
        } else if (confirmPassword == "") {
            Alert.alert('confirmPassword is required')
        } else if (confirmPassword !== password) {
            Alert.alert("Password does not match.")
        } else {
            //props.navigation.navigate("Overview")
            let request = {
                "email": email,

                "userName": email,

                "phone": phone,
                "countryCode": '+1',
                "password": password,
                "role": "user",
                "deviceToken": deviceToken,
                "otheruserid":UserID,
                "type":"shop"

            }
            props.shopsignup(request, props.navigation,);
        }
    }

    const openPrivacyPolicy = () => {
        Linking.openURL('');
    }

    const openTerms = () => {
        Linking.openURL('');
    }

    return (
        <KeyboardAwareScrollView
            style={tailwind('flex flex-1 bg-white')}>

          <View style={tailwind('flex flex-1')}>
              <View style={tailwind('flex-row mt-11 ml-3')}>
                  <Image source={ImageIcons.left} style={styles.droparrow}  />
              </View>
              <View style={tailwind('items-center')}>
                  <Image source={ImageIcons.logored_1} style={tailwind('w-[90] h-[73]')}  />
              </View>
          <View>

            <Text style={tailwind('text-2xl text-gray-700 font-bold ml-5 mt-6')}>Sign Up</Text>
        </View>


            <View>

                <View style={tailwind('mt-5')}>
                    <TextInput  style={tailwind('mx-5 pl-3 text-sm border-gray-300 bg-zinc-200 rounded-lg')}
                     placeholder="Email address"
                     onChangeText={onChangeText1}
                     value={email}
                     onSubmitEditing={() => handleRegistrationSubmit()}
                     placeholderTextColor="#000000"
                    />
                </View>

                <View style={tailwind('mt-4')}>
                    <TextInput  style={tailwind('mx-5 pl-3 text-sm border-gray-300 bg-zinc-200 rounded-lg')}
                     placeholder="Username"
                     onChangeText={onChangeText6}
                     value={username}
                     onSubmitEditing={() => handleRegistrationSubmit()}
                     placeholderTextColor="#000000"
                    />
                </View>

                <View style={tailwind('mt-4')}>
                    <PasswordInputText
                      style={tailwind('mx-5 pl-3 text-sm border-gray-300 bg-zinc-200 rounded-lg')}
                      placeholderTextColor="#000000"
                      onChangeText={onChangeText2}
                      value={password}
                      placeholder="Password"
                      secureTextEntry={true}
                      onSubmitEditing={() => handleRegistrationSubmit()}
                    />

                </View>

                <View style={tailwind('mt-4')}>
                     <PasswordInputText
                      style={tailwind('mx-5 pl-3 text-sm border-gray-300 bg-zinc-200 rounded-lg')}
                      placeholderTextColor="#000000"
                      onChangeText={onChangeText3}
                      value={confirmPassword}
                      placeholder="confirmPassword"
                      secureTextEntry={true}
                      onSubmitEditing={() => handleRegistrationSubmit()}
                    />
                </View>

                <View style={tailwind('flex flex-row mt-5 ml-5 mb-6')}>
                <CheckBox
                    onCheckColor='#b80000'
                    value={false}
                 />
                    <Text style={tailwind('text-sm text-gray-700 w-10/12 tracking-wide')}>I agree to the <Text style={tailwind('text-sm text-blue-600 mt-2')}>Terms & Conditions</Text> and have read the <Text style={tailwind('text-sm text-blue-600 mt-2')}>Privacy Policy</Text></Text>
                </View>

                <Largebutton
                  text="Create an account"
                  onPress={() => handleRegistrationSubmit()}
                />


                <View style={tailwind('flex flex-row justify-center mt-4')} >
                    <Text style={tailwind('text-sm font-medium text-slate-800')}>Already have an account yet? </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("RegistrationShop")}>
                        <Text style={tailwind('text-sm font-medium text-blue-600')}> Sign in here.</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
       </KeyboardAwareScrollView>
    )
}


export default CreateAccountShop
