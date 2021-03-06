import React, { useRef, useState,useEffect } from 'react';
import { Text, View,Image,FlatList,TextInput,TouchableOpacity, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import { useFocusEffect } from '@react-navigation/native';
import Footer3 from '../../screens/common/Footer3';


const shippinglist = (props) => {
  
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    useEffect(() => {
        //alert('d')
        props.getuseraddress(props?.loginuserid);
        props.getprofileuser(props?.loginuserid); 
    }, [])
    useFocusEffect(() => {
        
     })

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    // Local states
    const [billImgPath, setBillImgPath] = useState("");
    const [retakeFlag, setRetakeFlag] = useState(false);
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
    const setdeleteaddress = async (id) => {
        props.deleteaddress(id);
        setTimeout(function(){ props.getuseraddress(props?.loginuserid); },100);   
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
                const formData = new FormData();
                formData.append("userId", props?.loginuserid);
                formData.append("profileImage", file);

                 
              props.updateprofile(formData, props.navigation, "vendor");
            }
        }).catch((error) => {
            console.log("Error in image cropping,", error)
        });
    }
const DATA = [
       {
        text:'Beauty brands',
        image:ImageIcons.basket,
        image2:ImageIcons.liveicon,
       },
        {
       text:'Beauty brands',
        text2:'Live tomorrow at 10PM',
        image:ImageIcons.clothes,
       },
        {
        text:'Beauty brands',
        text2:'Live tomorrow at 10PM',
        image:ImageIcons.basket,
       },
       
       

     ];
    // Vendor request submission
const renderItem = ({ item ,index }) => {
return(
<View>
    <View style={styles.addressviewlist}>
        <View style={styles.addviewlist}>
            <Text style={styles.nametext}>{item.firstName}</Text>
            <Text style={styles.addresstext}>{item.streetAdress}</Text>
            <Text style={styles.addresstext}>{item.city}</Text>
        </View>
        <TouchableOpacity   onPress={() =>setdeleteaddress(item._id)}>
            <Image source={ImageIcons.reddelete} style={{width:14,height:17}}  />
        </TouchableOpacity>
    </View> 
</View>
  );
}
return (
    <View style={{flex:1,backgroundColor:'#FFE7E7',}}>
        
        <View style={{backgroundColor:'#FFE7E7',flex:1,paddingBottom:'17%'}}>
            <View style={{width:'50%',marginTop:20,marginBotton:20,textAlign:'left'}}>
                <Text style={[styles.labeltext2]}>Shipping Addresses </Text>
            </View>
            <View style={styles.maincartviewfooter}>
                <TouchableOpacity onPress={() => props.navigation.navigate("shippinginfo")}>
                    <View style={styles.proplusviewlist}>
                        <Text style={styles.plusstext}>+</Text>
                        <Text style={styles.plusstext1}>Add Shipping Address </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#fce8e8'}} >
            <View >
                <FlatList
                    data={props?.getuseraddresslist || []}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            </ScrollView>
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
    )
}

export default shippinglist