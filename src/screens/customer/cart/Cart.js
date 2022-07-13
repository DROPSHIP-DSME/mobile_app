import React, { useRef, useState,useEffect } from 'react';
import { Text, View,Image,TextInput, ActivityIndicator, ImageBackground, ScrollView,FlatList, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard,StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import { phoneRegExp } from '../../services/helper';
import DropdownField from '../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../components/modals/Loader';
import { Rating ,AirbnbRating} from 'react-native-ratings';
import RnIncrementDecrementBtn  from
'react-native-increment-decrement-button';
import DashedLine from 'react-native-dashed-line';
import Footer3 from '../../screens/auth/Footer3';
import Shopheader from '../../screens/auth/Shopheader';
import Modal from 'react-native-modal';

import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-community/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import tw from 'twrnc';
import Largebutton from '../../components/dropshipbutton/Largebutton';
import Deletebutton from '../../components/pickers/Deletebutton';
import Heartbutton from '../../components/pickers/Heartbutton';


const Cart = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    useEffect(() => {

    }, [])

    useEffect(() => {
       getBrandUserId();
    }, [])

    const getBrandUserId = async () => {
        //alert(props?.loginuserid)
        props.cartdata(props?.loginuserid);
    }

    //Reference
    const [UserID, setUserID] = useState("");
    const [IsLogin, setIsLogin] = useState("");
    // Local states
    const [showAlert, setshowAlert] = React.useState(false);
    const [isVisible, setisVisible] = React.useState(false);
    const [Incval, setIncval] = useState(1);


    const setIncrement = async (Incval,cartId) => {
           props.increcartlist(cartId, Incval);
     };

    const setdeletedata = async (cartId) => {
        setisVisible(true);
        props.deletedata(cartId,props.navigation);
        props.cartdata(props?.loginuserid);
        setTimeout(function(){ setisVisible(false); },3000);
     }


    const checklogin =  async () => {
        if(props?.loginuserstatus=="1"){
           props.navigation.navigate("StoreOwner")
         }else {
            setshowAlert(true)
        }
    }


    const renderItem = ({ item, index }) => {
        return (

       <View style={tw`flex flex-row my-3 mx-5 pt-3 pb-5 border-b-2 border-gray-200`} >
            <View style={tw`bg-gray-200 mr-4`}>
                <Image source={{uri:item.productId?.productImage}}  style={tw`w-30 h-45 rounded-lg`} />
            </View>
            <View>
                <Text style={tw`text-base text-gray-700`}>{item.productId?.productName}</Text>

                <View style={tw`flex-row`}>

                </View>

                <Text style={tw`text-base font-bold mt-3`}>Quantity</Text>
                <View  style={tw`flex-row`} >
                    <View>
                        <RnIncrementDecrementBtn
                        minVal={1}
                        minreq={1}
                        max={99}
                        val={parseInt(item.productQuantity)}
                        styleBtn={{width:30.6,height:28,backgroundColor:'#F3F3F3'}}
                        styleTextInput={{width:38.25,height:28,backgroundColor:'#F3F3F3'}}
                        labelStyle={{fontSize:15,marginTop:'1%',color:'#223263',fontFamily:'hinted-AvertaStd-Regular'}}
                        handleClick={(val)=> setIncrement(val,item._id)}
                        />
                    </View>
                </View>
                <View style={tw`flex-row mt-4 -ml-2 mr-8 items-center`}>
                    <View style={tw`w-8/12 flex-row`}>
                      <Deletebutton onPress={() =>setdeletedata(item._id)} />
                      <Heartbutton onPress={() =>setdeletedata(item._id)} />
                    </View>
                    <View style={tw`flex-row`}>
                      <Text style={tw`text-sm`}>Total </Text>
                      <Text style={tw`text-sm font-bold`}>${item.productId?.productPrice}</Text>
                    </View>
                </View>
            </View>
      </View>

        )
    }

    return (

     <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
     style={styles.registrationRoot}>

      <ScrollView style={{backgroundColor:'#ffffff'}}>

        <View style={tw`pt-1`}>
          <View style={tw`flex flex-row justify-between mt-4 mx-4`} >
            <View style={tw`self-center`}>
                <Text style={tw`text-3xl text-gray-700 font-bold`}>Shopping Bag</Text>
            </View>
        </View>
          <View style={tw`mx-4 my-2`}>
            <Text style={tw`text-sm text-gray-500`}>Added Items</Text>
          </View>


           <Modal
              isVisible={isVisible}
              animationIn='fadeIn'
              animationOut='fadeOut'
              style={{ justifyContent: 'center', alignItems: 'center',padding:0,margin:0 }}
            >
            <ActivityIndicator size="large" color={Colors.WHITE} />
            </Modal>
          <View>
              <FlatList
                  data={props?.cartlistdata1 || []}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
              />

          </View>
        { props?.cartlistdata1?.length>0 ?
            <View style={tw`my-5 mx-4`}>
              <Largebutton text="Check out" onPress={() => { checklogin() }} />
            </View>

        :
          <Text style={tw`text-lg pt-20 text-center`}>No Items added in cart yet</Text>
        }
      </View>
     </ScrollView>



        <Footer3  />

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

export default Cart
