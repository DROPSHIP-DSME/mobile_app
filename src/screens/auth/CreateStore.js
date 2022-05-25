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
import Footer3 from '../../screens/auth/Footer3';

const CreateStore = (props) => {

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
    const [billImgPath, setBillImgPath] = useState("");
    const [retakeFlag, setRetakeFlag] = useState(false);
    const [fromGallery, setFromGallery] = useState(false);

     const [checked, setChecked] = React.useState('first');
      const [text1, onChangeText3] = React.useState("");
    const [subMsg, onChangeText1] = React.useState("");
     const [helppopup, sethelppopup] = React.useState(false);

    const [First, onChangeFirst] = React.useState("First name");
    const [Lastname, onChangeLastname] = React.useState("Last name");
    const [Email, onChangeEmail] = React.useState("Email address");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("Phone number");
    const [Brand, onChangeBrand] = React.useState("");
    const [AboutBrand, onChangeAboutBrand] = React.useState("");
    const [Store, onChangeStore] = React.useState("");
    const [Themecolor, onThemecolor] = React.useState("");
    const [City, onChangeCity] = React.useState("City");
    const [Country, onChangeCountry] = React.useState("Country");
    const [UserID, setUserID] = useState("");
    const [visible, setVisible] = React.useState(false);

    const [Paypal, onChangePaypal] = React.useState("Paypal");
    const [Debit, onChangeDebit] = React.useState("Debit Card");
    const [selectedValue, setSelectedValue] = useState("");

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
     const selectcolor = async (color) => {
        onThemecolor(color);
     }

     useEffect(() => {
         getBrandUserId();
    }, [])

    const getBrandUserId = async () => {
         var getUserId = await AsyncStorage.getItem('UserId');
         //alert(getUserId)
         setUserID(getUserId);
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
        
        if  (Brand !== ""&& AboutBrand !== "" && billImgPath !== "" ) {
            const formData = new FormData();
            formData.append("brandName", Brand);
            formData.append("aboutBrand", AboutBrand);
            formData.append("userId", props?.loginuserid);
            formData.append("brandImage", billImgPath);
            formData.append("country", "USA");
            props.createbrand(formData, props.navigation, "vendor");
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
              <Text style={{fontSize:15,fontFamily:"hinted-AvertaStd-Regular",color:"#999999"}}>MY STORES /</Text>
              <Text style={{fontSize:15,fontFamily:"hinted-AvertaStd-Regular",color:"#999999"}}>MANAGE BRANDS /</Text>
              <Text style={{fontSize:15,fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}> CREATE A BRAND</Text>
              </View>
                  <View style={styles.brandimagetextviewMY}>
                 
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'4%',marginVertical:'5%'}}>
                 <Text style={{fontSize:26,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Bold',}}>Create Your Brand</Text>
               </View>

                <Text style={styles.storecamtexttodayy}>To add goods to your store for distribution, you need to create a brand first. Add details about your brand. </Text>
                
                <View>
                { billImgPath !== "" ? 
                <Image source={{ uri: billImgPath.uri }} style={styles.camimage} />
                :
                <TouchableOpacity style={{marginTop:'3%'}} onPress={() => selectPhoto()}>
                <Image source={ImageIcons.cam} style={styles.camimage} />

                </TouchableOpacity>
                }
                
                </View>

                </View>
                 <View style={{marginTop:'6%'}}>
                 
                     <View>
                        <TextInput
                        style={styles.inputcategorytodayy}
                        onChangeText={onChangeBrand}
                        value={Brand}
                         placeholder="Brand name"
                         placeholderTextColor="#848484"
                        />
                    </View>
                 </View>
                 <View style={{marginVertical:'4%'}}>
                 
                     <View>
                        <TextInput
                        style={styles.inputcategorytodayy123}
                        onChangeText={(text) =>onChangeAboutBrand(text)}
                        value={AboutBrand}
                         placeholder="Tell us about your brand in fewer then 150 characters"
                         placeholderTextColor="#848484"
                        />
                    </View>
                 </View>
                 
                  <View style={styles.pickerViewshorttodaybrandtodayy}>
             
                      <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 320,color:'#848484',}}
                        onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
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

                 <TouchableOpacity  onPress={() => handleSendRequestSubmit()}  style={{backgroundColor:'#b80000',width:320,borderRadius:30,padding:'5%',alignSelf:'center',marginTop:'8%',marginBottom:'35%'}}>
                      <Text style={styles.totalincometodaycompaign}>SAVE YOUR BRAND</Text> 
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
                   <Footer3 onSelection="4"/>
                   
        </KeyboardAvoidingView>
    )
}


export default CreateStore