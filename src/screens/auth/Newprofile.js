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
import Footer3 from '../../screens/common/Footer3';
import Shopheader from '../../screens/common/Shopheader';

const Newprofile = (props) => {
 
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
        

    <View style={{flex:1,backgroundColor:'#ffffff'}}> 
        <Shopheader />
        <View style={{marginLeft:'3%',marginTop:'10%',flexDirection:'row'}}>
                <TouchableOpacity > 
                        <Image source={{uri: props?.getprofileuserlist?.profileImage}}  style={{height:100,width:100,borderRadius:70,borderWidth:1, borderColor:'#333333'}} />
                </TouchableOpacity>
             <View style={{marginLeft:'5%',flexDirection:'column',justifyContent:'center'}}>                     
                <Text style={{fontSize:14,fontWeight:'bold',color:'#223263',fontFamily:'SourceSansPro-SemiBold',fontStyle:'normal'}}>{props?.getprofileuserlist?.userName}</Text>
                <Text style={{fontSize:14,color:'#9098B1',fontWeight:'bold',fontFamily:'SourceSansPro-SemiBold',fontStyle:'normal'}}>@{props?.getprofileuserlist?.userName}</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("Editprofiledetail")}>
                    <Text style={styles.edittext}>Edit Profile</Text>
                </TouchableOpacity>
             </View>
        </View>
        <ScrollView style={{backgroundColor:'#f9f9f9',marginTop:'3%',marginBottom:60}}>
        <View style={styles.profileview}>
            <View style={{justifyContent:'center'}}>
                <Text style={styles.paymenttext}>Payment</Text>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate("PaymentList")}>
                <View style={styles.proplusview}>
                    <Text style={styles.plusstext}>+</Text>
                </View>
            </TouchableOpacity>

        </View> 
        <View style={styles.profileview}>
            <View style={{justifyContent:'center'}}>
                <Text style={styles.paymenttext}>Shipping Address</Text>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate("shippinglist")}>
                <View style={styles.proplusview}>
                    <Text style={styles.plusstext}>+</Text>
                </View>
            </TouchableOpacity>
        </View> 
        <View style={styles.profileview}>
            <View style={{justifyContent:'center'}}>
                <Text style={styles.paymenttext}>Orders</Text>
            </View>
            <View style={styles.proplusview}>
                <Text style={styles.noordertext}>No orders yet</Text>
            </View>
        </View>  
        <View style={styles.profileview}>
             <Text style={styles.needtext}>Need help?</Text>
        </View> 
        <View style={styles.profileview2}>
            <View >
             <Text style={styles.feedsendtext}>Send Feedback</Text>
             <Text style={styles.feedsendtext}>FAQ</Text>
             <Text style={styles.feedsendtext}>Terms</Text>
             <Text style={styles.feedsendtext}>Privacy Policy</Text>
            </View>
            <View style={{marginBottom:'8%'}}>
             <TouchableOpacity 
               onPress={() => { props.navigation.navigate("Login") }}> 
                <Text style={styles.logouttext}>LOG OUT</Text>
            </TouchableOpacity>
            </View>
        </View>   
        </ScrollView>
        
    <Footer3 onSelection="5" />
    </View>
    )
}


export default Newprofile