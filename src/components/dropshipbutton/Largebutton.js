import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import tw from 'twrnc';

const Largebutton = ({text, onPress}) => {

    return (
<<<<<<< HEAD
      <View style={tailwind('items-center')}>
        <TouchableOpacity style={tailwind('items-center w-11/12 py-4 border border-transparent font-medium rounded-full text-white bg-red-800')}
            onPress={onPress}>
            <Text style={tailwind('text-lg text-white')}>{text}</Text>
        </TouchableOpacity>
      </View>
=======

          <View
            type="button"
            style={tw.style('inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500')}
          >
          <TouchableOpacity
              onPress={onPress}>
              <Text style={tw.style('text-lg text-white')}>{text}</Text>
            </TouchableOpacity>
          </View>

>>>>>>> UI-1.1.0
    );
}

export default Largebutton
