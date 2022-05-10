import React, { useRef, useState } from 'react';
import { Text, View, ImageBackground, ScrollView,Image,TouchableOpacity, Dimensions,Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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

const Savedgoods = (props) => {
    const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

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
        <View style={{flex:1,backgroundColor:'#fce8e8'}}>
        
 
    
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%',marginHorizontal:'6%'}}>

               <View style={{height:deviceHeight/5.5,width:'51%'}}>
               <TouchableOpacity  onPress={() => {props.navigation.navigate("Goback") }}>
               <Image source={ImageIcons.vphoto}  style={{height:deviceHeight/5.3,width:deviceWidth/2.25,borderRadius:10,resizeMode: 'stretch'}}/>
                </TouchableOpacity>
               </View>

               <View style={{height:deviceHeight/5.5,width:'47%' }} >
               <Image source={ImageIcons.vphoto}  style={{height:deviceHeight/5.3,width:deviceWidth/2.25,borderRadius:10,resizeMode: 'stretch'}}/>
               </View>
            </View>

            <View style={{flexDirection:'row',marginTop:'5%',marginHorizontal:'6%',justifyContent:'space-between'}}>
            <View style={{height:deviceHeight/5.5,width:'51%'}}>
             <TouchableOpacity  onPress={() => {props.navigation.navigate("Goback") }}>
               <Image source={ImageIcons.vphoto} style={{height:deviceHeight/5.3,width:deviceWidth/2.25,borderRadius:10}} />
               </TouchableOpacity>
            </View>  
             <View style={{height:deviceHeight/5.5,width:'47%'}}>
               <Image source={ImageIcons.vphoto} style={{height:deviceHeight/5.3,width:deviceWidth/2.25,borderRadius:10,}} />
             </View>  
            </View>
        </View>
    )
}


export default Savedgoods