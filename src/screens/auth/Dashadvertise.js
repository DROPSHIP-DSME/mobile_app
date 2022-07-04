import React, { useEffect,useRef, useState } from 'react';
import { Text, View,Image,TextInput, ImageBackground,FlatList,Picker,StatusBar,Dimensions,ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard,ProgressBarAndroid} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import newstyles from './styles';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import { phoneRegExp } from '../../services/helper';
import DropdownField from '../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../components/modals/Loader';
import Swipeout from 'react-native-swipeout';
import HorizontalSlider from 'react-horizontal-slider';
import Footer2 from '../../screens/auth/Footer2';
import SellHeader from '../../screens/auth/Sellheader';

import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Provider , Portal,} from 'react-native-paper';
import Modal from 'react-native-modal';
import tw from 'twrnc'
import Medbutton from '../../components/dropshipbutton/Medbutton';
import Largebutton from '../../components/dropshipbutton/Largebutton';


import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const Dashadvertise = (props) => {

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
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();
    const userId = props?.route?.params?.userId;
    const brandId = props?.route?.params?.brandId;



    useEffect(() => {
      props.getincomingtlist(props?.loginuserid);
      props.getselldeshboard(props?.loginuserid);
      props.gettopsell(props?.loginuserid,3);
      props.liveeventdetail(props?.loginuserid);
    }, [])

    useEffect(() => {
       // AsyncStorage.setItem('UserId','');
       // AsyncStorage.setItem('userLogin','');
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
    const [subMsg, onChangeText1] = React.useState("");
    const [msg, onChangeText2] = React.useState("");
    const [isModalVisible, setModalVisible] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [visible, setVisible] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const [showclassName, setshowclassName] = useState("#B80000");



    return (
         <View style={{flex:1}}>
    <View style={{padding:20,backgroundColor:'#B80000', height:'92%'}}>
 <Image source={ImageIcons.workinprogress} style={{width:'100%', height:250}} />
 </View>
      {/* <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} >

               <View style={tw.style('flex flex-row justify-between mx-4 mt-7')}>
                  <Text style={tw.style('text-2xl font-bold text-gray-700')}>Advertisements</Text>
               </View>

               <View style={tw.style('mx-4 mt-5')}>
                 <Text style={tw.style('text-lg')}>Select the parameters you would like to use for this advertisement and the total will adjust.</Text>
               </View>

              <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 my-7')}>
                <View style={tw.style('px-3 py-5')}>
                    <Text style={tw.style('text-lg text-gray-700')}>Total Cost of Advertisement</Text>

                    <Text style={tw.style('text-2xl font-bold text-gray-800 mb-4')}>US$35000</Text>
                    <Medbutton
                      text="Purchase Advertisment"
                    />
                </View>
              </View>

              <View style={tw.style('sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 mx-4')}>
                <View style={tw.style('mt-1 sm:mt-0 sm:col-span-2 ')}>
                  <View style={tw.style('my-3 max-w-fit block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 bg-gray-200 rounded-md')}>
                    <Text style={tw.style('mt-3 mx-2 mb-[-12] font-sm font-sm text-gray-700')}>
                      Type of advertisment
                    </Text>
                      <Picker
                        selectedValue={selectedValue}
                        style={tw.style('w-10/11 bg-gray-500')}
                        onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                       >
                        <Picker.Item label="Banner" value="1" />
                        <Picker.Item label="United States" value="2" />
                        <Picker.Item label="Canada" value="3" />
                        <Picker.Item label="Mexico" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8" value="8" />
                        <Picker.Item label="9" value="9" />
                      </Picker>
                    </View>
                </View>
              </View>

            <View style={tw.style('sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 mx-4')}>
              <View style={tw.style('mt-1 sm:mt-0 sm:col-span-2 ')}>
                  <View style={tw.style('my-3 max-w-fit block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 bg-gray-200 rounded-md')}>
                    <Text style={tw.style('mt-3 mx-2 mb-[-12] font-sm font-sm text-gray-700')}>
                      Country
                    </Text>
                        <Picker
                          selectedValue={selectedValue}
                          style={tw.style('w-10/11 bg-gray-500')}
                          onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                         >
                          <Picker.Item label="Select Country" value="1" />
                          <Picker.Item label="United States" value="2" />
                          <Picker.Item label="Canada" value="3" />
                          <Picker.Item label="Mexico" value="4" />
                          <Picker.Item label="5" value="5" />
                          <Picker.Item label="6" value="6" />
                          <Picker.Item label="7" value="7" />
                          <Picker.Item label="8" value="8" />
                          <Picker.Item label="9" value="9" />
                        </Picker>
                      </View>
                  </View>
                </View>


              <View style={tw.style('sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 mx-4')}>
                <View style={tw.style('mt-1 sm:mt-0 sm:col-span-2 ')}>
                    <View style={tw.style('my-3 max-w-fit block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 bg-gray-200 rounded-md')}>
                      <Text style={tw.style('mt-3 mx-2 mb-[-12] font-sm font-sm text-gray-700')}>
                        Advertisment Location
                      </Text>
                        <Picker
                          selectedValue={selectedValue}
                          style={tw.style('w-10/11 bg-gray-500')}
                          onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                         >
                          <Picker.Item label="Homepage" value="1" />
                          <Picker.Item label="United States" value="2" />
                          <Picker.Item label="Canada" value="3" />
                          <Picker.Item label="Mexico" value="4" />
                          <Picker.Item label="5" value="5" />
                          <Picker.Item label="6" value="6" />
                          <Picker.Item label="7" value="7" />
                          <Picker.Item label="8" value="8" />
                          <Picker.Item label="9" value="9" />
                        </Picker>
                      </View>
                  </View>
                </View>

                <View style={tw.style('sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 mx-4')}>
                  <View style={tw.style('mt-1 sm:mt-0 sm:col-span-2 ')}>
                      <View style={tw.style('my-3 max-w-fit block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 bg-gray-200 rounded-md')}>
                        <Text style={tw.style('mt-3 mx-2 mb-[-12] font-sm font-sm text-gray-700')}>
                          What are you advertising
                        </Text>
                        <Picker
                          selectedValue={selectedValue}
                          style={tw.style('w-10/11 bg-gray-500')}
                          onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                         >
                          <Picker.Item label="The store" value="1" />
                          <Picker.Item label="United States" value="2" />
                          <Picker.Item label="Canada" value="3" />
                          <Picker.Item label="Mexico" value="4" />
                          <Picker.Item label="5" value="5" />
                          <Picker.Item label="6" value="6" />
                          <Picker.Item label="7" value="7" />
                          <Picker.Item label="8" value="8" />
                          <Picker.Item label="9" value="9" />
                        </Picker>
                      </View>
                  </View>
                </View>


               <View style={tw.style('mt-10 mx-4')}>
                 <Text style={tw.style('text-lg text-gray-700')}> Budget $5 daily</Text>
                  <View style={tw.style('bg-gray-200 w-fit px-3 rounded-md')}>
                  <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.3}
                    padding={15}
                    marginHorizontal={5}
                    color='#b80000'
                  />
                  </View>
                </View>

                <View style={tw.style('mt-10 mx-4')}>
                  <Text style={tw.style('text-lg text-gray-700')}>Duration 7 Days</Text>
                   <View style={tw.style('bg-gray-200 w-fit px-3 rounded-md')}>
                   <ProgressBarAndroid
                     styleAttr="Horizontal"
                     indeterminate={false}
                     progress={0.6}
                     padding={15}
                     marginHorizontal={5}
                     color='#b80000'
                   />
                   </View>
                 </View>

                 <View style={tw.style('mt-15 mb-30')}>
                    <Largebutton
                    text="Preview Advertisment" />
                </View>
               </ScrollView>*/}

                 <Footer2 />

          </View>

    )
}


export default Dashadvertise
