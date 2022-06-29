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

const myaccount = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;


    // useEffect(() => {
    //    props.getAllshop(1);
    // }, [])
    // useFocusEffect(() => {
    //      //props.getAllshop(1);
    //  })

    useEffect(() => {
        // alert(props?.loginuserid)
        props.getprofileuser(props?.loginuserid);
        console.log("getprofileuser", props.getprofileuserlist)

    }, [])

    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

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
            style={styles.registrationRoot}>
            <StatusBar backgroundColor={showclassName} barStyle="dark-content" translucent={true} />
            <View style={{ flexDirection: 'row', backgroundColor: showclassName, alignItems: 'center', justifyContent: 'space-between', top: '3%', zIndex: 1001, width: '100%', padding: '3%' }}>

                <View>
                    {showclassName == '#B80000' ?
                        <Image source={ImageIcons.logored_1} style={{ width: 70, height: 57 }} />
                        :
                        <Image source={ImageIcons.logored} style={{ width: 70, height: 57 }} />
                    }
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 20 }}>
                    <View >
                        <Image source={ImageIcons.white_search} style={{ width: 21, height: 20 }} />
                    </View>
                    <View style={{ marginHorizontal: '5%' }}>
                        <Image source={ImageIcons.bell} style={{ width: 21, height: 21, }} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={ImageIcons.whitecart} style={{ width: 18, height: 20.6, }} />
                        <Text style={styles.numtext}>0</Text>
                    </View>
                </View>
            </View>

            <ScrollView onScroll={({ nativeEvent }) => {
                handleScroll(nativeEvent['contentOffset'].y);
            }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#E5E5E5' }} >
                <View style={{ marginHorizontal: '3%', paddingTop: '20%' }}>
                    <Text style={{ fontSize: 40, color: "#B80000", fontFamily: 'hinted-AvertaStd-Bold', fontWeight: "bold" }}>My Account</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>Personal Details</Text>
                    <Text style={{ fontSize: 18, fontWeight: "bold", fontFamily: "hinted-AvertaStd-Regular", color: "#999999" }}>My store</Text>
                    <Text style={{ fontSize: 18, fontWeight: "bold", fontFamily: "hinted-AvertaStd-Regular", color: "#999999" }}>Account Summary</Text>
                </View>
                <View style={{ borderBottomWidth: 1, marginTop: "2%", marginHorizontal: "3%", borderColor: "#999999" }}></View>

                <View style={{ marginTop: "3%", marginHorizontal: "3%", borderRadius: 10, backgroundColor: "#ffffff" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%" }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: "bold", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>My Profile</Text>
                        </View>
                        <TouchableOpacity onPress={() => props.navigation.navigate("emptyaccount")}>
                            <Image source={ImageIcons.edit} style={{ width: 35, height: 35 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%" }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>First Name</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Semibold", color: "#1A1A1A" }}>Mary</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 0.7, marginTop: "2%", marginHorizontal: "3%", borderColor: "#999999" }}></View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%" }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>Last Name</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Semibold", color: "#1A1A1A" }}>Jones</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 0.7, marginTop: "2%", marginHorizontal: "3%", borderColor: "#999999" }}></View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%" }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>Email</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Semibold", color: "#1A1A1A" }}>maryjones@gmail.com</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 0.7, marginTop: "2%", marginHorizontal: "3%", borderColor: "#999999" }}></View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%", marginBottom: "3%" }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>Number</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Semibold", color: "#1A1A1A" }}>9898989898</Text>
                        </View>
                    </View>
                </View>


                <View style={{ marginTop: "3%", marginHorizontal: "3%", borderRadius: 10, backgroundColor: "#ffffff" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%" }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: "bold", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>My Address</Text>
                        </View>
                        <View>
                            <Image source={ImageIcons.edit} style={{ width: 35, height: 35 }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%" }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>Address line1</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Semibold", color: "#1A1A1A" }}>2501 Stevens Ave</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 0.7, marginTop: "2%", marginHorizontal: "3%", borderColor: "#999999" }}></View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%" }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>City</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Semibold", color: "#1A1A1A" }}>Menniapolis</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 0.7, marginTop: "2%", marginHorizontal: "3%", borderColor: "#999999" }}></View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%" }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>State</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Semibold", color: "#1A1A1A" }}>Chicago</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 0.7, marginTop: "2%", marginHorizontal: "3%", borderColor: "#999999" }}></View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%", marginBottom: "3%" }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>Country</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Semibold", color: "#1A1A1A" }}>USA</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: "3%", marginHorizontal: "3%", borderRadius: 10, backgroundColor: "#ffffff" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%" }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: "bold", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>Payment Details</Text>
                        </View>
                        <TouchableOpacity >
                            <Image source={ImageIcons.edit} style={{ width: 35, height: 35 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%" }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>Payment Type</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Semibold", color: "#1A1A1A" }}>Credit/Debit Card</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 0.7, marginTop: "2%", marginHorizontal: "3%", borderColor: "#999999" }}></View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%" }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>Cashholder Name</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Semibold", color: "#1A1A1A" }}>Maryjones</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 0.7, marginTop: "2%", marginHorizontal: "3%", borderColor: "#999999" }}></View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%" }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>Card Number</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Semibold", color: "#1A1A1A" }}>.... .... .... 7010</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 0.7, marginTop: "2%", marginHorizontal: "3%", borderColor: "#999999" }}></View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%", marginBottom: "3%" }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>Expiry Date</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Semibold", color: "#1A1A1A" }}>10/23</Text>
                        </View>
                    </View>
                </View>


                <View style={{ marginTop: "3%", marginHorizontal: "3%", borderRadius: 10, backgroundColor: "#ffffff", }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%" }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: "bold", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>Account Settings</Text>
                        </View>
                        <View>
                            <Image source={ImageIcons.edit} style={{ width: 35, height: 35 }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%" }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>Payment Details</Text>
                        </View>
                        <View>
                            <Image source={ImageIcons.rightpop} style={{ width: 10, height: 15 }} />
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 0.7, marginTop: "2%", marginHorizontal: "3%", borderColor: "#999999" }}></View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%" }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>Change Password</Text>
                        </View>
                        <View>
                            <Image source={ImageIcons.rightpop} style={{ width: 10, height: 15 }} />
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 0.7, marginTop: "2%", marginHorizontal: "3%", borderColor: "#999999" }}></View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "3%", marginTop: "4%" }}>
                        <View style={{ marginBottom: "3%" }}>
                            <Text style={{ fontSize: 16, fontWeight: "normal", fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}>Delete Account</Text>
                        </View>
                        <View>
                            <Image source={ImageIcons.rightpop} style={{ width: 10, height: 15 }} />
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: "row", marginBottom: '20%', borderRadius: 10, backgroundColor: "#ffffff", marginHorizontal: "3%", marginTop: "3%" }}>
                    <View style={{ marginHorizontal: "3%", marginVertical: "5%" }}>
                        <Image source={ImageIcons.signout} style={{ width: 21, height: 21 }} />
                    </View>
                    <View style={{ marginVertical: "4%" }}>
                        <Text style={{ fontSize: 20, fontFamily: "hinted-AvertaStd-Regular", fontWeight: "bold", color: "#1A1A1A" }}>
                            Sign Out
                        </Text>
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
                                onChangeText={onChangeText1}
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


            <View style={styles.footerView}>

                <View style={styles.maincartviewfooter}>

                    <TouchableOpacity onPress={() => { navigation.navigate('watchlist'); }}>
                        <View >
                            <Image source={ImageIcons.tvicon} style={[styles.home1, { marginTop: 2 }]} />
                            <Text style={styles.customerfoottext}>Live channels</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate('Cart'); }}>
                        <View >
                            <Image source={ImageIcons.cart} style={styles.homecart} />
                            <Text style={styles.customerfoottext}>Cart</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("shop")} >
                        <View >
                            <Image source={ImageIcons.redshop} style={styles.home1} />
                            <Text style={[styles.customertextred, { paddingTop: '1%' }]}>Shop</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate('Search'); }}>
                        <View >
                            <Image source={ImageIcons.searchicon} style={styles.home1} />
                            <Text style={styles.customerfoottext}>Search</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate('Newprofile'); }}>
                        <View >
                            <Image source={ImageIcons.prof} style={styles.home1} />
                            <Text style={[styles.customertext, { paddingTop: '1%' }]}>Profile</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>

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


export default myaccount