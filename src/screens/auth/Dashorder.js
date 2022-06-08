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

import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Provider, Portal, } from 'react-native-paper';
import Modal from 'react-native-modal';
import Moment from 'moment';
import { useTailwind } from 'tailwind-rn';


import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const Dashorder = (props) => {

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
  const tailwind = useTailwind();
  const emailRef = useRef();
  const phoneRef = useRef();
  const bisinessnameRef = useRef();
  const fullnameRef = useRef();
  const userId = props?.route?.params?.userId;
  const brandId = props?.route?.params?.brandId;

  //     var swipeoutBtns = [
  //   {
  //     text: 'Button'
  //   }
  // ]

  useEffect(() => {
    //alert(props?.loginuserid)
    props.getincomingtlist();
    console.log('pkk', props.getincomingtlist(props?.loginuserid))
    props.getselldeshboard(props?.loginuserid);
    props.gettopsell(props?.loginuserid, 3);
    props.liveeventdetail(props?.loginuserid);
    props.Brandslist();
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
  const [showview, setShowview] = React.useState(true);
  const [msg, onChangeText2] = React.useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [showclassName, setshowclassName] = useState("#B80000");
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


  let colors = ['#8862E01A', '#19D8951A', '#E220201A', '#abcdef'];

  const openpopup = () => {
    setVisible(true)

  };
  const closepopup = () => {
    setVisible(false)
  }


  const containerStyle = { backgroundColor: 'red', padding: '7%', marginHorizontal: '5%', alignItems: 'center', };

  const name = [
    {
      title: 'Purchased by Anna.M ',
      date: 'jan 11, 2022',
      id: 'Order Number:',
      Number: 'GSHMU00S0004KH',
      status: 'Pending'
    },

    {
      title: 'Purchased by Anna.M ',
      date: 'jan 11, 2022',
      id: 'Order Number:',
      Number: 'GSHMU00S0004KH',
      status: 'Processing'

    },

    {
      title: 'Purchased by Anna.M ',
      date: 'jan 11, 2022',
      id: 'Order Number:',
      Number: 'GSHMU00S0004KH',
      status: 'Processing'

    },

    {
      title: 'Purchased by Anna.M ',
      date: 'jan 11, 2022',
      id: 'Order Number:',
      Number: 'GSHMU00S0004KH',
      status: 'Processing'

    }
  ]


  const renderItem = ({ item, index }) => {
    console.log('itemproduct', item);
    return (
      <View>

        <TouchableOpacity onPress={() => props.navigation.navigate("Dashdetail", { orderNumber: item.orderNumber })} style={styles.seledataViewTODAY}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: item?.productId?.productImage }} style={{ width: 40, height: 40, borderRadius: 5 }} />
            <Text style={[styles.seriestexttoday, { width: 150 }]}>{item?.orderNumber}</Text>
          </View>
          <Text style={styles.seriestexttoday}>{item?.loggedInUserId?.userName}</Text>
          <Text style={styles.seriestexttoday}>{item?.loggedInUserId?.userName}</Text>
        </TouchableOpacity>

      </View>
    );
  };
  const Data = ({ item }) => {
    return (
      <View style={{ marginHorizontal: 2, borderRadius: 10, backgroundColor: '#FFF', padding: 15, marginVertical: 5 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <View>
            <Text style={{ fontSize: 14, color: '#1A1A1A', fontFamily: 'AvertaStd-SemiBold' }} >{item?.productId?.productName}</Text>
            <Text style={{ color: '#808080', fontSize: 12, marginTop: 3 }} >{Moment(item.createdAt).format('MMM DD YYYY')}</Text>
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={{ color: '#2F80ED', fontSize: 12, backgroundColor: '#ADD8E6', paddingTop: 3, height: 25, width: 91, textAlign: 'center', borderRadius: 6, fontWeight: 'bold' }} >{item.status}</Text>
          </View>

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <View style={{ width: 230, marginVertical: 3 }}>
            <Text style={{ fontSize: 12, color: 'black', }} >Order Number:<Text style={{ fontSize: 12, color: '#2F80ED', fontWeight: 'bold', }} > {item.orderNumber}</Text></Text>
          </View>
          <View style={{ justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={()=> props.navigation.navigate("Dashdetail", { orderNumber: item.orderNumber })}>
                <Image source={ImageIcons.dropDownIcon} style={{ width: 15, height: 15, marginRight: 5 }} />
              </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }



  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#B80000'} barStyle="dark-content" translucent={true} />
      <SellHeader branddata={props.Brandlistdata} />

      <ScrollView onScroll={({ nativeEvent }) => {
        handleScroll(nativeEvent['contentOffset'].y);
      }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#f2f2f2' }} >

        <View style={tailwind('mt-5 mb-5 ml-4')}>
          <Text style={tailwind('text-2xl text-gray-800 font-bold')}>Orders ({props?.getinconeorderlist?.length})</Text>
        </View>

        <View style={tailwind('flex flex-row pl-3 text-sm')}>
          <View style={tailwind('basis-36 border-gray-300 bg-gray-200 rounded-lg text-justify')}>
            <Picker
              selectedValue={selectedValue}
              style={tailwind('h-9 w-36 text-gray-800 bg-black')}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="sort" value="1" />
              <Picker.Item label="success" value="2" />
              <Picker.Item label="Pending" value="3" />
              <Picker.Item label="Processing" value="3" />
              <Picker.Item label="Canceled" value="3" />
              <Picker.Item label="Delivered" value="3" />
            </Picker>
          </View>

        </View>
        <View style={tailwind('bg-slate-100 p-4 mx-2')} >
          <FlatList
            data={props?.getinconeorderlist || []}
            renderItem={Data}
          />
        </View>
      </ScrollView>
      <Footer2 onSelelection="2" />
    </View>

  )
}


export default Dashorder
