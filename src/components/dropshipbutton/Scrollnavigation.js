import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const Scrollnavigation = ({item, index }) => {

  return(
    <View style={tw.style('inline-flex items-center my-2 px-1 pt-1 border-zinc-400 border-b-2 {text-color:`${item.color}}')}>
       { item.color=='#B80000'?
          <Text style={tw.style('text-red-700 px-2 border-b-2 border-zinc-600 font-base')}>{item.name}</Text>
          :
          <Text style={tw.style('text-zinc-400 px-2 font-base')}>{item.name}</Text>
       }
    </View>
  );
}

export default Scrollnavigation
