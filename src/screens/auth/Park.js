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
import { Rating, AirbnbRating } from 'react-native-ratings';
import Footer3 from '../../screens/auth/Footer3';


const Park = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    useEffect(() => {
        console.log(props.getlistshop,'newdata')
        props.getAllproduct(brandUserId);
        //console.log('asdsd',props.getcartlist);
    }, [])

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    
    const brandUserId = props?.route?.params?.brandUserId;
    const brandName = props?.route?.params?.brandName;
    const categoryId = props?.route?.params?.categoryId;
    const shopId = props?.route?.params?.shopId;

    const [visible, setVisible] = React.useState(false);
    const [starCount, setstarCount] = useState(3);

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
                setstarCount(ratingdata)  
               }
              
        }  

       const containerStyle = {backgroundColor: 'white', padding: '7%',marginHorizontal:'5%',alignItems:'center'};


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
    
     <View style={[styles.maincartview,{marginRight:0}]}>
        <TouchableOpacity  onPress={() => props.navigation.navigate("ProductDetails2",{productId:item._id,categoryId:categoryId,shopId:shopId,userType:'shopside'})}>

         <View style={{marginHorizontal:3,}}>
           <Image source={{uri: item.productImage}} style={styles.jeansimg2} />
           <View>
           <Text style={styles.boldproduct} numberOfLines={1}>{item.productName}</Text>
           <Text style={styles.salestext}>${item.productPrice}</Text>
           </View>
        </View>
        </TouchableOpacity> 
        
    </View>

   
  );
}


    return (
       <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
            <View style={{flex:1,backgroundColor:'#FFE7E7'}}>
                    <View style={{flexDirection:'row',paddingTop:'15%'}}>
                       <TouchableOpacity style={{marginHorizontal:'5%',marginVertical:'2%'}} 
                       onPress={() => props.navigation.goBack()}>
                        <Image source={ImageIcons.backIcon}   />
                       </TouchableOpacity>
                        <Text style={styles.storetextname}>{brandName}</Text>
                    </View>
                     <View>
                        <Text style={styles.parktext}>Products</Text>
                     </View>
                    <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7'}} >
                       <View>
                       <FlatList
                            data={props?.getlistproduct || []}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            numColumns={2}
                            />
                        </View>
                    </ScrollView>
            </View>
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
    </KeyboardAvoidingView>
    )
}


export default Park