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

const Codeconfirm = (props) => {

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
        if (FullName == "") {
            Alert.alert('FullName is required')
        } else if (email == "") {
            Alert.alert('email is required')
        }else if(email == "email" ){
            Alert.alert('This email is Already used')
        }else if (phone == "" || phone.length<10) {
            Alert.alert('phone is required')
        } else if (password == "" || password.length<8) {
            Alert.alert('password is required')
        } else if (confirmPassword == "") {
            Alert.alert('confirmPassword is required')
        } else if (confirmPassword !== password) {
            Alert.alert("Password does not match.")
        } else {
            //props.navigation.navigate("Overview")
            let request = {
                "email": email,
                "userName": FullName,
                "phone": phone,
                "countryCode": '+1',
                "password": password,
                "role": "user",
                "deviceToken": deviceToken,
                "otheruserid":UserID,
                "type":"shop"
               
            }
            props.signup(request, props.navigation, "user",'shop');
        }
    }
    const [register, setRegister] = React.useState(true);
    const [store, setStore] = React.useState(true);

    const showregister =()=>{
        setRegister(true);
        setStore(false)
    }
    const showstore =()=>{
        setStore(true);
        setRegister(false)
    }
    const openPrivacyPolicy = () => {
        Linking.openURL('https://wallpon.com/privacy-policy');
    }

    const openTerms = () => {
        Linking.openURL('http://vendor.wallpon.com/terms-and-conditions.html');
    }

    return (
        <KeyboardAwareScrollView 
            style={styles.registrationRootscroll}>
        <View style={{backgroundColor:'#ffffff',flex:1}}>
            <View style={[styles.heading,{marginTop:'15%',marginBottom:'5%'}]}>
                <Image source={ImageIcons.logored_1} style={styles.setlogonewdata}  />
            </View>
            <View style={[styles.heading,{marginTop:'15%',marginBottom:'5%'}]}>
                <Image source={ImageIcons.greentick}   />
            </View>
            <View style={{ justifyContent:'center',width:'100%', alignItems:'center'}}>
                <Text style={[styles.headingText1,{fontSize:22}]}>Code Confirmed</Text>
            </View>
            <View style={{ justifyContent:'center',width:'100%', alignItems:'center'}}>
                <Text style={{textAlign:'center', color:"#1A1A1A",
            fontFamily: 'hinted-AvertaStd-Regular',fontWeight:'400',fontSize:16,width:'83%',marginTop:20}}>Your account has been created. Confirm your account via email to get access to all features.</Text>
            </View>
            <TouchableOpacity style={styles.Touchablelogin}
                onPress={() => {props.navigation.navigate("watchlist");}}>
                <Text style={styles.TouchableloginTEXT}>Start Shopping</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Touchableloginblack}
                onPress={() => {props.navigation.navigate("Goliveshop");}}>
                <Text style={styles.TouchableloginTEXT}>Create Store</Text>
            </TouchableOpacity>
            <Loader isVisible={props?.loginLoader} />
        </View>
       </KeyboardAwareScrollView>
    )
}


export default Codeconfirm