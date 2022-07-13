import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Image, TextInput, ImageBackground, FlatList, Picker, StatusBar, Dimensions, ScrollView, Alert, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, ProgressBarAndroid } from 'react-native';
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
import { Provider, Portal, } from 'react-native-paper';
import Modal from 'react-native-modal';
import tw from 'twrnc';
import Editbutton from '../../../components/pickers/Editbutton';
import Deletebutton from '../../../components/pickers/Deletebutton';
import Largebutton from '../../../components/dropshipbutton/Largebutton';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import Smallbutton from '../../../components/dropshipbutton/Smallbutton';


const Dashaccount = (props) => {

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
    props.gettopsell(props?.loginuserid, 3);
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

  const ratingCompleted = (ratingdata) => {
    console.log('rating', ratingdata)
    if (ratingdata != "" && ratingdata != undefined) {
      //setstarCount(ratingdata)
    }

  }

  const handleScroll = (pageYOffset) => {
    if (pageYOffset > 0) {
      setshowclassName('#B80000');
    } else {
      setshowclassName('#B80000');
    }
  }

  const getBrandUserId = async () => {
    if (userId != "" && userId != undefined) {
      await AsyncStorage.setItem('UserId', userId);
      await AsyncStorage.setItem('userLogin', "1");
    }
  }

  const golivepage = async () => {
    props.liveeventdetail(props?.loginuserid);
    setTimeout(function () { props.navigation.navigate("StartRecording", { userId: userId }) }, 500)
  }
  // Local states
  const [subMsg, onChangeText1] = React.useState("");
  const [msg, onChangeText2] = React.useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [showclassName, setshowclassName] = useState("#B80000");


  const openpopup = () => {
    setVisible(true)

  };
  const closepopup = () => {
    setVisible(false)
  }




  const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };


  const DATA3 = [
    {
      image: ImageIcons.girlcent,
      text: "25 - 01 - 22 ",
      text1: "CRDB Bank Limited (8391) ",
      text2: "$1,000.00",
    },
    {
      image: ImageIcons.girlcent,
      text: "25 - 01 - 22 ",
      text1: "CRDB Bank Limited (8391)",
      text2: "$1,000.00",
    },
    {
      image: ImageIcons.girlcent,
      text: "25 - 01 - 22 ",
      text1: "CRDB Bank Limited (8391)",
      text2: "$1,000.00",
    },
    {
      image: ImageIcons.girlcent,
      text: "25 - 01 - 22 ",
      text1: "CRDB Bank Limited (8391) ",
      text2: "$1,000.00",
    },
    {
      image: ImageIcons.girlcent,
      text: "25 - 01 - 22 ",
      text1: "CRDB Bank Limited (8391)",
      text2: "$1,000.00",
    },



  ];







  const renderItem3 = ({ item, index }) => {
    return (

      <View>

        <TouchableOpacity onPress={() => openpopup()} style={tw`flex flex-row justify-between mt-3`}>

          <Text style={tw`text-base font-bold text-gray-700`}>{item.text}</Text>

          <Text style={tw`text-base font-bold text-gray-700`}>{item.text1}</Text>
          <Text style={tw`text-base font-bold text-gray-700`}>{item.text2}</Text>
        </TouchableOpacity>

      </View>
    );
  }



  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#B80000'} barStyle="dark-content" translucent={true} />
      

      <ScrollView onScroll={({ nativeEvent }) => {
        handleScroll(nativeEvent['contentOffset'].y);
      }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#f2f2f2' }} >

        <TouchableOpacity style={tw`flex flex-row justify-between mx-4 mt-8`}>
          <Text style={tw`text-3xl text-gray-700`}>My Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex flex-row justify-between mx-4 mt-8`}>
          <Text style={tw`text-lg text-gray-600`}>Account Balance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`mx-4 mt-1`}>
          <Text style={tw`text-base text-gray-600`}>Monitor your current account balance.</Text>
        </TouchableOpacity>

        <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 mt-8 p-3')}>
          <Text style={tw.style('text-xl text-gray-500')}>Account Balance</Text>

          <Text style={tw`text-3xl font-bold text-gray-800 mt-3`}>US $0</Text>
          <View style={tw`w-6/11 mt-5`}>
            <Smallbutton text="Withdraw Money" onPress={() => props.navigation.navigate("Dashwith")}></Smallbutton>
          </View>
        </View>

        <TouchableOpacity style={tw`flex flex-row justify-between mx-4 mt-12`}>
          <Text style={tw`text-2xl text-red-700`}>Bank Balance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`mt-2 mx-4`}>
          <Text style={{ fontSize: 18, fontFamily: 'hinted-AvertaStd-Regular', color: '#1a1a1a' }}>Edit your associated bank account for withdrawals.</Text>
        </TouchableOpacity>


        <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 mt-8 px-3 py-5')}>

              <View style={tw`flex flex-row justify-between`}>
                <TouchableOpacity style={tw`items-center px-2.5 py-3 border border-transparent rounded bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
                  <Text style={tw`text-xs font-medium text-indigo-700`}>DEFAULT BANK ACCOUNT</Text>
                </TouchableOpacity>
                <View style={tw`flex flex-row`}>
                  <Editbutton navigation={props.navigation} page='Dashaccount' />
                  <Deletebutton />
                </View>
              </View>

              <TouchableOpacity onPress={() => props.navigation.navigate("Dashlive")}>
                <Text style={tw`text-lg text-gray-700 mt-6`}>Account Details</Text>
              </TouchableOpacity>

              <View style={tw`flex flex-row justify-between mt-5`}>
                <Text style={tw`text-base text-gray-600`}>Account Holder</Text>
                <Text style={tw`text-base text-gray-600`}>Mary Davis</Text>
              </View>
              <View style={tw`flex flex-row justify-between mt-5`}>
                <Text style={tw`text-base text-gray-600`}>Bank Name</Text>
                <Text style={tw`text-base text-gray-600`}>CRDB Bank</Text>
              </View>
              <View style={tw`flex flex-row justify-between mt-5`}>
                <Text style={tw`text-base text-gray-600`}>Order Status</Text>
                <View style={tw`items-center px-2.5 py-1.5 border border-transparent rounded bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}>
                  <Text style={tw`text-xs font-medium text-red-700`}>PENDING</Text>
                </View>
              </View>
              <View style={tw`flex flex-row justify-between mt-5`}>
                <Text style={tw`text-base text-gray-600`}>Date</Text>
                <Text style={tw`text-base text-gray-600`}>13 - 05 - 2022</Text>
              </View>

        </View>
        <View style={tw`my-15 mx-4`}>
          <Largebutton
          text="Add an Account" />
        </View>

        <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 mt-8 p-3 mb-20')}>
          <View style={tw.style('flex flex-row justify-between mb-8')}>
            <TouchableOpacity onPress={() => props.navigation.navigate("Dashreturn")} >
              <Text style={tw.style('text-xl text-gray-700 mt-2')}>Withdrawals</Text>
            </TouchableOpacity>

            <Smallbutton
            text="See All"
            onPress={() => props.navigation.navigate("Dashaccountlist")} />

          </View>

          <View style={tw.style('flex flex-row justify-between mx-1 p-4 bg-gray-200 rounded-md')}>
            <Text style={tw`text-base text-gray-800`}>Date</Text>
            <Text style={tw`text-base text-gray-800`}>Account</Text>
            <Text style={tw`text-base text-gray-800`}>Amount </Text>
          </View>
          <View style={tw.style("my-2 mx-3 mr-2")}>
            <FlatList
              data={DATA3}
              renderItem={renderItem3}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              horizontal={false}
            />
          </View>
        </View>



        <View>


          {openpopup &&
            <Provider>
              <Portal>
                <Modal visible={visible} style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', marginHorizontal: -20, marginVertical: -5 }} onDismiss={closepopup} contentContainerStyle={containerStyle}>
                  <View style={{ marginTop: 40, position: 'absolute', textAlign: 'center', justifyContent: 'center', alignItems: 'center', top: 10, left: 0, right: 0 }}>
                    <View style={{ width: 320, borderRadius: 10, backgroundColor: '#fff', borderColor: '#999', borderWidth: 2 }}>





                      <View style={{ width: deviceWidth / 1.15, backgroundColor: '#ffffff', padding: '5%', alignSelf: 'center', marginTop: '7%', borderRadius: 15, }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: '3%' }}>
                          <Text style={{ fontSize: 22, color: '#1a1a1a', fontFamily: 'hinted-AvertaStd-Semibold', }}>Transaction Details</Text>


                          <TouchableOpacity onPress={() => closepopup()} style={{ height: 40, width: 40, backgroundColor: '#e6e6e6', borderRadius: 4, marginLeft: '4%', padding: 8, }}>
                            <Image source={ImageIcons.closetoday} style={{ height: 12, width: 12, marginTop: 5, alignSelf: 'center' }} />
                          </TouchableOpacity>

                        </View>

                        <Text style={{ fontSize: 18, fontFamily: 'hinted-AvertaStd-Semibold', color: '#1a1a1a', marginTop: '3%' }}>Transaction Information</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '4%' }}>
                          <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#666666' }}>Transaction ID</Text>
                          <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#1a1a1a' }}>264554855</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '4%' }}>
                          <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#666666' }}>Receiving Account</Text>
                          <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#1a1a1a', width: 140 }}>CRDB Bank Limited (8391)</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '4%' }}>
                          <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#666666' }}>Transfer Amount</Text>
                          <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#1a1a1a' }}>$0*</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '4%' }}>
                          <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#666666' }}>Transfer Fee</Text>
                          <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#1a1a1a' }}>$0</Text>
                        </View>

                      </View>


                      <View style={{ borderBottomWidth: 2, borderColor: '#e6e6e6', width: '90%', alignSelf: 'center', marginVertical: '5%' }}></View>

                      <View style={{ width: deviceWidth / 1.15, backgroundColor: '#ffffff', padding: '5%', alignSelf: 'center', borderRadius: 15, }}>
                        <Text style={{ fontSize: 18, fontFamily: 'hinted-AvertaStd-Semibold', color: '#1a1a1a', marginTop: '3%' }}>Transaction Timeline</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '4%' }}>
                          <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#666666' }}>Approved</Text>
                          <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#1a1a1a' }}>25 - 01 - 22</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '4%' }}>
                          <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#666666' }}>Sent to Bank</Text>
                          <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#1a1a1a' }}>25 - 01 - 22</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '4%' }}>
                          <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#666666' }}>Estimated deposit date**</Text>
                          <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#1a1a1a' }}>25 - 01 - 22</Text>
                        </View>
                      </View>

                      <View style={{ marginHorizontal: '4%', marginTop: '2%', marginBottom: '8%' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'hinted-AvertaStd-Regular', color: '#000000' }}>*A transaction may take longer than described above if requested outside of business hours. If you experience a delay of more than 5 days, contact us.</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'hinted-AvertaStd-Regular', color: '#000000' }}>**Total amount may be subject to fees charged by banks or third-party providers.</Text>
                      </View>



                    </View>
                  </View>
                </Modal>
              </Portal>
            </Provider>
          }
        </View>
      </ScrollView>
      <Footer2 />
    </View>
  )
}


export default Dashaccount
