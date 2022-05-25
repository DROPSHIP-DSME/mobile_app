import React, { useRef, useState,useEffect } from 'react';
import { Text, View,TouchableOpacity,FlatList,Image,TextInput, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import AsyncStorage from '@react-native-community/async-storage'; 
import Footer2 from '../../screens/auth/Footer2';

const Category = (props) => {

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
        props.getAllcategory(props?.loginuserid);
        props.getbrandName(props?.loginuserid); 
    }

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

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
    const [UserID, setUserID] = useState("");
    const [visible, setVisible] = React.useState(false);

    const [Paypal, onChangePaypal] = React.useState("Paypal");
    const [Debit, onChangeDebit] = React.useState("Debit Card");

    const [BrandId, setBrandId] = useState("");
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

    const setdeletecategory = async (categoryId) => {
     Alert.alert(
    "Wait !!!",
    "Are you sure you want to delete",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Ok",
        onPress: () =>{ props.removecategory(categoryId,props.navigation)
        setTimeout(function(){ props.getAllcategory(UserID); },100)},
        // style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  );
           
         
     };
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
        image:ImageIcons.addstore,
        
       },
       {
        text:"Beauty brands",
        text1:"$75",
        image:ImageIcons.clothes,
        
       },
       

     ];

      const renderItem = ({ item ,index }) => {
    

   return(
    
   
    <View style={[styles.maincartviewproduct]}>
        <View style={styles.categoryViewnew}>
            <Text style={styles.textheadinginput2}>{item.categoryName}</Text>
             <View>
            <TouchableOpacity   onPress={() =>setdeletecategory(item._id)}>
                <Image source={ImageIcons.deleteicon} style={styles.deleteimg} />
            </TouchableOpacity>
           </View>
         </View> 
    </View>
   
  );
}

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
           
            
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#fce8e8'}} >

             <View style={{marginHorizontal:'3%',marginTop:'5%'}}>

              <View >
                 <View>
                    <Text style={styles.listcategory}>List of all category</Text>
                 </View>
                    
                <View>
                   <FlatList
                        data={props?.getlistcategory || []}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                     />
                </View>

                  
                </View>
                { props?.brandName ?
                <TouchableOpacity onPress={() => props.navigation.navigate("Addcategory",{brandId:props?.brandName._id})}>
                  <View style={styles.categorycircletext}>
                  <View>
                  <Image source={ImageIcons.addcircle} />
                  </View>
                   <Text  style={styles.categoryredtext}>Add a category</Text>
                  </View>
                </TouchableOpacity>
                :
                    <TouchableOpacity onPress={() => props.navigation.navigate("Addbrand2")}>
                      <View style={styles.categorycircletext}>
                          <View>
                                <Image source={ImageIcons.addcircle} />
                          </View>
                            <Text  style={styles.categoryredtext}>Add a category</Text>
                      </View>
                </TouchableOpacity>
                }
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
    </KeyboardAvoidingView>
    )
}


export default Category;