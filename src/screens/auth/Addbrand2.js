import React, { useEffect,useRef, useState } from 'react';
import { Text, View,TextInput, 
    ImageBackground, ScrollView,
     Alert,  Picker,TouchableOpacity,
      KeyboardAvoidingView,Image,
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
import { RNCamera } from 'react-native-camera';
import ImagePicker from 'react-native-image-crop-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import Footer2 from '../../screens/auth/Footer2';
import { useValidation } from 'react-native-form-validator';

const Addbrand2 = (props) => {

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
    const [billImgPath, setBillImgPath] = useState("");
    const [retakeFlag, setRetakeFlag] = useState(false);
    const [fromGallery, setFromGallery] = useState(false);

    const [Brand, onChangeBrand] = React.useState("");
    const [AboutBrand, onChangeAboutBrand] = React.useState("This is good cosmetics brand");
    const [Email, onChangeEmail] = React.useState("");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("");
    const [Street, onChangeStreet] = React.useState("");
    const [Zip, onChangeZip] = React.useState("");
    const [City, onChangeCity] = React.useState("");
    const [Country, onChangeCountry] = React.useState("");

    const [selectedValue, setSelectedValue] = useState("USA");

    const [UserID, setUserID] = useState("");

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
      state: { billImgPath,Brand, AboutBrand },
    });
    useEffect(() => {
         getBrandUserId();
         props.countrylist();
    }, [])

    const getBrandUserId = async () => {
         var getUserId = await AsyncStorage.getItem('UserId');
         setUserID(getUserId);
    }
    const selectPhoto = async () => {

        ImagePicker.openPicker({
            width: 400,
            cropping: true,
            mediaType: 'photo',
            compressImageQuality: 0.5,
            height: 400,
        }).then(image => {
            if (image?.path) {
                let fileName = image?.path?.split('/').pop();
                let mimeType = image?.path?.split('.').pop();
                let file = {
                    'uri': image?.path,
                    'type': `image/${mimeType}`,
                    'name': fileName
                }
               // setFieldValue("couponImage", file);
                setBillImgPath(file);
            }
        }).catch((error) => {
            console.log("Error in image cropping,", error)
        });

        /*
        let options = {
            mediaType: "photo",
            quality: 0.5,
            maxWidth: 720,
            maxHeight: 906
        }
        launchImageLibrary(options, (res) => {
            console.log("image====>", res?.uri)
            if (res?.uri) {
                ImagePicker.openCropper({
                    path: res?.uri,
                    width: 720,
                    height: 906
                }).then(image => {
                    console.log("image2", image?.path)
                    if (image?.path) {
                       // setFromGallery(true);
                        //setRetakeFlag(!retakeFlag);
                        setBillImgPath(image.path || res?.uri);
                    }
                }).catch((error) => {
                    console.log("Error in image cropping,", error)
                    setBillImgPath(res?.uri);
                })

            }
        })*/
    }
   
    // Vendor request submission
    const handleSendRequestSubmit = async () => {
        Keyboard.dismiss();
        validate({
            Brand: { required: true },
            AboutBrand: { required: true },
            billImgPath: { required: true },
            
        }) 
        if  (Brand !== ""&& AboutBrand !== "" && billImgPath !== "" ) {

            const formData = new FormData();
            formData.append("brandName", Brand);
            formData.append("aboutBrand", AboutBrand);
            formData.append("userId", props?.loginuserid);
            formData.append("brandImage", billImgPath);
            formData.append("country", "USA");
            

            let request = {
                "brandName":Brand,
                "aboutBrand":AboutBrand,
                "userId":props?.loginuserid,
                "brandImage":billImgPath,
                "country":selectedValue
            }
            props.createbrand(formData, props.navigation, "vendor");
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.registrationRoot}>
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7'}} >

             <View style={{marginHorizontal:'3%',marginTop:'4%'}}>
             
              <View>
                    <TextInput
                    style={styles.inputcategory}
                    onChangeText={onChangeBrand}
                    value={Brand}
                     placeholder="Name of the brand"
                     placeholderTextColor="#999999" 
                    />
                    {isFieldInError('Brand') &&
                        <Text style={styles.stringerror}>must be required field</Text>
                    }
                </View>
                <View>
                    <TextInput
                    style={styles.inputabotbrand}
                    onChangeText={(text) =>onChangeAboutBrand(text)}
                    value={AboutBrand}
                     placeholder={"About the brand"}
                    placeholderTextColor="#999999"
                    />
                    {isFieldInError('AboutBrand') &&
                        <Text style={styles.stringerror}>must be required field</Text>
                    }
                </View>
                
                <View style={styles.brandimagetextview}>
                <Text style={styles.brandlogotext}>Add brand logo</Text>
                <View>
            { billImgPath !== "" ? 
                <Image source={{ uri: billImgPath.uri }} style={styles.camimage} />
                :
                <TouchableOpacity onPress={() => selectPhoto()}>
                <Image source={ImageIcons.cam} style={styles.camimage} />
                </TouchableOpacity>
            }
                </View>
                {isFieldInError('billImgPath') &&
                    <Text style={styles.stringerror}>must be required field</Text>
                }
                </View>
                <View style={{alignItems:'center',marginTop:'25%'}}>
                    <TouchableOpacity
                        style={styles.TouchableOpacitybrand}
                        activeOpacity = { .5}

                        onPress={() =>handleSendRequestSubmit() }>
                        <Text style={styles.startbutton}>Add brand</Text>
                    </TouchableOpacity>
               </View>

             </View>
        </ScrollView>
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
    </KeyboardAvoidingView>
    )
}


export default Addbrand2