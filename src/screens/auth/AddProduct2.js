import React, { useEffect, useRef, useState } from 'react';
import { Text,Picker,
View,TextInput, TouchableOpacity,
ImageBackground, ScrollView,
Alert,  Image,
KeyboardAvoidingView,
Platform,Keyboard} from 'react-native';
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
import CheckBox from '@react-native-community/checkbox';
import { RNCamera } from 'react-native-camera';
import ImagePicker from 'react-native-image-crop-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import 'react-native-get-random-values';
import { v4 as uuid } from "uuid";
import Footer2 from '../../screens/auth/Footer2';
import { useValidation } from 'react-native-form-validator';
import Sortorder from '../../components/pickers/Sortorder';
const options = ['Sneakers', 'Fashion', 'Furniture', 'Cloths','Beauty & Hair','Electronics','Cosmetics','Other']


const AddProduct2 = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference
   
    const eventId = props?.route?.params?.eventId;
    const todopage = props?.route?.params?.todopage;
    // Local states
    const [billImgPath, setBillImgPath] = useState("");
    const [billImgPath1, setBillImgPath1] = useState("");
    const [billImgPath2, setBillImgPath2] = useState("");
    const [billImgPath3, setBillImgPath3] = useState("");
    const [billImgPath4, setBillImgPath4] = useState("");
    const [billImgPath5, setBillImgPath5] = useState("");
    const [retakeFlag, setRetakeFlag] = useState(false);
    const [fromGallery, setFromGallery] = useState(false);
    const [counter, setcounter] = useState(0);
    const [Name, onChangeName] = React.useState("");
    const [Product, onChangeProduct] = React.useState("");
    const [Weight, onChangeWeight] = React.useState("");
    const [Inventory, onChangeInventory] = React.useState("");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("");
    const [Price, onChangePrice] = React.useState("");
    const [isSelected, setSelection] = useState(false);
    const [uploadId, setuploadId] = useState(uuid());

    const [City, onChangeCity] = React.useState("");
    const [Country, onChangeCountry] = React.useState("");

    const [selectedProduct, setselectedProduct] = useState("");
    const [selectedValue, setSelectedValue] = useState("61b2e25addb2bd19c2b9532a");
    const [UserID, setUserID] = useState("");
    
    const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { billImgPath,Name, Product,Weight,Inventory,Price },
    });

    useEffect(() => {
         getBrandUserId();
        // props.Brandslist();
    }, [])

    const getBrandUserId = async () => {
         var getUserId = await AsyncStorage.getItem('UserId');
         setUserID(getUserId);
         props.getAllcategory(getUserId);
    }

    const updateorderStatus = (itemValue) => {
        setSelectedValue(itemValue)
    }
    
    const selectPhoto = async () => {
        if(counter<5){
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
                if(counter==0){
                    setBillImgPath(file);
                    setBillImgPath1(file);
                }
                if(counter==1){ setBillImgPath2(file); }
                if(counter==2){ setBillImgPath3(file); }
                if(counter==3){ setBillImgPath4(file); }
                if(counter==4){ setBillImgPath5(file); }
                setcounter(counter+1);

                const formData1 = new FormData();
                formData1.append("productAllImage", file);
                formData1.append("uploadId", uploadId);
                props.uploadpic(formData1, props.navigation, "user");
            }
        }).catch((error) => {
            console.log("Error in image cropping,", error)
        });
       }else {
        alert('You can add upto 5 images')
       }
    }

    // Vendor request submission
    const handleSendRequestSubmit = async () => {
        Keyboard.dismiss();
       validate({
            billImgPath: { required: true },
            Name: { required: true },
            Product: { required: true },
            Price: { required: true },
            Weight: { required: true },
            Inventory: { required: true },

        })
        if (billImgPath !== "" && Name !== "" && Product !== "" && Price !== "" && Weight !== "" && Inventory !== "") {

            let request = {
                "productName":Name,
                "categoryId":selectedValue,
                "userId":props?.loginuserid,
                "productImage":billImgPath,
                "productDescription":Product,
                "productPrice":Price,
                "productWeight":Weight,
                "productInventory":Inventory,
            }

            const formData = new FormData();
            formData.append("productName", Name);
            formData.append("categoryId", selectedValue);
            formData.append("userId", props?.loginuserid);
            formData.append("productImage", billImgPath);
            formData.append("productDescription", Product);
            formData.append("productPrice", Price);
            formData.append("productWeight", Weight);
            formData.append("productInventory", Inventory);
            formData.append("uploadId", uploadId);
            props.createproduct2(formData, props.navigation, "user",eventId,todopage);
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>

            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7'}} >

             <View style={{marginHorizontal:'3%',paddingBottom:'15%'}}>

             <View style={styles.uploadimageView}>
                <TouchableOpacity onPress={() => selectPhoto()}>
                <Image source={ImageIcons.uploadcloud} style={styles.uploadimage} />
                </TouchableOpacity>
                <Text style={styles.addimagetext}> Add image of this product</Text>
             </View>


             <View style={{ flexDirection:'row',marginHorizontal:'4%'}}>
                { billImgPath1 !== "" &&
                    <Image source={{ uri: billImgPath1.uri }} style={styles.loadimage1} />
                }

                { billImgPath2 !== "" &&
                    <Image source={{ uri: billImgPath2.uri }} style={styles.loadimage1} />
                }

                { billImgPath3 !== "" &&
                    <Image source={{ uri: billImgPath3.uri }} style={styles.loadimage1} />
                }

                { billImgPath4 !== "" &&
                    <Image source={{ uri: billImgPath4.uri }} style={styles.loadimage1} />
                }

                { billImgPath5 !== "" &&
                    <Image source={{ uri: billImgPath5.uri }} style={styles.loadimage1} />
                }
             </View>
                {isFieldInError('billImgPath') &&
                    <Text style={styles.stringerror}>must be required field</Text>
                }
              <View >
                    <TextInput
                    style={styles.inputcategory}
                    onChangeText={onChangeName}
                    value={Name}
                     placeholder="Name of the product"
                     onSubmitEditing={() => handleSendRequestSubmit()}
                     placeholderTextColor="#999999"
                    />
                    {isFieldInError('Name') &&
                        <Text style={styles.stringerror}>must be required field</Text>
                    }
                </View>
                <View>
                    <TextInput
                    style={styles.inputcategory}
                    onChangeText={onChangeProduct}
                    value={Product}
                     placeholder="Product description"
                     onSubmitEditing={() => handleSendRequestSubmit()}
                     placeholderTextColor="#999999"
                    />
                    {isFieldInError('Product') &&
                        <Text style={styles.stringerror}>must be required field</Text>
                    }
                </View>
                 <View style={{marginTop:'8%'}}>
                 <View>
                  <Text style={styles.boldhadertext}>Pricing</Text>
                 </View>
                     <View>
                        <TextInput
                        style={styles.inputcategory}
                        onChangeText={onChangePrice}
                        value={Price}
                         placeholder="Price"
                         onSubmitEditing={() => handleSendRequestSubmit()}
                         placeholderTextColor="#999999"
                        />
                        {isFieldInError('Price') &&
                        <Text style={styles.stringerror}>must be required field</Text>
                    }
                    </View>

                </View>
                <View style={{marginTop:'6%',}}>
                 <View>
                  <Text style={styles.boldhadertext}>Product Status</Text>
                 </View>
                 <View style={{marginTop:'2%',flexDirection: 'row',}}>
                     <View style={styles.labelview}>
                        <TextInput
                        style={styles.inputSHORT}
                        onChangeText={onChangeWeight}
                        value={Weight}
                         placeholder="Weight"
                         onSubmitEditing={() => handleSendRequestSubmit()}
                         placeholderTextColor="#999999"
                        />
                        {isFieldInError('Weight') &&
                            <Text style={styles.stringerror}>must be required field</Text>
                        }
                    </View>
                    <View style={styles.labelview}>
                        <TextInput
                        style={styles.inputSHORT}
                        onChangeText={onChangeInventory}
                        value={Inventory}
                         placeholder="Inventory"
                         onSubmitEditing={() => handleSendRequestSubmit()}
                         placeholderTextColor="#999999"
                        />
                        {isFieldInError('Inventory') &&
                            <Text style={styles.stringerror}>must be required field</Text>
                        }
                    </View>
                    </View>
                </View>
                <View style={[styles.pickerView,{height:45,border:0}]}>
                    <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />

                </View>

                <View style={{marginTop:'2%',flexDirection: 'row',marginLeft:'3%'}}>
                    <CheckBox
                    checkedColor='red'
                    value={true}
                    disabled={false}
                    />
                    <Text style={{marginTop:'1%',marginLeft:10}}> Community sales</Text>
                </View>
                <View style={{alignItems:'center',marginVertical:'10%',marginBottom:'18%'}}>
                    <TouchableOpacity
                        style={styles.TouchableOpacitybrand}
                        activeOpacity = { .5}
                        onPress={() => handleSendRequestSubmit()}>
                        <Text style={styles.TouchableloginTEXT}>Add to product</Text>
                    </TouchableOpacity>
               </View>
            </View>
            </ScrollView>
    <View style={styles.footerView}>
    <View style={styles.maincartviewfooter}>
       <TouchableOpacity onPress={() => navigation.navigate("Overview")} >
            <View>
                 <Image source={ImageIcons.blackhome}  style={styles.footer2img} />
                 <Text style={styles.customertextfooter}>Home</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SearchProduct2")} >
            <View>
                 <Image source={ImageIcons.redproducts}  style={styles.footer5img} />
                 <Text style={styles.customertextfooter2}>Products</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("StartRecording",{userId:props?.loginuserid})} >
            <View style={{alignItems:'center'}}>
                 <Image source={ImageIcons.cart2}  style={styles.footer3img} />
                 <Text style={styles.customertextfooter}>Go Live</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Inorder")} >
             <View>
                 <Image source={ImageIcons.neworder}  style={styles.footer4img} />
                 <Text style={styles.customertextfooter}>Orders</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("More")} >
             <View >
                 <Image source={ImageIcons.more}  style={styles.footer2img} />
                 <Text style={styles.customertextfooter}>More</Text>
            </View>
        </TouchableOpacity>

    </View>
   </View>
    </KeyboardAvoidingView>
    )
}



export default AddProduct2
