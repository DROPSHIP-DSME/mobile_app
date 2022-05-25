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
 
const Profilee = (props) => {
 
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
        

       <View style={{flex:1,backgroundColor:'#fce8e8',paddingTop:'7%'}}> 
            
                     <View style={styles.addstoreView}>
                  <Text style={styles.stor2}>Profile</Text>
                   
                </View>


                     <View style={[styles.maincartview,{marginTop:'5%'}]}>
                         
                        <View style={styles.newdirection}>
                           <Image source={ImageIcons.profile} style={styles.profilimg} />
                           <Text style={styles.searchproducttext}>Profile </Text>
                        </View> 
                        <TouchableOpacity  onPress={() => {props.navigation.navigate("ProfileDetail") }}>   
                            <Image source={ImageIcons.rightarrow} style={styles.arrowimg} />
                        </TouchableOpacity>
                     </View>

                     
                     <View style={styles.maincartview}>
                          <View style={styles.newdirection}>
                           <Image source={ImageIcons.earn} style={styles.profilimg} />
                           <Text style={styles.searchproducttext}>Earning </Text>
                           </View> 
                         <TouchableOpacity  onPress={() => {props.navigation.navigate("SalesAnalytic") }}> 
                        <Image source={ImageIcons.rightarrow} style={styles.arrowimg}/>
                        </TouchableOpacity>
                       
                     </View>

                     <View style={styles.maincartview}>
                          <View style={styles.newdirection}>
                           <Image source={ImageIcons.logoutIcon} style={styles.profilimg} />
                           <Text style={styles.searchproducttext}>Logout </Text>
                           </View> 
                         <TouchableOpacity  onPress={() => { props.navigation.navigate("Login") }}> 
                        <Image source={ImageIcons.rightarrow} style={styles.arrowimg}/>
                        </TouchableOpacity>
                       
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

        <TouchableOpacity onPress={() => { navigation.navigate('Profilee'); }}>
         <View>
         <Image source={ImageIcons.redprof}  style={styles.home1} />
         <Text style={[styles.customertextred,{paddingTop:'1%'}]}>Profile</Text>         
        </View>
        </TouchableOpacity>

        </View>

        </View>
     
               </View>
    )
}


export default Profilee