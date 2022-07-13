import React, { useRef, useState,useEffect } from 'react';
import { Text, View,TouchableOpacity,FlatList,
    Image,TextInput, ImageBackground,
     ScrollView, Alert,  
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
import { RadioButton ,Provider ,Modal, Portal, Button,} from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Footer2 from '../../screens/auth/Footer2';
import AsyncStorage from '@react-native-community/async-storage'; 

const SearchProduct2 = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

     useEffect(() => {
        //alert('d')
        getBrandUserId();
        
    }, [])

     const getBrandUserId = async () => {
        var getUserId = await AsyncStorage.getItem('UserId');
        setUserID(getUserId);
        props.getAllproduct(props?.loginuserid);
    }


    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    // Local states
     const [checked, setChecked] = React.useState('first');

    const [First, onChangeFirst] = React.useState("");
    const [Lastname, onChangeLastname] = React.useState("Last name");
    const [Email, onChangeEmail] = React.useState("Email address");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("Phone number");
    const [Street, onChangeStreet] = React.useState("Street address");
    const [Zip, onChangeZip] = React.useState("Zip");
    const [City, onChangeCity] = React.useState("City");
    const [Country, onChangeCountry] = React.useState("Country");
    const [UserID, setUserID] = useState("");
    const [visible, setVisible] = React.useState(false);

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
    const openpopup = () => {
        setVisible(true)

        }
            const closepopup = () => {
          setVisible(false)
        }

        const ratingCompleted = (ratingdata) => {
            console.log('rating',ratingdata)
               if(ratingdata!="" && ratingdata!=undefined){
                //setstarCount(ratingdata)  
               }
              
        }  

       const containerStyle = {backgroundColor: 'white', padding: '7%',marginHorizontal:'5%',alignItems:'center'};

    
    const handleRegistrationSubmit = () => {
        Keyboard.dismiss();
        if (First == "") {
           props.getAllproduct(props?.loginuserid);
        }else {
            props.searchproduct(props?.loginuserid,First)
        }
    }

    const DATA = [
       {
        text:"Name of the store",
        text1:"store.dropship.com",
        text2:"40",
        text3:"400",
        image:ImageIcons.clothes,
        image1:ImageIcons.baga,
        image2:ImageIcons.redcart,
        image3:ImageIcons.shareicon,
       },
     
     ];

    const renderItem = ({ item ,index }) => {
    
  
   return(
    
        <View style={styles.maincartviewproduct}>
         <TouchableOpacity  style={styles.beautyproductView} onPress={() => props.navigation.navigate("ProductDetails",{productId:item._id})}>
             
             <View>
                <Image source={{uri:item.productImage}} style={styles.CREAMimage} />
             </View>
             <Text style={styles.bluetext}>{item.productName}</Text>
             <View>
                <Rating
                type='custom'
                imageSize={18}
                ratingCount={5}
                ratingColor='#EB5757'
                tintColor='#FFE7E7'
                style={{ paddingVertical: 5,width:100,}}
                />
             </View>
             <Text style={styles.productorder}>${item.productPrice}</Text>
            </TouchableOpacity>
        </View>
    
   
  );
}

    return (
         <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
            
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7',marginBottom:66}} >

             <View style={{marginHorizontal:'3%',marginTop:'15%'}}>
                <Text style={styles.boldhadertext}>Products</Text>
                 <View style={styles.maincartview}>
                  
                   <View style={{width:'75%',}}>
                      <TextInput
                        style={styles.searchmainView}
                        onChangeText={onChangeFirst} 
                        value={First}
                        onSubmitEditing={() => handleRegistrationSubmit()}
                         placeholder="Search for productes"
                          placeholderTextColor="#999999"
                        />
                    <TouchableOpacity onPress={() => handleRegistrationSubmit() } style={{position:'absolute',right:25,top:15.37,}}>
                         <Image source={ImageIcons.searchIcon}  style={styles.searchimg} />
                        </TouchableOpacity>
                  </View>
                 <View style={{width:'20%'}}>
                  <TouchableOpacity onPress={() => handleRegistrationSubmit()}>
                 <View style={styles.searchmainView}>
                 <Image source={ImageIcons.menuIcon}  style={styles.menuimg} />
                </View>
                </TouchableOpacity>    
                </View>
           

                 </View>

                <View >
                 <View style={styles.maincartview}>
                 
                    <TouchableOpacity style={styles.addView} onPress={() => props.navigation.navigate("AddProduct2",{todopage:'SearchProduct2'} )}>
                     <Text style={styles.addViewtext}>Add product</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.addView2} >
                     <Text style={styles.addViewtext2}>Category</Text>
                    </TouchableOpacity>
                 </View>

                 <View style={{marginBottom:5}}>
                   <FlatList
                        data={props?.getlistproduct || []}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        />
               </View>
                
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



export default SearchProduct2