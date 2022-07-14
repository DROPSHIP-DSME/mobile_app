import React, { useRef, useState ,useEffect} from 'react';
import { Text, View,TouchableOpacity,FlatList,Picker,
    Image,TextInput, ImageBackground,Dimensions,
    ScrollView, Alert,
    KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../../screens/common/styles';
import { Colors, CommonStrings } from '../../../common'
import ImageIcons from '../../../common/ImageIcons'
import InputField from '../../../components/forms/inputField';
import { RoundedButton } from '../../../components/forms/button';
import { phoneRegExp } from '../../../services/helper';
import DropdownField from '../../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../../components/modals/Loader';
import { RadioButton ,Provider ,Modal, Portal, Button,} from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Footer2 from '../../../screens/common/Footer2';
import tw from 'twrnc';


const ProductDetails = (props) => {

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
    const [checked, setChecked] = React.useState('first');
    const deviceHeight = Dimensions.get('window').height;
    const deviceWidth = Dimensions.get('window').width;

    const productId = props?.route?.params?.productId;
    const [First, onChangeFirst] = React.useState("First name");
    const [Lastname, onChangeLastname] = React.useState("Last name");
    const [Email, onChangeEmail] = React.useState("Email address");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("Phone number");
    const [Street, onChangeStreet] = React.useState("Street address");
    const [Zip, onChangeZip] = React.useState("Zip");
    const [City, onChangeCity] = React.useState("City");
    const [Country, onChangeCountry] = React.useState("Country");
    const [selectedValue, setSelectedValue] = useState("");

    const [visible, setVisible] = React.useState(false);
    const [starCount, setstarCount] = useState(5);
    const [showclassName, setshowclassName] = useState("#B80000");

    const [Paypal, onChangePaypal] = React.useState("Paypal");
    const [Debit, onChangeDebit] = React.useState("Debit Card");

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

    useEffect(() => {
        props.getAllproductdetails(productId);

    }, [])

    const openpopup = () => {
        setVisible(true)

        }
            const closepopup = () => {
          setVisible(false)
        }

         const ratingCompleted = (ratingdata) => {
            console.log('rating',ratingdata)
               if(ratingdata!="" && ratingdata!=undefined){
                setstarCount(ratingdata)
               }

        }

         const handleScroll=(pageYOffset)=>{
        if (pageYOffset > 0) {
            setshowclassName('#B80000');
        }else{
            setshowclassName('#B80000');
        }
    }



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>



            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} >


              <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'7%',marginVertical:'5%',}}>
               <TouchableOpacity onPress={() => props.navigation.navigate("Dashproduct")} >
                  <Image source={ImageIcons.returnprodtoday} style={{width:170,height:17,marginTop:7}}/>
                </TouchableOpacity>
               </View>



             <View style={{marginHorizontal:'3%',}}>


             <View style={styles.VIDEOimageView}>
                {props?.getlistproductdetails?.ProductImages?.length>0 ?
                <FlatListSlider
                    data={props?.getlistproductdetails?.ProductImages}
                    height={300}
                    timer={5000}
                    imageKey={'Image'}
                    contentContainerStyle={{paddingHorizontal: 1,resizeMode:'cover'}}
                    indicatorContainerStyle={{position:'absolute', bottom: 20,left:20}}
                    indicatorActiveColor={'#8A8A8A'}
                    indicatorInActiveColor={'#ffffff'}
                    indicatorActiveWidth={5}
                    animation
                />
                :
                <View>
                    <Image source={{uri:props?.getlistproductdetails?.data?.productImage}}  style={styles.fullcreamimage} />
                </View>
                }
             </View>



               <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'4%',marginVertical:'4%'}}>
                 <View>
                 <Text style={{fontSize:22,fontFamily:'hinted-AvertaStd-Semibold',width:155}}>{props?.getlistproductdetails?.data?.productName}</Text>
                  <Text style={{fontSize:22,fontFamily:'hinted-AvertaStd-Semibold',width:155}}>${props?.getlistproductdetails?.data?.productPrice}</Text>
                  </View>
                   <View>
                      <TouchableOpacity onPress={() => openpopup() } style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,marginLeft:'5%',padding:8}}>
                      <Image source={ImageIcons.edittoday}  style={{height:12,width:12,marginTop:5,alignSelf:'center'}} />
                    </TouchableOpacity>
                    <View style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,marginLeft:'5%',padding:8,marginTop:'12%'}}>
                      <Image source={ImageIcons.deletetoday}  style={{height:12,width:12,marginTop:5,alignSelf:'center'}} />
                    </View>
                   </View>
               </View>

               <View style={{borderBottomWidth:2,borderColor:'#cccccc',width:'98%',marginVertical:'5%',alignSelf:'center'}}></View>

              <View style={{flexDirection:'row',marginHorizontal:'4%',marginTop:'4%'}} >
               <View>
                <Image source={{uri:props?.getlistproductdetails?.getbrands?.brandImage}}  style={{height:50,width:50,borderRadius:25}} />
               </View>
               <View style={{marginLeft:'4%',alignSelf:'center'}}>
                 <Text style={{fontSize:14,fontFamily:'hinted-AvertaStd-Semibold',COLOR:'#1A1A1A'}}>{props?.getlistproductdetails?.getbrands?.brandName}</Text>
                 <View style={{flexDirection:'row',marginTop:'2%'}}>
                   <View style={{backgroundColor:'#B80000',width:'35%',borderRadius:15,padding:6,}}>
                     <Text style={styles.totalincometodayWIDRO}>FOLLOW</Text>
                   </View>
                    <View style={{backgroundColor:'#4affbd',width:'40%',borderRadius:15,padding:6,marginLeft:'4%'}}>
                     <Text style={[styles.totalincometodayWIDRO,{color:'#000000'}]}>OPEN STORE</Text>
                   </View>
                 </View>
               </View>
              </View>

              <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Regular',marginHorizontal:'4%',marginVertical:'3%'}}>{props?.getlistproductdetails?.data?.productDescription}</Text>

             <View style={{flexDirection:'row',marginHorizontal:'4%',}}>
              <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Bold',marginTop:2}}>Product Details</Text>
             </View>

             <View style={{flexDirection:'row',marginHorizontal:'4%',marginTop:'4%'}}>
               <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Bold',}}>Color :</Text>
                <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Regular',marginLeft:5}}>{props?.getlistproductdetails?.data?.productColor}</Text>
             </View>

             <View style={{flexDirection:'row',marginHorizontal:'4%',marginVertical:'2%'}}>
              <View style={{height:20,width:20,borderRadius:10,backgroundColor:`${props?.getlistproductdetails?.data?.productColor}`}}></View>

             </View>


         <View style={{flexDirection:'row',marginBottom:'26%',marginTop:'5%'}}>
            <View style={{marginHorizontal:'4%',marginVertical:'3%'}}>
              <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Bold',}}>Size</Text>
             <View style={{flexDirection:'row'}}>
                <View style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,padding:9,}}>
                  <Text style={{textAlign:'center',color:'#4d4d4d',fontSize:16,fontFamily:'hinted-AvertaStd-Semibold'}}>{props?.getlistproductdetails?.data?.productSize}</Text>
                </View>

             </View>
            </View>

             <View style={{marginVertical:'3%',marginLeft:'6%'}}>
              <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Bold',}}>Quantity</Text>

                <View style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,padding:9,}}>
                  <Text style={{textAlign:'center',color:'#4d4d4d',fontSize:16,fontFamily:'hinted-AvertaStd-Semibold'}}>{props?.getlistproductdetails?.data?.productInventory}</Text>
                </View>
            </View>
         </View>

    </View>
    </ScrollView>

     <Footer2 onSelelection="4"  />
    </KeyboardAvoidingView>
    )
}


export default ProductDetails
