import React, { useEffect, useState } from 'react';
import { Image, Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import VendorStack from './VendorStack';
import EarningStack from './EarningStack';
import { ImageIcons, Colors, Fonts } from '../common';
import { logout } from '../redux/actions/Auth'
import VerificationStack from './VerificationStack';
import { StackActions } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

// Custom Drawer 
const CustomDrawer = (props) => {

  //Local states
  const [currentItem, setCurrentItem] = useState("Verification");

  const onItemSelection = (routeName) => {
    setCurrentItem(routeName);
  }
  console.log("verificationStatus==CustomDrawer=1=", props?.verificationStatus);
  useEffect(() => {
    props?.navigation?.closeDrawer();
  }, [])


  useEffect(() => {
    if (currentItem === "Coupons") {
      setTimeout(() => {
        props?.navigation?.dispatch(
          StackActions.replace('CouponsStack')
        );
      }, 1000);
    }

  }, [currentItem])

  useEffect(() => {
    console.log("verificationStatus==CustomDrawer==", props?.verificationStatus);
    if (props?.verificationStatus?.isStore) {
      setCurrentItem("Coupons")
    }
  }, [props?.verificationStatus?.isStore])

  useEffect(() => {
    if (props?.planSelected) {
      setCurrentItem("Coupons")
    }
    props?.navigation?.closeDrawer();
  }, [props?.planSelected])

  // const onGetFocused = (id) => {
  //   setCurrentItem(id)
  // }

  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: Colors.WHITE,
        flex: 1,
      }}
      openByDefault={false}
      initialRouteName={props?.loginCredentials?.role?.name === "salesman" ? "Vendor" : "Verification"}
      drawerContentOptions={{
        activeTintColor: Colors.GREEN,
        inactiveTintColor: Colors.WHITE,
        activeBackgroundColor: Colors.WHITE,
      }}
      drawerContent={prop => <CustomDrawerContent prop={prop} rootProps={props} currentItem={currentItem} onItemSelection={onItemSelection} />}
    >
      {
        props?.loginCredentials?.role?.name === "salesman" &&
        <Drawer.Screen
          name="Vendor"
          component={VendorStack}
          options={({ navigation }) => ({
            drawerIcon: ({ focused }) => <DrawerLeftIcon focused={focused} icon={ImageIcons.venderIcon} />,
            drawerLabel: ({ focused }) => <DrawerItemLabel focused={focused} label='BUSINESSES' />,
          })}
        />
      }
      {
        props?.loginCredentials?.role?.name === "salesman" &&
        <Drawer.Screen
          name="Earning"
          component={EarningStack}
          options={({ navigation }) => ({
            drawerIcon: ({ focused }) => <DrawerLeftIcon focused={focused} icon={ImageIcons.earningIcon} />,
            drawerLabel: ({ focused }) => <DrawerItemLabel focused={focused} label='TRACK EARNINGS' />,
          })}
        />
      }
      {props?.loginCredentials?.role?.name === "vendor" &&
        <Drawer.Screen
          name="Verification"
          component={VerificationStack}
          options={({ navigation }) => ({
            drawerLabel: ({ focused }) => <DrawerItemLabel focused={focused} label='' />,
          })}
        />
      }
    </Drawer.Navigator >
  );
};

