import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import tw from 'twrnc';
import { SearchIcon } from "react-native-heroicons/solid";

const Largebutton = ({text, onPress}) => {

    return (


          <TouchableOpacity onPress={onPress}>
           <View style={tw.style('flex flex-row my-3 h-12 bg-zinc-200 mx-3 rounded-lg items-center')}>
               <View style={tw.style('mt-1 ml-4')}>
                 <SearchIcon color="red" fill="#B80000" size={20} />
              </View>
               <Text style={tw.style('ml-2')}> {text}</Text>
           </View>
         </TouchableOpacity>

    );
}

export default Largebutton