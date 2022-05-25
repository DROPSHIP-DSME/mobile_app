import React, { useEffect, useState, useRef } from 'react';
import { Text, View, ScrollView, Image, Animated, Easing } from 'react-native';
import { RoundedButton, LinkButton } from '../../components/forms/button';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles';
import moment from 'moment';
import Loader from '../../components/modals/Loader';
import { Colors } from '../../common';

const CouponDetail = (props) => {

    //Local states
    const [couponDetail, setCouponDetail] = useState();
    const [imageLoading, setImageLoading] = useState(true);
    const imgBgRefAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (props?.route?.params && props?.route?.params?.couponData) {
            let { couponData } = props?.route?.params;
            setCouponDetail(couponData);
        }
        animateShimmer();
    }, [])

    // Preloading animation for coupon image
    const animateShimmer = () => {
        Animated.loop(
            Animated.timing(imgBgRefAnim, {
                toValue: 0.7,
                duration: 3000,
                delay: 1000,
                easing: Easing.linear,
                useNativeDriver: false
            })
        ).start()
    }

    const handleAddCouponSubmit = (couponStatus) => {
        const formData = new FormData();
        let fileName = couponDetail?.couponImage?.split('/').pop();
        let mimeType = couponDetail?.couponImage?.split('.').pop();
        let file = {
            'uri': couponDetail?.couponImage,
            'type': `image/${mimeType}`,
            'name': fileName
        }
        formData.append("title", couponDetail?.title)
        formData.append("description", couponDetail?.description)
        formData.append("discount", Number(couponDetail?.discount))
        formData.append("dateOfExpiration", moment(couponDetail?.dateOfExpiration).toDate().toISOString())
        // formData.append("couponImage", file)
        formData.append("status", couponStatus) // 'Draft', 'Published', 'Deactivated' 
        // formData.append("isEditMode",true) // 'Draft', 'Published', 'Deactivated' 
        props.createNewCoupon(formData, props.navigation, couponDetail?._id);
    }

    return (
        <View style={styles.root}>
            <ScrollView keyboardShouldPersistTaps="always">
                <View>
                    <View style={[styles.heading, { paddingBottom: '5%', marginTop: 20 }]}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: couponDetail?.couponImage }} style={[styles.couponImage, { height: imageLoading ? 1 : hp('22%') }]} onLoadEnd={() => setImageLoading(false)} />
                            {imageLoading && (
                                <Animated.View
                                    style={[styles.couponImage, {
                                        backgroundColor: imgBgRefAnim.interpolate({
                                            inputRange: [0, 0.5, 1],
                                            outputRange: [Colors.GREY, Colors.LIGHT_GREY, Colors.LIGHTER_GREY]
                                        })
                                    }]}
                                />
                            )}
                        </View>
                    </View>
                    <RowItem label="Title" value={couponDetail?.title} />
                    <RowItem label="Description" value={couponDetail?.description} />
                    <RowItem label="Discount" value={couponDetail?.discount} />
                    {/* <RowItem label="Brand" value={transaction.Brand} /> */}
                    <RowItem label="Expiration" value={moment(couponDetail?.dateOfExpiration).format("MM/DD/YYYY")} />
                    <RowItem label="Status" value={couponDetail?.status} />
                </View>
                <View style={{ marginTop: '20%', paddingHorizontal: '22%' }}>
                    <RoundedButton
                        text={couponDetail?.status === "Draft" ? "Publish" : "Un Publish"}
                        onPress={() => handleAddCouponSubmit(couponDetail?.status === "Published" ? "Deactivated" : "Published")}
                        disabled={couponDetail?.status === "Deactivated" ? true : false}
                        customStyle={{ opacity: couponDetail?.status === "Deactivated" ? 0.5 : 1 }}
                    />
                </View>
            </ScrollView>
            <Loader isVisible={props?.createCouponLoader} />
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

export default CouponDetail;