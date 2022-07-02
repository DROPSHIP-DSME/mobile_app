import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Image, TextInput, ImageBackground, FlatList, Picker, StatusBar, Dimensions, ScrollView, Alert, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import newstyles from './styles';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import { phoneRegExp } from '../../services/helper';
import DropdownField from '../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../components/modals/Loader';
import Swipeout from 'react-native-swipeout';
import HorizontalSlider from 'react-horizontal-slider';
import Footer2 from '../../screens/auth/Footer2';
import SellHeader from '../../screens/auth/Sellheader';
import Shopheader from '../../screens/auth/Shopheader';
import Footer3 from '../../screens/auth/Footer3';

import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Provider, Portal, } from 'react-native-paper';
import Modal from 'react-native-modal'


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
    const [helppopup, sethelppopup] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const [showclassName, setshowclassName] = useState("#B80000");




    const DATA2 = [];




    const renderItem2 = ({ item, index }) => {
        return (
            <View>
                <View style={{ padding: 2, marginHorizontal: 7 }}>
                    <Image source={item.image} style={{ height: 162, width: deviceWidth / 2.5, borderRadius: 10 }} />
                </View>
                <View style={{ marginTop: 5, flexDirection: 'row', marginHorizontal: 3 }}>
                    <View>
                        <Text style={{ fontSize: 14, width: '80%', marginLeft: '5%' }}>{item.text}</Text>
                        <Text style={{ fontSize: 16, width: '80%', fontFamily: 'hinted-AvertaStd-Bold', marginLeft: '5%' }}>{item.text1}</Text>
                        <View style={{ marginBottom: '12%' }}>
                            <Rating
                                type='custom'
                                imageSize={18}
                                ratingCount={5}
                                ratingColor='#EB5757'
                                tintColor='#FFE7E7'
                                style={{ paddingVertical: 5, width: 100, }}
                            />
                        </View>

                    </View>
                    <View style={{ marginLeft: 4 }}>
                        <View style={{ padding: 2, marginHorizontal: 7 }}>
                            <Image source={ImageIcons.outlock} style={{ height: 30, width: 30 }} />
                        </View>
                        <View style={{ padding: 2, marginHorizontal: 7 }}>
                            <Image source={ImageIcons.outheart} style={{ height: 30, width: 30 }} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }




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
         <View style={{flex:1}}>


            <ScrollView onScroll={({ nativeEvent }) => {
                handleScroll(nativeEvent['contentOffset'].y);
            }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#f2f2f2' }} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '3%', marginVertical: '5%' }}>
                    <Text style={{ fontSize: 26, color: '#1a1a1a', fontFamily: 'hinted-AvertaStd-Semibold', }}>My Favorites</Text>
                </View>

                <View style={{ flexDirection: 'row', marginHorizontal: '4%' }}>
                    <View style={styles.pickerViewshorttodayagainorder}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 30, width: 100, color: '#ffffff', }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Sort" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                            <Picker.Item label="7" value="7" />
                            <Picker.Item label="8" value="8" />
                            <Picker.Item label="9" value="9" />
                        </Picker>
                    </View>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Accountfav")} style={[styles.pickerViewshorttodayagainorder, { marginLeft: '8%', flexDirection: 'row', justifyContent: 'space-around', padding: 4 }]}>
                        <Image source={ImageIcons.whitefiltertoday} style={{ height: 11, width: 11, marginTop: 5 }} />
                        <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Regular', textAlign: 'center', color: '#ffffff' }}>FILTERS</Text>
                    </TouchableOpacity>
                </View>




                <View style={{ marginTop: '8%', }}>

                    <View style={{ marginLeft: '5%' }}>
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


export default Accountfav1