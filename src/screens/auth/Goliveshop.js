import React, { useEffect,useRef, useState } from 'react';
import { Text, View,TextInput,
 ImageBackground,Image,
  ScrollView,TouchableOpacity, 
 Alert, StatusBar, 
  KeyboardAvoidingView,
   Platform,Keyboard} from 'react-native';
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
import { RadioButton ,Provider ,Modal, Portal, Button,} from 'react-native-paper';

import { v4 as uuid } from "uuid";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { WebView, WebViewNavigation } from 'react-native-webview';

const onNavigationStateChange = (props,navigationState: WebViewNavigation) => {
    const urlString = navigationState.url;
    console.log('urlString',urlString)
    if(urlString.includes("personal")){
        var newsstring = urlString.replace("https://accounts.shopify.com/accounts/", "")
        var  setstring = newsstring.replace("/personal", "")
        let request = {
            "phone": setstring
        }
        props.shopsignupphone(request, props.navigation, "user",'shop1');
       // https://accounts.shopify.com/accounts/164080310/personal
    }
};

const onNavigationStateChange1 = (props,navigationState: WebViewNavigation) => {
    const urlString = navigationState.url;
    console.log('urlString',urlString)
    if(urlString.includes("redirects/stores")){
        var newsstring = urlString.replace("https://login.bigcommerce.com/redirects/stores/", "")
        let request = {
            "phone": newsstring
        }
        props.shopsignupphone(request, props.navigation, "user",'shop1');
    }
    //https://login.bigcommerce.com/redirects/stores/9ie0jyjqsv
};

const onNavigationStateChange2 = (props,navigationState: WebViewNavigation) => {
    const urlString = navigationState.url;
    console.log('urlString',urlString)
    if(urlString.includes("people")){
        var newsstring = urlString.replace("https://www.etsy.com/people/", "")
        var setstring = newsstring.substring(0, 8)
        let request = {
            "phone": setstring
        }
        props.shopsignupphone(request, props.navigation, "user",'shop1')
    }
   // https://www.etsy.com/people/g6wcytmj?ref=hdr_user_menu-profile
};


