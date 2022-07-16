import React, { useEffect, useRef, useState } from 'react';
import {
  Text, Image, View, ImageBackground, TouchableOpacity,
  SafeAreaView, ScrollView, Alert,
  Animated, KeyboardAvoidingView,
  Platform, Keyboard, StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../screens/common/styles';
import { Colors, CommonStrings } from '../../common';
import ImageIcons from '../../common/ImageIcons';
import InputField from '../../components/forms/inputField';
import { LinkButton, RoundedButton } from '../../components/forms/button';
import Loader from '../../components/modals/Loader';
import messaging from '@react-native-firebase/messaging';
import Video from 'react-native-video';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import 'react-native-get-random-values';
import { v4 as uuid } from "uuid";
import tw from 'twrnc';
import Medbutton from '../../components/dropshipbutton/Medbutton';
import AppIntroSlider from 'react-native-app-intro-slider';
import Logobase from '../../components/baseassests/Logobase';

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

  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const slides = [
    {
      key: 's1',
      text: 'A live-commerce marketplace for fashion and home goods. ',
      title: ImageIcons.logoredagain,
      image: ImageIcons.vedioplays,
    },
    {
      key: 's2',
      title: 'Flight Booking',
      text: 'Browse through videos and images of different products. Save your favourites.',
      image: ImageIcons.screen1,
    },
    {
      key: 's3',
      title: 'Great Offers',
      text: 'Create live-shops and advertise your products from the comfort of your own home or store.',
      image: ImageIcons.screen2,
    },
    {
      key: 's4',
      title: 'Best Deals',
      text: 'Create live-shops and advertise your products from the comfort of your own home or store.',
      image: ImageIcons.screen3,
    },

  ];


  useEffect(() => {
    animateLogo();
  }, [fadeAnim, transformAnim])

  useEffect(() => {
    getBrandUserId();

  }, [])

  useEffect(() => {
    requestUserPermission();
  }, [])

  useFocusEffect(() => {
    //getBrandUserId();
  })

  const getBrandUserId = async () => {
         var loginuserid = await AsyncStorage.getItem('UserId');
         if(loginuserid==null || loginuserid==undefined || loginuserid==""){
                //props.logoutreducerfun(uuid());
         }else {
            props.logoutreducerfun(loginuserid);
            props.navigation.navigate('watchlist');
         }
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
  const RenderItem = ({ item, index }) => {
    return (
      <View>
        {index == '0' ?
          <View style={tw.style('justify-center'),{ width, height}}>
            <Video source={item.image}  // Can be a URL or a local file.
              paused={false}
              repeat={true}
              resizeMode={"cover"}
              style={styles.backgroundVideo}
            />
            <View style={tw.style('items-center mt-[20%] mb-[10%]')}>
                <Logobase />
            </View>
            <View style={tw.style('items-center mt-[30%] mx-5')}>
              <Text style={tw.style('font-sans font-bold px-2 text-4xl text-white text-center')}>{item.text}</Text>
            </View>
          </View>
          :
          <View style={tw.style('h-10/11 bg-white')}>
            <View style={tw.style('flex flex-1 bg-white justify-center items-center')}>
              <View style={tw.style('flex-row h-90')}>
                <Image source={item.image} style={tw.style('')} />
              </View>
              <View style={tw.style('h-30')}></View>
              <View style={tw.style('flex-row mt-10 mx-4')}>
                <Text style={tw.style('px-4 text-2xl text-black text-center')}>{item.text}</Text>
              </View>
            </View>
          </View>

        }
      </View>
    );
  };


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
      {showRealApp ? (
        <SafeAreaView style={tw.style('flex flex-1')}>
          <View style={{ width, height, justifyContent: 'center' }}>
            <Video source={ImageIcons.vedioplays}  // Can be a URL or a local file.
              paused={false}
              repeat={true}
              resizeMode={"cover"}
              style={styles.backgroundVideo}
            />
            <View style={tw.style('items-center mt-[20%] mb-[10%]')}>
                <Logobase />
            </View>
            <View style={tw.style('mt-[15%] items-center mx-4')}>
              <Text style={tw.style('px-2 text-3xl font-bold text-white text-center')}>A live-commerce marketplace for fashion and home goods. </Text>
            </View>
            <View style={tw.style('items-center mt-6')}>
              <Image source={ImageIcons.bar1} style={{ height: 12, width: 104 }} />
            </View>
          </View>

        </SafeAreaView>
      ) : (

        <AppIntroSlider
          data={slides}
          dotStyle={{ backgroundColor: '#cccccc' }}
          renderItem={RenderItem}
          onDone={onDone}
          activeDotStyle={{ backgroundColor: '#B80000' }}
          showSkipButton={false}
          showNextButton={false}
          onSkip={onSkip}
          style={{backgroundColor: '#ffffff'}}
        />
      )}

      <View style={tw.style('absolute bottom-20 justify-center items-center w-full', {zIndex: 3001 })}>
        <View style={tw`w-32`}>
          <Medbutton
            text="Skip"
            onPress={() => navigation.navigate("Golive")} />
        </View>
      </View>

    </>
  );
};



export default Login
