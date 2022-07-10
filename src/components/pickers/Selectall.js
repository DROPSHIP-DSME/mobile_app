import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import tw from 'twrnc';

const Selectall = ({text}) => {
  return (

    <View style={tw.style('bg-zinc-200 rounded-md px-3')}>
        <View style={tw.style('flex flex-row w-auto p-2')}>
            <View style={tw.style('h-4 w-4 bg-white rounded-sm mt-1 mr-2')}></View>
            <Text style={tw.style('text-base text-gray-800 ml-1')}>{text}</Text>
         </View>
    </View>

  );
}

export default Selectall
