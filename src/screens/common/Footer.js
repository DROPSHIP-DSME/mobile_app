import React, { useRef, useState } from 'react';
import { Text, View,Image,TouchableOpacity, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import { useNavigation } from '@react-navigation/native';

const Footer = (props) => {
 
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    const navigation = useNavigation();

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    // Local states
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

    

    return (

        <View style={styles.footerView}>
         
         <View style={styles.maincartview}> 

        <TouchableOpacity onPress={() => navigation.navigate("SearchProduct")} >
         <Image source={ImageIcons.home}  style={styles.home1} />
         <Text style={styles.customertextred}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Cart'); }}>
            <View>
             <Image source={ImageIcons.cart}  style={styles.homecart} />
             <Text style={styles.customertext}>Cart</Text>         
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Livechannel'); }}>
        <View>
         <Image source={ImageIcons.tvicon}  style={[styles.home1,{marginTop:2}]} />
         <Text style={[styles.customertext,{paddingTop:'1%'}]}>Live channels</Text>        
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Store'); }}>
         <View>
         <Image source={ImageIcons.share}  style={styles.home1} />
         <Text style={styles.customertext}>Store</Text>         
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Newprofile'); }}>
         <View>
         <Image source={ImageIcons.prof}  style={styles.home1} />
         <Text style={styles.customertext}>Profile</Text>         
        </View>
        </TouchableOpacity>

        </View>

        </View>

    )
}




export default Footer