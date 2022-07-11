import React, { useRef, useState,useEffect } from 'react';
import { Text, View,TouchableOpacity,FlatList,Image,TextInput,Picker,StatusBar, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import { RNCamera } from 'react-native-camera';
import ImagePicker from 'react-native-image-crop-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import Footer2 from '../../screens/auth/Footer2';
const Reactdim = require('react-native');
import { useValidation } from 'react-native-form-validator';
import * as Progress from 'react-native-progress';
import CheckBox from '@react-native-community/checkbox';
import Sortorder from '../../components/pickers/Sortorder';
const options = ['Sneakers', 'Fashion', 'Furniture', 'Cloths','Beauty & Hair','Electronics','Cosmetics','Other']
const options1 = ['Sneakers']
const options2 = ['New Stock', 'Good', 'Excellent']

import tw from 'twrnc';
import Largebutton from '../../components/dropshipbutton/Largebutton';
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { CameraIcon } from "react-native-heroicons/solid";


const Accountproduct = (props) => {
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference
    const categoryId = props?.route?.params?.categoryId;
    const categoryName = props?.route?.params?.categoryName;

    const { Dimensions } = Reactdim;
    const deviceHeight = Dimensions.get('window').height;
    const deviceWidth = Dimensions.get('window').width;

    // Local states
    const [billImgPath, setBillImgPath] = useState("");
    const [retakeFlag, setRetakeFlag] = useState(false);
    const [fromGallery, setFromGallery] = useState(false);

    const [billImgPath1, setBillImgPath1] = useState("");
    const [billImgPath2, setBillImgPath2] = useState("");
    const [billImgPath3, setBillImgPath3] = useState("");
    const [billImgPath4, setBillImgPath4] = useState("");
    const [billImgPath5, setBillImgPath5] = useState("");

      const [text1, onChangeText3] = React.useState("");
     const [helppopup, sethelppopup] = React.useState(false);

    const [Store, onChangeStore] = React.useState("");
    const [Themecolor, onThemecolor] = React.useState("");
    const [City, onChangeCity] = React.useState("City");
    const [Country, onChangeCountry] = React.useState("Country");
    const [UserID, setUserID] = useState("");
    const [visible, setVisible] = React.useState(false);
    const [Name, onChangeName] = React.useState("");
    const [Product, onChangeProduct] = React.useState("");
    const [Weight, onChangeWeight] = React.useState("");
    const [Inventory, onChangeInventory] = React.useState("");
    const [Price, onChangePrice] = React.useState("");
    const [counter, setcounter] = useState(0);
    const [selectedValue, setSelectedValue] = useState("61b2e25addb2bd19c2b9532a");
    const [selectedValue1, setSelectedValue1] = useState("6295110f3defd98ec12b7f80");
    const [selectedValue2, setSelectedValue2] = useState("New Stock");
    const [Productoption, onChangeProductoption] = React.useState("");
    const [ProductSize, onChangeProductSize] = React.useState("");
    const [ProductColor, onChangeProductColor] = React.useState("");
    const [SelectedQuantity, setSelectedQuantity] = React.useState("");
    const [ProductCode, onChangeProductCode] = React.useState("");
    const [SelectedDiscount, setSelectedDiscount] = React.useState("");
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const [check, setCheck] = useState(false)

    const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { billImgPath,Name, Product,Weight,Inventory,Price },
    });
     const selectcolor = async (color) => {
        onThemecolor(color);
     }

     useEffect(() => {
         getBrandUserId();
         getLoginUserId();
    }, [])

    const getBrandUserId = async () => {
         var getUserId = await AsyncStorage.getItem('UserId');
         //alert(getUserId)
         setUserID(getUserId);
    }
     const getLoginUserId = async () => {
         var getislogin = await AsyncStorage.getItem('userLogin');
         setisLogin(getislogin);
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
            }
        }).catch((error) => {
            console.log("Error in image cropping,", error)
        });
    }


    // Vendor request submission
    const handleSendRequestSubmit = async () => {
        Keyboard.dismiss();
        if (billImgPath == "") {
            Alert.alert('Image is required')

        }  else if (Store == "") {
            Alert.alert('shop name is required')

        }else if (Themecolor == "") {
            Alert.alert('Theme color is required')

        } else {

           // props.navigation.navigate("AddStore")

            const formData = new FormData();
            formData.append("shopName", Store);
            formData.append("shopTheme", Themecolor);
            formData.append("userId", props?.loginuserid);
            formData.append("shopImage", billImgPath);


            props.createshop(formData, props.navigation, "vendor");
        }
    }

    const selectPhoto1 = async () => {
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

     const handleSendRequestSubmit1 = async () => {
        Keyboard.dismiss();
        if (billImgPath !== "" && Name !== "") {
            const formData = new FormData();
            formData.append("productName", Name);
            formData.append("categoryId", selectedValue);
            formData.append("userId", props?.loginuserid);
            formData.append("productImage", billImgPath);
            formData.append("productDescription", Product);
            formData.append("productPrice", Price);
            formData.append("productWeight", ProductSize);
            formData.append("productSize", ProductSize);
            formData.append("productColor", ProductColor);
            formData.append("productInventory", SelectedQuantity);
            formData.append("productCode", ProductCode);
            formData.append("productCaption", Productoption);
            //formData.append("uploadId", uploadId);
            props.createproduct(formData, props.navigation, "vendor",true);
            //setTimeout(function(){ props.getAllproduct(props?.loginuserid);},100);
        }
    }



const renderItem6 = ({ item }) => {
            return(
                <View>
                    { item.userId.userName=='Admin' ?
                       <View>
                        <View style={styles.chatrightView}>
                           <Text style={styles.hellotext}>{item.message}</Text>
                        </View>
                         <Text style={styles.chattingtime}>{ moment(item.msgDate).format('hh:mm A')}</Text>
                        </View>
                    :
                        <View>
                        <View style={styles.chatlongView}>
                          <Text style={styles.chattingtext}>{item.message}</Text>
                        </View>
                        <Text style={styles.chattingtime2}>{moment(item.msgDate).format('hh:mm A')}</Text>
                        </View>

                    }
                </View>
            );
    }

    return (
       <KeyboardAvoidingView style={{flex:1,backgroundColor:'#F2F2F2'}}>

             <StatusBar backgroundColor={"#FFFFFF00"} barStyle="dark-content" translucent={true} />

             <View style={tw`flex flex-1 mx-2`}>
                <View style={tw`flex-row mx-3 mt-15 mb-5 items-center`} >
                    <ArrowLeftIcon color="red" fill="gray" size={14} />
                    <View style={tw`ml-1`}>
                    <Text style={tw`text-xs text-gray-500 `}>BACK TO STORES</Text>
                    </View>
                </View>
             <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} >
                 <View style={tw`flex flex-row justify-between mt-4 mb-5 mx-3`}>
                    <Progress.Bar progress={1.5} width={150} style={tw`absolute top-6`} color='#B80000' height={1} />
                    <TouchableOpacity>
                        <Text style={tw`rounded-full bg-red-700 text-white w-14 h-14 text-sm text-center pt-3 pb-3`} >1</Text>
                    </TouchableOpacity>
                    <Progress.Bar progress={1} width={150} style={tw`absolute top-6 right-1`} color='grey' height={1} />
                    <TouchableOpacity>
                        <Text style={tw`rounded-full bg-gray-700 text-white w-14 h-14 text-sm text-center pt-3 pb-3`} >2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={tw`rounded-full bg-gray-700 text-white w-14 h-14 text-sm text-center pt-3 pb-3`} >3</Text>
                    </TouchableOpacity>
                </View>

                  <View style={tw`items-center mt-2`}>

                  <View style={tw`flex flex-row justify-between mx-3 mt-5 mb-3`}>
                    <Text style={tw`text-2xl font-bold text-gray-700`}>Add a Product</Text>
                  </View>

                <Text style={tw`text-base text-gray-700 text-center mx-3`}>To add goods to your store for distribution, you need to create a brand first. Add details about your brand. </Text>
                 </View>

            <View style={tw`flex flex-row mx-2 mt-15`}>
                <TouchableOpacity onPress={()=>selectPhoto1()} style={tw.style('h-36 bg-gray-600 border-3 rounded-lg justify-center', {width:deviceWidth/2.2})}>
                  <View style={tw`items-center`}>
                      <CameraIcon color="red" fill="white" size={28} />
                      <View>
                        <Text style={tw`text-center w-32 text-gray-200`}>Add a image or video of your product</Text>
                      </View>
                   </View>
                </TouchableOpacity>

                 <View style={tw`ml-5 w-auto`}>
                  <View style={tw`flex flex-row`}>
                   <View style={tw`h-16 w-16 border-3 bg-gray-700 rounded-lg p-5 items-center`}>
                    { billImgPath1 !== "" &&
                         <CameraIcon color="white" fill="white" size={28} />
                    }
                    </View>
                    <View style={tw`h-16 w-16 border-3 bg-gray-700 rounded-lg p-5 ml-3`}>
                      { billImgPath2 !== "" &&
                        <CameraIcon color="white" fill="white" size={28} />
                    }
                    </View>
                  </View>
                    <View style={tw`h-16 w-16 border-3 bg-gray-700 rounded-lg p-5 mt-3`}>
                      { billImgPath3 !== "" &&
                        <CameraIcon color="white" fill="white" size={28} />
                    }
                    </View>

                  </View>
                   {isFieldInError('billImgPath') &&
                    <Text style={tw`text-base text-gray-900 my-1 mx-3`}>must be required field</Text>
                }
              </View>

                 <View style={tw`mt-8`}>
                      <Text style={tw`text-2xl font-bold text-gray-700 mx-3 mb-3`}>Product Info</Text>
                     <View style={tw`justify-center`}>
                       <TextInput
                        placeholder='Name of Product'
                        value={Name}
                        onChangeText={onChangeName}
                        onSubmitEditing={() => handleSendRequestSubmit1()}
                        placeholderTextColor='#4D4D4D'
                        style={tw`h-14 bg-zinc-200 mx-3 text-gray-500 px-4 rounded-md items-center`} />

                           {isFieldInError('Name') &&
                          <Text style={tw`text-base text-gray-900 my-1 mx-3`}>must be required field</Text>
                      }
                     </View>

                      <TextInput
                      onChangeText={onChangeProduct}
                      value={Product}
                      onSubmitEditing={() => handleSendRequestSubmit()}
                      placeholder='Provide more details about your product (500 characters max)' placeholderTextColor='#4D4D4D'
                      style={tw`h-36 bg-zinc-200 mx-3 text-gray-600 px-5 mt-5 rounded-md text-start`} />
                 </View>

                 <View style={tw`mx-3 mt-5`}>
                      <Sortorder text="Choose a Category" options={options} />
                 </View>

                 <View style={tw`mx-3 mt-5`}>
                        <Sortorder text="Brand" options={options1} />
                 </View>

                 <View style={tw`mx-3 mt-5`}>
                    <Sortorder text="Product Condition" options={options2} />
                </View>


                <Text style={tw`text-gray-700 text-2xl mt-12 font-bold mx-3`} >Product Specifics (Optional)</Text>
                <View style={tw`flex flex-row mx-3 mt-4`}>
                <TextInput
                placeholder='Height (ft)'
                placeholderTextColor='#4D4D4D'
                style={tw`bg-zinc-200 h-14 rounded-md px-4 w-6/12`} />

                <TextInput
                placeholder='Length (ft)'
                placeholderTextColor='#4D4D4D'
                style={tw`bg-zinc-200 h-14 rounded-md px-4 w-6/12 ml-2`} />

                </View>

                <TouchableOpacity>
                    <Text style={tw`text-base text-gray-700 mx-3 mt-2`} >+ Add another option</Text>
                </TouchableOpacity>

                <Text style={tw`text-gray-700 text-2xl mt-5 font-bold mx-3`} >Pricing</Text>

                <View style={tw`flex flex-row mx-3 mt-5 justify-between`}>
                  <View style={tw`w-6/12 mr-1`}>
                    <Text style={tw`text-gray-700`}>Price US$</Text>
                      <TextInput
                      placeholder='0.00'
                      value={Price}
                      onChangeText={onChangePrice}
                      keyboardType={'numeric'}
                      onSubmitEditing={() => handleSendRequestSubmit1()}
                      placeholderTextColor='#4D4D4D'
                      style={tw`bg-zinc-200 h-14 rounded-md px-4 w-full`} />
                  </View>
                  <View style={tw`w-6/12 ml-1`}>
                    <Text style={tw`text-gray-700`}>Discount in %</Text>
                      <TextInput
                      placeholder='0.00'
                      value={SelectedDiscount}
                      onChangeText={setSelectedDiscount}
                      keyboardType={'numeric'}
                      onSubmitEditing={() => handleSendRequestSubmit1()}
                      placeholderTextColor='#4D4D4D'
                      style={tw`bg-zinc-200 h-14 rounded-md px-4 w-full`} />
                  </View>

                </View>


                <View style={tw`flex-row mx-3 mt-8`} >
                    <Text style={{ fontSize: 14, color: 'black' }} >You earn</Text>
                    <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold' }} > $0</Text>
                </View>

                <View style={{ flexDirection: 'row', marginStart: 20 }}>
                    <CheckBox
                        disabled={false}
                        value={check}
                        onValueChange={(newValue) => setCheck(newValue)}

                        style={{ marginTop: 8,color:'#000000' }}
                    />

                    <Text style={{ fontSize: 14, color: 'black', marginTop: 12 }} >This product has options, like size or color</Text>
                </View>

                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 22, marginTop: 18, marginStart: 20 }} >Product Tags</Text>

                <Text style={{ color: 'black', fontSize: 16, marginTop: 15, marginStart: 20, fontWeight: '600' }} >Automatic Labels</Text>

                <Text style={{ color: 'white', backgroundColor: '#2F80ED', width: 90, paddingTop: 5, paddingBottom: 5, textAlign: 'center', borderRadius: 6, marginTop: 10, marginStart: 20 }} >New Stock</Text>

                <Text style={{ color: 'black', fontSize: 16, marginTop: 20, marginStart: 20, fontWeight: '600' }} >Optional Labels</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginStart: 20, marginEnd: 89 }}>
                    <TouchableOpacity style={{ backgroundColor: 'lightpink', width: 75, borderRadius: 6 }} >
                        <Text style={{ fontSize: 12, color: '#E25424', textAlign: 'center', marginTop: 5, marginBottom: 5 }} >On Sale</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: 'lightyellow', width: 75, borderRadius: 6 }} >
                        <Text style={{ fontSize: 12, color: '#E3AE0E', textAlign: 'center', marginTop: 5, marginBottom: 5 }} >Low Supply</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: '#27AE60', width: 95, borderRadius: 6 }} >
                        <Text style={{ fontSize: 12, color: '#1F8B4D', textAlign: 'center', marginTop: 5, marginBottom: 5 }} >Highly Rated</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold', marginTop: 40, marginStart: 20 }} >Shipping</Text>



                <View style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: 15, paddingTop: 20, paddingBottom: 20, marginStart: 20, marginEnd: 20, paddingEnd: 31.97 }} >

                    <View style={{ flexDirection: 'column', marginStart: 16 }} >
                        <Text style={{ color: '#B80000', fontSize: 16, fontWeight: 'bold' }} >Dropship Shipping</Text>

                        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold', marginTop: 5 }} >US$7.00 - US$8.00</Text>

                        <Text style={{ color: 'black', fontSize: 12, fontWeight: '400', marginTop: 5 }} >Shipping cost is caluclated automatically based on the buyer’s location and the package weight and dimensions.</Text>
                    </View>

                </View>


                <View style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: 15, paddingTop: 20, paddingBottom: 20, marginStart: 20, marginEnd: 20, paddingEnd: 71.97 }} >

                    <View style={{ flexDirection: 'column', marginStart: 16 }} >
                        <Text style={{ color: '#808080', fontSize: 16, fontWeight: 'bold' }} >Ship on your own</Text>



                        <Text style={{ color: 'black', fontSize: 12, fontWeight: '400', marginTop: 5 }} >You provide the label and pay to ship the item on your own. It is not covered by shipping protection.</Text>
                    </View>

                </View>

                <TouchableOpacity onPress={() => handleSendRequestSubmit1()}  style={{ backgroundColor: '#B80000', marginStart: 20, marginEnd: 20, marginTop: 40, borderRadius: 50 }} >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 20, marginBottom: 20 }} >Continue</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => props.navigation.navigate("Dashproduct") }  style={{ backgroundColor: '#1A1A1A', marginStart: 20, marginEnd: 20, marginTop: 20, borderRadius: 50, marginBottom: 77 }} >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 20, marginBottom: 20 }} >Back</Text>
                </TouchableOpacity>