const Goliveshop = (props) => {
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

    
    const [Email, onChangeEmail] = React.useState("");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("");
    const [Street, onChangeStreet] = React.useState("");
    const [Zip, onChangeZip] = React.useState("");
    const [City, onChangeCity] = React.useState("");
    const [Country, onChangeCountry] = React.useState("");
    const [showshopify, setshowshopify] = React.useState(false);
    const [showbigcommerce, setshowbigcommerce] = React.useState(false);
    const [showsetsy, setshowsetsy] = React.useState(false);
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
         //AsyncStorage.setItem('UserId',uuid());
         //AsyncStorage.setItem('userLogin',"0"); 
         GoogleSignin.configure();

    }, [])

    const googlesignin = async () => {
        try {      
          await GoogleSignin.hasPlayServices();
          var userInfo = await GoogleSignin.signIn();
          console.log('userInfo:',userInfo) 
        } catch (error) {
            props.navigation.navigate('Registration')
            console.log('google sign error:', error) 
        }
    }
    

    const shopifylogin = async () => {
        setshowshopify(true)
    }

    const bigcommercelogin = async () => {
        setshowbigcommerce(true)
    }

    const etsylogin = async () => {
        setshowsetsy(true)
    }
    //const [register, setRegister] = React.useState(true);
    const [store, setStore] = React.useState(true);
   
    const showregister =()=>{

        setStore(false)
    }
    
    return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.registrationRoot}>
         <StatusBar backgroundColor={'#ffffff00'} barStyle="dark-content" translucent={true} />
         <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} >

        

        <View style={{marginTop:'3%',marginHorizontal:'3%',}}>
            <View style={[styles.heading,{marginTop:'15%',marginBottom:0}]}>
        <Image source={ImageIcons.logored_1} style={styles.setlogonewdata}  />
    </View>

                
        <View style={{justifyContent:'center',marginHorizontal:'3%',marginTop:'10%'}}>
            <Text style={styles.LIVEpeopleshop}>People buy more when they can see a product, live!</Text>
        </View>

        <View style={{marginHorizontal:'3%',marginTop:'3%'}}>
            <Text style={[styles.textexp,{}]}>Start a livestream now and see your product sell fast.</Text>
        </View>
        <View style={{alignItems:'center',marginTop:'5%'}}>
            <Text style={styles.textexpext}>Import Existing Store</Text>
        </View>
    {store == false &&
        <View>
            <View style={{alignItems:'center',marginTop:'5%'}}>
                <TouchableOpacity
                    style={styles.Touchablereview}
                    activeOpacity = { .5}
                    onPress={() => shopifylogin()}>
                    <View style={{alignItems:'center',padding:10}}>
                        <Text style={[styles.startbutton1,{fontSize:18,marginLeft:25,color:'#000000'}]}>Register as a Seller</Text>
                        <Text style={[styles.proregultxt,{textAlign:'center',width:150}]}>Sell personal goods or products</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{alignItems:'center',marginTop:'5%'}}>
                <TouchableOpacity
                    style={styles.Touchablereview}
                    activeOpacity = { .5}
                    onPress={() => shopifylogin()}>
                    <View style={{alignItems:'center',padding:10}}>
                        <Text style={[styles.startbutton1,{fontSize:18,marginLeft:25,color:'#000000'}]}>Register as a Seller</Text>
                        <Text style={[styles.proregultxt,{textAlign:'center',width:150}]}>Sell personal goods or products</Text>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={{alignItems:'center',marginVertical:'8%'}}>
                <TouchableOpacity
                    style={styles.Touchablestarttextnew}
                    activeOpacity = { .5}
                    onPress={() => alert('Coming Soon!')}>
                        <Text style={[styles.startbutton1,{fontSize:16,marginLeft:10,marginTop:5,color:'#000000'}]}>Are you a brand?</Text>
                </TouchableOpacity>
            </View>
        </View>
    }
    {store == true &&
        <View>
            <View style={{alignItems:'center',marginTop:'5%'}}>
                <TouchableOpacity
                    style={styles.Touchablestarttextnew}
                    activeOpacity = { .5}
                    onPress={() => shopifylogin()}>
                    <View style={{flexDirection:'row', justifyContent:'center',padding:10}}>
                        <Image source={ImageIcons.shopify} style={{ width:20,height:20}} />
                        <Text style={[styles.startbutton1,{fontSize:13,marginLeft:25,color:'#000000'}]}>CONTINUE WITH SHOPIFY</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{alignItems:'center',marginVertical:'4%'}}>
                <TouchableOpacity
                    style={styles.Touchablestarttextnew}
                    activeOpacity = { .5}
                    onPress={() => bigcommercelogin()}>
                    <View style={{flexDirection:'row',  justifyContent:'center',padding:10}}>
                        <Image source={ImageIcons.bigcommerce} style={{ width:25,height:23,}} />
                        <Text style={[styles.startbutton1,{fontSize:13,marginLeft:20,color:'#000000'}]}>CONTINUE WITH BIG COMMERCE</Text>
                    </View>
                </TouchableOpacity>
            </View> 

            <View style={{alignItems:'center',marginVertical:'4%'}}>
                <Text style={[styles.startbutton1,{marginLeft:25,color:'#000000'}]}>OR</Text>
            </View>

            <View style={{alignItems:'center',marginVertical:'4%'}}>
                <TouchableOpacity
                    style={styles.Touchablestarttextnew}
                    activeOpacity = { .5}
                    onPress={() => showregister()}>
                        <Text style={[styles.startbutton1,{fontSize:13,marginLeft:10,marginTop:5,color:'#000000'}]}>Create a new store</Text>
                </TouchableOpacity>
            </View>
        </View>
    }
    </View> 
</ScrollView>

    { (showshopify==true)  &&
        <Provider>
        <Portal>
         <WebView
             source={{
               uri: 'https://accounts.shopify.com/lookup?rid=7d9549c2-f05b-4afe-8665-85c7d47e9f8d',
            }}
            onNavigationStateChange={navigationState=>onNavigationStateChange(props,navigationState)}
            startInLoadingState
            scalesPageToFit
            javaScriptEnabled
            style={{ flex:3}}
           />
        </Portal>
        </Provider>
    }


    { (showbigcommerce==true)  &&
        <Provider>
        <Portal>
         <WebView
             source={{
               uri: 'https://login.bigcommerce.com/login?_gl=1*3adcgz*_ga*MTIxODk1OTM1Ny4xNjQxMzc2MzE1*_ga_WS2VZYPC6G*MTY0MjY5NzEzOC4yLjAuMTY0MjY5NzEzOC42MA..&_ga=2.174267618.1719631452.1642697139-1218959357.1641376315',
            }}
            onNavigationStateChange={navigationState=>onNavigationStateChange1(props,navigationState)}
            startInLoadingState
            scalesPageToFit
            javaScriptEnabled
            style={{ flex:3}}
           />
        </Portal>
        </Provider>
    }

    { (showsetsy==true)  &&
        <Provider>
        <Portal>
         <WebView
             source={{
               uri: 'https://www.etsy.com/in-en',
            }}
            onNavigationStateChange={navigationState=>onNavigationStateChange2(props,navigationState)}
            startInLoadingState
            scalesPageToFit
            javaScriptEnabled
            style={{ flex:3,marginTop:50}}
           />
        </Portal>
        </Provider>
    }

        </KeyboardAvoidingView>
    )
}



export default Goliveshop