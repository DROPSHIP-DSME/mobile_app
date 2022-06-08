import React, { useRef, useState,useEffect } from 'react';
import { Text, View,Dimensions,TouchableOpacity,Image,TextInput,FlatList, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard,StatusBar} from 'react-native';
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
import Footer3 from '../../screens/auth/Footer3';
import {FlatListSlider} from '../../components/react-native-flatlist-slider';
import { SliderBox } from "react-native-image-slider-box";
import { v4 as uuid } from "uuid";
import AsyncStorage from '@react-native-community/async-storage'; 
import Video from 'react-native-video';
import { requestMultiplePermisisons } from '../../services/Permissions'
import moment from 'moment';

import AwesomeAlert from 'react-native-awesome-alerts';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
 
const watchlist = (props) => {

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
    const userId = props?.route?.params?.userId;
    const [First, onChangeFirst] = React.useState("First name");
    const [Lastname, onChangeLastname] = React.useState("Last name");
    const [Email, onChangeEmail] = React.useState("Email address");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("Phone number");
    const [Street, onChangeStreet] = React.useState("Street address");
    const [Zip, onChangeZip] = React.useState("Zip");
    const [City, onChangeCity] = React.useState("City");
    const [Country, onChangeCountry] = React.useState("Country");

    const [visible, setVisible] = React.useState(false);
    const [showAlert, setshowAlert] = React.useState(false);
    const [showotherAlert, setshowotherAlert] = React.useState(false);
    const [helppopup, sethelppopup] = React.useState(false);
    const [text1, onChangeText1] = React.useState("");
    const [showalertmsg, setshowalertmsg] = React.useState('');

    const [Paypal, onChangePaypal] = React.useState("Paypal");
    const [Debit, onChangeDebit] = React.useState("Debit Card");
    const [playvideoURI, setplayvideoURI] = React.useState("");

    const [wayToContact, setWayToContact] = useState("Phone");
    const [showclassName, setshowclassName] = useState("#FFFFFF00");

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
       // AsyncStorage.setItem('UserId','');
        //AsyncStorage.setItem('userLogin','');
        //getBrandUserId();
        //alert(props?.loginuserid)
        props.getsupportlist(props?.loginuserid);

        props.getAllproduct(1);
        props.getalleventlist(1);
        props.getwatchlistproduct(props?.loginuserid);
        console.log('props?.showwatchlistproduct',props?.showwatchlistproduct)
        if (Platform.OS === 'android') requestMultiplePermisisons();
    }, [])

    const handleScroll=(pageYOffset)=>{
        if (pageYOffset > 0) {
            setshowclassName('#B80000');  
        }else{
            setshowclassName('#FFFFFF00');
        }
    }

    const getBrandUserId = async () => {
        if(userId!="" && userId!=undefined){
            await AsyncStorage.setItem('UserId',userId);
            await AsyncStorage.setItem('userLogin',"1");
        }else {
            var userLogin =  await AsyncStorage.getItem('userLogin');
            // if(userLogin!="1"){
            //     await AsyncStorage.setItem('UserId',uuid());
            //     await AsyncStorage.setItem('userLogin',"0");
            // }
        }
    }

    const newtrending =() =>{
        props.getalleventlist(1);
        props.getwatchlistproduct(props?.loginuserid);
    }

    const openpopup = (videouri) => {
        setplayvideoURI(videouri)
        setVisible(true)
    }
            const closepopup = () => {
          setVisible(false)
        }
       const containerStyle = { position:'absolute', top:'10%', width:'100%',backgroundColor: 'white', padding: '1%',marginHorizontal:'1%',alignItems:'center'};

    // Vendor request submission
   
    const SHOWDATSA = [
        {
            name:'ALL',
            color:'#E6E6E6'
        },
        {
            name:'LIVESTREAMS',
            color:'#B80000'
        },
        {
            name:'PRODUCTS',
            color:'#E6E6E6'
        },
        {
            name:'STORES',
            color:'#E6E6E6'
        },
        {
            name:'SHOPS',
            color:'#E6E6E6'
        },
        {
            name:'EVENTS',
            color:'#E6E6E6'
        }
    ]

