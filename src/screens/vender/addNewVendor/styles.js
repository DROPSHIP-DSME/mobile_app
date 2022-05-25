
import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../common';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:Colors.WHITE
    },
    phoneTitle:{
        color:Colors.LIGHT_BLACK,
        paddingVertical:5,
        fontSize:16,
        fontFamily:Fonts.RalewayExtraBold
    },
    phoneContainer:{
        width: '100%',
        // height: 50, 
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        color: Colors.LIGHT_BLACK,
        borderColor:Colors.LIGHT_BLACK,
        borderWidth:1,
    },
    phoneTextContainer:{
        height: 50,
        backgroundColor: Colors.WHITE,
        color: Colors.LIGHT_BLACK,
        borderTopRightRadius: 10,
        borderBottomRightRadius:10,
        borderColor:Colors.LIGHT_BLACK,
    },
    phoneInput:{
        height: 50,
        backgroundColor: Colors.WHITE,
        color: Colors.LIGHT_BLACK,
    },
})

export default styles;