import React, { useEffect, useState, createContext, useContext } from 'react';
import { Text, View, Image, Alert, Platform, Linking } from 'react-native';
import { RoundedButton } from '../../components/forms/button';
import styles from './styles';
import { Colors, Fonts, ImageIcons } from '../../common';
import Loader from '../../components/modals/Loader';

const password = 'f5d8784e5b5c482da7b8f5cf6a4ac36f';
//import * as RNIap from 'react-native-iap';



const itemSkus = Platform.select({
   ios: [
       'com.wallponads.single',
       'com.wallponads.single.onetime'       
   ],
   android: [
       'com.wallponads.single'
   ]
});

const SubscriptionDetail = (props) => {

    //Local states
    
    return (
        <View style={styles.root}>
           
        </View>
    )
}

export default SubscriptionDetail;