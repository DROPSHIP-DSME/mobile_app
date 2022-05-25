import React, { useRef, useState, useEffect } from 'react';
import { Text, View,Image,TextInput, ImageBackground, ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import Footer3 from '../../screens/auth/Footer3';
 
const SaleOnboard = (props) => {
 
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    useEffect(() => {
       // alert(props?.loginuserid)
        props.getprofileuser(props?.loginuserid); 
        
    }, [])

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
    <View style={{flex:1,backgroundColor:'#ffffff',paddingTop:'10%'}}> 
        <View style={styles.groupView}>
            <Image source={ImageIcons.redbox}   />
            <Image source={ImageIcons.sales} style={{position:'absolute',left:"-4%",bottom:10}} />
            <Image source={ImageIcons.totalincome} style={{position:'absolute',right:0}} />
        </View>
        <View style={{marginTop:'15%',marginHorizontal:'3%'}}>
            <Text style={styles.grouptext}>Create live-shops and advertise your products from the comfort of your own home or store.</Text>
        </View>
        <View style={{alignItems:'center',marginTop:'20%'}}>
            <Image source={ImageIcons.bar4}   />
        </View>
        <TouchableOpacity style={styles.skipview} onPress={() => navigation.navigate("Golive")} >
           <Text style={styles.skiptext}>LOGIN</Text>
        </TouchableOpacity>
    </View>
    )
}


export default SaleOnboard