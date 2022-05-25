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
import Footer3 from '../../screens/auth/Footer3';

const DeGaulle = (props) => {
 
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
    const shopId = props?.route?.params?.shopId;
    const brandId = props?.route?.params?.brandId;
    const brandUserId = props?.route?.params?.branduserId;
    const brandName = props?.route?.params?.brandName;
    const brandDesc = props?.route?.params?.branddesc;
    // Local states
     const [checked, setChecked] = React.useState('first');

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
        console.log(props.getlistshop,'newdata')
        props.getAllcategory(brandUserId);
        //console.log('asdsd',props.getcartlist);
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
    
   <View >
        <TouchableOpacity style={styles.maincartview} onPress={() => props.navigation.navigate("Park",{shopId:shopId,brandName:brandName,brandUserId:brandUserId,categoryId:item._id})}>
         <Text style={styles.Linesorttext}>{item.categoryName}</Text>
         <Image source={ImageIcons.next}  style={styles.next1} />
        </TouchableOpacity>
        <View style={styles.boderlineview}>
        </View>
   </View>
  );
}


    return (
        <View style={{flex:1,backgroundColor:'#FFE7E7'}}>
            <View style={{flexDirection:'row',paddingTop:'15%'}}>
                   <TouchableOpacity style={{marginHorizontal:'5%',marginVertical:'2%'}} 
                   onPress={() => props.navigation.goBack()}>
                    <Image source={ImageIcons.backIcon}   />
                   </TouchableOpacity>
                    <Text style={styles.storetextname}>{brandName}</Text>
                </View>
           <View>
             <Text style={styles.DeGaulletext}>About the brand</Text>
           </View>

           <View >
           <TextInput
                    style={styles.DeGaulleView}
                    
                    multiline={true}
                    readOnly={true}
                    placeholderTextColor="#999999"
                    placeholder={brandDesc}
                    />
           
           </View>
            <View style={{marginTop:'3%'}}>
           <Text style={styles.DeGaulletext}>Product Category</Text>
           </View>
          <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7'}} >
           <View style={styles.DeGaullefullView}>
                   <FlatList
                        data={props?.getlistcategory || []}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        
                     />
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
    </View>
    )
}


export default DeGaulle