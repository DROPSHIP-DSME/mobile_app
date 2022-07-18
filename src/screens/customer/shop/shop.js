import React, { useRef, useState, useEffect } from 'react';
import { Text, View, Image, FlatList, Dimensions, StatusBar, Picker, ImageBackground, TouchableOpacity, ScrollView, Alert, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../../screens/common/styles';
import styl from '../../../screens/common/styledrop';
import { Colors, CommonStrings } from '../../../common'
import ImageIcons from '../../../common/ImageIcons'
import InputField from '../../../components/forms/inputField';
import { RoundedButton } from '../../../components/forms/button';
import { phoneRegExp } from '../../../services/helper';
import DropdownField from '../../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../../components/modals/Loader';
import Footer3 from '../../../screens/common/Footer3';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import tw from 'twrnc';
import Sortorder from '../../../components/pickers/Sortorder';
import Sortfilter from '../../../components/pickers/Sortfilter';
import { ChevrondoubleupIcon } from "react-native-heroicons/solid";
import { Rating, AirbnbRating } from 'react-native-ratings';

const shop = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;


    useEffect(() => {
        props.getAllshop(1);
    }, [])
    useFocusEffect(() => {
        //props.getAllshop(1);
    })


    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    // Local states
    const [starCount, setstarCount] = useState(5);
    const [selectedValue, setSelectedValue] = useState("java");
    const [wayToContact, setWayToContact] = useState("Phone");
    const [showAlert, setshowAlert] = React.useState(false);
    const [wayToContactList, setWayToContactList] = useState([
        {
            label: "Phone",
            value: "Phone"
        },
        {
            label: "Email",
            value: "Email"
        }
    ]);
    const updateorderStatus = (itemValue) => {
        setSelectedValue(itemValue)
    }

    const [showclassName, setshowclassName] = useState("#B80000");
    const handleScroll = (pageYOffset) => {
        if (pageYOffset > 0) {
            setshowclassName('#B80000');
        } else {
            setshowclassName('#B80000');
        }
    }

    const ratingCompleted = (ratingdata) => {
        console.log('rating', ratingdata)
        if (ratingdata != "" && ratingdata != undefined) {
            f(ratingdata)
        }

    }
    const options = [
      {
        label: 'Prcoessing',
        value: 'Prcoessing'
      },
      {
        label: 'Shipped',
        value: 'Shipped'
      },
      {
        label: 'Delivered',
        value: 'Delivered'
      },
      {
        label: 'Cancelled',
        value: 'Cancelled'
      }
    ]

    const checklogin = async () => {
        if (props?.loginuserstatus == "1") {
            props.navigation.navigate("watchlist")
        } else {
            setshowAlert(true)
        }
    }


    const DATA = [
        {
            text: "Beauty brands",
            text1: "$75",
            image: ImageIcons.addstore,

        },
        {
            text: "Beauty brands",
            text1: "$75",
            image: ImageIcons.clothes,

        },


    ];
    const renderItem = ({ item, index }) => {
        return (
            <View style={tw.style(tw`w-2/4 mb-6`)}>
                <TouchableOpacity onPress={() => { props.navigation.navigate("ProductStore", { productId: item._id, shopId: item._id, shopName: item.shopName })}}
                    style={tw.style('rounded-lg mt-5 mx-4')}
                    >
                    <View style={tw.style('p-0.5')}>
                        <Image source={{ uri: item.shopImage }} style={tw.style('rounded-lg'),{ height: 150, width: deviceWidth / 2.4}} onPress={() => { props.navigation.navigate("clothing") }} />
                    </View>
                    <View style={tw.style('flex flex-row mt-4 justify-between')}>
                        <View style={tw.style('pl-2')}>
                            <Text style={tw.style('text-gray-700 text-xs font-normal')}>{item.shopName}</Text>
                            <Text style={tw.style('text-gray-700 text-lg font-bold')}>$0</Text>
                            <View style={tw.style('flex flex-row mt-1 items-center')}>
                                <Rating
                                    type='custom'
                                    imageSize={15}
                                    ratingCount={5}
                                    ratingColor='#EB5757'
                                    //tintColor='#FFE7E7'
                                    value={starCount}
                                    onFinishRating={(start) => ratingCompleted(start)}
                                    style={tw.style('ml-[2%]')}
                                />
                                <Text style={tw.style('text-sm mx-3 text-black font-normal')}>4.0</Text>
                            </View>
                        </View>
                        <View style={tw.style('mr-2')}>
                            <Image source={ImageIcons.Iconlock} style={tw.style('w-8 h-8')} />
                            <Image source={ImageIcons.iconheart} style={tw.style('w-8 h-8 mt-4')} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }



    const data = [{ text: "ALL" }, { text: "CLOTHING & SHOES" }, { text: "FURNITURE" }, { text: "BEAUTY & HAIR" }, { text: "ELECTRONICS" }]

    const renderItem1 = ({ item, index }) => {
        return(
            <View style={tw.style('flex flex-row ml-4 mt-4')}>
                  <TouchableOpacity>
                      {index == 1 ?
                          <Text style={tw.style('px-1 py-1 w-auto text-base text-red-700')}>{item.text}</Text>
                          :
                          <Text style={tw.style('px-1 py-1 w-auto text-base text-gray-500')}>{item.text}</Text>
                      }
                  </TouchableOpacity>
              </View>
        );
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={tw.style('flex-1 justify-center')}>


            <ScrollView onScroll={({ nativeEvent }) => {
                handleScroll(nativeEvent['contentOffset'].y);
            }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={tw.style('bg-white')} >
                <View style={tw.style('mx-3 mt-9')}>
                    <Text style={tw.style('text-3xl text-gray-700 font-bold')}>Shop</Text>
                </View>


                <View style={tw.style('flex flex-row mx-4 mt-4')}>

                    <Sortorder text="Sort Order" options={options}  onSelect={(checked) => updateorderStatus(checked)}  />

                    <Sortfilter
                      text="Filter"
                     />

                </View>
                <View style={tw.style('mx-2')}>
                    <FlatList
                        data={props?.getlistshop || []}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                    />
                </View>
            </ScrollView>


            <Footer3 onSelection="4" />

        </KeyboardAvoidingView>

    )
}


export default shop