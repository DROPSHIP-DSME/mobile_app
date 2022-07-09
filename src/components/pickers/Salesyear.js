import React, { useState } from 'react';
import {Text, View, StyleSheet, Platform, Stylesheet, ImageBackground, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import { ChevronDownIcon } from "react-native-heroicons/solid";
import tw from 'twrnc';

const Salesyear = ({text}) => {

  return (
    <View>
      <View style={tw.style('flex flex-row mt-2 rounded-md w-40 bg-zinc-200 px-1 text-justify items-center jsutiy-between')}>
        
      </View>
    </View>

  );
}


const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 22,
    paddingHorizontal: 12,
    borderRadius: 8,
    color: '#000',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    color: '#000',
    paddingRight: 45, // to ensure the text is never behind the icon
  },
  container: {
    backgroundColor:'rgba(255, 255, 255, 1.0)',
  },
  inputAndroidContainer: {
    alignItems: 'center',
    color: 'black',
    justifyContent: 'space-between',
  }

});


export default Salesyear
