import React, { useEffect, useRef, useState } from 'react';
import { Text, Image, View, ImageBackground, TouchableOpacity,
 SafeAreaView, ScrollView, Alert,
   Animated, KeyboardAvoidingView,
  Platform, Keyboard, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { Colors, CommonStrings } from '../../common';
import Smallbutton from '../../components/dropshipbutton/Smallbutton';
import ImageIcons from '../../common/ImageIcons';
import InputField from '../../components/forms/inputField';

import Loader from '../../components/modals/Loader';
import messaging from '@react-native-firebase/messaging';
import Video from 'react-native-video';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import 'react-native-get-random-values';
import { v4 as uuid } from "uuid";
import {useTailwind} from 'tailwind-rn';
import AppIntroSlider from 'react-native-app-intro-slider';


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
    const tailwind = useTailwind();

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
    image: ImageIcons.sliderimage1,
  },
  {
    key: 's3',
    title: 'Great Offers',
    text: 'Create live-shops and advertise your products from the comfort of your own home or store.',
    image: ImageIcons.newchange,
  },
  {
    key: 's4',
    title: 'Best Deals',
    text: 'Create live-shops and advertise your products from the comfort of your own home or store.',
    image: ImageIcons.sliderimage2,
  },

];

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
const RenderItem = ({item,index}) => {
    return (
        <View>
        { index =='0' ?
            <View style={tailwind('items-center min-h-full pt-28')}>
                <Video source={item.image}  // Can be a URL or a local file.
                    paused={false}
                    repeat={true}
                    resizeMode={"cover"}
                    style={styles.backgroundVideo}
                />
                  <View style={tailwind('items-center')}>
                    <Image source={item.title}  style={tailwind('w-40 h-32')}  />
                </View>
                <View style={tailwind('items-center mt-14')}>
                    <Text style={tailwind('px-2 text-3xl text-white text-center')}>{item.text}</Text>
                </View>
            </View>
        :
            <View>
                <View style={tailwind('flex justify-center')}>
                    <View style={tailwind('mt-14 mb-8 items-center')}>
                        <Image source={item.image}  style={tailwind('h-96 max-w-sm')} />
                    </View>
                    <View>
                        <Text style={tailwind('px-4 text-2xl text-black text-center')}>{item.text}</Text>
                    </View>
                </View>
            </View>

        }
        </View>
    );
  };


  return (
      <>
        {showRealApp ? (
        <SafeAreaView style={tailwind('flex flex-1')}>
            <View style={tailwind('items-center -z-[10]')}>
               <Video source={ImageIcons.vedioplays}  // Can be a URL or a local file.
                  paused={false}
                  repeat={true}
                  resizeMode={"cover"}
                  style={styles.backgroundVideo}
              />
                <View style={tailwind('mt-2 items-center')}>
                  <Image source={ImageIcons.logoredagain}  style={tailwind('w-40 h-32')}  />
              </View>
              <View style={tailwind('items-center')}>
                  <Text style={tailwind('px-2 text-3xl text-black text-center')}>A live-commerce marketplace for fashion and home goods. </Text>
            </View>
            </View>
               <View style={tailwind('items-center')}>
                <Image source={ImageIcons.bar1}  style={{height:12,width:104}}   />
            </View>
        </SafeAreaView>
        ) : (
          <View style={tailwind('flex-1')}>
            <StatusBar translucent backgroundColor="transparent" />
            <AppIntroSlider
              data={slides}
              dotStyle={{backgroundColor:'#cccccc'}}
              renderItem={RenderItem}
              activeDotStyle={{backgroundColor:'#B80000'}}
              showSkipButton={false}
              showNextButton={false}
              showDoneButton={false}
              onSkip={onSkip}
            />
            <View style={tailwind('justify-center items-center z-[5001] bottom-7 pt-8')}>
                <Smallbutton
                  text="Login"
                  onPress={() => props.navigation.navigate("Golive")}
                />
            </View>
          </View>
        )}
      </>
  );
};



export default Login
