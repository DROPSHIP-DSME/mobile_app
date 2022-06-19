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
import { Colors, CommonStrings } from '../../common';
import Smallbutton from '../../components/dropshipbutton/Smallbutton';
import BaseText from '../../components/BaseText';
import ImageIcons from '../../common/ImageIcons';

import InputField from '../../components/forms/inputField';
import { LinkButton, RoundedButton } from '../../components/forms/button';
import Loader from '../../components/modals/Loader';
import messaging from '@react-native-firebase/messaging';
import Video from 'react-native-video';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { v4 as uuid } from "uuid";
import { useTailwind } from 'tailwind-rn';


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
        // alert(loginuserid)
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


const RenderItem = ({item,index}) => {
    return (
        <View>
        { index =='0' ?
            <View style={{ width, height,justifyContent:'center' }}>
                <Video source={item.image}  // Can be a URL or a local file.
                    paused={false}
                    repeat={true}
                    resizeMode={"cover"}  
                    style={styles.backgroundVideo} 
                /> 
                  <View style={{alignItems:'center',marginTop:'25%',}}>
                    <Image source={item.title}  style={{width:145, height:117}}  />
                </View>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:'15%'}}>
                    <Text style={tailwind('px-2 text-3xl text-white text-center')}>{item.text}</Text>

                </View>
            </View>
        :
            <View style={{ width, height }}>
                <View style={{flex:1,backgroundColor:'#FFFFFF',justifyContent:'center'}}> 
                    <View style={styles.groupView}>
                        <Image source={item.image}  style={styles.groupimg} />
                    </View>
                    <View style={{marginVertical:'6%',marginHorizontal:'3%'}}>
                        <Text style={styles.grouptext}>{item.text}</Text>
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
      <SafeAreaView style={{ flex: 1 }}>
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
          </View>

      </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          dotStyle={{backgroundColor:'#cccccc'}}
          renderItem={RenderItem}
          onDone={onDone}
          activeDotStyle={{backgroundColor:'#b80000'}}
          showSkipButton={false}
          onSkip={onSkip}

        />
      )} 

      <View style={{ position:'absolute',zIndex:3001, bottom:70, justifyContent:'center',alignItems:'center',width:'100%'}}>
        <Smallbutton
          text="Login"
          onPress={() => props.navigation.navigate("Golive")}
        />
      </View>
    </>
  );
};
export default Login