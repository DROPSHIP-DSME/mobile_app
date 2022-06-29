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
import { Colors, CommonStrings } from '../../common';
import Largebutton from '../../components/dropshipbutton/Largebutton';
import ImageIcons from '../../common/ImageIcons';
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import { phoneRegExp } from '../../services/helper';
import DropdownField from '../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../components/modals/Loader';
import AsyncStorage from '@react-native-community/async-storage';
import { useTailwind } from 'tailwind-rn';
import { v4 as uuid } from "uuid";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import ModalSelector from 'react-native-modal-selector'



const Golive = (props) => {
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference
    const tailwind = useTailwind();

    // Local states
    const [City, onChangeCity] = React.useState("");
    const [Country, onChangeCountry] = React.useState("");

    useEffect(() => {
        props.countrylist();
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



    return (
         <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
             <StatusBar backgroundColor={'#ffffff00'} barStyle="dark-content" translucent={true} />
        <View style={{backgroundColor:'#ffffff',flex:1}}>

          <View style={{alignItems:'center',marginTop:'18%'}}>
              <Image source={ImageIcons.logored_1} style={styles.setlogonewdatarow}  />
          </View>
        <View style={tailwind('items-center mt-12')}>
            <TouchableOpacity
                style={tailwind('w-[90%] h-16 bg-white justify-center text-center rounded-full border border-slate-400')}
                activeOpacity = { .5}
                onPress={() => navigation.navigate('watchlist')}>
                <View style={tailwind('flex flex-row justify-center')}>
                    <Image source={ImageIcons.googleicon} style={tailwind('w-[25] h-[23] mt-1')} />
                    <Text style={tailwind('text-lg font-bold ml-3 text-gray-800 tracking-wide')}>Sign in with Google</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={tailwind('items-center mt-6')}>
            <TouchableOpacity
                style={tailwind('w-[90%] h-16 bg-white justify-center text-center rounded-full border border-slate-400')}
                activeOpacity = { .5}
                onPress={() => bigcommercelogin()}>
                <View style={tailwind('flex flex-row justify-center')}>
                    <Image source={ImageIcons.facebook} style={tailwind('w-[14] h-[24] mt-1')} />
                    <Text style={tailwind('text-lg font-bold ml-3 text-gray-800 tracking-wide')}>Sign in with Facebook</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={[styles.devider1, { marginTop: '10%' }]}>
            <View style={styles.devider2} />
            <Text style={styles.devider3}>OR</Text>
            <View style={styles.devider2} />
        </View>


            <Largebutton
              text="Sign in with Email"
              onPress={() => props.navigation.navigate("RegistrationShop")}
            />

            <View style={tailwind('flex flex-row justify-center mt-3')}>
                <Text style={tailwind('text-base font-medium text-slate-700 tracking-wide')}>Don’t have an account yet?</Text>

                <Largebutton
                  text="Start Livestream"
                  onPress={() => props.navigation.navigate("CreateAccountShop")}
                />
            </View>

        </View>

         </KeyboardAvoidingView>
    )
}
export default Golive
