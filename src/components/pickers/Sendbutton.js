import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import tw from 'twrnc';
import { PaperAirplaneIcon } from "react-native-heroicons/solid";

const Sendbutton = ({onPress}) => {
  return (

    <View style={tw.style('bg-red-700 rounded-md p-1 ml-3')}>
        <TouchableOpacity onPress={onPress}>
          <View style={tw.style('flex flex-row w-auto px-1')}>
            <View style={tw.style('my-1')}>
              <PaperAirplaneIcon color="White" fill="#fff" size={28} />
            </View>
          </View>
        </TouchableOpacity>
    </View>

  );
}

export default Sendbutton
