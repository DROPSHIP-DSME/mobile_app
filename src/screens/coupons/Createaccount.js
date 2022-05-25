import React, { useEffect, useRef, useState } from 'react';
import { Text,TextInput,Image, View, ImageBackground, ScrollView, Alert, KeyboardAvoidingView, Platform, Keyboard, Linking } from 'react-native';
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


const Createaccount = (props) => {

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
    const [text1, onChangeText1] = React.useState("Email address");
    const [text2, onChangeText2] = React.useState("Create password");
    const [text3, onChangeText3] = React.useState("Confirm password");


    useEffect(() => {
        requestUserPermission();
    }, [])

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
        if (errors.email) {
            Alert.alert(CommonStrings.AppName, errors.email)
        } else if (errors.phoneNumber) {
            Alert.alert(CommonStrings.AppName, errors.phoneNumber)
        } else if (errors.username) {
            Alert.alert(CommonStrings.AppName, errors.username)
        } else if (errors.password) {
            Alert.alert(CommonStrings.AppName, errors.password)
        } else if (errors.confirmPassword) {
            Alert.alert(CommonStrings.AppName, errors.confirmPassword)
        } else if (values.confirmPassword !== values.password) {
            Alert.alert(CommonStrings.AppName, "Password does not match.")
        } else if (!isCheckPrivacy) {
            Alert.alert(CommonStrings.AppName, "Please check the terms of use and privacy policy.")
        } else {
            let request = {
                "email": values.email,
                "userName": values.fullName,
                "phone": values.phoneNumber,
                "countryCode": values.countryCode,
                "password": values.password,
                "role": "salesman",
                "deviceToken": deviceToken
            }
            props.signup(request, props.navigation, "salesman");
        }
    }

    const openPrivacyPolicy = () => {
        Linking.openURL('https://wallpon.com/privacy-policy');
    }

    const openTerms = () => {
        Linking.openURL('http://vendor.wallpon.com/terms-and-conditions.html');
    }

    return (
        <KeyboardAvoidingView>
           
                        <View>
                
                    
                        <View style={styles.heading}>
                            <Text style={styles.headingText}>Create an account</Text>
                        </View>


                        <View style={{marginTop:'5%'}}>


                         <View style={{flexDirection:'row', justifyContent:'space-between',padding:'5%'}}> 

                        <View >
                        <Image source={ImageIcons.google}  style={styles.google1} />
                        </View>
                        <View>
                        <Image source={ImageIcons.facebook}  style={styles.facebook1} />
                        </View>
                        <View>
                        <Image source={ImageIcons.message}  style={styles.message1} />
                        </View>
                        <View>
                        <Image source={ImageIcons.twitter}  style={styles.twitter1} />
                        </View>
                        <View>
                        <Image source={ImageIcons.linkin}  style={styles.linkin1} />
                        </View>
                        

                        </View>





                         <View style={{marginTop:'3%',borderWidth:1,borderColor:"#BDBDBD", borderRadius:5,width:'92%',marginLeft:16 }}>
                         <TextInput  style={styles.input}
        
                         placeholder="fullName"
                         onChangeText={onChangeText}
                         value={text}
                         />
                        </View>

                         <View style={{marginTop:'3%',borderWidth:1,borderColor:"#BDBDBD", borderRadius:5,width:'92%',marginLeft:16 }}>
                         <TextInput  style={styles.input}
        
                         placeholder="Email address"
                         onChangeText={onChangeText1}
                         value={text1}
                         />
                        </View>

                        <View style={{marginTop:'3%',borderWidth:1,borderColor:"#BDBDBD", borderRadius:5,width:'92%',marginLeft:16 }}>
                         <TextInput  style={styles.input}
        
                         placeholder="Create password"
                         onChangeText={onChangeText2}
                         value={text2}
                         />
                        </View>

                        <View style={{marginTop:'3%',borderWidth:1,borderColor:"#BDBDBD", borderRadius:5,width:'92%',marginLeft:16 }}>
                         <TextInput  style={styles.input}
        
                         placeholder="Confirm password"
                         onChangeText={onChangeText3}
                         value={text3}
                         />
                        </View>

                        </View>

                        <View style={{marginTop:'6%'}}>
                        <Text style={{ color: 'black',marginLeft:'4%', fontSize: 14 }}>By creating an account, I agree to the <Text style={{color:"#B80000"}}>Terms of use</Text> and have read the <Text style={{color:"#B80000"}}>Privacy Policy</Text></Text>
                        </View>

                        
                        <View
                          style={{
                           height:55,
                           width:'92%',
                           margin:'5%',
                           borderRadius:30,
                           marginLeft:'4%',
                           backgroundColor:"#B80000"
                          }}>

                        <View>
                        <Text style={{textAlign:'center' ,marginTop:'5%',color:"#FFFFFF"}}>Create an account</Text>
                        </View> 
                        </View>

                        <View style={{ color: 'black',textAlign:'center', fontSize: 14,marginTop:'2%' }} >
                        <Text style={{ textAlign:'center',  }}>Already have an account?<Text style={{color:"#B80000"}}> Login to your account</Text>
                        </Text>
                        </View>



                       </View>







                    

                    
        </KeyboardAvoidingView>
    )
}

const formikEnhancer = withFormik({
    validateOnMount: true,
    validationSchema: Yup.object().shape({
        email: Yup.string().required('Please enter email address').email('Please enter a valid email address'),
        phoneNumber: Yup.string().required('Please enter phone number').matches(phoneRegExp, 'Phone number is not valid'),
        fullName: Yup.string().required('Please enter full name'),
        password: Yup.string().required("Password must include at least 1 number, 1 character, 1 capital letter").min(8).matches(passwordValidationRegx, "Password must include at least 1 number, 1 character, 1 capital letter"),
        confirmPassword: Yup.string().required('Please enter confirm password'),
        countryCode: Yup.string().required()
    }),
    mapPropsToValues: (props) => {
        return {
            email: '',
            phoneNumber: '',
            fullName: '',
            password: '',
            confirmPassword: '',
            countryCode: '+1'
        };
    },
    handleSubmit: (payload, { props }) => {
        // let deviceToken=await getDeviceToken();

        // let request = {
        //     "email": payload.email,
        //     "userName": payload.fullName,
        //     "phone": payload.phoneNumber,
        //     "countryCode": payload.countryCode,
        //     "password": payload.password,
        //     "role": "salesman",
        //     "deviceToken": ""
        // }
        // props.signup(request, props.navigation);
    },
});


export default formikEnhancer(Createaccount);