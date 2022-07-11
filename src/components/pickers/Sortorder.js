import React, { useState } from 'react';
import {Text, View } from 'react-native';
import tw from 'twrnc';
import { CustomPicker } from 'react-native-custom-picker';
import { ChevronDownIcon } from "react-native-heroicons/solid";



const Sortorder = ({text, options, onSelect}) => {

  const [showvisible, setshowvisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(true);
  const [selectedValue, setSelectedValue] = useState("");

    return (
      <View style={tw.style('flex flex-row w-40 justify-between items-center bg-gray-200 rounded-md')}>
          <CustomPicker
            placeholder={'Sort'}
            options={options}
            onValueChange={value => {
              onSelect(value)
            }}
            style={tw.style('w-full')}
            fieldTemplateProps={{
              containerStyle: {
                height: 26,
                padding: 2,
                borderBottomWidth: 0,
                width: 95
              },
            }}
            optionTemplateProps={{
              containerStyle: {
                backgroundColor: '#fff',
                borderBottomWidth: 0,
                height: 60,
                marginLeft: 15
              },
              textStyle: {
                color: 'black'
              }
            }}
          />
          <View style={tw.style('mr-3')}>
            <ChevronDownIcon color="black" fill="#000000" size={20} />
          </View>
      </View>
    );

}


export default Sortorder
