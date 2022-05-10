import React, { useRef, useState } from 'react';
import { Text, View,TouchableOpacity,Image,TextInput, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard,Linking} from 'react-native';
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
 
const Support = (props) => {

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

    const [First, onChangeFirst] = React.useState("First name");
    const [Lastname, onChangeLastname] = React.useState("Last name");
    const [Email, onChangeEmail] = React.useState("Email address");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("Phone number");
    const [Street, onChangeStreet] = React.useState("Street address");
    const [Zip, onChangeZip] = React.useState("Zip");
    const [City, onChangeCity] = React.useState("City");
    const [Country, onChangeCountry] = React.useState("Country");

    const [visible, setVisible] = React.useState(false);

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

    const linkedin=()=>{
        Linking.openURL('https://www.linkedin.com/company/dropship-shop/?viewAsMember=true')
    }

    const instragram=()=>{
        Linking.openURL('https://www.instagram.com/dropship_la/')
    }

    const twitter=()=>{
        Linking.openURL('https://twitter.com/Dropship_app')
    }

    const facebook=()=>{
        Linking.openURL('https://www.facebook.com/dropship')
    }

    const google=()=>{
        Linking.openURL('https://www.google.com/')
    }
    
    const containerStyle = {backgroundColor: 'white', padding: '5%',marginHorizontal:'5%',alignItems:'center'};


    return (
        <View>
        <View style={{ height:'100%',backgroundColor:'#FFE7E7'}}>
            
               <View style={{marginVertical:'3%'}}>
                  <Text style={styles.supporttext}>You can reach out to support on:</Text>
               </View>
               <View style={styles.mobaileView} >
                  <View style={{marginHorizontal:'4%'}}>
                   <Image source={ImageIcons.phonee}  style={styles.phone1} />
                   </View>
                      <View style={{marginHorizontal:'5%'}}>
                            <Text style={styles.phonetext}>Phone</Text>
                            <Text style={styles.numbertext}>+4170000000000</Text>
                      </View>      
               </View>

               <View style={styles.mobaileView} >
                  <View style={{marginHorizontal:'4%'}}>
                   <Image source={ImageIcons.emailing}  style={styles.phone1} />
                   </View>
                     <View style={{marginHorizontal:'5%'}}>
                            <Text style={styles.phonetext}>Email address</Text>
                            <Text style={styles.numbertext}>support@dropship.shopping</Text>
                      </View>      
               </View>
                <View style={{marginTop:'5%',marginHorizontal:'1%'}}>
               <Text style={styles.supporttext}>Our Social Media Pages</Text>
               <Text style={styles.DELIVERYTEXTTITLE}>Follow us on our all social media pages</Text>
               </View>
                 <View style={styles.accountmainview}> 
        <View>
            <TouchableOpacity onPress={() => { google() }}>
                <Image source={ImageIcons.google}  style={styles.google1} />
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={() => { facebook() }}>
                <Image source={ImageIcons.facebook}  style={styles.facebook1} />
            </TouchableOpacity>
        </View>
        <View>
             <TouchableOpacity onPress={() => { instragram() }}>
                <Image source={ImageIcons.message}  style={styles.message1} />
            </TouchableOpacity>
        </View>
        <View>
             <TouchableOpacity onPress={() => { twitter() }}>
                <Image source={ImageIcons.twitter}  style={styles.twitter1} />
            </TouchableOpacity>
        </View>
        <View>  
            <TouchableOpacity onPress={() => { linkedin() }}>
                <Image source={ImageIcons.linkin}  style={styles.linkin1} />
            </TouchableOpacity>
        </View>
        </View>
            
        </View>
 <View style={styles.footerView}>
       <View style={styles.maincartviewfooter}>
       <TouchableOpacity onPress={() => navigation.navigate("Overview")} >
        <View>
         <Image source={ImageIcons.blackhome}  style={styles.footer2img} />
         <Text style={styles.customertextfooter}>Home</Text>
        </View>
        </TouchableOpacity>
 
        <TouchableOpacity onPress={() => navigation.navigate("SearchProduct2")} >
        <View>
         <Image source={ImageIcons.products}  style={styles.footer5img} />
         <Text style={styles.customertextfooter}>Products</Text>         
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("StartRecording",{userId:props?.loginuserid})} >
        <View style={{alignItems:'center'}}>
         <Image source={ImageIcons.cart2}  style={styles.footer3img} />
         <Text style={styles.customertextfooter}>Go Live</Text>        
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Inorder")} >
         <View>
         <Image source={ImageIcons.neworder}  style={styles.footer4img} />
         <Text style={styles.customertextfooter}>Orders</Text>         
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("More")} >
         <View >
         <Image source={ImageIcons.redmore}  style={styles.footer2img} />
         <Text style={styles.customertextfooter2}>More</Text>         
        </View>
        </TouchableOpacity>

        </View>

   </View>
</View>
             
          
    )
}


export default Support