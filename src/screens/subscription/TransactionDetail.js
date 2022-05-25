import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView,BackHandler } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RoundedButton } from '../../components/forms/button';
import styles from './styles';
import { SET_PLAN_SELECTED_FLAG } from '../../redux/actions/ActionTypes'
import moment from 'moment';

const TransactionDetail = (props) => {

    const dispatch = useDispatch();
    let { subscriptionPurchaseData } = useSelector(state => state.coupon)
    //Local states
    const [transaction, setTransaction] = useState({
        "Transaction": "R172873725578",
        "Location": "Wallpon",
        "Date": "06/22/2021",
        "CardNumber": "1111",
        "Amount": "$1.0",
        "Status": "Captured"
    });

    useEffect(() => {
        if(subscriptionPurchaseData && subscriptionPurchaseData?.receipt){
            setTransaction(subscriptionPurchaseData?.receipt);
        }
    }, [subscriptionPurchaseData])

    useEffect(()=>{
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () =>
          BackHandler.removeEventListener("hardwareBackPress", backAction);
    },[])

    const backAction = () => {
        props.navigation.navigate("Coupons")
        dispatch({ type: SET_PLAN_SELECTED_FLAG, payload: true });
        return true;
      };
    
    // purchase subscription submission
    const onPressDone = () => {
        props.navigation.navigate("Coupons")
        dispatch({ type: SET_PLAN_SELECTED_FLAG, payload: true });
    }

    return (
        <View style={styles.root}>
            <ScrollView keyboardShouldPersistTaps="always">
                <View>
                    <View style={[styles.heading, { paddingBottom: '10%', marginTop: '25%' }]}>
                        <Text style={styles.headingText}>Subscription is successful</Text>
                    </View>                    
                </View>
                <View style={{ paddingHorizontal: '25%', marginTop: '50%' }}>
                    <RoundedButton
                        text="Done"
                        onPress={() => onPressDone()}
                    />
                </View>
            </ScrollView>
            {/* <Loader isVisible={props?.subscriptionPurchaseLoader} /> */}
        </View>
    )
}

const RowItem = ({ label, value }) => {
    return (
        <View style={styles.trnsDetailRow}>
            <Text style={{ width: '45%' }}>{label}</Text>
            <Text style={[styles.valueText, { width: '45%' }]}>{value}</Text>
        </View>
    )
}

export default TransactionDetail;