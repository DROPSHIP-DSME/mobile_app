import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../common';
const deviceHeight=Dimensions.get('window');

const styles = StyleSheet.create({
    root: {
        flex:1,
        backgroundColor:Colors.WHITE
    },
    container: {
        paddingBottom: 30,
        paddingHorizontal:15,
        backgroundColor:Colors.WHITE
    },
    map: {
        width:'100%',
        height:320
    },
    markerView: {
        width: 25,
        height: 25
    },
    labelView:{
        paddingHorizontal:10,
        marginTop:10,
        justifyContent:'center'
    },
    title:{
       fontSize:16,
       fontFamily:Fonts.RalewayExtraBold
    },
    subtitle:{
        fontSize:16,
        fontFamily:Fonts.QuestrialRegular
    },
    headingText:{
        fontSize:24,
        color:Colors.BLACK,
        fontFamily:Fonts.RalewayExtraBold
    },
    imgIcon:{
        width:25,
        height:25,
        resizeMode:'contain'
    }
});

export default styles;