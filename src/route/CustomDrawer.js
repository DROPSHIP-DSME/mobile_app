import React, { useEffect, useState } from 'react';
import { Image, Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ImageIcons, Colors, Fonts } from '../common';
import { logout } from '../redux/actions/Auth'
import { StackActions } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

// Custom Drawer 
const CustomDrawer = (props) => {

  //Local states
  const [currentItem, setCurrentItem] = useState("Verification");

  const onItemSelection = (routeName) => {
      setCurrentItem(routeName);
  }
  useEffect(() => {
    props?.navigation?.closeDrawer();
  }, [])


  
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: Colors.WHITE,
        flex: 1,
      }}
      openByDefault={false}
      initialRouteName={"Verification"}
      drawerContentOptions={{
        activeTintColor: Colors.GREEN,
        inactiveTintColor: Colors.WHITE,
        activeBackgroundColor: Colors.WHITE,
      }}
    >
      
      
      
    </Drawer.Navigator >
  );
};



const DrawerLeftIcon = ({ focused, icon }) => {
  return (
    <Image
      resizeMode="contain"
      source={icon}
      style={{
        width: wp('8%'),
        height: wp('8%'),
        tintColor: focused ? Colors.GREEN : Colors.BLACK
      }}
    />
  )
}

const DrawerItemLabel = ({ focused, label }) => {
  return (
    <Text style={focused ? styles.activeLabel : styles.label}> {label}</Text>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    // fontFamily: Fonts.QuestrialRegular,
    color: Colors.BLACK,
  },
  activeLabel: {
    fontSize: 16,
    fontFamily: Fonts.RalewayExtraBold,
    color: Colors.GREEN
  },
  drawerHeader: {
    height: hp('18%'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === "ios" ? hp('2%') : hp('10%'),
  },
  logo: {
    width: '85%',
    height: '100%',
    resizeMode: 'contain'
  },
  logoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  leftIcon: {
    width: wp('5%'),
    height: wp('5%'),
    marginLeft: 15,
    tintColor: Colors.WHITE
  },
  icon: {
    width: wp('8%'),
    height: wp('8%'),
  },
  info: {
    width: wp('3%'),
    height: wp('3%'),
    resizeMode: 'contain'
  },
  drawerItemsContainer: {
    height: Platform.OS === "ios" ? hp('68%') : hp('80%'),
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: Platform.OS === "ios" ? hp('-5%') : hp('-1%')
  }
});

const mapStateToProps = (state) => ({
  loginCredentials: state.auth.loginCredentials,
  isStore: state.vendor.isStore,
  verificationStatus: state.vendor.verificationStatus,
  verificationSteps: state.vendor.verificationSteps,
  storeAutofilInfo: state.vendor.storeAutofilInfo,
  storeImageUploadInfo: state.vendor.storeImageUploadInfo,
  planSelected: state.coupon.planSelected,
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
