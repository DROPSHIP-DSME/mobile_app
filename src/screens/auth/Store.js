import React, { useRef, useState } from 'react';
import { Text, View,Image, ImageBackground,TouchableOpacity, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
const Store = (props) => {

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
        <View style={{flex:1,backgroundColor:'#FFE7E7',}}>
        

            <View>
                  <Image source={ImageIcons.store}  style={styles.store1} />
            </View>
           <Text style={styles.storetext}>You do not have a Shop</Text>

                   <TouchableOpacity style={styles.StoreTouchability}
                   onPress={() => props.navigation.navigate("CreateStore")}>
                        <Text style={styles.storeboldtext}>Create a Shop</Text> 
                    </TouchableOpacity>  

        
        <View style={styles.footerView}>
            <View style={styles.maincartviewfooter}>
               <TouchableOpacity onPress={() => { navigation.navigate('watchlist'); }}>
                    <View>
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
                         <Image source={ImageIcons.redshop}  style={styles.home1} />
                         <Text style={[styles.customertextred,{paddingTop:'1%'}]}>Shop</Text>
                     </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('Search'); }}>
                    <View >
                         <Image source={ImageIcons.searchicon}  style={styles.home1} />
                         <Text style={styles.customerfoottext}>Search</Text>         
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('Newprofile'); }}>
                     <View >
                         <Image source={ImageIcons.prof}  style={styles.home1} />
                         <Text style={styles.customertext}>Profile</Text>         
                    </View>
                </TouchableOpacity>

            </View>
        </View>
        
    </View>


        
    )
}


export default Store