import React, { useRef, useState,useEffect } from 'react';
import { Text, View,Image,TextInput,TouchableOpacity, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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

const  ProfileDetail = (props) => {
 
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
    const [retakeFlag, setRetakeFlag] = useState(false);
    const [fromGallery, setFromGallery] = useState(false);

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

    // Vendor request submission
    const userprofile = async () => {
       
           
        }
return (
    <View style={{flex:1,backgroundColor:'#fce8e8'}}>
        <View style={{marginLeft:'6%',marginTop:'10%',flexDirection:'row'}}>
            {billImgPath !== '' ?
                <Image source={{ uri: billImgPath.uri }} style={{height:80,width:80,borderRadius:70}} />
            :
                <TouchableOpacity onPress={() => selectPhoto()}> 
                   { props?.getprofileuserlist?.profileImage ?
                        <Image source={{uri: props?.getprofileuserlist?.profileImage}} style={{height:80,width:80,borderRadius:70}} />
                    :
                        <Image source={ImageIcons.profile} style={{height:80,width:80,borderRadius:70,borderWidth:1, borderColor:'#333333'}} />
                   }
                </TouchableOpacity>
            }             
             <View style={{marginTop:'5%',marginLeft:'3%',flexDirection:'column'}}>                     
                <Text style={{fontSize:14,paddingLeft:'4%',fontWeight:'bold',color:'#223263',fontFamily:'SourceSansPro-SemiBold',fontStyle:'normal'}}>{props?.getprofileuserlist?.userName}</Text>
                <Text style={{fontSize:14,paddingLeft:'7%',paddingTop:'3%',color:'#9098B1',fontWeight:'bold',fontFamily:'SourceSansPro-SemiBold',fontStyle:'normal'}}>@{props?.getprofileuserlist?.userName}</Text>
             </View>
        </View>
        <View style={[styles.profiltextView,{marginTop:'8%'}]}>
            <View style={{flexDirection:'row',}}>
                <Image source={ImageIcons.gendeer} style={styles.genderimg} />
                <Text style={styles.gendertex}>Gender </Text>
            </View>
            <View style={{flexDirection:'row',}}>
                <Text style={styles.gmaletext}>Male</Text>
                <Image source={ImageIcons.rightarrow} style={styles.rarrow} />
            </View>
        </View>
        <View style={styles.profiltextView}>
            <View style={{flexDirection:'row',}}>
                <Image source={ImageIcons.email2} style={{marginLeft:'2%'}} />
                <Text style={styles.gendertex}>Email </Text>
            </View>
            <View style={{flexDirection:'row',}}>
                <Text style={styles.gmaletext}>{props?.getprofileuserlist?.email}</Text>
                <Image source={ImageIcons.rightarrow} style={styles.rarrow} />
            </View>
        </View>
        <View style={styles.profiltextView}>
            <View style={{flexDirection:'row',}}>
                <Image source={ImageIcons.mobile} style={{marginLeft:'4%'}} />
                <Text style={styles.gendertex}>Phone Number </Text>
            </View>
            <View style={{flexDirection:'row',}}>
                <Text style={styles.gmaletext}>{props?.getprofileuserlist?.phone}</Text>
                <Image source={ImageIcons.rightarrow} style={styles.rarrow} />
            </View>
        </View>
        <View style={styles.profiltextView}>
            <View style={{flexDirection:'row',}}>
                <Image source={ImageIcons.locke} style={styles.genderimg} />
                <Text style={styles.gendertex}>Change Password </Text>
            </View>
            <View style={{flexDirection:'row',}}>
                <Text style={styles.gmaletext}>*********</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("changepassword")}>
                    <Image source={ImageIcons.rightarrow} style={styles.rarrow} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )
}

export default ProfileDetail