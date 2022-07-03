import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import tw from 'twrnc';
import { PencilIcon } from "react-native-heroicons/solid";

const Editbutton = () => {
  return (

    <View style={tw.style('bg-zinc-200 rounded-md p-1 ml-3')}>
        <TouchableOpacity onPress={() => openpopup()}>
          <View style={tw.style('flex flex-row w-auto h-6 px-3')}>
            <View style={tw.style('my-2')}>
              <PencilIcon color="black" fill="#000000" size={20} />
            </View>
          </View>
        </TouchableOpacity>
    </View>

  );
}

export default Editbutton
