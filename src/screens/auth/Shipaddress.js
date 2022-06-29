import React, { useRef, useState, useEffect } from 'react';
import {
  Text, View, TouchableOpacity,
  Image, TextInput, ImageBackground,
  ScrollView, Alert, Dimensions,
  FlatList, StatusBar, Picker,
  KeyboardAvoidingView, Platform,
  Keyboard
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import styl from './styledrop';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import { phoneRegExp } from '../../services/helper';
import DropdownField from '../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../components/modals/Loader';
import { RadioButton, Provider, Modal, Portal, Button, } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Footer3 from '../../screens/auth/Footer3';
import * as Progress from 'react-native-progress';
import RnIncrementDecrementBtn from
  'react-native-increment-decrement-button';
import Shopheader from '../../screens/auth/Shopheader';


const Shipaddress = (props) => {

  const {
    navigation,
    values,
    errors,
    handleChange,
    handleSubmit,
  } = props;

  //Reference
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;
  const emailRef = useRef();
  const phoneRef = useRef();
  const bisinessnameRef = useRef();
  const fullnameRef = useRef();

  const shopId = props?.route?.params?.shopId;
  const shopName = props?.route?.params?.shopName;
  // Local states
  const [checked, setChecked] = React.useState('first');
  const [selectedValue, setSelectedValue] = useState("java");
  const [visible, setVisible] = React.useState(false);
  const [starCount, setstarCount] = useState(3);
  const [visiblebag, setVisiblebag] = React.useState(false);
  const [couponcode, setcouponcode] = React.useState(false);
  const [shipadd, setshipadd] = React.useState(true);
  const [Paypal, onChangePaypal] = React.useState("Paypal");
  const [Debit, onChangeDebit] = React.useState("Debit Card");
  const [helppopup, sethelppopup] = React.useState(false);
  const [reportpopup, setreportpopup] = React.useState(false);
  const [showclassName, setshowclassName] = useState("#B80000");
  const [text1, onChangeText1] = React.useState("");
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
  useEffect(() => {
    props.shopproduct(shopId);
    props.shopsellcount(shopId);
  }, [])
  const openpopup = () => {
    setVisible(true)

  }
  const closepopup = () => {
    setVisible(false)
  }


  const closebagpopup = () => {
    setVisiblebag(false)
  }

  const ratingCompleted = (ratingdata) => {
    console.log('rating', ratingdata)
    if (ratingdata != "" && ratingdata != undefined) {
      setstarCount(ratingdata)
    }

  }
  const handleScroll = (pageYOffset) => {
    if (pageYOffset > 0) {
      setshowclassName('#B80000');
    } else {
      setshowclassName('#B80000');
    }
  }

  const containerStyle = { backgroundColor: 'white', padding: '3%', marginHorizontal: '5%', borderRadius: 10 };


  const DATA = [
    {
      height: 30,
      width: 30,
      image: ImageIcons.twit,
    },
    {
      height: 29.82,
      width: 30,
      image: ImageIcons.fb,
    },
    {
      height: 30,
      width: 30,
      image: ImageIcons.insta,
    },
    {
      height: 30,
      width: 30,
      image: ImageIcons.whatsapp,
    },
    {
      height: 30,
      width: 30,
      image: ImageIcons.mail,
    },
    {
      height: 25,
      width: 25,
      image: ImageIcons.email,
    },


  ];

  const DATA1 = [
    {
      text: "Beauty brands",
      text1: "$75",
      image: ImageIcons.winterimage,

    },
    {
      text: "Beauty brands",
      text1: "$75",
      image: ImageIcons.winterimage,

    },]





  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={tw.style('flex-1 justify-center')}>
      <StatusBar backgroundColor={showclassName} barStyle="dark-content" translucent={true} />
      <Shopheader />

      <ScrollView onScroll={({ nativeEvent }) => {
        handleScroll(nativeEvent['contentOffset'].y);
      }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#FFFFFF' }} >

        <View style={{ marginHorizontal: '3%', marginTop: '20%', flexDirection: "row" }}>
          <Image source={ImageIcons.backpopup} style={{ width: 15, height: 22 }} />
          <View style={{ borderBottomWidth: 3, width: 40, marginLeft: "-2%", marginBottom: "2.5%" }}></View>
          <Text style={{ fontSize: 15, fontFamily: "hinted-AvertaStd-Regular", fontWeight: "bold", paddingLeft: 5 }}>CONTINUE SHOPPING</Text>
        </View>





        <View style={tw.style('flex flex-row justify-between mt-[3%] mr-[20%] m-[3%]')}>
          <Text style={{ fontSize: 26, color: '#1A1A1A', paddingVertical: '1%', lineHeight: 30, fontWeight: 'bold', fontFamily: 'hinted-AvertaStd-Regular', fontStyle: 'normal' }}>Shipping Information</Text>
        </View>

        <View style={{ marginHorizontal: "3%", borderRadius: 10, backgroundColor: "#ffffff", elevation: 4 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "2%", marginTop: "2%" }}>
            <View style={{ backgroundColor: "#E6E6E6", width: deviceWidth / 3, height: 25, paddingTop: "1%", borderRadius: 5 }}><Text style={{ textAlign: "center", color: "#2F80ED", fontSize: 12, fontWeight: "bold", fontFamily: "hinted-AvertaStd-Regular" }}>
              DEFAULT ADDRESS</Text></View>
            <View>
              <Image source={ImageIcons.edit} style={{ width: 45, height: 40 }} />
            </View>
          </View>
          <Text style={{ fontSize: 18, fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A", padding: "2%" }}>Marry Davis {"\n"}2501 Stevens Ev{"\n"}Miniapolis MN,54404{"\n"}USA</Text>
        </View>


        <View style={{ marginHorizontal: "3%", borderRadius: 10, backgroundColor: "#FFFFFF", marginTop: "3%", borderWidth: 2, borderColor: '#b80000' }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "0%" }}>

            <Text style={{ fontSize: 18, paddingTop: "2%", fontFamily: "hinted-AvertaStd-Regular", fontWeight: "bold", color: "#1A1A1A" }}>Add a New Addresss</Text>

            <View style={{ margin: "1%" }}>
              <Image source={ImageIcons.plusicon} style={{ width: 45, height: 40 }} />
            </View>
          </View>
        </View>


        {shipadd == false &&
          <View>
            <View style={{ flexDirection: 'row', marginHorizontal: '4%', marginTop: '2%' }}>
              <View style={{ height: 15, width: 15, backgroundColor: '#848484', borderRadius: 3, marginTop: 3 }}></View>
              <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Regular', color: '#1a1a1a', marginLeft: 5 }}>Save shipping information</Text>
            </View>

            <View style={[tw.style('border-[#e6e6e6] rounded-[10px] bg-[#e6e6e6] h-[55px] self-center mt-[7%] mx-[3%]'), { width: deviceWidth / 1.1 }]}>
              <Text style={{ fontSize: 12, fontFamily: 'hinted-AvertaStd-Regular', color: '4d4d4d', marginLeft: '5%', marginTop: '2%' }}>First Name</Text>
              <Text style={{ fontSize: 18, fontFamily: 'hinted-AvertaStd-Regular', color: '4d4d4d', marginLeft: '5%', marginTop: '1%' }}>Mary</Text>
            </View>

            <View style={[tw.style('border-[#e6e6e6] rounded-[10px] bg-[#e6e6e6] h-[55px] self-center mt-[7%] mx-[3%]'), { width: deviceWidth / 1.1 }]}>
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="#1a1a1a"
                paddingLeft={15}
              />
            </View>
            <View style={[tw.style('border-[#e6e6e6] rounded-[10px] bg-[#e6e6e6] h-[55px] self-center mt-[7%] mx-[3%]'), { width: deviceWidth / 1.1 }]}>
              <TextInput
                placeholder="Email Address"
                placeholderTextColor="#1a1a1a"
                paddingLeft={15}
              />
            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: '4%', justifyContent: 'space-between', marginTop: '7%' }}>
              <View style={{ height: 55, width: 120, backgroundColor: '#e6e6e6', borderRadius: 10, }}>
                <Picker
                  selectedValue={selectedValue}
                  style={{ height: 55, width: 120, color: '#4d4d4d', }}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="+1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                  <Picker.Item label="6" value="6" />
                  <Picker.Item label="7" value="7" />
                  <Picker.Item label="8" value="8" />
                  <Picker.Item label="9" value="9" />
                </Picker>
              </View>
              <View style={{ borderColor: '#e6e6e6', borderRadius: 10, width: 198, backgroundColor: '#e6e6e6', height: 55, alignSelf: 'center', }}>
                <TextInput
                  placeholder="Phone Number"
                  placeholderTextColor="#1a1a1a"
                  paddingLeft={15}
                />
              </View>
            </View>


            <View style={[tw.style('border-[#e6e6e6] rounded-[10px] bg-[#e6e6e6] h-[55px] self-center mt-[7%] mx-[3%]'), { width: deviceWidth / 1.1 }]}>
              <TextInput
                placeholder="Address Line 1"
                placeholderTextColor="#1a1a1a"
                paddingLeft={15}
              />
            </View>

            <View style={[tw.style('border-[#e6e6e6] rounded-[10px] bg-[#e6e6e6] h-[55px] self-center mt-[7%] mx-[3%]'), { width: deviceWidth / 1.1 }]}>
              <TextInput
                placeholder="Address Line 2"
                placeholderTextColor="#1a1a1a"
                paddingLeft={15}
              />
            </View>

            <View style={[tw.style('border-[#e6e6e6] rounded-[10px] bg-[#e6e6e6] h-[55px] self-center mt-[7%] mx-[3%]'), { width: deviceWidth / 1.1 }]}>
              <TextInput
                placeholder="Postal/Zip Code"
                placeholderTextColor="#1a1a1a"
                paddingLeft={15}
              />
            </View>

            <View style={[tw.style('border-[#e6e6e6] rounded-[10px] bg-[#e6e6e6] h-[55px] self-center mt-[7%] mx-[3%]'), { width: deviceWidth / 1.1 }]}>
              <TextInput
                placeholder="State/Province"
                placeholderTextColor="#1a1a1a"
                paddingLeft={15}
              />
            </View>
          </View>
        }


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '3%', marginVertical: '5%' }}>
          <Text style={{ fontSize: 26, color: '#1a1a1a', fontFamily: 'hinted-AvertaStd-Semibold', }}>Shipping Method</Text>
        </View>

        <View style={{ flexDirection: "row", elevation: 1, marginHorizontal: "3%", backgroundColor: "#FAFAFA", marginTop: "2%" }}>
          <View style={{ marginTop: "5%" }}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
          </View>


          <View style={{ marginLeft: 5, alignSelf: 'center' }}>
            <Text style={{ fontSize: 18, fontFamily: 'hinted-AvertaStd-Semibold', marginLeft: 6, color: '#b80000' }}>Standard Shipping</Text>
            <Text style={{ fontSize: 14, fontFamily: 'hinted-AvertaStd-Semibold', marginLeft: 6, color: '#1a1a1a' }}>US$0</Text>
            <Text style={{ fontSize: 14, fontFamily: 'hinted-AvertaStd-Regular', marginLeft: 6, color: '#1a1a1a', width: 250 }}>Orders placed now will arrive between Sat, Dec 11 - Tues, Dec 14</Text>
          </View>
        </View>



        <View style={{ flexDirection: "row", marginTop: "2%", flexDirection: "row", elevation: 1, marginHorizontal: "3%", backgroundColor: "#FAFAFA" }}>
          <View style={{ marginTop: "5%" }}>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
          </View>

          <View style={{ marginLeft: 5, alignSelf: 'center' }}>
            <Text style={{ fontSize: 18, fontFamily: 'hinted-AvertaStd-Semibold', marginLeft: 6, color: '#808080' }}>Express Shipping</Text>
            <Text style={{ fontSize: 14, fontFamily: 'hinted-AvertaStd-Semibold', marginLeft: 6, color: '#1a1a1a' }}>US$0</Text>
            <Text style={{ fontSize: 14, fontFamily: 'hinted-AvertaStd-Regular', marginLeft: 6, color: '#1a1a1a', width: 250 }}>Orders placed now will arrive between Sat, Dec 11 - Tues, Dec 14</Text>
          </View>
        </View>






        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '3%', marginVertical: '5%' }}>
          <Text style={{ fontSize: 26, color: '#1a1a1a', fontFamily: 'hinted-AvertaStd-Semibold', }}>Product Summary</Text>
        </View>


        <View style={{ alignSelf: 'center', borderRadius: 15, flexDirection: 'row', marginTop: '7%', width: deviceWidth / 1.1 }}>
          <Image source={ImageIcons.teashop} style={{ width: 100, height: 120, marginTop: 6, alignSelf: 'center', borderRadius: 15 }} />
          <View style={{ marginLeft: 5, alignSelf: 'center' }}>
            <Text style={{ fontSize: 15, fontFamily: 'hinted-AvertaStd-Semibold', marginLeft: 6, color: '#1a1a1a' }}>Ribbed Knit Bardot Crossover Top</Text>
            <Text style={{ fontSize: 20, fontFamily: 'hinted-AvertaStd-Bold', marginLeft: 6, color: '#1a1a1a' }}>$0</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#1a1a1a' }}>Color:</Text>
              <View style={{ height: 15, width: 15, borderRadius: 10, backgroundColor: '#5999F1', marginLeft: 2, alignSelf: 'center' }}></View>
              <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#1a1a1a' }}>  Size:</Text>
              <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Regular', color: '#1a1a1a' }}> 0</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#1a1a1a' }}>Quantity:</Text>
              <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Regular', color: '#1a1a1a' }}> x1</Text>
            </View>
          </View>
        </View>

        <View style={{ alignSelf: 'center', borderRadius: 15, flexDirection: 'row', marginTop: '7%', width: deviceWidth / 1.1 }}>
          <Image source={ImageIcons.teashop} style={{ width: 100, height: 120, marginTop: 6, alignSelf: 'center', borderRadius: 15 }} />
          <View style={{ marginLeft: 5, alignSelf: 'center' }}>
            <Text style={{ fontSize: 15, fontFamily: 'hinted-AvertaStd-Semibold', marginLeft: 6, color: '#1a1a1a' }}>Ribbed Knit Bardot Crossover Top</Text>
            <Text style={{ fontSize: 20, fontFamily: 'hinted-AvertaStd-Bold', marginLeft: 6, color: '#1a1a1a' }}>$0</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#1a1a1a' }}>Color:</Text>
              <View style={{ height: 15, width: 15, borderRadius: 10, backgroundColor: '#5999F1', marginLeft: 2, alignSelf: 'center' }}></View>
              <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#1a1a1a' }}>  Size:</Text>
              <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Regular', color: '#1a1a1a' }}> 0</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#1a1a1a' }}>Quantity:</Text>
              <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Regular', color: '#1a1a1a' }}> x1</Text>
            </View>
          </View>
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '3%', marginVertical: '5%' }}>
          <Text style={{ fontSize: 26, color: '#1a1a1a', fontFamily: 'hinted-AvertaStd-Semibold', }}>Order Summary</Text>
        </View>


        <View style={{ width: deviceWidth / 1, padding: '5%', alignSelf: 'center', borderRadius: 15 }}>


          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '4%' }}>
            <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold', color: '#666666' }}>Subtotal</Text>
            <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Regular', color: '#1a1a1a' }}>US$0</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '4%' }}>
            <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Regular', color: '#666666' }}>Taxes</Text>
            <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Regular', color: '#1a1a1a' }}>US$0</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '4%' }}>
            <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Regular', color: '#666666' }}>Shipping</Text>
            <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Regular', color: '#1a1a1a' }}>US$0</Text>
          </View>



        </View>

        <View style={{ borderBottomWidth: 1.5, marginTop: "3%", marginHorizontal: "3%", borderColor: "#000000" }}></View>
        <View style={{ marginHorizontal: "3%", marginTop: "4%", bottom: 5 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ color: "#1A1A1A", fontSize: 18, fontFamily: 'hinted-AvertaStd-Regular' }}>Grand Total:</Text>
            <Text style={{ color: "#1A1A1A", fontSize: 18, fontFamily: 'hinted-AvertaStd-Bold' }}>US$0</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%" }}>

          {couponcode == false && <View>
            <TextInput style={{ backgroundColor: '#E6E6E6', borderRadius: 10, paddingLeft: '5%', fontSize: 18, lineHeight: 23, letterSpacing: -0.125172, width: '120%', height: 50, color: '#878787', fontWeight: 'normal', fontStyle: 'normal', fontFamily: 'hinted-AvertaStd-Regular' }}
              placeholder="Enter coupon code"
              onChangeText={onChangeText1}
              value={text1}
              placeholderTextColor="#999999"
            />
          </View>
          }
          {couponcode == true && <View>
            <TextInput style={{ backgroundColor: '#999999', borderRadius: 10, paddingLeft: '5%', fontSize: 18, lineHeight: 23, letterSpacing: -0.125172, width: '120%', height: 50, color: '#878787', fontWeight: 'normal', fontStyle: 'normal', fontFamily: 'hinted-AvertaStd-Regular' }}
              placeholder="Coupon code applied"
              onChangeText={onChangeText1}
              value={text1}
              placeholderTextColor="#ffffff"
            />
          </View>
          }
          <TouchableOpacity onPress={() => props.navigation.navigate("Shippayment")} style={{ marginTop: "3%", backgroundColor: "#4AFFBD", height: 38, width: 110, borderRadius: 20 }}>
            <Text style={{ textAlign: 'center', paddingTop: "10%", color: "#1A1A1A", fontSize: 12, fontFamily: "hinted-AvertaStd-Bold", fontWeight: "bold" }}>APPLY</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginHorizontal: "3%", marginTop: "6%" }}>
          <Text style={{ color: "#1A1A1A", fontSize: 18, fontFamily: "hinted-AvertaStd-Bold", fontWeight: "bold" }}>We Accept:</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "5%", marginBottom: "8%" }}>
          <View>
            <Image source={ImageIcons.visa} style={{ width: 45, height: 30 }} />
          </View>
          <View>
            <Image source={ImageIcons.mastercard} style={{ width: 45, height: 30 }} />
          </View>
          <View>
            <Image source={ImageIcons.mastro} style={{ width: 45, height: 30 }} />
          </View>
          <View>
            <Image source={ImageIcons.paypal} style={{ width: 45, height: 30 }} />
          </View>
          <View>
            <Image source={ImageIcons.express} style={{ width: 45, height: 30 }} />
          </View>
          <View>
            <Image source={ImageIcons.affrim} style={{ width: 45, height: 30 }} />
          </View>
          <View>
            <Image source={ImageIcons.discover} style={{ width: 45, height: 30 }} />
          </View>
        </View>




      </ScrollView>
      <View style={{ marginHorizontal: "3%", marginTop: "4%", bottom: 5, elevation: 1, }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#1A1A1A", fontSize: 18, fontFamily: 'hinted-AvertaStd-Regular' }}>Grand Total:</Text>
          <Text style={{ color: "#1A1A1A", fontSize: 18, fontFamily: 'hinted-AvertaStd-Bold' }}>US$0</Text>
        </View>


        <TouchableOpacity onPress={() => { closepopup(); setVisiblebag(true) }} style={{ width: deviceWidth / 1.05, backgroundColor: "#B80000", borderRadius: 30, marginTop: "3%", height: 38 }} >
          <Text style={{ textAlign: 'center', color: "#FFFFFF", fontWeight: 'bold', fontSize: 18, top: 8 }}>CONTINUE TO PAYMENT</Text>
        </TouchableOpacity>
      </View>
      {visiblebag == true &&
        <View style={{ flex: 1, backgroundColor: '#ffffff', paddingVertical: 10, borderRadius: 10, zIndex: 4001, position: 'absolute', bottom: '20%', margin: "5%", alignSelf: "center" }}>

          <TouchableOpacity style={{ position: 'absolute', right: 15, marginTop: "3%" }} onPress={() => closebagpopup()}>
            <Image source={ImageIcons.closepopup} style={tw.style('w-9 h-[27px]')} />
          </TouchableOpacity>



          <View style={{ marginLeft: "2%" }}>
            <Text style={{ fontSize: 22, fontStyle: 'normal', marginTop: '8%', fontFamily: 'hinted-AvertaStd-Regular', color: '#1A1A1A', fontWeight: "bold" }}>Select a shipping address:</Text>
          </View>

          <View style={{ marginHorizontal: "3%", borderWidth: 2, borderRadius: 10, borderColor: "#8B0000", backgroundColor: "#ffffff" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "2%", marginTop: "2%" }}>
              <View style={{ backgroundColor: "#E6E6E6", width: deviceWidth / 3, height: 25, paddingTop: "1%", borderRadius: 5 }}><Text style={{ textAlign: "center", color: "#2F80ED", fontSize: 12, fontWeight: "bold", fontFamily: "hinted-AvertaStd-Regular" }}>
                DEFAULT ADDRESS</Text></View>

            </View>
            <Text style={{ fontSize: 18, fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A", padding: "2%" }}>Marry Davis {"\n"}2501 Stevens Ev{"\n"}Miniapolis MN,54404{"\n"}USA</Text>
          </View>

          <View style={{ marginHorizontal: "3%", backgroundColor: "#FFFFFF", marginTop: "3%", elevation: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "0%" }}>

              <Text style={{ fontSize: 18, fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A", padding: "2%" }}>Marry Davis {"\n"}2501 Stevens Ev{"\n"}Miniapolis MN,54404{"\n"}USA</Text>


            </View>
          </View>



          <TouchableOpacity onPress={() => { setshipadd(false); closebagpopup() }} style={{ width: deviceWidth / 1.3, backgroundColor: "#B80000", borderRadius: 30, marginTop: "10%", height: 38, marginHorizontal: "3%" }} >
            <Text style={{ textAlign: 'center', color: "#FFFFFF", fontWeight: 'bold', fontSize: 18, top: 8 }}>CONFIRM SELECTION</Text>
          </TouchableOpacity>



        </View>
      }

    </KeyboardAvoidingView>
  )
}



export default Shipaddress