
import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../common';
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
        paddingTop:10,
    },
    listItem: {
        padding: 5,
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
        paddingLeft:10,
        alignItems:'center'
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
    img:{
        width:wp('18%'),
        height:hp('8%'),
        resizeMode:'contain',
    }, //add cashout
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