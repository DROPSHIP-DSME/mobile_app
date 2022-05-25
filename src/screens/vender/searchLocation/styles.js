import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../../common';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    markerView: {
        width: 25,
        height: 25
    },
    textInput: {
        height: 40,
        color: '#5d5d5d',
        fontSize: 16,
        width: '60%',
        borderColor: Colors.GREY,
        borderWidth: 0.5,
    },
    textContainer: {
        width: '100%',
        height: 40,
        top: Platform.OS === "ios" ? 50 : 30,
    },
    inputContainer: {
        width: '90%',
        alignSelf: 'center',
    },
    backIcon: {
        width: 30,
        height: 30,
        justifyContent: 'center'
    },
    leftIconContainer: {
        width: '15%',
        justifyContent: 'center'
    },
    rightIconContainer: {
        width: '10%',
        justifyContent: 'center',
        marginLeft: -25,
    },
    searchIcon: {
        width: wp('5%'),
        height: 15,
        resizeMode: 'contain',
        backgroundColor: Colors.WHITE,
        marginBottom: 3
    }
});

export default styles;