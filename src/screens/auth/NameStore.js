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
import { RadioButton, Provider, Modal, Portal, Button, } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Footer3 from '../../screens/auth/Footer3';
import Shopheader from '../../screens/auth/Shopheader';
import tw from 'twrnc';

import * as Progress from 'react-native-progress';
import RnIncrementDecrementBtn from
  'react-native-increment-decrement-button';


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
  const [helppopup, sethelppopup] = React.useState(false);
  const [reportpopup, setreportpopup] = React.useState(false);
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
    props.getAllproductdetails(productId);
    props.shopproduct(shopId);
    props.shopsellcount(shopId);
  }, [])

  const cartdataSubmit = async (productId, productQuantity) => {

    openpopup();

    let request = {
      "productId": productId,
      "userId": props?.loginuserid,
      "productQuantity": productQuantity
    }

    props.cartadd(request, props.navigation, "vendor");
  }

  const openpopup = () => {
    setVisible(true)

  }
  const closepopup = () => {
    setVisible(false)
  }


  const closebagpopup = () => {
    setVisiblebag(false)
  }
  const setIncrement = async (Incval, cartId) => {
    props.increcartlist(cartId, Incval);
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
      <View style={tw.style('flex flex-row mt-[5%] mx-[2%] rounded-[10px]')}>
        <TouchableOpacity onPress={() => { props.navigation.navigate("NameStore", { shopId: item._id, shopName: item.shopName }) }}>
          <View style={tw.style('p-0.5')}>
            <Image source={ImageIcons.winterimage} style={{ height: 150, width: deviceWidth / 2.4, borderRadius: 10 }} onPress={() => { props.navigation.navigate("clothing") }} />


          </View>
          <View style={tw.style('flex flex-row mt-2.5 justify-between')}>
            <View style={tw.style('pl-2')}>
              <Text style={tw.style('text-[#1A1A1A] text-xs font-normal')}>Blue Purse</Text>
              <Text style={tw.style('text-[#1A1A1A] text-base font-bold')}>$0</Text>
              <View style={tw.style('flex flex-row mt-[5px]')}>
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
                <Text style={tw.style('text-sm mx-[2%] text-black font-normal')}>4.0</Text>

              </View>
            </View>
            <View style={tw.style('mr-2')}>
              <Image source={ImageIcons.Iconlock} style={tw.style('w-[30px] h-[30px]')} />
              <Image source={ImageIcons.iconheart} style={tw.style('w-[30px] h-[30px] mt-[5px]')} />
            </View>
          </View>





        </TouchableOpacity>
      </View>
    );
  }

  const renderItem = ({ item }) => {

    return (
      <View style={tw.style('flex flex-row justify-between mt-[5%] mx-[2%] bg-[#f9f9f9] rounded-[10px]')}>
        <TouchableOpacity onPress={() => { props.navigation.navigate("ProductDetails2", { productId: item._id, shopId: shopId, userType: 'shopside' }) }}>
          <View >
            <Image source={{ uri: item.productImage }} style={{ height: deviceWidth / 2.2 + 80, borderRadius: 5, width: deviceWidth / 2.3 }} />
            <View>
              <Text style={tw.style('text-sm mx-[2%] text-black font-normal')}>{item.productName}</Text>
              <Text style={tw.style('text-xs font-normal text-black')}>${item.productPrice}</Text>
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
      <StatusBar backgroundColor={showclassName} barStyle="dark-content" translucent={true} />
      <Shopheader />

      <ScrollView onScroll={({ nativeEvent }) => {
        handleScroll(nativeEvent['contentOffset'].y);
      }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={tw.style('bg-white')} >

        <View style={tw.style('mx-[3%]')}>
          <TouchableOpacity onPress={() => props.navigation.navigate("shop")}>
            <View style={tw.style('flex flex-row mt-[10%]')}>
              <Image source={ImageIcons.backpopup} style={tw.style('w-2.5 h-[17px]')} />
              <View style={tw.style('border-b-[3px] w-10 ml-[-2%] mb-[3%]')}></View>
              <Text style={tw.style('text-sm font-bold pl-[5px]')}>GO BACK</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>

          {props?.getlistproductdetails?.ProductImages?.length > 0 ?
            <View style={tw.style('mx-[4%] mt-[5%]')}>
              <Image source={{ uri: props?.getlistproductdetails?.data?.productImage }} style={{ width: deviceWidth / 1.1, height: 365, borderRadius: 10 }} />
              <View style={tw.style('absolute m-[40%]')}>
                <Image source={ImageIcons.playicon} style={tw.style('absolute m-[40%]')} />
              </View>
            </View>
            :
            <View style={tw.style('flex flex-row mx-[4%] mt-[5%]')}>
              <View style={tw.style('mx-[2%]')}>
                <Image source={{ uri: props?.getlistproductdetails?.data?.productImage }} style={tw.style('w-[70px] h-[70px] rounded-[10px]')} />
                <View style={tw.style('absolute m-[40%]')}>
                  <Image source={ImageIcons.camera} style={tw.style('w-[15px] h-2.5')} />
                </View>
              </View>

            </View>
          }
        </View>

        <View style={tw.style('flex flex-row mx-[3%] justify-between mt-[1%]')}>
          <Text style={tw.style('text-lg font-bold text-[#1A1A1A] py-[1%]')}>{props?.getlistproductdetails?.data?.productName}</Text>
          <TouchableOpacity style={tw.style('mr-[3px]')} onPress={() => sethelppopup(true)}>
            <Image source={ImageIcons.shareshop} style={tw.style('w-[45px] h-[40px]')} />
          </TouchableOpacity>
        </View>
        <View style={tw.style('flex flex-row justify-between mt-[3%] mr-[20%] mt-[1%] mx-[3%]')}>
          <Text style={tw.style('text-2xl text-[#1A1A1A] font-bold')}>${props?.getlistproductdetails?.data?.productPrice}</Text>
        </View>

        <View style={tw.style('border-b mt-[4%] mx-[3%] border-[#B6B6B6]')}></View>
        <View style={tw.style('flex flex-row mt-[4%] mx-[3%]')}>
          <View style={tw.style('mt-[3%]')}>
            <Image source={{ uri: props?.getlistproductdetails?.getbrands?.brandImage }} style={tw.style('w-[50px] h-[50px] rounded-[40px]')} />
          </View>

          <View style={tw.style('pt-2.5 pl-2.5')}>
            <Text style={tw.style('text-[#1A1A1A] text-sm font-bold')}>{props?.getlistproductdetails?.getbrands?.brandName}</Text>
            <View style={tw.style('flex flex-row')}>
              <TouchableOpacity style={tw.style('mt-[3%] bg-[#B80000] h-[25px] w-[74px] px-[2%] rounded-[20px]')}>
                <Text style={tw.style('text-center pt-[3%] text-white text-xs font-bold')}>FOLLOW</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw.style('mx-[3%] mt-[3%} bg-[#4AFFBD] h-[25px] w-[90px] rounded-[20px]')}>
                <Text style={tw.style('text-center pt-[3%] text-white text-xs font-bold')}>OPEN STORE</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View style={tw.style('mx-[3%] mt-[3%}')}>
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

          <View style={tw.style('flex flex-row mt-[1%]')}>
            <Text style={tw.style('text-lg font-bold')}>Quantity</Text>

            <View style={tw.style('h-[40px] w-[40px] bg-[#e6e6e6] rounded p-[9px]')}>
              <Text style={tw.style('text-center text-[#4d4d4d] text-base font-bold')}>{props?.getlistproductdetails?.data?.productInventory}</Text>
            </View>
          </View>
        </View>
        <View style={tw.style('flex flex-row')}>
          <TouchableOpacity onPress={() => { cartdataSubmit(props?.getlistproductdetails?.data?._id) }} style={{ justifyContent: 'center', width: deviceWidth / 2, backgroundColor: "#B80000", borderRadius: 30, marginTop: "3%", height: 50, marginHorizontal: "5%" }}>
            <Text style={tw.style('text-center text-[#FFFFFF] text-base font-bold')}>ADD TO BAG</Text>
          </TouchableOpacity>
          <View style={tw.style('ml-[2%] mt-[4%]')}>
            <Image source={ImageIcons.iconheart} style={tw.style('w-[49px] h-[41px]')} />
          </View>
        </View>
        {/*<View style={{marginTop:"4%",marginHorizontal:"4%"}}>
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
  onFinishRating={(start) => ratingCompleted(start)}
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
  onFinishRating={(start) => ratingCompleted(start)}
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
  value={starCount}
  onFinishRating={(start) => ratingCompleted(start)}
  style={{ marginLeft:'3%',marginTop:"1%"}}
  />
  <View style={{marginLeft:"2%",backgroundColor:"#B3B3B3",borderRadius:5,height:21}}>
  <Progress.Bar progress={0.01} width={200} height={20} color={"#B80000"} />
  </View>
  <Text style={[styles.TEXT,{fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",fontSize:18}]}>1%</Text>
  </View>
  <View style={{flexDirection:"row",marginHorizontal:"3%",marginTop:"5%"}}>
  <View style={{backgroundColor:'#E6E6E6',borderRadius:10,height:40}}>
  <Picker
  selectedValue={selectedValue}
  style={{ height: 35, width: 140 }}
  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
  >
  <Picker.Item label="View" value="Sort" />
  <Picker.Item label="JavaScript" value="js" />
  </Picker>
  </View>

  <View style={{backgroundColor:'#E6E6E6',borderRadius:10,height:40,marginLeft:"4%"}}>
  <Picker
  selectedValue={selectedValue}
  style={{ height: 35, width: 140 }}
  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
  >
  <Picker.Item label="Sort" value="Sort" />
  <Picker.Item label="JavaScript" value="js" />
  </Picker>
  </View>
  </View>

  <View style={{flexDirection:'row',marginTop:"5%",}}>
  <Text style={[styles.TEXT,{fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",fontSize:18,marginLeft:'4%'}]}>Alex Davis</Text>
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

  </View>
  <View style={{marginHorizontal:"4%"}}>
  <Text style={{fontSize:16,color:"#1A1A1A",fontFamily:"hinted-AvertaStd-Regular,lineHeight:20"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget bibendum ultrices non malesuada mattis. Id suscipit enim in pretium nunc viverra. Scelerisque est id mauris semper quis. At tincidunt bibendum enim justo nisi. Fames eget massa elit, arcu consectetur 
  venenatis ac pretium. Quis nunc nulla quis sit mattis id. Donec risus amet donec enim.</Text>
  <Text style={{fontFamily:"hinted-AvertaStd-Regular",fontSize:16,color:"#808080"}}>05 Jan ‘22</Text>
  </View>
  <View style={{marginHorizontal:"4%",marginTop:"3%",flexDirection:"row"}}>
  <Image source={ImageIcons.likethumb} style={{width:16,height:15}}/>
  <Text style={[styles.TEXT,{fontWeight:"bold",fontFamily:"hinted-AvertaStd-Bold",fontSize:14}]}>0 users </Text><Text style={{fontSize:14,color:"#1A1A1A",fontFamily:"hinted-AvertaStd-Regular,lineHeight:20"}}>found this helpful</Text>
  <TouchableOpacity onPress={() => setreportpopup(true)} style={{backgroundColor:"#E6E6E6",marginLeft:"1%",width:deviceWidth/3,height:25,paddingTop:"1%",borderRadius:5}}>
  <Text style={{textAlign:"center", color:"#4D4D4D",fontSize:12,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular"}}>REPORT COMMENT</Text></TouchableOpacity>
  </View>*/}
        {/*<View style={{ marginTop: "6%", marginHorizontal: "4%" }}>
          <Text style={styles.clothpop}>More Products from this Store</Text>
        </View>

        <View style={{ marginHorizontal: '3%', marginBottom: 90 }}>
          <FlatList
            data={DATA1}
            renderItem={renderItem1}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
          />
        </View>*/}
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
                      <View style={tw.style('ml-[10%] mt-[2%]')}>
                        <Image source={ImageIcons.del} style={tw.style('w-[41px] h-9')} />
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
                          //val={parseInt(item.productQuantity)}
                          styleBtn={{ width: 30.6, height: 26, backgroundColor: '#F3F3F3' }}
                          styleTextInput={{ width: 38.25, height: 26, backgroundColor: '#F3F3F3' }}
                          labelStyle={{ fontSize: 13, marginTop: 0, color: '#223263', fontFamily: 'hinted-AvertaStd-Regular' }}
                          handleClick={(val) => setIncrement(val, item._id)}
                        />
                      </View>
                      {/*<View style={{ marginLeft: "25%" }}>
                        <Text style={{ color: "#1A1A1A", fontSize: 16, fontFamily: 'hinted-AvertaStd-Regular' }}>Total:</Text>
                        <Text style={{ color: "#1A1A1A", fontSize: 16, fontFamily: 'hinted-AvertaStd-Bold' }}>$52.50</Text>
                      </View>*/}
                    </View>
                  </View>
                </View>

                <View style={tw.style('border-b mt-[3%] border-[#B3B3B3]')}></View>

                <View style={tw.style('flex flex-row justify-end')}>
                  <Text style={tw.style('text-[#1A1A1A] text-xl font-normal')}>Total:</Text>
                  <Text style={tw.style('text-[#1A1A1A] text-xl font-bold')}>$52.50</Text>
                </View>

                <TouchableOpacity onPress={() => { closepopup(); setVisiblebag(true) }} style={{ width: deviceWidth / 1.3, backgroundColor: "#B80000", borderRadius: 30, marginVertical: "3%", height: 38, justifyContent: 'center', marginHorizontal: "3%" }} >
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
          <TouchableOpacity onPress={() => { setVisiblebag(false); props.navigation.navigate("Bagprocess") }} style={{ width: deviceWidth / 1.3, backgroundColor: "#B80000", borderRadius: 30, marginTop: "10%", height: 38, marginHorizontal: "3%" }} >
            <Text style={{ textAlign: 'center', color: "#FFFFFF", fontWeight: 'bold', fontSize: 18, top: 8 }}>START SHOPPING</Text>
          </TouchableOpacity>



        </View>
      }
      {helppopup == true &&
        <View style={{ flex: 1, backgroundColor: '#ffffff', width: deviceWidth / 1.5, paddingVertical: 10, borderRadius: 10, zIndex: 4001, position: 'absolute', bottom: '40%', margin: "20%" }}>


          <View style={tw.style('flex flex-row mt-[8%] mb-[5%] self-center')}>

            <Text style={{ fontSize: 14, color: '#1a1a1a', fontFamily: 'hinted-AvertaStd-Regular', }}>Share this product:</Text>

          </View>
          <View style={tw.style('flex flex-row justify-between mx-[5%] my-[4%]')}>
            <TouchableOpacity onPress={() => sethelppopup(false)}>
              <View style={tw.style('border border-[#e6e6e6] p-[5px] rounded-[50px]')}>
                <Image source={ImageIcons.google} style={tw.style('w-[25px] h-[25px]')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => facebookSignIn()}>
              <View style={tw.style('border border-[#e6e6e6] p-[5px] rounded-[50px]')}>
                <Image source={ImageIcons.facebook} style={tw.style('w-[25px] h-[25px]')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => instaLogin.current.show()}>
              <View style={tw.style('border border-[#e6e6e6] p-[5px] rounded-[50px]')}>
                <Image source={ImageIcons.message} style={styles.message1} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => twitterSignIn()}>
              <View style={tw.style('border border-[#e6e6e6] p-[10px] rounded-[50px]')}>
                <Image source={ImageIcons.twitter} style={tw.style('w-[15px] h-[15px]')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => linkedInLogin.current.open()}>
              <View style={tw.style('border border-[#e6e6e6] p-[10px] rounded-[50px]')}>
                <Image source={ImageIcons.linkin} style={tw.style('w-[15px] h-[15px]')} />
              </View>
            </TouchableOpacity>
          </View>


        </View>
      }

      {reportpopup == true &&
        <View style={{ backgroundColor: '#ffffff', width: '90%', alignSelf: 'center', paddingVertical: 10, borderRadius: 10, position: 'absolute', marginTop: "8%", marginRight: "2%", elevation: 1, }}>


          <View style={tw.style('flex flex-row mt-[8%] mb-[5%] self-center')}>

            <TouchableOpacity style={{ position: 'absolute', right: 15 }} onPress={() => setreportpopup(false)}>
              <Image source={ImageIcons.closepopup} style={tw.style('w-9 h-[27px]')} />
            </TouchableOpacity>

            <Text style={tw.style('text-xl font-bold text-[#282828] pl-[5%] mt-[10%]')}>Reason for reporting the following comment:</Text>

          </View>
          <View style={{ borderRadius: 5, borderWidth: 1, marginHorizontal: "4%", backgroundColor: "#FAFAFA" }}>
            <Text style={{ fontSize: 18, fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A", lineHeight: 23, paddingHorizontal: "2%" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget bibendum ultrices non malesuada mattis.
              Id suscipit enim in pretium nunc viverra. Scelerisque est id mauris semper quis. </Text>
          </View>
          <View style={{ marginTop: "2%" }}>
            <View style={{ flexDirection: "row", elevation: 1, marginHorizontal: "4%", backgroundColor: "#FAFAFA" }}>
              <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />

              <Text style={{ paddingTop: "2%", fontSize: 18, fontFamily: "hinted-AvertaStd-Regular", fontWeight: "bold", color: "#B80000", lineHeight: 23, paddingHorizontal: "2%" }}>This comment was offensive.</Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: "2%", flexDirection: "row", elevation: 1, marginHorizontal: "4%", backgroundColor: "#FAFAFA" }}>
              <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
              <Text style={{ paddingTop: "2%", fontSize: 18, fontFamily: "hinted-AvertaStd-Regular", fontWeight: "bold", color: "#808080", lineHeight: 23, paddingHorizontal: "2%" }}>This comment is spam.</Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: "2%", flexDirection: "row", elevation: 1, marginHorizontal: "4%", backgroundColor: "#FAFAFA" }}>
              <RadioButton
                value="third"
                status={checked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('third')}
              />
              <Text style={{ paddingTop: "2%", fontSize: 18, fontFamily: "hinted-AvertaStd-Regular", fontWeight: "bold", color: "#808080", lineHeight: 23, paddingHorizontal: "2%" }}>I don’t have a specific reason.</Text>
            </View>

          </View>


          <View style={{ margin: '3%' }}>
            <TextInput style={{ backgroundColor: '#E6E6E6', borderRadius: 10, paddingLeft: '5%', fontSize: 18, lineHeight: 23, letterSpacing: -0.125172, width: '100%', height: 100, color: '#878787', fontWeight: 'normal', fontStyle: 'normal', fontFamily: 'hinted-AvertaStd-Regular' }}
              placeholder="Add more details about your reason (optional)"
              onChangeText={onChangeText1}
              value={text1}
              placeholderTextColor="#999999"
            />
          </View>
          <TouchableOpacity style={{ width: deviceWidth / 1.3, backgroundColor: "#B80000", borderRadius: 30, marginTop: "3%", height: 38, width: 300, marginHorizontal: "3%" }}>
            <Text style={{ textAlign: 'center', color: "#FFFFFF", fontWeight: 'bold', fontSize: 18, top: 8 }}>REPORT COMMENT</Text>
          </TouchableOpacity>


        </View>
      }

      <Footer3 onSelection="4" />

    </KeyboardAvoidingView>
  )
}



export default NameStore