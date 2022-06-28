import React, { useRef, useState, useEffect } from 'react';
import { Text, View, Image, FlatList, Dimensions, StatusBar, Picker, TextInput, ImageBackground, TouchableOpacity, ScrollView, Alert, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import styl from './styledrop';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import { phoneRegExp } from '../../services/helper';
import DropdownField from '../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../components/modals/Loader';
import Footer3 from '../../screens/auth/Footer3';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Shopheader from '../../screens/auth/Shopheader';
import { useTailwind } from 'tailwind-rn';


const editviewaddress = (props) => {

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
    const tailwind = useTailwind();

    // Local states
    const [text1, onChangeText1] = React.useState("");
    const [helppopup, sethelppopup] = React.useState(false);
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

    const checklogin = async () => {
        if (props?.loginuserstatus == "1") {
            props.navigation.navigate("AddStore")
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

    // //     const renderItem = ({ 


    //    return(

    //     <View style={styles.maincartviewshop}>
    //         <TouchableOpacity  onPress={() => {props.navigation.navigate("NameStore",{shopId:item._id, shopName:item.shopName}) }}>

    //          <View style={styles.comingViewflatshop}>
    //            <Image source={{uri: item.shopImage}} style={styles.storeimageflat} />
    //            <View>
    //                <View style={{flexDirection:'row',marginTop:'10%',width:160,justifyContent:'center'}}>
    //                     <Text style={[styles.namestoretext,{ textAlign:'center', justifyContent:'center'}]} numberOfLines={1}>{item.shopName}</Text>
    //                     <Image source={ImageIcons.brandicon} style={styles.bagimage} />
    //                 </View>
    //             <Text style={styles.storedropship}>{item.shopName}.dropship.com</Text>
    //            </View>

    //         </View>

    //         </TouchableOpacity>

    //     </View>

    //   );
    // }
    //  <View style={{marginHorizontal:'3%', marginBottom:90}}>
    //            <FlatList
    //                 data={props?.getlistshop || []}
    //                 renderItem={renderItem}
    //                 keyExtractor={item => item.id}
    //                 showsHorizontalScrollIndicator={false}
    //                 numColumns={2}
    //                 />
    //         </View>

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={tailwind('flex-1 justify-center')}>
            <StatusBar backgroundColor={showclassName} barStyle="dark-content" translucent={true} />
            <Shopheader />

            <ScrollView onScroll={({ nativeEvent }) => {
                handleScroll(nativeEvent['contentOffset'].y);
            }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#FFFFFF' }} >

                <View style={{ flexDirection: "row", marginHorizontal: "3%", marginVertical: "6%" }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", fontFamily: "hinted-AvertaStd-Regular", color: "#999999" }}>PERSONAL DETAILS /</Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold", fontFamily: "hinted-AvertaStd-Regular", color: "#999999" }}> ADDRESSES/</Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}> EDIT ADDRESS</Text>
                </View>

                <View style={{ marginHorizontal: "3%" }}>
                    <Text style={{ fontSize: 26, fontFamily: "hinted-AvertaStd-Regular", fontWeight: "bold" }}>Edit Address</Text>
                </View>

                <View style={[tailwind('border-[#e6e6e6] rounded-[10px] bg-[#e6e6e6] h-[55px] self-center mt-[7%] mx-[3%]'), { width: deviceWidth / 1.1 }]}>
                    <Text style={{ fontSize: 12, fontFamily: 'hinted-AvertaStd-Regular', color: '4d4d4d', marginLeft: '5%', marginTop: '2%' }}>First Name</Text>
                    <Text style={{ fontSize: 18, fontFamily: 'hinted-AvertaStd-Regular', color: '4d4d4d', marginLeft: '5%', marginTop: '1%' }}>Mary</Text>
                </View>

                <View style={[tailwind('border-[#e6e6e6] rounded-[10px] bg-[#e6e6e6] h-[55px] self-center mt-[7%] mx-[3%]'), { width: deviceWidth / 1.1 }]}>
                    <Text style={{ fontSize: 12, fontFamily: 'hinted-AvertaStd-Regular', color: '4d4d4d', marginLeft: '5%', marginTop: '2%' }}>Last Name</Text>
                    <Text style={{ fontSize: 18, fontFamily: 'hinted-AvertaStd-Regular', color: '4d4d4d', marginLeft: '5%', marginTop: '1%' }}>Davis</Text>
                </View>

                <View style={[tailwind('border-[#e6e6e6] rounded-[10px] bg-[#e6e6e6] h-[55px] self-center mt-[7%] mx-[3%]'), { width: deviceWidth / 1.1 }]}>
                    <Text style={{ fontSize: 12, fontFamily: 'hinted-AvertaStd-Regular', color: '4d4d4d', marginLeft: '5%', marginTop: '2%' }}>Address Line 1</Text>
                    <Text style={{ fontSize: 18, fontFamily: 'hinted-AvertaStd-Regular', color: '4d4d4d', marginLeft: '5%', marginTop: '1%' }}>2501 Stevens Ave</Text>
                </View>

                <View style={[tailwind('border-[#e6e6e6] rounded-[10px] bg-[#e6e6e6] h-[55px] self-center mt-[7%] mx-[3%]'), { width: deviceWidth / 1.1 }]}>
                    <TextInput
                        placeholder="Address Line 2"
                        placeholderTextColor="#1a1a1a"
                        paddingLeft={15}
                    />
                </View>

                <View style={[tailwind('border-[#e6e6e6] rounded-[10px] bg-[#e6e6e6] h-[55px] self-center mt-[7%] mx-[3%]'), { width: deviceWidth / 1.1 }]}>
                    <Text style={{ fontSize: 12, fontFamily: 'hinted-AvertaStd-Regular', color: '4d4d4d', marginLeft: '5%', marginTop: '2%' }}>City </Text>
                    <Text style={{ fontSize: 18, fontFamily: 'hinted-AvertaStd-Regular', color: '4d4d4d', marginLeft: '5%', marginTop: '1%' }}>Mennieapolis</Text>
                </View>




                <View style={{ marginHorizontal: '4%', marginTop: '7%' }}>
                    <View style={{ height: 55, width: deviceWidth / 1.1, backgroundColor: '#e6e6e6', borderRadius: 10, }}>
                        <Text style={{ padding: 5 }}>Country</Text>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 55, width: 395, color: '#4d4d4d', marginTop: -15 }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="USA" value="1" />
                            <Picker.Item label="INDIA" value="2" />
                            <Picker.Item label="UAE" value="3" />
                            <Picker.Item label="CANADA" value="4" />
                            <Picker.Item label="POLAND" value="5" />
                            <Picker.Item label="UKREN" value="6" />
                            <Picker.Item label="RUSIA" value="7" />
                            <Picker.Item label="AUSTRELIA" value="8" />
                            <Picker.Item label="SRI LANKA" value="9" />
                        </Picker>
                    </View>

                </View>

                <View style={[tailwind('border-[#e6e6e6] rounded-[10px] bg-[#e6e6e6] h-[55px] self-center mt-[7%] mx-[3%]'), { width: deviceWidth / 1.1 }]}>
                    <Text style={{ fontSize: 12, fontFamily: 'hinted-AvertaStd-Regular', color: '4d4d4d', marginLeft: '5%', marginTop: '2%' }}>Post/Zip Code </Text>
                    <Text style={{ fontSize: 18, fontFamily: 'hinted-AvertaStd-Regular', color: '4d4d4d', marginLeft: '5%', marginTop: '1%' }}>55404</Text>
                </View>

                <View style={{ flexDirection: 'row', marginHorizontal: '4%', marginTop: "10%" }}>
                    <View style={{ height: 15, width: 15, backgroundColor: '#848484', borderRadius: 3, }}></View>
                    <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Regular', color: '#1a1a1a', marginLeft: 5 }}>Make default shipping method</Text>
                </View>

                <TouchableOpacity onPress={() => props.navigation.navigate("noaddress")} style={{ width: deviceWidth / 1.1, backgroundColor: "#B80000", borderRadius: 30, marginTop: "3%", height: 63, marginLeft: "4%", marginBottom: "25%" }} >
                    <Text style={{ textAlign: 'center', color: "#FFFFFF", fontWeight: 'bold', fontSize: 18, top: 18 }}>SAVE CHANGES</Text>
                </TouchableOpacity>




            </ScrollView>

            <View style={{ position: 'absolute', zIndex: 2001, right: 20, bottom: 70 }}>
                <TouchableOpacity onPress={() => sethelppopup(true)}>
                    <Image source={ImageIcons.exporthelp} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>
            </View>

            {helppopup == true &&
                <View style={{ flex: 1, backgroundColor: '#ffffff', margin: 20, paddingVertical: 10, borderRadius: 10, zIndex: 4001, position: 'absolute', bottom: '10%' }}>


                    <View style={tailwind('flex flex-row mt-[8%] mb-[5%]')}>

                        <Text style={tailwind('text-xl font-bold text-[#282828] pl-[5%]')}>Chat with customer support</Text>
                        <TouchableOpacity style={{ position: 'absolute', right: 15, top: 5 }} onPress={() => sethelppopup(false)}>
                            <Image source={ImageIcons.closepopup} style={tailwind('w-[36px] h-[27px]')} />
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
                    <View style={[('flex flex-row justify-between mx-[5%] my-[4%]'), { marginBottom: 10, width: '100%' }]}>
                        <View style={{ width: '90%' }}>
                            <TextInput style={tailwind('bg-[#E6E6E6] rounded-[10px] pl-[5%] text-[11.3px] tracking-[-0.125172px] w-[75%] text-[#878787] font-regular')}
                                placeholder="Type here..."
                                onChangeText={onChangeText1}
                                value={text1}
                                placeholderTextColor="#999999"
                            />
                        </View>
                        <TouchableOpacity style={{ position: 'absolute', right: 55, top: 5 }} onPress={() => handleSendRequestSubmit()}>
                            <Image source={ImageIcons.sendchat} style={tailwind('w-[49px] h-[41px]')} />
                        </TouchableOpacity>
                    </View>
                </View>
            }


            <Footer3 onSelection="5" />

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="DROPSHIP"
                message="You need to login to access this screen!"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Cancel"
                confirmText="Login"
                confirmButtonColor="#E22020"
                onCancelPressed={() => {
                    setshowAlert(false)
                }}
                onConfirmPressed={() => {
                    setshowAlert(false)
                    navigation.navigate('Golive');
                }}
            />
        </KeyboardAvoidingView>

    )
}


export default editviewaddress