// Custom Drwaer content
const CustomDrawerContent = ({ prop, rootProps, currentItem, onItemSelection }) => {

  const { logoutIcon, wallponLogoHorizontal, accountIcon } = ImageIcons;
  const { loginCredentials, storeAutofilInfo, verificationStatus,verificationSteps } = rootProps;
  const completedVerification = (verificationStatus?.isStore && verificationStatus?.isStoreImage && verificationStatus?.isUtilityBill) ? true : false;

  const [enableCoupon, setEnableCoupon] = useState(verificationStatus?.isStore || false);
    console.log("verificationSteps===>",verificationSteps)
  useEffect(() => {
    if (verificationStatus?.isStore && verificationStatus?.isStoreImage && verificationStatus?.isUtilityBill) {
      setEnableCoupon(true);
      setTimeout(() => {
        if(verificationSteps && (verificationSteps===0||verificationSteps===3)){
          prop.navigation.dispatch(
            StackActions.replace('CouponsStack')
          );
        }
      }, 1000);
    }
  }, [verificationStatus])

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <View style={styles.drawerHeader}>
        <Image source={wallponLogoHorizontal} style={styles.logo} />
      </View>
      <DrawerContentScrollView {...prop}>
        <View style={styles.drawerItemsContainer}>
          <View style={{ flex: 1 }}>
            {loginCredentials?.role?.name === "vendor" &&
              <DrawerItem
                key="Coupons"
                label={({ focused, color }) => <DrawerItemLabel focused={currentItem === "Coupons" ? true : false} label='COUPONS' />}
                style={{ height: 50, width: '100%', opacity: enableCoupon ? 1 : 0.3 }}
                icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Coupons" ? true : false} icon={ImageIcons.couponIcon} />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  if (enableCoupon) {
                    onItemSelection("Coupons");
                    prop.navigation.dispatch(
                      StackActions.replace('CouponsStack')
                    );
                  }
                }}
              />
            }

            <DrawerItem
                key="Profile"
                label={({ focused, color }) => <DrawerItemLabel focused={currentItem === "Profile" ? true : false} label='PROFILE' />}
                style={{ height: 50, width: '100%', opacity:enableCoupon ? 1 : 0.3  }}
                icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Profile" ? true : false} icon={ImageIcons.infoIcon} />}
                onPress={() => {
                  prop.navigation.closeDrawer();
                  onItemSelection("Profile")
                  if (enableCoupon) {
                    prop.navigation.dispatch(
                      StackActions.replace('ProfileStack')
                    );
                  }
                }}
              />
      
            {loginCredentials?.role?.name === "vendor" &&
              <DrawerItem
                key="Insights"
                label={({ focused, color }) => <DrawerItemLabel focused={currentItem === "Insights" ? true : false} label='INSIGHTS' />}
                style={{ height: 50, width: '100%', opacity: enableCoupon ? 1 : 0.3 }}
                icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Insights" ? true : false} icon={ImageIcons.insightsIcon} />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  if (enableCoupon) {
                    onItemSelection("Insights")
                    prop.navigation.dispatch(
                      StackActions.replace('InsightsStack')
                    );
                  }
                }}
              />
            }
            {loginCredentials?.role?.name === "vendor" &&
              <DrawerItem
                key="Subscriptions"
                label={({ focused, color }) => <DrawerItemLabel focused={currentItem === "Subscriptions" ? true : false} label='SUBSCRIPTIONS' />}
                style={{ height: 50, width: '100%', opacity: enableCoupon ? 1 : 0.3 }}
                icon={({ focused }) => <DrawerLeftIcon focused={currentItem === "Subscriptions" ? true : false} icon={ImageIcons.subscriptionIcon} />}
                onPress={() => {
                  prop.navigation.toggleDrawer();
                  if (enableCoupon) {
                    onItemSelection("Subscriptions")
                    prop?.navigation.navigate("SubscriptionStack");
                  }
                }}
              />
            }
            <DrawerItemList {...prop} itemStyle={{ width: '100%' }} />
          </View>
          {loginCredentials?.role?.name === "vendor" ?
            <TouchableOpacity
              key="Verification"
              style={[styles.logoutItem, { paddingBottom: 10, marginTop: 10, justifyContent: 'space-between' }]}
              onPress={() => {
                prop.navigation.toggleDrawer();
                prop.navigation.dispatch(
                  StackActions.replace('VerificationForm')
                );
                onItemSelection("Verification")
                // prop.navigation.navigate("VerificationForm")
              }}
            >
              <View style={styles.logoutItem}>
                <View>
                  <Image
                    resizeMode="contain"
                    source={accountIcon}
                    style={{
                      width: wp('8%'),
                      height: wp('8%'),
                      tintColor: currentItem === "Verification" ? Colors.GREEN : Colors.BLACK
                    }}
                  />
                </View>
                <View style={{ paddingLeft: '15%' }}>
                  <Text style={currentItem === "Verification" ? styles.activeLabel : styles.label}> {'VERIFICATION'}</Text>
                </View>
              </View>
              <View style={{ paddingRight: 10 }}>
                <Image source={ImageIcons.infoIcon} style={[styles.info, { tintColor: completedVerification ? Colors.GREEN : Colors.RED }]} />
              </View>
            </TouchableOpacity>
            :
            <View style={{ height: hp('18%') }} />
          }
          <DrawerItem
            label={({ focused }) => <DrawerItemLabel label='LOGOUT' />}
            style={{ height: 50, width: '100%' }}
            icon={({ focused }) => <DrawerLeftIcon icon={ImageIcons.logoutIcon} />}
            onPress={() => { prop.navigation.closeDrawer(); rootProps.logout(); }}
          />
        </View>
      </DrawerContentScrollView>
    </SafeAreaView >
  )
}

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
