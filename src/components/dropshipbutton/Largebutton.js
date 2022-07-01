import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import tw from 'twrnc';
import { useTailwind } from 'tailwind-rn';

const Largebutton = ({text, onPress}) => { 
    const tailwind = useTailwind();
    return (
      <View style={tw.style('items-center')}>
        <TouchableOpacity style={tw.style('items-center w-11/12 py-4 border border-transparent font-medium rounded-full text-white bg-red-800')}
            onPress={onPress}>
            <Text style={tw.style('text-lg text-white')}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
}

export default Largebutton
