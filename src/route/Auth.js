import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text ,Image,StyleSheet,View} from 'react-native';
import {
  Registration,
  RegistrationShop,
  Login,
  Vedioscreen,
  OTPVerification,
  Dashwith,
  Dashaccount,
  Accountorderhist,
  Accountsum,
  StoreOwner,
  Dashbrand,
  Accountfav,
  Accountfollow,
  Accountproduct,
  Accountbrandlist,
  Accountpublish,
  Accountbrand,
  Accountfav1,
  Accountstore,
  Accountdata,
  Dashdetail,
  Accountorderview,
  Accountview2,
  Dashlive3,
  Dashlive,
  Dashlive2,
  Dashimport,
  ForgetPassword,
  Dashsupport,
  Dashsupportacc,
  ResetPassword,
  Dashadvertise,
  Dashaccountlist,
  Golive,
  Dashsale,
  Dashproduct,
  Dashsetting,
  Dashsubscribe,
  Dashsubscribe2,
  Dashchats,
  Dashsuccess,
  Dashorder,
  Dashreturn,
  Goliveshop,
  Addcategory,
  Footer2,
  Footer3,
  Support,
  SalesAnalytic,
  BenRose,
  ChatSupport,
  DeGaulle,
  Addbrand2,
  EmmaRose,
  emptyaccount,
  editprofile,
  editaddress,
  editviewaddress,
  noaddress,
  paymentedit,
  changepayment,
  editpassword,
  deletaccount,
  //CreateAccount,
  Codeconfirm,
  CreateAccountShop,
  Addbrand,
  AddProduct,
  AddProduct2,
  AddStore,
  CreateStore,
  Order,
  Category,
  Product,
  SearchProduct,
  SearchProduct2,
  NameStore,
  ProductDetails,
  ProductDetails3,
  ProductDetails2,
  AddStore2,
  Store,
  More,
  Processorder,
  Cart,
  Overview,
  Inorder,
  Topselling,
  Verification,
  Livechannel,
  Productculture,
  Productcountry,
  Goback,
  Log,
  Profilee,
  ProfileDetail,
  Savedgoods,
  Neworder,
  Park,
  watchlist,
  clothing,
  clothdetails,
  StartRecording,
  coming,
  upcoming,
  schedule,
  shop,
  Blurbackground,
  videocall,
  changepassword,
  Viewbrand,
  Search,
  Selectproduct,
  Newprofile,
  Editprofiledetail,
  shippinginfo,
  shippinglist,
  addPayment,
  PaymentList,
  Onboard,
  SaleOnboard,
  ShoesOnboard,
  Popevent,
  Notification,
  Viewevent,
  Bagprocess,
  Shipprocess,
  Shipaddress,
  Shippayment,
  confirpayment,
  myaccount,
  Account,
  ProductStore,
  Sellheader,

} from '../container';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../common/Color';
import { Fonts, ImageIcons } from '../common';
import { connect } from 'react-redux';


const Stack = createStackNavigator();

const Auth = (props) => {

  // useEffect(() => {
  //   console.log("props.defaultAuthScreen==>", props.defaultAuthScreen)
  //   if (props.defaultAuthScreen === "ResetPassword") {
  //     props.navigation.navigate("ResetPassword");
  //   }
  // }, [props.defaultAuthScreen])

  return (
    <Stack.Navigator
    screenOptions={{ animationEnabled: false }}
    // initialRouteName={defaultScreen}
    // screenOptions={{
    //   headerStyle: {
    //     backgroundColor: Colors.SKY_BLUE,
    //   },
    //   headerTintColor: Colors.WHITE,
    // }}
    >
      {props.defaultAuthScreen === "ResetPassword" ?
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ title: '', headerShown: false }}
        />
        :
        
         <Stack.Screen 
            name="Login"
            component={Login}
            options={{ title: '', headerShown: false, headerTransparent: true,headerTintColor:Colors.WHITE}}
          />
      }
      


