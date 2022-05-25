import React, { Fragment, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { AddCoupon, Coupons,footer,Createaccount } from '../container'

import { Colors, Fonts, ImageIcons } from '../common';
import { useSelector } from 'react-redux';
import CouponDetailJS from '../container/coupon/CouponDetail';

const Stack = createStackNavigator();

const CouponsStack = (props) => {
    const { navigation } = props;
    const { couponCredits } = useSelector(state => state.coupon);
    useEffect(() => {
        navigation.closeDrawer();
    }, [])

    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    name="Coupons"
                    component={Coupons}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
                        headerRight: () => <RightMenuItem navigation={navigation} couponCredits={couponCredits} />,
                        headerTitle: "COUPONS",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: Colors.WHITE, elevation: 0, shadowOpacity: 0 },
                    })}
                />

                <Stack.Screen
                    name="footer"
                    component={footer}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
                        headerRight: () => <RightMenuItem navigation={navigation} couponCredits={couponCredits} />,
                        headerTitle: "footer",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: Colors.WHITE, elevation: 0, shadowOpacity: 0 },
                    })}
                />

                <Stack.Screen
                    name="AddCoupon"
                    component={AddCoupon}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
                        headerTitle: "Create my store",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontWeight: 'bold' },
                        headerStyle: { backgroundColor: Colors.WHITE, elevation: 0, shadowOpacity: 0 },
                    })}
                />

                <Stack.Screen
                    name="Createaccount"
                    component={Createaccount}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
                        headerTitle: "Createaccount",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontWeight: 'bold' },
                        headerStyle: { backgroundColor: Colors.WHITE, elevation: 0, shadowOpacity: 0 },
                    })}
                />
                <Stack.Screen
                    name="CouponDetail"
                    component={CouponDetailJS}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
                        headerTitle: "ADD A COUPON",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontWeight: 'bold' },
                        headerStyle: { backgroundColor: Colors.RED, elevation: 0, shadowOpacity: 0 },
                    })}
                />
                {/* <Stack.Screen
                    name="Verification"
                    component={VerificationStack}
                    options={{ headerShown: false }}
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
            <Image source={isMenu ? ImageIcons.menuIcon : ImageIcons.backIcon} style={styles.leftIcon} />
        </TouchableOpacity>
    )
}

const RightMenuItem = ({ navigation, couponCredits }) => {
    return (
        <View style={styles.rightLabel}>
            <Text style={styles.rightText}>{`(${couponCredits || 0} credits)`}</Text>
        </View>
    )
}

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
        width: wp('5%'),
        height: wp('5%'),
        // marginLeft: 15,
        tintColor: Colors.BLACK
    },
    rightText: {
        fontSize: 12
    }
});

export default CouponsStack;
