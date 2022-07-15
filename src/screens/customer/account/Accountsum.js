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
import tw from 'twrnc';
import { ArrowRightIcon } from "react-native-heroicons/solid";
import Smallbutton from '../../../components/dropshipbutton/Smallbutton';


const Accountsum = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;


    useEffect(() => {
        props.getAllshop(1);
        props.getselldeshboard(props?.loginuserid);
    }, [])
    useFocusEffect(() => {
        //props.getAllshop(1);
    })



    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;

    //Reference
    const [text1, onChangeText1] = React.useState("");
    const [helppopup, sethelppopup] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    const [showAlert, setshowAlert] = React.useState(false);

    const [showclassName, setshowclassName] = useState("#B80000");
    const handleScroll = (pageYOffset) => {
        if (pageYOffset > 0) {
            setshowclassName('#B80000');
        } else {
            setshowclassName('#B80000');
        }
    }

    const renderItem3 = ({ item, index }) => {
        return (
            <View>

                <TouchableOpacity onPress={() => props.navigation.navigate("Accountorderview")} style={styles.seledataViewTODAYaccountsummary}>

                    <Text style={styles.seriestexttoday}>{item?.totalorder}</Text>
                    <Text style={styles.seriestexttoday}>{item?.totalorder}</Text>
                    <Text style={styles.seriestexttoday}>{item?.totalorder}</Text>
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



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>


            <ScrollView onScroll={({nativeEvent}) => {

                handleScroll(nativeEvent['contentOffset'].y);
            }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#E5E5E5' }} >

                <View style={tw.style('mx-4 pt-3 mb-4')}>
                    <Text style={tw`text-4xl text-red-700 font-bold pt-3 mt-4`}>My Account</Text>
                </View>
                <View style={tw.style('flex flex-row justify-between mx-4 pt-5')}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Account")}>
                        <Text style={tw`text-base font-bold text-gray-400`}>Personal Details</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate("Accountstore")}>
                        <Text style={tw`text-base font-bold text-gray-400`}>My store</Text>
                    </TouchableOpacity>
                    <Text style={tw`text-base font-bold text-gray-800`}>Account Summary</Text>
                </View>


                <View style={tw.style('flex flex-row mx-4 my-2')}>
                  <View style={tw.style('border-b-2 border-gray-500 w-[35%]')}></View>
                  <View style={tw.style('border-b-2 border-gray-500 w-[65%]')}></View>
                </View>

                <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 mt-4')}>
                    <View style={tw.style('py-8 px-3')}>
                        <View style={tw.style('flex flex-row justify-between items-center mb-5')}>
                            <View>
                                <Text style={styles.totalincometodaysale}>Order History</Text>
                            </View>

                            <Smallbutton text="See All" onPress={() => props.navigation.navigate("Accountorderhist")}></Smallbutton>
                        </View>

                        <View style={tw.style('flex flex-row justify-between mx-1 p-4 bg-gray-200 rounded-md')}>
                            <Text style={tw`text-sm text-gray-700`}>Order Number</Text>
                            <Text style={tw`text-sm text-gray-700`}>Ordered by</Text>
                            <Text style={tw`text-sm text-gray-700`}>Email </Text>
                        </View>
                        <View style={{ marginLeft: -10 }}>
                            <FlatList
                                data={props?.getlistselldeshboard || []}
                                renderItem={renderItem3}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                horizontal={false}
                            />
                        </View>
                    </View>
                </View>

                <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 my-5')}>
                  <View style={tw.style('px-2 py-5')}>

                    <View style={tw.style('flex flex-row justify-between mx-4 mt-1 mb-5x')}>
                        <Text style={tw`flex flex-row font-bold text-xl text-gray-900`}>Saved Items</Text>
                    </View>

                    <TouchableOpacity onPress={() => props.navigation.navigate("Accountfav1")} style={tw.style('flex flex-row justify-between mx-4 items-center')}>
                        <View style={tw`my-3`}>
                            <Text style={tw.style('text-base text-gray-800')}>My Favourites</Text>
                        </View>
                        <ArrowRightIcon color="red" fill="gray" size={24} />
                    </TouchableOpacity>
                    <View style={tw.style('border-b mx-4 border-gray-500')}></View>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Accountdata")} style={tw.style('flex flex-row justify-between mx-4 items-center')}>
                        <View style={tw`my-4`}>
                            <Text style={tw.style('text-base text-gray-800')}>Bookmarks</Text>
                        </View>
                        <ArrowRightIcon color="red" fill="gray" size={24} />
                    </TouchableOpacity>
                    <View style={tw.style('border-b mx-4 border-gray-500')}></View>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Accountfollow")} style={tw.style('flex flex-row justify-between mx-4 items-center')}>
                        <View style={tw`my-4`}>
                            <Text style={tw.style('text-base text-gray-800')}>Following</Text>
                        </View>
                          <ArrowRightIcon color="red" fill="gray" size={24} />
                    </TouchableOpacity>
                    <View style={tw.style('border-b mx-4 border-gray-500')}></View>
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


export default Accountsum
