import React, { useRef, useState, useEffect } from 'react';
import {
    Text, View, TouchableOpacity, FlatList,
    Image, TextInput, ImageBackground,
    ScrollView, Alert, StatusBar,
    KeyboardAvoidingView,
    Platform, Keyboard
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import { phoneRegExp } from '../../services/helper';
import DropdownField from '../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../components/modals/Loader';
import { RadioButton, Provider, Modal, Portal, Button, } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Footer3 from '../../screens/auth/Footer3';
import Shopheader from '../../screens/auth/Shopheader';

import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

const Notification = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    useEffect(() => {
        //alert('d')
        props.getalleventlist1(1);
    }, [])

    const getBrandUserId = async () => {

        onfilterData(props?.getalleventdata);
    }


    //Reference

    // Local states
    const [text1, onChangeText1] = React.useState("");
    const [City, onChangeCity] = React.useState("City");
    const [UserID, setUserID] = useState("");
    const [helppopup, sethelppopup] = React.useState(false);
    const [filterData, onfilterData] = React.useState([]);


    const [showclassName, setshowclassName] = useState("#B80000");

    const handleScroll = (pageYOffset) => {
        if (pageYOffset > 0) {
            setshowclassName('#B80000');
        } else {
            setshowclassName('#B80000');
        }
    }

    const containerStyle = { backgroundColor: 'white', padding: '7%', marginHorizontal: '5%', alignItems: 'center' };
    const joinbroadcast = (itemid, startnow, eventtime) => {
        if (startnow == true) {
            let request1 = {
                "channelName": itemid,
                "appID": "0c96ec2a0c9744c0bb3d21330bb0911d",
                "appCertificate": "f877b72b55264162bfc8b88421fa8b77",
                "uid": 0
            }
            props.getchanneltoken(request1, props.navigation, "vendor");
            setTimeout(function () {
                props.navigation.navigate("Blurbackground", { isback: false, channel: itemid, isbroadcaster: false });
            }, 1000);
            //props.navigation.navigate("Blurbackground", { isback: false, channel: itemid, isbroadcaster: false })
        } else {
            alert('Event will start at ' + moment(eventtime).format('MMM DD, hh:mm A'))
        }
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
            <StatusBar backgroundColor={showclassName} barStyle="dark-content" translucent={true} />
            <Shopheader />
            <ScrollView onScroll={({ nativeEvent }) => {
                handleScroll(nativeEvent['contentOffset'].y);
            }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#FFFFFF' }} >

                <View style={{ marginHorizontal: '3%', paddingTop: '10%' }}>
                    <Text style={{ padding: 10, fontSize: 40, color: "#B80000", fontFamily: 'hinted-AvertaStd-Bold', fontWeight: "bold" }}>Notification</Text>
                    <View style={{ backgroundColor: "#E6E6E6", padding: 6, width: 180, borderRadius: 5, marginLeft: "3%" }}>
                        <Text style={{ fontSize: 13, textAlign: 'center', fontFamily: "hinted-AvertaStd-Bold", fontWeight: "bold", color: "#4D4D4D" }}>MARK ALL AS READ</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: "15%" }}>
                        <View style={{ marginLeft: "1%" }}>
                            <Image source={ImageIcons.Elli} style={{ width: 36, height: 36 }} />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View><Text style={{ color: "#000000", fontFamily: "hinted-AvertaStd-Bold", fontWeight: "bold", padding: 5, fontSize: 16 }}>  Andera Miller</Text></View>
                            <View><Text style={{ color: "#000000", fontFamily: "hinted-AvertaStd-Bold", padding: 5, fontSize: 16 }}>just started streaming </Text></View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ marginLeft: "1%" }}>
                            <Image source={ImageIcons.shoes} style={{ width: 36, height: 36, borderRadius: 30 }} />
                        </View>
                        <View style={{ marginHorizontal: '4%' }}>
                            <Text style={{ color: "#000000", fontFamily: "hinted-AvertaStd-Bold", fontWeight: "bold", paddingTop: 5, fontSize: 16 }}>Sneaker D1405
                                <Text style={{ color: "#000000", paddingTop: 5, fontSize: 16, fontFamily: "hinted-AvertaStd-Regular", }}>,a product you saved to your favourites,is on sale</Text></Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ marginLeft: "1%" }}>
                            <Image source={ImageIcons.winterimage} style={{ width: 36, height: 36, borderRadius: 20 }} />
                        </View>
                        <View style={{ marginHorizontal: '4%' }}>
                            <Text style={{ color: "#000000", fontFamily: "hinted-AvertaStd-Bold", fontWeight: "bold", paddingTop: 5, fontSize: 16 }}>Clothing bazzar -24Hrs Sale {" "}
                                <Text style={{ color: "#000000", paddingTop: 5, fontSize: 16, fontFamily: "hinted-AvertaStd-Regular", }}>just started airing now</Text></Text>
                        </View>
                    </View>

                </View>

            </ScrollView>

            <Footer3 />
        </KeyboardAvoidingView>
    )
}
export default Notification