import React, { useRef, useState } from 'react';
import { Text, View,Image,TextInput,TouchableOpacity, Dimensions,ImageBackground, Picker,ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { ShoppingBagIcon } from "react-native-heroicons/solid";

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Shopheader = (props) => {

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    const navigation = useNavigation();

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    // Local states
    const [wayToContact, setWayToContact] = useState("Phone");
    const [showvisible, setshowvisible] = React.useState(false);
    const [visible1, setVisible1] = React.useState(true);
    const [selectedValue, setSelectedValue] = useState("");
    const [showclassName, setshowclassName] = useState("#B80000");
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

    const openpopup = () => {
        if(showvisible==true){
            setshowvisible(false);
        }else {
            setshowvisible(true);
        }
        //setVisible1(true);
    }

    const closepopup = () => {
        setshowvisible(false)
    }

    return (
        <View style={{flexDirection:'row',backgroundColor:showclassName,alignItems:'center',justifyContent:'space-between',top:'5%',zIndex:1001,width:'100%',padding:'3%'}}>

                <View>
                     <Image source={ImageIcons.logored} style={tw.style("w-16 h-16 rounded-full")}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:20,marginRight:20}}>
                    <View>
                    <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                        <Image source={ImageIcons.white_search} style={{width:21,height:20}}/>
                    </TouchableOpacity>
                    </View>
                    <View style={{marginHorizontal:'5%'}}>
                       <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
                            <Image source={ImageIcons.bell} style={{width:21,height:21,}}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('Cart') }}>
                        <View style={{flexDirection:'row'}}>
                            <ShoppingBagIcon color="red" fill="gray " size={24} />
                            <Text style={styles.numtext}>0</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
    )
}




export default Shopheader
