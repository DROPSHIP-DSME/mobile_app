import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Coupons, Insights, SingleCouponInsight } from '../container'
import { Colors, Fonts, ImageIcons } from '../common';

const Stack = createStackNavigator();

const InsightsStack = (props) => {
    const { navigation } = props;

    return (
        <>
            <Stack.Navigator
            >
                <Stack.Screen
                    name="Coupons"
                    component={Insights}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={true} />,
                        headerTitle: "INSIGHTS",
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            color: Colors.BLACK,
                            //  fontFamily: Fonts.RalewayExtraBold 
                            fontWeight: 'bold'
                        },
                        headerStyle: { backgroundColor: Colors.WHITE, elevation: 0, shadowOpacity: 0 },
                    })}
                />
                <Stack.Screen
                    name="SingleCouponInsight"
                    component={SingleCouponInsight}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} isMenu={false} />,
                        headerTitle: "INSIGHTS",
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            color: Colors.BLACK,
                            fontFamily: Fonts.RalewayExtraBold
                        },
                        headerStyle: { backgroundColor: Colors.WHITE, elevation: 0, shadowOpacity: 0 },
                    })}
                />
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

export default InsightsStack;
