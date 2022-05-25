import React, { useRef, useState, useEffect } from 'react';
import { Text, View,FlatList,
    TouchableOpacity,Image,
    TextInput, ImageBackground, 
    ScrollView, Alert,   
    KeyboardAvoidingView, Platform,
    Keyboard} from 'react-native';
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
import { RadioButton ,Provider ,Modal, Portal, Button,} from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import {FlatListSlider} from 'react-native-flatlist-slider';
import AsyncStorage from '@react-native-community/async-storage'; 
import AwesomeAlert from 'react-native-awesome-alerts';


const ProductDetails3 = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    // Local states
     const [checked, setChecked] = React.useState('first');
      const [starCount, setstarCount] = useState(3);
    const [First, onChangeFirst] = React.useState("First name");
    const [Lastname, onChangeLastname] = React.useState("Last name");
    const [Email, onChangeEmail] = React.useState("Email address");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("Phone number");
    const [Street, onChangeStreet] = React.useState("Street address");
    const [Zip, onChangeZip] = React.useState("Zip");
    const [City, onChangeCity] = React.useState("City");
    const [Country, onChangeCountry] = React.useState("Country");
    const [UserID, setUserID] = useState("");
    const [IsLogin, setIsLogin] = useState("");
    const [visible, setVisible] = React.useState(false);
    const [showotherAlert, setshowotherAlert] = React.useState(false);
    const [showalertmsg, setshowalertmsg] = React.useState('');
    const [Paypal, onChangePaypal] = React.useState("Paypal");
    const [Debit, onChangeDebit] = React.useState("Debit Card");
    const [showAlert, setshowAlert] = React.useState(false);
    const [wayToContact, setWayToContact] = useState("Phone");
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

     useEffect(() => {
       getBrandUserId();
    }, [])

    const getBrandUserId = async () => {
        var getIsLogin = await AsyncStorage.getItem('userLogin');
        setIsLogin(getIsLogin);
        var getUserId = await AsyncStorage.getItem('UserId');
        setUserID(getUserId);
    }

    const openpopup = () => {
        setVisible(true)

        }
            const closepopup = () => {
          setVisible(false)
        }

        const ratingCompleted = (ratingdata) => {
            console.log('rating',ratingdata)
               if(ratingdata!="" && ratingdata!=undefined){
                setstarCount(ratingdata)  
               }
              
        } 
       const containerStyle = {backgroundColor: 'white', padding: '5%',marginHorizontal:'5%',alignItems:'center'};


    const DATA = [
       {
       text:'.User idea and compact ',
       },
        {
       text:'.Compact, uniform plants ',
       },
        {
       text:'.Flower from November to March ',
       },
        {
       text:'.For best performance position in full sun or seni-shade ',
       },
        {
       text:'.Supplied as a plug plants (approx 6cm), pot on arrival and grow until established',
       },
        {
       text:'.At maturity expect a height and spread of 45cm(9")',
       },
        {
       text:'.Cullinary note: Some parts of these flowers are edible ',
       },
        {
       text:'.Crystallised petals can be ideal decorations for cakes and coolies,or they can be added straight to green salads, for an injection of colour',
       },

     ];
       const images = [
   {
    image:'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    desc: 'Silent Waters in the mountains in midst of Himilayas',
   },
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  ];


    const renderItem = ({ item }) => {
  return(
    <View style={{marginTop:'1%',marginHorizontal:'3%',}}>
     <Text style={styles.accounttext}>{item.text}</Text>
     </View>
  );
}


    const checklogin =  async () => {
        if(props?.loginuserstatus=="1"){
            setshowalertmsg('Please select shop ')
            setshowotherAlert(true)
           props.navigation.navigate("AddStore")
         }else {
            setshowAlert(true)
        }  
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
        
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} >
              <View >
                
                
                <View>
                 <FlatListSlider
                data={images}
                height={330}
                timer={5000}
                onPress={item => console.log(item)}
                contentContainerStyle={{paddingHorizontal: 1}}
                indicatorContainerStyle={{position:'absolute', bottom: 20,left:20}}
                indicatorActiveColor={'#8A8A8A'}
                indicatorInActiveColor={'#ffffff'}
                indicatorActiveWidth={5}
                animation
                />   
                <TouchableOpacity style={{position:'absolute',marginTop:'12%',marginHorizontal:'4%'}} onPress={() => {props.navigation.navigate("Park") }}>
            <Image source={ImageIcons.backIcon}   />
            </TouchableOpacity>     
                </View>
             
            
             <View style={{width:'95%',height:345,borderRadius:5,borderWidth:1,borderColor:'#F2F2F2',marginHorizontal:'3%',}}>
             
              <View>
               <Text style={styles.storetext5}>Beauty brands</Text>
           <Text style={styles.salestext3}>$0</Text>
              </View>
             
             <View >
             <Text style={[styles.viewdegaulletext,{marginVertical:'1%'}]}>Sunt do tempor amet dolore officia veniam excepteur. Aute consequat in non velit exercitation elit irure nostrud aliqua eu fugiat ut deserunt. Aute consequat in non velit exercitation elit irure nostrud aliqua eu fugiat ut deserunt.</Text>
            </View>
            
                <View style={{alignItems:'center',marginTop:'7%'}}>
                    <TouchableOpacity
                        style={styles.TouchableOpacitytext}
                        activeOpacity = { .5}
                        onPress={() => {props.navigation.navigate("") }}>
                        <Text style={styles.homecontinuebutton}>Buy now</Text>
                    </TouchableOpacity>
               </View>
               <View style={{alignItems:'center',marginTop:'4%'}}>
                    <TouchableOpacity onPress={() => { checklogin()  }}
                        style={styles.Touchableselltext}
                        activeOpacity = { .5}
                        >
                        <Text style={styles.sellbutton}>Add to shop</Text>
                    </TouchableOpacity>
                </View>
            </View>

             <View style={{marginVertical:'2%'}}>
                   
                   <View style={styles.amazingtextView}>
                    <Text style={styles.TEXT}>4.0</Text>
                        <Rating
                        type='custom'
                        imageSize={15}
                        ratingCount={5}
                        ratingColor='#EB5757'
                        tintColor='#FFE7E7'
                        onFinishRating={(start) => ratingCompleted(start)}
                        style={{ marginHorizontal:'3%'}}
                        />
                        <Text style={styles.bluepricetext}>0 sold</Text>
                     </View>
                     <View style={styles.amazingtextView}>
                     <Image source={ImageIcons.redeye} style={styles.redeye} />
                     <Text style={styles.TEXT}>Over 0 views todays, so act now</Text>
                     </View>
                </View>
                <View style={styles.amazingtextView}>
                    <View>
                    <Text style={styles.TEXT2}>Shipping</Text>
                    </View>
                    <View style={{width:'77%'}}>
                    <Text style={styles.PRICBLACKTEXT}>$0</Text>
                    <Text style={styles.DELIVERYTEXT}>Estimated delivery time to Africa is 25-40 days</Text>
                    <View style={[styles.orderboxView,{marginVertical:'3%'}]}>
                       <Image source={ImageIcons.chaticon} style={styles.chatimage} />
                       <Text style={styles.chaticontext}>Chat with a rep</Text>
                    </View>
                    </View>
                </View>
                <View style={[styles.amazingtextView,{marginBottom:'5%'}]}>
                    <Image source={ImageIcons.girl} style={styles.girlimg} />
                    <Text style={styles.namebrandtext}>Name of brand {'\n'}
                    <Text style={styles.UNDERlinetext}>View brand</Text></Text>
                </View>
                
               
            </View> 

            { openpopup  &&
                    <Provider>
                    <Portal>
                    <Modal visible={visible} onDismiss={closepopup} contentContainerStyle={containerStyle}>
                    <Image source={ImageIcons.greencart}  />
                    <Text style={styles.produttext}>Added to cart</Text>
                    <Text style={styles.addimagetext}>Product added to your cart successfully</Text>
                    <TouchableOpacity style={styles.modalbutton} 
                    onPress={() => props.navigation.navigate("shop")}>
                    <Text style={styles.modaltouchablitytext2} >Continue Shopping</Text></TouchableOpacity>
                    <TouchableOpacity  
                    onPress={() => props.navigation.navigate("")}>
                    <Text style={[styles.boldhadertext,{marginVertical:'5%'}]}>Go to cart</Text>
                    </TouchableOpacity>
                    </Modal>
                    </Portal>
                    </Provider>
                }         
            </ScrollView>

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

        <AwesomeAlert
          show={showotherAlert}
          showProgress={false}
          title="DROPSHIP"
          message={showalertmsg}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={false}
          cancelText="Close"
          confirmText="Login"
          confirmButtonColor="#E22020"
          onCancelPressed={() => {
            setshowotherAlert(false)
          }}
        />
        
        </KeyboardAvoidingView>
    )
}


export default ProductDetails3