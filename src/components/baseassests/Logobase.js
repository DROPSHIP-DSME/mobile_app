import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import ImageIcons from '../../common/ImageIcons'
import { useTailwind } from 'tailwind-rn';

const Logobase = () => {

    const tailwind = useTailwind();

    return (
        <View style={tailwind('items-center mt-[16%]')}>
            <Image source={ImageIcons.logored_1} style={tailwind('w-[90] h-[73]')}  />
        </View>
    );
}

export default Logobase
