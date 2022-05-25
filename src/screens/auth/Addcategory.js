import React, { useEffect,useRef, useState } from 'react';
import { Text, View,Image,
    TextInput, ImageBackground,TouchableOpacity,
    ScrollView, Alert,  
    KeyboardAvoidingView,
    Platform,Keyboard} from 'react-native';
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
import Footer2 from '../../screens/auth/Footer2';
import { useValidation } from 'react-native-form-validator';

const Addcategory = (props) => {

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
    const brandId = props?.route?.params?.brandId;
    const [Category, onChangeCategory] = React.useState("");
    const [Lastname, onChangeLastname] = React.useState("");
    const [Email, onChangeEmail] = React.useState("");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("");
    const [Street, onChangeStreet] = React.useState("");
    const [Zip, onChangeZip] = React.useState("");
    const [City, onChangeCity] = React.useState("");
    const [Country, onChangeCountry] = React.useState("");
    const [UserID, setUserID] = useState("");
    const [isLogin, setisLogin] = useState("");
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
    const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: {Category },
    });
    useEffect(() => {
        //alert(brandId)
         getBrandUserId();
         getLoginUserId();
    }, [])

    const getBrandUserId = async () => {
         var getUserId = await AsyncStorage.getItem('UserId');
         setUserID(getUserId);
    }

    const getLoginUserId = async () => {
         var getislogin = await AsyncStorage.getItem('userLogin');
         //alert(getislogin)
         setisLogin(props?.loginuserstatus);
    }

    // Vendor request submission
    const handlecategorySubmit = async () => {
        console.log()
        Keyboard.dismiss();
        validate({
            Category: { required: true },
        }) 
        if (Category !== "") {

            let request = {
                "categoryName":Category,
                "brandId":brandId,
                "userId":props?.loginuserid 
            }
            props.createcategory(request, props.navigation, "vendor",0);
        }
    }

    return (
       
        <View style={{flex:1,backgroundColor:'#FFE7E7'}}>
           
            
            <View style={{marginHorizontal:'3%',marginTop:'4%'}}>
                <View >
                    <TextInput
                    style={styles.inputcategory}  
                    onChangeText={(text) =>onChangeCategory(text)}
                    value={Category}
                     placeholder="Category name"  
                     placeholderTextColor="#999999" 
                    />
                    {isFieldInError('Category') &&
                        <Text style={styles.stringerror}>must be required field</Text>
                    }
                </View>
                <View style={{alignItems:'center',marginTop:100}}>
                    <TouchableOpacity
                        style={styles.TouchableOpacitybrand}
                        activeOpacity = { .5}

                        onPress={() =>handlecategorySubmit() }>
                        <Text style={styles.startbutton}>Create Category</Text>
                    </TouchableOpacity>
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
                 <Image source={ImageIcons.more}  style={styles.footer2img} />
                 <Text style={styles.customertextfooter}>More</Text>         
            </View>
        </TouchableOpacity>

    </View>
   </View>
        </View>
    )
}


export default Addcategory