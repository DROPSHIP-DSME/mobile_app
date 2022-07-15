import React, { useRef, useState, useEffect } from 'react';
import { Text, View, Image, FlatList, Dimensions, StatusBar, Picker, TextInput, ImageBackground, TouchableOpacity, ScrollView, Alert, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
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
import AwesomeAlert from 'react-native-awesome-alerts';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { RadioButton, Provider, Modal, Portal, Button, } from 'react-native-paper';
import tw from 'twrnc';
import Largebutton from '../../../components/dropshipbutton/Largebutton';

const editpassword = (props) => {

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
    const [password, onChangeText2] = React.useState("");
    const [confirmPassword, onChangeText3] = React.useState("");
    const [visible, setVisible] = React.useState(false);
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


    const handleRegistrationSubmit = () => {
        Keyboard.dismiss();
        if (password == "" || password.length < 8) {
            Alert.alert('password is required')
        } else if (confirmPassword == "") {
            Alert.alert('confirmPassword is required')
        } else if (confirmPassword !== password) {
            Alert.alert("Password does not match.")
        } else {
            //props.navigation.navigate("Overview")
            let request = {
                "userId": props?.loginuserid,
                "password": password,

            }
            props.updatepassword(request, props.navigation, "user");
        }
    }



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
            props.navigation.navigate("watchlist")
        } else {
            setshowAlert(true)
        }
    }

    const openpopup = () => {
        setVisible(true)

    }

    const closepopup = () => {
        setVisible(false)
    }

    const containerStyle = { backgroundColor: 'white', padding: 15, marginHorizontal: '5%', borderRadius: 10 };

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
            }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#ffffff' }} >

                <View style={tw`mx-4 my-10`}>
                    <Text style={tw`text-2xl font-bold text-gray-800`}>Change Password</Text>
                </View>

                <View style={[tw.style('border-gray-200 rounded-md bg-gray-200 h-14 self-center mt-4 mx-2 justify-center'), { width: deviceWidth / 1.1 }]}>
                    <TextInput
                        placeholder="Old Password"
                        placeholderTextColor="#1a1a1a"
                        paddingLeft={15}
                    />
                </View>

                <View style={[tw.style('border-gray-200 rounded-md bg-gray-200 h-14 self-center mt-4 mx-2 justify-center'), { width: deviceWidth / 1.1 }]}>
                    <TextInput
                        placeholder="New Password"
                        placeholderTextColor="#1a1a1a"
                        paddingLeft={15}
                        onChangeText={onChangeText2}
                        value={password}

                        onSubmitEditing={() => handleRegistrationSubmit()}

                    />
                </View>
                <View style={[tw.style('border-gray-200 rounded-md bg-gray-200 h-14 self-center mt-4 mx-2 justify-center'), { width: deviceWidth / 1.1 }]}>
                    <TextInput
                        placeholder="Confirm New Password"
                        placeholderTextColor="#1a1a1a"
                        paddingLeft={15}
                        onChangeText={onChangeText3}
                        value={confirmPassword}
                        onSubmitEditing={() => handleRegistrationSubmit()}
                    />
                </View>



                <View style={tw`mt-10 mx-4`}>
                <Largebutton
                text="Save Changes"
                onPress={() => { openpopup(), handleRegistrationSubmit() }} />
                </View>

                {openpopup &&
                    <Provider>
                        <Portal>
                            <Modal visible={visible} contentContainerStyle={containerStyle}>

                                <TouchableOpacity style={{ alignItems: "flex-end" }} onPress={() => closepopup()}>
                                    <Image source={ImageIcons.closepopup} style={tw.style('w-9 h-7')} />
                                </TouchableOpacity>
                                <View style={{ marginTop: "10%", alignItems: "center" }}>
                                    <Image source={ImageIcons.righticon} style={{ height: 80, width: 80 }} />
                                </View>
                                <View style={{ marginTop: "3%", alignItems: "center", marginBottom: "10%" }}>
                                    <Text style={{ fontFamily: "hinted-AvertaStd-Regular", fontSize: 18, color: "#1A1A1A" }}>Password changed successfully.
                                    </Text>
                                </View>


                            </Modal>
                        </Portal>
                    </Provider>
                }


            </ScrollView>

            <View style={{ position: 'absolute', zIndex: 2001, right: 20, bottom: 70 }}>
                <TouchableOpacity onPress={() => sethelppopup(true)}>
                    <Image source={ImageIcons.exporthelp} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>
            </View>

            {helppopup == true &&
                <View style={{ flex: 1, backgroundColor: '#ffffff', margin: 20, paddingVertical: 10, borderRadius: 10, zIndex: 4001, position: 'absolute', bottom: '10%' }}>


                    <View style={tw.style('flex flex-row mt-4 mb-3')}>

                        <Text style={tw.style('text-xl font-bold text-[#282828] pl-[5%]')}>Chat with customer support</Text>
                        <TouchableOpacity style={{ position: 'absolute', right: 15, top: 5 }} onPress={() => sethelppopup(false)}>
                            <Image source={ImageIcons.closepopup} style={tw.style('w-12 h-10')} />
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
                            <TextInput style={tw.style('bg-gray-200 rounded-md pl-3 text-xs tracking-[-0.125172px] w-[75%] text-[#878787] font-normal')}
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


export default editpassword
