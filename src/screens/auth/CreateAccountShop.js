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

const CreateAccountShop = (props) => {

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
            style={styles.registrationRootscroll}>
        <View style={{flex:1,backgroundColor:'#ffffff'}}>

            <View style={styles.leftlogView}>
                <Image source={ImageIcons.left} style={styles.droparrow}  />
            </View>
            <View style={{alignItems:'center',marginTop:'-5%'}}>
                <Image source={ImageIcons.logored_1} style={styles.setlogonewdatarow}  />
            </View>
        <View>
            <Text style={styles.headingText1}>Sign Up</Text>
        </View>

            
            <View>

                <View >
                    <TextInput  style={styles.input1}
                     placeholder="Email address"
                     onChangeText={onChangeText1}
                     value={email}
                     onSubmitEditing={() => handleRegistrationSubmit()}
                     placeholderTextColor="#999999" 
                    />
                </View>

                <View >
                    <TextInput  style={styles.input1}
                     placeholder="Username"
                     onChangeText={onChangeText6}
                     value={username}
                     onSubmitEditing={() => handleRegistrationSubmit()}
                     placeholderTextColor="#999999" 
                    />
                </View>

                <View>
                    <PasswordInputText
                      style={styles.input2}
                      placeholderTextColor="#999999"
                      onChangeText={onChangeText2}
                      value={password}
                      placeholder="Password"
                      secureTextEntry={true}
                      onSubmitEditing={() => handleRegistrationSubmit()}
                    />
                     
                </View>

                <View >
                     
                     <PasswordInputText
                      style={styles.input2}
                      placeholderTextColor="#999999"
                      onChangeText={onChangeText3}
                      value={confirmPassword}
                      placeholder="confirmPassword"
                      secureTextEntry={true}
                      onSubmitEditing={() => handleRegistrationSubmit()}
                    />
                </View>

                <View style={{marginTop:'2%',flexDirection: 'row',marginLeft:'5%'}}>
                <CheckBox
                    checkedColor='red'
                    value={true}
                 />
                    <Text style={[styles.accounttext,{marginTop:'2%',width:'80%'}]}>I agree to the <Text style={styles.customertextred}>Terms & Conditions</Text> and have read the <Text style={styles.customertextred}>Privacy Policy</Text></Text>
                </View>

                
                
                <TouchableOpacity style={styles.Touchablelogin} onPress={() => handleRegistrationSubmit()}>
                    <Text style={styles.TouchableloginTEXT}>CREATE AN ACCOUNT</Text>
                </TouchableOpacity>

            

                <View style={[styles.twotextviewcreate,{marginTop:'4%'}]} >
                    <Text style={styles.customertext}>Already have an account yet? </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("RegistrationShop")}>
                        <Text style={styles.customertextred}> Sign in here.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        
        </View>
       </KeyboardAwareScrollView>
    )
}


export default CreateAccountShop