import React, { useEffect,useRef, useState } from 'react';
import { Text, View,TextInput,
 ImageBackground,Image,
  ScrollView,TouchableOpacity, 
 Alert,  StatusBar,
  KeyboardAvoidingView,
   Platform,Keyboard,NativeModules,Picker} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import { phoneRegExp } from '../../services/helper';
import DropdownField from '../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../components/modals/Loader';
import AsyncStorage from '@react-native-community/async-storage';
import { v4 as uuid } from "uuid";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
const { RNTwitterSignIn } = NativeModules;
import ModalSelector from 'react-native-modal-selector'


//import { RNTwitterSignIn } from 'react-native-login-twitter';


const Constants = {
  //Dev Parse keys
  TWITTER_COMSUMER_KEY: "qWPj1TXbreMX1SsDvdiQTaF7Y",
  TWITTER_CONSUMER_SECRET: "4t0cRfGWXZvySIa5sS0M38AnT8a8B8hwcX2lZiaStSWStD4B4Z"
}


const Golive = (props) => {
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    // Local states

    const [First, onChangeFirst] = React.useState("");
    const [Lastname, onChangeLastname] = React.useState("");
    const [Email, onChangeEmail] = React.useState("");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("");
    const [Street, onChangeStreet] = React.useState("");
    const [Zip, onChangeZip] = React.useState("");
    const [City, onChangeCity] = React.useState("");
    const [Country, onChangeCountry] = React.useState("");
    const [SelectedValue, setSelectedValue] = useState('+1');

    const [wayToContact, setWayToContact] = useState("Phone");
    const [wayToContactList, setWayToContactList] = useState([
        {
            label: "Phone",
            value: "Phone"
        },
        {
            label: "Email",
            value: "Email"
        }
    ]);

    useEffect(() => {
        props.countrylist();
         //props.logoutreducerfun(uuid()); 
         //AsyncStorage.setItem('UserId',uuid());
         //AsyncStorage.setItem('userLogin',"0");
         //GoogleSignin.configure();
         GoogleSignin.configure({
                  scopes: ['https://www.googleapis.com/auth/user.gender.read'], // [Android] what API you want to access on behalf of the user, default is email and profile
                  webClientId: '512487199242-cp48gba87neibcgvoo98i8tca01tr0i0.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
                  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
                  hostedDomain: '', // specifies a hosted domain restriction
                  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
                  accountName: '', // [Android] specifies an account name on the device that should be used
                  iosClientId: '', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
                  googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
                  openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
                  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
                }); 
    }, [])

    const googlesignin = async () => {
        try {    
        
          await GoogleSignin.hasPlayServices();
          var userInfo = await GoogleSignin.signIn();
          console.log('userInfo:',userInfo) 
          props.navigation.navigate('watchlist')
        } catch (error) {
            //alert('Dropship has not updated on stores yet, please upload app on stores to proceed')
            //props.navigation.navigate('watchlist')
            console.log('google sign error:', error) 
        }
    }

const facebooksignin = async () => {
        //FBLoginManager.setLoginBehavior(FBLoginManager.LoginBehaviors.Native); // defaults to Native
        props.navigation.navigate('RegistrationShop')
        // FBLoginManager.loginWithPermissions(["email","user_friends"], function(error, data){
        //   if (!error) {
        //     console.log("Login data: ", data);
        //   } else {
        //     console.log("Error: ", error);
        //   }
        // })
    }

    const _twitterSignIn = async () => {
        RNTwitterSignIn.init(Constants.TWITTER_COMSUMER_KEY, Constants.TWITTER_CONSUMER_SECRET)
        RNTwitterSignIn.logIn()
          .then(loginData => {
            
            console.log(loginData)
            const { authToken, authTokenSecret } = loginData
            if (authToken && authTokenSecret) {
               let request = {
                    "phone": '3107287960'
                }
                props.shopsignupphone(request, props.navigation, "user",'shop');
                props.navigation.navigate('watchlist')
            }
          })
          .catch(error => {
            //props.navigation.navigate('watchlist')
            console.log(error)
          }
        )
    }


    // Registration request submission
    const handleRegistrationSubmit = () => {
        Keyboard.dismiss();
        if (PhoneNumber == "" || PhoneNumber.length !=10 ) {
            Alert.alert('phone is required')
        }else {
            
            let request = {
                "phone": PhoneNumber
            }
            props.shopsignupphone(request, props.navigation, "user",'shop');
            props.navigation.navigate('watchlist')
        }
    }

    let index = 0;
    const data = [
        { key: index++, label: '+1' },
        { key: index++, label: '+233' },
        { key: index++, label: '+254' },
        { key: index++, label: '+255' },
        { key: index++, label: '+33' },
        { key: index++, label: '+49' },
        { key: index++, label: '+45' },
        { key: index++, label: '+46' },
        { key: index++, label: '+27' },
        { key: index++, label: '+61' },
        { key: index++, label: '+55' },
        { key: index++, label: '+52' },
        { key: index++, label: '+54' },
        { key: index++, label: '+39' },
        { key: index++, label: '+91' },
        { key: index++, label: '+86' },
        { key: index++, label: '+62' }
    ];

    return (
         <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
             <StatusBar backgroundColor={'#ffffff00'} barStyle="dark-content" translucent={true} />
        <View style={{backgroundColor:'#ffffff',flex:1}}>
        
        <View style={[styles.heading,{marginTop:'15%',marginBottom:'5%'}]}>
            <Image source={ImageIcons.logored_1} style={styles.setlogonewdata}  />
        </View>
        <View>
            <Text style={[styles.headingText1,{textAlign:'center'}]}>Select a sign in option</Text>
        </View>

        <View>
            <Text style={[styles.headingText1,{textAlign:'center',fontWeight:'400',fontSize:19,padding:10}]}>Select what app experience you want to jump into.</Text>
        </View>
        

        <TouchableOpacity style={styles.Touchablelogin}
            onPress={() => navigation.navigate("Goliveshop")}>
            <Text style={[styles.TouchableloginTEXT,{color:'#ffffff',fontWeight:'700'}]}>I’M HERE TO SELL</Text>
        </TouchableOpacity>

         
         <TouchableOpacity style={[styles.Touchablelogin,{backgroundColor:'#4AFFBD'}]}
            onPress={() => navigation.navigate("RegistrationShop")}>
            <Text style={[styles.TouchableloginTEXT,{color:'#000000',fontWeight:'700'}]}>I’M HERE TO SHOP</Text>
        </TouchableOpacity>

        
        </View>  
         </KeyboardAvoidingView>
    )
}



export default Golive