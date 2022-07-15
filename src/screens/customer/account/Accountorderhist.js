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
import Moment from 'moment';
import tw from 'twrnc';
import Sortorder from '../../../components/pickers/Sortorder';

const options = [ { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' },{ label: '5', value: '5' },{ label: '6', value: '6' },{ label: '7', value: '7' },{ label: '8', value: '8' },{ label: '9', value: '9' } ]

const Accountorderhist = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;


    useEffect(() => {
       // props.getAllshop(1);
        props.getincomingtlist(props?.loginuserid);

    }, [])
    useFocusEffect(() => {
        //props.getincomingtlist(props?.loginuserid);
    })


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
    const [selectedValue, setSelectedValue] = useState("1");
    const [wayToContact, setWayToContact] = useState("Phone");
    const [showAlert, setshowAlert] = React.useState(false);

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

    const DATA3 = [
        {
            image: ImageIcons.girlcent,
            text: "GSHM8U00S0004KH ",
            text1: "Amy White ",
            text2: "amywhite@yahoo.com",
        },
        {
            image: ImageIcons.girlcent,
            text: "GSHM8U00S0004KH ",
            text1: "Amy White ",
            text2: "amywhite@yahoo.com",
        },

    ];

    const renderItem4 = ({ item, index }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => props.navigation.navigate("Accountorderview")} style={styles.seledataViewTODAYaccountsummary}>
                    <Text style={styles.seriestexttoday}>{item.text}</Text>
                    <Text style={styles.seriestexttoday}>{item.text1}</Text>
                    <Text style={styles.seriestexttoday}>{item.text2}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const renderItem3 = ({ item }) => {
        return (
          <View style={tw`border-b-2 border-gray-200 pb-6 mx-3 mt-4`}>
            <View style={tw`flex flex-row justify-between`}>
              <View>
                <Text style={tw`text-lg text-gray-900`} >{item?.productId?.productName}</Text>
                <Text style={tw`text-sm text-gray-700`} >{Moment(item.createdAt).format('MMM DD YYYY')}</Text>
              </View>
              <View style={{ marginTop: 5 }}>
                <Text style={tw`items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800`} >{item.status}</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
              <View style={{ width: 230, marginVertical: 3 }}>
                <Text style={tw`text-sm text-gray-900`} >Order Number:<Text style={tw`text-sm text-blue-500`} > {item.orderNumber}</Text></Text>
              </View>
              <View style={{ justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Accountorderview", { orderNumber: item.orderNumber })}>
                  <Image source={ImageIcons.dropDownIcon} style={{ width: 15, height: 15, marginRight: 5 }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )
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
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>


            <ScrollView onScroll={({ nativeEvent }) => {
                handleScroll(nativeEvent['contentOffset'].y);
            }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#f2f2f2' }} >

                <View style={tw`mx-4 mt-[10%] mb-6`}>
                    <Text style={tw`text-2xl text-gray-700 font-bold`}>Order History</Text>
                </View>

                {/* <View style={{ flexDirection: 'row', marginHorizontal: '4%', marginTop: '5%' }}>
                    <View style={styles.pickerViewshorttodayagain}>
                        <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />

                    </View>
                    <View style={[styles.pickerViewshorttodayagain, { marginLeft: '8%', flexDirection: 'row', justifyContent: 'space-around', padding: 4 }]}>
                        <Image source={ImageIcons.filtertoday} style={{ height: 11, width: 11, marginTop: 5 }} />
                        <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Regular', textAlign: 'center' }}>FILTERS</Text>
                    </View>
                </View> */}

                <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 mt-4')}>
                    <View style={tw.style('py-8 px-3')}>
                      <View style={tw.style('flex flex-row justify-between mx-1 p-4 bg-gray-200 rounded-md')}>
                          <Text style={tw`text-sm text-gray-700`}>Order Number</Text>
                          <Text style={tw`text-sm text-gray-700`}>Ordered by</Text>
                          <Text style={tw`text-sm text-gray-700`}>Email </Text>
                      </View>

                      <View style={tw``}>
                          <FlatList
                              data={props?.getinconeorderlist || []}
                              renderItem={renderItem3}
                              keyExtractor={item => item.id}
                              showsHorizontalScrollIndicator={false}
                              horizontal={false}
                          />
                      </View>
                  </View>
                </View>
            </ScrollView>


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


export default Accountorderhist
