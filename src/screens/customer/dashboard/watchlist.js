import React, { useRef, useState, useEffect } from 'react';
import { Text, View, Dimensions, TouchableOpacity, Image, TextInput, FlatList, ImageBackground, ScrollView, Alert, KeyboardAvoidingView, Platform, Keyboard, StatusBar } from 'react-native';
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
import { RadioButton, Provider, Modal, Portal, Button, } from 'react-native-paper';
import Footer3 from '../../../screens/common/Footer3';
import { FlatListSlider } from '../../../components/react-native-flatlist-slider';
import { SliderBox } from "react-native-image-slider-box";
import { v4 as uuid } from "uuid";
import AsyncStorage from '@react-native-community/async-storage';
import Video from 'react-native-video';
import { requestMultiplePermisisons } from '../../../services/Permissions'
import moment from 'moment';
import Productstream from '../../../components/product/Productstream';
import tw from 'twrnc';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import { UsersIcon } from "react-native-heroicons/solid";
import { PlayIcon } from "react-native-heroicons/solid";
import { SearchIcon } from "react-native-heroicons/solid";
import { Rating, AirbnbRating } from 'react-native-ratings';
import Searchbox from '../../../common/Searchbox';
import Help from '../../../components/help/Help';


const watchlist = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    // Local states
    const [checked, setChecked] = React.useState('first');
    const userId = props?.route?.params?.userId;
    const [starCount, setstarCount] = useState(5);
    const [First, onChangeFirst] = React.useState("First name");
    const [Lastname, onChangeLastname] = React.useState("Last name");
    const [Email, onChangeEmail] = React.useState("Email address");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("Phone number");
    const [Street, onChangeStreet] = React.useState("Street address");
    const [Zip, onChangeZip] = React.useState("Zip");
    const [City, onChangeCity] = React.useState("City");
    const [Country, onChangeCountry] = React.useState("Country");

    const [visible, setVisible] = React.useState(false);
    const [showAlert, setshowAlert] = React.useState(false);
    const [showotherAlert, setshowotherAlert] = React.useState(false);
    const [text1, onChangeText1] = React.useState("");
    const [showalertmsg, setshowalertmsg] = React.useState('');

    const [Paypal, onChangePaypal] = React.useState("Paypal");
    const [Debit, onChangeDebit] = React.useState("Debit Card");
    const [playvideoURI, setplayvideoURI] = React.useState("");

    const [wayToContact, setWayToContact] = useState("Phone");
    const [showclassName, setshowclassName] = useState("#FFFFFF00");

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

    const handleScroll = (pageYOffset) => {
        if (pageYOffset > 0) {
            setshowclassName('#B80000');
        } else {
            setshowclassName('#FFFFFF00');
        }
    }

    const getBrandUserId = async () => {
        var loginuserid = await AsyncStorage.getItem('UserId');
        if(loginuserid==null || loginuserid==undefined || loginuserid==""){
            await AsyncStorage.setItem('UserId', props?.loginuserid);
        }
    }

    const newtrending = () => {
        props.getalleventlist(1);
        props.getwatchlistproduct(props?.loginuserid);
    }

    const openpopup = (videouri) => {
        setplayvideoURI(videouri)
        setVisible(true)
    }
    const closepopup = () => {
        setVisible(false)
    }

    const containerStyle = { position: 'absolute', top: '10%', width: '100%', backgroundColor: 'white', padding: '1%', marginHorizontal: '1%', alignItems: 'center' };

    // Vendor request submission

    const SHOWDATSA = [
        {
            name: 'All',
            color: '#E6E6E6'
        }
    ]

    const images = [
        /*{
         image:'https://smartops.co.in/images/brandvideo.mp4',
         desc: 'Silent Waters in the mountains in midst of Himilayas',
        },*/
        {
            image: 'https://drp-s3-1.s3.us-east-2.amazonaws.com/GlowBruleeVideo.mp4',
            desc:
                'Glow Brulee',
        },
        {
            image: 'https://drp-s3-1.s3.us-east-2.amazonaws.com/Ikevideo.mp4',
            desc:
                'IKE NARTEY ESSENTIALS',
        },
        {
            image: 'https://drp-s3-1.s3.us-east-2.amazonaws.com/SolrayzVideo.mp4',
            desc:
                'Solrayz Jewelry',
        },
        {
            image: 'https://drp-s3-1.s3.us-east-2.amazonaws.com/TerraMoonVideo.mp4',
            desc:
                'Terra Moon',
        },
        {
            image: 'https://drp-s3-1.s3.us-east-2.amazonaws.com/Video.mp4',
            desc:
                'The Ruby Unicorn',
        },
    ];

    const showConfirmDialog = () => {
        if (props?.loginuserstatus == "1") {
            navigation.navigate('watchlist');
        } else {

            setshowAlert(true)
        }
    };

    useEffect(() => {
        // AsyncStorage.setItem('UserId','');
        //AsyncStorage.setItem('userLogin','');
        getBrandUserId();
        //alert(props?.loginuserid)
        props.getAllproduct(1);
        props.getalleventlist(1);
        props.getwatchlistproduct(props?.loginuserid);
        props.getAllshop(props?.loginuserid, 1);
        props.Brandslist();
        showalldata();

        if (Platform.OS === 'android') requestMultiplePermisisons();
    }, [])



    // const showalldata = (index) => {

    //     if (index == 0) {
    //         alert('0')
    //         props.getAllproduct(1);
    //         props.getalleventlist(1);
    //         props.getwatchlistproduct(props?.loginuserid);

    //     } else if (index == 1) {
    //         alert('1')
    //         props.getalleventlist(1);
    //     } else if (index == 2) {
    //         alert('2')
    //         props.getAllproduct(1);
    //         console.log('newevent', props?.getlistproduct)
    //     } else if (index == 3) {
    //         alert('3')
    //         props.getwatchlistproduct(props?.loginuserid);
    //         console.log('props?.showwatchlistproduct', props?.showwatchlistproduct)
    //     } else if (index == 4) {
    //         alert('list')
    //         props.getalleventlist(1);
    //         console.log('props?.getalleventlist', props?.getalleventdata)
    //     }
    // };
    const [isPress, setIsPess] = React.useState(false);
    const [Data, setData] = React.useState(true);
    const [livestream, setlivestream] = React.useState(false);
    const [product, setproduct] = React.useState(false);
    const [store, setstore] = React.useState(false);
    const [shop, setshop] = React.useState(false);

    const showalldata = () => {
        setlivestream(false);
        setproduct(false);
        setData(true);
        setstore(false);
        setshop(false);
        props.getAllproduct(1);
        props.getalleventlist(1);
        props.Brandslist();
        props.getAllshop(1);
    }
    const Showlivestrem = () => {
        setlivestream(true);
        setproduct(false);
        setData(false);
        setstore(false);
        setshop(false);
        props.getalleventlist(1);

    }
    const Showproduct = () => {
        setlivestream(false);
        setproduct(true);
        setData(false);
        setstore(false);
        setshop(false);
        props.getAllproduct(1);

    }
    const Showstores = () => {
        setlivestream(false);
        setproduct(false);
        setData(false);
        setstore(true);
        setshop(false);
        props.Brandslist();
    }
    const Showshops = () => {
        setlivestream(false);
        setproduct(false);
        setData(false);
        setstore(false);
        setshop(true);
        props.getAllshop(1);

    }

    const DATA = [
        {
            text: 'Beauty brands',
            image: ImageIcons.basket,
            image2: ImageIcons.liveicon,
        },
        {
            text: 'Beauty brands',
            text2: 'Live tomorrow at 10PM',
            image: ImageIcons.clothes,
        },
        {
            text: 'Beauty brands',
            text2: 'Live tomorrow at 10PM',
            image: ImageIcons.basket,
        },
    ];

    const DATA2 = [
        {
            text: 'Beauty brands',
            image: ImageIcons.basket,
            imageicon: ImageIcons.theme3,
            text2: 'Live tomorrow at 10PM',
        },
        {
            text: 'Beauty brands',
            text2: 'Live tomorrow at 10PM',
            image: ImageIcons.clothes,
            imageicon: ImageIcons.theme3,
        },
    ];

    const joinbroadcast = (itemid, startnow, eventtime) => {
        //if (startnow == true){
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
        // } else {
        //     setshowotherAlert(true)
        //     setshowalertmsg('Event will start at '+ moment(eventtime).format('MMM DD, hh:mm A'))
        // }
    };

    const data = [
        {
            text: "Fashion",
        },
        {
            text: "Jewelry",
        },
        {
            text: "Fashion",
        },
        {
            text: "Fashion",
        },
        {
            text: "Fashion",
        },

    ];

    const image = { uri: "https://media.vogue.fr/photos/5d40515bc93b83000833392f/master/w_1920,h_1280,c_limit/020-Sneakers-Encyclopaedia-Vogueint-Jul24-Getty-Images.jpg" };

    const helpbuttonsubmit = async (textval) => {
        if(textval!=''){
            let request = {
                "userId": props?.loginuserid,
                "message": textval,
                "msgDate": new Date()
            }
            props.support(request, props.navigation, "vendor");
        }
    }

    const renderItem1 = ({ item, index }) => {
        return (

            <View style={tw.style('ml-2 mr-2 mt-3')}>
                <TouchableOpacity onPress={() => joinbroadcast(item._id, item.startNow, item.eventdate)}>
                    <View>
                        <Image source={{ uri: item.products[0]?.productImage }} style={tw.style('w-40 h-56 rounded-md')} />
                        <Text style={tw`text-sm text-white absolute bottom-4 left-3 leading-4`}></Text>

                        <View style={tw.style('flex flex-row bg-red-700 w-16 h-6 rounded-lg px-1 absolute top-4 left-2 items-center')}>
                            <Text style={tw.style('px-3 text-sm text-white text-center')}>Live</Text>
                        </View>
                        <View style={tw.style('flex flex-row bg-green-200 w-16 h-6 rounded-lg px-2 items-center absolute top-4 left-[55%]')}>
                            <View style={tw.style('pt-[2%]')}>
                                <UsersIcon color="red" fill="#000000" size={14} />
                            </View>
                            <Text style={tw.style('text-xs text-gray-800 pl-1')}>0</Text>
                        </View>
                    </View>

                    <View style={tw.style('flex flex-row mt-2')}>
                        <View>
                            <Image source={ImageIcons.profileimage} style={tw.style('h-6 w-6 rounded-full')} />
                        </View>
                        <View style={tw.style('pl-2 pt-1')}>
                            <Text style={tw.style('text-gray-500 text-xs')}>{item.products[0]?.productName}</Text>
                        </View>
                    </View>

                </TouchableOpacity>
            </View>
        );
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={tw.style('ml-2 mr-2')}>
                <TouchableOpacity onPress={() => props.navigation.navigate("NameStore", { productId: item._id, userId: item._id, productQuantity: item.productQuantity })}>
                    <View>
                        <Image source={{ uri: item.productImage }} style={tw.style('w-40 h-56 rounded-md')} />
                        <Text style={styles.beautyproduct}></Text>
                        <Text style={styles.uplivetext}>{item.productName}</Text>

                        <View style={tw.style('flex flex-row bg-red-700 w-16 h-6 rounded-lg px-1 absolute top-4 left-2')}>
                            <Text style={tw.style('px-3 text-sm text-white text-center')}>Live</Text>
                        </View>
                        <View style={tw.style('flex flex-row bg-green-200 w-16 h-6 rounded-lg px-2 pt-1 absolute top-4 left-[55%]')}>
                            <View style={tw.style('pt-[2%]')}>
                                <UsersIcon color="red" fill="#000000" size={14} />
                            </View>
                            <Text style={tw.style('text-xs text-gray-800 pl-1')}>0</Text>
                        </View>
                    </View>

                    <View style={tw.style('flex flex-row mt-2')}>
                        <View>
                            <Image source={ImageIcons.profileimage} style={tw.style('h-6 w-6 rounded-full')} />
                        </View>
                        <View style={tw.style('pl-2 pt-1')}>
                            <Text style={tw.style('text-gray-500 text-xs')}>{item.productName}</Text>
                        </View>
                    </View>

                </TouchableOpacity>
            </View>
        );
    }

    // const renderItem2 = ({ item, index }) => {
    //     return (
    //         <View style={{ marginHorizontal: 3 }}>
    //             <Image source={{ uri: item.productId.productImage }} style={styles.imgbasket} />
    //             <Text style={[styles.beautyproduct, { position: 'absolute', top: 210, zIndex: 2001 }]}>{item.productId.productName}</Text>
    //             <View style={{ flexDirection: 'row', position: 'absolute', top: 5, left: '5%' }}>
    //                 <View style={{ borderRadius: 50, position: 'absolute', top: 5, left: 5, backgroundColor: '#E22020' }}>
    //                     <Text style={styles.shorttest1}>Live</Text>
    //                 </View>
    //                 <View style={styl.comingshort1}>

    //                 </View>
    //             </View>
    //             <View style={styl.rowdrop}>
    //                 <View>
    //                     <Image source={ImageIcons.profileimage} style={{ width: 35, height: 35 }} />
    //                 </View>
    //                 <View style={{ paddingTop: 10, paddingLeft: 10 }}>
    //                     <Text style={styl.txt1}>MARTHA STEWART</Text>
    //                 </View>
    //             </View>
    //             <Text style={styl.txt2}></Text>
    //         </View>
    //     );
    // }
    const renderItem2 = ({ item, index }) => {
        console.log("shopdata===>>", item);
        return (
            <View style={tw.style('ml-2 mr-2')}>
                <TouchableOpacity onPress={() => { props.navigation.navigate("ProductStore", { productId: item._id, shopId: item._id, shopName: item.shopName }) }}>
                    <View style={tw.style('p-0.5')}>
                        <Image source={{ uri: item.shopImage }} style={tw.style('w-40 h-56 rounded-md')} onPress={() => { props.navigation.navigate("clothing") }} />
                    </View>
                    <View style={tw.style('flex flex-row mt-2.5 justify-between')}>
                        <View style={tw.style('pl-2')}>
                            <Text style={tw.style('text-[#1A1A1A] text-xs font-normal')}>{item.shopName}</Text>
                            <Text style={tw.style('text-[#1A1A1A] text-base font-bold')}>$0</Text>
                            <View style={tw.style('flex flex-row mt-[5px]')}>
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
                                <Text style={tw.style('text-sm mx-[2%] text-black font-normal')}>4.0</Text>

                            </View>
                        </View>
                        <View style={tw.style('mr-2')}>
                            <Image source={ImageIcons.Iconlock} style={tw.style('w-[30px] h-[30px]')} />
                            <Image source={ImageIcons.iconheart} style={tw.style('w-[30px] h-[30px] mt-[5px]')} />
                        </View>
                    </View>
                </TouchableOpacity>
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

    const renderItem3 = ({ item, index }) => {

        return (
            <View style={{ marginHorizontal: 3 }}>
                <Image source={{ uri: item.productId.productImage }} style={styles.imgbasket} />
                <Text style={[styles.beautyproduct, { position: 'absolute', top: 210, zIndex: 2001 }]}>{item.productId.productName}</Text>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 5, left: '5%' }}>
                    <View style={{ borderRadius: 50, position: 'absolute', top: 5, left: 5, backgroundColor: '#E22020' }}>
                        <Text style={styles.shorttest1}>Live</Text>
                    </View>
                    <View style={styl.comingshort1}>

                    </View>
                </View>
                <View style={styl.rowdrop}>
                    <View>
                        <Image source={ImageIcons.profileimage} style={{ width: 35, height: 35 }} />
                    </View>
                    <View style={{ paddingTop: 10, paddingLeft: 10 }}>
                        <Text style={styl.txt1}>MARTHA STEWART</Text>
                    </View>
                </View>
                <Text style={styl.txt2}></Text>
            </View>
        );
    }

    const renderItem9 = ({ item, index }) => {
        return(
          <View style={tw.style('flex flex-row justify-items-center my-2 px-1 pt-1')}>
                        <TouchableOpacity onPress={() => showalldata()}>
                        {Data ?
                            <View style={tw.style('inline-flex justify-items-center ml-1 mt-2 px-1 pt-1 {text-color:#B80000}}')}>
                                <Text style={tw.style('text-lg text-red-700 mx-2 border-b-2 border-zinc-600')}>All</Text>
                            </View>
                        :
                            <View style={tw.style('inline-flex justify-items-center ml-1 mt-2 px-1 pt-1 {text-color:#E6E6E6}}')}>
                                 <Text style={tw.style('text-zinc-400 mx-2 text-lg')}>All</Text>
                            </View>
                        }
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Showlivestrem()}>
                        {livestream ?
                            <View style={tw.style('inline-flex justify-items-center ml-1 mt-2 px-1 pt-1 {text-color:#B80000}}')}>
                                <Text style={tw.style('text-lg text-red-700 mx-2 border-b-2 border-zinc-600')}>Livestreams</Text>
                            </View>
                        :
                            <View style={tw.style('inline-flex justify-items-center ml-1 mt-2 px-1 pt-1 {text-color:#E6E6E6}}')}>
                                 <Text style={tw.style('text-zinc-400 mx-2 text-lg')}>Livestreams</Text>
                            </View>
                        }
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Showproduct()}>
                        {product ?
                            <View style={tw.style('inline-flex justify-items-center ml-1 mt-2 px-1 pt-1 {text-color:#B80000}}')}>
                                <Text style={tw.style('text-lg text-red-700 mx-2 border-b-2 border-zinc-600')}>Products</Text>
                            </View>
                        :
                            <View style={tw.style('inline-flex justify-items-center ml-1 mt-2 px-1 pt-1 {text-color:#E6E6E6}}')}>
                                 <Text style={tw.style('text-zinc-400 mx-2 text-lg')}>Products</Text>
                            </View>
                        }
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Showstores()}>
                        {store ?
                            <View style={tw.style('inline-flex justify-items-center ml-1 mt-2 px-1 pt-1 {text-color:#B80000}}')}>
                                <Text style={tw.style('text-lg text-red-700 mx-2 border-b-2 border-zinc-600')}>Stores</Text>
                            </View>
                        :
                            <View style={tw.style('inline-flex justify-items-center ml-1 mt-2 px-1 pt-1 {text-color:#E6E6E6}}')}>
                                 <Text style={tw.style('text-zinc-400 mx-2 text-lg')}>Stores</Text>
                            </View>
                        }
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Showshops()}>
                        {shop ?
                            <View style={tw.style('inline-flex justify-items-center ml-1 mt-2 px-1 pt-1 {text-color:#B80000}}')}>
                                <Text style={tw.style('text-lg text-red-700 mx-2 border-b-2 border-zinc-600')}>Shops</Text>
                            </View>
                        :
                            <View style={tw.style('inline-flex justify-items-center ml-1 mt-2 px-1 pt-1 {text-color:#E6E6E6}}')}>
                                 <Text style={tw.style('text-zinc-400 mx-2 text-lg')}>Shops</Text>
                            </View>
                        }
                        </TouchableOpacity>


                    </View>
        );
    }

    const renderItem5 = ({ item, index }) => {
        return (
            <View style={tw.style('ml-2 mr-2')}>
                <TouchableOpacity >
                    <View>
                        <Image source={{ uri: item.brandImage }} style={tw.style('w-40 h-56 rounded-md')} />
                        <Text style={styles.beautyproduct}></Text>
                        <Text style={styles.uplivetext}>{item.productName}</Text>

                        <View style={tw.style('flex flex-row bg-red-700 w-16 h-6 rounded-lg px-1 absolute top-4 left-2')}>
                            <Text style={tw.style('px-3 text-sm text-white text-center')}>Live</Text>
                        </View>
                        <View style={tw.style('flex flex-row bg-green-200 w-16 h-6 rounded-lg px-2 pt-1 absolute top-4 left-[55%]')}>
                            <View style={tw.style('pt-[2%]')}>
                                <UsersIcon color="red" fill="#000000" size={14} />
                            </View>
                            <Text style={tw.style('text-xs text-gray-800 pl-1')}>0</Text>
                        </View>
                    </View>

                    <View style={tw.style('flex flex-row mt-2')}>
                        <View>
                            <Image source={ImageIcons.profileimage} style={tw.style('h-6 w-6 rounded-full')} />
                        </View>
                        <View style={tw.style('pl-2 pt-1')}>
                            <Text style={tw.style('text-gray-500 text-xs')}>{item.brandName}</Text>
                        </View>
                    </View>

                </TouchableOpacity>
            </View>

        );
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
            <StatusBar backgroundColor={showclassName} barStyle="dark-content" translucent={true} />



            <ScrollView onScroll={({ nativeEvent }) => {
                handleScroll(nativeEvent['contentOffset'].y);
            }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#FFFFFF' }} >

            

                <View >
                    <View>
                        <FlatListSlider
                            data={images}
                            height={225}
                            timer={10000}
                            loop={false}
                            contentContainerStyle={{ paddingHorizontal: 0 }}
                            indicatorContainerStyle={{ position: 'absolute', bottom: 20, right: 20 }}
                            indicatorActiveColor={'#FFFFFF'}
                            indicatorInActiveColor={'#8A8A8A'}
                            indicatorActiveWidth={5}
                            animation
                        />
                    </View>


                    <Searchbox
                      onPress={() => props.navigation.navigate("Search")}
                      text="Search for anything" />
                    <View>
                         <FlatList
                            data={SHOWDATSA}
                            renderItem={renderItem9}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                        />
                    </View>

                    {(livestream==true || Data==true) &&
                        <View style={tw.style('ml-2 mt-1')}>
                            <FlatList
                                data={props?.getalleventdata || []}
                                renderItem={renderItem1}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                            />
                        </View>}




                    {(product==true || Data==true) &&
                        <View style={tw.style('ml-2 mt-8')}>
                            <FlatList
                                data={props?.getlistproduct || []}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                            />
                        </View>}

                    <View style={tw.style('flex flex-1 bg-white overflow-hidden h-45 mt-6')}>
                        <ImageBackground source={image} resizeMode="cover" style={tw.style('flex flex-1 justify-center p-6')}>
                            <View style={tw.style('absolute bottom-10 left-3 h-16 w-10/12')}>
                                <Text style={tw.style('text-lg text-white')}>Sneakers Store</Text>
                                <Text style={tw.style('text-sm text-white')}>New Products Released</Text>
                            </View>
                            <View style={tw.style('absolute bottom-3 left-3 w-36 py-2 px-2 rounded-full text-white bg-red-700 items-center')}>
                                <TouchableOpacity style={tw.style('items-center')}
                                    onPress={() => props.navigation.navigate('upcoming')}>
                                    <Text style={tw.style('text-xs text-white')}>Check out store</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>


                    {(store==true || Data==true) &&
                        <View style={tw.style('ml-2 mt-8')}>
                            <FlatList
                                data={props?.Brandlistdata || []}
                                renderItem={renderItem5}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                            />
                        </View>}

                    {(shop==true || Data==true) &&
                        <TouchableOpacity>
                            <View style={tw`ml-2 mt-8`}>
                                <FlatList
                                    data={props?.getlistshop || []}
                                    renderItem={renderItem2}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={true}
                                />
                            </View>
                        </TouchableOpacity>}

                    <View style={tw.style('ml-2 mt-8')}>
                        <FlatList
                            data={props?.getwatchlistproduct || []}
                            renderItem={renderItem3}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                        />
                    </View>

                </View>
            </ScrollView>

            <Help onPress={(text1) => helpbuttonsubmit(text1)} />

            <Footer3 onSelection="1" />
        </KeyboardAvoidingView>
    )
}
export default watchlist;