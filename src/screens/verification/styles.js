
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../common';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.WHITE
    },
    phoneTitle: {
        color: Colors.LIGHT_BLACK,
        paddingVertical: 5,
        fontSize: 16,
        fontFamily: Fonts.RalewayExtraBold
    },
    phoneContainer: {
        width: '100%',
        // height: 50, 
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        color: Colors.LIGHT_BLACK,
        borderColor: Colors.LIGHT_BLACK,
        borderWidth: 1,
    },
    phoneTextContainer: {
        height: 50,
        backgroundColor: Colors.WHITE,
        color: Colors.LIGHT_BLACK,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: Colors.LIGHT_BLACK,
    },
    phoneInput: {
        height: 50,
        backgroundColor: Colors.WHITE,
        color: Colors.LIGHT_BLACK,
    },
    subTitle: {
        paddingHorizontal: 12,
        marginTop: '5%',
        marginBottom:-10
    },
    headerContainer: {
        // paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: Colors.LIGHTER_GREY,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10
    },
    headerItemImg: {
        width: wp('15%'),
        height: hp('12%'),
        resizeMode: 'contain'
    },
    headerItemText: {
        textAlign: 'center',
        fontSize: 12,
        color: Colors.BLUE
    },
    listItem: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        borderTopWidth: 1,
        borderTopColor: Colors.LIGHT_GREY,
        backgroundColor: Colors.WHITE
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
    nextArrowImg: {
        width: 15,
        height: 15,
        resizeMode: 'contain'
    },
    billNameText: {
        fontSize: 16,
        color: Colors.BLACK
    },
    cameraContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    buttonContainer: {
        width: '100%',
        // flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        // marginTop: '5%'
    },
    overlay: {
        flex: 1,
        width: width,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '15%'
    }
})

export default styles;