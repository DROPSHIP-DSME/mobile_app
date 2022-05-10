import React, { useRef, useState,useEffect } from 'react';
import { Text, View,FlatList,
    TouchableOpacity,Image,
    TextInput, ImageBackground, 
    ScrollView, Alert,   
    KeyboardAvoidingView, Platform,
    Keyboard} from 'react-native';
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
import { Rating, AirbnbRating } from 'react-native-ratings';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Footer2 from '../../screens/common/Footer2';
import AwesomeAlert from 'react-native-awesome-alerts';

const ProductDetails2 = (props) => {

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
    const productId = props?.route?.params?.productId;
    const shopId = props?.route?.params?.shopId;
    const categoryId = props?.route?.params?.categoryId;
    // Local states
     const [checked, setChecked] = React.useState('first');

     const userType = props?.route?.params?.userType;
    
      const [starCount, setstarCount] = useState(5);
    const [First, onChangeFirst] = React.useState("First name");
    const [Lastname, onChangeLastname] = React.useState("Last name");
    const [Email, onChangeEmail] = React.useState("Email address");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("Phone number");
    const [Street, onChangeStreet] = React.useState("Street address");
    const [Zip, onChangeZip] = React.useState("Zip");
    const [City, onChangeCity] = React.useState("City");
    const [Country, onChangeCountry] = React.useState("Country");
    const [showAlert, setshowAlert] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const [showotherAlert, setshowotherAlert] = React.useState(false);
    const [showalertmsg, setshowalertmsg] = React.useState('');
    const [Paypal, onChangePaypal] = React.useState("Paypal");
    const [Debit, onChangeDebit] = React.useState("Debit Card");

    const [wayToContact, setWayToContact] = useState("Phone");
    
        
    const openpopup = () => {
        let request = {
            "productId":props?.getlistproductdetails?.data?._id,
            "userId":props?.loginuserid,
            "productQuantity":1,
            "productPrice":props?.getlistproductdetails?.data?.productPrice,
            "branduserId":props?.getlistproductdetails?.data?.userId
        }
        console.log('request',request)
        props.cartadd(request, props.navigation, "vendor");
        setVisible(true)
    } 
    
    const closepopup = () => {
       setVisible(false)
    }

    useEffect(() => {
        props.getAllproductdetails(productId);
        //console.log('asdsd',props.getcartlist);
    }, [])

    const ratingCompleted = (ratingdata) => {
        console.log('rating',ratingdata)
        if(ratingdata!="" && ratingdata!=undefined){
            setstarCount(ratingdata)  
        }  
    }

    const containerStyle = {backgroundColor: 'white', padding: '5%',marginHorizontal:'5%',alignItems:'center'};


    const renderItem = ({ item }) => {
      return(
        <View style={{marginTop:'1%',marginHorizontal:'3%',}}>
         <Text style={styles.accounttext}>{item.text}</Text>
         </View>
      );
    }

    


    
    const checkshop = () => { 
        if(categoryId!=undefined && shopId!=undefined){
            props.navigation.navigate("AddStore2",{productId:props?.getlistproductdetails?.data?._id,shopId:shopId,categoryId:categoryId})
        }else {
           if(props?.loginuserstatus=="1"){
               setshowalertmsg('Please select shop first, to add items in your shop')
               setshowotherAlert(true);
               props.navigation.navigate("AddStore")
            }else {
                setshowAlert(true)
            } 
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
            
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} >
              <View style={{ padding:20}}>
                {props?.getlistproductdetails?.ProductImages?.length>0 ?
                <FlatListSlider
                    data={props?.getlistproductdetails?.ProductImages}
                    height={250}
                    timer={5000}
                    imageKey={'Image'}
                    contentContainerStyle={{paddingHorizontal: 1}}
                    indicatorContainerStyle={{position:'absolute', bottom: 20,left:20}}
                    indicatorActiveColor={'#8A8A8A'}
                    indicatorInActiveColor={'#ffffff'}
                    indicatorActiveWidth={5}
                    animation
                /> 
                :
                <View>
                    <Image source={{uri:props?.getlistproductdetails?.data?.productImage}} style={styles.jeansimg} />
                </View>
                }
            
            <View style={{width:'95%',borderRadius:5,borderWidth:1,borderColor:'#F2F2F2',marginHorizontal:'3%',}}>
             
                <View>
                    <Text style={styles.storetext5}>{props?.getlistproductdetails?.data?.productName}</Text>
                    <Text style={styles.salestext3}>${props?.getlistproductdetails?.data?.productPrice}</Text>
                </View>
              
                <View >
                    <Text style={[styles.viewdegaulletext,{marginVertical:'1%',textAlign:'center'}]}>{props?.getlistproductdetails?.data?.productDescription}</Text>
                </View>
            
                <View style={{alignItems:'center',marginTop:'7%'}}>
                    <TouchableOpacity
                        style={styles.TouchableOpacitytext}
                        activeOpacity = { .5}
                        onPress={() => openpopup()}>
                        <Text style={styles.homecontinuebutton}>Buy now</Text>
                    </TouchableOpacity>
               </View>
               <View style={{alignItems:'center',marginTop:'4%'}}>
                    <TouchableOpacity onPress={() => { checkshop() }}
                        style={styles.Touchableselltext}
                        activeOpacity = { .5}
                        >
                        <Text style={styles.sellbutton}>Add to shop</Text>
                    </TouchableOpacity>
                </View>
            </View>

             <View style={{marginVertical:'5%'}}>
                   
                   <View style={styles.amazingtextView}>
                    <Text style={styles.TEXT}>5.0</Text>
                        <Rating
                        type='custom'
                        imageSize={15}
                        ratingCount={5}
                        defaultRating={5}
                        ratingColor='#EB5757'
                        tintColor='#F2F2F2'
                        onFinishRating={(start) => ratingCompleted(start)}
                        style={{ marginHorizontal:'3%'}}
                        />
                        
                     </View>
                     <View style={styles.amazingtextView}>
                     <Image source={ImageIcons.redeye} style={styles.redeye} />
                     <Text style={styles.TEXT}>Over 750 views todays, so act now</Text>
                     </View>
                </View>
                <View style={styles.amazingtextView}>
                    <View>
                    <Text style={styles.TEXT2}>Shipping</Text>
                    </View>
                    <View style={{width:'77%'}}>
                    <Text style={styles.DELIVERYTEXT}>Estimated delivery time is 15-20 days</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("ChatSupport",{userType:'shopside'})}>
                        <View style={[styles.orderboxView,{marginVertical:'3%'}]}>
                           <Image source={ImageIcons.chaticon} style={styles.chatimage} />
                           <Text style={styles.chaticontext}>Chat with a rep</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.amazingtextView,{marginBottom:'15%'}]}>
                    <Image source={{uri: props?.getlistproductdetails?.getbrands?.brandImage}} style={styles.girlimg} />
                    <Text style={styles.namebrandtext}>{props?.getlistproductdetails?.getbrands?.brandName} {'\n'}
                    <TouchableOpacity onPress={() => props.navigation.navigate("Viewbrand",{brandId:props?.getlistproductdetails?.getbrands?._id })} >
                    <Text style={styles.UNDERlinetext}>View brand</Text>
                    </TouchableOpacity></Text>
                 </View> 
                
               
            </View> 

                { openpopup  &&
                    <Provider>
                    <Portal>
                    <Modal visible={visible} onDismiss={closepopup} contentContainerStyle={containerStyle}>
                        <Image source={ImageIcons.greencart}  />
                        <Text style={styles.produttext}>Added to cart</Text>
                        <Text style={styles.addimagetext}>Product added to your cart successfully</Text>
                        <TouchableOpacity style={styles.modalbutton} 
                            onPress={() => props.navigation.navigate("shop")}>
                            <Text style={styles.modaltouchablitytext2} >Continue Shopping</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  
                        onPress={() => props.navigation.navigate("Cart")}>
                            <Text style={[styles.boldhadertext,{marginVertical:'5%'}]}>Go to cart</Text>
                        </TouchableOpacity>
                    </Modal>
                    </Portal>
                    </Provider>
                }         
            </ScrollView>
            {userType=='sellside' &&
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
         <Image source={ImageIcons.products}  style={styles.footer5img} />
         <Text style={styles.customertextfooter}>Products</Text>         
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
}

