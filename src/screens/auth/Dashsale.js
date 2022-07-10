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
import Modal from 'react-native-modal'
import tw from 'twrnc';
import Sortfilter from '../../components/pickers/Sortfilter';
import Sortorder from '../../components/pickers/Sortorder';
import Smallbutton from '../../components/dropshipbutton/Smallbutton';
 const options = ['1', '2', '3', '4','5','6','7','8','9']

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const Dashsale = (props) => {

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
    props.gettopcountry(props?.loginuserid);
    props.Brandslist();
  }, [])

  useEffect(() => {
    getBrandUserId();
  }, [])


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
  const [isSelected, setSelection] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [showclassName, setshowclassName] = useState("#B80000");



  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May",],
    datasets: [
      {
        data: [20, 45, 28, 80, 99,]
      }
    ]
  };

  const DATA3 = [
    {
      text: "1 ",
      text1: "Shoe",
      text2: "10,000",
    }
  ];


  const renderItem3 = ({ item, index }) => {
    return (
      <View>

        <View style={styles.seledataViewTODAYsaleana}>
          <Text style={styles.seriestexttoday}>{index + 1}</Text>
          <Text style={styles.seriestexttoday}>{item?.productData?.productName}</Text>
          <Text style={styles.seriestexttoday}>{item.totalAmount}</Text>
        </View>

      </View>
    );
  }

  return (
    <View style={tw.style('flex flex-1')}>

  <View style={{padding:20,backgroundColor:'#B80000', height:'92%'}}>
       <Image source={ImageIcons.workinprogress} style={{width:'100%', height:250}} />
       </View>

      <ScrollView onScroll={({ nativeEvent }) => {
        handleScroll(nativeEvent['contentOffset'].y);
      }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#f2f2f2' }} >

        <View style={tw.style('flex flex-row justify-between items-center mx-4 mt-8 mb-10')}>
          <Text style={tw.style('text-2xl text-gray-700 font-bold')}>Sales Analytics</Text>
          <Smallbutton
            text="Withdraw Money"
            onPress={() => props.navigation.navigate("Accountproduct", { brandId: props?.brandName._id })}
          />
        </View>

        <View style={tw.style('flex flex-row mx-4')}>
          <Sortorder options={options} />

          <Sortfilter
            text="Sortfilter"
          />
        </View>

        <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 mt-5')}>
          <View style={tw.style('py-6 items-center')}>
            <View>
              <LineChart
                data={data}
                width={deviceWidth / 1.13}
                height={256}
                verticalLabelRotation={30}
                chartConfig={{
                  backgroundColor: "#e26a00",
                  backgroundGradientFrom: "#ffffff",
                  backgroundGradientTo: "#ffffff",
                  decimalPlaces: 1, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(0, 153, 0, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

                }}
                style={{
                  //marginVertical: 8,
                  borderRadius: 10,
                  //marginHorizontal:'4%'
                }}
                bezier
              />
            </View>
          </View>
        </View>

        <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 mt-8')}>
          <View style={tw.style('py-8 px-3')}>
            <View style={tw.style('flex flex-row justify-between mb-8')}>
              <Text style={tw.style('text-xl text-gray-700 mt-2')}>Top Selling Product</Text>
              <Sortorder options={options} />
            </View>
            <View style={tw.style('flex flex-row justify-between mx-1 p-4 bg-gray-200 rounded-md')}>
              <Text style={tw`text-base text-gray-800`}>S/N</Text>
              <Text style={tw`text-base text-gray-800`}>Products</Text>
              <Text style={tw`text-base text-gray-800`}>Units sold</Text>
            </View>
            <View style={tw.style('mt-10')}>
              <FlatList
                data={props?.gettopsellproduct || []}
                renderItem={renderItem3}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal={false}
              />
            </View>
          </View>
        </View>

        <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 mt-8 mb-20')}>
          <View style={tw.style('py-8 px-3')}>
            <View style={tw.style('flex flex-row justify-between mb-8')}>
              <Text style={tw.style('text-xl text-gray-700 mt-2')}>Top Categories</Text>
              <Sortorder options={options} />
            </View>
            <View style={tw.style('flex flex-row justify-between mx-1 p-4 bg-gray-200 rounded-md')}>
              <Text style={tw`text-base text-gray-800`}>S/N</Text>
              <Text style={tw`text-base text-gray-800`}>Country</Text>
              <Text style={tw`text-base text-gray-800`}>Total Sales</Text>
            </View>
            <View style={tw.style('mt-10')}>
              <FlatList
                data={props?.gettopsellproduct || []}
                renderItem={renderItem3}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal={false}
              />
            </View>
          </View>
        </View>


      </ScrollView>
      <Footer2 onSelelection="5" />
    </View>
  )
}

export default Dashsale
