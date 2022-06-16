import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useTailwind } from 'tailwind-rn';

const Smallbutton = ({text, onPress}) => {
const tailwind = useTailwind();

    return (
      <View style={tailwind('items-center')}>
        <TouchableOpacity style={tailwind('items-center w-48 py-2 px-2 border border-transparent rounded-full text-white bg-red-800')}
            onPress={onPress}>
            <Text style={tailwind('text-lg text-white')}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
}

export default Smallbutton
