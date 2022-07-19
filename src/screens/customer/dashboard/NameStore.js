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
import { RadioButton, Provider, Modal, Portal, Button, } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Footer3 from '../../../screens/common/Footer3';
import tw from 'twrnc';
import Share from 'react-native-share';
import * as Progress from 'react-native-progress';
import RnIncrementDecrementBtn from
  'react-native-increment-decrement-button';
import { PlayIcon } from "react-native-heroicons/solid";
import { ShareIcon } from "react-native-heroicons/solid";
import { CameraIcon } from "react-native-heroicons/solid";
import Medbutton from '../../../components/dropshipbutton/Medbutton';
import { ShoppingBagIcon } from "react-native-heroicons/solid";
import { HeartIcon } from "react-native-heroicons/solid";
import AwesomeAlert from '../../../components/modals/AlertModal';


const NameStore = (props) => {

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
  const productId = props?.route?.params?.productId;
  const shopId = props?.route?.params?.shopId;
  const categoryId = props?.route?.params?.categoryId;


  // Local states
  const [checked, setChecked] = React.useState('first');
  const [visible, setVisible] = React.useState(false);
  const [starCount, setstarCount] = useState(3);
  const [visiblebag, setVisiblebag] = React.useState(false);
  const [showclassName, setshowclassName] = useState("#B80000");
  const [reportpopup, setreportpopup] = React.useState(false);
  const [fav, setfav] = React.useState(false);
  const [incCount, setincCount] = useState(1);
  const [openpopup, setopenpopup] = React.useState(false);

  const [showotherAlert, setshowotherAlert] = React.useState(false);
    const [showalertmsg, setshowalertmsg] = React.useState('');

  useEffect(() => {
    props.getAllproductdetails(productId);
    props.shopproduct(shopId);
    props.shopsellcount(shopId);
  }, [])

  const cartdataSubmit = async () => {

    let request = {
      "productId": props?.getlistproductdetails?.data?._id,
      "userId": props?.loginuserid,
      "productQuantity": 1,
      "productPrice":props?.getlistproductdetails?.data?.productPrice
    }
    props.cartadd(request, props.navigation, "vendor");
    setshowotherAlert(true)
    setshowalertmsg('Item added in cart successfully!')
    setTimeout(function(){  props.cartdata(props?.loginuserid); },1000);
  }

  const getpopup = () => {
    setshowotherAlert(true)
    setshowalertmsg('Item added in cart successfully!')
    // setVisible(true)
    // setopenpopup()

  }
  const closepopup = () => {
    setVisible(false)
  }

  const openshare=()=>{
        let options = {
          message: props?.getlistproductdetails?.data?.productName,
          url: props?.getlistproductdetails?.data?.productImage,
        };
      Share.open(options);
    }

  const closebagpopup = () => {
    setVisiblebag(false)
  }
  const setIncrement = async (Incval, cartId) => {
    setincCount(Incval);
    //props.increcartlist(cartId, Incval);
  };

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

  const containerStyle = { backgroundColor: 'white', padding: '3%', marginHorizontal: '8%', borderRadius: 10, alignSelf: 'center', justifyContent: 'center' };


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


  const renderItem1 = ({ item, index }) => {
    return (
      <View style={tw.style('flex flex-row mt-[3%] mx-[3%] rounded-md')}>
        <TouchableOpacity>
          <View style={tw.style('p-0.5')}>
            <Image source={{uri: item.productImage}} style={{ height: 150, width: deviceWidth / 2.4, borderRadius: 10 }} onPress={() => { props.navigation.navigate("clothing") }} />
          </View>
          

          <View style={tw.style('flex flex-row mt-2.5 justify-between')}>
            <View style={tw.style('pl-2')}>
              <Text style={tw.style('text-[#1A1A1A] text-xs font-normal')}>{item.productName}</Text>
              <Text style={tw.style('text-[#1A1A1A] text-base font-bold')}>${item.productPrice}</Text>
              <View style={tw.style('flex flex-row mt-[5px] items-center')}>
                <Rating
                  type='custom'
                  imageSize={15}
                  ratingCount={5}
                  ratingColor='#EB5757'
                  tintColor='#FFE7E7'
                  value={starCount}
                  onFinishRating={(start) => ratingCompleted(start)}
                  style={tw.style('ml-[2%]')}
                />
                <Text style={tw.style('ml-3 text-sm text-black font-normal')}>4.0</Text>
              </View>
            </View>
            <View style={tw.style('mr-2')}>
              <View style={tw`bg-red-700 items-center p-1 rounded-md`}>
                <ShoppingBagIcon color="red" fill="white" size={18} />
              </View>
              <View style={tw`bg-gray-200 items-center p-1 rounded-md mt-1`}>
                <HeartIcon color="red" fill="red" size={18} />
              </View>
            </View>
          </View>





        </TouchableOpacity>
      </View>
    );
  }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={tw.style('flex-1 justify-center')}>


      <ScrollView onScroll={({ nativeEvent }) => {
        handleScroll(nativeEvent['contentOffset'].y);
      }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={tw.style('bg-white')} >

        
      <AwesomeAlert showotherAlert={showotherAlert} showalertmsg={showalertmsg} onSelect={(checked) => setshowotherAlert(checked)} />
        <View>
          <View style={tw`mx-4 mt-4 mb-3 bg-gray-200 h-70 rounded-lg justify-center items-center`}>
            <Image source={{ uri: props?.getlistproductdetails?.data?.productImage }} style={tw.style('w-full', { width: deviceWidth / 1.1 })} />
            <View style={tw.style('absolute')}>
              <PlayIcon color="red" fill="gray" size={96} />
            </View>
          </View>

          {props?.getlistproductdetails?.ProductImages?.length > 0 ?
            <View style={tw`mx-4 mt-10 justify-center items-center`}>
              <Image source={{ uri: props?.getlistproductdetails?.data?.productImage }} style={tw.style('w-full bg-gray-200 h-64 rounded-lb', { width: deviceWidth / 1.1 })} />
              <View style={tw.style('absolute m-[40%]')}>
                <Image source={ImageIcons.playicon} style={tw.style('absolute m-[40%]')} />
              </View>
            </View>
            :
            <View style={tw.style('flex flex-row mx-4 mt-2')}>
              <View style={tw.style('mr-1 justify-center items-center')}>
                <Image source={{ uri: props?.getlistproductdetails?.data?.productImage }} style={tw.style('w-[70px] h-[70px] rounded-[10px]')} />
                <View style={tw.style('absolute')}>
                  <CameraIcon color="red" fill="black" size={28} />
                </View>
              </View>
              <View style={tw.style('mr-1 justify-center items-center')}>
                <Image source={{ uri: props?.getlistproductdetails?.data?.productImage }} style={tw.style('w-[70px] h-[70px] rounded-[10px]')} />
                <View style={tw.style('absolute')}>
                  <CameraIcon color="red" fill="black" size={28} />
                </View>
              </View>
              <View style={tw.style('mr-1 justify-center items-center')}>
                <Image source={{ uri: props?.getlistproductdetails?.data?.productImage }} style={tw.style('w-[70px] h-[70px] rounded-[10px]')} />
                <View style={tw.style('absolute')}>
                  <CameraIcon color="red" fill="black" size={28} />
                </View>
              </View>

            </View>
          }
        </View>

        <View style={tw.style('flex flex-row mx-5 justify-between mt-2 items-center')}>
          <View>
            <Text style={tw.style('text-lg text-gray-600')}>{props?.getlistproductdetails?.data?.productName}</Text>
            <Text style={tw.style('text-2xl font-bold text-gray-600')}>${props?.getlistproductdetails?.data?.productPrice}</Text>
          </View>
          <TouchableOpacity style={tw.style('h-10 w-10 justify-center bg-gray-200 rounded-lg')} onPress={() =>  openshare() }>
           <View style={tw`items-center`}>
            <ShareIcon color="red" fill="gray" size={24} />
           </View>
          </TouchableOpacity>
        </View>



        <View style={tw.style('flex flex-row mt-3 mx-3')}>
          <View style={tw.style('mt-3')}>
            <Image source={{ uri: props?.getlistproductdetails?.getbrands?.brandImage }} style={tw.style('w-14 h-14 rounded-full bg-gray-500')} />
          </View>

          <View style={tw.style('pt-2.5 pl-2.5')}>
            <Text style={tw.style('text-[#1A1A1A] text-sm font-bold')}>{props?.getlistproductdetails?.getbrands?.brandName}</Text>
            <View style={tw.style('flex flex-row')}>
              <TouchableOpacity style={tw.style('mt-1 mr-2 py-1.5 px-3.3 bg-[#B80000] rounded-full')}>
                <Text style={tw.style('text-center text-white text-xs font-bold')}>FOLLOW</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw.style('mt-1 mr-2 py-1.5 px-3.3 bg-[#4AFFBD] rounded-full')}>
                <Text style={tw.style('text-center text-gray-700 text-xs font-bold')}>OPEN STORE</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View style={tw.style('border-b my-8 mx-4 border-[#B6B6B6]')}></View>
        <View style={tw.style('mx-4')}>
          <Text style={tw.style('text-gray-700 text-2xl font-bold')}>Product Details</Text>
          <Text style={tw.style('text-[#1A1A1A] text-lg font-normal')}>{props?.getlistproductdetails?.data?.productDescription}</Text>
        </View>


        {/*<View style={{ flexDirection: 'row', marginHorizontal: '4%', marginTop: '4%' }}>
          <Text style={styles.txtsyz}>Color :</Text>
          <Text style={{ fontSize: 18, fontFamily: 'hinted-AvertaStd-Regular', marginLeft: 5 }}>{props?.getlistproductdetails?.data?.productColor}</Text>
        </View>

        <View style={{ flexDirection: 'row', marginHorizontal: '4%', marginVertical: '2%' }}>
          <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: '#b3b3b3' }}></View>
          <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: '#363e4d', marginLeft: '4%' }}></View>
          <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: '#40b7c8', marginLeft: '4%' }}></View>
        </View>
        */}

        <View style={tw.style('flex flex-row mt-[1%]')}>
          {/*<View style={{ marginHorizontal: '4%', marginVertical: '3%' }}>
            <Text style={styles.txtsyz}>Size</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ height: 40, width: 40, backgroundColor: '#e6e6e6', borderRadius: 4, padding: 9, }}>
                <Text style={{ textAlign: 'center', color: '#4d4d4d', fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold' }}>{props?.getlistproductdetails?.data?.productSize}</Text>
              </View>

            </View>
      </View>*/}
        </View>

        <View style={tw.style('flex flex-row mx-4 mt-10 justify-between')}>
          <View style={tw`w-[65%]`}>
            <Medbutton text="Add to Bag" onPress={() => { cartdataSubmit() }}/>
          </View>

          <View style={tw.style('ml-3 w-20 h-auto bg-gray-100 justify-center items-center rounded-lg')}>
            <TouchableOpacity onPress={() => { setfav(s => !s) }} >
               {fav==true ?
                  <Image source={ImageIcons.calllike} style={[tw.style('w-[35px] h-[30px]'),{tintColor:'#b80000'}]} />
                  :
                  <Image source={ImageIcons.calllike} style={[tw.style('w-[35px] h-[30px]'),{tintColor:'#b3b3b3'}]} />
                }

            </TouchableOpacity>
          </View>

        </View>

        <View style={{marginTop:"4%",marginHorizontal:"4%"}}>
          <Text style={styles.clothpop}>Customer Reviews (0)</Text>
          </View>

        <View style={{flexDirection:'row',marginTop:"5%"}}>
        <Rating
          type='custom'
          imageSize={18}
          ratingCount={5}
          ratingColor='#EB5757'
          tintColor='#FFE7E7'
          value={starCount}
          style={{ marginLeft:'3%',marginTop:"1%"}}
        />
      <Text style={[styles.TEXT,{fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",fontSize:18}]}>Avg. Rating 4.5</Text>
      </View>



  <View style={{flexDirection:'row',marginTop:"5%"}}>
    <Rating
      type='custom'
      imageSize={18}
      ratingCount={5}
      ratingColor='#EB5757'
      tintColor='#FFE7E7'
      value={starCount}
      onFinishRating={(start) => ratingCompleted(start)}
      style={{ marginLeft:'3%',marginTop:"1%"}}
    />
  <View style={{marginLeft:"2%",backgroundColor:"#B3B3B3",borderRadius:5,height:21}}>
  <Progress.Bar progress={0.84} width={200} height={20} color={"#B80000"} />
  </View>
  <Text style={[styles.TEXT,{fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",fontSize:18}]}>84%</Text>
  </View>

  <View style={{flexDirection:'row',marginTop:"5%"}}>
    <Rating
      type='custom'
      imageSize={18}
      ratingCount={5}
      ratingColor='#EB5757'
      tintColor='#FFE7E7'
      value={starCount}
      onFinishRating={(start) => ratingCompleted(start)}
      style={{ marginLeft:'3%',marginTop:"1%"}}
    />
    <View style={{marginLeft:"2%",backgroundColor:"#B3B3B3",borderRadius:5,height:21}}>
      <Progress.Bar progress={0.10} width={200} height={20} color={"#B80000"} />
    </View>
    <Text style={[styles.TEXT,{fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",fontSize:18}]}>10%</Text>
  </View>

  <View style={{flexDirection:'row',marginTop:"5%"}}>
    <Rating
        type='custom'
        imageSize={18}
        ratingCount={5}
        ratingColor='#EB5757'
        tintColor='#FFE7E7'
        value={starCount}
        onFinishRating={(start) => ratingCompleted(start)}
        style={{ marginLeft:'3%',marginTop:"1%"}}
    />
    <View style={{marginLeft:"2%",backgroundColor:"#B3B3B3",borderRadius:5,height:21}}>
      <Progress.Bar progress={0.03} width={200} height={20} color={"#B80000"} />
    </View>
      <Text style={[styles.TEXT,{fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",fontSize:18}]}>3%</Text>
  </View>

  <View style={{flexDirection:'row',marginTop:"5%"}}>
  <Rating
    type='custom'
    imageSize={18}
    ratingCount={5}
    ratingColor='#EB5757'
    tintColor='#FFE7E7'
    value={starCount}
    style={{ marginLeft:'3%',marginTop:"1%"}}
  />
  <View style={{marginLeft:"2%",backgroundColor:"#B3B3B3",borderRadius:5,height:21}}>
    <Progress.Bar progress={0.01} width={200} height={20} borderWidth={1} color={"#B80000"} />
  </View>
    <Text style={[styles.TEXT,{fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",fontSize:18}]}>1%</Text>
  </View>

  <View style={{flexDirection:'row',marginTop:"5%"}}>
  <Rating
      type='custom'
      imageSize={18}
      ratingCount={5}
      ratingColor='#EB5757'
      tintColor='#FFE7E7'
      value={1}
      style={{ marginLeft:'3%',marginTop:"1%"}}
  />
  <View style={{marginLeft:"2%",backgroundColor:"#B3B3B3",borderRadius:5,height:21}}>
      <Progress.Bar progress={0.01} width={200} height={20} color={"#B80000"} />
  </View>
    <Text style={[styles.TEXT,{fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",fontSize:18}]}>1%</Text>
  </View>

        <View style={tw`mt-5 mx-3`}>
          <Text style={styles.clothpop}>More Products from this Store</Text>
        </View>

        <View style={tw`mx-3 mb-4`}>
          <FlatList
            data={props?.getlistproduct || []}
            renderItem={renderItem1}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
          />
        </View>


        {openpopup &&
          <Provider>
            <Portal>
              <Modal visible={visible} contentContainerStyle={containerStyle}>

                <View style={tw.style('flex flex-row')}>
                  <View style={tw.style('mt-[3%] mr-[2%]')}>
                    <Image source={{ uri: props?.getlistproductdetails?.data?.productImage }} style={tw.style('w-[83px] h-[96px] rounded-[10px]')} />
                  </View>

                  <View>
                    <View style={tw.style('flex flex-row')}>
                      <View style={tw.style('w-[60%]')}>
                        <Text style={tw.style('text-base font-normal my-[4%] text-[#1A1A1A]')}>{props?.getlistproductdetails?.data?.productName}</Text>
                      </View>

                    </View>

                    <View>
                      <Text style={tw.style('text-lg font-bold text-[#1A1A1A]')}>${props?.getlistproductdetails?.data?.productPrice}</Text>
                    </View>


                    <View style={tw.style('flex flex-row')}>
                      {/*<View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginVertical: '1%', fontFamily: 'hinted-AvertaStd-Regular', color: '#1A1A1A' }}>Color:</Text>
                      </View>
                      <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: '#b3b3b3', marginLeft: "1%" }}></View>*/}
                      <Text style={tw.style('text-base font-bold text-[#1A1A1A]')}>Size : S</Text>
                    </View>



                    <View style={tw.style('flex flex-row')}>
                      <View style={tw.style('flex flex-row')}>
                        <RnIncrementDecrementBtn
                          minVal={1}
                          minreq={1}
                          max={99}
                          val={incCount}
                          styleBtn={{ width: 30.6, height: 26, backgroundColor: '#F3F3F3' }}
                          styleTextInput={{ width: 38.25, height: 26, backgroundColor: '#F3F3F3' }}
                          labelStyle={{ fontSize: 13, marginTop: 0, color: '#223263', fontFamily: 'hinted-AvertaStd-Regular' }}
                          handleClick={(val) => setIncrement(val,1)}
                        />
                      </View>
                      {/*<View style={{ marginLeft: "25%" }}>
                        <Text style={{ color: "#1A1A1A", fontSize: 16, fontFamily: 'hinted-AvertaStd-Regular' }}>Total:</Text>
                        <Text style={{ color: "#1A1A1A", fontSize: 16, fontFamily: 'hinted-AvertaStd-Bold' }}>${props?.getlistproductdetails?.data?.productPrice}</Text>
                      </View>*/}
                    </View>
                  </View>
                </View>

                <View style={tw.style('border-b mt-[3%] border-[#B3B3B3]')}></View>

                <View style={tw.style('flex flex-row justify-end')}>
                  <Text style={tw.style('text-[#1A1A1A] text-xl font-normal')}>Total:</Text>
                  <Text style={tw.style('text-[#1A1A1A] text-xl font-bold')}>${props?.getlistproductdetails?.data?.productPrice * incCount}</Text>
                </View>

                <TouchableOpacity onPress={() => { props.navigation.navigate('Cart') }} style={{ width: deviceWidth / 1.3, backgroundColor: "#B80000", borderRadius: 30, marginVertical: "3%", height: 38, justifyContent: 'center', marginHorizontal: "3%" }} >
                  <Text style={{ textAlign: 'center', color: "#FFFFFF", fontWeight: 'bold', fontSize: 15 }}>VIEW BAG</Text>
                </TouchableOpacity>
              </Modal>
            </Portal>
          </Provider>
        }


      </ScrollView>
      {visiblebag == true &&
        <View style={{ flex: 1, backgroundColor: '#ffffff', paddingVertical: 10, borderRadius: 10, zIndex: 4001, position: 'absolute', bottom: '40%', margin: "10%" }}>


          <View>

            <Text style={{ fontSize: 20, fontFamily: "hinted-AvertaStd-Regular", color: "#666666", paddingLeft: "16%" }}>Your shopping bag is empty.</Text>

          </View>
          <TouchableOpacity onPress={() => { setVisiblebag(false); }} style={{ width: deviceWidth / 1.3, backgroundColor: "#B80000", borderRadius: 30, marginTop: "10%", height: 38, marginHorizontal: "3%" }} >
            <Text style={{ textAlign: 'center', color: "#FFFFFF", fontWeight: 'bold', fontSize: 18, top: 8 }}>START SHOPPING</Text>
          </TouchableOpacity>



        </View>
      }




      <Footer3 onSelection="4" />

    </KeyboardAvoidingView>
  )
}



export default NameStore
