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
import styles from '../../../screens/common/styles';
import styl from '../../../screens/common/styledrop';
import { Colors, CommonStrings } from '../../../common'
import ImageIcons from '../../../common/ImageIcons'
import InputField from '../../../components/forms/inputField';
import { RoundedButton } from '../../../components/forms/button';
import { phoneRegExp } from '../../../services/helper';
import DropdownField from '../../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../../components/modals/Loader';
import { RadioButton, Provider, Portal, Button, } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Footer3 from '../../../screens/common/Footer3';
import * as Progress from 'react-native-progress';
import RnIncrementDecrementBtn from
  'react-native-increment-decrement-button';
import Modal from 'react-native-modal';
import Moment from 'moment';
import tw from 'twrnc';

const Accountorderview = (props) => {

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
  const orderNumber = props?.route?.params?.orderNumber;
  // Local states

  const [text3, onChangeText3] = React.useState("");
  const [helppopup1, sethelppopup1] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [starCount, setstarCount] = useState(3);
  const [visiblebag, setVisiblebag] = React.useState(false);
  const [couponcode, setcouponcode] = React.useState(false);
  const [showclassName, setshowclassName] = useState("#B80000");

  useEffect(() => {
    props.shopproduct(shopId);
    props.shopsellcount(shopId);
    props.getincomingtlist(props?.loginuserid);

    console.log('listorder===>?>?',props?.getinconeorderlist)
    props.getorderdetail(orderNumber);
    console.log('getorderlist', props.getorderdetail);
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

  const handleScroll = (pageYOffset) => {
    if (pageYOffset > 0) {
      setshowclassName('#B80000');
    } else {
      setshowclassName('#B80000');
    }
  }

  const containerStyle = { backgroundColor: 'white', padding: '3%', marginHorizontal: '5%', borderRadius: 10 };
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
  const renderItem = ({ item, index }) => {
    return (
      <View style={tw`flex flex-row`}>
        <View style={tw`flex-row justify-center items-center`}>
          <Image source={{ uri: item?.productId?.productImage }} style={tw`w-30 h-30 rounded-lg`} />
          <View style={tw`ml-3 mr-7`}>

              <View style={tw`flex flex-row`}>
                <Text style={tw`text-base text-gray-900`}>Name:</Text>
                <Text style={tw`text-base text-gray-700`}>{item?.productId?.productName}</Text>
              </View>

              <View style={tw`flex flex-row`}>
                <Text style={tw`text-base text-gray-900`}>Price:</Text>
                <Text style={tw`text-base text-gray-700`}>{item.productPrice}</Text>
              </View>


              <View style={tw`flex flex-row`}>
                <Text style={tw`text-base text-gray-900`}>Size:</Text>
                <Text style={tw`text-base text-gray-700`}>{item.productSize}</Text>
              </View>

              <View style={tw`flex flex-row`}>
                <Text style={tw`text-base text-gray-900`}>Quantity:</Text>
                <Text style={tw`text-base text-gray-700`}>{item.productQuantity}</Text>
              </View>

          </View>
        </View>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.registrationRoot}>


      <ScrollView onScroll={({ nativeEvent }) => {
        handleScroll(nativeEvent['contentOffset'].y);
      }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#FFFFFF' }} >


        <View style={tw`flex flex-row justify-between mx-4 mt-[10%] mb-2`}>
          <Text style={tw`text-2xl text-gray-900`}>View Order</Text>
        </View>


        <View style={tw`mx-4 mt-4 mb-2`}>
          <View>
            <TouchableOpacity style={tw`my-2 w-1/4 items-center px-3 py-1 rounded-full bg-blue-100 mb-3`}>
              <Text style={tw`text-xs font-medium text-blue-900`} >{props?.getorderlist?.data?.orderStatus}</Text>
            </TouchableOpacity>
            <View style={tw`flex flex-row items-center`}>
              <Text style={tw`text-base font-medium text-gray-900`}>Order No: </Text>
              <Text style={tw`text-sm font-medium text-blue-700`}>{props?.getorderlist?.data?.orderNumber}</Text>
            </View>
            <View style={{ alignItems: "center", marginTop: "1%", flexDirection: 'row', }}>
              <Text style={tw`text-base font-medium text-gray-900`}>Date: </Text>
              <Text style={tw`text-base font-medium text-gray-900`}>{Moment(props?.getinconeorderlist?.createdAt).format('MMM DD YYYY')}</Text>
            </View>
          </View>

        </View>

        {/*<View style={{ flexDirection: 'row', marginTop: '5%', marginHorizontal: '4%' }}>
           <View style={{ backgroundColor: '#b80000', width: '32%', borderRadius: 15, padding: 8, marginLeft: '4%' }}>
            <Text style={[styles.totalincometodayWIDRO, { color: '#ffffff' }]}>CANCEL ORDER</Text>
          </View>
        </View>*/}

        <View style={tw`mx-4 my-6`}>
          <FlatList
            data={props?.getorderlist?.ItemList || []}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          />
        </View>

        <View style={tw`mt-4 mb-1 mx-4`}>
          <Text style={tw`text-2xl text-blue-900`}>Order Summary</Text>
        </View>

        <View style={tw`flex flex-row justify-between mx-5 items-center`}>
          <Text style={tw`text-base text-gray-900`}>Subtotal</Text>
          <Text style={tw`text-base text-blue-900`}>${props?.getorderlist?.data?.orderAmount}</Text>
        </View>
        <View style={tw`flex flex-row justify-between mx-5 items-center`}>
          <Text style={tw`text-base text-gray-900`}>Taxes</Text>
          <Text style={tw`text-base text-blue-900`}>US$0</Text>
        </View>
        <View style={tw`flex flex-row justify-between mx-5 items-center`}>
          <Text style={tw`text-base text-gray-900`}>Shipping</Text>
          <Text style={tw`text-base text-blue-900`}>US$0</Text>
        </View>


        <View style={tw`border-b-2 border-gray-900 my-3 mx-4`}></View>
        <View style={tw`mb-10 mx-5 mt-5`}>
          <View style={tw`flex flex-row justify-between`}>
            <Text style={tw`text-lg text-gray-900`}>Grand Total:</Text>
            <Text style={tw`text-2xl text-gray-900`}>${props?.getorderlist?.data?.orderAmount}</Text>
          </View>
        </View>

        <View style={tw`mt-10 mx-3`}>
          <Text style={tw`text-2xl text-blue-900`}>Order Details</Text>
        </View>

        <View style={tw`flex flex-row justify-between mx-4`}>
            <View style={tw`mt-5`}>
              <Text style={tw`text-xl text-black`}>Personal Details</Text>
              <Text style={tw`text-base text-gray-900 leading-1.2`}>{props?.getorderlist?.data?.firstName} {props?.getorderlist?.data?.lastName}{"\n"}{props?.getorderlist?.data?.streetAdress}{"\n"}{props?.getorderlist?.data?.city}, {props?.getorderlist?.data?.zipCode} {"\n"}{props?.getorderlist?.data?.country},{"\n"}
                {"\n"}{props?.getorderlist?.data?.email}{props?.getorderlist?.data?.phoneNumber}</Text>
            </View>

            <View style={tw`mt-5`}>
              <Text style={tw`text-xl text-black`}>Shipping Information</Text>
              <Text style={tw`text-base text-gray-900 leading-1.2`}>Standard Shipping {"\n"}{props?.getorderlist?.data?.streetAdress}{"\n"}{props?.getorderlist?.data?.city}, {props?.getorderlist?.data?.zipCode}{"\n"}{props?.getorderlist?.data?.country}{"\n"}
                </Text>
            </View>
        </View>
        <View style={tw`flex flex-row justify-between mx-4`}>
          <View style={tw`mt-5`}>
            <Text style={tw`text-xl text-black`}>Billing Information</Text>
            <Text style={tw`text-base text-gray-900 leading-1.2`}>{props?.getorderlist?.data?.streetAdress}{"\n"}{props?.getorderlist?.data?.city}, {props?.getorderlist?.data?.zipCode}{"\n"}{props?.getorderlist?.data?.country}{"\n"}
              </Text>
          </View>
          <View style={tw`mt-5`}>
            <Text style={tw`text-xl text-black`}>Payment</Text>
            <Text style={tw`text-base text-gray-900 leading-1.2`}>Pay by credit/debit card</Text>
          </View>
        </View>
        <View>
          {openpopup &&
            <Provider>
              <Portal>
                <Modal visible={visible} style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', marginHorizontal: -20, marginVertical: -5 }} onDismiss={closepopup} contentContainerStyle={containerStyle}>
                  <View style={{ marginTop: 40, position: 'absolute', textAlign: 'center', justifyContent: 'center', alignItems: 'center', top: 10, left: 0, right: 0 }}>
                    <View style={{ width: 320, borderRadius: 10, backgroundColor: '#f2f2f2', borderColor: '#999', borderWidth: 2 }}>
                      <View style={{ width: deviceWidth / 1.15, backgroundColor: '#f2f2f2', padding: '5%', alignSelf: 'center', marginTop: '3%', borderRadius: 15, }}>
                        <TouchableOpacity onPress={() => closepopup()} style={{ height: 40, width: 40, backgroundColor: '#e6e6e6', borderRadius: 4, padding: 8, alignSelf: 'flex-end' }}>
                          <Image source={ImageIcons.closetoday} style={{ height: 12, width: 12, marginTop: 5, alignSelf: 'center' }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, fontFamily: 'hinted-AvertaStd-Semibold', color: '#1a1a1a', marginTop: '3%' }}>Select a shipping address:</Text>
                        <View style={{ borderWidth: 2, borderColor: '#b80000', padding: 4, borderRadius: 15, marginVertical: '5%', backgroundColor: '#ffffff' }}>
                          <View style={{ backgroundColor: '#d0e3fb', width: '45%', borderRadius: 10, padding: 8, marginHorizontal: '2%', marginVertical: '3%' }}>
                            <Text style={styles.totalincometodayWIDROprocess}>DEFAULT ADDRESS</Text>
                          </View>
                          <Text style={{ fontSize: 18, fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A", marginHorizontal: '2%' }}>Standard Shipping {"\n"}{props?.getorderlist?.data?.zipCode}, {"\n"}{props?.getorderlist?.data?.city},{props?.getorderlist?.data?.country}{"\n"}
                            {props?.getorderlist?.data?.streetAdress}</Text>
                        </View>
                        <View style={{ padding: 4, marginVertical: '5%', elevation: 0.5, backgroundColor: '#ffffff', borderRadius: 5 }}>
                          <Text style={{ fontSize: 18, fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A", marginHorizontal: '2%', marginTop: '2%' }}>Marry Davis {"\n"}2501 Stevens Ev{"\n"}Miniapolis MN,54404{"\n"}
                            USA{"\n"}</Text>
                        </View>

                        <View style={{ padding: '4%', elevation: 0.5, marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#ffffff', borderRadius: 5 }}>
                          <Text style={{ fontSize: 18, fontFamily: "hinted-AvertaStd-Semibold", alignSelf: 'center' }}>Add a New Addresss</Text>
                          <TouchableOpacity onPress={() => closepopup()} style={{ height: 40, width: 40, backgroundColor: '#e6e6e6', borderRadius: 4, padding: 8, }}>
                            <Image source={ImageIcons.addwhytoday} style={{ height: 15, width: 15, marginTop: 5, alignSelf: 'center' }} />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </Modal>
              </Portal>
            </Provider>
          }
        </View>
      </ScrollView>


      {helppopup1 == true &&
        <View style={{ flex: 1, backgroundColor: '#ffffff', margin: 20, paddingVertical: 10, borderRadius: 10, zIndex: 4001, position: 'absolute', bottom: '10%' }}>


          <View style={styles.chatViewrose}>

            <Text style={styles.Benrosetext}>Chat with customer support</Text>
            <TouchableOpacity style={{ position: 'absolute', right: 15, top: 5 }} onPress={() => sethelppopup1(false)}>
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
                value={text3}
                placeholderTextColor="#999999"
              />
            </View>
            <TouchableOpacity style={{ position: 'absolute', right: 55, top: 5 }} onPress={() => handleSendRequestSubmit()}>
              <Image source={ImageIcons.sendchat} style={styles.sendmsg1} />
            </TouchableOpacity>
          </View>
        </View>
      }

      {visiblebag == true &&
        <View style={{ flex: 1, backgroundColor: '#ffffff', paddingVertical: 10, borderRadius: 10, zIndex: 4001, position: 'absolute', bottom: '20%', margin: "5%" }}>

          <TouchableOpacity style={{ position: 'absolute', right: 15 }} onPress={() => closebagpopup()}>
            <Image source={ImageIcons.closepopup} style={styles.sendmsg2} />
          </TouchableOpacity>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "1%", marginVertical: "3%" }}>
            <View style={{ marginTop: '3%', }}>
              <Image source={ImageIcons.teashop} style={{ width: 177, height: 183, borderRadius: 10 }} />
            </View>
            <View style={{ marginTop: '3%', marginLeft: "2%" }}>
              <Image source={ImageIcons.teashop} style={{ width: 177, height: 183, borderRadius: 10 }} />
            </View>
          </View>

          <View style={{ marginLeft: "2%" }}>
            <Text style={{ fontSize: 18, fontStyle: 'normal', marginVertical: '2%', fontFamily: 'hinted-AvertaStd-Regular', color: '#1A1A1A' }}>Ribbed Knit Bardot Crossover Top</Text>
          </View>

          <View style={{ marginLeft: "2%" }}>
            <Text style={{ fontSize: 20, fontStyle: 'normal', fontWeight: "bold", marginVertical: '2%', fontFamily: 'hinted-AvertaStd-Regular', color: '#1A1A1A' }}>$0</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <View style={{ flexDirection: 'row', marginHorizontal: '4%', marginTop: '4%' }}>
                <Text style={{ fontSize: 18, fontFamily: 'hinted-AvertaStd-Bold', }}>Color :</Text>
                <Text style={{ fontSize: 18, fontFamily: 'hinted-AvertaStd-Regular', marginLeft: 5 }}>White</Text>
              </View>

              <View style={{ flexDirection: 'row', marginHorizontal: '4%', marginVertical: '2%' }}>
                <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: '#b3b3b3' }}></View>
                <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: '#363e4d', marginLeft: '4%' }}></View>
                <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: '#40b7c8', marginLeft: '4%' }}></View>
              </View>
            </View>

            <View style={{ flexDirection: 'row', width: 100 }}>
              <View style={{ marginHorizontal: '4%', marginVertical: '3%' }}>
                <Text style={{ fontSize: 18, fontFamily: 'hinted-AvertaStd-Bold', }}>Size</Text>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ height: 40, width: 40, backgroundColor: '#e6e6e6', borderRadius: 4, padding: 9, }}>
                    <Text style={{ textAlign: 'center', color: '#4d4d4d', fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold' }}>XS</Text>
                  </View>
                  <View style={{ height: 40, width: 40, backgroundColor: '#e6e6e6', borderRadius: 4, padding: 9, marginLeft: 8 }}>
                    <Text style={{ textAlign: 'center', color: '#4d4d4d', fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold' }}>S</Text>
                  </View>
                  <View style={{ height: 40, width: 40, backgroundColor: '#8B0000', borderRadius: 4, padding: 9, marginLeft: 8 }}>
                    <Text style={{ textAlign: 'center', color: '#FFFFFF', fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold' }}>L</Text>
                  </View>

                </View>
                <View style={{ height: 40, width: 40, backgroundColor: '#999999', borderRadius: 4, padding: 9, marginTop: "2%" }}>
                  <Text style={{ textAlign: 'center', color: '#4d4d4d', fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold' }}>XL</Text>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity onPress={() => { setVisiblebag(false); setcouponcode(true) }} style={{ width: deviceWidth / 1.3, backgroundColor: "#B80000", borderRadius: 30, marginTop: "10%", height: 38, marginHorizontal: "3%" }} >
            <Text style={{ textAlign: 'center', color: "#FFFFFF", fontWeight: 'bold', fontSize: 18, top: 8 }}>UPDATE</Text>
          </TouchableOpacity>
        </View>
      }

      <Footer3 onSelection="5" />

    </KeyboardAvoidingView>
  )
}



export default Accountorderview
