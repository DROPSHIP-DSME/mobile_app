import React, { useEffect,useRef, useState } from 'react';
import { Text, View,Image,TextInput, ImageBackground,FlatList,Picker,StatusBar,Dimensions,ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard,ProgressBarAndroid} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../../screens/common/styles';
import newstyles from '../../../screens/common/styles';
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
import Footer2 from '../../../screens/common/Footer2';

import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Provider , Portal,} from 'react-native-paper';
import Modal from 'react-native-modal'
import tw from 'twrnc';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const Dashimport = (props) => {

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
    const [visible, setVisible] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const [showclassName, setshowclassName] = useState("#B80000");

    const openpopup = () => {
        setVisible(true)
    }

    const closepopup = () => {
        setVisible(false)
    }


    return (
         <View style={{flex:1}}>
         

       <ScrollView onScroll={({nativeEvent}) => { handleScroll(nativeEvent['contentOffset'].y); }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} >


                   <View style={tw.style('flex flex-row justify-between mx-4 mt-10 mb-4')}>
                     <Text style={tw.style('text-3xl text-gray-700 font-bold tracking-wide')}>Import Data</Text>
                   </View>

                   <View style={tw.style('mx-4 mt-3 mb-8')}>
                     <Text style={tw.style('text-lg text-gray-700')}>Import product data from other platforms.</Text>
                   </View>

                   <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4')}>
                     <View style={tw.style('flex flex-row px-2 py-5 justify-center')}>
                       <Image source={ImageIcons.shoptoday} style={tw.style('w-6 h-6 mr-2')}/>
                       <Text style={tw.style('text-base font-bold text-gray-700')}>Connect with Shopify</Text>
                     </View>
                   </View>

                   <View style={tw.style('bg-white overflow-hidden shadow rounded-md my-5 mx-4')}>
                     <View style={tw.style('flex flex-row px-2 py-5 justify-center')}>
                       <Image source={ImageIcons.commercetoday} style={tw.style('w-6 h-6 mr-2')}/>
                       <Text style={tw.style('text-base font-bold text-gray-700')}>Connect with Big Commerce</Text>
                     </View>
                   </View>

               </ScrollView>
           <Footer2 />
        </View>
    )
}
export default Dashimport