const images = [
   /*{
    image:'https://smartops.co.in/images/brandvideo.mp4',
    desc: 'Silent Waters in the mountains in midst of Himilayas',
   },*/
  {
    image:'https://drp-s3-1.s3.us-east-2.amazonaws.com/GlowBruleeVideo.mp4',
    desc:
      'Glow Brulee',
  },
  {
    image:'https://drp-s3-1.s3.us-east-2.amazonaws.com/Ikevideo.mp4',
    desc:
      'IKE NARTEY ESSENTIALS',
  },
  {
    image:'https://drp-s3-1.s3.us-east-2.amazonaws.com/SolrayzVideo.mp4',
    desc:
      'Solrayz Jewelry',
  },
  {
    image:'https://drp-s3-1.s3.us-east-2.amazonaws.com/TerraMoonVideo.mp4',
    desc:
      'Terra Moon',
  },
  {
    image:'https://drp-s3-1.s3.us-east-2.amazonaws.com/Video.mp4',
    desc:
      'The Ruby Unicorn',
  },
  ]
    
     const DATA = [
       {
        text:'Beauty brands',
        image:ImageIcons.basket,
        image2:ImageIcons.liveicon,
       },
        {
       text:'Beauty brands',
        text2:'Live tomorrow at 10PM',
        image:ImageIcons.clothes,
       },
        {
        text:'Beauty brands',
        text2:'Live tomorrow at 10PM',
        image:ImageIcons.basket,
       },
       
       

     ];

      const DATA2 = [
       {
            text:'Beauty brands',
            image:ImageIcons.basket,
            imageicon:ImageIcons.theme3,
            text2:'Live tomorrow at 10PM',
       },
        {
            text:'Beauty brands',
            text2:'Live tomorrow at 10PM',
            image:ImageIcons.clothes,
            imageicon:ImageIcons.theme3,
       },
     ];

    const joinbroadcast = (itemid,startnow,eventtime) =>{
        //if (startnow == true){
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
        // } else {
        //     setshowotherAlert(true)
        //     setshowalertmsg('Event will start at '+ moment(eventtime).format('MMM DD, hh:mm A'))
        // }
    }
     

    const showConfirmDialog = () => {
        if(props?.loginuserstatus=="1"){
            navigation.navigate('Newprofile'); 
        }else {

            setshowAlert(true)
        }
    };
const data = [
       {
        text:"Fashion",

       },
        {
        text:"Jewelry",
       },
        {
        text:"Fashion",
       },
        {
        text:"Fashion",
       },
        {
        text:"Fashion",
       },

     ];

const handleSendRequestSubmit = async () => {
        let request = {
            "userId":props?.loginuserid,
            "message":text1,
            "msgDate":new Date()
        }
        onChangeText1('');
        props.support(request, props.navigation, "vendor");
    }

const renderItem1 = ({ item ,index }) => {
   return(
    <View>
    <TouchableOpacity onPress={() => joinbroadcast(item._id,item.startNow,item.eventdate)}>        
        <View style={{marginHorizontal:5,borderRadius:5}}>
                <Image source={{uri: item.products[0]?.productImage}} style={styles.imgbasket} />
                <Text style={styles.beautyproduct}></Text>
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
        <View style={styl.rowdrop}>
        <View>
        <Image source={ImageIcons.profileimage} style={{width:35,height:35}}/>
        </View>
        <View style={{paddingTop:10,paddingLeft:10}}>
        <Text style={styl.txt1}>{item.products[0]?.productName}</Text>
        </View>
        </View>
        <Text style={styl.txt2}></Text>
       </TouchableOpacity>
    </View> 
  );
} 

 const renderItem = ({ item ,index }) => {
   return(
    <View>
        <TouchableOpacity style={{marginHorizontal:5}} onPress={()=>props.navigation.navigate("NameStore",{productId:item._id,userId:item._id, productQuantity:item.productQuantity})}>
            <Image source={{uri: item.productImage}} style={styles.imgbasket} />
            <Text style={styles.beautyproduct}>{item.productName}</Text>
            <Text style={styles.uplivetext}></Text>

            <View style={{borderRadius:50,position:'absolute',top:10,left:10, backgroundColor:'#E22020'}}>
                <Text style={styles.shorttest1}>Live</Text>
            </View>
            <View style={styl.comingshort1}>
                <View style={{left:7,top:2}}>
                    <Image source={ImageIcons.iconpath} style={{width:18,height:18}}/>
                </View>
                <Text style={styles.shorttest}>0K</Text>
            </View>

        </TouchableOpacity>
      <View style={styl.rowdrop}>
        <View>
        <Image source={ImageIcons.profileimage} style={{width:35,height:35}}/>
        </View>
        <View style={{paddingTop:10,paddingLeft:10}}>
        <Text style={styl.txt1}>{item.productName}</Text>
        </View>
        </View>
        <Text style={styl.txt2}></Text>
    </View> 
  );
}
 const renderItem2 = ({ item ,index }) => {
   return(
       <View style={{marginHorizontal:3}}>
            <Image source={{uri: item.productId.productImage}} style={styles.imgbasket} />
            <Text style={[styles.beautyproduct,{position:'absolute',top:210,zIndex:2001}]}>{item.productId.productName}</Text>
            <View style={{flexDirection:'row',position:'absolute',top:5,left:'5%'}}>
                <View style={{borderRadius:50,position:'absolute',top:5,left:5, backgroundColor:'#E22020'}}>
                    <Text style={styles.shorttest1}>Live</Text>
                </View>
                <View style={styl.comingshort1}>
                
                </View>
            </View>
            <View style={styl.rowdrop}>
                <View>
                    <Image source={ImageIcons.profileimage} style={{width:35,height:35}}/>
                </View>
                <View style={{paddingTop:10,paddingLeft:10}}>
                    <Text style={styl.txt1}>MARTHA STEWART</Text>
                </View>
            </View>
            <Text style={styl.txt2}>50% off Friday Sale for all</Text>
 
    </View> 
  );
}

