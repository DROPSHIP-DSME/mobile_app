import React, { useEffect, useRef, useState } from 'react'
import { Text, View, Image, TouchableOpacity,Picker, Keyboard,TextInput, Dimensions, FlatList, AppState, KeyboardAvoidingView, Platform, Alert, ScrollView,StatusBar } from 'react-native'
import RtcEngine, { ChannelProfile, ClientRole, RtcLocalView, RtcRemoteView, VideoRemoteState } from "react-native-agora";
import io from "socket.io-client";
import { useSelector, useDispatch } from 'react-redux'
import styles from '../../../screens/common/style'
import newstyles from '../../../screens/common/styles';
import { Colors, fonts, Images } from '../../../common';
import Loader from '../../../components/modals/Loader';
import { requestMultiplePermisisons } from '../../../services/Permissions'
import { socketUri } from '../../../common/Api'
import Orientation from 'react-native-orientation-locker';
import AsyncStorage from '@react-native-community/async-storage';
import ImageIcons from '../../../common/ImageIcons'
const SCREEN_HEIGHT = Dimensions.get('screen').height;
import CountDown from 'react-native-countdown-component';
import { RadioButton ,Provider ,Modal, Portal, Button,} from 'react-native-paper';
import Share from 'react-native-share';
import { v4 as uuid } from "uuid";
import { CreditCardInput } from 'react-native-payment-card';
import ModalSelector from 'react-native-modal-selector';
import SwitchToggle from "react-native-switch-toggle";
import Sortorder from '../../../components/pickers/Sortorder';
import AwesomeAlert from '../../../components/modals/AlertModal';
import tw from 'twrnc';
import Smallbutton from '../../../components/dropshipbutton/Smallbutton';
import { UsersIcon } from "react-native-heroicons/solid";
import { ShoppingCartIcon } from "react-native-heroicons/solid";
import { ClockIcon } from "react-native-heroicons/solid";
import { PhoneIcon } from "react-native-heroicons/solid";
import { VideoCameraIcon } from "react-native-heroicons/solid";
import { HeartIcon } from "react-native-heroicons/solid";
import { VolumeUpIcon } from "react-native-heroicons/solid";
import { VolumeOffIcon } from "react-native-heroicons/solid";
import { ShareIcon } from "react-native-heroicons/solid";
import { XIcon } from "react-native-heroicons/solid";


