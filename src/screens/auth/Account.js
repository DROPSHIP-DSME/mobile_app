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
import tw from 'twrnc';
import { ArrowRightIcon } from "react-native-heroicons/solid";
import Editbutton from '../../components/pickers/Editbutton';
import { LogoutIcon } from "react-native-heroicons/outline";
import moment from 'moment';
const Account = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    useEffect(() => {

        //alert(props?.loginuserid)
        props.getprofileuser(props?.loginuserid);
        props.getuseraddress(props?.loginuserid);
        props.getusercard(props?.loginuserid);
        props.getsupportlist(props?.loginuserid);

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


    const handleSendRequestSubmit = async () => {
        let request = {
            "userId": props?.loginuserid,
            "message": text1,
            "msgDate": new Date()
        }
        onChangeText1('');
        props.support(request, props.navigation, "vendor");
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
            style={tw`flex-1 justify-center`}>


            <ScrollView onScroll={({ nativeEvent }) => {
                handleScroll(nativeEvent['contentOffset'].y);
            }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={tw.style('bg-gray-100')} >
                <View style={tw.style('mx-4 pt-3 mb-4')}>
                    <Text style={tw`text-4xl text-red-700 font-bold pt-3 mt-4`}>My Account</Text>
                </View>
                <View style={tw.style('flex flex-row justify-between mx-4 pt-5')}>
                    <Text style={tw`text-base font-bold text-gray-900`}>Personal Details</Text>

                    <TouchableOpacity onPress={() => props.navigation.navigate("Accountstore")}>
                        <Text style={tw`text-base font-bold text-gray-400`}>My store</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Accountsum")}>
                        <Text style={tw`text-base font-bold text-gray-400`}>Account Summary</Text>
                    </TouchableOpacity>
                </View>

                <View style={tw.style('flex flex-row mx-4 my-2')}>
                    <View style={tw.style('border-b-2 border-gray-500 w-[35%]')}></View>
                    <View style={tw.style('border-b-2 border-gray-500 w-[65%]')}></View>
                </View>

                <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 my-5')}>
                  <View style={tw.style('px-2 py-5')}>
                    <View style={tw.style('flex flex-row justify-between mx-4 items-center')}>
                        <View>
                            <Text style={tw`flex flex-row font-bold text-xl text-gray-900`}>My Profile</Text>
                        </View>
                            <Editbutton navigation={props.navigation} page='editprofile'  />
                    </View>

                    <View style={tw.style('flex flex-row justify-between mx-4 mt-4')}>
                        <View>
                            <Text style={tw`text-base font-normal text-gray-900`}>First Name</Text>
                        </View>
                        <View>
                            <Text style={tw`text-base font-bold text-gray-900`}>{props?.getprofileuserlist?.userName}</Text>
                        </View>
                    </View>
                    <View style={tw.style('border-b mt-2 mx-4 border-gray-500')}></View>
                    <View style={tw.style('flex flex-row justify-between mx-4 mt-4')}>
                        <View>
                            <Text style={tw`text-base font-normal text-gray-900`}>Last Name</Text>
                        </View>
                        <View>
                            <Text style={tw`text-base font-bold text-gray-900`}>{props?.getprofileuserlist?.lastName}</Text>
                        </View>
                    </View>
                    <View style={tw.style('border-b mt-2 mx-4 border-gray-500')}></View>
                    <View style={tw.style('flex flex-row justify-between mx-4 mt-4')}>
                        <View>
                            <Text style={tw`text-base font-normal text-gray-900`}>Email</Text>
                        </View>
                        <View>
                            <Text style={tw`text-base font-bold text-gray-900`}>{props?.getprofileuserlist?.email}</Text>
                        </View>
                    </View>
                    <View style={tw.style('border-b mt-2 mx-4 border-gray-500')}></View>
                    <View style={tw.style('flex flex-row justify-between mx-4 mt-4 mb-3')}>
                        <View>
                            <Text style={tw`text-base font-normal text-gray-900`}>Number</Text>
                        </View>
                        <View>
                            <Text style={tw`text-base font-normal text-gray-900`}>{props?.getprofileuserlist?.phone}</Text>
                        </View>
                    </View>
                  </View>
                </View>


                <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 my-5')}>
                  <View style={tw.style('px-2 py-5')}>
                      <View style={tw.style('flex flex-row justify-between mx-4 mt-2')}>
                          <View>
                              <Text style={tw`text-xl font-bold text-gray-900`}>My Address</Text>
                          </View>
                          <Editbutton navigation={props.navigation} page='editaddress' />
                      </View>

                      <View style={tw.style('flex flex-row justify-between mx-4 mt-4')}>
                          <View>
                              <Text style={tw`text-base font-normal text-gray-900`}>Address line1</Text>
                          </View>
                          {(props?.getuseraddresslist && props?.getuseraddresslist?.length > 0) &&
                              <View>
                                  <Text style={tw`text-base font-bold text-gray-900`}>{props?.getuseraddresslist[0]?.streetAdress}</Text>
                              </View>
                          }
                      </View>
                      <View style={tw.style('flex flex-row justify-between mx-4 mt-4')}>
                          <View>
                              <Text style={tw`text-base font-normal text-gray-900`}>Address line2</Text>
                          </View>
                          {(props?.getuseraddresslist && props?.getuseraddresslist?.length > 0) &&
                              <View>
                                  <Text style={tw`text-base font-bold text-gray-900`}>{props?.getuseraddresslist[0]?.phoneNumber}</Text>
                              </View>
                          }
                      </View>
                      <View style={tw.style('border-b mt-2 mx-4 border-gray-500')}></View>
                      <View style={tw.style('flex flex-row justify-between mx-4 mt-4')}>
                          <View>
                              <Text style={tw`text-base font-normal text-gray-900`}>City</Text>
                          </View>
                          {(props?.getuseraddresslist && props?.getuseraddresslist?.length > 0) &&
                              <View>
                                  <Text style={tw`text-base font-bold text-gray-900`}>{props?.getuseraddresslist[0]?.city}</Text>
                              </View>
                          }
                      </View>
                      <View style={tw.style('border-b mt-2 mx-4 border-gray-500')}></View>
                      <View style={tw.style('flex flex-row justify-between mx-4 mt-4')}>
                          <View>
                              <Text style={tw.style('text-base font-normal text-gray-900')}>Zipcode</Text>
                          </View>
                          {(props?.getuseraddresslist && props?.getuseraddresslist?.length > 0) &&
                              <View>
                                  <Text style={tw.style('text-base font-normal text-gray-900')}>{props?.getuseraddresslist[0]?.zipCode}</Text>
                              </View>
                          }
                      </View>
                  </View>
                </View>

                <View style={tw.style('mx-4')}>
                  <View style={tw.style('px-2 py-5')}>
                      <View style={tw.style('flex flex-row justify-between mx-4 mt-4')}>
                          <View>
                              <Text style={tw.style('text-xl font-bold text-gray-900')}>Payment Details</Text>
                          </View>

                      </View>

                      <View style={tw.style('flex flex-row justify-between mx-4 mt-4')}>
                          <View>
                              <Text style={tw.style('text-base font-normal text-gray-900')}>Payment Type</Text>
                          </View>
                          {(props?.getusercardlist && props?.getusercardlist?.length > 0) &&
                              <View>
                                  <Text style={tw.style('text-base font-normal text-gray-900')}>{props?.getusercardlist[0]?.cardtype}</Text>
                              </View>
                          }
                      </View>
                      <View style={tw.style('border-b mt-2 mx-4 border-gray-500')}></View>
                      <View style={tw.style('flex flex-row justify-between mx-4 mt-4')}>
                          <View>
                              <Text style={tw.style('text-base font-normal text-gray-900')}>Cashholder Name</Text>
                          </View>
                          {(props?.getusercardlist && props?.getusercardlist?.length > 0) &&
                              <View>
                                  <Text style={tw.style('text-base font-normal text-gray-900')}>{props?.getusercardlist[0]?.name}</Text>
                              </View>
                          }
                      </View>
                      <View style={tw.style('border-b mt-2 mx-4 border-gray-500')}></View>
                      <View style={tw.style('flex flex-row justify-between mx-4 mt-4')}>
                          <View>
                              <Text style={tw.style('text-base font-normal text-gray-900')}>Card Number</Text>
                          </View>
                          {(props?.getusercardlist && props?.getusercardlist?.length > 0) &&
                              <View>
                                  <Text style={tw.style('text-base font-normal text-gray-900')}>{props?.getusercardlist[0]?.cardNumber}</Text>
                              </View>
                          }
                      </View>
                      <View style={tw.style('border-b mt-2 mx-4 border-gray-500')}></View>
                      <View style={tw.style('flex flex-row justify-between mx-4 mt-4 mb-3')}>
                          <View>
                              <Text style={tw.style('text-base font-normal text-gray-900')}>Expiry Date</Text>
                          </View>
                          {(props?.getusercardlist && props?.getusercardlist?.length > 0) &&
                              <View>
                                  <Text style={tw.style('text-base font-normal text-gray-900')}>{props?.getusercardlist[0]?.expiry}</Text>
                              </View>
                          }
                      </View>
                  </View>
                </View>


                <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4')}>
                  <View style={tw.style('px-2 py-5')}>
                      <View style={tw.style('flex flex-row justify-between mx-4 mt-4 mb-5')}>
                          <View>
                              <Text style={tw.style('text-xl font-bold text-gray-900')}>Account Settings</Text>
                          </View>

                      </View>

                      <TouchableOpacity onPress={() => props.navigation.navigate("Dashsupportacc")} style={tw.style('flex flex-row justify-between mx-4 my-2 items-center')}>
                          <View>
                              <Text style={tw.style('text-base font-normal text-gray-900')}>Customer Support</Text>
                          </View>
                          <View>
                              <ArrowRightIcon color="red" fill="gray" size={24} />
                          </View>
                      </TouchableOpacity>
                      <View style={tw.style('border-b mt-2 mx-4 border-gray-500')}></View>
                      <TouchableOpacity onPress={() => props.navigation.navigate("editpassword")} style={tw.style('flex flex-row justify-between mx-4 my-2 items-center')}>
                          <View>
                              <Text style={tw.style('text-base font-normal text-gray-900')}>Change Password</Text>
                          </View>
                          <View>
                              <ArrowRightIcon color="red" fill="gray" size={24} />
                          </View>
                      </TouchableOpacity>
                      <View style={tw.style('border-b mt-2 mb-1 mx-4 border-gray-500')}></View>
                      <TouchableOpacity onPress={() => props.navigation.navigate("deletaccount")} style={tw.style('flex flex-row justify-between mx-4 my-2 items-center')}>
                          <View style={tw.style('mb-3')}>
                              <Text style={tw.style('text-base font-normal text-gray-900')}>Delete Account</Text>
                          </View>
                          <View>
                              <ArrowRightIcon color="red" fill="gray" size={24} />
                          </View>
                      </TouchableOpacity>
                      <View style={tw.style('border-b mx-4 border-gray-500')}></View>
                  </View>
                </View>

                <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 mt-8 mb-20')}>
                  <View style={tw.style('px-2 py-1')}>
                    <View style={tw.style('flex flex-row rounded-md bg-white items-center')}>
                        <View style={tw.style('mx-4 my-4')}>
                            <LogoutIcon color="gray" fill="white" size={24} />
                        </View>

                        <View style={tw.style('my-4')}>
                            <TouchableOpacity onPress={() => props.navigation.navigate("Golive")}>
                                <Text style={tw.style('text-xl font-bold text-gray-900')}>
                                    Sign Out
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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


export default Account
