import React from 'react';
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors, Fonts } from '../../common'

const styles = StyleSheet.create({
    root: {
        // flex: 1
        // justifyContent: 'center',
        paddingHorizontal: 15,
        marginTop: 15
    },
    inputContainer: {
        width: '100%',
        height: 50,   //hp('7%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        color: Colors.WHITE,
        paddingHorizontal:10
    },
    dropdownInside:{
        flex:1,
        color: Colors.WHITE,
        paddingLeft: 10,
        fontSize:16,
        // zIndex:1
    },
    input: {
        flex:1,
        color: Colors.WHITE,
        paddingLeft: 10,
        fontSize:16
    },
    iconContainer: {
        width: 18,
        height: 18,
    },
    icon: {
        width: 18,
        height: 18,
        resizeMode: 'contain'
    },
    leftIcon:{
        fontSize:18,
    },
    title: {
        color: Colors.WHITE,
        paddingVertical: 5,
        fontSize: 16,
        fontFamily: Fonts.RalewayExtraBold
    }
})

export default styles;
