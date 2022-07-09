import React, { useState } from 'react';
import {Text, View, Picker } from 'react-native';
import tw from 'twrnc';

const Last30days = ({text}) => {

  const [showvisible, setshowvisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(true);
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <View style={tw.style('mt-2 rounded-md w-40 bg-zinc-200 px-2 text-justify')}>
        
    </View>

  );

}

export default Last30days
