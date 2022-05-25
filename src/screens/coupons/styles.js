
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../common';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    topBlueView: {
        width: '100%',
        height: 40,
        backgroundColor: Colors.BLUE,
        zIndex: -1
    },
    titleText: {
        fontSize: 16,
        fontFamily: Fonts.RalewayExtraBold
    },
    titleSubText: {
        fontSize: 12,
        fontFamily: Fonts.QuestrialRegular,
        marginTop: 5,
        lineHeight: 15
    },
    img: {
        width: wp('18%'),
        height: hp('12%'),
        resizeMode: 'contain'
    },
    couponList: {
        flex: 1,
        paddingHorizontal: 15,
    },
    couponListItem: {
        flexDirection: 'row',
        // alignItems: 'center',
        width: '100%',
        marginTop: 20,
        backgroundColor: Colors.COUPON_DRAFT,
        borderRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: Platform.OS === "ios" ? Colors.LIGHT_GREY : Colors.GREY,
        shadowOpacity: 0.3,
        elevation: 3,
        zIndex: 999,
        justifyContent: 'space-between',
        paddingHorizontal: '2%'
    },
    imgCoupon: {
        width: wp('28%'),
        height: hp('10%'),
        resizeMode: 'cover',
        // resizeMode: 'contain',
    },
    emptyListText: {
        fontSize: 16,
        color: Colors.LIGHT_GREY,
        fontFamily: Fonts.QuestrialRegular
    },
    emptyList: {
        flex: 1,
        justifyContent: 'center',
        height: hp('60%'),
        alignItems: 'center'
    },
    emptyIcon: {
        width: wp('80%'),
        height: hp('22%'),
        resizeMode: 'contain',
    },
    iconContainer: {
        padding: '5%',
        backgroundColor: '#D4ED97',
        width: '100%',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10%',
        paddingBottom: '15%',
        zIndex: 0
    },
    leftSection: {
        width: '62%',
        paddingHorizontal: '2%',
        paddingVertical: '2%'
    },
    rightSection: {
        width: '38%',
        paddingVertical: '2%',
        paddingHorizontal: '2%',
        alignItems: 'flex-end',
        justifyContent:'space-between'
    },
    couponTitle: {
        fontSize: 16,
        color: Colors.BLACK,
        // fontWeight:'bold',
        textAlign: 'center'
    },
    descText: {
        color: Colors.BLACK,
        textAlign: 'center',
        opacity: 0.7,
        lineHeight: 18,
        marginTop: 8
    },
    expireText: {
        color: Colors.DARK_GREY,
        textAlign: 'center',
        marginTop: 5
    },                         // Add coupon styles
    imageContainer: {
        marginHorizontal: '5%',
        width: wp('90%'),
        height: hp('22%'),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: Colors.GREY,
    },
    imageSelectText: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 16,
        color: Colors.LIGHT_GREY,
        fontFamily: Fonts.QuestrialRegular
    },
    imageSelectButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    plusIcon: {
        width: wp('8%'),
        height: hp('8'),
        resizeMode: 'contain',
        tintColor: Colors.GREY
    },
    title: {
        color: Colors.BLACK,
        paddingVertical: 5,
        fontSize: 16,
        paddingLeft: '5%',
        fontFamily: Fonts.RalewayExtraBold
    },
    couponImage: {
        marginHorizontal: '5%',
        width: wp('90%'),
        height: hp('22%'),
        borderRadius: 5,
    },
    statusText: {
        fontFamily: Fonts.RalewayLight,
        // color: Colors.WHITE,
        fontSize: 12,
        paddingVertical: 5
    },
    couponTitleText: {
        fontFamily: Fonts.HomepageBaukastenBold,
        // color: Colors.WHITE,
        fontSize: 24,
        // height: Platform.OS === "ios" ? hp('3.5%') : hp('5%'),
        textAlignVertical: 'center',
    },
    discountText: {
        color: Colors.LIGHT_BLACK,
        fontSize: 12,
        paddingVertical: 5
    },
    trnsDetailRow: {
        width: '100%',
        // height:hp('15%'),
        paddingVertical: 5,
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 20
    },
    valueText: {
        color: Colors.BLACK,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    heading: {
        paddingVertical: '2%',
        alignItems: 'center',
        marginTop: hp('5%'),
        // paddingBottom:hp('5%')
    },
    viewIcon: {
        width: wp('5%'),
        height: hp('3%'),
        resizeMode: 'contain',
        alignSelf: 'flex-start'
    },
    editIcon: {
        width: wp('4%'),
        height: hp('3%'),
        resizeMode: 'contain',
        alignSelf: 'flex-start'
    },
    optionsIcons: {
        flexDirection: 'row',
        // paddingBottom:5
        // alignItems:'center',
    },
    rightViewButton: {
        marginRight: wp('5%'),
    },
    rightEditButton: {
        // marginRight:'3%'
    },
})

export default styles;
