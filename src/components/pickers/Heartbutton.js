import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import tw from 'twrnc';
import { HeartIcon } from "react-native-heroicons/solid";

const Deletebutton = ({ onPress }) => {
  return (

    <View style={tw.style('bg-zinc-200 rounded-md p-1 ml-2 w-11 h-auto')}>
        <TouchableOpacity onPress={onPress}>
            <View style={tw.style('my-2 items-center h-auto')}>
              <HeartIcon color="black" fill="#000000" size={20} />
            </View>
        </TouchableOpacity>
    </View>

  );
}

export default Deletebutton
