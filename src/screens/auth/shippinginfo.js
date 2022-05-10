import React, { useRef, useState,useEffect } from 'react';
import { Text, View,Image,Picker,TextInput,TouchableOpacity, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import ImagePicker from 'react-native-image-crop-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import CheckBox from '@react-native-community/checkbox';
import { v4 as uuid } from "uuid";
import Footer3 from '../../screens/common/Footer3';
import { useValidation } from 'react-native-form-validator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const shippinginfo = (props) => {
 
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    useEffect(() => {
        //alert('d')
        props.getprofileuser(props?.loginuserid); 
    }, [])


    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    // Local states
    const [billImgPath, setBillImgPath] = useState("");
    const [retakeFlag, setRetakeFlag] = useState(true);
    const [fromGallery, setFromGallery] = useState(false);

    const [First, onChangeFirst] = React.useState("");
    const [Lastname, onChangeLastname] = React.useState("");
    const [Address, onChangeAddress] = React.useState("");
    const [Address2, onChangeAddress2] = React.useState("");
    const [State, onChangeState] = React.useState("");
    const [Zip, onChangeZip] = React.useState("");
    const [product, onChangeproduct] = React.useState("");
    const [City, onChangeCity] = React.useState("");
    const [Country, onChangeCountry] = React.useState("");
    const [selectedValue, setSelectedValue] = useState("");
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
      state: { First, Lastname,Address,Address2,City,State,Zip },
    });
const manageretakeFlag = () => {
    if(retakeFlag==true){
        setRetakeFlag(false)
    }else {
        setRetakeFlag(true)
    }
}
 
    const saveAddshipping = () =>{ 
        Keyboard.dismiss();
        
          validate({
            First: { required: true },
            Lastname: { required: true },
            Address: { required: true },
            Address2: { required: true },
             City: { required: true },
            State: { required: true },
             Zip: { required: true },
            
        })   
        if (First !== "" && Lastname !=="" && Address !== "" && Address2 !=="" && City !=="" && State !=="" && Zip !=="") {
        
        let request = {
                "userId":props?.loginuserid,
                "firstName":First,
                "lastName":Lastname,
                "streetAdress":Address,
                "zipCode":Zip,
                "city":City,
                "country":selectedValue,
                "state":State
            }
            props.saveaddress(request, props.navigation, "vendor");
        }
    }
    
    // Vendor request submission
    const userprofile = async () => {
       
           
        }
return (
    <KeyboardAwareScrollView  contentContainerStyle={{flexGrow: 1}}
        style={styles.registrationRootscroll}>
    <View style={{flex:1,backgroundColor:'#FFE7E7'}}>
        <View>
            <View style={{backgroundColor:'#FFE7E7',}}>
                <TouchableOpacity onPress={() =>saveAddshipping() }>
                    <View style={{width:'90%',marginTop:20,marginBotton:20,textAlign:'right'}}>
                        <Text style={[styles.labeltext1]}>Save</Text>
                    </View>
                </TouchableOpacity>
                <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7',marginVertical:'2%'}} >
                    <View style={styles.maincartviewfooter}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={styles.labeltext}>First Name</Text>
                        </View>
                        <View style={{width:'70%'}}>
                            <TextInput
                             style={styles.inputshipping}
                             onChangeText={(text) => onChangeFirst(text)}
                             value={First}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                            {isFieldInError('First') &&
                                <Text style={styles.stringerror}>must be required field</Text>
                            }
                        </View>
                    </View>
                    <View style={styles.maincartviewfooter}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={styles.labeltext}>Last Name</Text>
                        </View>
                        <View style={{width:'70%'}}>
                            <TextInput
                             style={styles.inputshipping}
                             onChangeText={(text) => onChangeLastname(text)}
                             value={Lastname}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                            {isFieldInError('Lastname') &&
                                <Text style={styles.stringerror}>must be required field</Text>
                            }
                        </View>
                    </View>
                    <View style={styles.maincartviewfooter}>
                        <View style={{width:'30%',justifyContent:'center',}}>
                            <Text style={styles.labeltext}>Country</Text>
                        </View>
                        <View style={{width:'70%',backgroundColor:'#FFF7F7',marginBottom:'2%',borderRadius:5, height:45}}>
                            <Picker
                                selectedValue={selectedValue}
                                style={styles.inputshipping}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                            <Picker.Item label={'USA'} value={'USA'} key={1} />
                            <Picker.Item label={'Ghana'} value={'Ghana'} key={1} />
                            <Picker.Item label={'India'} value={'India'} key={1} />
                            
                            </Picker>
                        </View>
                    </View>
                    <View style={[styles.maincartviewfooter,{marginTop:-5}]}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={styles.labeltext}>Address Line 1</Text>
                        </View>
                        <View style={{width:'70%'}}>
                            <TextInput
                             style={styles.inputshipping}
                             onChangeText={(text) => onChangeAddress(text)}
                             value={Address}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                            {isFieldInError('Address') &&
                                <Text style={styles.stringerror}>must be required field</Text>
                            }
                        </View>
                    </View>
                    <View style={styles.maincartviewfooter}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={styles.labeltext}>Address Line 2</Text>
                        </View>
                        <View style={{width:'70%'}}>
                            <TextInput
                             style={styles.inputshipping}
                             onChangeText={(text) => onChangeAddress2(text)}
                             value={Address2}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                            {isFieldInError('Address2') &&
                                <Text style={styles.stringerror}>must be required field</Text>
                            }
                        </View>
                    </View>
                    <View style={styles.maincartviewfooter}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={styles.labeltext}>City</Text>
                        </View>
                        <View style={{width:'70%'}}>
                            <TextInput
                             style={styles.inputshipping}
                             onChangeText={(text) => onChangeCity(text)}
                             value={City}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                            {isFieldInError('City') &&
                                <Text style={styles.stringerror}>must be required field</Text>
                            }
                        </View>
                    </View>
                    <View style={styles.maincartviewfooter}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={styles.labeltext}>State</Text>
                        </View>
                        <View style={{width:'70%'}}>
                            <TextInput
                             style={styles.inputshipping}
                             onChangeText={(text) => onChangeState(text)}
                             value={State}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                            {isFieldInError('State') &&
                                <Text style={styles.stringerror}>must be required field</Text>
                            }
                        </View>
                    </View>
                    <View style={styles.maincartviewfooter}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={styles.labeltext}>Zip Code</Text>
                        </View>
                        <View style={{width:'70%'}}> 
                            <TextInput
                             style={styles.inputshipping}
                             onChangeText={(text) => onChangeZip(text)}
                             value={Zip}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                            {isFieldInError('Zip') &&
                                <Text style={styles.stringerror}>must be required field</Text>
                            }
                        </View>
                    </View>
                    
                    <View style={[styles.maincartviewfooter,{marginTop:'10%'}]}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={styles.labeltext}>Remember Card</Text>
                        </View>
                        <View style={{width:'70%',marginLeft:6}}> 
                            <CheckBox
                             checkedColor='black'
                             value={retakeFlag}
                             disabled={false}
                             onChange={() => manageretakeFlag()}
                            />
                        </View>
                    </View>
                </ScrollView>
                </View>
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

        <TouchableOpacity onPress={() => { navigation.navigate('Newprofile'); }}>
            <View>
                <Image source={ImageIcons.prof}  style={styles.home1} />
                <Text style={[styles.customerfoottext,{paddingTop:'1%'}]}>Profile</Text>         
            </View>
        </TouchableOpacity>

    </View>

     </View>
    </View>
    </KeyboardAwareScrollView >
    )
}

export default shippinginfo