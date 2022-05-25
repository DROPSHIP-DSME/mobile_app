import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ManageBank, Earning, CashOut, SubmitCashout, SelectBank, AddBankAccount, Coupons } from '../container'
import { Colors, Fonts, ImageIcons } from '../common';

const Stack = createStackNavigator();

const EarningStack = (props) => {
  const { navigation } = props;

  return (
    <>
      <Stack.Navigator
      >
        <Stack.Screen
          name="Earning"
          component={Earning}
          options={({ navigation }) => ({
            headerShown: true,
            headerLeft: () => <HeaderLeftItem navigation={navigation} id="Earning" />,
            // headerRight: () => <HeaderRightItem navigation={navigation} />,
            headerTitle: "TRACK EARNINGS",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.WHITE,fontWeight:'bold'},
            headerStyle: { backgroundColor: Colors.BLUE, elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="ManageBank"
          component={ManageBank}
          options={({ navigation }) => ({
            headerShown: true,
            headerLeft: () => <HeaderLeftItem navigation={navigation} id="ManageBank" />,
            headerRight: () => <HeaderRightItem navigation={navigation} />,
            headerTitle: "TRACK EARNINGS",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.WHITE,fontFamily:Fonts.RalewayExtraBold },
            headerStyle: { backgroundColor: Colors.BLUE, elevation: 0, shadowOpacity: 0},
          })}
        />
        <Stack.Screen
          name="CashOut"
          component={CashOut}
          options={({ navigation }) => ({
            headerShown: true,
            headerLeft: () => <HeaderLeftItem navigation={navigation} id="CashOut" />,
            headerRight: () => <HeaderRightItem navigation={navigation} />,
            headerTitle: "CASH OUT",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.WHITE,fontFamily:Fonts.RalewayExtraBold },
            headerStyle: { backgroundColor: Colors.BLUE, elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="SubmitCashout"
          component={SubmitCashout}
          options={({ navigation }) => ({
            headerShown: true,
            headerLeft: () => <HeaderLeftItem navigation={navigation} id="SubmitCashout" />,
            headerRight: () => <HeaderRightItem navigation={navigation} />,
            headerTitle: "CASH OUT",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.WHITE,fontFamily:Fonts.RalewayExtraBold },
            headerStyle: { backgroundColor: Colors.BLUE, elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="SelectBank"
          component={SelectBank}
          options={({ navigation }) => ({
            headerShown: true,
            headerLeft: () => <HeaderLeftItem navigation={navigation} id="SelectBank" />,
            headerRight: () => <HeaderRightItem navigation={navigation} />,
            headerTitle: "ADD BANK ACCOUNT",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.WHITE,fontFamily:Fonts.RalewayExtraBold },
            headerStyle: { backgroundColor: Colors.BLUE, elevation: 0, shadowOpacity: 0 },
          })}
        />
        <Stack.Screen
          name="AddBankAccount"
          component={AddBankAccount}
          options={({ navigation }) => ({
            headerShown: true,
            headerLeft: () => <HeaderLeftItem navigation={navigation} id="AddBankAccount" />,
            headerRight: () => <HeaderRightItem navigation={navigation} />,
            headerTitle: "ADD BANK ACCOUNT",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.WHITE,fontFamily:Fonts.RalewayExtraBold },
            headerStyle: { backgroundColor: Colors.BLUE, elevation: 0, shadowOpacity: 0 },
          })}
        />
      </Stack.Navigator>
    </>
  );
};


const HeaderLeftItem = ({ navigation, id }) => {
  let leftIconImage = id === "Earning" || id === "ManageBank" ? ImageIcons.menuIcon : ImageIcons.backIcon
  return (
    <TouchableOpacity
      onPress={() => {
        if (id === "Earning" || id === "ManageBank") {
          if (id === "ManageBank") {
            navigation?.goBack()
          }
          navigation?.toggleDrawer();
        } else {
          navigation?.goBack()
        }
      }}
      style={styles.leftButton}
    >
      <Image source={leftIconImage} style={styles.icon} />
    </TouchableOpacity>
  )
}

const HeaderRightItem = ({ navigation }) => {
  return (
    <TouchableOpacity
      // onPress={() => navigation?.navigate("ManageBank")}
      style={styles.rightIcon}
    >
      <Image source={ImageIcons.bankBuildingIcon} style={styles.icon} />
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  leftButton: {
    height: wp('6%'),
    marginLeft: 15,
    paddingHorizontal: 8,
    justifyContent:'center'
  },
  leftIcon: {
    width: wp('5%'),
    height: wp('5%'),
    marginLeft: 10,
    tintColor: Colors.WHITE,
  },
  rightIcon: {
    width: wp('5%'),
    height: wp('5%'),
    marginRight: 10,
    tintColor: Colors.WHITE
  },
  icon: {
    width: wp('5%'),
    height: wp('5%'),
    tintColor: Colors.WHITE
  }
});

export default EarningStack;
