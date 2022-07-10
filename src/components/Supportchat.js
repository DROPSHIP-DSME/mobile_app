import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  StatusBar,
  Dimensions,
  ScrollView,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard } from 'react-native';
import * as Yup from 'yup';
import { Colors, CommonStrings } from '../../common';
import PhoneMaskInput from './forms/inputField/PhoneMaskInput';
import InputField from './forms/inputField';
import { phoneRegExp } from '../../services/helper';
import Loader from './modals/Loader';
import tw from 'twrnc';
import Sendbutton from './pickers/Sendbutton';



const Supportchat = (props) => {

  const {
      navigation,
      values,
      errors,
      handleChange,
      handleSubmit,
  } = props;

  useEffect(() => {
      props.getincomingtlist(props?.loginuserid);
      props.getselldeshboard(props?.loginuserid);
      props.gettopsell(props?.loginuserid, 3);
      props.liveeventdetail(props?.loginuserid);
  }, [])


  const [text1, onChangeText3] = React.useState("");
  const [helppopup, sethelppopup] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [showclassName, setshowclassName] = useState("#B80000");

  const renderItem6 = ({ item }) => {
      return (
          <View>
              {item.userId.userName == 'Admin' ?
                  <View>
                      <View style={tw`flex flex-row p-2 rodunded-lg mt-4 items-center mb-3 justify-self-end bg-red-700 mx-3`}>
                          <Text style={tw`text-base text-white leading-4 tracking-wide items-center mx-3`}>{item.message}</Text>
                      </View>
                      <Text style={tw`text-sm text-gray-400 leading-3 tracking-wide text-right mx-4`}>{moment(item.msgDate).format('hh:mm A')}</Text>
                  </View>
                  :
                  <View>
                      <View style={tw`rounded-lg bg-blue-200 pl-4 w-6/11 mx-2 my-1 p-4`}>
                          <Text style={tw`text-sm text-gray-400 leading-3 tracking-wide text-right mx-4`}>{item.message}</Text>
                      </View>
                      <Text style={tw`text-sm text-gray-400 leading-3 tracking-wide mx-4`}>{moment(item.msgDate).format('hh:mm A')}</Text>
                  </View>

              }
          </View>
      );
  }


  return (
    <View style={tw.style('flex flex-1 m-4 absolute mb-6',{ zIndex: 4001})}>
        <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4')}>
          <View style={tw.style('px-2 py-5')}>

          </View>
        </View>

        <View style={tw`flex-row mt-7 mb-5`}>
            <Text style={tw`text-lg text-gray-700 bg-red-700 pl-8 leading-4`}>Chat with customer support</Text>
            <TouchableOpacity style={tw`absolute right-3 top-3`} onPress={() => sethelppopup(false)}>
                <Image source={ImageIcons.closepopup} style={styles.sendmsg2} />
            </TouchableOpacity>
        </View>
        <ScrollView keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={tw`bg-white h-40`} >
            <View style={tw`my-4`}>
                <FlatList
                    data={props?.getchatsupportlist1 || []}
                    renderItem={renderItem6}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                />
            </View>
        </ScrollView>
        <View style={tw.style('flex flex-row justify-between mx-3 my-3 mb-8 w-full')}>
            <View style={{ width: '90%' }}>
                <TextInput style={tw`text-gray-700 rounded-lg pl-5 text-sm leading-5 tracking-tight w-7/11 `}
                    placeholder="Type here..."
                    onChangeText={onChangeText3}
                    value={text1}
                    placeholderTextColor="#999999"
                />
            </View>
            <Supportchat onPress={() => handleSendRequestSubmit()} />
        </View>
    </View>
  )
};

export default Supportchat;
