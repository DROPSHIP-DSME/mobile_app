import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Image, TextInput, ImageBackground, FlatList, Picker, StatusBar, Dimensions, ScrollView, Alert, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../../screens/common/styles';
import newstyles from '../../../screens/common/styles';
import { Colors, CommonStrings } from '../../../common'
import ImageIcons from '../../../common/ImageIcons'
import InputField from '../../../components/forms/inputField';
import { RoundedButton } from '../../../components/forms/button';
import { phoneRegExp } from '../../../services/helper';
import DropdownField from '../../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../../components/modals/Loader';
import Swipeout from 'react-native-swipeout';
import HorizontalSlider from 'react-horizontal-slider';
import Footer2 from '../../../screens/common/Footer2';
import Footer3 from '../../../screens/common/Footer3';

import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Provider, Portal, } from 'react-native-paper';
import Modal from 'react-native-modal'
import tw from 'twrnc';
import Sortfilter from '../../../components/pickers/Sortfilter';
import { UsersIcon } from "react-native-heroicons/solid";
import { PlayIcon } from "react-native-heroicons/solid";
import { HeartIcon } from "react-native-heroicons/solid";
import Sortorder from '../../../components/pickers/Sortorder';
 const options = [ { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' },{ label: '5', value: '5' },{ label: '6', value: '6' },{ label: '7', value: '7' },{ label: '8', value: '8' },{ label: '9', value: '9' } ]


import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";


const Accountdata = (props) => {

    const deviceHeight = Dimensions.get('window').height;
    const deviceWidth = Dimensions.get('window').width;


    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference
    const userId = props?.route?.params?.userId;
    const brandId = props?.route?.params?.brandId;

    useEffect(() => {
        props.getincomingtlist(props?.loginuserid);
        props.getselldeshboard(props?.loginuserid);
        props.gettopsell(props?.loginuserid, 3);
        props.liveeventdetail(props?.loginuserid);
    }, [])

    useEffect(() => {
        getBrandUserId();
    }, [])

    useFocusEffect(() => {
        getBrandUserId();
    })

    const handleScroll = (pageYOffset) => {
        if (pageYOffset > 0) {
            setshowclassName('#B80000');
        } else {
            setshowclassName('#B80000');
        }
    }

    const getBrandUserId = async () => {
        if (userId != "" && userId != undefined) {
            await AsyncStorage.setItem('UserId', userId);
            await AsyncStorage.setItem('userLogin', "1");
        }
    }

    const updateorderStatus = (itemValue) => {
    setSelectedValue(itemValue)
}

    // Local states
    const [text1, onChangeText3] = React.useState("");
    const [helppopup, sethelppopup] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const [showclassName, setshowclassName] = useState("#B80000");
    const [DATA2, setDATA2] = useState([]);

    const renderItem2 = ({ item, index }) => {
        return (
            <View>

                <View>
                    <Image source={{ uri: item.products[0]?.productImage }} style={tw.style('w-40 h-56 rounded-md')} />
                    <Text style={tw`text-sm text-white absolute bottom-4 left-3 leading-4`}></Text>

                    <View style={tw.style('flex flex-row bg-red-700 w-16 h-6 rounded-lg px-1 absolute top-4 left-2')}>
                        <Text style={tw.style('px-3 text-sm text-white text-center')}>Live</Text>
                    </View>
                    <View style={tw.style('flex flex-row bg-green-200 w-16 h-6 rounded-lg px-2 items-center absolute top-4 left-[55%]')}>
                        <View style={tw.style('pt-[2%]')}>
                            <UsersIcon color="red" fill="#000000" size={14} />
                        </View>
                        <Text style={tw.style('text-xs text-gray-800 pl-1')}>0</Text>
                    </View>
                </View>

                <View style={tw`rounded-md absolute bottom-16 right-4 bg-white p-2`}>
                    <HeartIcon color="red" fill="#B80000" size={28} />
                </View>

                <View style={tw.style('flex flex-row mt-2')}>
                    <View>
                        <Image source={ImageIcons.profileimage} style={tw.style('h-6 w-6 rounded-full')} />
                    </View>
                    <View style={tw.style('pl-2 pt-1')}>
                        <Text style={tw.style('text-gray-500 text-xs')}>{item.products[0]?.productName}</Text>
                    </View>
                </View>


            </View>
        );
    }

    const renderItem3 = ({ item, index }) => {
        return (
            <View>

                <View style={tw`flex flex-row`}>
                    <View style={tw`flex-row justify-between mt-3 bg-white p-2`}>
                        <Image source={item.image} style={tw`w-5 h-5`} />
                        <Text style={tw`text-sm text-gray-600 leading-4`}>{item.text}</Text>
                    </View>
                    <Text style={tw`text-sm text-gray-600 leading-4`}>{item.text1}</Text>
                    <Text style={tw`text-sm text-gray-600 leading-4`}>{item.text2}</Text>
                </View>

            </View>
        );
    }

    const renderItem4 = ({ item, index }) => {
        return (
            <View>

                <View style={tw`flex flex-row justify-between mt-5 bg-white w-full p-2`}>
                    <View style={tw`flex-row`}>
                        <Image source={item.image} style={{ width: 24, height: 24, }} />
                        <Text style={[tw`text-sm text-gray-600 leading-4`, { alignSelf: 'center', marginLeft: 1 }]}>{item.text}</Text>
                    </View>
                    <Text style={tw`text-sm text-gray-600 leading-4`}>{item.text1}</Text>
                </View>

            </View>
        );
    }

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
         <View style={{flex:1}}>

            <ScrollView onScroll={({ nativeEvent }) => {
                handleScroll(nativeEvent['contentOffset'].y);
            }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#f2f2f2' }} >

                <View style={tw`flex flex-row justify-between mx-4 mt-20 mb-5`}>
                    <Text style={tw.style('text-3xl font-bold text-gray-700', {fontFamily: 'hintedavertastdsemibold', })}>Bookmarks</Text>
                </View>

                <View style={tw`flex flex-row mx-4`}>
                    <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />

                    <Sortfilter text="Filter" onPress={() => props.navigation.navigate("Accountfav1")} />
                </View>




                <View style={tw`mt-10 mb-15`}>
                    <View style={tw`mx-3`}>
                        <FlatList
                            data={DATA2}
                            renderItem={renderItem2}
                            key={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            numColumns={2}
                        />
                    </View>
                </View>



            </ScrollView>

            <View style={{ position: 'absolute', zIndex: 2001, right: 20, bottom: 70 }}>
                <TouchableOpacity onPress={() => sethelppopup(true)}>
                    <Image source={ImageIcons.exporthelp} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>
            </View>

            {helppopup == true &&
                <View style={{ flex: 1, backgroundColor: '#ffffff', margin: 20, paddingVertical: 10, borderRadius: 10, zIndex: 4001, position: 'absolute', bottom: '10%' }}>


                    <View style={styles.chatViewrose}>

                        <Text style={styles.Benrosetext}>Chat with customer support</Text>
                        <TouchableOpacity style={{ position: 'absolute', right: 15, top: 5 }} onPress={() => sethelppopup(false)}>
                            <Image source={ImageIcons.closepopup} style={styles.sendmsg2} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#ffffff', height: 200 }} >
                        <View style={{ marginVertical: '2%' }}>
                            <FlatList
                                data={props?.getchatsupportlist1 || []}
                                renderItem={renderItem6}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                horizontal={false}
                            />
                        </View>
                    </ScrollView>
                    <View style={[styles.accountmainview, { marginBottom: 10, width: '100%' }]}>
                        <View style={{ width: '90%' }}>
                            <TextInput style={styles.chatinput}
                                placeholder="Type here..."
                                onChangeText={onChangeText3}
                                value={text1}
                                placeholderTextColor="#999999"
                            />
                        </View>
                        <TouchableOpacity style={{ position: 'absolute', right: 55, top: 5 }} onPress={() => handleSendRequestSubmit()}>
                            <Image source={ImageIcons.sendchat} style={styles.sendmsg1} />
                        </TouchableOpacity>
                    </View>
                </View>
            }


            <Footer3 onSelection="5" />
        </View>
    )
}


export default Accountdata
