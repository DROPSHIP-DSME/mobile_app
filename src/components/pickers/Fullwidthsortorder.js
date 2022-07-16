import React, { useState } from 'react';
import {Text, View } from 'react-native';
import tw from 'twrnc';
import { CustomPicker } from 'react-native-custom-picker';
import { ChevronDownIcon } from "react-native-heroicons/solid";



const Fullwidthsortorder = ({text, options, onSelect}) => {

  const [showvisible, setshowvisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(true);
  const [selectedValue, setSelectedValue] = useState("");

    return (
      <View style={tw.style('flex flex-row justify-between items-center bg-zinc-100 rounded-md')}>
          <CustomPicker
            placeholder={text}
            options={options}
            getLabel={item => item.label}
            onValueChange={item => {
              onSelect(item.value)
            }}
            style={{width: '200%'}}
            fieldTemplateProps={{
              containerStyle: {
                height: 28,
                padding: 2,
                borderBottomWidth: 0,
                width: 300
              },
            }}
            optionTemplateProps={{
              containerStyle: {
                backgroundColor: '#fff',
                borderBottomWidth: 0,
                height: 50,
                marginLeft: 15
              },
              textStyle: {
                color: 'black',
              }
            }}
          />
          <View style={tw.style('absolute top-4 right-4 justify-center')}>
            <ChevronDownIcon color="black" fill="#000000" size={20} />
          </View>
      </View>
    );

}


export default Fullwidthsortorder
