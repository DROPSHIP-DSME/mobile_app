import React, { useRef, useState,useEffect } from 'react';
import { Text, View,TouchableOpacity,FlatList,Image,TextInput,Picker,StatusBar, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { Colors, CommonStrings } from '../../../common'
import ImageIcons from '../../../common/ImageIcons'
import InputField from '../../../components/forms/inputField';
import { RoundedButton } from '../../../components/forms/button';
import { phoneRegExp } from '../../../services/helper';
import DropdownField from '../../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../../components/modals/Loader';
import { RadioButton ,Provider ,Modal, Portal, Button,} from 'react-native-paper';
import { RNCamera } from 'react-native-camera';
import ImagePicker from 'react-native-image-crop-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import Footer2 from '../../../screens/common/Footer2';
const Reactdim = require('react-native');
import { useValidation } from 'react-native-form-validator';

const Accountproduct = (props) => {

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

     const [checked, setChecked] = React.useState('first');
      const [text1, onChangeText3] = React.useState("");
    const [subMsg, onChangeText1] = React.useState("");
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
    const [selectedValue, setSelectedValue] = useState("");
    const [Productoption, onChangeProductoption] = React.useState("");
    const [ProductSize, onChangeProductSize] = React.useState("");
    const [ProductColor, onChangeProductColor] = React.useState("");
    const [SelectedQuantity, setSelectedQuantity] = React.useState("");
    const [ProductCode, onChangeProductCode] = React.useState("");
    const [SelectedDiscount, setSelectedDiscount] = React.useState("");

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


    const openpopup = () => {
        setVisible(true)

        }
            const closepopup = () => {
          setVisible(false)
        }
       const containerStyle = {backgroundColor: 'white', padding: '5%',marginHorizontal:'5%',alignItems:'center'};

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

    const DATA = [
       {
        item:"color",
        color:'#EB5757',
       },
        {
        item:"color",
        color:'#7070db',
       },
        {
        item:"color",
        color:'#993399',
       },
        {
        item:"color",
        color:'#1266d3',
       },
        {
        item:"color",
        color:'#b37700',
       },
        {
        item:"color",
        color:'#669900',
       },
        {
        item:"color",
        color:'#3399ff',
       },
        {
        item:"color",
        color:'#990000',
       }

     ];
    const renderItem = ({ item }) => {
  return(
    <TouchableOpacity onPress={() => selectcolor(item.color)}>
    <View style={{marginHorizontal:15, }}>
     <View style={{backgroundColor:item.color,borderRadius:20,width:20,height:20,}}></View>
     </View>
     </TouchableOpacity>
  );
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

             <View style={{marginHorizontal:'4%',marginTop:'4%',flex:1}}>
             <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} >
                  <View style={{flexDirection:"row",marginHorizontal:"3%",marginTop:"10%"}}>
              <Text style={{fontSize:15,fontFamily:"SourceSansPro-Regular",color:"#999999"}}>MY STORES /</Text>
              <Text style={{fontSize:15,fontFamily:"SourceSansPro-Regular",color:"#999999"}}>MANAGE BRANDS /</Text>
              <Text style={{fontSize:15,fontFamily:"SourceSansPro-Regular",color:"#1A1A1A"}}> CREATE A BRAND</Text>
              </View>

                  <View style={styles.brandimagetextviewMY}>
                 
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'4%',marginVertical:'5%'}}>
                 <Text style={{fontSize:26,color:'#1a1a1a',fontFamily:'SourceSansPro-Bold',}}>Add a Product</Text>
               </View>

                <Text style={styles.storecamtexttodayy}>To add goods to your store for distribution, you need to create a brand first. Add details about your brand. </Text>
                 </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'1%',marginTop:'5%'}}>  
                <TouchableOpacity onPress={()=>selectPhoto1()} style={{height:160,width:deviceWidth/2.2,backgroundColor:'#848484',borderRadius:20,alignSelf:'flex-start'}}>
                <View style={{marginTop:'30%',}}>
                 <Image source={ImageIcons.whitevideo} style={{width:24,height:24,alignSelf:'center',}}/>
                   <Text style={{textAlign:'center',width:130,marginLeft:'10%',color:'#ffffff'}}>Add a image or video of your product</Text>
                   </View>
                </TouchableOpacity>
               
                 <View style={{}}> 
                   <Text style={{color:'#1a1a1a',fontSize:14,fontFamily:'SourceSansPro-SemiBold'}}>Add more images</Text>
                  <View style={{flexDirection:'row',marginTop:'2%'}}> 
                   <View style={{height:65,width:65,borderRadius:10,padding:22}}>
                       { billImgPath1 !== "" &&
                      <Image source={{ uri: billImgPath1.uri }} style={{width:65,height:65,alignSelf:'center'}}/>
                  }
                     </View>
                   <View style={{height:65,width:65,borderRadius:10,padding:22,marginLeft:'5%'}}>
                    { billImgPath2 !== "" &&
                      <Image  source={{ uri: billImgPath2.uri }} style={{width:65,height:65,alignSelf:'center'}}/>
                  }
                     </View>   
                   </View>
                   <View style={{height:65,width:65,borderRadius:10,padding:22,marginTop:'4%'}}>
                    { billImgPath3 !== "" &&
                      <Image  source={{ uri: billImgPath3.uri }} style={{width:65,height:65,alignSelf:'center'}}/>
                  }
                     </View>

                  </View>
                   {isFieldInError('billImgPath') &&
                    <Text style={styles.stringerror}>must be required field</Text>
                }
              </View>

                 <View style={{marginTop:'6%'}}>
                 
                     <View>
                        <TextInput
                         style={styles.inputcategorytodayy}
                         onChangeText={onChangeName}
                         value={Name}
                         placeholder="Name of Product"
                         onSubmitEditing={() => handleSendRequestSubmit1()}
                         placeholderTextColor="#848484"
                        />
                         {isFieldInError('Name') &&
                        <Text style={styles.stringerror}>must be required field</Text>
                    }
                    </View>
                 </View>

                 
                 <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'4%',marginTop:'6%'}}>
                   <View style={styles.pickerViewshorttodaybrandaccount}>
              
                    <View>
                        <TextInput
                        style={styles.pickerViewshorttodaybrandaccount}
                        onChangeText={onChangePrice}
                        value={Price}
                        placeholder="Price"
                        onSubmitEditing={() => handleSendRequestSubmit1()}
                        placeholderTextColor="#848484"
                    />
                        {isFieldInError('Price') &&
                        <Text style={styles.stringerror}>must be required field</Text>
                    }
                    </View>
                </View>   

                 <View style={styles.pickerViewshorttodaybrandaccount}>
                    <Text style={{fontSize:12,fontFamily:'SourceSansPro-Regular',color:'4d4d4d',marginLeft:'6%',marginTop:'2%'}}>Discount</Text>
                      <Picker
                        selectedValue={SelectedDiscount}
                        style={{ height: 20, width: 150,color:'#4d4d4d',}}
                        onValueChange={(itemValue, itemIndex) =>setSelectedDiscount(itemValue)}
                       >
                        <Picker.Item label="0 %" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8" value="8" />
                        <Picker.Item label="9" value="9" />
                      </Picker>
                </View>   
            </View>


            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'4%',marginTop:'6%'}}>
                   <View style={styles.pickerViewshorttodaybrandaccount}>
              
                    <View>
                        <TextInput
                            style={styles.pickerViewshorttodaybrandaccount}
                            onChangeText={onChangeProductCode}
                            value={ProductCode}
                            placeholder="Product Code"
                            onSubmitEditing={() => handleSendRequestSubmit1()}
                            placeholderTextColor="#848484"
                        />
                        {isFieldInError('Price') &&
                        <Text style={styles.stringerror}>must be required field</Text>
                    }
                    </View>
                </View>   

                 <View style={styles.pickerViewshorttodaybrandaccount}>
                    <Text style={{fontSize:12,fontFamily:'SourceSansPro-Regular',color:'4d4d4d',marginLeft:'6%',marginTop:'2%'}}>Quantity</Text>
                      <Picker
                        selectedValue={SelectedQuantity}
                        style={{ height: 20, width: 150,color:'#4d4d4d',}}
                        onValueChange={(itemValue, itemIndex) =>setSelectedQuantity(itemValue)}
                       >
                        <Picker.Item label="0 %" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8" value="8" />
                        <Picker.Item label="9" value="9" />
                      </Picker>
                </View>   
            </View>


                <View style={styles.pickerViewshorttodaybrandtodayy1}>
             
                      <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 320,color:'#848484',}}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                       >
                        <Picker.Item label="Choose a Category" value="1" />
                        <Picker.Item label="Sneakers" value="61b2e25addb2bd19c2b9532a" />
                        <Picker.Item label="Fashion" value="61b2e4bfddb2bd19c2b9532f" />
                        <Picker.Item label="Furniture" value="61b2e63bddb2bd19c2b95335" />
                        <Picker.Item label="Cloths" value="61b2e882ddb2bd19c2b9533c" />
                        <Picker.Item label="Beauty & Hair" value="61b2eb67ddb2bd19c2b95346" />
                        <Picker.Item label="Electronics" value="61b2ec5addb2bd19c2b9534b" />
                        <Picker.Item label="Cosmetics" value="61b651846a4c8e2f3dacf60a" />
                        <Picker.Item label="Other" value="61b4aa1539889b2e9971b521" />
                      </Picker>
                </View> 

                 <View style={{marginVertical:'4%'}}>
                 
                     <View>
                        <TextInput
                        style={styles.inputcategorytodayy123}
                        onChangeText={onChangeProduct}
                        value={Product}
                         placeholder="Provide more details about your product (500 characters max)"
                         onSubmitEditing={() => handleSendRequestSubmit()}
                         placeholderTextColor="#848484"
                        />
                         {isFieldInError('Product') &&
                        <Text style={styles.stringerror}>must be required field</Text>
                    }
                    </View>
                 </View>

                <View style={{flexDirection:'row',marginHorizontal:'3%',}}>
                 <View>
                    <Text style={{fontSize:18,fontFamily:'SourceSansPro-Bold',color:'1a1a1a',marginHorizontal:'4%'}}>Color Options</Text>
                    <View style={[styles.pickerViewshorttodaybrandaccount,{marginTop:'4%',marginHorizontal:'4%'}]}>
                        <TextInput
                            style={styles.pickerViewshorttodaybrandaccount}
                            onChangeText={onChangeProductColor}
                            value={ProductColor}
                            placeholder="Product Color"
                            onSubmitEditing={() => handleSendRequestSubmit1()}
                            placeholderTextColor="#848484"
                        />
                    </View>   

                </View>

                  <View>
                    <Text style={{fontSize:18,fontFamily:'SourceSansPro-Bold',color:'1a1a1a',marginHorizontal:'4%'}}>Size Options</Text>
                     <View style={{marginTop:'2%'}}>
                 
                    
                     <View>
                        <TextInput
                        style={[styles.pickerViewshorttodaybrandaccount,{marginTop:'4%'}]}
                        onChangeText={(text) => onChangeProductSize(text)}
                        value={ProductSize}
                         placeholder="XL-Extra Large"
                         placeholderTextColor="#848484"
                        />
                    </View>
                 </View>
                 </View>
                 </View>

                 <View style={{marginHorizontal:'3%',marginVertical:'6%',}}>
                 <View style={{flexDirection:'row'}}>
                      <Text style={{fontSize:18,fontFamily:'SourceSansPro-SemiBold',color:'#848484'}}>Option Label</Text>
                 </View> 
                <TextInput
                  style={styles.inputcategorytodayy}
                  placeholder="Add an Option"
                  placeholderTextColor="#4d4d4d"
                  onChangeText={(text) => onChangeProductoption(text)}
                  value={Productoption}
                />
                
              </View>
<View style={{position:'absolute',opacity:0,alignSelf:'flex-end',marginTop:'12%',right:'2%'}}>
                        <TouchableOpacity>
                            <Image source={ImageIcons.plusicon} style={{height:41,width:41}} />
                        </TouchableOpacity>
                    </View>

                 <TouchableOpacity   onPress={() => handleSendRequestSubmit1()}  style={{backgroundColor:'#b80000',width:320,borderRadius:30,padding:'5%',alignSelf:'center',marginTop:'6%',marginBottom:'35%'}}>
                      <Text style={styles.totalincometodaycompaign}>CONTINUE</Text> 
                   </TouchableOpacity>
                 

                  
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