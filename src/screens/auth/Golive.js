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
import styles from '../../screens/common/styles';
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
import { v4 as uuid } from "uuid";
import tw from 'twrnc';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import ModalSelector from 'react-native-modal-selector';
import { useTailwind } from 'tailwind-rn';



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
         AsyncStorage.setItem('UserId','');
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

          <View style={tw.style('items-center my-16')}>
                <TouchableOpacity onPress={() => props.navigation.navigate("CreateAccountShop")}>
                    <Image source={ImageIcons.logored_1} style={styles.setlogonewdatarow}  />
                </TouchableOpacity>
          </View>
          <View style={tw.style('items-center mt-12')}>
              <TouchableOpacity
                  style={tw.style('w-10/11 h-16 bg-white justify-center text-center rounded-lg border border-slate-400 shadow-sm')}
                  activeOpacity = { .5}
                  onPress={() => navigation.navigate('watchlist')}>
                  <View style={tw.style('flex flex-row justify-center')}>
                      <Image source={ImageIcons.googleicon} style={tw.style('w-8 h-8')} />
                      <Text style={tw.style('text-lg font-bold ml-3 text-gray-800 tracking-wide')}>Sign in with Google</Text>
                  </View>
              </TouchableOpacity>
          </View>
          <View style={tw.style('mt-4 items-center')}>
              <TouchableOpacity
                  style={tw.style('w-10/11 h-16 bg-white justify-center text-center rounded-lg border border-slate-400 shadow-sm ')}
                  activeOpacity = { .5}
                  onPress={() => bigcommercelogin()}>
                  <View style={tw.style('flex flex-row justify-center')}>
                      <Image source={ImageIcons.facebook} style={tw.style('w-5 h-9')} />
                      <Text style={tw.style('text-lg font-bold ml-3 mt-1 text-gray-800 tracking-wide')}>Sign in with Facebook</Text>
                  </View>
              </TouchableOpacity>
          </View>

        <View style={[styles.devider1, { marginTop: '10%' }]}>
            <View style={styles.devider2} />
            <Text style={styles.devider3}>OR</Text>
            <View style={styles.devider2} />
        </View>

            <View style={tw`mx-5`}>
            <Largebutton
              text="Sign in with Email"
              onPress={() => props.navigation.navigate("RegistrationShop")}
            />
            </View>
            <View style={tw.style('flex flex-row justify-center mt-3')}>
                <Text style={tw.style('text-base text-gray-700 tracking-wide')}>Don’t have an account yet?</Text>

                <TouchableOpacity style={tw.style('w-auto')} onPress={() => props.navigation.navigate("CreateAccountShop")}>
                    <Text style={tw.style('text-base text-red-800 items-center tracking-wide')}> Sign up here.</Text>
                </TouchableOpacity>
            </View>

        </View>

         </KeyboardAvoidingView>
    )
}
export default Golive
