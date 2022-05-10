import React, { useEffect, useRef, useState } from 'react';
import { Text, Image, View, ImageBackground,TouchableOpacity,
 SafeAreaView, ScrollView, Alert, 
   Animated, KeyboardAvoidingView,
  Platform, Keyboard, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { LinkButton, RoundedButton } from '../../components/forms/button';
import Loader from '../../components/modals/Loader';
import messaging from '@react-native-firebase/messaging';
import Video from 'react-native-video';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { v4 as uuid } from "uuid";

const Login = (props) => {  

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
        setFieldValue
    } = props;

    //Reference
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    // Local states
    const Reactdim = require('react-native');
    const { Dimensions } = Reactdim;
    const { width, height } = Dimensions.get('window');

    const [isShowPassword, setIsShowPassword] = useState(true);
    const [rememberMe, setRememberMe] = useState(false)
    const [refreshFiled, setRefreshFiled] = useState(false)
    const [deviceToken, setDeviceToken] = useState();

    // Animation references
    const fadeAnim = useRef(new Animated.Value(0)).current
    const transformAnim = useRef(new Animated.Value(300)).current
    


    useEffect(() => {
        animateLogo();
    }, [fadeAnim, transformAnim])
 
    useEffect(() => { 
       // alert(props?.loginuserid)
         if(props?.loginuserid==null || props?.loginuserid==undefined){
                props.logoutreducerfun(uuid()); 
         }
         
    }, [])

    useEffect(() => { 
        requestUserPermission();
    }, [])

     useFocusEffect(() => {
        //getBrandUserId();
     })

    const getBrandUserId = async () => {
         await AsyncStorage.setItem('UserId','');
         await AsyncStorage.setItem('userLogin',"");
    }

    // Animation 
    const animateLogo = () => {
        Animated.parallel([
            Animated.timing(
                fadeAnim,
                {
                    toValue: 1,
                    duration: 1500,
                    useNativeDriver: true
                },

            ),
            Animated.timing(
                transformAnim,
                {
                    toValue: 0,
                    duration: 1500,
                    useNativeDriver: true
                },

            )
        ]).start()
    }

    // Get device token
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

    // Login request submision 
    const handleLoginSubmit = async () => {
        Keyboard.dismiss();
        if (errors.email) {
            Alert.alert(CommonStrings.AppName, errors.email)
        } else if (errors.password) {
            Alert.alert(CommonStrings.AppName, errors.password)
        } else {
           
            let request = {
                "email": values.email,
                "password": values.password,
                "deviceToken": deviceToken,
                // "isWallPon":false
            }
            props.login(request)
        }
    }


    return (
        // <View style={styles.registrationRoot}>
        //     <StatusBar backgroundColor={'#B80000'} barStyle="dark-content" translucent={true} /> 

        //      <View style={{ position:'absolute', top:25, left: 0, zIndex:1001}}>
        //          <Image source={ImageIcons.videologo} />
        //     </View>
        //     <Video source={ImageIcons.vedioplays}  // Can be a URL or a local file.
        //         paused={false}
        //         repeat={true}
        //         resizeMode={"cover"}  
        //         style={styles.backgroundVideo} 
        //     />

               
        //         <View style={{alignItems:'center',marginTop:'90%'}}>
        //             <TouchableOpacity
        //                 style={styles.Touchableselltext}
        //                 activeOpacity = { .5}
        //                 onPress={() => props.navigation.navigate("Golive")}>
        //                 <Text style={styles.sellbutton}>Go to Shop</Text>
        //             </TouchableOpacity>
        //         </View>
        //         <View style={{alignItems:'center',marginTop:'5%'}}>
        //             <TouchableOpacity
        //                 style={styles.TouchableOpacitytext}
        //                 activeOpacity = { .5}
        //                 onPress={() => props.navigation.navigate("Goliveshop")}>
        //                 <Text style={styles.homecontinuebutton}>Start selling live</Text>
        //             </TouchableOpacity>
        //        </View>

        //         <View style={styles.twotextview}>
        //             <Text style={styles.alreadytext}>Already have an account ?</Text>
        //             <TouchableOpacity onPress={() => props.navigation.navigate("RegistrationShop")} >
        //                 <Text style={styles.alreadytextlogin}> Log In</Text>
        //             </TouchableOpacity>
        //         </View>
        // </View>
        <>
         <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
        >
          <View style={{ width, height,justifyContent:'center' }}>
             <Video source={ImageIcons.vedioplays}  // Can be a URL or a local file.
                paused={false}
                repeat={true}
                resizeMode={"cover"}  
                style={styles.backgroundVideo} 
            /> 
              <View style={{alignItems:'center',marginTop:'25%',}}>
                <Image source={ImageIcons.logoredagain}  style={{width:145, height:117}}  />
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:'15%'}}>
                <Text style={styles.goodtext}>A live-commerce marketplace for fashion and home goods. </Text>
            </View>
               <View style={{alignItems:'center',marginTop:'35%'}}>
                <Image source={ImageIcons.bar1}  style={{height:12,width:104}}   />
            </View>
           
            <TouchableOpacity style={styles.skipviewtoday} onPress={() => navigation.navigate("Golive")} >
               <Text style={styles.skiptext}>SKIP</Text>
            </TouchableOpacity>
          </View>


          <View style={{ width, height,justifyContent:'center' }}>
             <TouchableOpacity style={{flex:1,backgroundColor:'#FFFFFF',justifyContent:'center'}}> 
        <View style={styles.groupView}>
            <Image source={ImageIcons.redbox}  />
            <Image source={ImageIcons.shoesbox} style={styles.shoesboximg} />
            <Image source={ImageIcons.whitesneaker} style={styles.shoeswhiteimg} />
            <Image source={ImageIcons.like} style={{position:'absolute',width:11,height:10,right:'18%'}} />
            <Image source={ImageIcons.like} style={{position:'absolute',width:11,height:10,right:'14%',top:'6%'}} />
            <View style={{position:'absolute',right:47,marginTop:'6%'}}>
               <Image source={ImageIcons.likecircle}  style={{}}/>
               <Image source={ImageIcons.like}  style={{width:20,height:19,position:'absolute',alignSelf:'center',top:29}}/>
            </View>
        </View>
        <View style={{marginTop:'15%',marginHorizontal:'4%'}}>
            <Text style={styles.grouptext}>Browse through videos and images of different products. Save your favourites.</Text>
        </View>

         <View style={{alignItems:'center',marginTop:'25%',}}>
                <Image source={ImageIcons.bar2today} style={{height:12,width:104}}   />
            </View>
       
        <TouchableOpacity style={styles.skipview} onPress={() => navigation.navigate("Golive")} >
           <Text style={styles.skiptext}>SKIP</Text>
        </TouchableOpacity>
    </TouchableOpacity>
          </View>


          <View style={{ width, height }}>
            <TouchableOpacity onPress={() => navigation.navigate("SaleOnboard")} style={{flex:1,backgroundColor:'#FFFFFF',justifyContent:'center'}}> 
        <View style={styles.groupView}>
            <Image source={ImageIcons.newchange}  style={styles.groupimg} />
        </View>
        <View style={{marginVertical:'6%',marginHorizontal:'3%'}}>
            <Text style={styles.grouptext}>Create live-shops and advertise your products from the comfort of your own home or store.</Text>
        </View>
         <View style={{alignItems:'center',marginTop:'15%'}}>
                <Image source={ImageIcons.bar3today}  style={{height:12,width:104}}   />
            </View>
        
        <TouchableOpacity style={styles.skipview} onPress={() => navigation.navigate("Golive")} >
           <Text style={styles.skiptext}>SKIP</Text>
        </TouchableOpacity>
    </TouchableOpacity>
          </View>


          <View style={{ width, height }}>
           <View style={{flex:1,backgroundColor:'#FFFFFF',paddingTop:'10%',justifyContent:'center'}}> 
        <View style={styles.groupView}>
            <Image source={ImageIcons.redbox}   />
            <Image source={ImageIcons.sales} style={{position:'absolute',left:"-4%",bottom:10}} />
            <Image source={ImageIcons.totalincome} style={{position:'absolute',right:0}} />
        </View>
        <View style={{marginTop:'15%',marginHorizontal:'3%'}}>
            <Text style={styles.grouptext}>Create live-shops and advertise your products from the comfort of your own home or store.</Text>
        </View>
         <View style={{alignItems:'center',marginTop:'15%'}}>
                <Image source={ImageIcons.bar4today}  style={{height:12,width:104}}   />
            </View>
       
        <TouchableOpacity style={styles.skipview} onPress={() => navigation.navigate("Golive")} >
           <Text style={styles.skiptext}>LOGIN</Text>
        </TouchableOpacity>
    </View>
          </View>
          
        </ScrollView>
      </SafeAreaView>
      </>
    )
}


export default Login