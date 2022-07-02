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
import { RadioButton, Provider, Modal, Portal, Button, } from 'react-native-paper';
import Shopheader from '../../screens/auth/Shopheader';
import { CreditCardInput } from 'react-native-payment-card';
import tw from 'twrnc';


const changepayment = (props) => {

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
    const [checked, setChecked] = React.useState('first');
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
            style={tw.style('flex-1 justify-center')}>
           
            <ScrollView onScroll={({ nativeEvent }) => {
                handleScroll(nativeEvent['contentOffset'].y);
            }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#FFFFFF' }} >

                <View style={{ flexDirection: "row", marginHorizontal: "3%", marginVertical: "6%" }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", fontFamily: "hinted-AvertaStd-Regular", color: "#999999" }}>PERSONAL DETAIL /</Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold", fontFamily: "hinted-AvertaStd-Regular", color: "#999999" }}>PAYMENTS /</Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>EDIT PAYMENT</Text>

                </View>

                <View style={{ marginHorizontal: "3%" }}>
                    <Text style={{ fontSize: 26, fontFamily: "hinted-AvertaStd-Regular", fontWeight: "bold" }}>Edit Payment</Text>
                </View>

                <View style={{ flexDirection: "row", elevation: 1, marginHorizontal: "4%", backgroundColor: "#FAFAFA", marginTop: "2%" }}>
                    <View style={{ marginTop: "10%" }}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        />
                    </View>
                    <View style={{ backgroundColor: '#ffffff', width: deviceWidth / 1.1, alignSelf: 'center', padding: '5%', borderRadius: 15, flexDirection: 'row' }}>
                        <Image source={ImageIcons.righttoday} style={{ width: 20, height: 20, marginTop: 6, alignSelf: 'center' }} />
                        <View style={{ marginLeft: 5, alignSelf: 'center' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'hinted-AvertaStd-Semibold', marginLeft: 6, color: '#b80000', fontWeight: "bold" }}>Pay by debit/credit card</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "5%", marginBottom: "8%" }}>
                                <View>
                                    <Image source={ImageIcons.visa} style={{ width: 45, height: 30 }} />
                                </View>
                                <View>
                                    <Image source={ImageIcons.mastercard} style={{ width: 45, height: 30 }} />
                                </View>
                                <View>
                                    <Image source={ImageIcons.mastro} style={{ width: 45, height: 30 }} />
                                </View>

                                <View>
                                    <Image source={ImageIcons.express} style={{ width: 45, height: 30 }} />
                                </View>
                                <View>
                                    <Image source={ImageIcons.affrim} style={{ width: 45, height: 30 }} />
                                </View>

                            </View>
                            <View>
                                <Image source={ImageIcons.discover} style={{ width: 45, height: 30 }} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={tw.style('flex flex-row justify-center mt-2 mb-2')}>
                    <CreditCardInput
                        requiresName
                        requiresCVC
                        requiresPostalCode
                        validColor={"black"}
                        invalidColor={"red"}
                        placeholderColor={"darkgray"}
                    //onChange={_onChange}
                    />
                </View>


                {/* <View style={[styles.pickerViewshorttodaybrand,{marginTop:'7%',backgroundColor:"#e6e6e6",marginHorizontal:"3%",borderRadius:10}]}>
              <Text style={{fontSize:12,fontFamily:'hinted-AvertaStd-Regular',color:'4d4d4d',marginLeft:'5%',marginTop:'2%'}}>Card Number</Text>
              <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Regular',color:'4d4d4d',marginLeft:'5%',marginTop:'1%'}}>2233 4455 6789 5432</Text>       
                </View>

                <View style={[styles.pickerViewshorttodaybrand,{marginTop:'7%',backgroundColor:"#e6e6e6",marginHorizontal:"3%",borderRadius:10}]}>
              <Text style={{fontSize:12,fontFamily:'hinted-AvertaStd-Regular',color:'4d4d4d',marginLeft:'5%',marginTop:'2%'}}>Cardholder Name</Text>
              <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Regular',color:'4d4d4d',marginLeft:'5%',marginTop:'1%'}}>Mary Devis</Text>       
                </View>

                <View style={[styles.pickerViewshorttodaybrand,{marginTop:'7%',backgroundColor:"#e6e6e6",marginHorizontal:"3%",borderRadius:10}]}>
              <Text style={{fontSize:12,fontFamily:'hinted-AvertaStd-Regular',color:'4d4d4d',marginLeft:'5%',marginTop:'2%'}}>Expiry Date</Text>
              <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Regular',color:'4d4d4d',marginLeft:'5%',marginTop:'1%'}}>19/23</Text>       
                </View>

                 <View style={[styles.pickerViewshorttodaybrand,{marginTop:'7%',backgroundColor:"#e6e6e6",marginHorizontal:"3%",borderRadius:10}]}>
              <Text style={{fontSize:12,fontFamily:'hinted-AvertaStd-Regular',color:'4d4d4d',marginLeft:'5%',marginTop:'2%'}}>Payment Type</Text>
              <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Regular',color:'4d4d4d',marginLeft:'5%',marginTop:'1%'}}>Credit/Debit Card</Text>       
                </View>

                 <View style={{flexDirection:'row',marginHorizontal:'4%',marginTop:"4%"}}>
                <View style={{height:15,width:15,backgroundColor:'#848484',borderRadius:3,}}></View>
                 <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',color:'#1a1a1a',marginLeft:5}}>Make default payment method</Text>
               </View> */}


                <View style={{ flexDirection: "row", marginTop: "4%", flexDirection: "row", elevation: 1, marginHorizontal: "4%", backgroundColor: "#FAFAFA" }}>
                    <View style={{ marginTop: "10%" }}>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                    </View>
                    <View style={{ backgroundColor: '#ffffff', width: deviceWidth / 1.1, alignSelf: 'center', padding: '5%', borderRadius: 15, flexDirection: 'row' }}>
                        <Image source={ImageIcons.righttoday} style={{ width: 20, height: 20, marginTop: 6, alignSelf: 'center' }} />
                        <View style={{ marginLeft: 5, alignSelf: 'center' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'hinted-AvertaStd-Semibold', marginLeft: 6, color: '#808080' }}>Pay by PayPal</Text>
                            <View style={{ marginLeft: "4%" }}>
                                <Image source={ImageIcons.paypal} style={{ width: 45, height: 30 }} />
                            </View>
                        </View>
                    </View>
                </View>




                <TouchableOpacity onPress={() => props.navigation.navigate("paymentedit")} style={{ width: deviceWidth / 1.1, backgroundColor: "#B80000", borderRadius: 30, marginTop: "12%", height: 63, marginLeft: "4%", marginBottom: "30%" }} >
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


                    <View style={tw.style('flex flex-row mt-4 mb-3')}>

                        <Text style={tw.style('text-xl font-bold text-gray-900 pl-3')}>Chat with customer support</Text>
                        <TouchableOpacity style={{ position: 'absolute', right: 15, top: 5 }} onPress={() => sethelppopup(false)}>
                            <Image source={ImageIcons.closepopup} style={tw.style('w-9 h-7')} />
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
                    <View style={[tw.style('flex flex-row justify-between mx-4 my-4'), { marginBottom: 10, width: '100%' }]}>
                        <View style={{ width: '90%' }}>
                            <TextInput style={tw.style('bg-[#E6E6E6] rounded-md pl-4 text-xs tracking-[-0.125172px] w-[75%] text-[#878787] font-normal')}
                                placeholder="Type here..."
                                onChangeText={onChangeText1}
                                value={text1}
                                placeholderTextColor="#999999"
                            />
                        </View>
                        <TouchableOpacity style={{ position: 'absolute', right: 55, top: 5 }} onPress={() => handleSendRequestSubmit()}>
                            <Image source={ImageIcons.sendchat} style={tw.style('w-12 h-10')} />
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


export default changepayment