<Stack.Screen
          name="Vedioscreen"
          component={Vedioscreen}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
        name="Sellheader"
        component={Sellheader}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
      <Stack.Screen
        name="SaleOnboard"
        component={SaleOnboard}
        options={{ title: '', headerShown: false, headerTransparent: true,headerTintColor:Colors.WHITE }}
      />
        <Stack.Screen
        name="ShoesOnboard"
        component={ShoesOnboard}
        options={{ title: '', headerShown: false, headerTransparent: true,headerTintColor:Colors.WHITE }}
      />
      <Stack.Screen
        name="Onboard"
        component={Onboard}
        options={{ title: '', headerShown: false, headerTransparent: true,headerTintColor:Colors.WHITE }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{ title: '', headerShown: false, headerTransparent: true,headerTintColor:Colors.WHITE }}
      />
      <Stack.Screen
        name="RegistrationShop"
        component={RegistrationShop}
        options={{ title: '', headerShown: false, headerTransparent: true,headerTintColor:Colors.WHITE }}
      />
      <Stack.Screen
        name="OTPVerification"
        component={OTPVerification}
        options={{ title: '', headerShown: true }}
      />

      <Stack.Screen
        name="shop"
        component={shop}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
 

      <Stack.Screen
        name="schedule"
        component={schedule}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Go Live",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#fce8e8', elevation: 0, shadowOpacity: 0 },
                    })}
      />

      <Stack.Screen
        name="Popevent"
        component={Popevent}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Popevent ",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#fce8e8', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
       <Stack.Screen
        name="Viewevent"
        component={Viewevent}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Viewevent",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen
        name="upcoming"
        component={upcoming}
        options={({ navigation }) => ({
                         headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
      
      <Stack.Screen
        name="Account"
        component={Account}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />

       <Stack.Screen
        name="Accountsum"
        component={Accountsum}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />


      <Stack.Screen
        name="deletaccount"
        component={deletaccount}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: " ",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#fce8e8', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
     <Stack.Screen
        name="editpassword"
        component={editpassword}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
      
      <Stack.Screen
        name="changepayment"
        component={changepayment}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
<Stack.Screen
        name="paymentedit"
        component={paymentedit}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: " ",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#fce8e8', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
      <Stack.Screen
        name="coming"
        component={coming}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />

      <Stack.Screen
        name="videocall"
        component={videocall}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: " ",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#fce8e8', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
     
     <Stack.Screen
        name="editaddress"
        component={editaddress}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
      <Stack.Screen
        name="clothdetails"
        component={clothdetails}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />


      <Stack.Screen
        name="clothing"
        component={clothing}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />

      <Stack.Screen
        name="Blurbackground"
        component={Blurbackground}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: " ",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#B80000', elevation: 0, shadowOpacity: 0 },
                    })}
      />

      <Stack.Screen
        name="watchlist"
        component={watchlist}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />

      <Stack.Screen
        name="StartRecording"
        component={StartRecording}
        options={({ navigation }) => ({
                         headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />


      <Stack.Screen
        name="Category"
        component={Category}
        options={({ navigation }) => ({
                         headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />

      <Stack.Screen
        name="AddStore2"
        component={AddStore2}
        options={({ navigation }) => ({
                         headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />

       <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />

      <Stack.Screen
        name="ProductDetails2"
        component={ProductDetails2}
        options={({ navigation }) => ({
                         headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />

       <Stack.Screen
        name="ProductDetails3"
        component={ProductDetails3}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />

      <Stack.Screen
        name="NameStore"
        component={NameStore}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
      <Stack.Screen
        name="ProductStore"
        component={ProductStore}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
      <Stack.Screen
        name="Bagprocess"
        component={Bagprocess}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
      
      <Stack.Screen
        name="editprofile"
        component={editprofile}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />

       <Stack.Screen
        name="Accountorderhist"
        component={Accountorderhist}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
      
      <Stack.Screen
        name="editviewaddress"
        component={editviewaddress}
         options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
      <Stack.Screen
        name="noaddress"
        component={noaddress}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Name of Shop",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
      
      <Stack.Screen
        name="Shipprocess"
        component={Shipprocess}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Name of Shop",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
      <Stack.Screen
        name="Shipaddress"
        component={Shipaddress}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Name of Shop",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
      <Stack.Screen
        name="Shippayment"
        component={Shippayment}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Name of Shop",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
       <Stack.Screen
        name="confirpayment"
        component={confirpayment}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Name of Shop",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
       <Stack.Screen
        name="Accountorderview"
        component={Accountorderview}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
      <Stack.Screen
        name="Accountview2"
        component={Accountview2}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Name of Shop",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
       <Stack.Screen
        name="emptyaccount"
        component={emptyaccount}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Name of Shop",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
       <Stack.Screen
        name="myaccount"
        component={myaccount}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Name of Shop",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
         options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
     
       <Stack.Screen
        name="Notification"
        component={Notification}
         options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />

      <Stack.Screen
        name="SearchProduct2"
        component={SearchProduct2}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Search Product",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen
        name="SearchProduct"
        component={SearchProduct}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />

      <Stack.Screen
        name="Viewbrand"
        component={Viewbrand}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "View brand",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
      
      <Stack.Screen
        name="Selectproduct"
        component={Selectproduct}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Choose Product",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen
        name="Product"
        component={Product}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Add Product",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen
        name="Newprofile"
        component={Newprofile}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Profile",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', shadowColor: '#000000',  shadowOffset: {width: 4, height: 4},
                        shadowOpacity: 0.5,
                        elevation: 10, },
                    })}
      />

      <Stack.Screen
        name="PaymentList"
        component={PaymentList}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', shadowColor: '#000000',  shadowOffset: {width: 4, height: 4},
                        shadowOpacity: 0.5,
                        elevation: 10, },
                    })}
      />

      <Stack.Screen
        name="addPayment"
        component={addPayment}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Payment info",
                        headerTitleAlign: "left",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', shadowColor: '#000000',  shadowOffset: {width: 4, height: 4},
                        shadowOpacity: 0.5,
                        elevation: 10, },
                    })}
      />

      <Stack.Screen
        name="shippinglist"
        component={shippinglist}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', shadowColor: '#000000',  shadowOffset: {width: 4, height: 4},
                        shadowOpacity: 0.5,
                        elevation: 10, },
                    })}
      />

      <Stack.Screen
        name="shippinginfo"
        component={shippinginfo}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Shipping info",
                        headerTitleAlign: "left",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', shadowColor: '#000000',  shadowOffset: {width: 4, height: 4},
                        shadowOpacity: 0.5,
                        elevation: 10, },
                    })}
      />
      <Stack.Screen
        name="Editprofiledetail"
        component={Editprofiledetail}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Profile",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

       <Stack.Screen
        name="Profilee"
        component={Profilee}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Inorder"
        component={Inorder}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Cart"
        component={Cart}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
      

      <Stack.Screen
        name="EmmaRose"
        component={EmmaRose}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle:(<>
                <Image source={ImageIcons.man}   />
                <Text>Emma Rose</Text>
              </>),       
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold,flexDirection:'row', },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0, },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen
        name="Park"
        component={Park}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "DeGaulle & Park",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

       

      <Stack.Screen
        name="DeGaulle"
        component={DeGaulle}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "DeGaulle & Park",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />


       <Stack.Screen
        name="Neworder"
        component={Neworder}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "New Order",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

        <Stack.Screen
        name="Topselling"
        component={Topselling}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Top Selling Product",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />


       <Stack.Screen
        name="ChatSupport"
        component={ChatSupport}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Chat with Support",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen
        name="Support"
        component={Support}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Support",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen
        name="SalesAnalytic"
        component={SalesAnalytic}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Sales Analytics",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

       <Stack.Screen
        name="Goback"
        component={Goback}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Go Back",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
      <Stack.Screen
        name="BenRose"
        component={BenRose}
        options={{ title: '', headerShown: false }}
      />
        <Stack.Screen
        name="Processorder"
        component={Processorder}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="More"
        component={More}
        options={{ title: '', headerShown: false }}
      />
      
       
      
      <Stack.Screen
        name="Overview"
        component={Overview}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />

      <Stack.Screen
        name="Dashproduct"
        component={Dashproduct}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />

       <Stack.Screen
        name="Dashorder"
        component={Dashorder}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
       <Stack.Screen
        name="Dashsuccess"
        component={Dashsuccess}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
       <Stack.Screen
        name="Accountfav"
        component={Accountfav}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Accountfollow"
        component={Accountfollow}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Accountbrand"
        component={Accountbrand}
         options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
       <Stack.Screen
        name="Accountpublish"
        component={Accountpublish}
         options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
       <Stack.Screen
        name="Accountstore"
        component={Accountstore}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
      <Stack.Screen
        name="Accountfav1"
        component={Accountfav1}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Accountbrandlist"
        component={Accountbrandlist}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false}  />,
                        headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
       <Stack.Screen
        name="Accountdata"
        component={Accountdata}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Dashchats"
        component={Dashchats}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
       <Stack.Screen
        name="Dashreturn"
        component={Dashreturn}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
      <Stack.Screen
        name="Dashsale"
        component={Dashsale}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
      <Stack.Screen
        name="Dashsubscribe"
        component={Dashsubscribe}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
       <Stack.Screen
        name="Dashsubscribe2"
        component={Dashsubscribe2}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
       <Stack.Screen
        name="Dashadvertise"
        component={Dashadvertise}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
       <Stack.Screen
        name="Dashaccount"
        component={Dashaccount}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
       <Stack.Screen
        name="Dashaccountlist"
        component={Dashaccountlist}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
       <Stack.Screen
        name="Dashwith"
        component={Dashwith}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
      <Stack.Screen
        name="Dashbrand"
        component={Dashbrand}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
      <Stack.Screen
        name="Dashimport"
        component={Dashimport}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
      <Stack.Screen
        name="Dashsetting"
        component={Dashsetting}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
      <Stack.Screen
        name="Dashsupport"
        component={Dashsupport}
       options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
       <Stack.Screen
        name="Dashsupportacc"
        component={Dashsupportacc}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
       <Stack.Screen
        name="Dashlive"
        component={Dashlive}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
       <Stack.Screen
        name="Dashlive2"
        component={Dashlive2}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
       <Stack.Screen
        name="Dashlive3"
        component={Dashlive3}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
       <Stack.Screen
        name="Dashdetail"
        component={Dashdetail}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
      
      
       <Stack.Screen
        name="ProfileDetail"
        component={ProfileDetail}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Profile",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: '#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen
        name="Productculture"
        component={Productculture}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Product Culture",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: '#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen
        name="Productcountry"
        component={Productcountry}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Product Country",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: '#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen
        name="Livechannel"
        component={Livechannel}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Product Category",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: '#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
    
      <Stack.Screen
        name="StoreOwner"
        component={StoreOwner}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Checkout",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: '#FFFFFF', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen
        name="Savedgoods"
        component={Savedgoods}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Saved Goods",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: '#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
       
      
      


      <Stack.Screen
        name="CreateStore"
        component={CreateStore}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Create my Shop",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

       <Stack.Screen
        name="Accountproduct"
        component={Accountproduct}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Create my Shop",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen
        name="Order"
        component={Order}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Order Details",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: "#fce8e8", elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

       <Stack.Screen
        name="AddStore"
        component={AddStore}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Add more Store",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: Colors.WHITE, elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen
        name="Goliveshop"
        component={Goliveshop}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Go Live",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: Colors.WHITE, elevation: 0, shadowOpacity: 0 },
                    })}
        options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.BLACK}}
      />

      <Stack.Screen
        name="Golive"
        component={Golive}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Go Live",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: Colors.WHITE, elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen
        name="Addcategory"
        component={Addcategory}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Add a Category",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: '#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen
        name="AddProduct"
        component={AddProduct}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />



      <Stack.Screen
        name="AddProduct2"
        component={AddProduct2}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Add Product",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: '#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen 
        name="Store"
        component={Store}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Shop",
                        headerTitleAlign: "left",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: '#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen 
        name="Addbrand2"
        component={Addbrand2}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Create your Brand",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: '#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen 
        name="Addbrand"
        component={Addbrand}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Create your Brand",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: '#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen 
        name="changepassword"
        component={changepassword}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false}  />,
                        headerRight: () => <RightMenuItemsell navigation={navigation}  />,
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerTitleStyle: styles.titleheaderstyle,
                        headerStyle: styles.headerbackgroundstyle,
                    })}
      />
         
      <Stack.Screen 
            name="Codeconfirm"
            component={Codeconfirm}
            options={{ title: '', headerShown: false, headerTransparent: true,headerTintColor:Colors.WHITE}}
          />

      
      <Stack.Screen 
        name="CreateAccountShop"
        component={CreateAccountShop}
        options={{ title: '', headerShown: false, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
      
      
      <Stack.Screen
        name="Footer2"
        component={Footer2}
        options={{ title: '', headerShown: false, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
      <Stack.Screen
        name="Footer3"
        component={Footer3}
        options={{ title: '', headerShown: false, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{ title: '', headerShown: false, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
     
      
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.BLACK }}
      />
      
       <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ title: '', headerShown: false }}
        />
        
    </Stack.Navigator>
  );
};

const LeftMenuItem = ({ navigation, isMenu }) => {
    return (
       <View style={isMenu ? styles.leftLabel: styles.leftLabelfalse}>
           <TouchableOpacity onPress={() => {
                if (isMenu) {
                    navigation?.goBack()
                } else {
                    navigation?.goBack();
                }
            }}
            style={{ paddingLeft: '5%',marginRight:15 }}>
               {isMenu ?
                <Image source={ImageIcons.logored} style={{width:65,height:53,marginTop:4}}/>
               :
                <Image source={ImageIcons.backlefticon} style={{width:45,height:45, tintColor:'#FFFFFF'}}/>
              }
            </TouchableOpacity>
        </View>
    )
}



const RightMenuItem = ({navigation}) => {
    return (
        <View style={styles.rightLabel}>
           <TouchableOpacity onPress={() => navigation.navigate("Search")} style={{ marginHorizontal: '5%',marginRight:15 }}>
                <Image source={ImageIcons.white_search} style={{width:21,height:20}}/>
            </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate("Notification")} style={{ marginHorizontal: '5%',marginRight:15 }}>
              <Image source={ImageIcons.bell} style={{ width: 21, height: 21, }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate('Cart') }}>
              <View style={{ flexDirection: 'row' }}>
                  <Image source={ImageIcons.whitecart} style={{ width: 18, height: 20.6,marginRight:2}} />
                  <Text style={styles.numtext1}>0</Text>
              </View>
          </TouchableOpacity>
        </View>
    )
}


