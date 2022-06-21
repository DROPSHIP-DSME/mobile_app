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
import Moment from 'moment';

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
    const [selectedValue, setSelectedValue] = useState("java");
    const [wayToContact, setWayToContact] = useState("Phone");
    const [showAlert, setshowAlert] = React.useState(false);
    
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
          <View style={{ marginHorizontal: 2, borderRadius: 10, backgroundColor: '#FFF', padding: 15, marginVertical: 5,borderBottomWidth:1,borderBottomColor:'#ccc' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
              <View>
                <Text style={{ fontSize: 14, color: '#1A1A1A', fontFamily: 'AvertaStd-SemiBold' }} >{item?.productId?.productName}</Text>
                <Text style={{ color: '#808080', fontSize: 12, marginTop: 3 }} >{Moment(item.createdAt).format('MMM DD YYYY')}</Text>
              </View>
              <View style={{ marginTop: 5 }}>
                <Text style={{ color: '#2F80ED', fontSize: 12, backgroundColor: '#ADD8E6', paddingTop: 3, height: 25, width: 91, textAlign: 'center', borderRadius: 6, fontWeight: 'bold' }} >{item.status}</Text>
              </View>
    
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
              <View style={{ width: 230, marginVertical: 3 }}>
                <Text style={{ fontSize: 12, color: 'black', }} >Order Number:<Text style={{ fontSize: 12, color: '#2F80ED', fontWeight: 'bold', }} > {item.orderNumber}</Text></Text>
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
            <StatusBar backgroundColor={showclassName} barStyle="dark-content" translucent={true} />
            <Shopheader />

            <ScrollView onScroll={({ nativeEvent }) => {
                handleScroll(nativeEvent['contentOffset'].y);
            }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#f2f2f2' }} >

                <View style={{ flexDirection: "row", marginHorizontal: "4%", marginTop: "9%" }}>
                    <Text style={{ fontSize: 15, fontFamily: "hinted-AvertaStd-Regular", color: "#999999" }}>ACCOUNT SUMMARY /</Text>
                    <Text style={{ fontSize: 15, fontFamily: "hinted-AvertaStd-Regular", color: "#1A1A1A" }}> ORDER HISTORY</Text>

                </View>

                <View style={{ marginHorizontal: "4%", marginTop: '5%' }}>
                    <Text style={{ fontSize: 26, fontFamily: "hinted-AvertaStd-Semibold", }}>Order History</Text>
                </View>

                {/* <View style={{ flexDirection: 'row', marginHorizontal: '4%', marginTop: '5%' }}>
                    <View style={styles.pickerViewshorttodayagain}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 30, width: 120, color: '#4d4d4d', }}
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
                    <View style={[styles.pickerViewshorttodayagain, { marginLeft: '8%', flexDirection: 'row', justifyContent: 'space-around', padding: 4 }]}>
                        <Image source={ImageIcons.filtertoday} style={{ height: 11, width: 11, marginTop: 5 }} />
                        <Text style={{ fontSize: 16, fontFamily: 'hinted-AvertaStd-Regular', textAlign: 'center' }}>FILTERS</Text>
                    </View>
                </View> */}

                <View style={{ backgroundColor: '#ffffff', padding: '4%', width: '92%', borderRadius: 15, marginHorizontal: '3%', marginVertical: '8%' }}>
                    <View style={styles.salesViewTODAY}>
                        <Text style={styles.seriestext}>Order Number</Text>
                        <Text style={styles.seriestext}>Ordered by</Text>
                        <Text style={styles.seriestext}>Email </Text>
                    </View>
                    <View style={{ marginLeft: -10 }}>
                        <FlatList
                            data={props?.getinconeorderlist || []}
                            renderItem={renderItem3}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            horizontal={false}
                        />
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