const options = [ { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' },{ label: '5', value: '5' },{ label: '6', value: '6' },{ label: '7', value: '7' },{ label: '8', value: '8' },{ label: '9', value: '9' } ]
const options1 = [
      {label: 'English', value: 'English' },
      { label: 'French',value: 'French' },
      { label: 'Spanish',value: 'Spanish'},
      { label: 'Italian', value: 'Italian' },
      { label: 'African', value: 'African' },
      { label: 'chinese', value: 'chinese' },
      { label: 'Japanese', value: 'Japanese' }
    ]
const options2 = [
      {label: 'Black', value: 'Black' },
      { label: 'White',value: 'White' },
      { label: 'Red',value: 'Red'},
      { label: 'Pink', value: 'Pink' },
      { label: 'Yellow', value: 'Yellow' },
      { label: 'Green', value: 'Green' },
      { label: 'Other', value: 'Other' }
    ]
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
    const [likeCount, setlikeCount] = React.useState(0);

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

     const [on, seton] = React.useState(false);


    const [purchaseCount, setpurchaseCount] = React.useState(0);
    const [showmodalname, setshowmodalname] = React.useState();
    const [showmodalprice, setshowmodalprice] = React.useState();
    const [showmodaldesc, setshowmodaldesc] = React.useState();
    const [showmodalimage, setshowmodalimage] = React.useState();
    const [cardInfo, setCardInfo] = useState();
    const [cardType, setcardType] = useState();
    const [showcardNumber, setcardNumber] = useState();

    const [showotherAlert, setshowotherAlert] = React.useState(false);
    const [showalertmsg, setshowalertmsg] = React.useState('');

    const [First, onChangeFirst] = React.useState("");
    const [Lastname, onChangeLastname] = React.useState("");
    const [Address, onChangeAddress] = React.useState("");
    const [Address2, onChangeAddress2] = React.useState("");
    const [State, onChangeState] = React.useState("");
    const [Zip, onChangeZip] = React.useState("");
    const [product, onChangeproduct] = React.useState("English");
    const [City, onChangeCity] = React.useState("");
    const [Country, onChangeCountry] = React.useState("");
    const [showproduct, setshowproduct] = React.useState("");
    const [selectedValue, setSelectedValue] = useState(1);
    const [selectedValue1, setSelectedValue1] = useState(1);
    const [selectedValue2, setSelectedValue2] = useState(1);
    const [selectedValue3, setSelectedValue3] = useState(1);
    const [selectedValue4, setSelectedValue4] = useState(1);

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

    const opensettings = () => {
      setshowsidebar(s => !s);
    }

    const hidesidebar = () => {
       setshowsidebar(false)
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
        setshowotherAlert(true)
        setshowalertmsg('Item added in cart successfully!')

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

    const updateorderStatus = (itemValue) => {
        setSelectedValue(itemValue)
    }

    const updateorderStatus1 = (itemValue) => {
        setSelectedValue1(itemValue)
    }

    const updateorderStatus2 = (itemValue) => {
        setSelectedValue2(itemValue)
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

    const calllike = async() => {
        if(likePress==false){
            setlikePress(true);
            setlikeCount(likeCount+1);
        }else {
            setlikePress(false);
            setlikeCount(likeCount-1);
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
            <View style={tw.style('flex flex-row pt-8 relative justify-between mx-5',{ marginTop: Platform.OS == 'android' ? 30 : 60,zIndex:1001})}>

                <View style={tw`w-[45%]`}>
                    <Text style={tw`text-xl text-white`}>{props?.showbrandName?.brandName}</Text>
                </View>
                <View style={tw`flex-row`}>
                    <View style={tw`items-center px-4 py-0.5 rounded-lg bg-red-700 justify-center`}>
                        <Text style={tw`text-xs font-medium text-white`}>Live</Text>
                    </View>
                    <View style={tw`flex-row`}>
                        <View style={tw`ml-3 items-center px-4 py-1 rounded-lg bg-green-300 justify-center`}>
                            <UsersIcon color="red" fill="black" size={20} />
                        </View>
                        { (props?.audiancecount?.audianceCount >2 ) ?
                            <Text style={tw`mx-3 text-sm font-medium text-grey-800`}>33</Text>
                        :
                            <Text style={tw`ml-3 text-xs font-medium text-grey-700`}>{props?.audiancecount?.audianceCount}</Text>
                        }
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

                let request = {
                    "eventId":channel,
                    "EventDuration":1200,
                    "startNow":false
                }
                props.schuleEventstart(request, props.navigation, "vendor");

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
        //console.log('sdsdsisfsfsdfsdftem',item);
        return (
            <View style={{ marginTop: 10 }}>
                <Text>
                    <Text style={{
                        color: Colors.white,
                        fontSize: 14,
                         textTransform: 'lowercase'
                    }}>@{item?.user?.userName}:</Text>
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
        <View style={tw`my-2 mx-2`}>

              <View style={tw`flex-row items-center`}>
                <Image source={{uri:item.productImage}}  style={tw.style('h-30 w-35 rounded-lg border-gray-500 border-2 mr-1')} />
                <View style={tw`justify-between`}>
                    <View>
                         <Text style={tw`text-lg text-gray-700 leading-1`}> {item.productName}</Text>
                    </View>
                    <View style={tw`ml-2`}>
                        <Text style={tw`text-lg text-gray-900`}>${item.productPrice}</Text>
                        <Text style={tw`text-base text-gray-700`}>MSRP: ${item.productPrice}</Text>
                    </View>
                    <View style={tw`flex flex-row justify-end items-center`}>
                          <View style={tw`items-center px-4 py-2 rounded-lg bg-blue-100 w-25 my-1`}>
                            <Text style={tw`text-xs font-medium text-blue-800`}>New Stock</Text>
                         </View>
                         <TouchableOpacity onPress={() => cartpicker(item._id,item.productPrice,index)}>
                             <View style={tw`items-center px-4 py-2 rounded-lg bg-red-700 w-35 my-1 ml-5`}>
                                <Text style={tw`text-xs font-medium text-white`}>Add to Bag</Text>
                             </View>
                         </TouchableOpacity>
                    </View>
                </View>
              </View>
              {/*<View  style={tw`flex flex-row mx-4`} >

                      <TouchableOpacity style={[newstyles.cartttview,{padding:5,marginRight:10,borderRadius:10}]} onPress={() => cartpicker(item._id,item.productPrice,index)}>
                          <ShoppingCartIcon color="white" fill="White" size={24} />
                      </TouchableOpacity>

                  <View style={tw`flex-row`}>
                      {index ==0 &&
                          <View>
                              { Movecart == true ?
                                  <TouchableOpacity onPress={() => { setMovecart(false); addtowatchlist(item._id,false);} } >
                                      <HeartIcon color="red" fill="red" size={24} />
                                  </TouchableOpacity>
                                  :
                                  <TouchableOpacity onPress={() =>  { setMovecart(true); addtowatchlist(item._id,true);}} >
                                      <HeartIcon color="white" fill="white" size={24} />
                                  </TouchableOpacity>
                              }
                          </View>
                      }
                      {index ==1 &&
                          <View>
                              { Movecart1 == true ?
                                  <TouchableOpacity onPress={() => { setMovecart1(false); addtowatchlist(item._id,false);} } >
                                      <HeartIcon color="red" fill="red" size={24} />
                                  </TouchableOpacity>
                                  :
                                  <TouchableOpacity onPress={() =>  { setMovecart1(true); addtowatchlist(item._id,true);}} >
                                      <HeartIcon color="white" fill="white" size={24} />
                                  </TouchableOpacity>
                              }
                          </View>
                      }
                      {index ==2 &&
                          <View>
                              { Movecart2 == true ?
                                  <TouchableOpacity onPress={() => { setMovecart2(false); addtowatchlist(item._id,false);} } >
                                      <HeartIcon color="red" fill="red" size={24} />
                                  </TouchableOpacity>
                                  :
                                  <TouchableOpacity onPress={() =>  { setMovecart2(true); addtowatchlist(item._id,true);}} >
                                      <HeartIcon color="white" fill="white" size={24} />
                                  </TouchableOpacity>
                              }
                          </View>
                      }
                      {index ==3 &&
                          <View>
                              { Movecart3 == true ?
                                  <TouchableOpacity onPress={() => { setMovecart3(false); addtowatchlist(item._id,false);} } >
                                      <HeartIcon color="red" fill="red" size={24} />
                                  </TouchableOpacity>
                                  :
                                  <TouchableOpacity onPress={() =>  { setMovecart3(true); addtowatchlist(item._id,true);}} >
                                      <HeartIcon color="white" fill="white" size={24} />
                                  </TouchableOpacity>
                              }
                          </View>
                      }

                      {index ==4 &&
                          <View>
                              { Movecart4 == true ?
                                  <TouchableOpacity onPress={() => { setMovecart4(false); addtowatchlist(item._id,false);} } >
                                      <HeartIcon color="red" fill="red" size={24} />
                                  </TouchableOpacity>
                                  :
                                  <TouchableOpacity onPress={() =>  { setMovecart4(true); addtowatchlist(item._id,true);}} >
                                      <HeartIcon color="white" fill="white" size={24} />
                                  </TouchableOpacity>
                              }
                          </View>
                      }
                  </View>

              </View>*/}


              {/*<View>
                  <View style={tw`flex flex-row justify-between items-center opacity-0`}>
                      <View>
                          <Text style={tw`text-base text-gray-800`}>Size</Text>
                          <View style={tw`mt-5 mx-3`}>
                              <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />
                          </View>
                      </View>

                      <View>
                          <Text style={tw`text-base text-gray-800`}>Color</Text>
                          <View style={tw`mt-5 mx-3`}>
                              <Sortorder options={options2} onSelect={(checked) => updateorderStatus2(checked)} />
                          </View>
                      </View>

                      <View>
                          <Text style={tw`text-base text-gray-800`}>Quantity</Text>
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
              </View>*/}


        </View>
        );
    }
    const renderItem5 = ({ item ,index }) => {
       return(
        <View style={tw`flex flex-row justify-between mt-6 mx-6 bg-white rounded-lg`}>
        <TouchableOpacity onPress={() => resetchannel(item._id)}>
            <View style={tw.style('rounded-lg bg-gray-200 items-center',{width:deviceWidth/2.2})}>
                <Image source={{uri: item.products[0]?.productImage}} style={tw`w-[98%] h-50 rounded-lg`} onPress={() => { props.navigation.navigate("clothing") }} />
                <View style={tw`flex flex-row absolute top-4 left-[5%]`}>
               </View>
                <View style={tw`absolute bottom-[7%] left-2`}>
                    <Text style={tw`text-base text-white leading-1`}>{item.userId?.userName}</Text>
                </View>
            </View>
            </TouchableOpacity>
        </View>
      );
    }

    const renderItem2 = ({ item }) => {
       return(
       <View style={{marginHorizontal:5}}>
            <View style={{borderRadius:10, marginLeft:10, flexDirection:'row',backgroundColor:'#ffffff',padding:10,paddingHorizontal:15}}>
                <TouchableOpacity style={{marginBottom:5, justifyContent:'center', textAlign:'center'}} onPress={() =>{ setIsPress(false);showcartview1(item._id,item.productPrice);  }}>
                    <Image source={{uri:item.productImage}} style={[newstyles.blurimg,{borderRadius:10}]} />
              </TouchableOpacity>
              <View style={{marginLeft:20}}>
                    <Text style={{fontSize:12,color:'#1a1a1a',fontWeight:'400',fontFamily:'source hinted-AvertaStd-Semibold'}}>${item.productPrice}</Text>
                    <View style={{ backgroundColor:'#D4E0F2',paddingHorizontal:10,paddingVertical:3,borderRadius:10,marginTop:5}}>
                       <Text style={{color:'#2666BE',fontSize:11}}>New Stock</Text>
                    </View>
              </View>
            </View>
        </View>
        );
    }

    const doComment = () => {

        if(comment!="" && comment!=undefined){
               let request ={
                  "liveevent":channel,
                  "message":comment,
                  "user":props?.loginuserid
                }
                props.postcomment(request, props.navigation, "vendor");
                setTimeout(function(){ props.getLivecommentCustomer(channel);},1000);

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
                 <View style={tw.style('justify-between absolute top-30 right-3 text-center', {zIndex:1010})}>
                    { isbroadcaster == true &&
                        <TouchableOpacity onPress={() => opensettings() } >
                            <View style={tw`mb-4`}>
                                 <ShareIcon color="red" fill="red" size={28} />
                            </View>
                        </TouchableOpacity>
                    }
                        <TouchableOpacity onPress={() => openshare() } >
                            <View style={tw`mb-4`}>
                                <ShareIcon color="red" fill="white" size={28} />
                            </View>
                        </TouchableOpacity>




                    <TouchableOpacity onPress={calllike}>
                        <View style={{marginVertical:15,marginRight:15}}>
                            {likePress==false ?
                                <HeartIcon color="red" fill="white" size={28} />
                            :
                                <HeartIcon color="red" fill="red" size={28} />
                            }
                            <Text style={[newstyles.liketext,{marginTop:4}]}>{likeCount}</Text>
                        </View>
                    </TouchableOpacity>

                    {/*<TouchableOpacity  onPress={() => props.navigation.navigate("Cart") }>
                                        <View style={{marginBottom:1,marginRight:7,marginTop:-10}}>
                                            <Image source={ImageIcons.callevent} />
                                            <Text style={[newstyles.liketext,{marginTop:-10}]}>{purchaseCount} {mute}</Text>
                                        </View>
                                        </TouchableOpacity>*/}

                    <TouchableOpacity onPress={muteaudio}>
                        <View style={{flexDirection:'row',marginHorizontal:'2%',marginVertical:6}}>


                           {mute==false ?
                            <VolumeUpIcon color="white" fill="white" size={28} />
                            :
                            <VolumeOffIcon color="white" fill="gray" size={28} />
                           }
                        </View>
                    </TouchableOpacity>

                </View>

                <View>

                   <TouchableOpacity style={tw`mx-5 mt-3 items-center px-2.5 py-1 rounded-lg bg-red-700 w-24`}>
                        <Text style={tw`text-xs font-medium text-white`}>FOLLOW</Text>
                    </TouchableOpacity>
                    <View style={tw`flex flex-row rounded-lg ml-5 bg-white w-24 mt-3 py-1 justify-center items-center`}>
                        <ClockIcon color="red" fill="red" size={20} />
                        <View style={tw``}>
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
                    <View style={tw.style('flex flex-row mx-[3%]',{marginTop:isKeyboardVisible?'1%':'3%'})}>
                      <TouchableOpacity>
                        <ClockIcon color="green" fill="green" size={20} />
                      </TouchableOpacity>
                      <TouchableOpacity style={tw`mx-[2%]`}>
                        <VideoCameraIcon color="red" fill="white" size={20} />
                      </TouchableOpacity>
                    </View>
                  }
                {/*<TouchableOpacity onPress={endStream}>
                                    <View style={{flexDirection:'row',marginHorizontal:'2%',marginVertical:10}}>
                                        <Image source={ImageIcons.callsignout}/>
                                    </View>
                                </TouchableOpacity>

                                <View style={{flexDirection:'row',marginHorizontal:'2%',marginTop:-10}}>
                                    <Image source={ImageIcons.callspeaker}  />
                                </View>*/}

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
                            <View style={{marginTop:isKeyboardVisible?'10%':'80%'}}>
                            <FlatList
                                style={{ height:isPress ? 100 : 100 ,marginBottom:0}}
                                data={props?.getliveeventlist?.products || []}
                                renderItem={renderItem2}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                            />
                            </View>

                        </View>
                    }

                    { isbroadcaster == 'false33' &&
                        <View style={tw`ml-2`}>
                        <TouchableOpacity>
                            <View style={tw`text-center bg-gray-600 rounded-md mx-[4%] items-center justify-center border-b-1 w-6 h-6`}>
                                <Text style={tw`text-sm text-white p-2 text-center leading-1`}>{props?.audiancecount?.itemDiscount}% OFF</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                    }


                <View style={tw`flex flex-1 justify-end mx-2`}>
                    <View style={tw`flex-end flex-row mb-1`}>

                        { isbroadcaster == false ?
                            <FlatList
                                data={props?.livecommentlist}
                                keyExtractor={(item, index) => item.id + index + ""}
                                style={{ maxHeight: 150, left:15 }}
                                renderItem={({ index, item }) => Comments(index, item)}
                            />
                            :
                                <FlatList
                                data={props?.livecommentlist}
                                keyExtractor={(item, index) => item.id + index + ""}
                                style={{ maxHeight: 150,left:15 }}
                                renderItem={({ index, item }) => Comments(index, item)}
                            />
                        }





                        {/*<View style={{marginVertical:'5%',right:5}}>
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

                        </View>*/}

                    </View>
                    <View style={tw`flex flex-row justify-between items-center mx-3`}>
                        <View style={styles.box}>
                            <TextInput
                                value={comment}
                                style={{ color: Colors.white, ...styles.input,paddingLeft:5 }}
                                onChangeText={text => setcomment(text)}
                                editable={(broadcasterVideoState === VideoRemoteState.Stopped) ? false : true}
                                placeholderTextColor={Colors.white}
                                placeholder="Send a message"
                                ></TextInput>

                        </View>

                            <TouchableOpacity onPress={() => doComment()} style={tw`left-0 right-4 px-2 my-2 rounded-lg`}>
                                <Image
                                    source={ImageIcons.messagesend}
                                    style={{ width: 21, height: 20.94 }}
                                />
                            </TouchableOpacity>

                           {/* <TouchableOpacity style={{left:0,right:18,paddingHorizontal:10,paddingVertical:10,}}>
                                <Image
                                    source={ImageIcons.call}
                                    style={{ width: 21, height: 21 }}
                                />
                            </TouchableOpacity> */}
                        { isbroadcaster == false ?
                            <TouchableOpacity onPress={() =>props.navigation.navigate("Cart")} style={{marginLeft:10,backgroundColor:'#EB2F2F',paddingHorizontal:10,paddingVertical:10,borderRadius:5}}>
                                <Image
                                    source={ImageIcons.callbag}
                                    style={{ width: 12, height: 14}}
                                />
                            </TouchableOpacity>
                        :
                            <TouchableOpacity style={{marginLeft:10,backgroundColor:'#EB2F2F',paddingHorizontal:10,paddingVertical:10,borderRadius:5}}>
                                <Image
                                    source={ImageIcons.callbag}
                                    style={{ width: 12, height: 14}}
                                />
                            </TouchableOpacity>
                        }
                    </View>

                </View>
        <AwesomeAlert showotherAlert={showotherAlert} showalertmsg={showalertmsg} onSelect={(checked) => setshowotherAlert(checked)} />

            { cartview  &&
                <View style={tw.style('rounded-r-3xl rounded-l-3xl bg-white absolute w-full bottom-0',{zIndex:2001})}>
                    <View style={tw`flex flex-row justify-between items-center mx-5 mb-5 pt-5`}>
                        <Text style={tw`mx-4 text-3xl text-gray-700`}>Shop</Text>
                        <View style={tw`right-5 bg-gray-200 p-2 rounded-lg`}>
                          <TouchableOpacity onPress={() => setcartview(false) }>
                              <XIcon color="red" fill="black" size={24} />
                          </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#ffffff',height:'auto',maxHeight:450,minHeight:225}} >
                        <View style={tw`my-[1%] mx-5`}>
                            <FlatList
                                data={props?.getliveeventlist?.products || []}
                                renderItem={renderItemcart}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </ScrollView>
                    <View  style={tw`flex flex-row justify-center my-5`} >
                        <TouchableOpacity style={tw`px-6 py-2 border border-transparent rounded-full shadow-sm bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`} onPress={() =>props.navigation.navigate("Cart")}>
                            <Text style={tw`items-center text-base font-medium  text-black`}>View Cart</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            }



                { showsidebar  &&
                    <Provider>
                    <Portal>
                    <Modal visible={showsidebar} onDismiss={hidesidebar}
                    contentContainerStyle={{ top:-200,zIndex:1011,justifyContent:'center',backgroundColor: 'white', marginBottom:0, padding: 10,borderRadius:5,paddingHorizontal:'10%',alignSelf:'center',alignItems:'center',marginHorizontal:'4%' }}>
                    <View>
                        <Text style={{fontFamily:'hinted-AvertaStd-Bold',fontSize:15,fontWeight:'bold', color:'#000000',}}>Language</Text>
                        <View style={{backgroundColor:'#F3F3F3',marginTop:5,borderRadius:10,alignSelf:'center',padding:'1%',paddingHorizontal:'3%'}}>
                            <Sortorder options={options1} onSelect={(checked) => updateorderStatus1(checked)} />
                        </View>

                        <Text style={{fontFamily:'hinted-AvertaStd-Bold',fontSize:15,marginTop:10,marginBottom:5,fontWeight:'bold', color:'#000000',}}>Call requests</Text>
                        <View style={{borderRadius:10,marginLeft:-20,alignSelf:'center',padding:'1%',paddingHorizontal:'3%'}}>
                           <SwitchToggle
                              switchOn={on}
                              onPress={() => seton(s => !s)}
                              backgroundColorOn='#B80000'
                              containerStyle={{
                                marginTop: 5,
                                width: 96,
                                height: 38,
                                borderRadius: 25,
                                padding: 5,
                              }}
                              circleStyle={{
                                width: 30,
                                height: 30,
                                borderRadius: 20,
                              }}
                            />
                        </View>


                    </View>
                    </Modal>
                    </Portal>
                    </Provider>
                }
            </KeyboardAvoidingView>

        )
    }
}

export default Blurbackground
