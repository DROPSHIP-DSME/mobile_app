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
  Dashlive,
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
  CreateAccount,
  CreateAccountShop,
  Addbrand,
  AddProduct,
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
  Topselling,
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
  coming,
  upcoming,
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
  ProductStore

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
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Go Live",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#fce8e8', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
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
        name="Account"
        component={Account}
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
        name="Accountsum"
        component={Accountsum}
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
        name="changepayment"
        component={changepayment}
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
        name="clothdetails"
        component={clothdetails}
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
        name="clothing"
        component={clothing}
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
        name="Blurbackground"
        component={Blurbackground}
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
        name="watchlist"
        component={watchlist}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Watchlist",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#fce8e8', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      


      <Stack.Screen
        name="Category"
        component={Category}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Category",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#fce8e8', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen
        name="AddStore2"
        component={AddStore2}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Add to Shop",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#fce8e8', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

       <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Product Details",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen
        name="ProductDetails2"
        component={ProductDetails2}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Product Details",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

       <Stack.Screen
        name="ProductDetails3"
        component={ProductDetails3}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Product Details",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />

      <Stack.Screen
        name="NameStore"
        component={NameStore}
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
        name="ProductStore"
        component={ProductStore}
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
        name="Bagprocess"
        component={Bagprocess}
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
        name="editprofile"
        component={editprofile}
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
        name="Accountorderhist"
        component={Accountorderhist}
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
        name="editviewaddress"
        component={editviewaddress}
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
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Search",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
     
       <Stack.Screen
        name="Notification"
        component={Notification}
        options={({ navigation }) => ({
                        headerShown: false,
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Notification",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor:'#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
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
        name="Cart"
        component={Cart}
        options={{ title: '', headerShown: false }}
      />
      

      <Stack.Screen
        name="EmmaRose"
        component={EmmaRose}
        options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem2 navigation={navigation}  />,
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
        options={{ title: '', headerShown: false }}
      />

      <Stack.Screen
        name="Dashproduct"
        component={Dashproduct}
        options={{ title: '', headerShown: false }}
      />

       <Stack.Screen
        name="Dashorder"
        component={Dashorder}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Dashsuccess"
        component={Dashsuccess}
        options={{ title: '', headerShown: false }}
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
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Accountpublish"
        component={Accountpublish}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Accountstore"
        component={Accountstore}
        options={{ title: '', headerShown: false }}
      />
      <Stack.Screen
        name="Accountfav1"
        component={Accountfav1}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Accountbrandlist"
        component={Accountbrandlist}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Accountdata"
        component={Accountdata}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Dashchats"
        component={Dashchats}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Dashreturn"
        component={Dashreturn}
        options={{ title: '', headerShown: false }}
      />
      <Stack.Screen
        name="Dashsale"
        component={Dashsale}
        options={{ title: '', headerShown: false }}
      />
      <Stack.Screen
        name="Dashsubscribe"
        component={Dashsubscribe}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Dashsubscribe2"
        component={Dashsubscribe2}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Dashadvertise"
        component={Dashadvertise}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Dashaccount"
        component={Dashaccount}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Dashaccountlist"
        component={Dashaccountlist}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Dashwith"
        component={Dashwith}
        options={{ title: '', headerShown: false }}
      />
      <Stack.Screen
        name="Dashbrand"
        component={Dashbrand}
        options={{ title: '', headerShown: false }}
      />
      <Stack.Screen
        name="Dashimport"
        component={Dashimport}
        options={{ title: '', headerShown: false }}
      />
      <Stack.Screen
        name="Dashsetting"
        component={Dashsetting}
        options={{ title: '', headerShown: false }}
      />
      <Stack.Screen
        name="Dashsupport"
        component={Dashsupport}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Dashsupportacc"
        component={Dashsupportacc}
        options={{ title: '', headerShown: false }}
      />
       <Stack.Screen
        name="Dashlive"
        component={Dashlive}
        options={{ title: '', headerShown: false }}
      />
       
       <Stack.Screen
        name="Dashdetail"
        component={Dashdetail}
        options={{ title: '', headerShown: false }}
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
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
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
                        headerShown: false,
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
                        headerLeft: () => <LeftMenuItem navigation={navigation}  />,
                        //headerRight: () => <RightMenuItem navigation={navigation}  />,
                        headerTitle: "Create New Password",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: '#FFE7E7', elevation: 0, shadowOpacity: 0 },
                    })}
        //options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
         
      <Stack.Screen 
            name="CreateAccount"
            component={CreateAccount}
            options={{ title: '', headerShown: false, headerTransparent: true,headerTintColor:Colors.WHITE}}
          />

      
      <Stack.Screen 
        name="CreateAccountShop"
        component={CreateAccountShop}
        options={{ title: '', headerShown: false, headerTransparent: true,headerTintColor:Colors.WHITE}}
      />
      
     
      
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ title: '', headerShown: true, headerTransparent: true,headerTintColor:Colors.WHITE }}
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
        <TouchableOpacity
            
             onPress={() => {
                if (isMenu) {
                    navigation?.toggleDrawer()
                } else {
                    navigation?.goBack();
                }
            }}
            style={styles.leftButton}
        >
            <Image source={isMenu ? ImageIcons.menuIcon : ImageIcons.backlefticon} style={styles.leftIcon}  />
        </TouchableOpacity>
    )
}
const LeftMenuItem2 = ({ navigation, isMenu }) => {
    return (
        <TouchableOpacity
            
             onPress={() => {
                if (isMenu) {
                    navigation?.toggleDrawer()
                } else {
                    navigation?.goBack();
                }
            }}
            style={styles.leftButton}
        >
            <Image source={isMenu ? ImageIcons.menuIcon : ImageIcons.backlefticon} style={styles.leftIcon}  />
        </TouchableOpacity>
    )
}

const LeftMenuItem3 = ({ navigation, isMenu }) => {
    return (
        <TouchableOpacity
            
             onPress={() => {
                if (isMenu) {
                    navigation?.toggleDrawer()
                } else {
                    navigation?.navigate("SearchProduct")
                }
            }}
            style={styles.leftButton}
        >
            <Image source={isMenu ? ImageIcons.menuIcon : ImageIcons.arrow} style={styles.leftIcon}  />
        </TouchableOpacity>
    )
}
const RightMenuItem = () => {
    return (
        <View style={styles.rightLabel}>
            <Text style={styles.rightText}>Header</Text>
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
        height: wp('6%'),
        marginLeft: 15,
        paddingHorizontal: 8,
        justifyContent: 'center'
    },
    rightLabel: {
        height: wp('6%'),
        paddingHorizontal: 8,
        marginRight: 10,
        justifyContent: 'center'
    },
    leftIcon: {
        width: wp('6%'),
        height: wp('7%'),
        tintColor: Colors.BLACK
    },
    rightText: {
       fontSize: 12
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);


