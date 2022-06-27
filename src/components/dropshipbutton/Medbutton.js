import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import tw from 'twrnc';

const Medbutton = ({text, onPress}) => {

    return (
      <View
        style={tw.style('w-36 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500')}
      >
      <TouchableOpacity
          onPress={onPress}>
          <Text style={tw.style('text-lg text-white')}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
}

export default Medbutton
