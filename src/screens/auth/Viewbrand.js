import React, { useRef, useState,useEffect } from 'react';
import { Text, View,TouchableOpacity,Image,FlatList,TextInput,StatusBar, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import Footer3 from '../../screens/auth/Footer3';

const Viewbrand = (props) => {

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

    const brandId = props?.route?.params?.brandId;
    // Local states
     const [checked, setChecked] = React.useState('first');

    const [First, onChangeFirst] = React.useState("First name");
    const [Lastname, onChangeLastname] = React.useState("Last name");
    const [Email, onChangeEmail] = React.useState("Email address");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("Phone number");
    const [Street, onChangeStreet] = React.useState("Street address");
    const [Zip, onChangeZip] = React.useState("Zip");
    const [City, onChangeCity] = React.useState("City");
    const [Country, onChangeCountry] = React.useState("Country");

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
     useEffect(() => {
        props.branddetails(brandId); 
    }, [])
    const openpopup = () => {
        setVisible(true)

        }
            const closepopup = () => {
          setVisible(false)
        }
       const containerStyle = {backgroundColor: 'white', padding: '5%',marginHorizontal:'5%',alignItems:'center'};


     const DATA = [
       {
        text:"Beauty brands",
        text1:"$75",
        image:ImageIcons.jeans,
        
       },
       {
        text:"Beauty brands",
        text1:"$75",
        image:ImageIcons.jeans,
        
       },
       

     ];

      const renderItem = ({ item ,index }) => {
        console.log('d',item)
   
  
   return(

    <View style={styles.maincartviewshop}>
    <View  style={styles.comingViewflatlist}>
    <View >
        <Image source={{uri: item.productImage}} style={styles.jeansimggg} />
        <View>
           <Text style={styles.boldproduct}>{item.productName}</Text>
           <Text style={styles.salestext}>{item.productPrice}</Text>
           </View>
        </View>
    </View>
    </View>
   
  );
}
    return (
         <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
         <StatusBar backgroundColor={'#B80000'} barStyle="dark-content" translucent={true} />
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7'}} >

             <View style={{paddingTop:'2%'}}>

              <View style={[styles.amazingtextView,{marginBottom:'5%'}]}>
                    <Image source={{uri:props?.getBranddetails?.brandImage}} style={styles.girlimg} />
                    <Text style={styles.namebrandtext}>{props?.getBranddetails?.brandName} {'\n'}
                  
                 </Text>
                </View>
             
 
                <View style={{marginTop:'5%'}}>
                 <View>
                    <Text style={styles.searchproducttext}>Products</Text>
                 </View>
                    <View style={{marginHorizontal:10,paddingBottom:'18%'}}>
                        <FlatList
                            data={props?.getlistbranddetails || []}
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
                <Image source={ImageIcons.prof}  style={styles.home1} />
                <Text style={[styles.customerfoottext,{paddingTop:'1%'}]}>Profile</Text>         
            </View>
        </TouchableOpacity>

    </View>

     </View>
        </KeyboardAvoidingView>
    )
}


export default Viewbrand