import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Image, TextInput, ImageBackground, FlatList, Picker, StatusBar, Dimensions, ScrollView, Alert, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
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
import Shopheader from '../../screens/auth/Shopheader';
import Footer3 from '../../screens/auth/Footer3';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Provider, Portal, } from 'react-native-paper';
import Modal from 'react-native-modal'
import tw from 'twrnc';
import { ArrowRightIcon } from "react-native-heroicons/solid";
import Smallbutton from '../../components/dropshipbutton/Smallbutton';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const Accountstore = (props) => {

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
    props.gettopsell(props?.loginuserid, 3);
    props.liveeventdetail(props?.loginuserid);
    props.Brandslist();
  }, [])

  useEffect(() => {
    getBrandUserId();
  }, [])

  useFocusEffect(() => {
    getBrandUserId();
  })

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

  // Local states
  const [text1, onChangeText3] = React.useState("");
  const [helppopup, sethelppopup] = React.useState(false);
  const [showclassName, setshowclassName] = useState("#B80000");

  const renderItem6 = ({ item }) => {
    return (
      <View>
        {item.userId.userName == 'Admin' ?
          <View>
            <View style={styles.chatrightView}>
              <Text style={styles.hellotext}>{item.message}</Text>
            </View>
            <Text style={styles.chattingtime}>{moment(item.msgDate).format('hh:mm A')}</Text>
          </View>
          :
          <View>
            <View style={styles.chatlongView}>
              <Text style={styles.chattingtext}>{item.message}</Text>
            </View>
            <Text style={styles.chattingtime2}>{moment(item.msgDate).format('hh:mm A')}</Text>
          </View>

        }
      </View>

    );
  };

  const renderItem1 = ({ item, index }) => {
    return (
      <View>
        {index == 0 &&
          <View style={tw`pb-3 px-2`}>
            <View style={tw`flex flex-row justify-between items-center mb-2`}>
                <Text style={tw`text-2xl text-gray-700`}>My Brands</Text>
                <Smallbutton text="SEE ALL"  onPress={() => props.navigation.navigate("Accountbrand")}></Smallbutton>
            </View>
            <View style={tw`flex flex-row justify-between`}>
              <TouchableOpacity style={tw`flex-row items-center`} onPress={() => props.navigation.navigate("Accountbrandlist")}>
                <View>
                  <Image source={{ uri: item.brandImage }} style={styles.produtbrandimage2} />
                </View>
                <View style={tw`ml-3`}>
                  <Text style={styles.droptxttt}>{item.brandName}</Text>
                  <Text style={styles.dropcom}>store.dropship.com</Text>
                </View>
              </TouchableOpacity>
              <View style={tw`mt-1`}>
                <View style={{ flexDirection: 'row', marginTop: '2%', }}>
                  <Image source={ImageIcons.redcolorbag} style={styles.bgsaimg} />
                  <Text style={styles.optext}>0 products</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: '3%', }}>
                  <Image source={ImageIcons.rededit} style={styles.bgsaimg} />
                  <Text style={styles.optext}>0 sales</Text>
                </View>
              </View>

            </View>
          </View>
        }
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>


      <ScrollView onScroll={({ nativeEvent }) => {
        handleScroll(nativeEvent['contentOffset'].y);
      }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#f2f2f2' }} >



        <View style={tw.style('mx-4 pt-3 mb-4')}>
          <Text style={tw`text-4xl text-red-700 font-bold pt-3 mt-4`}>My Account</Text>
        </View>

        <View style={tw.style('flex flex-row justify-between mx-4 pt-5')}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Account")}>
            <Text style={tw`text-base font-bold text-gray-400`}>Personal Details</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("Accountstore")}>
            <Text style={tw`text-base font-bold text-gray-800`}>My store</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("Accountsum")}>
            <Text style={tw`text-base font-bold text-gray-400`}>Account Summary</Text>
          </TouchableOpacity>
        </View>

        <View style={tw`flex flex-row mx-3 mt-3`}>
          <View style={{ borderBottomWidth: 2, borderColor: "#999999", width: "35%" }}></View>
          <View style={{ borderBottomWidth: 2, borderColor: "#1A1A1A", width: "25%" }}></View>
          <View style={{ borderBottomWidth: 2, borderColor: "#999999", width: "40%" }}></View>
        </View>



        <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 mt-10')}>
          <View style={tw.style('px-2 py-5')}>
            <FlatList
              data={props?.Brandlistdata || []}
              renderItem={renderItem1}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              numColumns={1}
            />
          </View>
        </View>

        <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 mt-8 mb-20')}>
          <View style={tw.style('px-2 py-1')}>
            <View style={tw.style('flex flex-row rounded-md bg-white justify-between items-center')}>
                <View style={tw.style('my-4 px-2')}>
                    <TouchableOpacity>
                        <Text style={tw.style('text-xl font-bold text-gray-900')}>
                            Seller's Dashboard
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={tw.style('mx-4 my-4')}>
                    <ArrowRightIcon color="gray" fill="gray" size={24} />
                </View>
            </View>
          </View>
        </View>



      </ScrollView>

      <View style={{ position: 'absolute', zIndex: 2001, right: 20, bottom: 70 }}>
        <TouchableOpacity onPress={() => sethelppopup(true)}>
          <Image source={ImageIcons.exporthelp} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
      </View>

      {helppopup == true &&
        <View style={{ flex: 1, backgroundColor: '#ffffff', margin: 20, paddingVertical: 10, borderRadius: 10, zIndex: 4001, position: 'absolute', bottom: '10%' }}>


          <View style={styles.chatViewrose}>

            <Text style={styles.Benrosetext}>Chat with customer support</Text>
            <TouchableOpacity style={{ position: 'absolute', right: 15, top: 5 }} onPress={() => sethelppopup(false)}>
              <Image source={ImageIcons.closepopup} style={styles.sendmsg2} />
            </TouchableOpacity>
          </View>
          <ScrollView keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#ffffff', height: 200 }} >
            <View style={{ marginVertical: '2%' }}>
              <FlatList
                data={props?.getchatsupportlist1 || []}
                renderItem={renderItem6}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal={false}
              />
            </View>
          </ScrollView>
          <View style={[styles.accountmainview, { marginBottom: 10, width: '100%' }]}>
            <View style={{ width: '90%' }}>
              <TextInput style={styles.chatinput}
                placeholder="Type here..."
                onChangeText={onChangeText3}
                value={text1}
                placeholderTextColor="#999999"
              />
            </View>
            <TouchableOpacity style={{ position: 'absolute', right: 55, top: 5 }} onPress={() => handleSendRequestSubmit()}>
              <Image source={ImageIcons.sendchat} style={styles.sendmsg1} />
            </TouchableOpacity>
          </View>
        </View>
      }


      <Footer3 onSelection="5" />
    </View>
  )
}


export default Accountstore
