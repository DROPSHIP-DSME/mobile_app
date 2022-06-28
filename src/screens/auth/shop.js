import React, { useRef, useState, useEffect } from 'react';
import { Text, View, Image, FlatList, Dimensions, StatusBar, Picker, ImageBackground, TouchableOpacity, ScrollView, Alert, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
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
import Shopheader from '../../screens/auth/Shopheader';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import tw from 'twrnc';
import Sortorder from '../../components/pickers/Sortorder';
import { ChevrondoubleupIcon } from "react-native-heroicons/solid";
import AwesomeAlert from 'react-native-awesome-alerts';
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
    const renderItem = ({ item, index }) => {
        return (
            <View style={tw.style('flex flex-row mt-5 mx-4 rounded-md')}>
                <TouchableOpacity onPress={() => { props.navigation.navigate("ProductStore", { productId: item._id, shopId: item._id, shopName: item.shopName }) }}>
                    <View style={tw.style('p-0.5')}>
                        <Image source={{ uri: item.shopImage }} style={tw.style('h-14 rounded-lg'),{ height: 150, width: deviceWidth / 2.4}} onPress={() => { props.navigation.navigate("clothing") }} />
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
                                <Text style={tw.style('text-sm mx-3 text-black font-normal')}>4.0</Text>

                            </View>
                        </View>
                        <View style={tw.style('mr-2')}>
                            <Image source={ImageIcons.Iconlock} style={tw.style('w-8 h-8')} />
                            <Image source={ImageIcons.iconheart} style={tw.style('w-8 h-8 mt-2')} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    //      const renderItem = ({ item ,index }) => {


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

    const data = [{ text: "ALL" }, { text: "CLOTHING & SHOES" }, { text: "FURNITURE" }, { text: "BEAUTY & HAIR" }, { text: "ELECTRONICS" }]

    const renderItem1 = ({ item, index }) => {
        return(
            <View style={tw.style('flex flex-row ml-4 mt-2')}>
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
            <StatusBar backgroundColor={showclassName} barStyle="dark-content" translucent={true} />

            <Shopheader />

            <ScrollView onScroll={({ nativeEvent }) => {
                handleScroll(nativeEvent['contentOffset'].y);
            }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={tw.style('bg-white')} >
                <View style={tw.style('mx-3 mt-8')}>
                    <Text style={tw.style('text-3xl text-gray-700 font-bold')}>Shop</Text>
                </View>
                {/*<View style={{ marginHorizontal: "3%" }}>
                    <Text style={{ fontWeight: "bold", fontFamily: "hinted-AvertaStd-Regular", fontSize: 16, color: "#666666" }}>{props?.getlistshop?.length} products</Text>
        </View>*/}
                <View style={tw.style('w-full')}>
                    <FlatList
                        data={data}
                        renderItem={renderItem1}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />
                </View>

                <View style={tw.style('border-b mb-4 border-gray-300')}></View>
                <View style={tw.style('flex flex-row mx-4 mt-4')}>

                    <Sortorder />

                    <Sortfilter />

                </View>
                <View style={tw.style('mx-[3%] mb-[90px]')}>
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


export default shop
