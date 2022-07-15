import React, { useEffect, useRef, useState } from 'react';
import { Text,TextInput,Image,TouchableOpacity, View, ImageBackground, ScrollView,  Alert, KeyboardAvoidingView, Platform, Keyboard, Linking } from 'react-native';
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PasswordInputText from '../../components/react-native-hide-show-password-input';
import tw from 'twrnc';
import Largebutton from '../../components/dropshipbutton/Largebutton';
import AwesomeAlert from '../../components/modals/AlertModal';
import { EyeIcon } from "react-native-heroicons/solid";
import Logobase from '../../components/baseassests/Logobase';


const CreateAccountShop = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference


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

    const [showotherAlert, setshowotherAlert] = React.useState(false);
    const [showalertmsg, setshowalertmsg] = React.useState('');
    const [toggleCheckBox, setToggleCheckBox] = useState(true)

    const [confirmsecure, setconfirmsecure] = useState(true)
    const [passwordsecure, setpasswordsecure] = useState(true)


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
            setshowotherAlert(true)
            setshowalertmsg('Email is required')
        }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setshowotherAlert(true)
            setshowalertmsg('Invalid Email')
        }else if (username == "" ) {
            setshowotherAlert(true)
            setshowalertmsg('Username is required')
        }else if (password == "" ) {
            setshowotherAlert(true)
            setshowalertmsg('Password is required')
        }else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            setshowotherAlert(true)
            setshowalertmsg('The password should have at least 8 characters with 1 upper case, 1 lower case, 1 number, and 1 special character(*,%,!,@,&,$,?)')
        } else if (confirmPassword == "") {
            setshowotherAlert(true)
            setshowalertmsg('Confirm Password is required')
        } else if (confirmPassword != password) {
            setshowotherAlert(true)
            setshowalertmsg('Confirm Password does not match.')
        }else if(toggleCheckBox==false){
            setshowotherAlert(true)
            setshowalertmsg('Please accept the Terms & Conditions')
        } else {
            //props.navigation.navigate("Overview")
            let request = {
                "email": email,
                "userName": username,
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
        Linking.openURL('https://dropship.shopping/privacy-policy/');
    }

    const openTerms = () => {
        Linking.openURL('https://dropship.shopping/');
    }

    return (
        <KeyboardAwareScrollView
            style={styles.registrationRootscroll}>
        <View style={{flex:1,backgroundColor:'#ffffff'}}>

            <View style={styles.leftlogView}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Golive")}>

                <Image source={ImageIcons.left} style={styles.droparrow}  />
                </TouchableOpacity>
            </View>
            <View style={tw.style('items-center mb-[10%]')}>
                <Logobase />
            </View>
        <View>
            <Text style={tw.style('text-2xl text-gray-700 font-bold mt-2 ml-5')}>Sign Up</Text>
        </View>

            <AwesomeAlert showotherAlert={showotherAlert} showalertmsg={showalertmsg} onSelect={(checked) => setshowotherAlert(checked)} />

            <View>

                <View style={tw.style('mt-5')}>
                    <TextInput
                     style={tw.style('mx-5 pl-3 sm:text-sm text-gray-700 border-gray-300 bg-gray-200 rounded-lg')}
                     placeholder="Email address"
                     onChangeText={onChangeText1}
                     value={email}
                     onSubmitEditing={() => handleRegistrationSubmit()}
                     placeholderTextColor="#000000"
                    />
                </View>

                <View style={tw.style('mt-5')}>
                    <TextInput
                     style={tw.style('mx-5 pl-3 sm:text-sm text-gray-700  border-gray-300 bg-gray-200 rounded-lg')}
                     placeholder="Username"
                     onChangeText={onChangeText6}
                     value={username}
                     onSubmitEditing={() => handleRegistrationSubmit()}
                     placeholderTextColor="#000000"
                    />
                </View>

                <View style={tw.style('mt-5')}>
                    <TextInput
                      style={tw.style('mx-5 pl-3 sm:text-sm text-gray-700 border-gray-300 bg-gray-200 rounded-lg')}
                      placeholderTextColor="#000000"
                      onChangeText={onChangeText2}
                      value={password}
                      placeholder="Password"
                      secureTextEntry={passwordsecure}
                      onSubmitEditing={() => handleRegistrationSubmit()}
                    />
                    <View style={tw`absolute top-3 right-8`}>
                       <TouchableOpacity onPress={() => setpasswordsecure(s=>!s)}>
                        <EyeIcon color="red" fill="black" size={24} />
                        </TouchableOpacity>
                  </View>
                </View>

                <View style={tw.style('mt-5')}>
                     <TextInput
                      style={tw.style('mx-5 pl-3 sm:text-sm text-gray-700 border-gray-300 bg-gray-200 rounded-lg')}
                      placeholderTextColor="#000000"
                      onChangeText={onChangeText3}
                      value={confirmPassword}
                      placeholder="Confirm Password"
                      secureTextEntry={confirmsecure}
                    />
                    <View style={tw`absolute top-3 right-8`}>
                      <TouchableOpacity onPress={() => setconfirmsecure(s=>!s)}>
                        <EyeIcon color="red" fill="black" size={24} />
                      </TouchableOpacity>
                    </View>
                </View>

                <View style={tw.style('flex mt-5 mx-4 my-4')}>

                <View style={tw.style('flex flex-row justify-center mt-3 w-12/12')}>
                    <CheckBox
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        tintColors={'#9E663C'}
                        onCheckColor={'#6F763F'}
                        onFillColor={'#4DABEC'}
                        onTintColor={'#F4DCF8'}
                     />
                    <Text style={tw.style('text-sm text-gray-700 tracking-wide')}> I agree to the </Text>
                    <TouchableOpacity onPress={() => openTerms()}>
                        <Text style={tw.style('text-sm text-red-700')}> Terms & Conditions</Text>
                    </TouchableOpacity>
                    <Text style={tw.style('text-sm text-gray-700 tracking-wide')}> and have</Text>
                </View>

                <View style={tw.style('flex flex-row justify-center w-9/12')}>
                    <Text style={tw.style('text-sm text-gray-700 tracking-wide')}>read the </Text>
                    <TouchableOpacity onPress={() => openPrivacyPolicy()}>
                        <Text style={tw.style('text-sm text-red-700')}> Privacy Policy</Text>
                    </TouchableOpacity>
                </View>


                </View>
                <View style={tw`mx-5`}>
                <Largebutton
                  text="Create an account"
                  onPress={() => handleRegistrationSubmit()}
                />
                </View>

                <View style={tw.style('flex flex-row justify-center mt-3')}>
                    <Text style={tw.style('text-base text-gray-700 tracking-wide')}>Already have an account yet?</Text>

                    <TouchableOpacity style={tw.style('w-auto')} onPress={() => props.navigation.navigate("RegistrationShop")}>
                        <Text style={tw.style('text-base text-red-800 items-center tracking-wide')}> Sign in here.</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
       </KeyboardAwareScrollView>
    )
}


export default CreateAccountShop
