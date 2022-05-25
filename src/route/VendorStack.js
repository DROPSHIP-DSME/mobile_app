import React, { Fragment, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Vendor, Earning, AddNewVendor, SearchLocation, VendorDetails, AcceptedVendor } from '../container'
import { Colors, Fonts, ImageIcons } from '../common';
import EarningStack from './EarningStack';

const Stack = createStackNavigator();

const VendorStack = (props) => {
  const { navigation } = props;

  return (
    <>
      <Stack.Navigator
      >
        <Stack.Screen
          name="Vendor"
          component={Vendor}
          options={({ navigation }) => ({
            headerShown: false,
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
            headerTitle: "CLIENTS",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.WHITE, fontFamily: Fonts.RalewayExtraBold },
            headerStyle: { backgroundColor: Colors.BLUE, elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="AddNewVendor"
          component={AddNewVendor}
          options={({ navigation }) => ({
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitleAlign: 'center',
            headerTitle: "ADD NEW BUSINESS",
            headerTitleStyle: { fontWeight: 'bold', fontSize: 16 },
            headerStyle: { elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="AcceptedVendor"
          component={AcceptedVendor}
          options={({ navigation }) => ({
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTitleAlign: 'center',
            headerTitle: "BUSINESS REQUEST",
            headerTitleStyle: { fontFamily: Fonts.RalewayExtraBold, fontSize: 16 },
            headerStyle: { elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="SearchLocation"
          component={SearchLocation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VendorDetails"
          component={VendorDetails}
          options={({ navigation }) => ({
            headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
            headerTransparent: true,
            title: ""
          })}
        />
        {/* <Stack.Screen
          name="EarningStack"
          component={EarningStack}
          options={{ headerTransparent: true, title: "" }}
        /> */}
      </Stack.Navigator>
    </>
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
      <Image source={isMenu ? ImageIcons.menuIcon : ImageIcons.backIcon} style={[styles.leftIcon,{tintColor:isMenu?Colors.WHITE:Colors.BLACK}]} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  leftButton: {
    height: wp('6%'),
    marginLeft: 15,
    paddingHorizontal: 8,
    justifyContent: 'center'
  },
  leftIcon: {
    width: wp('5%'),
    height: wp('5%'),
    marginLeft: 15,
    tintColor: Colors.WHITE
  }
});

export default VendorStack;
