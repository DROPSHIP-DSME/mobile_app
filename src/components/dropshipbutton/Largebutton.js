import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import tw from 'twrnc';

const Largebutton = ({text, onPress}) => {

    return (

          <View
            type="button"
            style={tw.style('inline-flex items-center mx-4 px-4 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500')}
          >
          <TouchableOpacity
              onPress={onPress}>
              <Text style={tw.style('text-lg text-white')}>{text}</Text>
            </TouchableOpacity>
          </View>

    );
}

export default Largebutton
