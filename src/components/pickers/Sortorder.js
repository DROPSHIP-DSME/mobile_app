import React, { useState } from 'react';
import {Text, View, Picker } from 'react-native';
import tw from 'twrnc';

const Sortorder = ({text}) => {

  const [showvisible, setshowvisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(true);
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <View style={tw.style('rounded-md w-40 bg-zinc-200 px-1 text-justify py-1')}>
        <Picker
            selectedValue={selectedValue}
            style={tw.style('w-full h-8', {color:'black'})}
            onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
        >

        <Picker.Item label="sort" value="1" />
        <Picker.Item label="success" value="2" />
        <Picker.Item label="Pending" value="3" />
        <Picker.Item label="Processing" value="3" />
        <Picker.Item label="Canceled" value="3" />
        <Picker.Item label="Delivered" value="3" />
      </Picker>
    </View>

  );

}

export default Sortorder
