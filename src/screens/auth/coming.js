import React, { useRef, useState } from 'react';
import { Text, View,TouchableOpacity,Image,TextInput, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import Footer3 from '../../screens/auth/Footer3';


const coming = (props) => {

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
     const [checked, setChecked] = React.useState('second');

    const [First, onChangeFirst] = React.useState("First name");
    const [Lastname, onChangeLastname] = React.useState("Last name");
    const [Email, onChangeEmail] = React.useState("Email address");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("Phone number");
    const [Street, onChangeStreet] = React.useState("Street address");
    const [Zip, onChangeZip] = React.useState("Zip");
    const [City, onChangeCity] = React.useState("City");
    const [Country, onChangeCountry] = React.useState("Country");

    const [visible, setVisible] = React.useState(false);
    const [isSelected, setSelection] = useState(false);

    const [Paypal, onChangePaypal] = React.useState("Paypal");
    const [Debit, onChangeDebit] = React.useState("Debit Card");

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
    const openpopup = () => {
        setVisible(true)

        }
            const closepopup = () => {
          setVisible(false)
        }
       const containerStyle = {backgroundColor: 'white', padding: '4%',marginHorizontal:'5%',alignItems:'center'};

   

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
        
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7'}} >

             <View style={{marginHorizontal:'3%',paddingTop:'12%'}}>
             <View style={{marginTop:'5%'}}>
             <Text style={styles.comingtext}>Exclusive</Text>
             </View>
             <View style={{marginTop:'2%',flexDirection: 'row',}}>
             <TouchableOpacity  onPress={() => {props.navigation.navigate("upcoming") }}>
                    <View style={{flexDirection: 'row',marginLeft:'2%'}}>
                     <Image source={ImageIcons.ci_radio} />
                     <Text style={styles.recodingtext2}>Upcoming </Text>
                    </View>
             </TouchableOpacity>
                    <View style={{flexDirection: 'row',marginLeft:'3%'}}>
                        <Image source={ImageIcons.ci_radio_filled} />
                        <Text style={styles.recodingtext}>Exclusive </Text> 
                    </View>
                    
                </View>
                <View style={{marginVertical:'3%'}}>
                 <Text style={styles.exclusivetext}>Exclusive DROPS </Text> 
                 <Text style={styles.exclusivetext}>This is an invite-only exclusive merch buying community </Text>
                 <Text style={styles.exclusivetext}>Members get access to buy one-off merch and products from top designers and creatives exclusively </Text>
                 <Text style={styles.exclusivetext}>Be notified of DROPS ahead of schedule</Text>
                 <Text style={styles.exclusivetext}>Grab a seat for DROPS livestreaming shows </Text>
                 <Text style={styles.exclusivetext}> To be a part, you will need to be invited by a currently active member </Text>
                </View>
            
                <View style={{alignItems:'center',marginTop:'20%',marginBottom:'10%'}}>
                    <TouchableOpacity
                        style={styles.TouchableOpacitybrand}
                        activeOpacity = { .5}
                        onPress={() => openpopup()}>
                        <Text style={styles.buttontext}>Get access</Text>
                    </TouchableOpacity>
               </View>
                </View>
                { openpopup  &&
                    <Provider>
                    <Portal>
                    <Modal visible={visible} onDismiss={closepopup} contentContainerStyle={containerStyle}>
                    
                    <Text style={styles.modalcomingtext}>All the Goodies for you</Text>
                    <Text style={styles.modalcomingtext}>Only Exclusive DROPS group members can buy a product </Text>
                    <Text style={styles.modalcomingtext2} >Get invites to exclusive brands merch releases </Text>
                    <Text style={styles.modalcomingtext2} >Get invites to designers and creatives events exclusively </Text>
                    <Text style={styles.modalcomingtext}>A monthly membership fee applies</Text>
                    <Text style={styles.modalcomingtext}>FREE express shipping on all purchases</Text>
                    </Modal>
                    </Portal>
                    </Provider>
                }
                    </ScrollView>
    <View style={styles.footerView}>
         
         <View style={styles.maincartviewfooter}>

         <TouchableOpacity onPress={() => { navigation.navigate('watchlist'); }}>
        <View >
         <Image source={ImageIcons.tvicon}  style={styles.home1} />
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
         <Image source={ImageIcons.shop}  style={styles.footer2img} />
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
         <Text style={styles.footerpadding}>Profile</Text>         
        </View>
        </TouchableOpacity>

        </View>

        </View> 
        </KeyboardAvoidingView>
    )
}


export default coming