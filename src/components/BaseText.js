import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import tw from 'twrnc';

export default function BaseText(props) {
  

    return (
        <Text style={tw.style('font-sans text-2xl text-gray-700')}>
          {props.children}
        </Text>
    );
}
