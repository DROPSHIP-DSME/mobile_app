import React, { useRef, useState,useEffect } from 'react';
import { Text, Picker,View,TouchableOpacity,Image,TextInput,FlatList, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import CalendarPicker from 'react-native-calendar-picker';
import {TimePicker} from 'react-native-simple-time-picker';
import 'react-native-get-random-values';
import { v4 as uuid } from "uuid";
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import SimplePicker from 'react-native-simple-picker';
import Share from 'react-native-share';
import Clipboard from '@react-native-community/clipboard';
import Sortorder from '../../components/pickers/Sortorder';
const options = ['00:00 AM', '12:30 AM', '1:00 AM', '1:30 AM','2:00 AM','2:30 AM','3:00 AM','3:30 AM','4:00 AM',
'4:30 AM','5:00 AM','5:30 AM','6:00 AM','6:30 AM','7:00 AM','7:30 AM','8:00 AM','8:30 AM','9:00 AM','9:30 AM',
'10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM',
'3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM',
'8:30 PM','9:00 PM','9:30 PM','10:00 PM','10:30 PM','11:00 PM','11:30 PM']

const schedule = (props) => {

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
        props.getbrandName(props?.loginuserid);

    }, [])

     const getBrandUserId = async () => {

        var getUserId = await AsyncStorage.getItem('UserId');

        props.liveeventdetail(props?.loginuserid);
        setUserID(props?.loginuserid);
    }

    const customStyle = {
    calendarControls: {
      backgroundColor: 'blue',
    },
  }
    const options = ['Option1', 'Option2', 'Option3'];
    const labels = ['Banana', 'Apple', 'Pear'];

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    // Local states
     const [checked, setChecked] = React.useState('second');
     const [hours, setHours] = React.useState('8:00 AM');
     const [minutes, setMinutes] = React.useState(0);
     const [UserID, setUserID] = useState("");

     const [selectedStartDate, setSelectedStartDate] = useState(new Date());
     const [selectedEndDate, setSelectedEndDate] = useState(null);

    const [Name, onChangeName] = React.useState("");
    const [Lastname, onChangeLastname] = React.useState("Last name");
    const [Email, onChangeEmail] = React.useState("Email address");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("Phone number");
    const [Street, onChangeStreet] = React.useState("Street address");
    const [Zip, onChangeZip] = React.useState("Zip");
    const [City, onChangeCity] = React.useState("City");
    const [Country, onChangeCountry] = React.useState("Country");
    const [Duration, setDuration] = React.useState(1200);
    const [producttype, setproducttype] = React.useState('new');

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



    const setdeletedata = async (eventId,product_id) => {
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
        onPress: () =>{ props.removedata(eventId,product_id,props.navigation)
        setTimeout(function(){ props.liveeventdetail(UserID); },100)},
        // style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  );


     };
    const schedulebutton = async () => {
       // alert(props?.livedetail[0]._id)
        let request = {
                "eventId":props?.livedetail[0]._id,
                "eventdate":selectedStartDate,
                "eventtime":hours,
                "EventDuration":Duration,
                "eventType":producttype
        }
        props.schuleEvent(request, props.navigation, "vendor");
     }

