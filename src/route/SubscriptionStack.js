import React, { Fragment,useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { SubscriptionDetail, ChooseSubscription } from '../container'
import { Colors, Fonts, ImageIcons } from '../common';
import Payments from '../container/subscription/Payments';
import TransactionDetail from '../screens/subscription/TransactionDetail';

const Stack = createStackNavigator();

const SubscriptionStack = (props) => {
    const { navigation } = props;

    useEffect(() => {
        navigation.closeDrawer();
    }, [])

    return (
        <>
            <Stack.Navigator>
                
                <Stack.Screen
                    name="SubscriptionDetail"
                    component={SubscriptionDetail}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} />,
                        headerTitle: "SUBSCRIPTIONS",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: Colors.WHITE, elevation: 0, shadowOpacity: 0 },
                    })}
                />
                <Stack.Screen
                    name="Payments"
                    component={Payments}
                    options={({ navigation }) => ({
                        headerShown: true,
                        // headerLeft: () => <LeftMenuItem navigation={navigation} />,
                        headerTitle: "SUBSCRIPTIONS",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: Colors.WHITE, elevation: 0, shadowOpacity: 0 },
                    })}
                />
                <Stack.Screen
                    name="TransactionDetail"
                    component={TransactionDetail}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft:()=>null,
                        // headerLeft: () => <LeftMenuItem navigation={navigation} />,
                        headerTitle: "SUBSCRIPTIONS",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: Colors.WHITE, elevation: 0, shadowOpacity: 0 },
                    })}
                />
                <Stack.Screen
                    name="ChooseSubscription"
                    component={ChooseSubscription}
                    options={({ navigation }) => ({
                        headerShown: true,
                        headerLeft: () => <LeftMenuItem navigation={navigation} />,
                        headerTitle: "SUBSCRIPTIONS",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: Colors.BLACK, fontFamily: Fonts.RalewayExtraBold },
                        headerStyle: { backgroundColor: Colors.WHITE, elevation: 0, shadowOpacity: 0 },
                    })}
                />
            </Stack.Navigator>
        </>
    );
};

const LeftMenuItem = ({ navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation?.toggleDrawer()}
            style={styles.leftButton}
        >
            <Image source={ImageIcons.menuIcon} style={styles.leftIcon} />
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
        // marginLeft: 15,
        tintColor: Colors.BLACK
    }
});

export default SubscriptionStack;
