import React, { useState } from 'react';
import {Text, View } from 'react-native';
import tw from 'twrnc';
import { CustomPicker } from 'react-native-custom-picker';
import { CalendarIcon } from "react-native-heroicons/solid";



const Calendar = ({text, options, onSelect}) => {

  const [showvisible, setshowvisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(true);
  const [selectedValue, setSelectedValue] = useState("");

    return (
      <View style={tw.style('flex flex-row justify-between items-center bg-gray-200 rounded-md max-w-[45%]')}>
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
            <CalendarIcon color="black" fill="#000000" size={20} />
          </View>
      </View>
    );

}


export default Calendar