const handleChange1 = (value: {hours: number, minutes: number}) => {
    setHours(value.hours);
    setMinutes(value.minutes);
  };
    const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

     const showTimepicker = () => {
    showMode('time');
  };

    const openshare=()=>{
        let options = {
          message: 'To join our broadcast, click here',
          url: 'https://com.dropship/'+props?.livedetail[0]._id,
        };
      Share.open(options);
    }


    const copyToClipboard=()=>{
        Clipboard.setString('com.dropship/'+props?.livedetail[0]._id);
        alert('Link copied!');
    }

    const opensingleshare=(social)=>{
        if(social=='whatsapp'){
            const shareOptions = {
                title: 'com.dropship/'+props?.livedetail[0]._id,
                message: 'com.dropship/'+props?.livedetail[0]._id,
                url: 'com.dropship/'+props?.livedetail[0]._id,
                social: Share.Social.WHATSAPP,
              };
            Share.shareSingle(shareOptions)
        }
        if(social=='telegram'){
            const shareOptions = {
                title: 'com.dropship/'+props?.livedetail[0]._id,
                message: 'com.dropship/'+props?.livedetail[0]._id,
                url: 'com.dropship/'+props?.livedetail[0]._id,
                social: Share.Social.TELEGRAM,
              };
            Share.shareSingle(shareOptions)
        }
        if(social=='twitter'){
            const shareOptions = {
                title: 'com.dropship/'+props?.livedetail[0]._id,
                message: 'com.dropship/'+props?.livedetail[0]._id,
                url: 'com.dropship/'+props?.livedetail[0]._id,
                social: Share.Social.TWITTER,
              };
            Share.shareSingle(shareOptions)
        }
        if(social=='email'){
            const shareOptions = {
                title: 'com.dropship/'+props?.livedetail[0]._id,
                message: 'com.dropship/'+props?.livedetail[0]._id,
                url: 'com.dropship/'+props?.livedetail[0]._id,
                social: Share.Social.EMAIL,
              };
            Share.shareSingle(shareOptions)
        }
    }

    const openpopup = () => {
        setVisible(true)

        }
            const closepopup = () => {
          setVisible(false)
        }
       const containerStyle = {backgroundColor: 'white', padding: '7%',marginHorizontal:'5%',alignItems:'center'};

    // Vendor request submission
    const handleSendRequestSubmit = async () => {

    }

    const onDateChange = (date, type) => {
      //  alert(date)
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);

    }
    var getdate= moment(date).format("YYYY-MM-DD")
    //var getTime= moment(date).format("HH:mm")
    //alert(getdate);
    //alert(getTime);
    setSelectedStartDate(getdate);
    //setHours(getTime);
    //setMinutes(value.minutes);
  };
    const DATA = [
       {
        text:'Knitted Harajuku ',
        text1:'Winter clothes',
        image:ImageIcons.winterimage,
        image1:ImageIcons.reddelete,
       },
        {
       text:'Knitted Harajuku ',
       text1:'Winter clothes',
        image:ImageIcons.winterimage,
        image1:ImageIcons.reddelete,
       },
        {
        text:'Knitted Harajuku ',
        text1:'Winter clothes',
        image:ImageIcons.winterimage,
        image1:ImageIcons.reddelete,
       },



     ];

const renderItem = ({ item }) => {
     console.log('itemorder',item)

   return(
            <View >
              <FlatList
                data={item.products}
                renderItem={renderItem1}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            />
            </View>
  );
}

const renderItem1 = ({ item ,index }) => {
   return(
    <View style={{marginRight:20,marginTop:10}}>

        <View>
          <View style={{position:'absolute', right:10,top:10,zIndex:2001,shadowColor: "#000",
shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5}}>
            <TouchableOpacity onPress={() =>setdeletedata(props?.livedetail[0]._id,item._id)}>
                <Image source={ImageIcons.reddelete} style={{width:14,height:17}}  />
            </TouchableOpacity>
            </View>
          <Image source={{ uri:item.productImage }} style={styles.jeansimg2} />
          <View>
            <Text style={{color:'#000000',fontSize:15,fontFamily:'hinted-AvertaStd-Semibold',lineHeight:19}}>{item.productName}</Text>
            <Text style={{color:'#000000',fontSize:12,fontFamily:'hinted-AvertaStd-Regular',lineHeight:15}}>${item.productPrice}</Text>
          </View>
        </View>
    </View>
  );
}

