
import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../common';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.BLACK,
        alignItems: 'center'
    },
    topBlueView: {
        width: '100%',
        height: 40,
        backgroundColor: Colors.BLUE,
        zIndex: -1
    },
    list: {
        marginTop: -40,
    },
    emptyList: {
        flex: 1,
        justifyContent: 'center',
        height: hp('80%'),
        alignItems: 'center'
    },
    emptyListText: {
        fontSize: 16,
        color: Colors.LIGHT_GREY,
        fontFamily: Fonts.QuestrialRegular
    },
    emptyIcon: {
        width: wp('80%'),
        height: hp('22%'),
        resizeMode: 'contain',
    },
    listItem: {
        padding: 10,
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
        justifyContent: 'space-between'
    },
    leftContent: {
    },
    rightContent: {
        // flex: 1,
        justifyContent: 'space-between',
        paddingLeft: '2%',
        alignItems: 'flex-end',
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
    customHeader: {
        width: '100%',
        height: 110,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        backgroundColor: Colors.BLUE,
        paddingTop: 40
    },
    leftButton: {
        height: wp('6%'),
        width: 50,
        // marginLeft: 15,
        paddingHorizontal: 8,
        justifyContent: 'center',
        // alignSelf:'center'
    },
    leftIcon: {
        width: wp('5%'),
        height: wp('5%'),
        // marginLeft: 15,
        tintColor: Colors.WHITE
    },
    headerTitle: {
        color: Colors.WHITE,
        fontFamily: Fonts.RalewayExtraBold,
        fontSize: 16,
        alignSelf: 'center'
    },
    headerItem: {
        width: '25%',
        height: '100%',
        justifyContent: 'center',
    },
    editIcon: {
        width: wp('6%'),
        height: hp('3%'),
        resizeMode: 'contain'
    },
    flagText: {
        fontSize: 9,
        backgroundColor: Colors.GREEN,
        color: Colors.WHITE,
        padding: 2,
        borderRadius: 2,
        textAlign: 'center',
    }
})

export default styles;