import React, { useRef, useState } from 'react';
import { Text, View,Image,TouchableOpacity,TextInput, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../screens/common/styles';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import { phoneRegExp } from '../../services/helper';
import DropdownField from '../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../components/modals/Loader';
import { useNavigation } from '@react-navigation/native';
import { useValidation } from 'react-native-form-validator';
import tw from 'twrnc';
import AwesomeAlert from '../../components/modals/AlertModal';


const Verification = (props) => {
 
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    const navigation = useNavigation();

    //Reference
   
    // Local states
    const [hide, setHide] = React.useState(false)
    const [show, setShow] = React.useState(false)
    const [code, setCode] = React.useState("123456");
    const [showotherAlert, setshowotherAlert] = React.useState(false);
    const [showalertmsg, setshowalertmsg] = React.useState('');

   const [phonenumber, onChangeText1] = React.useState("");
    

    const handleRegistrationSubmit = () => {
        Keyboard.dismiss();
        if (phonenumber == "") {
            setshowotherAlert(true)
            setshowalertmsg('Mobile Number is required')
        }else if (!/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(phonenumber)) {
            setshowotherAlert(true)
            setshowalertmsg('Invalid Number')
        }else{
            setShow('true');
            setHide(true);  
        }
    }

    const handleRegistrationSubmit1 = () => {
        Keyboard.dismiss();
        if(code!='123456'){
            setshowotherAlert(true)
            setshowalertmsg('Code is invalid')
        }else {
            props.navigation.navigate("Codeconfirm");
        }
    }

    return (
       <View style={{backgroundColor:'#ffffff',flex:1}}>
        
        
          <View style={{alignItems:'center',marginTop:'18%'}}>
              <Image source={ImageIcons.logored_1} style={styles.setlogonewdatarow}  />
          </View>

        <AwesomeAlert showotherAlert={showotherAlert} showalertmsg={showalertmsg} onSelect={(checked) => setshowotherAlert(checked)} />

        <View>
            <Text style={styles.headingTextfrgt}>Confirm Phone Number</Text>
        </View>
    { show == false && 
        <View>
             <View>
                <Text style={styles.headingText1today}>To authorise your account, we will send a code to the mobile number entered below. Please enter your mobile number.</Text>
            </View>
            <View style={tw.style('flex mt-2 my-4')}>
                <TextInput  
                style={tw.style('mx-5 pl-3 sm:text-sm text-gray-700 border-gray-300 bg-gray-200 rounded-lg')}
                placeholder="Mobile Number"
                placeholderTextColor="#999999" 
                onChangeText={onChangeText1}
                value={phonenumber}
                onSubmitEditing={() => handleRegistrationSubmit()}
                />
                
            </View>

            <TouchableOpacity style={styles.Touchablelogin}
                onPress={() => {  handleRegistrationSubmit() }}>
                <Text style={styles.TouchableloginTEXT}>Send Code</Text>
            </TouchableOpacity>
        </View>
    }
    { hide == true &&    
        <View>
             <View>
                <Text style={styles.headingText1today}>Please enter the code you received via text message.</Text>
            </View>
            <View style={tw.style('flex mt-2 my-4')}>
                <TextInput  
                style={tw.style('mx-5 pl-3 sm:text-sm text-gray-700 border-gray-300 bg-gray-200 rounded-lg')}
                placeholder="Enter Code"
                placeholderTextColor="#999999" 
                onChangeText={setCode}
                value={code}
                onSubmitEditing={() => handleRegistrationSubmit1() }
                />
                
            </View>

            <TouchableOpacity style={styles.Touchablelogin}
                onPress={() => handleRegistrationSubmit1() }>
                <Text style={styles.TouchableloginTEXT}>Confirm</Text>
            </TouchableOpacity>
        </View>
    }
         <Loader isVisible={props?.loginLoader} />

        {/* <View style={styles.twotextviewcreate}>
                    <Text style={styles.customertext}>Return to</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("RegistrationShop")}>
                        <Text style={styles.customertextred}> login screen.</Text>
                    </TouchableOpacity>
                </View>*/}

        


       

        </View> 
    )
}




export default Verification