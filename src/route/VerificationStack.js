import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { SearchLocation, VerificationForm, VerificationForm2, VerificationForm3, VerificationForm4 } from '../container'
import { Colors, Fonts, ImageIcons } from '../common';
import CouponsStack from './CouponsStack';
import InsightsStack from './InsightsStack';
import ProfileStack from './ProfileStack';
import { connect } from 'react-redux';
import SubscriptionStack from './SubscriptionStack';

const Stack = createStackNavigator();

const VerificationStack = (props) => {
    const { navigation } = props;

    // useEffect(() => {
    //     navigation.closeDrawer();
    //     if (props?.storeAutofilInfo?.verificationStatus?.isStore) {
    //         console.log("==VerificationStack===",props?.storeAutofilInfo?.verificationStatus?.isStore)
    //         setTimeout(() => {
    //             props?.navigation?.navigate("CouponsStack")
    //         }, 1000);
    //     }
    // }, [props?.storeAutofilInfo?.verificationStatus])

    return (
        <>
            <Stack.Navigator
                initialRouteName={props?.storeAutofilInfo?.verificationStatus?.isStore ? "CouponsStack" : "VerificationForm"}
            >
                <Stack.Screen
                    name="CouponsStack"
                    component={CouponsStack}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="VerificationForm"
                    component={VerificationForm}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} leftImage={ImageIcons.menuIcon} />,
                        headerTitle: "VERIFICATION",
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            color: Colors.BLACK,
                            fontFamily: Fonts.HomepageBaukastenBold,
                            fontWeight:'bold'
                        },
                        headerStyle: { backgroundColor: Colors.WHITE, elevation: 0, shadowOpacity: 0 },
                    })}
                />
                <Stack.Screen
                    name="VerificationForm2"
                    component={VerificationForm2}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} leftImage={ImageIcons.menuIcon} />,
                        headerTitle: "VERIFICATION",
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            color: Colors.BLACK,
                            fontFamily: Fonts.RalewayExtraBold
                        },
                        headerStyle: { backgroundColor: Colors.WHITE, elevation: 0, shadowOpacity: 0 },
                    })}
                />
                <Stack.Screen
                    name="VerificationForm3"
                    component={VerificationForm3}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerTransparent: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} leftImage={ImageIcons.backIcon} isBack={true} />,
                        headerTitle: "TAKE PHOTO",
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            color: Colors.WHITE,
                            fontFamily: Fonts.RalewayExtraBold
                        },
                        headerStyle: { backgroundColor: Colors.WHITE, elevation: 0, shadowOpacity: 0 },
                    })}
                />
                <Stack.Screen
                    name="VerificationForm4"
                    component={VerificationForm4}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerTransparent: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} leftImage={ImageIcons.backIcon} isBack={true} />,
                        headerTitle: "TAKE PHOTO",
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            color: Colors.WHITE,
                            fontFamily: Fonts.RalewayExtraBold
                        },
                        headerStyle: { backgroundColor: Colors.WHITE, elevation: 0, shadowOpacity: 0 },
                    })}
                />
                <Stack.Screen
                    name="SearchLocation"
                    component={SearchLocation}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="InsightsStack"
                    component={InsightsStack}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ProfileStack" 
                    component={ProfileStack}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SubscriptionStack"
                    component={SubscriptionStack}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </>
    );
};

const LeftMenuItem = ({ navigation, leftImage, isBack }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                if (isBack) {
                    navigation.goBack();
                } else {
                    navigation?.toggleDrawer()
                }
            }}
            style={styles.leftButton}
        >
            <Image source={leftImage} style={[styles.leftIcon, { tintColor: isBack ? Colors.WHITE : Colors.BLACK }]} />
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
        tintColor: Colors.BLACK,
    }
});

const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    // isStore: state.vendor.isStore,
    verificationStatus: state.vendor.verificationStatus,
    storeAutofilInfo: state.vendor.storeAutofilInfo,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(VerificationStack);;