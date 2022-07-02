import React, { useRef, useState,useEffect } from 'react';
import { Text, View,TouchableOpacity,FlatList,
    Image,TextInput, ImageBackground,
    ScrollView, Alert,Picker,  
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
import Shopheader from '../../screens/auth/Shopheader';

import AsyncStorage from '@react-native-community/async-storage'; 
import moment from 'moment';
 
const Popevent = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

     useEffect(() => {
        //alert('d')
        props.getalleventlist1(1);
    }, [])

    const getBrandUserId = async () => {
        
        onfilterData(props?.getalleventdata);
    }


    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    // Local states
     const [checked, setChecked] = React.useState('first');

    const [selectedValue, setSelectedValue] = useState("java");
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
    const [isLoading, setIsLoading] = useState(false);
    const [isRefresh, setIsRefresh] = useState(false);
    const [updateextra, setupdateextra] = useState(0);

    const [Paypal, onChangePaypal] = React.useState("Paypal");
    const [Debit, onChangeDebit] = React.useState("Debit Card");
    const [filterData,onfilterData]= React.useState([]);
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
      const joinbroadcast = (itemid,startnow,eventtime)=>{
            if (startnow == true){
                let request1 = {
                    "channelName":itemid,
                    "appID":"0c96ec2a0c9744c0bb3d21330bb0911d",
                    "appCertificate":"f877b72b55264162bfc8b88421fa8b77",
                    "uid":0
                }
                props.getchanneltoken(request1, props.navigation, "vendor");
                setTimeout(function(){
                    props.navigation.navigate("Blurbackground", { isback: false, channel:itemid , isbroadcaster: false });
                },1000);
                //props.navigation.navigate("Blurbackground", { isback: false, channel: itemid, isbroadcaster: false })
            } else {
                alert('Event will start at '+ moment(eventtime).format('MMM DD, hh:mm A'))
            }
      }
    
    const handleRegistrationSubmit = () => {
        Keyboard.dismiss();
        if (First == "") {
            props.getalleventlist1(1);
        }else {
            let filteredData = props?.getalleventdata.filter(function (item) {
                return item.products[0]?.productName.includes(First);
            });
            props.getalleventlist1(filteredData);
        }
    }

    const DATA = [
       {
        text:"Clothing Bazaar - 24 Hours Open",
        text1:"FREE",
        text2:"Today, 7:00 PM",
        text3:"Dar es Salaam, Tanzania",
        image:ImageIcons.popimg,
       },
       {
        text:"Clothing Bazaar - 24 Hours Open",
        text1:"FREE",
        text2:"Today, 7:00 PM",
        text3:"Dar es Salaam, Tanzania",
        image:ImageIcons.popimg1,
       },
        {
        text:"Clothing Bazaar - 24 Hours Open",
        text1:"FREE",
        text2:"Today, 7:00 PM",
        text3:"Dar es Salaam, Tanzania",
        image:ImageIcons.popimg2,
       },
        {
        text:"Clothing Bazaar - 24 Hours Open",
        text1:"FREE",
        text2:"Today, 7:00 PM",
        text3:"Dar es Salaam, Tanzania",
        image:ImageIcons.popimg3,
       },
     ];



const renderItem = ({ item ,index }) => {
   console.log('sdsds')
   return(
    <View style={{paddingVertical:10}}>
      <TouchableOpacity onPress={() =>  props.navigation.navigate('Viewevent')}>
        <Image source={item.image} style={styles.popimg}/>
      </TouchableOpacity>
        <View style={styles.textviewpop1}>
            <Text style={styles.clothpop1}>{item.text}</Text>
            <Text style={styles.redfre}>{item.text1}</Text>
        </View>
        <Text style={styles.todaytxt3}>{item.text2}</Text>
        <Text style={styles.dartxt}>{item.text3}</Text>
    </View>
  );
}


return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.registrationRoot}>
        <View style={{flex:1,marginHorizontal:'3%',marginTop:'10%',paddingBottom:'25%',marginBottom:'25%'}}>
            <View >
                <Text style={styles.popuptext}>Pop-up Events</Text>
            </View>
            <View style={styles.popdirection}>
                <View style={styles.poppiker}>
                     <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 140 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                      >
                        <Picker.Item label="Sort" value="Sort" />
                        <Picker.Item label="JavaScript" value="js" />
                      </Picker>
                </View>
                 
                <TouchableOpacity style={[styles.poppiker3,{flexDirection:'row'}]} onPress={() => openpopup()}>
                    <Image source={ImageIcons.filter} style={styles.fiterimg}/>
                    <Text style={styles.filterpop}>FILTERS</Text>
                </TouchableOpacity>
                
            </View>
            <View >
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
        
        <Footer3 onSelection="4" />
    </KeyboardAvoidingView>
)
}



export default Popevent