
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
        backgroundColor:Colors.WHITE
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
        justifyContent: 'space-between',
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
        width: '100%',
        height: hp('9%'),
        backgroundColor: Colors.WHITE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerViewContainer: {
        position: 'relative',
        marginTop: -35,
        marginHorizontal: 10,
        shadowColor: '#000',
        borderRadius: 5,
        borderBottomWidth: 2,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderColor: '#dddd',
        backgroundColor: Colors.GREEN,
        zIndex: 1
    },
    cashText: {
        color: Colors.GREEN,
        fontFamily: Fonts.HomepageBaukastenBold,
        fontSize: 24,
        textAlign: 'center',
    },
    earnedDateText: {
        fontSize: 12,
        fontFamily: Fonts.QuestrialRegular,
        marginTop: 5,
        color: Colors.DARK_GREY,
        textAlign: 'center'
    },
    bottomSection: {
        width: '100%',
        height: hp('8%'),
        backgroundColor: Colors.BLUE,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5
    },
    subSection: {
        width: '50%',
        justifyContent: 'center',
        borderRightColor: '#192D73',
        borderRightWidth: 1
    },
    numberText:{ 
        textAlign: 'center',
        color:Colors.WHITE,
        fontSize:16,
        fontFamily:Fonts.HomepageBaukastenBold,
        fontWeight:'bold'
    },
    subText:{
        textAlign: 'center',
        color:Colors.WHITE,
        fontSize:12,
        fontFamily:Fonts.QuestrialRegular,
        marginTop:5
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
    }
})

export default styles;