const renderItem3 =({ item }) =>{
    return(
        <View style={styles.maincartview}>
        <View>
           <Image source={{ uri:item.productImage }} style={styles.jeansimg2} />
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
               <View>
                   <Text style={styles.boldproduct} numberOfLines={1}>{item.productName}</Text>
                   <Text style={styles.salestext}>${item.productPrice}</Text>
                </View>
                <View>
                    <TouchableOpacity   onPress={() =>setdeletedata(props?.livedetail[0]._id,item._id)}>
                        <Image source={ImageIcons.reddelete} style={styles.reddeleteimg}  />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>

 );
}
const renderItem2 =({ item }) =>{

    return(
        <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:15,marginVertical:6,}}>
            <View style={{flexDirection:'row',}}>
               <Image source={{ uri:item.productImage }}  style={styles.Clothe} />
                <View style={{marginHorizontal:3}}>
                    <Text style={styles.startrecordtext}>{item.productName}</Text>
                    <Text style={styles.startrecordtext}>${item.productPrice}</Text>
                </View>
            </View>
           <View >
           <TouchableOpacity   onPress={() =>setdeletedata(props?.livedetail[0]._id,item._id)}>
           <Image source={ImageIcons.reddelete} style={styles.reddeleteimg}  />
           </TouchableOpacity>
          </View>

        </View>
        <View style={styles.boderlineview} />
        </View>
        );
}

    return (
         <View style={{flex:1,backgroundColor:'#FFE7E7'}}>


<ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7',marginBottom:60}} >
             <View style={{marginHorizontal:'3%',marginTop:'4%',}}>
                <View style={{marginTop:'2%',flexDirection: 'row',}}>
                   <TouchableOpacity  onPress={() => {props.navigation.navigate("StartRecording") }}>
                    <View style={{flexDirection: 'row',}}>
                     <Image source={ImageIcons.ci_radio} />
                        <Text style={styles.recodingtext}>Start livestream</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => {props.navigation.navigate("") }}>
                    <View style={{flexDirection: 'row',marginLeft:'3%'}}>
                    <Image source={ImageIcons.ci_radio_filled} />
                    <Text style={styles.recodingtext2}>Schedule live event</Text>
                    </View>
                    </TouchableOpacity>
                </View>

                    <View style={{marginHorizontal:'5%'}}>
                    <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={false}
                    minDate={new Date(2018, 1, 1)}
                    maxDate={new Date(2050, 6, 3)}
                    weekdays={
                    [
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thur',
                    'Fri',
                    'Sat',
                    'Sun'
                    ]}
                    months={[
                    'January',
                    'Febraury',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                    ]}
                    previousTitle="Previous"
                    nextTitle="Next"
                    todayBackgroundColor="#e6ffe6"
                    selectedDayColor="#66ff33"
                    selectedDayTextColor="#000000"
                    scaleFactor={375}
                    textStyle={{
                    fontFamily: 'Cochin',
                    color: '#000000',
                    }}
                    onDateChange={onDateChange}
                    />
                    </View>
                     <View>
                        <Text style={styles.linketext}>Set time</Text>
                     </View>
                    <View style={{ marginBottom:10,paddingLeft:10, marginTop:10,flexDirection:'row', justifyContent:'space-between', width:'100%', borderWidth:1,borderRadius:5, borderColor:'#ABABAB'}}>

                        <Sortorder options={options} />

                    </View>
                    <View style={{marginHorizontal:'1%',marginVertical:'2%'}}>
                        <Text style={styles.selectlinketext}>Select stream time</Text>
                        <View style={{marginTop:10, marginBottom:20,flexDirection: 'row',justifyContent:'space-around',paddingRight:'22%'}}>

                        <TouchableOpacity onPress={() =>setDuration(1200)}>
                        { Duration==1200 ?
                            <View style={{backgroundColor:'#20639B',borderRadius:5,borderWidth:1,borderColor:'#ff0000'}}>
                               <Text style={styles.recodingtextmint}>20 minutes</Text>
                            </View>
                        :
                            <View style={{backgroundColor:'#20639B',borderRadius:5}}>
                               <Text style={styles.recodingtextmint}>20 minutes</Text>
                            </View>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>setDuration(1800)}>
                        { Duration==1800 ?
                            <View style={{backgroundColor:'#3CAEA3',borderRadius:5,borderWidth:1,borderColor:'#ff0000'}}>
                               <Text style={styles.recodingtextmint}>30 minutes</Text>
                            </View>
                        :
                            <View style={{backgroundColor:'#3CAEA3',borderRadius:5}}>
                               <Text style={styles.recodingtextmint}>30 minutes</Text>
                            </View>
                        }
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>setDuration(2700)}>
                        { Duration==2700 ?
                            <View style={{backgroundColor:'#F6D55C',borderRadius:5,borderWidth:1,borderColor:'#ff0000'}}>
                               <Text style={[styles.recodingtextmint,{color:'#000000'}]}>45 minutes</Text>
                            </View>
                        :
                            <View style={{backgroundColor:'#F6D55C',borderRadius:5}}>
                               <Text style={[styles.recodingtextmint,{color:'#000000'}]}>45 minutes</Text>
                            </View>
                        }
                    </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{marginVertical:'1%'}}>
                        <View style={{marginBottom:10}}>
                            <Text style={styles.selectlinketext}>Product type</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={() =>setproducttype('new')}>
                            { producttype=='new' ?
                                <View style={[styles.Viewleftnewsell,{borderWidth:1,borderColor:'#ff0000'}]} >
                                    <Text style={styles.yellowboxtextnew}>New Goods</Text>
                                </View>
                            :
                                <View style={[styles.Viewleftnewsell]} >
                                    <Text style={styles.yellowboxtextnew}>New Goods</Text>
                                </View>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>setproducttype('overstock')}>
                             { producttype=='overstock' ?
                                <View style={[styles.Viewleftnewsell2,{borderWidth:1,borderColor:'#ff0000'}]} >
                                    <Text style={styles.yellowboxtextnew}>Overstock Goods</Text>
                                </View>
                            :
                                <View style={styles.Viewleftnewsell2} >
                                    <Text style={styles.yellowboxtextnew}>Overstock Goods</Text>
                                </View>
                            }
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.directionView}>
                        <Text style={styles.linketext}>Products to sell</Text>
                            <TouchableOpacity  onPress={() => { props.navigation.navigate("Selectproduct",{ eventId:props?.livedetail[0]._id,pageName:'schedule' }) }}>
                                <View style={styles.productcircletext}>
                                    <Image source={ImageIcons.circle} />
                                    <Text  style={styles.addredtext}>Add Product</Text>
                                </View>
                            </TouchableOpacity>
                    </View>

                    <View>
                        <FlatList
                            data={props?.livedetail || []}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                     </View>
         </View>
                <TouchableOpacity onPress={() =>  openshare() } >
                   <View style={styles.produview}>
                        <Text style={styles.invitetext}>Invite audience</Text>
                        <Image source={ImageIcons.shareicon} style={{alignSelf:'center',marginLeft:5}}/>
                    </View>
                </TouchableOpacity>
               <View style={{marginBottom:'8%',marginHorizontal:'2%'}} >
                    <TextInput
                    style={styles.inputlink}
                    onChangeText={onChangeName}
                     value={"com.dropship/"+props?.livedetail[0]._id}
                     placeholder={"com.dropship/"+props?.livedetail[0]._id}
                     onSubmitEditing={() => handleSendRequestSubmit()}
                     placeholderTextColor="#999999"
                    />
                    <View style={{position:'absolute',backgroundColor:'#FFF0F0',paddingLeft:10,width:30,height:15,alignSelf:'flex-end',marginTop:'7%',right:'6%'}}>
                        <TouchableOpacity onPress={() =>  copyToClipboard() } >
                            <Image source={ImageIcons.copypaste} style={styles.copyimg} />
                        </TouchableOpacity>
                    </View>
                </View>
              <View style={{alignItems:'center',marginBottom:'5%'}}>
                    <TouchableOpacity
                        style={styles.TouchableOpacitybrand}
                        activeOpacity = { .5}
                        onPress={() => schedulebutton()}>
                        <Text style={styles.recodingbutton}>Schedule</Text>
                    </TouchableOpacity>
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
         <Image source={ImageIcons.golivered}  style={styles.footer3img} />
         <Text style={styles.customertextfooter2}>Go Live</Text>
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
        </View>
    )
}


export default schedule
