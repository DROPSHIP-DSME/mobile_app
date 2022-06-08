import React, { useEffect, useRef, useState } from 'react'
import { Text, View, Image, TouchableOpacity,Picker, Keyboard,TextInput, Dimensions, FlatList, AppState, KeyboardAvoidingView, Platform, Alert, ScrollView,StatusBar } from 'react-native'
import RtcEngine, { ChannelProfile, ClientRole, RtcLocalView, RtcRemoteView, VideoRemoteState } from "react-native-agora";
import io from "socket.io-client";
import { useSelector, useDispatch } from 'react-redux'
import styles from './style'
import newstyles from './styles';
import { Colors, fonts, Images } from '../../common';
import Loader from '../../components/modals/Loader'; 
import { requestMultiplePermisisons } from '../../services/Permissions'
import { socketUri } from '../../common/Api'
import Orientation from 'react-native-orientation-locker';
import AsyncStorage from '@react-native-community/async-storage';
import ImageIcons from '../../common/ImageIcons'
const SCREEN_HEIGHT = Dimensions.get('screen').height;
import CountDown from 'react-native-countdown-component';
import { RadioButton ,Provider ,Modal, Portal, Button,} from 'react-native-paper';
import Share from 'react-native-share';
import { v4 as uuid } from "uuid";
import { CreditCardInput } from 'react-native-payment-card';
import ModalSelector from 'react-native-modal-selector';
import AwesomeAlert from 'react-native-awesome-alerts';

// const {RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole} = require('agora-access-token')

// const currentTimestamp = Math.floor(Date.now() / 1000)
// const expirationTimeInSeconds = 3600;
// const appID = '25e8f297394d4539a9ba4bc4930730d6';
// const appCertificate = '7cb09f222989455c943a1060695f2b1e';
// const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds
// const role = RtcRole.PUBLISHER;

