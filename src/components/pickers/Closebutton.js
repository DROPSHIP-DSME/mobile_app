import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import tw from 'twrnc';
import { XIcon } from "react-native-heroicons/solid";

const Closebutton = ({onPress}) => {
  return (

    <View style={tw.style('bg-gray-200 rounded-md p-1 ml-3')}>
        <TouchableOpacity onPress={onPress}>
          <View style={tw.style('flex flex-row w-auto h-auto px-1')}>
            <View style={tw.style('my-1')}>
              <XIcon color="Black" fill="#000" size={20} />
            </View>
          </View>
        </TouchableOpacity>
    </View>

  );
}

export default Closebutton
