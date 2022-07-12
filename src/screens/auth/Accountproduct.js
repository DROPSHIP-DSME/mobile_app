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
//const options = ['Sneakers', 'Fashion', 'Furniture', 'Cloths','Beauty & Hair','Electronics','Cosmetics','Other']
const options1 = ['Sneakers']
const options2 = ['New Stock', 'Good', 'Excellent']
import { CameraIcon } from "react-native-heroicons/solid";

import tw from 'twrnc';
import Largebutton from '../../components/dropshipbutton/Largebutton';
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const options = [
      {
        label: 'Sneakers',
        value: 1
      },
      {
        label: 'Fashion',
        value: 2
      },
      {
        label: 'Furniture',
        value: 3
      },
      {
        label: 'Cloths',
        value: 4
      },
      {
        label: 'Beauty & Hair',
        value: 5
      },
      {
        label: 'Electronics',
        value: 6
      },
      {
        label: 'Cosmetics',
        value: 7
      },
      {
        label: 'Other',
        value: 8
      }
    ]

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
    const [checked, setChecked] = React.useState('first');

    const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { billImgPath,Name, Product,Weight,Inventory,Price },
    });
     const selectcolor = async (color) => {
        onThemecolor(color);
     }

    const updateorderStatus = (itemValue) => {
        setSelectedValue(itemValue)
    }

    const updateorderStatus1 = (itemValue) => {
        //setSelectedValue(itemValue)
    }

    const updateorderStatus2 = (itemValue) => {
        //setSelectedValue(itemValue)
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
                 <View style={tw`flex flex-row justify-between mt-4 mb-5 mx-3 items-center`}>
                    <Progress.Bar progress={1.5} width={150} style={tw`absolute top-6`} color='#B80000' height={1} />
                    <TouchableOpacity>

                        <View style={tw`items-center justify-center h-14 w-14 rounded-full bg-red-700`}>
                          <Text style={tw`text-white text-sm text-center`} >1</Text>
                        </View>
                    </TouchableOpacity>
                    <Progress.Bar progress={1} width={150} style={tw`absolute top-6 right-1`} color='grey' height={1} />
                    <TouchableOpacity>
                        <View style={tw`items-center justify-center h-14 w-14 rounded-full bg-gray-500`}>
                          <Text style={tw`text-white text-sm text-center`} >2</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={tw`items-center justify-center h-14 w-14 rounded-full bg-gray-500`}>
                          <Text style={tw`text-white text-sm text-center`} >3</Text>
                        </View>
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
                   <View style={tw`h-16 w-16 border-3 bg-gray-700 rounded-lg items-center`}>
                    { billImgPath1 !== "" &&
                         <Image source={{ uri: billImgPath1.uri }} style={{height:64, width:64,borderRadius:5}} />
                    }
                    </View>
                    <View style={tw`h-16 w-16 border-3 bg-gray-700 rounded-lg ml-3`}>
                      { billImgPath2 !== "" &&
                        <Image source={{ uri: billImgPath2.uri }} style={{height:64, width:64,borderRadius:5}} />
                    }
                    </View>
                  </View>
                    <View style={tw`h-16 w-16 border-3 bg-gray-700 rounded-lg mt-3`}>
                      { billImgPath3 !== "" &&
                       <Image source={{ uri: billImgPath3.uri }} style={{height:64, width:64,borderRadius:5}} />
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
                      <Sortorder text="Choose a Category" options={options} onSelect={(checked) => updateorderStatus(checked)}  />
                 </View>

                 <View style={tw`mx-3 mt-5`}>
                        <Sortorder text="Brand" options={options1}  onSelect={(checked) => updateorderStatus1(checked)} />
                 </View>

                 <View style={tw`mx-3 mt-5`}>
                    <Sortorder text="Product Condition" options={options2} onSelect={(checked) => updateorderStatus2(checked)} />
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

                <Text style={tw`text-gray-700 text-2xl mt-5 font-bold mx-3 mt-10`} >Pricing</Text>

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


                <View style={tw`flex-row mx-3 mt-2`} >
                    <Text style={tw`text-base text-gray-700`} >You earn</Text>
                    <Text style={tw`text-base text-gray-700 font-bold`} > $0</Text>
                </View>

                <View style={tw`mt-10 mb-5`}>
                  <Text style={tw`text-gray-700 text-2xl mt-5 font-bold mx-3 mt-2`} >Product Tags</Text>
                  <Text style={tw`text-gray-700 text-small mx-3`} >Automatic Labels</Text>
                </View>

                <View style={tw`flex-row mx-3`}>
                  <Text style={tw`items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-700 text-white`} >New Stock</Text>
                </View>

                <Text style={tw`text-lg mt-15 mx-3 text-gray-600`} >Optional Labels</Text>

                <View style={tw`flex-row mt-5 mx-3`}>
                    <TouchableOpacity>
                        <Text style={tw`mr-3 items-center px-3 py-1 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800`}>One Sale</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={tw`mr-3 items-center px-3 py-1 rounded-md text-sm font-medium bg-red-100 text-red-800`}>Low Supply</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={tw`mr-3 items-center px-3 py-1 rounded-md text-sm font-medium bg-green-100 text-green-800`}>Highly Rated</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold', marginTop: 40, marginStart: 20 }} >Shipping</Text>


              <View style={tw`mx-4`}>
                <View style={tw.style('bg-white overflow-hidden shadow rounded-md my-6')}>
                  <View style={tw`px-2 py-5`}>
                    <View style={tw`flex flex-row items-center`}>
                      <RadioButton
                        value="second"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                      />
                      <View style={tw`ml-2`}>
                        <Text style={tw`text-lg font-bold text-red-700 ml-2`}>Dropship Shipping</Text>
                        <Text style={tw`text-base font-bold text-gray-500 ml-2`} >US$7.00 - US$8.00</Text>
                        <Text style={tw`text-sm text-gray-600 ml-2 pr-10`}>Shipping cost is caluclated automatically based on the buyer’s location and the package weight and dimensions.</Text>
                      </View>
                    </View>
                  </View>
                </View>


                <View style={tw` bg-white overflow-hidden shadow rounded-md`}>
                  <View style={tw.style('px-2 py-5')}>
                    <View style={tw`flex flex-row items-center`}>
                      <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                      />
                      <View style={tw`ml-2 w-full pr-10`}>
                        <Text style={tw`text-lg font-bold text-gray-600 ml-2`}>Ship on your own</Text>
                        <Text style={tw`text-sm text-gray-600 ml-2 pr-10`}>You provide the label and pay to ship the item on your own. It is not covered by shipping protection.</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

                <View style={tw`mx-4 mr-4 my-5 mt-8`}>
                  <Largebutton text="Continue" onPress={() => handleSendRequestSubmit1()} />
                </View>

                <View
                  type="button"
                  style={tw.style('mb-20 mx-4 items-center px-4 py-6 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-black focus:outline-none focus:ring-2')}
                >
                <TouchableOpacity style={tw.style('w-10/11 items-center')}
                    onPress={() => props.navigation.navigate("Dashproduct")}>
                    <Text style={tw.style('text-lg text-white')}>Back</Text>
                  </TouchableOpacity>
                </View>





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
