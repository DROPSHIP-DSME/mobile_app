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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import tw from 'twrnc';
import Sortorder from '../../components/pickers/Sortorder';
import Orderstable from '../../components/tables/Orderstable'


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
  const userId = props?.route?.params?.userId;
  const brandId = props?.route?.params?.brandId;

  useEffect(() => {
    props.getincomingtlist();
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
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [showclassName, setshowclassName] = useState("#B80000");

  const openpopup = () => {
    setVisible(true)

  }

  const closepopup = () => {
    setVisible(false)
  }


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
    <View style={tw.style('flex-1 bg-white')}>
      <StatusBar backgroundColor={'#B80000'} barStyle="dark-content" translucent={true} />
      <SellHeader branddata={props.Brandlistdata} />

      <ScrollView onScroll={({ nativeEvent }) => {
        handleScroll(nativeEvent['contentOffset'].y);
      }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={tw.style('bg-slate-2')} >

        <View style={tw.style('my-5 mx-4')}>
          <Text style={tw.style('text-2xl text-gray-800 font-bold mb-5')}>Orders ({props?.getinconeorderlist?.length})</Text>

          <Sortorder />

          <View style={tw.style('bg-zinc-100 mt-6 p-3 ')} >
            <FlatList
              data={props?.getinconeorderlist || []}
              renderItem={Data}
            />
          </View>
         </View>

         <Orderstable />

      </ScrollView>
      <Footer2 onSelelection="2" />
    </View>

  )
}

export default Dashorder
