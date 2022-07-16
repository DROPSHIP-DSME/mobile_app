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
import AwesomeAlert from '../../components/modals/AlertModal';
import { LoginManager } from "react-native-fbsdk-next";
import Logobase from '../../components/baseassests/Logobase';



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
    const [showotherAlert, setshowotherAlert] = React.useState(false);
    const [showalertmsg, setshowalertmsg] = React.useState('');

    useEffect(() => {
        props.countrylist();
         AsyncStorage.setItem('UserId','');
         //AsyncStorage.setItem('userLogin',"0");
         //GoogleSignin.configure();
         GoogleSignin.configure({
            webClientId: '512487199242-cp48gba87neibcgvoo98i8tca01tr0i0.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        });
        //requestUserPermission();
    }, [])

    // const googlesignin = async () => {
    //     try {

    //       await GoogleSignin.hasPlayServices();
    //       var userInfo = await GoogleSignin.signIn();
    //       console.log('userInfo:',userInfo)
    //       props.navigation.navigate('watchlist')
    //     } catch (error) {
    //         //alert('Dropship has not updated on stores yet, please upload app on stores to proceed')
    //         //props.navigation.navigate('watchlist')
    //         console.log('google sign error:', error)
    //     }
    // }

    const googleSignIn = async () => {
        try {
            await GoogleSignin.signOut();
            const userInfo = await GoogleSignin.signIn();
            //alert('LOGIN_SUCCESS')
            setshowotherAlert(true)
            setshowalertmsg('Work is in progress')
        } catch (error) {
            setshowotherAlert(true)
            setshowalertmsg('Work is in progress')
        }
    }

    const facebookSignIn = async () => {
        setshowotherAlert(true)
        setshowalertmsg('Work is in progress')

        // LoginManager.logInWithPermissions(["public_profile", "email"]).then(
        //     function (result) {
        //         if (result.isCancelled) {
        //             console.log("Login cancelled");
        //         } else {
        //             console.log("Login Success ", JSON.stringify(result));
        //         }
        //     },
        //     function (error) {
        //         alert('sdfsd')
        //         console.log("Login fail with error: " + error);
        //     }
        // );
    }



    return (
         <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
             <StatusBar backgroundColor={'#ffffff00'} barStyle="dark-content" translucent={true} />
        <View style={{backgroundColor:'#ffffff',flex:1}}>

          <View style={tw.style('items-center mt-[20%] mb-[10%]')}>
              <Logobase />
          </View>

            <AwesomeAlert showotherAlert={showotherAlert} showalertmsg={showalertmsg} onSelect={(checked) => setshowotherAlert(checked)} />

          <View style={tw.style('items-center mt-12')}>
              <TouchableOpacity
                  style={tw.style('w-10/11 h-16 bg-white justify-center text-center rounded-full border border-slate-400 shadow-sm')}
                  activeOpacity = { .5}
                  onPress={() => googleSignIn()}>
                  <View style={tw.style('flex flex-row justify-center items-center')}>
                      <Image source={ImageIcons.googleicon} style={tw.style('w-8 h-8')} />
                      <Text style={tw.style('text-lg font-bold ml-3 text-gray-800 tracking-wide')}>Sign in with Google</Text>
                  </View>
              </TouchableOpacity>
          </View>
          <View style={tw.style('mt-4 items-center')}>
              <TouchableOpacity
                  style={tw.style('w-10/11 h-16 bg-white justify-center text-center rounded-full border border-slate-400 shadow-sm ')}
                  activeOpacity = { .5}
                  onPress={() => facebookSignIn()}>
                  <View style={tw.style('flex flex-row justify-center items-center')}>
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
