import React, { useRef, useState, useEffect } from 'react';
import { Text, View,Image,TextInput, ImageBackground, ScrollView,StatusBar, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
 
const ShoesOnboard = (props) => {
 
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
     <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
             <StatusBar backgroundColor={'#ffffff00'} barStyle="dark-content" translucent={true} />
    <TouchableOpacity onPress={() => navigation.navigate("Onboard")} style={{flex:1,backgroundColor:'#ffffff',paddingTop:'10%'}}> 
        <View style={styles.groupView}>
            <Image source={ImageIcons.redbox}  />
            <Image source={ImageIcons.shoesbox} style={styles.shoesboximg} />
            <Image source={ImageIcons.whitesneaker} style={styles.shoeswhiteimg} />
            <Image source={ImageIcons.like} style={{position:'absolute',width:11,height:10,right:'18%'}} />
            <Image source={ImageIcons.like} style={{position:'absolute',width:11,height:10,right:'14%',top:'6%'}} />
            <View style={{position:'absolute',right:47,marginTop:'6%'}}>
               <Image source={ImageIcons.likecircle}  style={{}}/>
               <Image source={ImageIcons.like}  style={{width:20,height:19,position:'absolute',alignSelf:'center',top:29}}/>
            </View>
        </View>
        <View style={{marginTop:'15%',marginHorizontal:'3%'}}>
            <Text style={styles.grouptext}>Browse through videos and images of different products. Save your favourites.</Text>
        </View>
        <View style={{alignItems:'center',marginTop:'20%'}}>
            <Image source={ImageIcons.bar2}   />
        </View>
        <TouchableOpacity style={styles.skipview} onPress={() => navigation.navigate("Golive")} >
           <Text style={styles.skiptext}>SKIP</Text>
        </TouchableOpacity>
    </TouchableOpacity>
     </KeyboardAvoidingView>
    )
}


export default ShoesOnboard