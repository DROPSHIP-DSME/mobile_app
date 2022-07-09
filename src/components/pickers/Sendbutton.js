import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import tw from 'twrnc';
import { PencilIcon } from "react-native-heroicons/solid";

const Editbutton = ({onPress}) => {
  return (

    <View style={tw.style('bg-zinc-200 rounded-md p-1 ml-3')}>
        <TouchableOpacity onPress={onPress}>
          <View style={tw.style('flex flex-row w-auto h-auto px-1')}>
            <View style={tw.style('my-1')}>
              <PencilIcon color="black" fill="#000000" size={20} />
            </View>
          </View>
        </TouchableOpacity>
    </View>

  );
}

export default Editbutton