const renderItem6 = ({ item }) => {
            return(
                <View>
                    { item.userId.userName=='Admin' ?
                       <View>
                        <View style={styles.chatrightView}>
                           <Text style={styles.hellotext}>{item.message}</Text>
                        </View>
                         <Text style={styles.chattingtime}>{ moment(item.msgDate).format('hh:mm A')}</Text>
                        </View>
                    :
                        <View>
                        <View style={styles.chatlongView}>
                          <Text style={styles.chattingtext}>{item.message}</Text>
                        </View>
                        <Text style={styles.chattingtime2}>{moment(item.msgDate).format('hh:mm A')}</Text>
                        </View>

                    }
                </View>
            );
    }

    const renderItem3 = ({ item ,index }) => {
        return(
           <View>
                <View style={styles.newlivec25}>
                    <Text style={styles.livec12}>#{item.text}</Text>
                </View>
           </View>
        );
    }

    const renderItem5 = ({ item ,index }) => {
        return(
            <View style={{borderRadius:10,marginRight:10,padding:10,backgroundColor:`${item.color}`}}>
             { item.color=='#B80000'?
                    <Text style={{color:'#ffffff',fontFamily:'hinted-AvertaStd-Semibold',paddingHorizontal:10}}>{item.name}</Text>
                :
                    <Text style={{fontFamily:'hinted-AvertaStd-Semibold',paddingHorizontal:10}}>{item.name}</Text>
             }
            </View>
        );
    }

    

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
            <StatusBar backgroundColor={showclassName} barStyle="dark-content" translucent={true} />
            <View style={{flexDirection:'row',backgroundColor:showclassName,alignItems:'center',justifyContent:'space-between',top:'3%',zIndex:1001,position:'absolute',width:'100%',padding:'3%'}}>
                
                <View>
                {showclassName=='#FFFFFF00' ?
                    <Image source={ImageIcons.logored_1} style={{width:70,height:57}}/>
                :
                    <Image source={ImageIcons.logored} style={{width:70,height:57}}/>
                }
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20}}>
                    {/*<TouchableOpacity onPress={() => props.navigation.navigate("Search")}>
                                            <Image source={ImageIcons.white_search} style={{width:21,height:20}}/>
                                        </TouchableOpacity>*/}
                   
                    <TouchableOpacity onPress={() => props.navigation.navigate("Notification")} style={{marginHorizontal:'5%'}}>
                        <Image source={ImageIcons.bell} style={{width:21,height:21,}}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => { props.navigation.navigate('Cart') }}>
                        <View style={{flexDirection:'row'}}>
                            <Image source={ImageIcons.whitecart} style={{width:18,height:20.6,}}/>
                            <Text style={styles.numtext}>0</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
            }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFFFFF'}} >

            <View >
                <View>
                    <FlatListSlider
                        data={images}
                        height={375}
                        timer={10000}
                        loop={false}
                        contentContainerStyle={{paddingHorizontal: 0}}
                        indicatorContainerStyle={{position:'absolute', bottom: 20,right:20}}
                        indicatorActiveColor={'#FFFFFF'}
                        indicatorInActiveColor={'#8A8A8A'}
                        indicatorActiveWidth={5}
                        animation
                    />  
                </View>

            
                <TouchableOpacity onPress={() => props.navigation.navigate("Search")}>
                <View style={{flexDirection:'row',marginVertical:'5%',height:50,width:deviceWidth/1.1,backgroundColor:'#E6E6E6',borderRadius:10,alignItems:'center',alignSelf:'center'}}>
                    <View style={{marginLeft:'4%',marginTop:'1%'}}>
                    <Image source={ImageIcons.redsearchtoday}  style={{height:14,width:14,}} />
                   </View>
                    <Text style={{marginHorizontal:'2%'}}> Search for anything</Text>
                    
                </View>
                </TouchableOpacity>
                <View style={[styles.maincartview,{marginBottom:'3%',marginTop:'1%'}]}>
                    <FlatList
                        data={SHOWDATSA}
                        renderItem={renderItem5}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />

                    
                    
                </View>

                <View style={{marginLeft:10,marginTop:5}}>
                    <FlatList
                        data={props?.getalleventdata || []}
                        renderItem={renderItem1}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />
                </View>
                
                 
                 
               
                <View style={{marginLeft:10,marginTop:35}}>
                    <FlatList
                        data={props?.getlistproduct || []}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                         horizontal={true}
                    />
                </View>
                <View style={{marginHorizontal:'4%',marginTop:"5%"}}>
                    <Image source={ImageIcons.newimg} style={styles.newimg} />
                </View> 
                <TouchableOpacity onPress={() => props.navigation.navigate('upcoming')}>
                        <Text style={styles.salestextbtn}>VIEW ALL LIVESTREAMS</Text>
                    </TouchableOpacity>

                
                <View style={{marginLeft:10,marginTop:35}}>
                    <FlatList
                        data={props?.getlistproduct || []}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                         horizontal={true}
                    />
                </View>
                

                <TouchableOpacity>
                    <View style={{marginBottom:'18%',marginLeft:'3%',marginTop:35}}>
                        <FlatList
                            data={props?.showwatchlistproduct || []}
                            renderItem={renderItem2}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                        />
                    </View>
                </TouchableOpacity>
                 
            </View>
                 
                
        </ScrollView>
       { helppopup ==true &&
        <View style={{flex:1,backgroundColor:'#f9f9f9',margin:20,paddingVertical:10,borderRadius:10,zIndex:4001, position:'absolute',bottom:'20%'}}>
            
           
              <View style={styles.chatViewrose}>
                    
                <Text style={styles.Benrosetext}>Write to Customer Support</Text>
                <TouchableOpacity style={{position:'absolute',right:15,top:5}} onPress={() => sethelppopup(false)}>
                    <Image source={ImageIcons.closepopup}  style={styles.sendmsg2} />
                </TouchableOpacity>
            </View>
            
            <View style={[styles.accountmainview,{marginBottom:50, width:'100%'}]}>
            <View style={{width:'90%'}}>
                <TextInput  style={[styles.chatinput,{height:120,width:'100%'}]}
                placeholder="Type here..."
                onChangeText={onChangeText1}
                value={text1}
                placeholderTextColor="#999999"
                />
            </View>
                <TouchableOpacity style={{position:'absolute',right:'50%',bottom:-50}} onPress={() => handleSendRequestSubmit()}>
                    <View style={{borderRadius:10,marginRight:10,padding:10,backgroundColor:'#B80000'}}>
                         <Text style={{color:'#ffffff',fontFamily:'hinted-AvertaStd-Semibold',paddingHorizontal:10}}>Send</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        }
        
            <View style={{ position:'absolute',zIndex:2001,right:20,bottom:70}}>
               <TouchableOpacity onPress={() => sethelppopup(true)}>
                    <Image source={ImageIcons.exporthelp} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>
        
    <Footer3 onSelection="1" />
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="DROPSHIP"
          message="You need to login to access this screen!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Cancel"
          confirmText="Login"
          confirmButtonColor="#E22020"
          onCancelPressed={() => {
            setshowAlert(false)
          }}
          onConfirmPressed={() => {
             setshowAlert(false)
             navigation.navigate('Golive');
          }}
        />

        <AwesomeAlert
          show={showotherAlert}
          showProgress={false}
          title="DROPSHIP"
          message={showalertmsg}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={false}
          cancelText="Close"
          confirmText="Login"
          confirmButtonColor="#E22020"
          onCancelPressed={() => {
            setshowotherAlert(false)
          }}
        />

        </KeyboardAvoidingView>
    )
}


export default watchlist;