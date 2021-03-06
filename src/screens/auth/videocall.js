import React, { useRef, useState } from 'react';
import { Text, View,TouchableOpacity,Image,TextInput, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import { RadioButton ,Provider ,Modal, Portal, Button,} from 'react-native-paper';

const videocall = (props) => {

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
     const [checked, setChecked] = React.useState('first');

    const [First, onChangeFirst] = React.useState("First name");
    const [Lastname, onChangeLastname] = React.useState("Last name");
    const [Email, onChangeEmail] = React.useState("Email address");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("Phone number");
    const [Street, onChangeStreet] = React.useState("Street address");
    const [Zip, onChangeZip] = React.useState("Zip");
    const [City, onChangeCity] = React.useState("City");
    const [Country, onChangeCountry] = React.useState("Country");

    const [visible, setVisible] = React.useState(false);

    const [Paypal, onChangePaypal] = React.useState("Paypal");
    const [Debit, onChangeDebit] = React.useState("Debit Card");

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

     const cartdataSubmit = async () => {
        openpopup();
        
        let request = {
             "productId":"619cae1899ca84ee9ee92685",
            "userId":"60f97db9122e4bd68dd61c4a",
            "productQuantity":5
            }
            props.cartadd(request, props.navigation, "vendor");
        }

    const openpopup = () => {
        setVisible(true)

        }
            const closepopup = () => {
          setVisible(false)
        }
       const containerStyle = {backgroundColor: 'white', padding: '7%',marginHorizontal:'5%',alignItems:'center'};



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
             
            <View>
              <Image source={ImageIcons.Screenimg} style={styles.screenimgg} />
            </View>

            { openpopup  &&
                    <Provider>
                    <Portal>
                    <Modal visible={visible} onDismiss={closepopup} contentContainerStyle={containerStyle}>
                    <Image source={ImageIcons.greencart}  />
                    <Text style={styles.produttext}>Added to cart</Text>
                    <Text style={styles.addimagetext}>Product added to your cart successfully</Text>
                    <TouchableOpacity style={styles.modalbutton} 
                    onPress={() => props.navigation.navigate("shop")}>
                    <Text style={styles.modaltouchablitytext2} >Continue Shopping</Text></TouchableOpacity>
                    <TouchableOpacity  
                    onPress={() => props.navigation.navigate("Cart") }>
                    <Text style={[styles.boldhadertext,{marginVertical:'5%'}]}>Go to cart</Text>
                    </TouchableOpacity>
                    </Modal>
                    </Portal>
                    </Provider>
                }
           
           
        </KeyboardAvoidingView>
    )
}


export default videocall