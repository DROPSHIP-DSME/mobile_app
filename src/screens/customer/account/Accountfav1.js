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
import Supportchat from '../../../components/Supportchat';
import Sortorder from '../../../components/pickers/Sortorder';
import Help from '../../../components/help/Help';

 const options = [ { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' },{ label: '5', value: '5' },{ label: '6', value: '6' },{ label: '7', value: '7' },{ label: '8', value: '8' },{ label: '9', value: '9' } ]


import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";


const Accountfav1 = (props) => {

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

    const updateorderStatus = (itemValue) => {
        setSelectedValue(itemValue)
    }

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

    const [text1, onChangeText3] = React.useState("");
    const [selectedValue, setSelectedValue] = useState("1");
    const [showclassName, setshowclassName] = useState("#B80000");




    const DATA2 = [];


    const renderItem2 = ({ item, index }) => {
        return (
            <View>
                <View style={tw`p-2 mx-4`}>
                    <Image source={item.image} style={tw.style('h-10 rounded-md', {width: deviceWidth / 2.5})} />
                </View>
                <View style={tw`my-4 flex flex-row mx-3`}>
                    <View>
                        <Text style={tw`text-base w-9/11 ml-3`}>{item.text}</Text>
                        <Text style={tw`text-lg w-9/11 ml-3`}>{item.text1}</Text>
                        <View style={{ marginBottom: '12%' }}>
                            <Rating
                                type='custom'
                                imageSize={18}
                                ratingCount={5}
                                ratingColor='#EB5757'
                                tintColor='#FFE7E7'
                                style={tw`py-3 w-full`}
                            />
                        </View>

                    </View>
                    <View style={tw`ml-3`}>
                        <View style={tw`p-2 mx-3`}>
                            <Image source={ImageIcons.outlock} style={tw`ml-3 h-8 w-8`} />
                        </View>
                        <View style={tw`p-2 mx-2`}>
                            <Image source={ImageIcons.outheart} style={tw`ml-3 h-8 w-8`} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }



    return (
         <View style={{flex:1}}>


            <ScrollView onScroll={({ nativeEvent }) => {
                handleScroll(nativeEvent['contentOffset'].y);
            }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#f2f2f2' }} >
                <View style={tw`flex flex-row justify-between mx-4 mt-10 mb-5`}>
                    <Text style={tw.style('text-3xl font-bold text-gray-700', {fontFamily: 'hintedavertastdsemibold', })}>My Favorites</Text>
                </View>

                <View style={tw`flex flex-row mx-4`}>
                    <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />

                    <Sortfilter text="Filter" onPress={() => props.navigation.navigate("Accountfav1")} />
                </View>




                <View style={tw`mt-10`}>

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

            <Help onPress={(text1) => helpbuttonsubmit(text1)} />

            <Footer3 onSelection="5" />
        </View>
    )
}


export default Accountfav1
