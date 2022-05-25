import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../common';
const deviceHeight = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {},
    map: {
        width: '100%',
        height: 320
    },
    markerView: {
        width: 25,
        height: 25
    },
    labelView: {
        paddingHorizontal: 10,
        marginTop: 10,
        justifyContent: 'center'
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 12,
    },
    headingText: {
        fontSize: 24,
        color: Colors.BLACK,
        fontFamily: Fonts.RalewayExtraBold
    },
    bottomContainer: {
        paddingBottom: 30,
        paddingHorizontal: 10,
        backgroundColor: Colors.WHITE
    }
});

export default styles;