const Blurbackground = (props) => {
    const AgoraEngine = useRef();
    const socketRef = useRef();
    const appState = useRef(AppState.currentState);
    const dispatch = useDispatch()

    const isback = props?.route?.params?.isback;
    //const channel = '43a24d31-f151-4acb-bb46-c2e8df0690ec';//props?.route?.params?.channel;
    const channel = props?.route?.params?.channel;
    const isbroadcaster = props?.route?.params?.isbroadcaster;
    const [visible, setVisible] = React.useState(false);
    const [ isPress, setIsPress ] = React.useState(false);
    const [ likePress, setlikePress ] = React.useState(false);
    const [ Movecart, setMovecart ] = React.useState(false);
    const [ Movecart1, setMovecart1 ] = React.useState(false);
    const [ Movecart2, setMovecart2 ] = React.useState(false);
    const [ Movecart3, setMovecart3 ] = React.useState(false);
    const [ Movecart4, setMovecart4 ] = React.useState(false);
    const [showAlert, setshowAlert] = React.useState(false);
    const [ sharePress, setsharePress ] = React.useState(0);
    const [showmodal, setshowmodal] = React.useState(false);
    const [showsidebar, setshowsidebar] = React.useState(false);
    const [sidevalue, setsidevalue] = React.useState('product');
    const [cartview, setcartview] = React.useState(false);
    const [saleview, setsaleview] = React.useState(false);
    const [checkshipping, setcheckshipping] = React.useState(false);
    const [Addshipping, setAddshipping] = React.useState(false);
    const [Addpayment, setAddpayment] = React.useState(false);
    const [checkview, setcheckview] = React.useState(false);
    const [purchaseCount, setpurchaseCount] = React.useState(0);
    const [showmodalname, setshowmodalname] = React.useState();
    const [showmodalprice, setshowmodalprice] = React.useState();
    const [showmodaldesc, setshowmodaldesc] = React.useState();
    const [showmodalimage, setshowmodalimage] = React.useState();
    const [cardInfo, setCardInfo] = useState();
    const [cardType, setcardType] = useState();
    const [showcardNumber, setcardNumber] = useState();

    
    const [First, onChangeFirst] = React.useState("");
    const [Lastname, onChangeLastname] = React.useState("");
    const [Address, onChangeAddress] = React.useState("");
    const [Address2, onChangeAddress2] = React.useState("");
    const [State, onChangeState] = React.useState("");
    const [Zip, onChangeZip] = React.useState("");
    const [product, onChangeproduct] = React.useState("");
    const [City, onChangeCity] = React.useState("");
    const [Country, onChangeCountry] = React.useState("");
    const [showproduct, setshowproduct] = React.useState("");
    const [selectedValue, setSelectedValue] = useState(1);
    const [selectedValue1, setSelectedValue1] = useState(1);
    const [selectedValue2, setSelectedValue2] = useState(1);
    const [selectedValue3, setSelectedValue3] = useState(1);
    const [selectedValue4, setSelectedValue4] = useState(1);
    const [showotherAlert, setshowotherAlert] = React.useState(false);
    const [showalertmsg, setshowalertmsg] = React.useState('');
    const [showmodalid, setshowmodalid] = React.useState();

    //alert(channel)
    const LoggedInUserId = '';
    const [UserID, setUserID] = useState("");
    const [IsLogin, setIsLogin] = useState("");
    const [comment, setcomment] = useState();
    const [getaudiance, Setgetaudiance] = useState(0);
    const [joined, setJoined] = useState(false);
    const [mute, setMute] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [timer, settimer] = useState(1);
    const [userComments, setuserComments] = useState([]);
    const [userCart, setuserCart] = useState([]);
    const [incart, setincart] = useState('');

    const [broadcasterVideoState, setBroadcasterVideoState] = useState(VideoRemoteState.Decoding);
    // console.log("userData==>", userData);
    console.log("broadcaster==>", broadcasterVideoState)
    console.log("is back ====> ", isback)
    //alert(channel)
    const init = async () => {


        if (Platform.OS === 'android') await requestMultiplePermisisons();
        
        //  AgoraEngine.current = await RtcEngine.create("0c96ec2a0c9744c0bb3d21330bb0911d"); 
        AgoraEngine.current = await RtcEngine.create("ccb0f65b5af549c383620f289af77cbf");   //appId used for testing
        // AgoraEngine.current = await RtcEngine.create("04c68745a5c94f16b02f3608abf51669"); //appId given by roadman
         
        await AgoraEngine.current.enableVideo();
        await AgoraEngine.current.startPreview()
        if (isback) {
            console.log("agora back==>", isback);
            AgoraEngine.current.switchCamera();
        }
        await AgoraEngine.current.addListener("JoinChannelSuccess", (channel, uid, elapsed) => {
            console.log("JoinChannelSuccess", channel, uid, elapsed)
            //if (isbroadcaster) dispatch(createRoom(channel, 'Running'))
            setJoined(true)
            Setgetaudiance(getaudiance+1)
        });

        await AgoraEngine.current.setChannelProfile(ChannelProfile.LiveBroadcasting);
        if (isbroadcaster) AgoraEngine.current.setClientRole(ClientRole.Broadcaster);

        //if (isbroadcaster==false) { AgoraEngine.current.setClientRole(ClientRole.Audience); }

        await AgoraEngine.current.addListener("RemoteVideoStateChanged", (uid, state) => {
            console.log("live stream state==>", state);
            if (uid == 1) setBroadcasterVideoState(state);
        });

        //await AgoraEngine.current.userJoined( Setgetaudiance(getaudiance+1) )
        
    };

    useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

    console.log("joined==>", joined);

    console.log("channelID==>", LoggedInUserId);
    console.log("broadcast state==>", broadcasterVideoState);

    const socketConnection = () => {
       console.log("hello========>");
        socketRef.current = io(socketUri, { forceNew: true });
        socketRef.current.on('connect', () => {
            console.log("connection successfull===")
            socketRef.current.emit('join-channel', channel);
        })
        socketRef.current.on('message', (users) => {
            console.log("users-socket ==>", users);
            setuserComments(prev => [users.currentUser,...prev ]);
        })
        socketRef.current.on("connect_error", (error) => {
            console.log("connection-error==>", error)
        });

    }
    const openpopupcloth = (id,name,price,desc,image) => {
        setshowmodal(true)
        setshowmodalname(name);
        setshowmodalid(id);
        setshowmodalprice(price);
        setshowmodaldesc(desc);
        setshowmodalimage(image);
    }
    const openpopupclothnew = () => {
        setshowmodal(true);

    }
    const openpress = () => {
      setIsPress(true);
    }

    const hidepress = () => {
        setIsPress(false)
    }
    
    
    const showAddpayment = () => {
      
      setcheckview(false);
      setcartview(false);
      setAddpayment(true);
    }

    const hideAddpayment = () => {
        let values = cardInfo && cardInfo?.values;
        setcardType(values?.type)
        setcardNumber(values?.number.slice(-4))
        setAddpayment(false)
        setcheckshipping(true);
        // console.log("cardInfo===>", cardInfo)
        // if (cardInfo && cardInfo?.valid && values) {
        //     let cardNumber = String(values?.number).replace(/\s/g, '')
        //     let request = {
        //         "userId":props?.loginuserid,
        //         "merchid": "820000000326",
        //         "expiry": values.expiry,
        //         "cardNumber": cardNumber.slice(-4),
        //         "currency": "USD",
        //         "name":values.name,
        //         "cvc":values.cvc,
        //         "cardtype":values.cardtype,
        //         "postalCode":values.postalCode,
        //         "type":values.type
        //     }
        //     setcardType(values.type)
        //     setcardNumber(cardNumber.slice(-4))
        //     setAddpayment(false)
        //     setcheckshipping(true);
        //     alert(cardType)
        //     console.log('request',request)
        // }
       
    }

    const showAddshipping = () => {
      setAddshipping(true);
      
    }

    const hideAddshipping = () => {
        setAddshipping(false)
    }

    const showcheckview = () => {
        //alert('ds')
        props.cartdata(props?.loginuserid);
        props.cartPrice(props?.loginuserid);
        //console.log('props?.cartlistdata1',props?.cartlistdata1)
        setAddshipping(false);
        setsaleview(false);
        setcartview(false);
        setcheckview(true);
    }

    const hidecheckview = () => {
        setcheckview(false)
    }

    const showsaleview = () => {
      setsaleview(true);
    }

    const hidesaleview = (count) => {
        let request = {
            "eventId":channel,
            "itemDiscount":count
        }
        props.updatediscount(request, props.navigation, "vendor");
        setsaleview(false)
    }

    const showcartview = () => {
        setincart('');
        setAddshipping(false);
        setsaleview(false);
        setcheckview(false);
        setcartview(true);
    }

    const showcartview1 = (itemid,productPrice) => {
        setincart(itemid);
        let request = {
            "productId":itemid,
            "userId":props?.loginuserid,
            "productQuantity":1,
            "productPrice":productPrice,
            "branduserId":props?.getliveeventlist?.userId._id
        }
        setpurchaseCount(purchaseCount+1);
        props.cartadd(request, props.navigation, "vendor");

        setAddshipping(false);
        setsaleview(false);
        setcheckview(false);
        setcartview(true);
    }

    const hidecartview = () => {
        setcartview(false)
    }

    const showcheckshipping =()=>{

        setAddshipping(false);
      setsaleview(false);
      setcheckview(false);
      setcheckshipping(true);
    }
    const hidecheckshipping =()=>{
        setcheckshipping(false)
    }
    
    const hidepopup =()=>{
        setcartview(false)
        setAddshipping(false);
        setsaleview(false);
        setcheckview(false);
        setcheckshipping(false);
    }

    

    const openlikePress = () => {
        setlikePress(true);
    }
    const closelikePress = () => {
        setlikePress(false);
    }
    
    const opensidebar = () => {
        setsidevalue('Product left');
        setshowsidebar(true);
    }
    const opensidebar1 = () => {
        setsidevalue('Sale Discount');
        setshowsidebar(true);
    }

    const addtowatchlist = (item_id,status) => {
        let request = {
            "productId":item_id,
            "status":status,
            "userId":props?.loginuserid
        }
        props.updatewatchlist(request, props.navigation, "vendor");
    }


    const hidesidebar = () => {
        setsaleview(false)
        if(sidevalue=='Product left'){
          setshowproduct(product)
            let request = {
                "eventId":channel,
                "itemLeft":product,
            }
            props.updateleftcount(request, props.navigation, "vendor");
        }else {
            let request = {
                "eventId":channel,
                "itemDiscount":product
            }
            props.updatediscount(request, props.navigation, "vendor");
        }
        setshowsidebar(false)
    }

    const closepopupcloth = () => {
        setshowmodal(false)
    }



    const openshare=()=>{
        let options = {
          message: 'To join our broadcast, click here',
          url: 'https://com.dropship/'+channel,
        };
       Share.open(options);
       setsharePress(sharePress+1);
    }

    
    const setselected = (value,index) =>{
        if(index==1){ setSelectedValue1(value) }
        if(index==2){ setSelectedValue2(value) }
        if(index==3){ setSelectedValue3(value)  }
        if(index==4){ setSelectedValue4(value)  }
        if(index==0 || index>4){ setSelectedValue(value)  }
    }

    const cartpicker = (productid,productPrice,index) =>{
        var productQuantity = selectedValue;
        if(index==1){ var productQuantity = selectedValue1;  }
        if(index==2){ var productQuantity = selectedValue2;  }
        if(index==3){ var productQuantity = selectedValue3;  }
        if(index==4){ var productQuantity = selectedValue4;  }
        
        let request = {
            "productId":productid,
            "userId":props?.loginuserid,
            "productQuantity":productQuantity,
            "productPrice":productPrice,
            "branduserId":props?.getliveeventlist?.userId._id
        }
        setpurchaseCount(purchaseCount+1);
        //console.log('request',request)
        props.cartadd(request, props.navigation, "vendor");
    }
    const saveAddshipping = () =>{ 
        showAddshipping(false);
        setcheckview(true);
        let request = {
                "userId":props?.loginuserid,
                "orderNumber":uuid(),
                "orderStatus":"accepted",
                "orderAmount":props?.totalcartprice,
                "paymentMethod":"cash",
                "orderDate":new Date(),
                "firstName":First,
                "lastName":Lastname,
                "emailaddress":'Email',
                "phoneNumber":'PhoneNumber',
                "streetAdress":'Street',
                "zipCode":Zip,
                "city":City,
                "country":selectedValue
            }
            props.chekout(request, props.navigation, "vendor");
    }
   
    
    const containerStyle = {backgroundColor: 'white', padding: '7%',marginHorizontal:'5%',alignItems:'center'};
    const containerStyle2 = {backgroundColor: 'white', padding: '5%',marginHorizontal:'5%',};

    const showConfirmDialog = () => {
        setshowAlert(true)
     };

    useEffect(() => {
        //alert(channel)
        props.getchannelbrandName(channel); 
        props.getLiveCustomer(channel);
        props.getLivecommentCustomer(channel);
        if (isbroadcaster) {
            props.updateaudiancecount(channel,0);
        }else {
            props.updateaudiancecount(channel,1);
            //console.log('props?.getalleventdata',props?.getalleventdata)
        }
        //Orientation.lockToPortrait();
        AppState.addEventListener('change', inBackground)
        

        //const tokenA = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channel, 2882341273, 1, privilegeExpiredTs);
        //alert(props?.getcalltokendata)
        const uid = isbroadcaster ? 1 : 0
        init().then(() => {
            AgoraEngine.current.joinChannel(props?.getcalltokendata, channel, null, uid)
            socketConnection()
        });
        return () => {
            AgoraEngine.current.destroy();
            if (isbroadcaster) {
               // dispatch(destroyRoom(channel, 'Ended'))
                AppState.removeEventListener('change', inBackground)
            }
        };

    }, [])

    useEffect(() => {

        if (isbroadcaster) {
          const interval = setInterval(() => {
            props.getaudiancecount(channel,1);
            //props.getLivecommentCustomer(channel);
             console.log('lSDfsdfsdfsdfivecommentlist',props?.livecommentlist)
          }, 15000);
          return () => clearInterval(interval);
        }else {
            const interval = setInterval(() => {
               props.getaudiancecount(channel,0);
               //props.getLivecommentCustomer(channel);
            }, 15000);
          return () => clearInterval(interval);
        }

       // alert('sd');
       
    }, []);


    useEffect(() => {
        videoStateMessage(broadcasterVideoState)
    }, [broadcasterVideoState])

    
    const resetchannel = (channeldata)=>{
        AgoraEngine.current.destroy();
        setshowsidebar(false)
        props.navigation.navigate("SearchProduct", { isback: false, channel: channeldata, isbroadcaster: false }) 
    }

    const inBackground = (nextState) => {
        //alert('okk')
        if (nextState = "background") {
            //dispatch(destroyRoom(channel, 'Ended'))
            appState.current = nextState
            if (isbroadcaster) {
               // props.navigation.navigate("Overview")
            }else {
               // props.navigation.navigate("Search")
            }
        }
    }

     const data = [
            { key: 1, label: '1' },
            { key: 2, label: '2' },
            { key: 3, label: '3' },
            { key: 4, label: '4' },
            { key: 5, label: '5' },
            { key: 6, label: '6' },
            { key: 7, label: '7' },
            { key: 8, label: '8' },
            { key: 9, label: '9' },
            { key: 10, label: '10' }
        ];

    useEffect(() => {
       getBrandUserId();

    }, [])

    const getBrandUserId = async () => {
        props.cartdata(props?.loginuserid);
        var getIsLogin = await AsyncStorage.getItem('userLogin');
        setIsLogin(getIsLogin);
        var getUserId = await AsyncStorage.getItem('UserId');
        setUserID(getUserId);
    }

    const _onChange = async (cardInfo) => {
        setCardInfo(cardInfo)
    }

    const muteaudio = async() => {
        if(mute==false){
            //AgoraEngine.current.UserMuteAudio(true);
            await AgoraEngine.current.disableAudio();
            setMute(true);
        }else {
            //AgoraEngine.current.UserMuteAudio(false);
            await AgoraEngine.current.enableVideo();
            setMute(false);
        }
    }

    const endStream = async() => {
        AgoraEngine.current.destroy();
        //if (isbroadcaster) dispatch(destroyRoom(channel, 'Ended'))
        await AsyncStorage.removeItem('notificationData');
        if (isbroadcaster) {
            // call removeapi
            let request = {
                "eventId":channel,
                "EventDuration":1200,
                "startNow":false
            }
            props.schuleEventstart(request, props.navigation, "vendor");
        }
        if (isbroadcaster) {
            props.navigation.navigate("Overview")
        }else {
            props.navigation.navigate("Search")
        }
    }
    const DATA2 = [
       {
        text:'Cloth',
        text2:'$90',
        image:ImageIcons.blurcoat,
       },
        {
        text:'Cloth',
        text2:'$90',
        image:ImageIcons.blurcoat,
       },
        {
        text:'Clothsdfhsdfs',
        text2:'$90',
        image:ImageIcons.blurcoat,
       },
       {
        text:'Cloth',
        text2:'$90',
        image:ImageIcons.blurcoat,
       },
       {
        text:'Cloth',
        text2:'$90',
        image:ImageIcons.blurcoat,
       },
     ];
    const Header = () => {
        return (
            <View style={{ marginTop: Platform.OS == 'android' ? 30 : 60,zIndex:1001, paddingTop:30,position:'relative',flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:'5%' }}>
                 
                <View style={{ width:'60%'}}>
                    <Text style={{fontFamily:'hinted-AvertaStd-Semibold',color:'#ffffff',fontSize:20}}>0% off Friday Sale!</Text>
                    <Text style={{fontFamily:'hinted-AvertaStd-Semibold',color:'#ffffff',fontSize:16}}>SNEAKERS STORE</Text>
                </View>
                <View style={{ width:'40%'}}>
                    <View style={{borderRadius:5,position:'absolute',top:10,left:10, backgroundColor:'#EB2F2F'}}>
                        <Text style={newstyles.shorttest1}>Live</Text>
                    </View>
                    <View style={{backgroundColor:'#AFFFE2',borderRadius:5,position:'absolute',top:10,left:"60%",flexDirection:"row"}}>
                        <View style={{left:7,top:2}}>
                            <Image source={ImageIcons.iconpath} style={{width:16,height:16}}/>
                        </View>
                        <Text style={newstyles.shorttest}>{props?.audiancecount?.audianceCount}</Text>
                    </View>
                </View>
                
            </View>
        )
    }

    const videoStateMessage = (state) => {
        switch (state) {
            case VideoRemoteState.Stopped:
                setshowalertmsg('Live Broadcasting has been ended by the user')
                setshowotherAlert(true);
                //props.navigation.goBack()
                if (isbroadcaster) {
                    props.navigation.navigate("Overview")
                }else {
                    props.navigation.navigate("Search")
                }
                return "Live Broadcasting has been ended by the user";

            case VideoRemoteState.Frozen:
               // Alert.alert("Dropship", "Connection Issue, Please Wait")
                return "Connection Issue, Please Wait";

            case VideoRemoteState.Failed:
                //Alert.alert("Dropship", "Network Error")
                return "Network Error";
        }
    };

    const Comments = (index, item) => {
        return (
            <View style={{ marginTop: 10 }}>
                <Text>
                    <Text style={{
                        color: Colors.white,
                        fontSize: 14,
                         textTransform: 'lowercase'
                    }}>@name:</Text>
                    <Text style={{ color: Colors.white, }}>
                        {' '}
                        {item.message}
                    </Text>
                </Text>
              
            </View>
        )
    }

    const renderItemcheck = ({ item }) => {
       return(
        <View  style={{marginHorizontal:5}}>
            <Image source={{uri:item.productId.productImage}} style={{width:95,height:150,borderRadius:5}} />
            <View style={newstyles.redcomingshort}>
                <Text style={newstyles.shortwhitetest}>Remove</Text>
            </View>
            <View style={{marginVertical:5}}>
             <Text style={newstyles.beautyclaratext}>{item.productId.productName}</Text>
             <Text style={newstyles.beautyclaratext}>Qty: {item.productQuantity}</Text>
            </View>
        </View>
        );
    }
    const renderItemcart = ({ item, index }) => {
        
       
       

       return(
        <View style={[newstyles.Viewcart2,{ flexDirection:'row'}]} >
         <View>
            <Image source={{uri:item.productImage}}  style={newstyles.clothimage} />
            <View  style={{flexDirection: 'row',marginVertical:'4%',}} >
                    
                        <TouchableOpacity style={[newstyles.cartttview,{padding:5,marginRight:10,borderRadius:10}]} onPress={() => cartpicker(item._id,item.productPrice,index)}>
                            
                            <Image source={ImageIcons.whitecart} style={{width:18, height:18}} />
                          
                        </TouchableOpacity>
                    
                    <View style={{flexDirection: 'row',}}>
                        {index ==0 &&
                            <View> 
                                { Movecart == true ?   
                                    <TouchableOpacity onPress={() => { setMovecart(false); addtowatchlist(item._id,false);} } >
                                        <Image source={ImageIcons.redlike}  style={newstyles.likeimgred} />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() =>  { setMovecart(true); addtowatchlist(item._id,true);}} >
                                        <Image source={ImageIcons.likee}  style={newstyles.likeimg} />
                                    </TouchableOpacity>
                                }
                            </View>
                        }
                        {index ==1 &&
                            <View> 
                                { Movecart1 == true ?   
                                    <TouchableOpacity onPress={() => { setMovecart1(false); addtowatchlist(item._id,false);} } >
                                        <Image source={ImageIcons.redlike}  style={newstyles.likeimgred} />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() =>  { setMovecart1(true); addtowatchlist(item._id,true);}} >
                                        <Image source={ImageIcons.likee}  style={newstyles.likeimg} />
                                    </TouchableOpacity>
                                }
                            </View>
                        }
                        {index ==2 &&
                            <View> 
                                { Movecart2 == true ?   
                                    <TouchableOpacity onPress={() => { setMovecart2(false); addtowatchlist(item._id,false);} } >
                                        <Image source={ImageIcons.redlike}  style={newstyles.likeimgred} />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() =>  { setMovecart2(true); addtowatchlist(item._id,true);}} >
                                        <Image source={ImageIcons.likee}  style={newstyles.likeimg} />
                                    </TouchableOpacity>
                                }
                            </View>
                        }
                        {index ==3 &&
                            <View> 
                                { Movecart3 == true ?   
                                    <TouchableOpacity onPress={() => { setMovecart3(false); addtowatchlist(item._id,false);} } >
                                        <Image source={ImageIcons.redlike}  style={newstyles.likeimgred} />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() =>  { setMovecart3(true); addtowatchlist(item._id,true);}} >
                                        <Image source={ImageIcons.likee}  style={newstyles.likeimg} />
                                    </TouchableOpacity>
                                }
                            </View>
                        }

                        {index ==4 &&
                            <View> 
                                { Movecart4 == true ?   
                                    <TouchableOpacity onPress={() => { setMovecart4(false); addtowatchlist(item._id,false);} } >
                                        <Image source={ImageIcons.redlike}  style={newstyles.likeimgred} />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() =>  { setMovecart4(true); addtowatchlist(item._id,true);}} >
                                        <Image source={ImageIcons.likee}  style={newstyles.likeimg} />
                                    </TouchableOpacity>
                                }
                            </View>
                        }
                    </View>

                </View>
       </View>
            <View>
                <View style={{justifyContent:'space-between',marginHorizontal:5}}>
                    <View>
                         <Text style={newstyles.beautygreytext}>{item.productName}</Text>
                    </View>
                    <View style={{marginLeft:10}}>
                        <Text style={newstyles.pricebrandtext}>${item.productPrice}</Text>
                        <Text style={newstyles.brandcolortext}>MSRP: ${item.productPrice}</Text>
                    </View>
                </View>
                 <View style={{ width:120,marginTop:10,marginBottom:10,marginLeft:10,backgroundColor:'#D4E0F2',paddingHorizontal:10,paddingVertical:5,borderRadius:10}}>
                   <Text style={{color:'#2666BE'}}>New Stock</Text>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                    <View>
                        <Text style={{fontWeight:'600',fontSize:16,fontFamily:'hinted-AvertaStd-Semibold'}}>Size</Text>
                        <View style={newstyles.pickerViewshort}>
                            <Picker
                                style={{ height: 30, width: 110,color:'#000000',}}
                                onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                               >
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="2" />
                                <Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" />
                                <Picker.Item label="5" value="5" />
                                <Picker.Item label="6" value="6" />
                                <Picker.Item label="7" value="7" />
                                <Picker.Item label="8" value="8" />
                                <Picker.Item label="9" value="9" />
                              </Picker>
                        </View>
                    </View>

                    <View>
                        <Text style={{fontWeight:'600',fontSize:16,fontFamily:'hinted-AvertaStd-Semibold'}}>Color</Text>
                        <View style={newstyles.pickerViewshort}>
                           <Picker
                                style={{ height: 30, width: 110,color:'#000000',}}
                                onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                               >
                                <Picker.Item label="Color" value="Black" />
                                <Picker.Item label="Black" value="Black" />
                                <Picker.Item label="White" value="White" />
                                <Picker.Item label="Red" value="Red" />
                                <Picker.Item label="Pink" value="Pink" />
                                <Picker.Item label="Yellow" value="Yellow" />
                                <Picker.Item label="Green" value="Green" />
                                <Picker.Item label="Other" value="Other" /> 
                              </Picker>
                        </View>
                    </View>

                    <View>
                        <Text style={{fontWeight:'600',fontSize:16,fontFamily:'hinted-AvertaStd-Semibold'}}>Quantity</Text>
                        <View style={newstyles.pickerViewshort}>
                            <TextInput
                                onChangeText={(text) => setselected(text,index)}
                                autoCompleteType="off"
                                placeholder="1"
                                keyboardType={'numeric'}
                                maxLength={2}
                                placeholderTextColor="#999999"
                                style={{color:'#000000',padding:0, alignItems:'center', textAlign:'center',justifyContent:'center'}}
                            />
                        </View>
                    </View>

                </View>
                
                
            </View>
        </View>
        );
    }
    const renderItem5 = ({ item ,index }) => {
       return(
        <View style={newstyles.maincartviewshop}>
        <TouchableOpacity onPress={() => resetchannel(item._id)}>
            <View style={newstyles.comingViewflatlist}>
                <Image source={{uri: item.products[0]?.productImage}} style={newstyles.jeansimg} onPress={() => { props.navigation.navigate("clothing") }} />
                <View style={{flexDirection:'row',position:'absolute',top:15,left:'5%'}}>
               </View>
                <View style={{position:'absolute',bottom:'7%',left:10}}>
                    <Text style={newstyles.upcomingtext2}>{item.userId?.userName}</Text>
                </View>
            </View> 
            </TouchableOpacity>
        </View>
      );
    }

    const renderItem2 = ({ item }) => {
       return(
        <View style={{marginBottom:0,borderRadius:10, width:250, marginLeft:10, flexDirection:'row',backgroundColor:'#ffffff',padding:10}}>
            <TouchableOpacity style={{marginBottom:5, justifyContent:'center', textAlign:'center'}} onPress={() =>{ setIsPress(false);showcartview1(item._id,item.productPrice);  }}>
                <Image source={{uri:item.productImage}} style={[newstyles.blurimg,{borderRadius:10}]} />
          </TouchableOpacity>
          <View style={{marginLeft:20}}>
                <Text>{item.productName}</Text>
                <Text>${item.productPrice}</Text>
                <View style={{ backgroundColor:'#D4E0F2',paddingHorizontal:10,paddingVertical:5,borderRadius:10}}>
                   <Text style={{color:'#2666BE'}}>New Stock</Text>
                </View>
          </View>
        </View>
        );
    }

    const doComment = () => {
        
               let request ={
                  "liveevent":channel,
                  "message":comment,
                }
                props.postcomment(request, props.navigation, "vendor");
                props.getLivecommentCustomer(channel);
            try {
                if (comment) {
                    let i = 0;
                    const currentUser = {
                        id: i++,
                        message: comment
                    }

                    socketRef.current.emit('live-stream-comments', ({ currentUser, channel }));
                    
                   // console.log("new commments from my side => ", { currentUser, channel });
                    setcomment('');
                }
            } catch (error) {
                //console.log("error is for send message => ", error)
            }
         
    }



    if (!joined) {
        return <Loader color={Colors.green} size='large' />;
    } else {
        return (
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : undefined} style={styles.container}>
                {
                    isbroadcaster ? (
                        <RtcLocalView.SurfaceView
                            style={styles.fullscreen}
                            channelId={channel}
                        />
                    ) : (
                        <RtcRemoteView.SurfaceView
                            uid={1}
                            style={styles.fullscreen}
                            channelId={channel}
                        />
                    )
                }
                <Header />
                <StatusBar backgroundColor={'#B80000'} barStyle="dark-content" translucent={true} />
                 <View style={{justifyContent:'space-between', zIndex:1010,position:'absolute',top:140, right:15, textAlign:'center'}}>
                    
                        <TouchableOpacity>
                        <View style={{marginBottom:1,}}>
                            <Image source={ImageIcons.callmore}/>
                        </View>
                        </TouchableOpacity>
                    
                        <TouchableOpacity onPress={() => openshare() } >
                            <View style={{marginBottom:1,marginTop:-10,marginRight:5}}>
                                <Image source={ImageIcons.callshare}  />
                            </View>
                        </TouchableOpacity>
                    
                    
                    <TouchableOpacity  onPress={() => props.navigation.navigate("Cart") }>
                    <View style={{marginBottom:1,marginRight:7,marginTop:-10}}>
                        <Image source={ImageIcons.callevent} />
                        <Text style={[newstyles.liketext,{marginTop:-10}]}>{purchaseCount}</Text>
                    </View> 
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={muteaudio}>
                        <View style={{marginBottom:1,marginTop:0,marginRight:5}}>
                            <Image source={ImageIcons.calllike}  />
                            <Text style={[newstyles.liketext,{marginTop:-10}]}>{purchaseCount}</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                
                <View>
                    
                    
                    
                    <View style={{flexDirection:'row',borderRadius:5,marginLeft:20,padding:5,backgroundColor:'#ffffff',width:90,marginTop:10}}>
                        <Image source={ImageIcons.timer} style={[newstyles.imgtimer,{tintColor:'#EB2F2F'}]} />
                        <View style={{marginLeft:-5,marginTop:-5}}>
                        { props?.getliveeventlist?.EventDuration &&
                        <CountDown
                            until={props?.getliveeventlist?.EventDuration}
                            size={10}
                            onFinish={() => endStream }
                            digitStyle={{backgroundColor: '#FF000000'}}
                            digitTxtStyle={{color: '#000000'}}
                            timeToShow={['M', 'S']}
                            separatorStyle={{color: '#000000'}}
                            timeLabels={{m: null, s: null}}
                            showSeparator
                          />
                        }
                          </View>
                          
                    </View>
                    
                    
                { isbroadcaster == 'asdsd' &&
                    <View style={{flexDirection:'row',marginTop:isKeyboardVisible?'1%':'3%',marginHorizontal:'3%'}}>
                      <TouchableOpacity>
                      <Image source={ImageIcons.greenphone}  style={{width:35,height:35}} />
                      </TouchableOpacity>
                      <TouchableOpacity style={{marginHorizontal:'2%'}}>
                        <Image source={ImageIcons.videoicon} style={{width:35,height:35}}  />
                      </TouchableOpacity>
                    </View>
                  }
                <TouchableOpacity onPress={endStream}>
                    <View style={{flexDirection:'row',marginHorizontal:'2%',marginVertical:10}}>
                        <Image source={ImageIcons.callsignout}/>
                    </View>
                </TouchableOpacity>

                <View style={{flexDirection:'row',marginHorizontal:'2%',marginTop:-10}}>
                    <Image source={ImageIcons.callspeaker}  />
                </View>
                    
                </View>
                  { isbroadcaster == false &&
                        <View style={{marginRight:10}}>
                            {/*<TouchableOpacity style={{marginBottom:5, }} onPress={() =>showcartview() }>
                                <View style={{ ...styles.live, alignSelf: 'flex-start', width:'auto',marginRight:10,marginTop:0, height:27 }}>
                                    <Text style={{ ...newstyles.homecontinuebutton, color: Colors.white,justifyContent:'center',paddingTop:2, textAlign: 'center',paddingHorizontal:10 }}>Buy Now</Text>
                                </View>
                            </TouchableOpacity>
                            {isPress == false &&
                            <TouchableOpacity  onPress={() =>openpress() }>
                                <View style={{marginVertical:'4%'}}>
                                    <Image source={ImageIcons.close} style={newstyles.imgclose}  />
                                </View>
                            </TouchableOpacity>
                            */}
                            <View style={{marginVertical:'3%'}}>
                            <FlatList
                                style={{ height:isPress ? 90 : 90 }}
                                data={props?.getliveeventlist?.products || []}
                                renderItem={renderItem2}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                horizontal={false}
                            />
                            </View>
                        
                        </View>
                    }
                    
                    { isbroadcaster == 'false33' &&
                        <View style={{marginLeft:5}}>
                        <TouchableOpacity>
                            <View style={newstyles.Viewwhite}>
                                <Text style={newstyles.yellowboxtextnew}>{props?.audiancecount?.itemDiscount}% OFF</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                    }

                   
                <View style={{ justifyContent: 'flex-end', flex: 1, marginHorizontal: 6, }}>
                    <View style={{ justifyContent: 'flex-end', flexDirection:'row', marginBottom: 1 }}>

                        { isbroadcaster == false ?
                            <FlatList
                                data={props?.livecommentlist}
                                keyExtractor={(item, index) => item.id + index + ""}
                                inverted={true}
                                style={{ maxHeight: 130,bottom:-90, left:15 }}
                                renderItem={({ index, item }) => Comments(index, item)}
                            />
                            :
                                <FlatList
                                data={props?.livecommentlist}
                                keyExtractor={(item, index) => item.id + index + ""}
                                inverted={true}
                                style={{ maxHeight: 150,bottom:-60, left:15 }}
                                renderItem={({ index, item }) => Comments(index, item)}
                            />
                        }
                        

                        

                    
                        <View style={{marginVertical:'5%',right:5}}>
                            <View style={{marginBottom:1,marginTop:0,marginLeft:10}}>
                                <Image source={ImageIcons.callbrand}  />
                            </View>

                            <View style={{ flexDirection:'row',width:65,marginTop:-5, alignItems:'center', justifyContent:'center',textAlign:'center',paddingVertical:8,marginBottom:1,borderRadius:10,marginLeft:10,backgroundColor:'#B80000'}}>
                                <Image source={ImageIcons.callbag}  />
                                <Text style={[newstyles.yellowboxtextnew,{fontSize:13,paddingTop:8}]}>0</Text>
                            </View>
                            

                            <View style={{marginBottom:1,marginTop:0,marginRight:5}}>
                                <Image source={ImageIcons.calllogo}  />
                            </View>

                        </View>
                    
                    </View>
                    <View style={newstyles.directionViewble}>
                        <View style={styles.box}>  
                            <TextInput
                                value={comment}
                                style={{ color: Colors.white, ...styles.input, }}
                                onChangeText={text => setcomment(text)}
                                editable={(broadcasterVideoState === VideoRemoteState.Stopped) ? false : true}
                                placeholderTextColor={Colors.white}
                                placeholder="Send a message"
                                ></TextInput>
                            
                        </View>
                        <View>
                        
                            <TouchableOpacity onPress={() => doComment()}>
                                <View style={{ backgroundColor:'#B80000',right:10,paddingHorizontal:20,paddingVertical:15,borderRadius:10}}>
                                    <Image
                                        source={ImageIcons.messagesend}
                                        style={{ width: 18, height: 21 }}
                                    />
                                </View>
                            </TouchableOpacity>
                        
                        </View>
                    </View>
                    
                </View>

            { cartview  &&
                <View style={{borderTopLeftRadius:15,borderTopRightRadius:15,backgroundColor:'#ffffff',width:'100%',position:'absolute',zIndex:2001,bottom:0}}>
                    <View style={newstyles.textshoop3}>
                        <View style={newstyles.textshoop2}>
                        <TouchableOpacity onPress={() => setcartview(false) }>
                            <Image source={ImageIcons.closepopup} />
                        </TouchableOpacity>
                        </View>
                         
                        <Text style={newstyles.textshoop}>Shop</Text>
                    </View>
                    <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#ffffff',height:'auto',maxHeight:450,minHeight:225}} >
                        <View style={{marginVertical:'3%'}}>
                            <FlatList
                                data={props?.getliveeventlist?.products || []}
                                renderItem={renderItemcart}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </ScrollView>
                    <View  style={{flexDirection: 'row',justifyContent:'center',marginVertical:'4%',}} >
                        <TouchableOpacity style={newstyles.greencartttview} onPress={() =>props.navigation.navigate("Cart")}>
                            <Text style={newstyles.greecolortext}>View Cart</Text>
                        </TouchableOpacity>
                        {/*<TouchableOpacity style={newstyles.proceedcartview} onPress={() => showcheckview() }>
                            <Text style={newstyles.proceedtext}>Proceed to Checkout</Text>
                        </TouchableOpacity>*/}
                    </View>
                </View>
            }

            { checkview  &&
                <View style={{backgroundColor:'#FFE7E7',width:'100%',position:'absolute',zIndex:2001,bottom:0}}>
                <View style={newstyles.textshoop3}>
                   <View style={newstyles.textshoop2}>
                    <TouchableOpacity onPress={() => { setcheckview(false); setcartview(true);} }>
                        <Image source={ImageIcons.backIcon}  style={newstyles.textshoop4}/>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { hidepopup();} }>
                        <Image source={ImageIcons.line} style={newstyles.textshoop1} />
                     </TouchableOpacity>
                    <Text style={newstyles.textshoop}>Checkout</Text>
                </View>
                    <Text style={newstyles.textshopcheck}>{props?.cartlistdata1?.length} Items</Text>
                    <View style={{marginVertical:'3%'}}>
                        <FlatList
                            data={props?.cartlistdata1 || []} 
                            renderItem={renderItemcheck}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            style={{ maxHeight: 280,marginRight:0, marginBottom:0 }}
                        />
                    </View>
                    <View style={{marginVertical:'2%'}}>
                        <Text style={newstyles.suntotaltext}>Subtotal: <Text style={newstyles.textshopcheck}>${props?.totalcartprice}</Text></Text>
                    </View>
                    <View  style={{flexDirection: 'row',justifyContent:'center',marginVertical:'4%',marginHorizontal:'4%'}} >
                        <View>
                            <Text style={newstyles.textshipcheck}>shipping</Text>
                            <TouchableOpacity style={newstyles.newcartttview2} onPress={() =>showAddshipping()}>
                                <Text style={newstyles.textshipcheck}>Shipping address</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={newstyles.textshipcheck}>Payment</Text>
                            <TouchableOpacity style={newstyles.newcartttview2} onPress={() =>showAddpayment()}>
                                <Text style={newstyles.textshipcheck}>Add Payment info</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={newstyles.confirmView} onPress={() =>showcheckshipping()}>
                        <Text style={newstyles.confirmtexxt}>Confirm info</Text>
                    </TouchableOpacity>
                </View>

            }
            { checkshipping  &&
                <View style={{backgroundColor:'#FFE7E7',width:'100%',position:'absolute',zIndex:2001,bottom:0}}>
                
                <View style={newstyles.textshoop3}>
                   <View style={newstyles.textshoop2}>
                    <TouchableOpacity onPress={() => { setcheckshipping(false); setcartview(true);} }>
                        <Image source={ImageIcons.backIcon}  style={newstyles.textshoop4}/>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { hidepopup()} }>
                        <Image source={ImageIcons.line} style={newstyles.textshoop1} />
                     </TouchableOpacity>
                    <Text style={newstyles.textshoop}>Checkout</Text>
                </View>

                    <Text style={newstyles.textshopcheck}>{props?.cartlistdata1?.length} Items</Text>
                    <View style={{marginVertical:'3%'}}>
                        <FlatList
                            data={props?.cartlistdata1 || []}
                            renderItem={renderItemcheck}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            style={{ maxHeight: 280,marginRight:0, marginBottom:0 }}
                        />
                    </View>
                    
                    <View  style={{flexDirection: 'row',justifyContent:'center',marginVertical:'4%',marginHorizontal:'4%'}} >
                        <View>
                            <Text style={newstyles.textshipcheck}>shipping</Text>
                            <TouchableOpacity style={newstyles.newcartttview2} >
                                <Text style={newstyles.textshipcheck}>{First} {Address} {City}</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={newstyles.textshipcheck}>Payment</Text>
                            <TouchableOpacity style={newstyles.newcartttview2}>
                                <Text style={newstyles.textshipcheck}>{cardType} {showcardNumber}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[newstyles.newcartttview2,{width:200, marginLeft:'25%'}]}>
                        <Text style={newstyles.suntotaltext}>Total Payment: <Text style={newstyles.textshopcheck}>${props?.totalcartprice}</Text></Text>
                    </View>
                    <TouchableOpacity style={[newstyles.confirmView,{width:200}]}  onPress={() => { setcheckshipping(false); setcartview(false);} }>
                        <Text style={newstyles.confirmtexxt}>CHECKOUT</Text>
                    </TouchableOpacity>
                </View>

            }
            { Addshipping  &&
                <View style={{backgroundColor:'#FFE7E7',position:'absolute',zIndex:2001,bottom:0}}>
                 <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7',height:'auto'}} >
                    
                    <View style={newstyles.textshoop3}>
                   <View style={newstyles.textshoop2}>
                    <TouchableOpacity onPress={() => { setAddshipping(false); setcheckview(true);} }>
                        <Image source={ImageIcons.backIcon}  style={newstyles.textshoop4}/>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { hidepopup()} }>
                        <Image source={ImageIcons.line} style={newstyles.textshoop1} />
                     </TouchableOpacity>
                    <Text style={newstyles.textshoop}>Add Shipping info</Text>
                </View>
                    <View style={newstyles.maincartviewfooter}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={newstyles.labeltext}>First Name</Text>
                        </View>
                        <View style={{width:'70%'}}>
                            <TextInput
                             style={newstyles.inputshipping}
                             onChangeText={(text) => onChangeFirst(text)}
                             value={First}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                        </View>
                    </View>
                    <View style={newstyles.maincartviewfooter}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={newstyles.labeltext}>Last Name</Text>
                        </View>
                        <View style={{width:'70%'}}>
                            <TextInput
                             style={newstyles.inputshipping}
                             onChangeText={(text) => onChangeLastname(text)}
                             value={Lastname}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                        </View>
                    </View>
                    <View style={newstyles.maincartviewfooter}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={newstyles.labeltext}>Country</Text>
                        </View>
                        <View style={{width:'70%'}}>
                            <TextInput
                             style={newstyles.inputshipping}
                             onChangeText={(text) => onChangeCountry(text)}
                             value={Country}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                        </View>
                    </View>
                    <View style={newstyles.maincartviewfooter}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={newstyles.labeltext}>Address Line 1</Text>
                        </View>
                        <View style={{width:'70%'}}>
                            <TextInput
                             style={newstyles.inputshipping}
                             onChangeText={(text) => onChangeAddress(text)}
                             value={Address}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                        </View>
                    </View>
                    <View style={newstyles.maincartviewfooter}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={newstyles.labeltext}>Address Line 2</Text>
                        </View>
                        <View style={{width:'70%'}}> 
                            <TextInput
                             style={newstyles.inputshipping}
                             onChangeText={(text) => onChangeAddress2(text)}
                             value={Address2}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                        </View>
                    </View>
                    <View style={newstyles.maincartviewfooter}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={newstyles.labeltext}>City</Text>
                        </View>
                        <View style={{width:'70%'}}>
                            <TextInput
                             style={newstyles.inputshipping}
                             onChangeText={(text) => onChangeCity(text)}
                             value={City}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                        </View>
                    </View>
                    <View style={newstyles.maincartviewfooter}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={newstyles.labeltext}>State</Text>
                        </View>
                        <View style={{width:'70%'}}>
                            <TextInput
                             style={newstyles.inputshipping}
                             onChangeText={(text) => onChangeState(text)}
                             value={State}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                        </View>
                    </View>
                    <View style={newstyles.maincartviewfooter}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={newstyles.labeltext}>Zip Code</Text>
                        </View>
                        <View style={{width:'70%'}}>
                            <TextInput
                             style={newstyles.inputshipping}
                             onChangeText={(text) => onChangeZip(text)}
                             value={Zip}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                        </View>
                    </View>
                   
                    <TouchableOpacity style={newstyles.saveView} onPress={() =>saveAddshipping() }>
                        <Text style={newstyles.textshipcheck}>Save</Text>
                    </TouchableOpacity>
                </ScrollView>
                </View>
            }

            { Addpayment  &&
                
                 <View style={{backgroundColor:'#FFE7E7',width:'100%',position:'absolute',zIndex:2001,bottom:0}}>
                 <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7',height:'auto'}} >
                    
                    <View style={newstyles.textshoop3}>
                   <View style={newstyles.textshoop2}>
                    <TouchableOpacity onPress={() => { setAddpayment(false); setcheckview(true);} }>
                        <Image source={ImageIcons.backIcon}  style={newstyles.textshoop4}/>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { hidepopup()} }>
                        <Image source={ImageIcons.line} style={newstyles.textshoop1} />
                     </TouchableOpacity>
                    <Text style={newstyles.textshoop}>Add Payment info</Text>
                </View>
                    <View style={newstyles.maincartviewfooter}>
                        <CreditCardInput
                            requiresName
                            requiresCVC
                            requiresPostalCode
                            validColor={"black"}
                            invalidColor={"red"}
                            placeholderColor={"darkgray"}
                            onChange={_onChange}
                        />
                    </View>
                    <TouchableOpacity style={newstyles.saveView} onPress={() =>hideAddpayment()}>
                        <Text style={newstyles.textshipcheck}>Save</Text>
                    </TouchableOpacity>
                </ScrollView>
                </View>
            }

                { showsidebar  &&
                    <Provider>
                    <Portal>
                    <Modal visible={showsidebar} onDismiss={hidesidebar} 
                    contentContainerStyle={{ zIndex:1011,justifyContent:'center',backgroundColor: 'white', marginBottom:0, padding: 10,borderRadius:5,paddingHorizontal:'10%',alignSelf:'center',alignItems:'center',marginHorizontal:'4%' }}>
                    <View>
                        <Text style={{fontFamily:'hinted-AvertaStd-Semibold',fontSize:15,fontWeight:'600', color:'#000000',}}>{sidevalue}</Text>
                        <View style={{backgroundColor:'#F3F3F3',borderRadius:10,alignSelf:'center',padding:'1%',paddingHorizontal:'3%'}}>
                            <TextInput
                             onChangeText={onChangeproduct}
                             value={product}
                             autoCompleteType="off"
                             keyboardType={'numeric'}
                             placeholder="2"
                             placeholderTextColor="#999999"
                             style={{color:'#000000',width:50,padding:1, justifyContent:'center',textAlign:'center'}}
                            />
                        </View>
                        <TouchableOpacity style={{backgroundColor:'#FFB3B3',borderRadius:10,alignSelf:'center',marginVertical:'2%'}} onPress={()=>hidesidebar()}>
                            <Text style={{fontFamily:'hinted-AvertaStd-Semibold',fontSize:14,fontWeight:'600',paddingHorizontal:'4%', color:'#333333',textAlign:'center'}}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                    </Modal>
                    </Portal>
                    </Provider>
                }

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
}

export default Blurbackground

