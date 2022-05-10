import React, { useRef, useState,useEffect } from 'react';
import { Text, View,Image,TextInput,TouchableOpacity, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import AsyncStorage from '@react-native-community/async-storage';
import CheckBox from '@react-native-community/checkbox';
import { CreditCardInput } from 'react-native-payment-card';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Footer3 from '../../screens/common/Footer3';
  
const addPayment = (props) => {
 
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    useEffect(() => {
        //alert('d')
        props.getprofileuser(props?.loginuserid); 
    }, [])


    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    // Local states
    const [billImgPath, setBillImgPath] = useState("");
    const [retakeFlag, setRetakeFlag] = useState(true);
    const [fromGallery, setFromGallery] = useState(false);

    const [First, onChangeFirst] = React.useState("");
    const [Lastname, onChangeLastname] = React.useState("");
    const [Address, onChangeAddress] = React.useState("");
    const [Address2, onChangeAddress2] = React.useState("");
    const [State, onChangeState] = React.useState("");
    const [Zip, onChangeZip] = React.useState("");
    const [product, onChangeproduct] = React.useState("");
    const [City, onChangeCity] = React.useState("");
    const [Country, onChangeCountry] = React.useState("");

    const [wayToContact, setWayToContact] = useState("Phone");
    const [cardInfo, setCardInfo] = useState();


const PaymentList = () =>{ 
    let values = cardInfo && cardInfo?.values;
    console.log("cardInfo===>", cardInfo)
    if (cardInfo && values) {
        let cardNumber = String(values?.number).replace(/\s/g, '')
        let request = {
            "userId":props?.loginuserid,
            "merchid": "820000000326",
            "expiry": values.expiry,
            "cardNumber": cardNumber.slice(-4),
            "currency": "USD",
            "name":values.name,
            "cvc":values.cvc,
            "cardtype":values.cardtype,
            "postalCode":values.postalCode,
            "type":values.type
        }
        console.log('request',request)
        props.savepaymentaddress(request, props.navigation, "vendor");
        props.getprofileuser(props?.loginuserid);
    }
    
}

const _onChange = (cardInfo) => {
    setCardInfo(cardInfo)
}
const manageretakeFlag = () => {
    if(retakeFlag==true){
        setRetakeFlag(false)
    }else {
        setRetakeFlag(true)
    }
}
 
 
return (
    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}} 
            style={styles.registrationRootscroll}>
    <View style={{flex:1,backgroundColor:'#FFE7E7',paddingBottom:'15%'}}>
        
                <View style={{backgroundColor:'#FFE7E7',}}>
                    <TouchableOpacity onPress={() =>PaymentList() }>
                        <View style={{width:'90%',marginTop:20,marginBotton:20,textAlign:'right'}}>
                            <Text style={[styles.labeltext1]}>Save</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.maincartviewpayment}>
                        <CreditCardInput
                            requiresName
                            requiresCVC
                            requiresPostalCode
                            validColor={"black"}
                            invalidColor={"red"}
                            placeholderColor={"darkgray"}
                            onChange={_onChange}
                        />
                    </View>
                    
                    <View style={styles.maincartviewfooter}>
                        <View style={{width:'30%',justifyContent:'center',marginHorizontal:'3%'}}>
                            <Text style={styles.labeltext}>Remember Card</Text>
                        </View>
                        <View style={{width:'70%',marginLeft:6}}> 
                            <CheckBox
                             checkedColor='black'
                             value={retakeFlag}
                             disabled={false}
                             onChange={() => manageretakeFlag()}
                            />
                        </View>
                    </View>
                </View>
        
    <View style={styles.footerView}>
         
        <View style={styles.maincartviewfooter}>

        <TouchableOpacity onPress={() => { navigation.navigate('watchlist'); }}>
            <View >
                <Image source={ImageIcons.tvicon}  style={[styles.home1,{marginTop:2}]} />
                <Text style={styles.customerfoottext}>Live channels</Text>        
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Cart'); }}>
            <View >
                <Image source={ImageIcons.cart}  style={styles.homecart} />
                <Text style={styles.customerfoottext}>Cart</Text>         
            </View>
        </TouchableOpacity> 

        <TouchableOpacity onPress={() => navigation.navigate("shop")} >
            <View >
                 <Image source={ImageIcons.shop}  style={styles.home1} />
                 <Text style={styles.customerfoottext}>Shop</Text>
             </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Search'); }}>
            <View >
                <Image source={ImageIcons.searchicon}  style={styles.home1} />
                <Text style={styles.customerfoottext}>Search</Text>         
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Newprofile'); }}>
            <View>
                <Image source={ImageIcons.prof}  style={styles.home1} />
                <Text style={[styles.customerfoottext,{paddingTop:'1%'}]}>Profile</Text>         
            </View>
        </TouchableOpacity>

    </View>

     </View>
    </View>
    </KeyboardAwareScrollView>
    )
}

export default addPayment