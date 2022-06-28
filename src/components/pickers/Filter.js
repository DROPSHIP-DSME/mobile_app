import React, { useState } from 'react';
import {Text, View, TextInput } from 'react-native';
import tw from 'twrnc';
import { ChevrondoubleupIcon } from "react-native-heroicons/solid";

const Filter = () => {

  return (

                  <View style={tw.style('flex flex-col items-center relative')}>
                      <View style={tw.style('w-full')}>
                          <View style={tw.style('my-2 p-1 bg-white flex border border-gray-200 rounded')}>
                              <View style={tw.style('flex flex-auto flex-wrap')}></View>
                              <TextInput
                              style={tw.style('p-1 px-2 appearance-none outline-none w-full text-gray-800')}
                              //onChangeText={onChangeName}
                              //value={Name}
                               placeholder="Search by keyword"
                               //onSubmitEditing={() => handleSendRequestSubmit()}
                               placeholderTextColor="#999999"
                              />
                              <View style={tw.style('text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200')}>
                                  <View style={tw.style('cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none')}>
                                      <ChevrondoubleupIcon color="red" fill="gray" size={24} />
                                  </View>
                              </View>
                          </View>
                      </View>
                      <View style={tw.style('absolute shadow bg-white top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj')}>
                          <View style={tw.style('flex flex-col w-full')}>
                              <View style={tw.style('cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100')}>
                                  <View style={tw.style('flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100')}>
                                      <View style={tw.style('w-full items-center flex')}>
                                          <Text style={tw.style('mx-2 -mt-1')}>Jack jhon</Text>
                                      </View>
                                  </View>
                              </View>
                          </View>
                      </View>
                    </View>


  );

}

export default Filter
