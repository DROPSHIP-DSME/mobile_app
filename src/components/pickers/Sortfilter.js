import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import tw from 'twrnc';
import { AdjustmentsIcon } from "react-native-heroicons/solid";

const Sortfilter = ({text}) => {
  return (

    <View style={tw.style('bg-zinc-200 rounded-md ml-4')}>
      <View style={tw.style('flex flex-row w-auto h-8 px-3')}>
       <View style={tw.style('mt-2')}>
          <AdjustmentsIcon color="black" fill="#000000" size={20} />
       </View>
        <TouchableOpacity>
            <Text style={tw.style('text-base text-gray-600 pt-1.5 ml-1')}>Filters</Text>
        </TouchableOpacity>
        </View>
    </View>

  );
}

export default Sortfilter