{ userType=='shopside' &&

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
                 <Text style={[styles.customerfoottext,{paddingTop:'1%'}]}>Shop</Text>
             </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Search'); }}>
            <View >
                <Image source={ImageIcons.searchicon}  style={styles.home1} />
                <Text style={styles.customerfoottext}>Search</Text>         
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Newprofile'); }}>
            <View >
                <Image source={ImageIcons.prof}  style={styles.home1} />
                <Text style={[styles.customertext,{paddingTop:'1%'}]}>Profile</Text>         
            </View>
        </TouchableOpacity>

        </View>

    </View>
       
}
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="DROPSHIP"
          message="You need to login to access this screen!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Cancel"
          confirmText="Login"
          confirmButtonColor="#E22020"
          onCancelPressed={() => {
            setshowAlert(false)
          }}
          onConfirmPressed={() => {
             setshowAlert(false)
             navigation.navigate('Golive');
          }}
        />
        <AwesomeAlert
          show={showotherAlert}
          showProgress={false}
          title="DROPSHIP"
          message={showalertmsg}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={false}
          cancelText="Close"
          confirmText="Login"
          confirmButtonColor="#E22020"
          onCancelPressed={() => {
            setshowotherAlert(false)
          }}
        />
        </KeyboardAvoidingView>
    )
}


export default ProductDetails2