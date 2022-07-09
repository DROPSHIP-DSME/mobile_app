import React, { useState } from 'react';
import {Text, View, Picker } from 'react-native';
import tw from 'twrnc';

import { CustomPicker } from 'react-native-custom-picker'


const Sortorder = ({text, options}) => {

  const [showvisible, setshowvisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(true);
  const [selectedValue, setSelectedValue] = useState("");


  return (
    <View style={tw.style('rounded-md w-40 bg-zinc-200 px-1 text-justify py-2')}>
        <CustomPicker
          options={options}
          onValueChange={value => {
            setSelectedValue(value)
          }}
        />
    </View>

  );

}

export default Sortorder