import React, { useRef, useState,useEffect } from 'react';
import { Text, View,TouchableOpacity,FlatList,
    Image,TextInput, ImageBackground,
     ScrollView, Alert,StatusBar,Picker, 
      KeyboardAvoidingView,
      Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import styl from './styledrop';
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
import Sortorder from '../../components/pickers/Sortorder';
 const options = ['JavaScript'];

import AsyncStorage from '@react-native-community/async-storage'; 
import moment from 'moment';
import RnIncrementDecrementBtn  from 
'react-native-increment-decrement-button';
 import MapView from 'react-native-maps';
const Viewevent = (props) => {

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
    const [selectedValue, setSelectedValue] = useState("js");
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
    const [isLoading, setIsLoading] = useState(false);
    const [isRefresh, setIsRefresh] = useState(false);
    const [updateextra, setupdateextra] = useState(0);
    const [Brand, onChangeBrand] = React.useState("");

    const [Paypal, onChangePaypal] = React.useState("Paypal");
    const [Debit, onChangeDebit] = React.useState("Debit Card");
    const [filterData,onfilterData]= React.useState([]);
    const [wayToContact, setWayToContact] = useState("Phone");

    
    const [showclassName, setshowclassName] = useState("#B80000");

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

    const updateorderStatus = (itemValue) => {
        setSelectedValue(itemValue)
    }

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

        const handleScroll=(pageYOffset)=>{
        if (pageYOffset > 0) {
            setshowclassName('#B80000');  
        }else{
            setshowclassName('#B80000');
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

const data=[{text:"ALL"},{text:"LIVESTREAM"},{text:"PRODUCTS"},{text:"STORE"},{text:"EVENTS"}]
const DATA1 = [
       {
        text:"Clothing Bazaar - 24 Hours Open",
        text1:"FREE",
        text2:"Today, 7:00 PM",
        text3:"Dar es Salaam, Tanzania",
        image:ImageIcons.popimg,
       },
       
     ];
const renderItempop = ({ item ,index }) => {
   console.log('sdsds')
   return(
    <View style={{paddingVertical:10}}>
      <TouchableOpacity onPress={() =>  props.navigation.navigate('Viewevent')}>
        <Image source={item.image} style={styles.popimg}/>
      </TouchableOpacity>
        <View style={styles.textviewpop}>
            <Text style={styles.clothpop}>{item.text}</Text>
        </View>
        <View>
        <Text style={styles.todaytxt}>{item.text1}</Text>
        <Text style={styles.todaytxt}>{item.text2}</Text>
        <Text style={styles.dartxt}>{item.text3}</Text>
        </View>
    </View>
  );
}

const renderItem = ({ item ,index }) => {
   return(
    <View style={styles.maincartviewshop}>
    <TouchableOpacity onPress={() =>joinbroadcast(item._id,item.startNow,item.joinbroadcast) }>        
       <View style={{marginHorizontal:5}}>
            <Image source={{uri: item.products[0]?.productImage}} style={styles.jeansimg} onPress={() => { props.navigation.navigate("clothing") }} />
            <Text style={styles.beautyproduct}>{item.products[0]?.productName}</Text>
                <View style={{borderRadius:50,position:'absolute',top:10,left:10, backgroundColor:'#E22020'}}>
                 <Text style={styles.shorttest1}>Live</Text>
                </View>
                <View style={styl.comingshort1}>
                <View style={{left:7,top:2}}>
                <Image source={ImageIcons.iconpath} style={{width:18,height:18}}/>
                </View>
                 <Text style={styles.shorttest}>0K</Text>
                </View>
        </View>
        <View style={{flexDirection:"row",marginTop:10}}>
        <View>
        <Image source={ImageIcons.profileimage} style={{width:35,height:35}}/>
        </View>
        <View style={{paddingTop:10,paddingLeft:10}}>
        <Text style={styl.txt1}>MARTHA STEWART</Text>
        </View>
        </View>
        <Text style={styl.txt2}>50% off Friday Sale for all</Text>
       </TouchableOpacity>
    </View> 
  );
} 

const renderItem1 = ({ item ,index }) => {
   return(
    <View>
    <View style={styles.inorder11}>
                            <TouchableOpacity onPress={() => props.navigation.navigate("SearchProduct")}>
                            <View style={styles.livec24}>
                                <Text style={styles.livec12}>{item.text}</Text>
                            </View>
                            </TouchableOpacity>        
    </View> 
    </View>
  );
} 


    return (
         <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
            
            <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFFFFF'}} >

             <View style={{marginHorizontal:'3%',paddingTop:'10%'}}>
             <Text style={{padding:10,fontSize:32,color:"#B80000",fontFamily:'hinted-AvertaStd-Bold',fontWeight:"bold"}}>Pop-up Events</Text>
              <View >
                <FlatList
                    data={DATA1}
                    renderItem={renderItempop}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                />
               </View> 
             <View style={{borderBottomWidth:1,marginVertical:"8%"}}></View>
             <View style={{flexDirection:'row'}}>
             
             <View>
             <Text style={styles.todaytxt1}>Ticket Quantity</Text>
             <View style={{marginTop:"4%"}}>
                        <RnIncrementDecrementBtn
                        minVal={1} 
                        minreq={1} 
                        max={99}
                        //val={parseInt(item.productQuantity)}
                        styleBtn={{width:30.6,height:26,backgroundColor:'#F3F3F3'}}
                        styleTextInput={{width:38.25,height:26,backgroundColor:'#F3F3F3'}}
                        labelStyle={{fontSize:15,marginTop:'1%',color:'#223263',fontFamily:'hinted-AvertaStd-Regular'}}
                        //handleClick={(val)=> setIncrement(val,item._id)}
                        />
                    </View>   
             </View>
             <TouchableOpacity style={{width:240, backgroundColor:"#B80000",marginLeft:'3%',borderRadius:30 }} onPress={() => { checklogin() }}>
                        <Text style={{textAlign:'center' ,color:"#FFFFFF",fontWeight:'bold',fontSize:18,top:12}}>Reserve Ticket?</Text> 
                        </TouchableOpacity>
            </View>

            <View style={{marginTop:"8%"}}><Text style={styles.clothpop}>About the Event</Text></View>
            <View style={{marginBottom:"8%",marginHorizontal:2}}>
            <Text style={{fontSize:18,fontFamily:"hinted-AvertaStd-Regular"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie ullamcorper porta id nulla pulvinar 
            pharetra feugiat a consectetur. Tortor, vulputate vitae,
             molestie cras sit ornare enim. Sed dolor, justo, quam elit pulvinar feugiat quam. {'\n'}
            Egestas adipiscing sit orci, varius in id. Integer lacus consectetur cursus netus cursus faucibus. Placerat pretium malesuada pulvinar sed ornare 
            turpis arcu elit. Nisl volutpat urna diam lorem nulla adipiscing hendrerit arcu nec. Faucibus.
            </Text>
            </View>

            <View style={{marginTop:"8%"}}><Text style={styles.clothpop}>Sign Up to Participate</Text></View>
            <View style={{marginHorizontal:2}}>
            <Text style={{fontSize:18,fontFamily:"hinted-AvertaStd-Regular"}}>Are you a store owner looking to participate in this event? Fill 
            in your details below or select the brand you’d like to participate with. 
            </Text>
            </View>

            <View style={[styles.poppiker,{width:200,marginTop:"6%"}]}>
                     <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />
            </View>
            <View style={[styles.devider1, { marginTop: '3%'}]}>
                <View style={styles.devider2} />
                <Text style={styles.devider3}>OR</Text>
                <View style={styles.devider2} />
            </View>
            <View style={{flexDirection:"row"}}>
             <TouchableOpacity style={[styles.poppiker2,{}]} onPress={() => openpopup()}>
                    <Text style={styles.filterpop1}>Brand Name</Text>
                    <Text style={styles.filterpop}>Sneakerz</Text>
             </TouchableOpacity>
             <View style={[styles.poppiker,{width:195,marginLeft:"2%"}]}>
                    <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />
            </View>
            </View>
            
            <View style={{}}>
                    <TextInput
                    style={styles.inputcategory1}
                    onChangeText={onChangeBrand}
                    value={Brand}
                    placeholder="Please describe your Brand"
                    placeholderTextColor="#4d4d4d" 
                    />
             </View>

            <TouchableOpacity style={{width:'80%', marginLeft:'10%',backgroundColor:"#B80000",borderRadius:30,marginTop:"3%",height:63 }} onPress={() => { checklogin() }}>
                        <Text style={{textAlign:'center' ,color:"#FFFFFF",fontWeight:'bold',fontSize:18,top:18}}>SUBMIT REQUEST</Text> 
            </TouchableOpacity>
            <View style={{marginBottom:"25%",marginTop:"12%"}}><Text style={styles.clothpop}>Location Details</Text>
            <Text style={styles.todaytxt}>Hakima Garden</Text>
            <Text style={styles.todaytxt2}>Eysi Road</Text>
            <Text style={styles.todaytxt2}>Der es salam,Der es salam</Text>
            </View>
            </View>
            </ScrollView>
            <Footer3 onSelection="4" />
        </KeyboardAvoidingView>
    )
}



export default Viewevent