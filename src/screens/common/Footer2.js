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
import { useNavigation } from '@react-navigation/native';

const Footer2 = (props) => {

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        onSelelection
    } = props;

    const navigation = useNavigation();
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

    const golivepage = async () => {
        //props.liveeventdetail(props?.loginuserid);
        setTimeout(function(){ navigation.navigate("Dashlive",{userId:userId})},500)
    }

    const openpopup = () => {
        setVisible(true)

        }
    const closepopup = () => {
          setVisible(false)
    }
    
    const containerStyle = {backgroundColor: 'white', padding: '5%',marginHorizontal:'5%',alignItems:'center'};

    

    return (
       <View style={styles.footerView}>
            <View style={styles.maincartviewfooter}>
                <TouchableOpacity onPress={() => navigation.navigate("Overview")} >
                    {onSelelection==1 ?
                        <View>
                             <Image source={ImageIcons.home}  style={[styles.footer3imgtoday,styles.footersel]} />
                             <Text style={[styles.customertextfooter,styles.footersel]}>Home</Text>         
                        </View>
                    :
                        <View>
                             <Image source={ImageIcons.blackhome}  style={styles.footer3imgtoday} />
                             <Text style={styles.customertextfooter}>Home</Text>         
                        </View>
                    }
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Dashorder")} >
                    {onSelelection==2 ?
                        <View>
                             <Image source={ImageIcons.ordtoday}  style={[styles.footer4imgtoday,styles.footersel]} />
                             <Text style={[styles.customertextfooter,styles.footersel]}>Orders</Text>         
                        </View>
                    :
                        <View>
                             <Image source={ImageIcons.ordtoday}  style={styles.footer4imgtoday} />
                             <Text style={styles.customertextfooter}>Orders</Text>         
                        </View>
                    }
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Dashlive") } >
                    {onSelelection==3 ?
                        <View>
                             <Image source={ImageIcons.livetvtoday}  style={[styles.footer4imgtoday,styles.footersel]} />
                             <Text style={[styles.customertextfooter,styles.footersel]}>Go Live</Text>         
                        </View>
                    :
                        <View>
                             <Image source={ImageIcons.livetvtoday}  style={styles.footer4imgtoday} />
                             <Text style={styles.customertextfooter}>Go Live</Text>         
                        </View>
                    }
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Dashproduct")} >
                    {onSelelection==4 ?
                        <View>
                             <Image source={ImageIcons.prodtoday}  style={[styles.footer4imgtoday,styles.footersel]} />
                             <Text style={[styles.customertextfooter,styles.footersel]}>Products</Text>         
                        </View>
                    :
                        <View>
                             <Image source={ImageIcons.prodtoday}  style={styles.footer4imgtoday} />
                             <Text style={styles.customertextfooter}>Products</Text>         
                        </View>
                    }
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Dashsale")} >
                    {onSelelection==5 ?
                        <View>
                             <Image source={ImageIcons.analysetoday}  style={[styles.footer4imgtoday,styles.footersel]} />
                             <Text style={[styles.customertextfooter,styles.footersel]}>Analytics</Text>         
                        </View>
                    :
                        <View>
                             <Image source={ImageIcons.analysetoday}  style={styles.footer4imgtoday} />
                             <Text style={styles.customertextfooter}>Analytics</Text>         
                        </View>
                    }
                </TouchableOpacity>
            </View>
        </View>

    )
}




export default Footer2