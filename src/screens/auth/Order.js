import React, { useRef, useState,useEffect } from 'react';
import { Text, View,Picker,
    TouchableOpacity,Image,TextInput,FlatList,
     ImageBackground, ScrollView, Alert,
       KeyboardAvoidingView,
     Platform,Keyboard} from 'react-native';

import DashedLine from 'react-native-dashed-line';
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
import moment from 'moment';
import Footer2 from '../../screens/auth/Footer2';

const Order = (props) => {

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
     const [selectedValue, setSelectedValue] = useState();

    const orderNumber = props?.route?.params?.orderNumber;
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
        console.log(props.getlistshop,'newdata')
        props.getorderdetail(orderNumber);
        console.log('getorderlist props:',props.getorderlist);
    }, [])

    const updateorderStatus = (itemValue) => {
        setSelectedValue(itemValue)
        props.updateorderdetail(orderNumber,itemValue);
    }

const renderItem = ({ item,index }) => {
    return(
        <View style={styles.productdetailsView}>
           <View style={{width:'40%'}}>
                <Image source={{uri: item.productId.productImage}} style={styles.shoesimage} />
           </View>
           <View style={{width:'60%'}}>
                <Text style={styles.shoesTEXT}>{item.productId.productName}</Text>
                <Text style={styles.shoesrateTEXT}><Text style={{color:'#333333',fontSize:10}}>Quantity:</Text> {item.productQuantity}</Text>
                <Text style={styles.shoesrateTEXT}><Text style={{color:'#333333',fontSize:10}}>Price:</Text> ${item.productPrice}</Text>
           </View>
        </View>
    );
}

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
           
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#fce8e8',marginBottom:66}} >

             <View style={{marginHorizontal:'2%',marginTop:'4%'}}>
             <Text style={styles.updateordertext}>Order status: {props?.getorderlist?.data?.orderStatus}</Text> 
                <View style={styles.orderpickerView}>
                    <Picker
                    selectedValue={selectedValue}
                    style={{ height: 48, width: '95%',color:'#828282',fontSize:12 }}
                    onValueChange={(itemValue, itemIndex) => updateorderStatus(itemValue)}
                    >
                    <Picker.Item label="Update order status" value="" />
                    <Picker.Item label="Prcoessing" value="Prcoessing" />
                    <Picker.Item label="Shipped" value="Shipped" /> 
                    <Picker.Item label="Delivered" value="Delivered" />
                    <Picker.Item label="Cancelled" value="Cancelled" />
                    </Picker>
                </View>

                <View style={{marginTop:'6%',}}>
                    

                    <View>
                        <Text style={styles.orderproducttext}>Product Details</Text>
                    </View>
                    <FlatList
                        data={props?.getorderlist?.ItemList || []}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={false}
                    />

                    
                </View>

                <View style={{marginTop:'6%',}}>
                     <View>
                      <Text style={styles.orderproducttext}>Buyer Details</Text>
                     </View>
                 <View style={styles.buyerdetailsView}>
                       <View style={styles.maincartview}>
                       <Text style={styles.buyertext}> Name</Text>
                       <Text style={styles.buyertext2}>{props?.getorderlist?.data?.firstName} {props?.getorderlist?.data?.lastName} </Text>
                       </View>
                       <View style={styles.maincartview}>
                       <Text style={styles.buyertext}>Country</Text>
                       <Text style={styles.buyertext2}>{props?.getorderlist?.data?.country}</Text>
                       </View>
                       <View style={styles.maincartview}>
                       <Text style={styles.buyertext}>Number</Text>
                       <Text style={styles.buyertext2}>{props?.getorderlist?.data?.phoneNumber}</Text>
                       </View> 

                       <View style={styles.maincartview}>
                        <TouchableOpacity style={styles.orderboxView2} onPress={() => props.navigation.navigate("ChatSupport",{userType:'sellside'})}>
                              <View style={{  flexDirection:'row',alignItems:'center'}}>
                               <Image source={ImageIcons.chaticon} style={styles.chatimage} />
                               <Text style={styles.chaticontext}>Chat with admin</Text>
                               </View>
                       </TouchableOpacity>
                       <View style={styles.orderboxView2}>
                       <Image source={ImageIcons.call} style={styles.chatimage} />
                       <Text style={styles.chaticontext}>Call admin</Text>
                       </View>
                       </View>

                 </View>
                </View>
                <View style={{marginTop:'6%',}}>
                     <View>
                      <Text style={styles.orderproducttext}>Shipping Details</Text>
                     </View>
                <View style={styles.buyerdetailsView2}>
                       <View style={styles.maincartview}>
                       <Text style={styles.buyertext}>Date Shipping</Text>
                       <Text style={styles.JANUARYtext}>{moment(props?.getorderlist?.data?.orderDate).format("MM/DD/YYYY")}</Text>
                       </View>
                       <View style={styles.maincartview}>
                       <Text style={styles.buyertext}>streetAdress</Text>
                       <Text style={styles.JANUARYtext}>{props?.getorderlist?.data?.streetAdress}</Text>
                       </View>
                       <View style={styles.maincartview}>
                       <Text style={styles.buyertext}>ZipCode</Text>
                       <Text style={styles.JANUARYtext}>{props?.getorderlist?.data?.zipCode}</Text>
                       </View>
                       <View style={styles.maincartview}>
                       <Text style={styles.buyertext}>City</Text>
                       <Text style={[styles.JANUARYtext,{maxWidth:200}]}>{props?.getorderlist?.data?.city}</Text>
                       </View>
                 </View>
                </View>
                <View style={{marginTop:'6%',}}>
                     <View>
                      <Text style={styles.orderproducttext}>Payment Details</Text>
                     </View>
                    <View style={styles.buyerdetailsView3}>
                       <View style={styles.maincartview}>
                       <Text style={styles.buyertext}>Amount</Text>
                       <Text style={styles.buyertext2}>${props?.getorderlist?.data?.orderAmount}</Text>
                       </View>
                       <View style={styles.maincartview}>
                       <Text style={styles.buyertext}>Shipping</Text>
                       <Text style={styles.buyertext2}>-</Text>
                       </View>
                       <View style={styles.maincartview}>
                       <Text style={styles.buyertext}>Import charges</Text>
                       <Text style={styles.buyertext2}>-</Text>
                       </View>
                        <View style={{ marginHorizontal:'2%',marginTop:'3%'}} >
                        <DashedLine dashLength={7} dashColor='#BDCDFF' dashThickness={1} />
                        </View>
                        <View style={styles.maincartview}>
                       <Text style={styles.JANUARYtext}>Total Price</Text>
                       <Text style={styles.rettext}>${props?.getorderlist?.data?.orderAmount}</Text>
                       </View>
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
         <Image source={ImageIcons.neworderred}  style={styles.footer4img} />
         <Text style={styles.customertextfooter2}>Orders</Text>         
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


export default Order