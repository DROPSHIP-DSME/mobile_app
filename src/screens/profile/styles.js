
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../common';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get("window");

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
    list: {
        paddingTop: 10,
    },
    listItem: {
        // padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        shadowColor: '#000',
        borderRadius: 5,
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: { width: 0, height: 2 },
        shadowColor: Colors.GREY,
        shadowOpacity: 0.3,
        elevation: 2,
        zIndex: 999,
    },
    titleText: {
        fontSize: 16,
        color: Colors.WHITE,
        paddingLeft: wp('3%'),
        fontFamily: Fonts.RalewayExtraBold
    },
    titleSubText: {
        fontSize: 12,
        color: Colors.BLACK,
        fontFamily: Fonts.HomepageBaukastenBold,
        lineHeight: 20,
    },
    subTitleContainer: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems:'center'
    },
    timeLeftText: {
        fontSize: 12,
        fontFamily: Fonts.QuestrialRegular,
        color: Colors.DARK_GREY,
    },
    discountText: {
        fontSize: 12,
        fontFamily: Fonts.HomepageBaukastenBold,
        color: Colors.BLACK,
    },
    balanceText: {
        fontSize: 16,
        fontFamily: Fonts.QuestrialRegular
    },
    titleContainer: {
        width: '100%',
        height: hp('5%'),
        backgroundColor: Colors.BLUE,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        justifyContent: 'center',
        paddingHorizontal: 5,
    },
    chartContainer: {
        height: hp('40%'),
        paddingHorizontal: 10,
        backgroundColor: Colors.WHITE,
        elevation: 4,
        margin: 10,
        borderRadius: 10
    },
    graphStyle: {
        flex: 1,
        paddingLeft: -10,
        alignSelf: 'center'
    },
    totalRedeem: {
        width: '95%',
        height: hp('8%'),
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: hp('10%'),
        shadowOffset: { width: 0, height: 2 },
        shadowColor: Colors.GREY,
        shadowOpacity: 0.3,
        elevation: 2,
        zIndex: 999,
    },
    totalRedeemText: {
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: Fonts.HomepageBaukastenBold
    },
    dropdownIcon: {
        width: 10,
        height: 10,
        resizeMode: 'contain',
        marginLeft: 5
    },
    graphHeader: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        flexDirection: 'row'
    },
    dropDownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterModal: {
        width: wp('50%'),
        height: hp('18%'),
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    filterItemText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 2,
        paddingHorizontal: 10,
        marginVertical: 5
    },
    emptyInsight: {
        height: hp('90%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyListText: {
        fontSize: 16,
        color: Colors.LIGHT_GREY,
        fontFamily: Fonts.QuestrialRegular
    },
})

export default styles;