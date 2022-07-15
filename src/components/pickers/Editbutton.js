import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import tw from 'twrnc';
import { PencilIcon } from "react-native-heroicons/solid";

const Editbutton = ({navigation,page}) => {
  return (
    <View style={tw.style('bg-zinc-200 rounded-md p-1 ml-2 w-11')}>
        <TouchableOpacity onPress={() => navigation.navigate(page)}>
            <View style={tw.style('my-2 items-center')}>
              <PencilIcon color="black" fill="#000000" size={20} />
            </View>
        </TouchableOpacity>
    </View>

  );
}

export default Editbutton
