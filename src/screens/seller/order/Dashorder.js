import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Image, TextInput, ImageBackground, FlatList, Picker, StatusBar, Dimensions, ScrollView, Alert, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
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
import Sortorder from '../../../components/pickers/Sortorder';
import Orderstable from '../../../components/tables/Orderstable';
import { ArrowCircleDownIcon } from "react-native-heroicons/solid";


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
    if(props?.getinconeorderlist?.length>0){
      setorderlisting(props?.getinconeorderlist);
    }else{
      sethitcount(hitcount+1)
      if(hitcount<5){
        props.getincomingtlist(props?.loginuserid);
      }
    }
    // props.getselldeshboard(props?.loginuserid);
    // props.gettopsell(props?.loginuserid, 3);
    // props.liveeventdetail(props?.loginuserid);
    // props.Brandslist();
  }, [props?.getinconeorderlist])

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
  const [hitcount, sethitcount] = useState(0);
  const [orderlisting, setorderlisting] = useState([]);

const options = [
      {
        label: 'All',
        value: 'all'
      },
      {
        label: 'Accepted',
        value: 'accepted'
      },
      {
        label: 'Prcoessing',
        value: 'Prcoessing'
      },
      {
        label: 'Shipped',
        value: 'Shipped'
      },
      {
        label: 'Delivered',
        value: 'Delivered'
      },
      {
        label: 'Cancelled',
        value: 'Cancelled'
      }
    ]
  const openpopup = () => {
    setVisible(true)

  }

  const updateorderStatus = (itemValue) => {
        setSelectedValue(itemValue)
        //alert(itemValue)
        if(itemValue=='all'){
            setorderlisting(props?.getinconeorderlist);
        }else{
          let filteredData = props?.getinconeorderlist.filter(function (item) {
              return item.status.toLowerCase()==itemValue.toLowerCase();
          });
            setorderlisting(filteredData);
        }

    }

  const closepopup = () => {
    setVisible(false)
  }


  const Data = ({ item }) => {
    return (

      <View style={tw.style('bg-white overflow-hidden shadow rounded-md mb-4 border-2 border-gray-100')}>
        <View style={tw.style('px-2 py-5')}>
            <View style={tw`flex flex-row justify-between items-center`}>
                <View>
                  <Text style={tw`text-lg text-gray-800`} >{item?.productId?.productName}</Text>
                  <Text style={tw`text-base text-gray-700`} >{Moment(item.createdAt).format('MMM DD YYYY')}</Text>
                </View>
                <View style={tw`items-center px-3 py-0.5 rounded-full bg-blue-100`}>
                  <Text style={tw`text-sm font-medium text-blue-800`} >{item.status}</Text>
                </View>
            </View>
            <View style={tw`flex flex-row justify-between items-center`}>
                <View style={tw`mt-2`}>
                  <Text style={tw`text-sm text-gray-900`} >Order Number:<Text style={tw`text-sm text-blue-800`} > {item.orderNumber}</Text></Text>
                </View>
                <View style={tw`flex-end right-2`}>
                    <TouchableOpacity onPress={()=> props.navigation.navigate("Dashdetail", { orderNumber: item.orderNumber })}>
                      <ArrowCircleDownIcon color="red" fill="black" size={32} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>

    )
  }



  return (
    <View style={tw.style('flex-1 bg-white')}>


      <ScrollView onScroll={({ nativeEvent }) => {
        handleScroll(nativeEvent['contentOffset'].y);
      }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={tw.style('bg-slate-2')} >

        <View style={tw.style('my-5 mx-4')}>
          <Text style={tw.style('text-2xl text-gray-800 font-bold mb-5')}>Orders ({props?.getinconeorderlist?.length})</Text>

          <Sortorder text="Sort Order" options={options} onSelect={(checked) => updateorderStatus(checked)} />

          <View style={tw.style('mt-6 p-3')} >

            <FlatList
              data={orderlisting || []}
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
