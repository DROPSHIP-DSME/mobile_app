import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Image, TextInput, ImageBackground, FlatList, Picker, StatusBar, Dimensions, ScrollView, Alert, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../../screens/auth/styles';
import newstyles from '../../../screens/auth/styles';
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
import Footer2 from '../../../screens/auth/Footer2';
import Footer3 from '../../../screens/auth/Footer3';

import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Provider, Portal, } from 'react-native-paper';
import Modal from 'react-native-modal';
import tw from 'twrnc';
import { ShoppingBagIcon } from "react-native-heroicons/solid";
import Smallbutton from '../../../components/dropshipbutton/Smallbutton';


import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";


const Accountfollow = (props) => {

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

    // Local states
    const [text1, onChangeText3] = React.useState("");
    const [helppopup, sethelppopup] = React.useState(false);
    const [showclassName, setshowclassName] = useState("#B80000");


    const renderItem6 = ({ item }) => {
        return (
            <View>
                {item.userId.userName == 'Admin' ?
                    <View>
                        <View style={styles.chatrightView}>
                            <Text style={styles.hellotext}>{item.message}</Text>
                        </View>
                        <Text style={styles.chattingtime}>{moment(item.msgDate).format('hh:mm A')}</Text>
                    </View>
                    :
                    <View>
                        <View style={styles.chatlongView}>
                            <Text style={styles.chattingtext}>{item.message}</Text>
                        </View>
                        <Text style={styles.chattingtime2}>{moment(item.msgDate).format('hh:mm A')}</Text>
                    </View>

                }
            </View>
        );
    }


    return (
         <View style={tw`flex flex-1 mx-4`}>

            <ScrollView onScroll={({ nativeEvent }) => {
                handleScroll(nativeEvent['contentOffset'].y);
            }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#f2f2f2' }} >

                <View style={tw`flex flex-row justify-between mt-20 mb-5`}>
                    <Text style={tw.style('text-3xl font-bold text-gray-700', {fontFamily: 'hintedavertastdsemibold', })}>Following</Text>
                </View>

                <View style={tw.style('flex flex-row',{ width: deviceWidth / 1.1})}>
                  <View style={tw`bg-white rounded-lg py-3 my-3 mx-1 w-1/2 items-center`}>
                    <Image source={ImageIcons.colortodayshoe} style={tw`w-14 h-14 rounded-full`} />

                    <Text style={tw`text-lg text-gray-700`}>Sneakers Store</Text>

                    <Text style={tw`text-base text-blue-600`}>store.dropship.com</Text>


                    <View style={tw`flex-row my-2 items-center`}>
                        <ShoppingBagIcon color="red" fill="#b80000" size={24} />
                        <Text style={tw`text-base ml-2`}>0 products</Text>
                    </View>

                    <View style={tw`my-4`}>
                        <Smallbutton text="Unfollow" />
                    </View>
                  </View>

                  <View style={tw`bg-white rounded-lg py-3 my-3 mx-1 w-1/2 items-center`}>
                    <Image source={ImageIcons.colortodayshoe} style={tw`w-14 h-14 rounded-full`} />

                    <Text style={tw`text-lg text-gray-700`}>Sneakers Store</Text>

                    <Text style={tw`text-base text-blue-600`}>store.dropship.com</Text>


                    <View style={tw`flex-row my-2 items-center`}>
                        <ShoppingBagIcon color="red" fill="#b80000" size={24} />
                        <Text style={tw`text-base ml-2`}>0 products</Text>
                    </View>

                    <View style={tw`my-4`}>
                        <Smallbutton text="Unfollow" />
                    </View>
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


export default Accountfollow