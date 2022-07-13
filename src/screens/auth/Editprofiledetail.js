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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Footer3 from '../../screens/auth/Footer3';

const  Editprofiledetail = (props) => {
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
    const [billImgPath, setBillImgPath] = useState("");
    const [retakeFlag, setRetakeFlag] = useState(false);
    const [fromGallery, setFromGallery] = useState(false);

    const [UserName, onChangeUserName] = React.useState("");
    const [First, onChangeFirst] = React.useState("");
    const [Lastname, onChangeLastname] = React.useState("");
    const [Email, onChangeEmail] = React.useState("");
    const [Bio, onChangeBio] = React.useState("");
    const [Location, onChangeLocation] = React.useState("");
    
    
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
    }

    // Vendor request submission
    const handleSendRequestSubmit = async () => {
        Keyboard.dismiss();
        if (First == "") {
            Alert.alert('First name is required')
        }else if(Lastname ==""){
            Alert.alert('Last name is required')
        }else if (Email == "") {
            Alert.alert('Email is required')
        }else if(Bio ==""){
             Alert.alert('Bio is required')
        } else if(Location==""){
            Alert.alert('Location is required')
        } else {
            let request = {
                "userName":First,
                "bio":Bio,
                "phone":'phone',
                "lastName":Lastname,
                "firstName":First,
                "email":Email
            }
            const formData = new FormData();
                formData.append("userId", props?.loginuserid);
                formData.append("profileImage", billImgPath);

                 
              props.updateprofile(formData, props.navigation, "vendor");
            props.newprofile(request, props.navigation, "vendor",0);
        }
    }
return (
    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}
            style={styles.registrationRootscroll}>
    <View style={{backgroundColor:'#FFE7E7',paddingBottom:'18%'}}>
        <View style={[styles.showshadow,{justifyContent:'space-between'}]}>
           <TouchableOpacity style={{marginVertical:'2%'}} 
           onPress={() => props.navigation.goBack()}>
            <Image source={ImageIcons.backIcon}   />
           </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSendRequestSubmit()}>
                <Text style={styles.storetextname}>Save</Text>
            </TouchableOpacity>
            
        </View>
           
        <View style={{paddingTop:'6%',backgroundColor:'#FCDBDB',alignItems:'center',paddingVertical:'4%'}}>
            {billImgPath !== '' ?
                <Image source={{ uri: billImgPath?.uri }} style={{height:100,width:100,borderRadius:70}} />
            :
                <TouchableOpacity onPress={() => selectPhoto()}> 
                   { props?.getprofileuserlist?.profileImage ?
                        <Image source={{uri: props?.getprofileuserlist?.profileImage}} style={{height:100,width:100,borderRadius:70}} />
                    :
                        <Image source={ImageIcons.profile} style={{height:100,width:100,borderRadius:70,borderWidth:1, borderColor:'#333333'}} />
                   }
                </TouchableOpacity>
            }             
             <View style={{marginTop:10,paddingBottom:20,marginLeft:'3%',flexDirection:'column'}}>                     
                <Text style={{fontSize:14,fontWeight:'bold',color:'#223263',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'}}>{props?.getprofileuserlist?.userName}</Text>
                <Text style={{fontSize:14,color:'#9098B1',fontWeight:'bold',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'}}>@{props?.getprofileuserlist?.userName}</Text>
             </View>
        </View>
        <View>
            <View style={{backgroundColor:'#FFE7E7',}}>
                    <View style={{width:'36%',marginTop:20,marginBotton:20,justifyContent:'center'}}>
                        <Text style={[styles.labeltext,{fontWeight:'bold'}]}>Edit Profile</Text>
                    </View>
                    <View style={styles.maincartviewprofile}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={styles.labeltext}>UserName</Text>
                        </View>
                        <View style={{width:'70%'}}>
                            <TextInput
                             style={styles.inputshipping}
                             onChangeText={(text) => onChangeUserName(text)}
                             value={UserName}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                        </View>
                    </View>
                    <View style={styles.maincartviewprofile}>
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
                        </View>
                    </View>
                    <View style={styles.maincartviewprofile}>
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
                        </View>
                    </View>
                    <View style={styles.maincartviewprofile}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={styles.labeltext}>Email</Text>
                        </View>
                        <View style={{width:'70%'}}>
                            <TextInput
                             style={styles.inputshipping}
                             onChangeText={(text) => onChangeEmail(text)}
                             value={Email}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                        </View>
                    </View>
                    <View style={styles.maincartviewprofile}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={styles.labeltext}>Bio</Text>
                        </View>
                        <View style={{width:'70%'}}>
                            <TextInput
                             style={[styles.inputshipping,{height:100}]}
                             onChangeText={(text) => onChangeBio(text)}
                             value={Bio}
                             multiline={true}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                        </View>
                    </View>
                    <View style={styles.maincartviewprofile}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={styles.labeltext}>Location</Text>
                        </View>
                        <View style={{width:'70%'}}> 
                            <TextInput
                             style={styles.inputshipping}
                             onChangeText={(text) => onChangeLocation(text)}
                             value={Location}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                        </View>
                    </View>
                    
                
                </View>
         
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
                <Image source={ImageIcons.redprof}  style={styles.home1} />
                <Text style={[styles.customertextred,{paddingTop:'1%'}]}>Profile</Text>         
            </View>
        </TouchableOpacity>

    </View>

     </View>
    </KeyboardAwareScrollView>
    )
}

export default Editprofiledetail