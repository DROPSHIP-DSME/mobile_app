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


const changepassword = (props) => {

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
       if (password == "" || password.length<8) {
            Alert.alert('password is required')
        } else if (confirmPassword == "") {
            Alert.alert('confirmPassword is required')
        } else if (confirmPassword !== password) {
            Alert.alert("Password does not match.")
        } else {
            //props.navigation.navigate("Overview")
            let request = {
                "userId": props?.loginuserid,
                "password": password,
                
            }
            props.updatepassword(request, props.navigation, "user");
        }
    }

    const openPrivacyPolicy = () => {
        Linking.openURL('https://wallpon.com/privacy-policy');
    }

    const openTerms = () => {
        Linking.openURL('http://vendor.wallpon.com/terms-and-conditions.html');
    }

    return (
       
           
    <View style={{backgroundColor:'#FFE7E7',flex:1}}>

    
    <View >

    <View>
     <TextInput  style={styles.input1}
     placeholder="Create password"
     onChangeText={onChangeText2}
     value={password}
     secureTextEntry={true}
     onSubmitEditing={() => handleRegistrationSubmit()}
     placeholderTextColor="#999999" 
     />
    </View>

    <View >
     <TextInput  style={styles.input1}
     placeholder="Confirm password"
     secureTextEntry={true}
     onChangeText={onChangeText3}
     value={confirmPassword}
     onSubmitEditing={() => handleRegistrationSubmit()}
     placeholderTextColor="#999999" 
     />
    </View>

    </View>
    
    <TouchableOpacity style={styles.Touchablelogin}

        onPress={() => handleRegistrationSubmit()}>
    <Text style={styles.TouchableloginTEXT}>Change Password</Text>
    </TouchableOpacity>

   </View>
    )
}

export default changepassword