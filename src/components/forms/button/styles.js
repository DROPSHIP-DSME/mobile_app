import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../common'

const styles = StyleSheet.create({
    root: {
        paddingVertical: Platform.OS === "ios" ? 15 : 10,// 15 ,// '6.5%',
        backgroundColor: Colors.BLUE,
        borderRadius: 30,
        marginHorizontal: 20,
    },
    outline: {
        paddingVertical: Platform.OS === "ios" ? 15 : 10,
        // backgroundColor: Colors.BLUE,
        borderRadius: 30,
        marginHorizontal: 20,
        borderColor: Colors.BLUE,
        borderWidth: 1
    },
    buttonText: {
        color: Colors.WHITE,
        fontSize: 18,
        textAlign: 'center',
        fontFamily: Fonts.QuestrialRegular,
        paddingHorizontal: 5
    },
    outlineButtonText: {
        color: Colors.BLUE,
        fontSize: 18,
        textAlign: 'center',
        fontFamily: Fonts.RalewaySemiBold,
        paddingHorizontal: 5
    },
    linkButton: {
        // flex: 1
        // justifyContent: 'center',
        paddingHorizontal: 15,
        marginTop: 15
    },
    floating: {
        position: 'absolute',
        bottom: 20,
        paddingVertical: 18,
        backgroundColor: Colors.BLUE,
        borderRadius: 30,
        marginHorizontal: '20%',
        elevation: 3,
        alignSelf: 'center'
    },
    inputRoot: {
        paddingHorizontal: 15,
        marginTop: 15
    },
    inputContainer: {
        width: '100%',
        height: 50,   //hp('7%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.LIGHT_BLACK,
        borderRadius: 10,
        color: Colors.WHITE,
        paddingHorizontal: 10
    },
    input: {
        flex: 1,
        color: Colors.WHITE,
        paddingLeft: 10,
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
    title: {
        color: Colors.WHITE,
        paddingVertical: 5,
        fontSize: 16,
        fontFamily: Fonts.RalewayExtraBold
    }

})

export default styles;