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
        backgroundColor: Colors.WHITE
    },
    subContainer: {
        flex: 0.8,
        justifyContent: 'space-between'
    },
    heading: {
        paddingVertical: '2%',
        alignItems: 'center',
        marginTop: hp('5%'),
        // paddingBottom:hp('5%')
    },
    headingText: {
        textAlign: 'center',
        fontSize: 24,
        color: Colors.BLUE,
        fontFamily: Fonts.HomepageBaukastenBold,
        paddingHorizontal: '10%',
        marginTop: 20
    },
    subtitleText: {
        textAlign: 'center',
        color: Colors.BLACK,
        fontSize: 16,
        marginTop: 20,
        paddingHorizontal: 10
    },
    subscriptionItem: {
        width: '100%',
        height: 60,
        // paddingVertical:'5%',
        backgroundColor: Colors.LIGHTER_GREY,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '4%',
        marginTop: '5%',
        borderRadius: 8
    },
    activeSubscriptionItem: {
        width: '100%',
        height: 60,
        // paddingVertical:'5%',
        backgroundColor: Colors.LIGHTER_GREY,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '4%',
        marginTop: '5%',
        borderRadius: 10,
        borderColor: Colors.BLUE,
        borderWidth: 1
    },
    priceText: {
        color: Colors.GREEN,
        marginBottom:10,
        fontSize: 18,
        // fontWeight:'bold',
        fontFamily: Fonts.HomepageBaukastenBold,
    },
    validityText: {
        color: Colors.BLACK,
        fontSize: 12,
        // fontFamily: Fonts.SfproSemibold,
    },
    couponIcon: {
        width: wp('12%'),
        height: hp('8%'),
        resizeMode: 'contain'
    },
    planDetails: {
        width: '100%',
        paddingVertical:'4%',
        backgroundColor: Colors.BLUE,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '5%',
        borderRadius: 10
    },
    emptyPlan: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyListText: {
        fontSize: 16,
        color: Colors.LIGHT_GREY,
        fontFamily: Fonts.QuestrialRegular
    },
    cardInput: {
        paddingHorizontal: 10,
        width:'80%'
    },
    trnsDetailRow: {
        width: '100%',
        // height:hp('15%'),
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal:20
    },
    valueText:{
        color:Colors.BLACK,
        fontWeight:'bold',
        textAlign:'left',
    }
})

export default styles;