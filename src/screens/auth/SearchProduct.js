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
import Footer3 from '../../screens/auth/Footer3';
import AsyncStorage from '@react-native-community/async-storage'; 
import Footer2 from '../../screens/auth/Footer2';
import SellHeader from '../../screens/auth/Sellheader';

const SearchProduct = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

     useEffect(() => {
        //alert('d')
        //getBrandUserId();
        props.Brandslist();
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
    const [pagetype, setpagetype] = React.useState(false);

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
           props.Brandslist();
        }else {
            props.searchbrand(1,First)
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


const renderItem2 = ({ item ,index }) => {
    
  
   return(
    
        <View style={styles.maincartviewproductonce}>
         <TouchableOpacity style={[styles.beautyproductView2345,{paddingBottom:'5%'}]} >
             <View>
                <Image source={{uri:item.brandImage}} style={styles.CREAMimage} />
             </View>
             <Text style={[styles.bluetext,{marginVertical:5}]}>{item.brandName}</Text>
            </TouchableOpacity>
        </View>
    
   
  );
}




    return (
         <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
             <SellHeader />
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#ffffff',marginBottom:66}} >

             <View style={{marginHorizontal:'4%',paddingTop:'7%'}}>
                    <View style={{width:'95%',}}>
                        
                        <TextInput
                            style={styles.searchmainViewour}
                            onChangeText={onChangeFirst} 
                            value={First}
                            onSubmitEditing={() => handleRegistrationSubmit()}
                            placeholder="Search "
                            placeholderTextColor="#999999"
                        />
                        <TouchableOpacity onPress={() => handleRegistrationSubmit() } style={{position:'absolute',right:15,top:15.37,}}>
                         <Image source={ImageIcons.searchIcon}  style={styles.searchimg} />
                        </TouchableOpacity>
                    </View>
                <View>

                
                    <View style={styles.inorder113}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Search")}>
                            <View style={styles.livec25789}>
                                <Text style={styles.livec13}>Events</Text>
                            </View>
                        </TouchableOpacity>
                        
                            <View style={styles.livec24one}>
                                <Text style={styles.livec12}>Brands</Text>
                            </View>
                        
                     </View>
                <View style={{marginTop:'7%'}}>
                  <Text style={styles.salestextonce}>Suggested Products</Text>
                 <View style={{marginBottom:5}}>
                    <FlatList
                        data={props?.Brandlistdata || []}
                        renderItem={renderItem2}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                    />
               </View>
               </View>

               </View>
           
            </View>
            </ScrollView>
            <Footer2 onSelelection="3" />
        </KeyboardAvoidingView>
    )
}



export default SearchProduct