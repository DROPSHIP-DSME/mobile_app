import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import { useTailwind } from 'tailwind-rn';

export default function BaseText(props) {
    const tailwind = useTailwind();

    return (
        <Text style={tailwind('font-sans text-2xl text-gray-700')}>
          {props.children}
        </Text>
    );
}
