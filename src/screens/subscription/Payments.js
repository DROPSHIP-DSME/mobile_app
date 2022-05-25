import React, { useEffect, useState } from 'react';
import { Text, View, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { RoundedButton } from '../../components/forms/button';
import styles from './styles';
import Loader from '../../components/modals/Loader';
import moment from 'moment';
import { CommonStrings } from '../../common';
// const { WCardConnect } = NativeModules;

function Payments(props) {
    const [cardInfo, setCardInfo] = useState();

    const [selectedPlan, setSelectedPlan] = useState({
        "__v": 0,
        "_id": "60b8d30bac600357240347eb",
        "createdAt": "2021-06-03T13:03:07.238Z",
        "limit": 1,
        "price": 89.99,
        "subscriptionType": "1 coupon per month",
        "updatedAt": "2021-06-03T13:03:07.238Z"
    });

    useEffect(() => {
        if (props?.route?.params && props?.route?.params?.selectedPlan) {
            setSelectedPlan(props?.route?.params?.selectedPlan);
        }
        // WCardConnect.initialize("https://boltgw-uat.cardconnect.com");
    }, [])

    // const generateToken = () => {
    //     let values = cardInfo && cardInfo?.values;
    //     // console.log("cardInfo===>", cardInfo)
    //     // props.navigation.navigate("TransactionDetail");
    //     // return;
    //     if (cardInfo && cardInfo?.valid && values) {
    //         let year = parseInt(2000 + parseInt(String(values?.expiry).split('/')[1]));
    //         let month = parseInt(parseInt(String(values?.expiry).split('/')[0]));
    //         let expDate = moment().year(year).month(month).date(1).hour(5).minute(30).second(0);
    //         let cardNumber = String(values?.number).replace(/\s/g, '')
    //         if (Platform.OS === "ios") {
    //             WCardConnect.generatePaymentToken(cardNumber, expDate.toISOString(), values?.cvc, (response) => {
    //                 console.log("token ios response==>", response)
    //                 if (response) {
    //                     let paymentRequest = {
    //                         "couponPlan":selectedPlan?._id,
    //                         "merchid": "820000000326",
    //                         "account": response,
    //                         "expiry": "1222",
    //                         "amount": "1",
    //                         "currency": "USD"
    //                     }
    //                     props.purchaseSubscriptionPlan(paymentRequest, props.navigation)
    //                 }
    //             });
    //         } else {
    //             WCardConnect.generatePaymentToken(values?.number, values?.expire, values?.cvc, (response) => {
    //                 console.log("token android response==>", response)
    //                 let paymentRequest = {
    //                     "couponPlan":selectedPlan?._id,
    //                     "merchid": "820000000326",
    //                     "account": response,
    //                     "expiry": "1222",
    //                     "amount": "1",
    //                     "currency": "USD"
    //                 }
    //                 props.purchaseSubscriptionPlan(paymentRequest, props.navigation)
    //             });
    //         }
    //     } else {
    //         if (cardInfo?.status?.name === "incomplete") {
    //             Alert.alert(CommonStrings.AppName, "Please enter a valid name")
    //         } else if (cardInfo?.status?.cardNumber === "incomplete") {
    //             Alert.alert(CommonStrings.AppName, "Please enter a valid card number")
    //         } else if (cardInfo?.status?.expiry === "incomplete") {
    //             Alert.alert(CommonStrings.AppName, "Please enter a valid expiry date")
    //         } else if (cardInfo?.status?.cvc === "incomplete") {
    //             Alert.alert(CommonStrings.AppName, "Please enter a valid CVV")
    //         } else if (cardInfo?.status?.postalCode === "incomplete") {
    //             Alert.alert(CommonStrings.AppName, "Please enter a valid postal code(Zip code)")
    //         } else {
    //             Alert.alert(CommonStrings.AppName, "Invalid card details")
    //         }
    //     }
    // }

    // const _onChange = (cardInfo) => {
    //     setCardInfo(cardInfo)
    //     // console.log("cardInfo==>", cardInfo)
    // }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.root}>
            <ScrollView >
               
                <View style={{ paddingHorizontal: '25%', marginTop: '15%' }}>
                    <RoundedButton
                        text="Continue"
                        // onPress={() => generateToken()}
                    />
                </View>
            </ScrollView>
            <Loader isVisible={props?.paymentLoader} />
        </KeyboardAvoidingView>
    )
}

export default Payments;
