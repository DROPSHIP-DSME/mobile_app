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
    const [hide, setHide] = React.useState(false)
    const [show, setShow] = React.useState(false)
    const [code, setCode] = React.useState("");
   const [email, onChangeText1] = React.useState("");
    const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { email,  },
    });
    const handleRegistrationSubmit = () => {
        Keyboard.dismiss();
            validate({
                email: { email: true },
                password: { password: true },
            }); {
            //props.navigation.navigate("Overview")
            let request = {
                "email": email,
               
                "type":"shop"
            }
            props.navigation.navigate("ResetPassword");
            //props.shoplogin(request,props.navigation,'user','shop')
            //props.signup(request, props.navigation, "salesman");
        }
    }

    return (
       <View style={{backgroundColor:'#ffffff',flex:1}}>
        
        
          <View style={{alignItems:'center',marginTop:'18%'}}>
              <Image source={ImageIcons.logored_1} style={styles.setlogonewdatarow}  />
          </View>
        <View>
            <Text style={styles.headingTextfrgt}>Confirm Phone Number</Text>
        </View>
    { show == false && 
        <View>
             <View>
                <Text style={styles.headingText1today}>To authorise your account, we will send a code to the mobile number entered below. Please enter your mobile number.</Text>
            </View>
            <View >
                <TextInput  style={styles.input1}
                placeholder="Mobile Number"
                 autoCompleteType='email'
                 placeholderTextColor="#999999" 
                onChangeText={onChangeText1}
                value={email}
                onSubmitEditing={() => handleRegistrationSubmit()}
                />
                {isFieldInError('email') &&
                    <Text style={styles.stringerror}>must be required field</Text>
                }
            </View>

            <TouchableOpacity style={styles.Touchablelogin}
                onPress={() => {setShow('true');setHide(true)}}>
                <Text style={styles.TouchableloginTEXT}>Send Code</Text>
            </TouchableOpacity>
        </View>
    }
    { hide == true &&    
        <View>
             <View>
                <Text style={styles.headingText1today}>Please enter the code you received via text message.</Text>
            </View>
            <View >
                <TextInput  style={styles.input1}
                placeholder="Enter Code"
                 autoCompleteType='email'
                 placeholderTextColor="#999999" 
                onChangeText={setCode}
                value={code}
                onSubmitEditing={() => handleRegistrationSubmit()}
                />
                {isFieldInError('email') &&
                    <Text style={styles.stringerror}>must be required field</Text>
                }
            </View>

            <TouchableOpacity style={styles.Touchablelogin}
                onPress={() => props.navigation.navigate("Codeconfirm")}>
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