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
import Editbutton from '../../../components/pickers/Editbutton';
import Deletebutton from '../../../components/pickers/Deletebutton';

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
    const [starCount, setstarCount] = useState(5);
    const [selectedValue, setSelectedValue] = useState("java");
    const [wayToContact, setWayToContact] = useState("Phone");
    const [showAlert, setshowAlert] = React.useState(false);
    const [deletedid, setdeletedid] = React.useState('');


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

    const setdeleteaddress = async (id) => {
        setshowAlert(true);
        setdeletedid(id);
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

    <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 mb-5')}>
      <View style={tw.style('px-2 py-5')}>
       <View style={tw`flex flex-row justify-between`}>
          <View style={tw`min-w-[55%] mx-3`}>
                 {index==0 &&
                  <View style={tw.style('mb-1 items-center px-2.5 py-2 rounded-full bg-blue-100 w-40')}>
                     <Text style={tw.style('text-xs font-medium text-blue-800')}>Default Address</Text>
                  </View>
                  }
                  <View sytle={tw``}>
                    <Text style={tw`text-base text-gray-700 mt-3`}>{item?.firstName} {item?.lastName} {"\n"}{item?.streetAdress}, {item?.phoneNumber}{"\n"}{item?.city}{"\n"}{item?.zipCode}</Text>
                  </View>
          </View>
            <View style={`flex-row justify-between h-40`}>
              <View style={tw`flex-row mr-3`}>
               
                <Deletebutton onPress={() =>setdeleteaddress(item._id)}/>
              </View>
            </View>
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

                <View style={tw`mx-4`}>
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
                message="Are you sure, you want to remove this address?"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Cancel"
                confirmText="Delete"
                confirmButtonColor="#E22020"
                onCancelPressed={() => {
                    setshowAlert(false)
                }}
                onConfirmPressed={() => {
                    setshowAlert(false)
                    props.deleteaddress(deletedid);
                    setTimeout(function(){ props.getuseraddress(props?.loginuserid); },100);
                    
                }}
            />
        </KeyboardAvoidingView>

    )
}


export default editaddress
