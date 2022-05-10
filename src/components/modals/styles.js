import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../common';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    loader: {
        width: 120,
        height: 120,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    container: {
        width: wp('70%'),
        backgroundColor: Colors.WHITE,
        borderRadius: 8
    },
    modalHeader: {
        height: hp('10%'),
        backgroundColor: Colors.BLUE,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    },
    headerText: {
        fontSize: 16,
        color: Colors.WHITE,
        fontFamily: Fonts.RalewayExtraBold
    },
    rowSection: {
        width: '100%',
        height: hp('10%'),
        backgroundColor: Colors.WHITE,
        borderBottomColor: Colors.LIGHT_GREY,
        borderBottomWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottons: {
        paddingBottom: 20
    },
    rowLabelText: {
        fontSize: 16,
        color: Colors.BLACK,
        fontFamily: Fonts.RalewaySemiBold
    },
    rowValueText: {
        fontSize: 24,
        color: Colors.BLACK,
        fontFamily: Fonts.QuestrialRegular,
        marginTop: 5
    },
    rowValueTextBlured: {
        fontSize: 24,
        fontFamily: Fonts.QuestrialRegular,
        marginTop: 5,
        color: "rgba(255,255,255,0.2)",
        shadowColor: "rgba(0,0,0,0.2)",
        textShadowColor: "rgba(0,0,0,0.8)",
        textShadowOffset: {
            width: 10,
            height: 2,
        },
        textShadowRadius: 10,
    }
})

export default styles;