import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
import { ChevrondoubleupIcon } from "react-native-heroicons/solid";

const Sortfilter = ({text}) => {
  return (

    <View style={tw.style('flex flex-row bg-zinc-400 rounded-md mx-4 p-3 px-3')}>
        <TouchableOpacity style={tw.style('w-auto')}>
            <ChevrondoubleupIcon color="red" fill="#b80000" size={24} />
            <Text style={tw.style('text-base text-[#4D4D4D] font-semibold self-center')}>{text}</Text>
        </TouchableOpacity>
    </View>
  );
};
