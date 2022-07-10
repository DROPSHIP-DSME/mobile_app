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
import Largebutton from '../../components/dropshipbutton/Largebutton';

const editaddress = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;


    useEffect(() => {
        props.getAllshop(1);
        props.getuseraddress(props?.loginuserid);
        console.log("Addresses-->>", props.getuseraddresslist)
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

    const setdeleteaddress = async (id) => {
        return Alert.alert(
          "Are your sure?",
          "Are you sure you want to remove this address?",
          [
            // The "Yes" button
            {
              text: "Yes",
              onPress: () => {
                    props.deleteaddress(id);
                    setTimeout(function(){ props.getuseraddress(props?.loginuserid); },100);
              },
            },
            // The "No" button
            // Does nothing but dismiss the dialog when tapped
            {
              text: "No",
            },
          ]
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

    const renderItem = ({ item, index }) => {
    return(

    <View style={{marginHorizontal:"3%",backgroundColor:"#FFFFFF",marginTop:"4%",elevation:1,borderRadius:10,padding:6}}>
              {index==0 &&
               <View style={{backgroundColor:"#E6E6E6",width:deviceWidth/3,height:25,paddingTop:"1%",borderRadius:5}}><Text style={{textAlign:"center", color:"#2F80ED",fontSize:12,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular"}}>
                 DEFAULT ADDRESS</Text></View>
            }
              <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%", marginTop:"1%"}}>

                 <Text style={{fontSize:18,fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A",padding:"2%"}}>{item?.firstName} {item?.lastName} {"\n"}{item?.streetAdress}, {item?.phoneNumber}{"\n"}{item?.city}{"\n"}{item?.zipCode}</Text>
               <View style={{flexDirection:'row'}}>

              <TouchableOpacity   onPress={() =>setdeleteaddress(item._id)}>
                 <Image source={ImageIcons.del} style={{width:45,height:40,marginLeft:8}}/>
              </TouchableOpacity>
              </View>

              </View>
          </View>

  );
 }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={tw.style('flex-1 justify-center')}>


            <ScrollView onScroll={({ nativeEvent }) => {
                handleScroll(nativeEvent['contentOffset'].y);
            }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#E5E5E5' }} >


                <View style={tw`my-10 mx-4`}>
                    <Text style={tw`text-2xl font-bold text-gray-800`}>My Addresses</Text>
                </View>


                <View style={{ marginBottom: 30 }}>
                    <FlatList
                        data={props?.getuseraddresslist || []}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <View style={tw`my-8`}>
                  <Largebutton
                    text="Add New Address"
                    onPress={() => props.navigation.navigate("editviewaddress")} />
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


export default editaddress
