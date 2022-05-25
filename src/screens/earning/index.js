import React, { useEffect, useState } from 'react';
import { Text, View, FlatList,   TouchableOpacity } from 'react-native';
import { Fonts, Colors } from '../../common';
import Loader from '../../components/modals/Loader';
import moment from 'moment';
import styles from './styles';

const Earning = (props) => {

    useEffect(() => {
        props.getTrackEarningData();
    }, [])

    const _renderEmptyList = () => {
        return (
            <View style={styles.emptyList}>
                <Text style={styles.emptyListText}>No any commission yet.</Text>
            </View>
        )
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                disabled={true}
                onPress={() => console.log("cashout list pressed.")}
                style={styles.listItem}>
                <View>
                    <Text style={styles.titleText}>{item?.vendorId?.businessName || '-'}</Text>
                    <Text style={styles.titleSubText}>{`${item?.vendorId?.fullName}`}</Text>
                    <Text style={styles.phoneNumberText}>{"Redeemed on: " + moment(item?.vendorId?.transactionDate).format("MM/DD/YYYY")}</Text>
                </View>
                <Text style={styles.balanceText}>{"$" + Number(item?.commissionAmount).toFixed(2)}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.root}>
            
            <View style={styles.topBlueView} />
            <View style={styles.headerViewContainer}>
                <View style={styles.headerView}>
                    <Text style={styles.cashText}>{`${props?.trackEarningData?.totalClients || '0'}`}</Text>
                    <Text style={styles.earnedDateText}>{"Total Clients"}</Text>
                </View>
                <View style={styles.bottomSection}>
                    <View style={styles.subSection}>
                        <View>
                            <Text style={styles.numberText}>{`$${Number(props?.trackEarningData?.lastWeekEarnings).toFixed(2) || '0'}`}</Text>
                            <Text style={styles.subText}>Paid Out Earnings</Text>
                        </View>
                    </View>
                    <View style={styles.subSection}>
                        <View>
                            <Text style={styles.numberText}>{`$${Number(props?.trackEarningData?.currentWeekEarnings).toFixed(2) || "0"}`}</Text>
                            <Text style={styles.subText}>Pending Earnings</Text>
                        </View>
                    </View>
                </View>
            </View>
            <FlatList
                style={styles.list}
                data={props?.trackEarningData?.data || []}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={() => <View style={{ height: 30 }} />}
                ListEmptyComponent={_renderEmptyList}
            />
            <Loader isVisible={props?.trackEarningLoader} />
        </View>
    )
}

export default Earning;