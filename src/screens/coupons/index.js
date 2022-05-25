import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Text, View, FlatList,   TouchableOpacity, Image, ScrollView } from 'react-native';
import { Fonts, Colors, ImageIcons } from '../../common';
import { FloatingButton, RoundedButton } from '../../components/forms/button';
import Loader from '../../components/modals/Loader';
import styles from './styles';

const Coupons = (props) => {

    //Local stat es
    const [isRefresh, setIsRefresh] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getCoupons();
    }, [])

    // Get coupon list
    const getCoupons = () => {
        props.getCouponList()
    }

    const _renderItem = ({ item, index }) => {
        const bgColor = item?.status === "Published" ? Colors.COUPON_ACTIVE : item?.status === "Draft" ? Colors.COUPON_DRAFT : Colors.COUPON_DEACTIVE;
        const textColor = item?.status === "Published" ? Colors.WHITE : item?.status === "Draft" ? Colors.BLACK : Colors.WHITE;
        const expireTextColor = item?.status === "Published" ? Colors.WHITE : item?.status === "Draft" ? Colors.GREY : Colors.WHITE;
        const iconTintColor = item?.status === "Draft" ? Colors.BLACK : Colors.WHITE;
        const isEditDisable = item?.status === "Deactivated"||item?.status === "Published" ? true : false
        return (
            <View
                key={index}
                // disabled={item?.status === "Deactivated" ? true : false}
                style={[styles.couponListItem, {
                    backgroundColor: bgColor
                }]}>
                <View style={styles.leftSection}>
                    <Text style={[styles.statusText, { color: textColor }]}>{`Status: ${item?.status}`}</Text>
                    <Text style={[styles.couponTitleText, { color: textColor }]}>{item?.title}</Text>
                    <Text style={[styles.discountText, { color: textColor }]}>{`${item?.description}`}</Text>
                </View>
                <View style={styles.rightSection}>
                    <View style={styles.optionsIcons}>
                        <TouchableOpacity
                            style={styles.rightViewButton}
                            onPress={() => props.navigation.navigate("CouponDetail", { couponData: item })}
                        >
                            <Image source={ImageIcons.viewIcon} style={[styles.viewIcon, { tintColor: iconTintColor }]} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.rightEditButton, { opacity: isEditDisable ? 0.5 : 1 }]}
                            disabled={isEditDisable}
                            onPress={() => props.navigation.navigate("AddCoupon", { couponData: item })}
                        >
                            <Image source={ImageIcons.editIcon} style={[styles.editIcon, { tintColor: iconTintColor }]} />
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.couponTitleText, { color: textColor }]}>{`${item?.discount} % Off`}</Text>
                    <Text style={[styles.discountText, { color: expireTextColor, opacity: 0.5 }]}>{`Expires: ${moment(item.dateOfExpiration).format("MM/DD/YYYY")}`}</Text>
                </View>
            </View>
        )
    }

    const _renderEmptyList = () => {
        return (
            <View style={styles.emptyList}>
                <Image source={ImageIcons.noCouponIcon} style={styles.emptyIcon} />
                <Text style={styles.emptyListText}>You haven't added any coupons yet.</Text>
                <View style={{ marginTop: '5%', paddingHorizontal: '20%', width: '100%' }}>
                    <RoundedButton
                        text="Add a Coupon"
                        onPress={() => props.navigation.navigate("AddCoupon")}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.root}>
        
            <View style={styles.couponList}>
                <FlatList
                    data={props?.couponsList || []}
                    renderItem={_renderItem}
                    ListEmptyComponent={_renderEmptyList}
                    keyExtractor={(item, index) => index.toString()}
                    refreshing={isRefresh}
                    extraData={isLoading}
                    ListFooterComponent={() => <View style={{ height: 50 }} />}
                    onRefresh={() => {
                        setIsLoading(true);
                        getCoupons();
                        setTimeout(() => {
                            setIsLoading(false)
                        }, 500);
                    }}
                />
            </View>
            {props?.couponsList && props?.couponsList?.length > 0 &&
                <FloatingButton
                    text="Add a Coupon"
                    onPress={() => {
                        props.navigation.navigate("AddCoupon")
                    }}
                />
            }
            <Loader isVisible={props?.couponsListLoader} />
        </View>
    )
}

export default Coupons;