import React, { useEffect, useState } from 'react';
import { Text, View, FlatList,   TouchableOpacity } from 'react-native';
import { Fonts, Colors } from '../../common';
import Loader from '../../components/modals/Loader';
import styles from './styles';

const Insights = (props) => {

    // Local states
    const [isRefresh, setIsRefresh] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        props.getRedeemedCoupons();
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
            setIsRefresh(false)
        }, 500);
    }, [props?.vendorList])

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => props.navigation.navigate("SingleCouponInsight", { couponDetail: item })}
                style={styles.listItem}>
                <View style={{ width: '100%' }}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>{item?.title}</Text>
                    </View>
                    <View style={[styles.subTitleContainer, { marginTop: 10 }]}>
                        <Text style={styles.titleSubText}>{"Times Redeemed"}</Text>
                        <Text style={styles.titleSubText}>{item?.NoOfTimesRedeemed}</Text>
                    </View>
                    <View style={[styles.subTitleContainer, { paddingBottom: 10, marginTop: 5 }]}>
                        <Text style={styles.timeLeftText}>{"Time Left"}</Text>
                        <Text style={[styles.timeLeftText, { color: item?.daysLeft >= 0 ? Colors.DARK_GREY : Colors.RED }]}>{item?.daysLeft >= 0 ? item?.daysLeft + " Days" : "Expired"}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.root}>
            
            <FlatList
                style={styles.list}
                data={props?.redeemedCoupons || []}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={() => <View style={{ height: 30 }} />}
                ListEmptyComponent={() => <View style={styles.emptyInsight}><Text style={styles.emptyListText}>There is no insighs yet</Text></View>}
                refreshing={isRefresh}
                extraData={isLoading}
                onRefresh={() => {
                    setIsRefresh(true)
                    setIsLoading(true);
                    props.getRedeemedCoupons();
                    setTimeout(() => {
                        setIsLoading(false)
                        setIsRefresh(false)
                    }, 500);
                }}
            />
            <Loader isVisible={props?.redeemedCouponsLoader} />
        </View>
    )
}

export default Insights;