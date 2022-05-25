import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { RoundedButton } from '../../components/forms/button';
import styles from './styles';
import Loader from '../../components/modals/Loader';

const ChooseSubscription = (props) => {

    //Local states
    const [selectedPlan, setSelectedPlan] = useState();
    const [subscriptionPlan, setSubscriptionPlan] = useState([
        {
            "__v": 0,
            "_id": "60b8d30bac600357240347eb",
            "createdAt": "2021-06-03T13:03:07.238Z",
            "limit": 1,
            "price": 89.99,
            "subscriptionType": "1 coupon per month",
            "updatedAt": "2021-06-03T13:03:07.238Z"
        }
    ]);

    useEffect(() => {
        props?.getSubscriptionPlans();
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (props?.subscriptionPlanData && props?.subscriptionPlanData?.length > 0) {
                setSelectedPlan(props?.subscriptionPlanData[0]);
            }
        }, 500);
    }, [props?.subscriptionPlanData])

    // plan selection method
    const onSelection = (item) => {
        setSelectedPlan(item)
    }

    //on press continue
    const onContinue = () => {
        props.navigation.navigate("SubscriptionDetail", { selectedPlan });
    }

    const _renderEmptyList = () => {
        return (
            <View style={styles.emptyPlan}>
                <Text style={styles.emptyListText}>There is no subscription plan yet.</Text>
            </View>
        )
    }

    const _renderItem = ({ item, index }) => {
        const active = item?._id === selectedPlan?._id ? true : false;
        return (
            <TouchableOpacity
                key={String(index)}
                style={[styles.subscriptionItem, active && styles.activeSubscriptionItem]}
                onPress={() => onSelection(item)}
            >
                <Text style={styles.priceText}>{`$${item?.price}`}</Text>
                <Text style={styles.validityText}>{`${item?.subscriptionType}`}</Text>
            </TouchableOpacity >
        )
    }

    return (
        <View style={styles.root}>
            <View style={styles.heading}>
                <Text style={styles.headingText}>Choose you plan</Text>
                <Text style={styles.subtitleText}>Please select a subscription so you can add coupons.</Text>
            </View>
            <View style={styles.subContainer}>
                <View style={{ paddingHorizontal: '5%', marginTop: '10%' }}>
                    <FlatList
                        // data={props?.subscriptionPlanData || []}
                        data={subscriptionPlan}
                        renderItem={_renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ListEmptyComponent={_renderEmptyList}
                        scrollEnabled={false}
                    />
                </View>
                <View style={{ paddingHorizontal: '25%', marginTop: '22%' }}>
                    <RoundedButton
                        text="Continue"
                        onPress={() => onContinue()}
                    />
                </View>
            </View>
            <Loader isVisible={props?.subscriptionPlanDataLoader} />
        </View>
    )
}

export default ChooseSubscription;