<View style={{position:'absolute',opacity:0,alignSelf:'flex-end',marginTop:'12%',right:'2%'}}>
                        <TouchableOpacity>
                            <Image source={ImageIcons.plusicon} style={{height:41,width:41}} />
                        </TouchableOpacity>
                    </View>



               </ScrollView>

                <View style={{ position:'absolute',opacity:0,zIndex:2001,right:20,bottom:70}}>
               <TouchableOpacity onPress={() => sethelppopup(false)}>
                    <Image source={ImageIcons.exporthelp} style={{width:50,height:50}}/>
                </TouchableOpacity>
               </View>

               { helppopup ==true &&
        <View style={{flex:1,backgroundColor:'#ffffff',margin:20,paddingVertical:10,borderRadius:10,zIndex:4001, position:'absolute',bottom:'10%'}}>


              <View style={styles.chatViewrose}>

                <Text style={styles.Benrosetext}>Chat with customer support</Text>
                <TouchableOpacity style={{position:'absolute',right:15,top:5}} onPress={() => sethelppopup(false)}>
                    <Image source={ImageIcons.closepopup}  style={styles.sendmsg2} />
                </TouchableOpacity>
            </View>
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#ffffff', height:200}} >
            <View style={{marginVertical:'2%'}}>
                <FlatList
                    data={props?.getchatsupportlist1 || []}
                    renderItem={renderItem6}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                />
             </View>
           </ScrollView>
            <View style={[styles.accountmainview,{marginBottom:10, width:'100%'}]}>
            <View style={{width:'90%'}}>
                <TextInput  style={styles.chatinput}
                placeholder="Type here..."
                onChangeText={onChangeText3}
                value={text1}
                placeholderTextColor="#999999"
                />
            </View>
            <TouchableOpacity style={{position:'absolute',right:55,top:5}} onPress={() => handleSendRequestSubmit()}>
                    <Image source={ImageIcons.sendchat}  style={styles.sendmsg1} />
                </TouchableOpacity>
            </View>
        </View>
        }

        </View>

        <Footer2 onSelelection="4"  />

        </KeyboardAvoidingView>
    )
}


export default Accountproduct
