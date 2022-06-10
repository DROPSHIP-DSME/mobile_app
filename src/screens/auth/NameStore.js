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
import Moment from 'moment';

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
  const [selectedValue, setSelectedValue] = useState("java");
  const [visible, setVisible] = React.useState(false);
  const [starCount, setstarCount] = useState(0);
  const [visiblebag, setVisiblebag] = React.useState(false);
  const [showclassName, setshowclassName] = useState("#B80000");
  const [helppopup, sethelppopup] = React.useState(false);
  const [reportpopup, setreportpopup] = React.useState(false);
  const [text1, onChangeText1] = React.useState("");
  const [review, setReview] = useState("");
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
    props.getpostrating(productId);
    console.log("listrating--->>>", props?.retingreviewlist)
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

  const handleReviewsubmit = async () => {

    let request = {
      "productId": productId,
      "userId": props?.loginuserid,
      "ratingcount": starCount,
      "description": review,
    }

    props.postrating(request, props.navigation, "vendor");
    props.getpostrating(productId);
  }

  const openpopup = () => {
    setVisible(true)

  }
  const closepopup = () => {
    setVisible(false)
  }

  const reportopenpopup = () => {
    setreportpopup(true)

  }
  const reportclosepopup = () => {
    setreportpopup(false)
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
  const containerStylereport = { backgroundColor: 'white', padding: '3%', marginHorizontal: '5%', borderRadius: 10, alignSelf: 'center', justifyContent: 'center'}

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

  const ratingdata = [
    {
      name: "Alex Davis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget bibendum ultrices non malesuada mattis. Id suscipit enim in pretium nunc viverra. Scelerisque est id mauris semper quis.",
      date: "05 jan 22",

    },
    {
      name: "Alex Davis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget bibendum ultrices non malesuada mattis. Id suscipit enim in pretium nunc viverra. Scelerisque est id mauris semper quis.",
      date: "05 jan 22",

    },]

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
      <View style={styles.maincartviewshopTODAYY}>
        <TouchableOpacity onPress={() => { props.navigation.navigate("NameStore", { shopId: item._id, shopName: item.shopName }) }}>
          <View style={{ padding: 2 }}>
            <Image source={ImageIcons.winterimage} style={{ height: 150, width: deviceWidth / 2.4, borderRadius: 10 }} onPress={() => { props.navigation.navigate("clothing") }} />


          </View>
          <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
            <View style={{ paddingLeft: 8 }}>
              <Text style={{ color: "#1A1A1A", fontSize: 12, fontFamily: 'hinted-AvertaStd-Regular' }}>Blue Purse</Text>
              <Text style={{ color: "#1A1A1A", fontSize: 16, fontFamily: 'hinted-AvertaStd-Bold', }}>$0</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Rating
                  type='custom'
                  imageSize={15}
                  ratingCount={5}
                  ratingColor='#EB5757'
                  tintColor='#FFFFFF'
                  ratingBackgroundColor='#c8c7c8'
                  value={starCount}
                  onFinishRating={(start) => ratingCompleted(start)}
                  style={{ marginLeft: '2%' }}
                />
                <Text style={styles.TEXT}>4.0</Text>

              </View>
            </View>
            <View style={{ marginRight: 8 }}>
              <Image source={ImageIcons.Iconlock} style={{ width: 30, height: 30 }} />
              <Image source={ImageIcons.iconheart} style={{ width: 30, height: 30, marginTop: 5 }} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  const renderItem = ({ item }) => {
    console.log("ratingitem---->", item)
    return (
      <View >
        <View style={{ flexDirection: 'row', marginTop: "5%", }}>
          <Text style={styles.shoprating_avgtext}>Username{item.name}</Text>
          <Rating
            type='custom'
            imageSize={18}
            ratingCount={5}
            ratingColor='#EB5757'
            tintColor='#FFFFFF'
            ratingBackgroundColor='#c8c7c8'
            value={starCount}
            onFinishRating={(start) => ratingCompleted(start)}
            style={{ marginLeft: '3%', marginTop: "1%" }}
          />

        </View>
        <View style={{ marginVertical: '1%', marginHorizontal: '2%' }}>
          <Text style={{ fontSize: 14, color: "#1A1A1A", fontFamily: "hinted-AvertaStd-Regular,lineHeight:20" }}>{item.description}</Text>
          <Text style={{ fontFamily: "hinted-AvertaStd-Regular", fontSize: 16, color: "#808080" }}>{Moment(item.createdAt).format('MMM DD YYYY')}</Text>
        </View>
        <TouchableOpacity onPress={() => reportopenpopup()} style={{ backgroundColor: "#E6E6E6", marginLeft: "1%", width: deviceWidth / 3, height: 25, paddingTop: "1%", borderRadius: 5 }}>
          <Text style={{ textAlign: "center", color: "#4D4D4D", fontSize: 12, fontWeight: "bold", fontFamily: "hinted-AvertaStd-Regular" }}>REPORT COMMENT</Text>
        </TouchableOpacity>

      </View>
    );
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.registrationRoot}>
      <StatusBar backgroundColor={showclassName} barStyle="dark-content" translucent={true} />
      <Shopheader />

      <ScrollView onScroll={({ nativeEvent }) => {
        handleScroll(nativeEvent['contentOffset'].y);
      }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#FFFFFF', marginBottom: '15%' }} >

        <View style={{ marginHorizontal: '3%' }}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <View style={{ marginTop: '10%', flexDirection: "row" }}>
              <Image source={ImageIcons.backpopup} style={{ width: 10, height: 17 }} />
              <View style={{ borderBottomWidth: 3, width: 40, marginLeft: "-2%", marginBottom: "3%" }}></View>
              <Text style={{ fontSize: 14, fontFamily: "hinted-AvertaStd-Regular", fontWeight: "bold", paddingLeft: 5 }}>GO BACK</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>

          {props?.getlistproductdetails?.ProductImages?.length > 0 ?
            <View style={{ marginHorizontal: '4%', marginTop: "5%" }}>
              <Image source={{ uri: props?.getlistproductdetails?.data?.productImage }} style={{ width: deviceWidth / 1.1, height: 365, borderRadius: 10 }} />
              <View style={{ position: "absolute", margin: "40%", }}>
                <Image source={ImageIcons.playicon} style={{ width: 59, height: 51 }} />
              </View>
            </View>
            :
            <View style={{ marginHorizontal: '4%', marginTop: "5%", flexDirection: "row" }}>
              <View style={{ marginHorizontal: '2%' }}>
                <Image source={{ uri: props?.getlistproductdetails?.data?.productImage }} style={{ width: 70, height: 70, borderRadius: 10 }} />
                <View style={{ position: "absolute", margin: "40%", }}>
                  <Image source={ImageIcons.camera} style={{ width: 15, height: 10 }} />
                </View>
              </View>

            </View>
          }
        </View>

        <View style={{ marginHorizontal: '3%', flexDirection: "row", flexDirection: 'row', justifyContent: 'space-between', marginTop: '1%', }}>
          <Text style={styles.clothpop}>{props?.getlistproductdetails?.data?.productName}</Text>
          <TouchableOpacity style={{ marginRight: 3 }} onPress={() => sethelppopup(true)}>
            <Image source={ImageIcons.shareshop} style={{ width: 45, height: 40 }} />
          </TouchableOpacity>
        </View>
        <View style={[styles.textviewpop, { marginTop: "1%", marginHorizontal: '3%' }]}>
          <Text style={{ fontSize: 24, color: '#1A1A1A', lineHeight: 30, fontWeight: 'bold', fontFamily: 'hinted-AvertaStd-Regular', fontStyle: 'normal' }}>${props?.getlistproductdetails?.data?.productPrice}</Text>
        </View>

        <View style={{ borderBottomWidth: 1, marginTop: "4%", marginHorizontal: "3%", borderColor: "#B6B6B6" }}></View>
        <View style={{ flexDirection: 'row', marginTop: "4%", marginHorizontal: '3%' }}>
          <View style={{ marginTop: "3%" }}>
            <Image source={{ uri: props?.getlistproductdetails?.getbrands?.brandImage }} style={{ width: 50, height: 50, borderRadius: 40 }} />
          </View>

          <View style={{ paddingTop: 10, paddingLeft: 10 }}>
            <Text style={styles.stwtxt}>{props?.getlistproductdetails?.getbrands?.brandName}</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.fllowview}>
                <Text style={styles.flltxt}>FOLLOW</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.strtxt}>
                <Text style={styles.flltxt}>OPEN STORE</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View style={{ marginHorizontal: "3%", marginTop: "3%" }}>
          <Text style={{ color: "#1A1A1A", fontSize: 18, fontFamily: "hinted-AvertaStd-Regular", }}>{props?.getlistproductdetails?.data?.productDescription}</Text>
        </View>


        <View style={{ flexDirection: 'row', marginHorizontal: '4%', marginTop: '4%' }}>
          <Text style={styles.txtsyz}>Color :</Text>
          <Text style={{ fontSize: 18, fontFamily: 'hinted-AvertaStd-Regular', marginLeft: 5 }}>{props?.getlistproductdetails?.data?.productColor}</Text>
        </View>

        <View style={{ flexDirection: 'row', marginHorizontal: '4%', marginVertical: '2%' }}>
          <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: `${props?.getlistproductdetails?.data?.productColor}` }}></View>

        </View>


        <View style={{ flexDirection: 'row', marginTop: '1%' }}>
          <View style={{ marginHorizontal: '4%', marginVertical: '3%' }}>
            <Text style={styles.txtsyz}>Size</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ height: 40, width: 40, backgroundColor: '#e6e6e6', borderRadius: 4, padding: 9, }}>
                <Text style={{ textAlign: 'center', color: '#4d4d4d', fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold' }}>{props?.getlistproductdetails?.data?.productSize}</Text>
              </View>

            </View>
          </View>

          <View style={{ marginVertical: '3%', marginLeft: '6%' }}>
            <Text style={styles.txtsyz}>Quantity</Text>

            <View style={{ height: 40, width: 40, backgroundColor: '#e6e6e6', borderRadius: 4, padding: 9, }}>
              <Text style={{ textAlign: 'center', color: '#4d4d4d', fontSize: 16, fontFamily: 'hinted-AvertaStd-Semibold' }}>{props?.getlistproductdetails?.data?.productInventory}</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => { cartdataSubmit(props?.getlistproductdetails?.data?._id) }} style={{ justifyContent: 'center', width: deviceWidth / 1.4, backgroundColor: "#B80000", borderRadius: 30, marginTop: "3%", height: 50, marginHorizontal: "5%" }}>
            <Text style={{ textAlign: 'center', color: "#FFFFFF", fontWeight: 'bold', fontSize: 16, }}>ADD TO BAG</Text>
          </TouchableOpacity>
          <View style={{ marginLeft: "2%", marginTop: "4%" }}>
            <Image source={ImageIcons.iconheart} style={{ width: 49, height: 41 }} />
          </View>
        </View>
        <View style={{ marginTop: "4%", marginHorizontal: "4%" }}>
          <Text style={styles.clothpop}>Customer Reviews (0)</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: "3%" }}>
          <Rating
            type='custom'
            imageSize={18}
            ratingCount={5}
            ratingColor='#EB5757'
            tintColor='#FFFFFF'
            ratingBackgroundColor='#c8c7c8'
            value={starCount}
            onFinishRating={(start) => ratingCompleted(start)}
            style={{ marginLeft: '3%', marginTop: "1%" }}
          />
          <Text style={styles.shoprating_avgtext}>Avg. Rating 4.5</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: "4%" }}>
          <Rating
            type='custom'
            imageSize={18}
            ratingCount={5}
            ratingColor='#EB5757'
            tintColor='#FFFFFF'
            ratingBackgroundColor='#c8c7c8'
            value={starCount}
            onFinishRating={(start) => ratingCompleted(start)}
            style={{ marginLeft: '3%', marginTop: "1%" }}
          />
          <View style={{ marginLeft: "2%", backgroundColor: "#B3B3B3", borderRadius: 1, height: 13, marginTop: '2%' }}>
            <Progress.Bar progress={0.84} width={200} height={11} color={"#B80000"} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: "3%" }}>
          <Rating
            type='custom'
            imageSize={18}
            ratingCount={5}
            ratingColor='#EB5757'
            tintColor='#FFFFFF'
            ratingBackgroundColor='#c8c7c8'
            value={starCount}
            onFinishRating={(start) => ratingCompleted(start)}
            style={{ marginLeft: '3%', marginTop: "1%" }}
          />
          <View style={{ marginLeft: "2%", backgroundColor: "#B3B3B3", borderRadius: 1, height: 13, marginTop: '2%' }}>
            <Progress.Bar progress={0.10} width={200} height={11} color={"#B80000"} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: "3%" }}>
          <Rating
            type='custom'
            imageSize={18}
            ratingCount={5}
            ratingColor='#EB5757'
            tintColor='#FFFFFF'
            ratingBackgroundColor='#c8c7c8'
            value={starCount}
            onFinishRating={(start) => ratingCompleted(start)}
            style={{ marginLeft: '3%', marginTop: "1%" }}
          />
          <View style={{ marginLeft: "2%", backgroundColor: "#B3B3B3", borderRadius: 1, height: 13, marginTop: '2%' }}>
            <Progress.Bar progress={0.03} width={200} height={11} color={"#B80000"} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: "3%" }}>
          <Rating
            type='custom'
            imageSize={18}
            ratingCount={5}
            ratingColor='#EB5757'
            tintColor='#FFFFFF'
            ratingBackgroundColor='#c8c7c8'
            value={starCount}
            onFinishRating={(start) => ratingCompleted(start)}
            style={{ marginLeft: '3%', marginTop: "1%" }}
          />
          <View style={{ marginLeft: "2%", backgroundColor: "#B3B3B3", borderRadius: 1, height: 13, marginTop: '2%' }}>
            <Progress.Bar progress={0.03} width={200} height={11} color={"#B80000"} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: "3%" }}>
          <Rating
            type='custom'
            imageSize={18}
            ratingCount={5}
            ratingColor='#EB5757'
            tintColor='#FFFFFF'
            ratingBackgroundColor='#c8c7c8'
            value={starCount}
            onFinishRating={(start) => ratingCompleted(start)}
            style={{ marginLeft: '3%', marginTop: "1%" }}
          />
          <View style={{ marginLeft: "2%", backgroundColor: "#B3B3B3", borderRadius: 1, height: 13, marginTop: '2%' }}>
            <Progress.Bar progress={0.03} width={200} height={11} color={"#B80000"} />
          </View>
        </View>

        <View style={{ marginHorizontal: '4%', marginVertical: '3%' }}>
          <View style={{ marginVertical: '3%' }}>
            <Text style={[styles.shoprating_avgtext, { textAlign: 'center' }]}>Leave a Review</Text>
            <View style={{ marginVertical: '1%' }}>
              <Rating
                type='custom'
                imageSize={40}
                ratingCount={5}
                ratingColor='#EB5757'
                tintColor='#ffffff'
                ratingBackgroundColor='#c8c7c8'
                value={starCount}
                onFinishRating={(start) => ratingCompleted(start)}
                style={{ marginLeft: '1%', marginTop: "1%" }}
              />
            </View>
            <View style={{ marginVertical: '3%' }}>
              <TextInput
                style={styles.shop_namestore_reviewinput}
                onChangeText={text => setReview(text)}
                value={review}
                placeholder="Write your review (optional)."
                multiline
                numberOfLines={7}
                placeholderTextColor="#000000"
              />
            </View>
            <TouchableOpacity onPress={() => handleReviewsubmit()}
              style={{ justifyContent: 'center', width: deviceWidth / 1.2, backgroundColor: "#B80000", borderRadius: 30, marginTop: "3%", height: 40, marginHorizontal: "5%" }}>
              <Text style={{ textAlign: 'center', color: "#FFFFFF", fontWeight: '700', fontSize: 16, }}>Submit Review</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginHorizontal: "3%", marginTop: "5%" }}>
          {/*<View style={{ backgroundColor: '#E6E6E6', borderRadius: 10, height: 40 }}>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 35, width: 140 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="View" value="Sort" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>*/}

          <View style={{ backgroundColor: '#E6E6E6', borderRadius: 10, height: 40, marginLeft: 0 }}>
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
        <View style={{ marginHorizontal: '3%', }}>
          <FlatList
            data={props?.retingreviewlist || []}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>



        <View style={{ marginTop: "2%", marginHorizontal: "4%" }}>
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
        </View>
      </ScrollView>
      {openpopup &&
        <Provider>
          <Portal>
            <Modal visible={visible} contentContainerStyle={containerStyle}>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ marginTop: '3%', marginRight: "2%" }}>
                  <Image source={{ uri: props?.getlistproductdetails?.data?.productImage }} style={{ width: 83, height: 96, borderRadius: 10 }} />
                </View>

                <View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ width: "60%" }}>
                      <Text style={{ fontSize: 16, lineHeight: 20, fontStyle: 'normal', fontWeight: '400', marginVertical: '4%', fontFamily: 'hinted-AvertaStd-Regular', color: '#1A1A1A' }}>{props?.getlistproductdetails?.data?.productName}</Text>
                    </View>
                    <View style={{ marginLeft: "10%", marginTop: "2%" }}>
                      <Image source={ImageIcons.del} style={{ width: 41, height: 36 }} />
                    </View>
                  </View>

                  <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'hinted-AvertaStd-Regular', color: '#1A1A1A' }}>${props?.getlistproductdetails?.data?.productPrice}</Text>
                  </View>


                  <View style={{ flexDirection: "row" }}>
                    {/*<View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginVertical: '1%', fontFamily: 'hinted-AvertaStd-Regular', color: '#1A1A1A' }}>Color:</Text>
                      </View>
                      <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: '#b3b3b3', marginLeft: "1%" }}></View>*/}
                    <Text style={{ fontSize: 16, fontWeight: 'bold', fontFamily: 'hinted-AvertaStd-Regular', color: '#1A1A1A' }}>Size : S</Text>
                  </View>



                  <View style={{ flexDirection: "row" }}>
                    <View style={{ marginTop: "4%" }}>
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

              <View style={{ borderBottomWidth: 1, marginTop: "3%", borderColor: "#B3B3B3" }}></View>

              <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                <Text style={{ color: "#1A1A1A", fontSize: 20, fontFamily: 'hinted-AvertaStd-Regular' }}>Total:</Text>
                <Text style={{ color: "#1A1A1A", fontSize: 20, fontFamily: 'hinted-AvertaStd-Bold' }}>$52.50</Text>
              </View>

              <TouchableOpacity onPress={() => { closepopup(); setVisiblebag(true) }} style={{ width: deviceWidth / 1.3, backgroundColor: "#B80000", borderRadius: 30, marginVertical: "3%", height: 38, justifyContent: 'center', marginHorizontal: "3%" }} >
                <Text style={{ textAlign: 'center', color: "#FFFFFF", fontWeight: 'bold', fontSize: 15 }}>VIEW BAG</Text>
              </TouchableOpacity>
            </Modal>
          </Portal>
        </Provider>
      }



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
        <View style={{ flex: 1, backgroundColor: '#ffffff', width: deviceWidth / 1.4, paddingVertical: 10, borderRadius: 10, zIndex: 4001, position: 'absolute', bottom: '40%', margin: "20%", shadowColor: '#000', elevation: 5 }}>


          <View style={[styles.chatViewrose, { alignSelf: 'center' }]}>

            <Text style={{ fontSize: 14, color: '#1a1a1a', fontFamily: 'hinted-AvertaStd-Regular', }}>Share this product:</Text>

          </View>
          <View style={styles.accountmainview}>
            <TouchableOpacity onPress={() => sethelppopup(false)}>
              <View style={styles.showimge}>
                <Image source={ImageIcons.google} style={styles.google1} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => facebookSignIn()}>
              <View style={styles.showimge}>
                <Image source={ImageIcons.facebookicon} style={styles.facebookshare} />
              </View>
            </TouchableOpacity>
            
          </View>


        </View>
      }
      {reportpopup == true &&
        <Provider>
          <Portal>
            <Modal visible={reportpopup} contentContainerStyle={containerStylereport}>

              <View style={styles.shopchatViewrose}>
                <Text style={{ fontSize: 22, fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A", fontStyle: 'normal', fontWeight: '700' }}>Report Comment</Text>
                <TouchableOpacity style={{}} onPress={() => reportclosepopup()}>
                  <Image source={ImageIcons.closepopup} style={styles.shop_modal_crossimg} />
                </TouchableOpacity>
              </View>
              <View style={styles.shop_reportmodal}>
                <Text style={styles.shop_reportmodaltext}>This outfit is horrible and smells bad. I requested a refund but I couldn’t get one!!</Text>
              </View>
              <View style={{ marginVertical: "2%" }}>
                <View style={styles.shop_reportmodal_radiobutton}>
                  <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                  />

                  <Text style={styles.shop_reportmodal_radiobutton_text}>This comment was offensive.</Text>
                </View>

                <View style={styles.shop_reportmodal_radiobutton}>
                  <RadioButton
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                  />
                  <Text style={styles.shop_reportmodal_radiobutton_text2}>This comment is spam.</Text>
                </View>

                <View style={styles.shop_reportmodal_radiobutton}>
                  <RadioButton
                    value="third"
                    status={checked === 'third' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('third')}
                  />
                  <Text style={styles.shop_reportmodal_radiobutton_text2}>I don’t have a specific reason.</Text>
                </View>

              </View>
              <View style={{ margin: '1%' }}>
                <TextInput style={styles.shop_reportmodal_radiobutton_textinput}
                  placeholder="Add more details about your reason (optional)"
                  onChangeText={onChangeText1}
                  value={text1}
                  placeholderTextColor="#999999"
                  multiline
                  numberOfLines={7}
                />
              </View>
              <TouchableOpacity style={{ width: deviceWidth / 1.3, backgroundColor: "#B80000", borderRadius: 30, marginVertical: "5%", height: 40,justifyContent:'center', marginHorizontal: "1%" }}>
                <Text style={{ textAlign: 'center', color: "#FFFFFF", fontWeight: '700', fontSize: 16, }}>REPORT COMMENT</Text>
              </TouchableOpacity>

            </Modal>
          </Portal>
        </Provider>
      }


      <Footer3 onSelection="4" />

    </KeyboardAvoidingView>
  )
}



export default NameStore