import React, { useRef, useState ,useEffect} from 'react';
import { Text, View,Picker,TouchableOpacity,Image,TextInput,StatusBar, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../../screens/common/styles';
import { Colors, CommonStrings } from '../../../common'
import ImageIcons from '../../../common/ImageIcons'
import InputField from '../../../components/forms/inputField';
import { RoundedButton } from '../../../components/forms/button';
import { phoneRegExp } from '../../../services/helper';
import DropdownField from '../../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../../components/modals/Loader';
import { RadioButton ,Provider ,Modal, Portal, Button,} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import 'react-native-get-random-values';
import { v4 as uuid } from "uuid";
import BraintreeDropIn from 'react-native-braintree-dropin-ui';
import Footer3 from '../../../screens/common/Footer3';
import Fullwidthsortorder from '../../../components/pickers/Fullwidthsortorder';
import AwesomeAlert from '../../../components/modals/AlertModal';
import tw from 'twrnc';
import Largebutton from '../../../components/dropshipbutton/Largebutton';



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

const StoreOwner = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    useEffect(() => {
        props.countrylist();
        props.cartPrice(props?.loginuserid);
        props.getprofileuser(props?.loginuserid);
        props.getuseraddress(props?.loginuserid);
    }, [props?.getprofileuserlist,props?.getuseraddresslist])

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    // Local states
     const [checked, setChecked] = React.useState('second');

    const [First, onChangeFirst] = React.useState(props?.getprofileuserlist?.userName);
    const [Lastname, onChangeLastname] = React.useState(props?.getprofileuserlist?.lastName);
    const [Email, onChangeEmail] = React.useState(props?.getprofileuserlist?.email);
    const [PhoneNumber, onChangePhoneNumber] = React.useState(props?.getprofileuserlist?.phone);
    const [Street, onChangeStreet] = React.useState(props?.getuseraddresslist[0]?.streetAdress);
    const [Zip, onChangeZip] = React.useState(props?.getuseraddresslist[0]?.zipCode);
    const [City, onChangeCity] = React.useState(props?.getuseraddresslist[0]?.city);
    const [Country, onChangeCountry] = React.useState("");
    const [selectedValue, setSelectedValue] = useState("USA");

    const [visible, setVisible] = React.useState(false);
    const [isSelected, setSelection] = useState(false);

    const [Paypal, onChangePaypal] = React.useState("Paypal");
    const [Debit, onChangeDebit] = React.useState("Debit Card");

    const [showotherAlert, setshowotherAlert] = React.useState(false);
    const [showalertmsg, setshowalertmsg] = React.useState('');

        const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const [wayToContact, setWayToContact] = useState("Phone");

    const openpopup = () => {
        setVisible(true)

    }
    const closepopup = () => {
          setVisible(false)
    }

    const updateorderStatus = (itemValue) => {
        setSelectedValue(itemValue)
    }

    const openpayment = () => {
        setChecked('first');
        BraintreeDropIn.show({
          clientToken: 'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklqSXdNVGd3TkRJMk1UWXRjMkZ1WkdKdmVDSXNJbWx6Y3lJNkltaDBkSEJ6T2k4dllYQnBMbk5oYm1SaWIzZ3VZbkpoYVc1MGNtVmxaMkYwWlhkaGVTNWpiMjBpZlEuZXlKbGVIQWlPakUyTkRJM01EVTVNeklzSW1wMGFTSTZJakkyWkdObU5qZzRMV1poTkdRdE5ETXhaaTA0TXpJNExXWTJOVFEyTVdRNU1EVXpOaUlzSW5OMVlpSTZJbkV5ZGpkMGRHaDJPV3Q0T1hOdGFuZ2lMQ0pwYzNNaU9pSm9kSFJ3Y3pvdkwyRndhUzV6WVc1a1ltOTRMbUp5WVdsdWRISmxaV2RoZEdWM1lYa3VZMjl0SWl3aWJXVnlZMmhoYm5RaU9uc2ljSFZpYkdsalgybGtJam9pY1RKMk4zUjBhSFk1YTNnNWMyMXFlQ0lzSW5abGNtbG1lVjlqWVhKa1gySjVYMlJsWm1GMWJIUWlPblJ5ZFdWOUxDSnlhV2RvZEhNaU9sc2liV0Z1WVdkbFgzWmhkV3gwSWwwc0luTmpiM0JsSWpwYklrSnlZV2x1ZEhKbFpUcFdZWFZzZENKZExDSnZjSFJwYjI1eklqcDdJbTFsY21Ob1lXNTBYMkZqWTI5MWJuUmZhV1FpT2lKeE1uWTNkSFJvZGpscmVEbHpiV3A0SW4xOS5takhpMjBsVDc3dVZ5QjNGV083MVMyd25CQXdweXYyQk8yOFRnZ3l1bGJUN2xqaTlhdkYtenR4UndmTkY4czZPS0U1MlhpazUzS1BjQ2YyMHJIYVVZUSIsImNvbmZpZ1VybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy9xMnY3dHRodjlreDlzbWp4L2NsaWVudF9hcGkvdjEvY29uZmlndXJhdGlvbiIsIm1lcmNoYW50QWNjb3VudElkIjoicTJ2N3R0aHY5a3g5c21qeCIsImdyYXBoUUwiOnsidXJsIjoiaHR0cHM6Ly9wYXltZW50cy5zYW5kYm94LmJyYWludHJlZS1hcGkuY29tL2dyYXBocWwiLCJkYXRlIjoiMjAxOC0wNS0wOCIsImZlYXR1cmVzIjpbInRva2VuaXplX2NyZWRpdF9jYXJkcyJdfSwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzL3Eydjd0dGh2OWt4OXNtangvY2xpZW50X2FwaSIsImVudmlyb25tZW50Ijoic2FuZGJveCIsIm1lcmNoYW50SWQiOiJxMnY3dHRodjlreDlzbWp4IiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJ2ZW5tbyI6Im9mZiIsImNoYWxsZW5nZXMiOltdLCJ0aHJlZURTZWN1cmVFbmFibGVkIjp0cnVlLCJhbmFseXRpY3MiOnsidXJsIjoiaHR0cHM6Ly9vcmlnaW4tYW5hbHl0aWNzLXNhbmQuc2FuZGJveC5icmFpbnRyZWUtYXBpLmNvbS9xMnY3dHRodjlreDlzbWp4In0sInBheXBhbEVuYWJsZWQiOnRydWUsInBheXBhbCI6eyJiaWxsaW5nQWdyZWVtZW50c0VuYWJsZWQiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjpmYWxzZSwidW52ZXR0ZWRNZXJjaGFudCI6ZmFsc2UsImFsbG93SHR0cCI6dHJ1ZSwiZGlzcGxheU5hbWUiOiJEcm9wc2hpcCIsImNsaWVudElkIjoiQVRoMUpFUVp0ZXFaaWRKVlFKZHM1dlhENFZxMGN5Smd5RjhXbmRIOWZUTWNMbkhmTU1ZTHhCdXljOGd0M3dUd0hnakFLUTRHT01IN2tJZnoiLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJicmFpbnRyZWVDbGllbnRJZCI6Im1hc3RlcmNsaWVudDMiLCJtZXJjaGFudEFjY291bnRJZCI6ImRyb3BzaGlwIiwiY3VycmVuY3lJc29Db2RlIjoiVVNEIn19',
          merchantIdentifier: 'applePayMerchantIdentifier',
          googlePayMerchantId: 'googlePayMerchantId',
          countryCode: 'US',    //apple pay setting
          currencyCode: 'USD',   //apple pay setting
          merchantName: 'Your Merchant Name for Apple Pay',
          orderTotal:'10',
          googlePay: true,
          applePay: true,
          vaultManager: true,
          payPal: true,
          cardDisabled: false,
          darkTheme: true,
        })
        .then(result => console.log(result))
        .catch((error) => {
            console.log('error',error)
          if (error.code === 'USER_CANCELLATION') {
            // update your UI to handle cancellation
          } else {
            // update your UI to handle other errors
          }
        });
    }


    const containerStyle = {backgroundColor: 'white', padding: '7%',marginHorizontal:'5%',alignItems:'center'};

    // Vendor request submission
    const handleSendRequestSubmit = async () => {
        Keyboard.dismiss();
        if (First == "") {
            setshowotherAlert(true)
            setshowalertmsg('First Name is required')
        } else if (Lastname == "") {
            setshowotherAlert(true)
            setshowalertmsg('Last Name is required')
        } else if (Email == "") {
            setshowotherAlert(true)
            setshowalertmsg('Email is required')
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Email)) {
            setshowotherAlert(true)
            setshowalertmsg('Invalid Email')
        } else if (PhoneNumber == "") {
            setshowotherAlert(true)
            setshowalertmsg('Mobile Number is required')
        } else if (!/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(PhoneNumber)) {
            setshowotherAlert(true)
            setshowalertmsg('Invalid Number')
        } else if (Street == "") {
            setshowotherAlert(true)
            setshowalertmsg('Street Address is required')
        }  else if (Zip == "") {
            setshowotherAlert(true)
            setshowalertmsg('Zip Code is required')
        }  else if (City == "") {
            setshowotherAlert(true)
            setshowalertmsg('City Name is required')
        } else {
            let request = {
                "userId":props?.loginuserid,
                "orderNumber":uuid(),
                "orderStatus":"accepted",
                "orderAmount":props?.totalcartprice,
                "paymentMethod":"cash",
                "orderDate":new Date(),
                "firstName":First,
                "lastName":Lastname,
                "emailaddress":Email,
                "phoneNumber":PhoneNumber,
                "streetAdress":Street,
                "zipCode":Zip,
                "city":City,
                "country":selectedValue
            }
            props.chekout(request, props.navigation, "vendor");
            openpopup()
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
            <StatusBar backgroundColor={'#FFFFFF00'} barStyle="dark-content" translucent={true} />
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#ffffff'}} >

            <AwesomeAlert showotherAlert={showotherAlert} showalertmsg={showalertmsg} onSelect={(checked) => setshowotherAlert(checked)} />
              <View style={tw`my-5 mx-5`}>
                <Text style={tw`text-3xl text-gray-700`}>Checkout</Text>
              </View>

             <View style={tw`mt-3 mx-[2%]`}>
                  <View style={tw`mx-[3%]`}>
                      <Text style={tw`text-lg text-gray-800`}>Personal Details</Text>
                  </View>
                    <View style={tw`mx-4`}>
                        <TextInput
                        style={tw`mt-3 px-5 border-1 border-gray-400 bg-zinc-100 text-gray-800 h-12 rounded-lg`}
                        onChangeText={onChangeFirst}
                        value={First}
                         autoCompleteType="off"
                         placeholder="First name"
                         placeholderTextColor="#000000"
                        />
                    </View>
                     <View style={tw`mx-4`}>
                        <TextInput
                        style={tw`mt-3 px-5 border-1 border-gray-400 bg-zinc-100 text-gray-800 h-12 rounded-lg`}
                        onChangeText={onChangeLastname}
                        value={Lastname}
                         autoCompleteType="off"
                         placeholder="Last name"
                         placeholderTextColor="#000000"
                        />
                    </View>
                     <View style={tw`mx-4`}>
                        <TextInput
                        style={tw`mt-3 px-5 border-1 border-gray-400 bg-zinc-100 text-gray-800 h-12 rounded-lg`}
                        onChangeText={onChangeEmail}
                        value={Email}
                         autoCompleteType="off"
                         placeholder="Email address"
                         placeholderTextColor="#000000"
                        />
                    </View>

                     <View style={tw`mx-4`}>
                        <TextInput
                        style={tw`mt-3 px-5 border-1 border-gray-400 bg-zinc-100 text-gray-800 h-12 rounded-lg`}
                        onChangeText={onChangePhoneNumber}
                        value={PhoneNumber}
                         placeholder="Phone number"
                         autoCompleteType="off"
                         keyboardType={'numeric'}
                         maxLength = {10}
                         placeholderTextColor="#000000"
                        />
                    </View>
                </View>
                 <View style={{marginHorizontal:'3%',marginTop:'5%'}}>
                  <View style={tw`mx-[3%]`}>
                      <Text style={tw`text-lg text-gray-800`}>Shipping Details</Text>
                  </View>
                     <View style={tw`mx-4`}>
                        <TextInput
                        style={tw`mt-3 px-5 border-1 border-gray-400 bg-zinc-100 text-gray-800 h-12 rounded-lg`}
                        onChangeText={onChangeStreet}
                        value={Street}
                         placeholder="Street address"
                         placeholderTextColor="#000000"
                        />
                    </View>
                     <View style={tw`mx-4`}>
                        <TextInput
                        style={tw`mt-3 px-5 border-1 border-gray-400 bg-zinc-100 text-gray-800 h-12 rounded-lg`}
                        onChangeText={onChangeZip}
                        value={Zip}
                         placeholder="Zip Code"
                         placeholderTextColor="#000000"
                        />
                    </View>
                     <View style={tw`mx-4`}>
                        <TextInput
                        style={tw`mt-3 px-5 border-1 border-gray-400 bg-zinc-100 text-gray-800 h-12 rounded-lg`}
                        onChangeText={onChangeCity}
                        value={City}
                        placeholder="City"
                        placeholderTextColor="#000000"
                        />
                    </View>

                       <View style={tw`mt-3 mx-4`}>
                          <Fullwidthsortorder text="Select Country" options={options} onSelect={(checked) => updateorderStatus(checked)}  />
                      </View>
                  <View>


    </View>
            <View style={{marginTop:'2%',flexDirection: 'row',marginLeft:'3%'}}>
            <CheckBox
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        tintColors={'#9E663C'}
                        onCheckColor={'#6F763F'}
                        onFillColor={'#4DABEC'}
                        onTintColor={'#F4DCF8'}
                     />

            <Text style={styles.checkboxtext}>Use this address always </Text>
            </View>
                <View style={{marginTop:'5%',}}>
                 <View style={tw`mx-[3%]`}>
                  <Text style={tw`text-lg text-gray-800`}>Payment method</Text>
                 </View>
                 <View style={{marginTop:'2%',flexDirection: 'row',marginLeft:'3%'}}>
                    <View style={styles.checkboxView}>
                        <TouchableOpacity onPress={() => openpayment()}>
                            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                               <Text style={{marginLeft:'2%',alignSelf:'center'}}>Credit Card</Text>
                                { checked=='first' ?
                                    <Image source={ImageIcons.ci_radio_filled} />
                                :
                                    <Image source={ImageIcons.ci_radio} />
                                }
                            </View>
                         </TouchableOpacity>
                    </View>

                    {/*<View style={styles.checkboxView}>
                       <Text style={{marginLeft:'2%',alignSelf:'center'}}>Affirm</Text>
                        <TouchableOpacity onPress={() => setChecked('second')}>
                        { checked=='second' ?
                            <Image source={ImageIcons.ci_radio_filled} />
                        :
                            <Image source={ImageIcons.ci_radio} />
                        }
                        </TouchableOpacity>
                    </View>*/}
                    </View>
                </View>
                <View style={{alignItems:'center',marginTop:'12%',marginBottom:'22%'}}>

                        <Largebutton text={" Pay $" + props?.totalcartprice} onPress={() => { handleSendRequestSubmit() }} />

               </View>
                </View>
                { openpopup  &&
                    <Provider>
                        <Portal>
                            <Modal visible={visible} onDismiss={closepopup} contentContainerStyle={containerStyle}>
                                <Image source={ImageIcons.sucess} style={styles.sucessimage} />
                                <Text style={styles.Modaltext}>Purchase successful</Text>
                                <Text style={styles.modalsuceestext}>You have successfully the goods in your chart. We will update you as the goods gets dispatched</Text>
                                <TouchableOpacity style={styles.modalbutton} onPress={() => props.navigation.navigate("watchlist")}>
                                    <Text style={styles.modaltouchablitytext}>Continue Shopping</Text>
                                </TouchableOpacity>
                            </Modal>
                        </Portal>
                    </Provider>
                }
                    </ScrollView>
    <Footer3 />
        </KeyboardAvoidingView>
    )
}


export default StoreOwner
