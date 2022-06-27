import React, { useState } from 'react';
import {Text, View, Picker } from 'react-native';
import tw from 'twrnc';

const Salesyear = ({text}) => {

  const [showvisible, setshowvisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(true);
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <View style={tw.style('mt-2 rounded-md w-40 bg-zinc-200 px-1 text-justify')}>
        <Picker
            selectedValue={selectedValue}
            style={tw.style('w-full h-8', {color:'black'})}
            onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
        >

        <Picker.Item label="2021" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
      </Picker>
    </View>

  );

}

export default Salesyear
