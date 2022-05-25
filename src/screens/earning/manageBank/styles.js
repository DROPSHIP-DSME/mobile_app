
import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Colors, Fonts } from '../../../common';
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
    list: {
        paddingTop: 25,
    },
    listItem: {
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 10,
        shadowColor: '#000',
        borderRadius: 5,
        borderBottomWidth: 2,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderColor: '#dddd',
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'center'
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
    phoneNumberText: {
        fontSize: 12,
        fontFamily: Fonts.QuestrialRegular,
        marginTop: 5,
        color: Colors.DARK_GREY
    },
    balanceText: {
        fontSize: 16,
        fontFamily: Fonts.QuestrialRegular
    },
    headerView: {
        paddingTop: 5,
        paddingBottom: 35,
        position: 'relative',
        backgroundColor: Colors.WHITE,
        marginTop: -35,
        marginHorizontal: 10,
        shadowColor: '#000',
        borderRadius: 5,
        borderBottomWidth: 2,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderColor: '#dddd',
        backgroundColor: Colors.WHITE,
        zIndex: 1
    },
    cashText: {
        color: Colors.GREEN,
        fontFamily: Fonts.RalewayExtraBold,
        fontSize: 24,
        textAlign: 'center'
    },
    headerSubText: {
        fontSize: 16,
        fontFamily: Fonts.QuestrialRegular,
        lineHeight: 20,
        marginTop: 5,
        color: Colors.LIGHT_BLACK,
        textAlign: 'center'
    },
    img: {
        width: wp('18%'),
        height: hp('8%'),
        resizeMode: 'contain'
    },
    bankList: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        paddingLeft: '1%'
    },
    bankListItem: {
        padding: 3,
        alignItems: 'center',
        borderColor: Colors.GREY,
        backgroundColor: Colors.WHITE,
        borderRadius: 5,
        marginLeft: Platform.OS === "ios" ? 7 : 6,
        margin: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: Colors.LIGHT_GREY,
        shadowOpacity: 1,
        elevation: 2,
        zIndex: 999,
    },
    imgBank: {
        width: wp('15%'),
        height: hp('6%'),
        resizeMode: 'contain',
    }

})

export default styles;