const RightMenuItemsell = ({navigation}) => {
    return (
        <View style={styles.rightLabel}>
           

           <TouchableOpacity onPress={() => navigation.navigate("Dashsetting")} style={{ marginHorizontal: '5%',marginRight:15 }}>
               <Image source={ImageIcons.colortodayshoe} style={{width:50,height:50,marginTop:-15}}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate('Sellheader') }}>
              <View style={{ flexDirection: 'row' }}>
                  <Image source={ImageIcons.menutoday} style={{ width: 18, height: 20.6,marginRight:2}} />
              </View>
          </TouchableOpacity>
        </View>
    )
}



const mapStateToProps = (state) => ({
  defaultAuthScreen: state.auth.defaultAuthScreen,
});

const mapDispatchToProps = {
};

const styles = StyleSheet.create({
    leftButton: {
        width: 70, 
        height: 57,
        marginLeft: 15,
        paddingHorizontal: 8,
        justifyContent: 'center'
    },
    leftLabel: {
        height: wp('6%'),
        width: wp('25%'),
        paddingHorizontal: 8,
        marginRight: 20,
        justifyContent: 'center',
        flexDirection:'row',
        marginTop:-40
    },
    leftLabelfalse:{
      height: wp('6%'),
        width: wp('25%'),
        paddingHorizontal: 8,
        marginRight: 20,
        justifyContent: 'center',
        flexDirection:'row',
        marginTop:-20
    },
    rightLabel: {
        height: wp('6%'),
        width: wp('25%'),
        paddingHorizontal: 8,
        marginRight: 20,
        justifyContent: 'center',
        flexDirection:'row'
    },
    leftIcon: {
        width: 70, 
        height: 57
    },
    rightText: {
        fontSize: 12
    },
    headerbackgroundstyle:{
       backgroundColor:'#B80000', elevation: 0, shadowOpacity: 0
    },
    titleheaderstyle:{
      color: Colors.WHITE, fontFamily: Fonts.RalewayExtraBold 
    },
    numtext1:{
         fontSize:20,fontWeight:'bold',fontStyle:'normal',lineHeight:25,marginLeft:5,
        fontFamily:'hinted-AvertaStd-Bold',color:'#FFFFFF',textAlign:'center',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);


