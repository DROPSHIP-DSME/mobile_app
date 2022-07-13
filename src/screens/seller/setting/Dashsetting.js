import React, { useEffect,useRef, useState } from 'react';
import { Text, View,Image,TextInput, ImageBackground,FlatList,Picker,StatusBar,Dimensions,ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../../screens/auth/styles';
import newstyles from '../../../screens/auth/styles';
import { Colors, CommonStrings } from '../../../common'
import ImageIcons from '../../../common/ImageIcons'
import InputField from '../../../components/forms/inputField';
import { RoundedButton } from '../../../components/forms/button';
import { phoneRegExp } from '../../../services/helper';
import DropdownField from '../../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../../components/modals/Loader';
import Swipeout from 'react-native-swipeout';
import HorizontalSlider from 'react-horizontal-slider';
import Footer2 from '../../../screens/auth/Footer2';

import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Provider , Portal,} from 'react-native-paper';
import Modal from 'react-native-modal';
import tw from 'twrnc';
import Editbutton from '../../../components/pickers/Editbutton';
import { ArrowRightIcon } from "react-native-heroicons/solid";


import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const Dashsetting = (props) => {

     const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference
    const userId = props?.route?.params?.userId;
    const brandId = props?.route?.params?.brandId;

    useEffect(() => {
      props.getincomingtlist(props?.loginuserid);
      props.getselldeshboard(props?.loginuserid);
      props.gettopsell(props?.loginuserid,3);
      props.liveeventdetail(props?.loginuserid);
    }, [])

    useEffect(() => {
       getBrandUserId();
    }, [])

    useFocusEffect(() => {
        getBrandUserId();
     })

    const handleScroll=(pageYOffset)=>{
        if (pageYOffset > 0) {
            setshowclassName('#B80000');
        }else{
            setshowclassName('#B80000');
        }
    }

    const getBrandUserId = async () => {
        if(userId!="" && userId!=undefined){
            await AsyncStorage.setItem('UserId',userId);
            await AsyncStorage.setItem('userLogin',"1");
        }
    }

    // Local states
    const [showclassName, setshowclassName] = useState("#B80000");

    const deleetaccount = () => {
        return Alert.alert(
          "Are your sure?",
          "Are you sure you want to delete this account?",
          [
            // The "Yes" button
            {
              text: "Yes",
              onPress: () => {
                props.navigation.navigate("Login")
              },
            },
            // The "No" button
            // Does nothing but dismiss the dialog when tapped
            {
              text: "No",
            },
          ]
        );
    }



    return (
         <View style={{flex:1}}>
       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} >

               <View style={tw.style('flex flex-row justify-between mx-4 my-10')}>
                 <Text style={tw.style('text-3xl text-gray-700 font-bold tracking-wide')}>Settings</Text>
               </View>


              <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 mb-10')}>
                <View style={tw.style('px-2 py-8')}>

                    <View style={tw.style('flex flex-row justify-between px-4')}>
                        <Text style={tw.style('text-2xl font-bold text-gray-700')}>Brand Profile</Text>
                         <Editbutton navigation={props.navigation} page='Dashsetting' />
                    </View>

                    <View style={tw.style('flex flex-row justify-between py-4 px-4')}>
                        <Text style={tw.style('text-base font-medium text-gray-700')}>Brand Photo</Text>
                         <Image source={ImageIcons.colortodayshoe} style={tw.style('h-10 w-10 rounded-full')}/>
                    </View>
                    <View style={tw.style('flex flex-row justify-between py-4 px-4 border-t-2 border-gray-200')}>
                        <Text style={tw.style('text-base font-medium text-gray-700')}>Brand Name</Text>
                        <Text style={tw.style('mt-1 text-base text-gray-700 text-right w-7/12')}>Sneaker Store</Text>
                    </View>
                    <View style={tw.style('flex flex-row justify-between py-4 px-4 border-t-2 border-gray-200')}>
                        <Text style={tw.style('text-base font-medium text-gray-700')}>Category</Text>
                        <Text style={tw.style('mt-1 text-base text-gray-700 text-right w-7/12')}>Shoes</Text>
                    </View>
                    <View style={tw.style('flex flex-row justify-between py-4 px-4 border-t-2 border-gray-200')}>
                        <Text style={tw.style('text-base font-medium text-gray-700 basis-1/4')}>Description</Text>
                        <Text style={tw.style('mt-1 text-base text-gray-700 text-right w-7/12')}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard .</Text>
                    </View>
                </View>
              </View>


              <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 mt-8 mb-10')}>
                <View style={tw.style('px-2 py-8')}>

                    <View style={tw.style('flex flex-row justify-between px-4')}>
                        <Text style={tw.style('text-2xl font-bold text-gray-700')}>Account Settings</Text>
                    </View>

                    <TouchableOpacity  onPress={() => props.navigation.navigate("Dashimport")} style={tw.style('w-full')}>
                        <View style={tw.style('flex flex-row justify-between py-4 px-4')}>
                            <Text style={tw.style('text-base font-medium text-gray-700')}>Important Data</Text>
                             <ArrowRightIcon color="red" fill="gray" size={24} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={() => props.navigation.navigate("Dashsupport")} style={tw.style('w-full')}>
                        <View style={tw.style('flex flex-row justify-between py-4 px-4 border-t-2 border-gray-200')}>
                            <Text style={tw.style('text-base font-medium text-gray-700')}>Customer Support</Text>
                             <ArrowRightIcon color="red" fill="gray" size={24} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={() => deleetaccount() } style={tw.style('w-full')}>
                        <View style={tw.style('flex flex-row justify-between py-4 px-4 border-t-2 border-gray-200')}>
                            <Text style={tw.style('text-base font-medium text-gray-700')}>Delete Account</Text>
                             <ArrowRightIcon color="red" fill="gray" size={24} />
                        </View>
                    </TouchableOpacity>
                </View>
              </View>


               </ScrollView>
            <Footer2 />
        </View>
    )
}


export default Dashsetting
