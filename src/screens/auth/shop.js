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
import { useTailwind } from 'tailwind-rn';

import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
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
    const tailwind = useTailwind();

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
            <View style={tailwind('flex flex-row mt-[5%] mx-[2%] rounded-[10px]')}>
                <TouchableOpacity onPress={() => { props.navigation.navigate("ProductStore", { productId: item._id, shopId: item._id, shopName: item.shopName }) }}>
                    <View style={tailwind('p-0.5')}>
                        <Image source={{ uri: item.shopImage }} style={{ height: 150, width: deviceWidth / 2.4, borderRadius: 10 }} onPress={() => { props.navigation.navigate("clothing") }} />
                    </View>
                    <View style={tailwind('flex flex-row mt-2.5 justify-between')}>
                        <View style={tailwind('pl-2')}>
                            <Text style={tailwind('text-[#1A1A1A] text-xs font-normal')}>{item.shopName}</Text>
                            <Text style={tailwind('text-[#1A1A1A] text-base font-bold')}>$0</Text>
                            <View style={tailwind('flex flex-row mt-[5px]')}>
                                <Rating
                                    type='custom'
                                    imageSize={15}
                                    ratingCount={5}
                                    ratingColor='#EB5757'
                                    //tintColor='#FFE7E7'
                                    value={starCount}
                                    onFinishRating={(start) => ratingCompleted(start)}
                                    style={tailwind('ml-[2%]')}
                                />
                                <Text style={tailwind('text-sm mx-[2%] text-black font-normal')}>4.0</Text>

                            </View>
                        </View>
                        <View style={tailwind('mr-2')}>
                            <Image source={ImageIcons.Iconlock} style={tailwind('w-[30px] h-[30px]')} />
                            <Image source={ImageIcons.iconheart} style={tailwind('w-[30px] h-[30px] mt-[5px]')} />
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
        return (
            <View>
                <View style={tailwind('flex flex-row ml-2 mt-2')}>
                    <TouchableOpacity>
                        {index == 1 ?
                            <View style={[styles.livec24, { width: 'auto', padding: 10, backgroundColor: '#B80000', height: 'auto' }]}>
                                <Text style={[styles.livec12, { color: '#ffffff' }]}>{item.text}</Text>
                            </View>
                            :
                            <View style={[styles.livec24, { width: 'auto', padding: 10, height: 'auto' }]}>
                                <Text style={styles.livec12}>{item.text}</Text>
                            </View>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={tailwind('flex-1 justify-center')}>
            <StatusBar backgroundColor={showclassName} barStyle="dark-content" translucent={true} />
            <Shopheader />

            <ScrollView onScroll={({ nativeEvent }) => {
                handleScroll(nativeEvent['contentOffset'].y);
            }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={tailwind('bg-white')} >
                <View style={tailwind('mx-[3%] pt-[10%]')}>
                    <Text style={tailwind('text-[26px] text-[#1A1A1A] font-bold')}>Shop</Text>
                </View>
                {/*<View style={{ marginHorizontal: "3%" }}>
                    <Text style={{ fontWeight: "bold", fontFamily: "hinted-AvertaStd-Regular", fontSize: 16, color: "#666666" }}>{props?.getlistshop?.length} products</Text>
        </View>*/}
                <View style={tailwind('w-full')}>
                    <FlatList
                        data={data}
                        renderItem={renderItem1}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />
                </View>

                <View style={tailwind('border-b mt-[8%] mx-[3%] border-[#B6B6B6]')}></View>
                <View style={tailwind('flex flex-row mx-[3%] mt-[5%]')}>
                    <View style={tailwind('bg-[#E6E6E6] rounded-[10px] h-10')}>
                        <Picker
                            selectedValue={selectedValue}
                            style={tailwind('h-[35px] w-[100px]')}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Sort" value="Sort" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>

                    <TouchableOpacity style={tailwind('flex flex-row bg-[#E6E6E6] rounded-[10px] mx-[2%] p-[2%] px-[3%]')}>
                        <Image source={ImageIcons.filter} style={tailwind('w-[17px] h-[19px] mr-2 mt-1')} />
                        <Text style={tailwind('text-base text-[#4D4D4D] font-semibold self-center')}>FILTERS</Text>
                    </TouchableOpacity>
                </View>
                <View style={tailwind('mx-[3%] mb-[90px]')}>
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