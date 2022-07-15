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
import Largebutton from '../../../components/dropshipbutton/Largebutton';
import Sortorder from '../../../components/pickers/Sortorder';
const options = [
      {
        label: 'USA',
        value: 'USA'
      },
      {
        label: 'India',
        value: 'India'
      },
      {
        label: 'Ghana',
        value: 'Ghana'
      },
      {
        label: 'Canada',
        value: 'Canada'
      }
    ]

const editprofile = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;


    useEffect(() => {
        //props.editUser();
        props.getprofileuser(props?.loginuserid);
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

    const [number, onChangeNumber] = React.useState(props?.getprofileuserlist?.phone);
    const [Email, onChangeEmail] = React.useState(props?.getprofileuserlist?.email);
    const [lastname, onChangelastname] = React.useState(props?.getprofileuserlist?.lastName);
    const [name, onChangeName] = React.useState(props?.getprofileuserlist?.userName);
    const [text1, onChangeText1] = React.useState("");
    const [helppopup, sethelppopup] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState("USA");
    const [showAlert, setshowAlert] = React.useState(false);


    const handleSendRequestSubmit = async () => {
        Keyboard.dismiss();
        if (name == "") {
            Alert.alert('First name is required')
        }else if(lastname ==""){
            Alert.alert('Last name is required')
        }else if (Email == "") {
            Alert.alert('Email is required')
        }else if(number ==""){
             Alert.alert('Phone Number is required')
        } else {
            let request = {
                //"userName":First,
                "phone":number,
                "lastName":lastname,
                "userName":name,
                "fullName":name,
                "email":Email,
                "userId":props?.loginuserid,
                "bio":''
            }
            console.log("request-->>",request)
           props.newprofile(request, props.navigation, "vendor",0);
           setTimeout(function(){
                props.getprofileuser(props?.loginuserid);
                props.navigation.navigate("Account")
            },1000);
        }
    }


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

                <View style={tw`mx-3`}>
                    <Text style={tw.style('text-2xl font-bold mt-8 mb-6 mx-2')}>Edit Profile</Text>
                </View>

                <View style={[tw.style('border-gray-200 rounded-md bg-gray-200 h-14 self-center mt-4 mx-2 justify-center'), { width: deviceWidth / 1.1 }]}>
                    <TextInput
                         placeholder="First Name"
                         placeholderTextColor="#1a1a1a"
                         onChangeText={(name) =>onChangeName(name)}
                         style={{color:'#333333'}}
                         paddingLeft={15}
                         value={name}
                         />

                </View>

                <View style={[tw.style('border-gray-200 rounded-md bg-gray-200 h-14 self-center mt-4 mx-2 justify-center'), { width: deviceWidth / 1.1 }]}>
                    <TextInput
                 placeholder="Last Name"
                 placeholderTextColor="#1a1a1a"
                 onChangeText={(lastname) =>onChangelastname(lastname)}
                 style={{color:'#333333'}}
                 paddingLeft={15}
                 value={lastname}
                 />
                </View>
                <View style={[tw.style('border-gray-200 rounded-md bg-gray-200 h-14 self-center mt-4 mx-2 justify-center'), { width: deviceWidth / 1.1 }]}>
                    <TextInput
                 placeholder="Email Address"
                 placeholderTextColor="#1a1a1a"
                 onChangeText={(Email) =>onChangeEmail(Email)}
                 style={{color:'#333333'}}
                 paddingLeft={15}
                 value={Email}
                 />
                </View>

                <View style={tw.style('flex flex-row mx-5 justify-between mt-4')}>

                    <Sortorder text="Select Country" options={options} onSelect={(checked) => updateorderStatus(checked)} />

                    <View style={tw.style('h-14 ml-2 w-[45%] bg-gray-200 rounded-md')}>
                        <TextInput
                         placeholder="Phone Number"
                         placeholderTextColor="#1a1a1a"
                         onChangeText={(number) =>onChangeNumber(number)}
                         paddingLeft={15}
                         style={{color:'#333333'}}
                         value={number}
                         />
                    </View>
                </View>
                <View style={tw`my-10 mx-5`}>
                  <Largebutton
                  text='Save Changes'
                  onPress={()=>{ handleSendRequestSubmit()}} />
                </View>



            </ScrollView>


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


export default editprofile
