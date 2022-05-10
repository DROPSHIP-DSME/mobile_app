import React, { useRef, useState ,useEffect} from 'react';
import { Text, View,Picker,TouchableOpacity,Image,TextInput,StatusBar, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import CheckBox from '@react-native-community/checkbox';
import { v4 as uuid } from "uuid";
import BraintreeDropIn from 'react-native-braintree-dropin-ui';
import Footer3 from '../../screens/common/Footer3';


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
    }, [])

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    // Local states
     const [checked, setChecked] = React.useState('second');

    const [First, onChangeFirst] = React.useState("");
    const [Lastname, onChangeLastname] = React.useState("");
    const [Email, onChangeEmail] = React.useState("");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("");
    const [Street, onChangeStreet] = React.useState("");
    const [Zip, onChangeZip] = React.useState("");
    const [City, onChangeCity] = React.useState("");
    const [Country, onChangeCountry] = React.useState("");
    const [selectedValue, setSelectedValue] = useState("");

    const [visible, setVisible] = React.useState(false);
    const [isSelected, setSelection] = useState(false);

    const [Paypal, onChangePaypal] = React.useState("Paypal");
    const [Debit, onChangeDebit] = React.useState("Debit Card");

    const [wayToContact, setWayToContact] = useState("Phone");
    
    const openpopup = () => {
        setVisible(true)

    }
    const closepopup = () => {
          setVisible(false)
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
            Alert.alert('FirstName is required')
        } else if (Lastname == "") {
            Alert.alert('Lastname is required')
        } else if (Email == "") {
            Alert.alert('email is required')
        } else if (PhoneNumber == "") {
            Alert.alert('PhoneNumber is required')
        } else if (Street == "") {
            Alert.alert('Street is required')
        }  else if (Zip == "") {
            Alert.alert('Zip is required')
        }  else if (City == "") {
            Alert.alert('City is required') 
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

             <View style={{marginHorizontal:'3%',marginTop:'4%'}}>
             <View>
             <Text style={styles.barlotext}>Personal Details</Text>
              </View>
                    <View>
                        <TextInput
                        style={styles.inputcategory}
                        onChangeText={onChangeFirst}
                        value={First}
                         autoCompleteType="off"
                         placeholder="First name"
                         placeholderTextColor="#999999"
                        />
                    </View>
                     <View>
                        <TextInput
                        style={styles.inputcategory}
                        onChangeText={onChangeLastname}
                        value={Lastname}
                         autoCompleteType="off"
                         placeholder="Last name"
                         placeholderTextColor="#999999"
                        />
                    </View>
                     <View>
                        <TextInput
                        style={styles.inputcategory}
                        onChangeText={onChangeEmail}
                        value={Email}
                         autoCompleteType="off"
                         placeholder="Email address"
                         placeholderTextColor="#999999"
                        />
                    </View>
                    
                     <View>
                        <TextInput
                        style={styles.inputcategory}
                        onChangeText={onChangePhoneNumber}
                        value={PhoneNumber}
                         placeholder="Phone number"
                         autoCompleteType="off"
                         keyboardType={'numeric'}
                         maxLength = {10}
                         placeholderTextColor="#999999"
                        />
                    </View>
                </View>
                 <View style={{marginHorizontal:'3%',marginTop:'5%'}}>
                 <View>
             <Text style={styles.barlotext}>Shipping Details</Text>
              </View>
                     <View>
                        <TextInput
                        style={styles.inputcategory}
                        onChangeText={onChangeStreet}
                        value={Street}
                         placeholder="Street address"
                         placeholderTextColor="#999999"
                        />
                    </View>
                     <View>
                        <TextInput
                        style={styles.inputcategory}
                        onChangeText={onChangeZip}
                        value={Zip}
                         placeholder="Zip Code"
                         placeholderTextColor="#999999"
                        />
                    </View>
                     <View>
                        <TextInput
                        style={styles.inputcategory}
                        onChangeText={onChangeCity}
                        value={City}
                        placeholder="City"
                        placeholderTextColor="#999999"
                        />
                    </View>
                     <View style={styles.pickerView}>
                    <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: '90%', borderWidth:1, borderColor:'#333333' }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    > 
                    <Picker.Item label="Select Country" value="" />
                    {props.countrylistdata && props.countrylistdata?.map((item, index) => {
                        return ( 
                         <Picker.Item label={item.name} value={item.name} key={index} />
                        )
                    })}
                    </Picker>
                </View>
                     <View>   
      

    </View>
            <View style={{marginTop:'2%',flexDirection: 'row',marginLeft:'3%'}}>
            <CheckBox
            checkedColor='red'
            value={true}
            disabled={false}
            />
            <Text style={styles.checkboxtext}>Use this address always </Text>
            </View>
                <View style={{marginTop:'5%',}}>
                 <View>
                  <Text style={styles.barlotext}>Payment method</Text>
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
                       
                    <View style={styles.checkboxView}>
                       <Text style={{marginLeft:'2%',alignSelf:'center'}}>Affirm</Text>
                        <TouchableOpacity onPress={() => setChecked('second')}>
                        { checked=='second' ?
                            <Image source={ImageIcons.ci_radio_filled} />
                        :
                            <Image source={ImageIcons.ci_radio} />
                        }
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
                <View style={{alignItems:'center',marginTop:'12%',marginBottom:'22%'}}>
                    <TouchableOpacity
                        style={styles.TouchableOpacitybrand}
                        activeOpacity = { .5}
                        onPress={() => handleSendRequestSubmit()}> 
                        <Text style={styles.buttontext}>Pay {props?.totalcartprice}</Text>
                    </TouchableOpacity>
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