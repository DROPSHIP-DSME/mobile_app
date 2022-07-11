import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import tw from 'twrnc';
import { AdjustmentsIcon } from "react-native-heroicons/solid";

const Sortfilter = ({text, onPress}) => {
  return (

    <View style={tw.style('bg-zinc-200 rounded-md ml-4 py-2 h-auto justify-center')}>
      <View style={tw.style('flex flex-row w-auto px-3')}>
       <View style={tw.style('mt-1')}>
          <AdjustmentsIcon color="black" fill="#000000" size={20} />
       </View>
        <TouchableOpacity onPress={onPress}>
            <Text style={tw.style('text-base text-gray-600 ml-1')}>{text}</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

export default Sortfilter
