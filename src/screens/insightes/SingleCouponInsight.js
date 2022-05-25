import React, { useEffect, useState } from 'react';
import { Text, View, FlatList,   TouchableOpacity, ScrollView, Image } from 'react-native';
import { Fonts, Colors, ImageIcons } from '../../common';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { BarChart } from "react-native-chart-kit";
import styles from './styles';
import InsightFilterModal from '../../components/modals/InsightFilterModal';
import moment from 'moment';
import Loader from '../../components/modals/Loader';

const DailyLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const HourlyLabels = ["12 am", "01 am", "02 am", "03 am", "04 am", "05 am", "06 am", "07 am", "08 am", "09 am", "10 am", "11 am", "12 pm", "01 pm", "02 pm", "03 pm", "04 pm", "05 pm", "06 pm", "07 pm", "08 pm", "09 pm", "10 pm", "11 pm"];

const SingleCouponInsight = (props) => {

    // Local states
    const [coupon, setCoupon] = useState()
    const [openFilterModal, setOpenFilterModal] = useState(false);
    const [filterType, setFilterType] = useState("Hourly"); //Hourly , Daily
    const [hourlyValues, setHourlyValues] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    const [dailyValues, setDailyValues] = useState([0,0,0,0,0,0,0]);
    const [graphData, setGraphData] = useState({
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
            {
                data: [0, 0, 0, 0, 0, 0, 0],
            }
        ]
    });

    useEffect(() => {
        const { couponDetail } = props.route?.params;
        if (couponDetail) {
            setCoupon(couponDetail)
            getCouponTrackingData(couponDetail?._id)
        }
    }, [])

    useEffect(() => {
        if (props?.redeemedCouponTrackingData) {
            setTimeout(() => {
                let data = {
                    labels: HourlyLabels,
                    datasets: [
                        {
                            data: props?.redeemedCouponTrackingData?.hourly,
                        }
                    ]
                };
                setGraphData(data);
                setHourlyValues(props?.redeemedCouponTrackingData?.hourly);
                setDailyValues(props?.redeemedCouponTrackingData?.daily);
            }, 500);
        }
    }, [props.redeemedCouponTrackingData])

    // get redeemed coupons tracking data
    const getCouponTrackingData = (couponId) => {
        props.getRedeemedTrackingData(couponId);
    }

    // filter graph data by (Daily/Hourly)
    const prepareGraphData = (filterBy) => {
        if (filterBy === "Hourly") {
            let data = {
                labels: HourlyLabels,
                datasets: [
                    {
                        data: hourlyValues,
                    }
                ]
            };
            setGraphData(data);
            setOpenFilterModal(false)
        } else {
            let data = {
                labels: DailyLabels,
                datasets: [
                    {
                        data: dailyValues,
                    }
                ]
            };
            setGraphData(data);
            setOpenFilterModal(false)
        }
    }

    return (
        <View style={styles.root}>
            
            <ScrollView style={{ paddingBottom: 0 }}>
                <View style={styles.listItem}>
                    <View style={{ width: '100%' }}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>{coupon?.title || "-"}</Text>
                        </View>
                        <View style={[styles.subTitleContainer, { marginTop: 10 }]}>
                            <Text style={[styles.titleSubText, { color: Colors.MEDIUM_BLACK }]}>{coupon?.description}</Text>
                        </View>
                        <View style={[styles.subTitleContainer, { paddingBottom: 10, marginTop: 10 }]}>
                            <Text style={styles.discountText}>{`DISCOUNT: ${coupon?.discount || "-"}%`}</Text>
                            <Text style={styles.timeLeftText}>{`Expires: ${moment(coupon?.dateOfExpiration).format("MM/DD/YYYY") || "-"}`}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.chartContainer} >
                    <View style={styles.graphHeader}>
                        <Text>Times Redeemed</Text>
                        <TouchableOpacity
                            style={styles.dropDownContainer}
                            onPress={() => setOpenFilterModal(true)}
                        >
                            <Text >{filterType}</Text>
                            <Image source={ImageIcons.dropDownIcon} style={styles.dropdownIcon} />
                        </TouchableOpacity>
                    </View>
                    <BarChart
                        style={styles.graphStyle}
                        data={graphData}
                        width={wp('90%')}
                        height={hp('35%')}
                        yLabelsOffset={40}
                        // withCustomBarColorFromData={true}
                        chartConfig={{
                            // barRadius:10,
                            backgroundColor: Colors.WHITE,
                            backgroundGradientFrom: Colors.WHITE,
                            backgroundGradientTo: Colors.WHITE,
                            fillShadowGradient: Colors.GREEN,
                            fillShadowGradientOpacity: 1,
                            decimalPlaces: 0, // optional, defaults to 2dp
                            color: (opacity = 1) => `#D5D5D5`,
                            barPercentage: filterType === "Hourly" ? 0.2 : 0.8,
                            labelColor: (opacity = 1) => `#D5D5D5`,
                            style: {
                                borderRadius: 16,
                                paddingRight:15
                            },
                            propsForLabels: {
                                strokeWidth: "1",
                                stroke: Colors.DARK_GREY,
                                // wordSpacing: 10,
                                fontSize: 8.5,
                                rotation: 90,
                                
                            },
                        }}
                        bezier
                    />
                </View>
                <View style={styles.totalRedeem}>
                    <Text style={styles.totalRedeemText}>Total Times Redeemed</Text>
                    <Text style={[styles.totalRedeemText, { width: '30%', textAlign: 'right' }]}>{props.redeemedCouponTrackingData?.totalTimesRedeemed||"0"}</Text>
                </View>
            </ScrollView>
            <InsightFilterModal
                isVisible={openFilterModal}
                childComponent={
                    <View style={styles.filterModal}>
                        <Text
                            style={[styles.filterItemText, { color: filterType === "Hourly" ? Colors.GREEN : Colors.BLACK }]}
                            onPress={() => { setFilterType("Hourly"); prepareGraphData("Hourly") }}
                        >Hourly</Text>
                        <Text
                            style={[styles.filterItemText, { color: filterType === "Daily" ? Colors.GREEN : Colors.BLACK }]}
                            onPress={() => { setFilterType("Daily"); prepareGraphData("Daily") }}
                        >Daily</Text>
                    </View>
                }
            />
            <Loader isVisible={props?.redeemedCouponTrackingLoader} />
        </View>
    )
}

export default SingleCouponInsight;
