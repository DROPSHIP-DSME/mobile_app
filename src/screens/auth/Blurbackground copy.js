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
import 'react-native-get-random-values';
import { v4 as uuid } from "uuid";

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
    const [selectedValue, setSelectedValue] = useState("");

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

    const [broadcasterVideoState, setBroadcasterVideoState] = useState(VideoRemoteState.Decoding);
    // console.log("userData==>", userData);
    console.log("broadcaster==>", broadcasterVideoState)
    console.log("is back ====> ", isback)
    const init = async () => {
        if (Platform.OS === 'android') await requestMultiplePermisisons();
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
        setAddpayment(false)
    }

    const showAddshipping = () => {
      setAddshipping(true);

    }

    const hideAddshipping = () => {
        setAddshipping(false)
    }

    const showcheckview = () => {
            const userEmail = { userId: props?.loginuserid };
            fetch(`http://3.144.121.158/v1/shops/getcartList`, {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(userEmail)
            })
            .then(response => response.json())
            .then(data => {
                alert(response.data.toString())
               setuserCart(response.data);
                //resolve(data)
             })
            .catch(error => {  });
            setAddshipping(false);
            setsaleview(false);
            setcartview(false);
            setcheckview(true);

         //props.cartdata(props?.loginuserid);
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

    const opensidebar = () => {
        setsidevalue('Product left');
        setshowsidebar(true);
    }
    const opensidebar1 = () => {
        setsidevalue('Sale Discount');
        setshowsidebar(true);
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
        let images = [];
        images.push(props?.showbrandName?.brandImage);
        let options = {
          message: props?.showbrandName?.brandName,
          title: props?.showbrandName?.brandName,
          urls: images,
        };
      Share.open(options);
    }

    const openpopup = () => {
        setshowmodal(false)
        setVisible(true)
        let request = {
            "productId":'61b042d45157a8ea2bdb00bd',
            "userId":UserID,
            "productQuantity":1
        }
        //props.cartadd(request, props.navigation, "vendor");
    }

    const cartpicker = (productid,productPrice) =>{
        let request = {
            "productId":productid,
            "userId":props?.loginuserid,
            "productQuantity":setSelectedValue,
            "productPrice":productPrice,
            "branduserId":props?.getliveeventlist?.userId._id
        }
        setpurchaseCount(purchaseCount+1);
        console.log('request',request)
        props.cartadd(request, props.navigation, "vendor");
    }
    const saveAddshipping = () =>{
        showAddshipping(false);
        showcheckview(true);
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
    const openpopup1= (price,productid) => {

        let request = {
            "productId":productid,
            "userId":props?.loginuserid,
            "productQuantity":1,
            "productPrice":price,
            "branduserId":props?.getliveeventlist?.userId._id
        }
        setpurchaseCount(purchaseCount+1);
        console.log('request',request)
        props.cartadd(request, props.navigation, "vendor");
        //setshowmodal(false)
        setVisible(true)
        setTimeout(() => {
            setVisible(false)
        }, 2000);
    }
    const closepopup = () => {
          setVisible(false)
    }

    const containerStyle = {backgroundColor: 'white', padding: '7%',marginHorizontal:'5%',alignItems:'center'};
    const containerStyle2 = {backgroundColor: 'white', padding: '5%',marginHorizontal:'5%',};

    const showConfirmDialog = () => {
        return Alert.alert(
          "",
          "You need to login to access this screen",
          [
            // The "Yes" button
            {
              text: "Login",
              onPress: () => {
               props.navigation.navigate('Golive');
              },
            },
          ]
        );
     };

    useEffect(() => {
        //alert(channel)
        props.getchannelbrandName(channel);
        props.getLiveCustomer(channel);
        if (isbroadcaster) {
           // props.updateaudiancecount(channel,0);
        }else {
            //props.updateaudiancecount(channel,1);
            //console.log('props?.getalleventdata',props?.getalleventdata)
        }
        //Orientation.lockToPortrait();
        AppState.addEventListener('change', inBackground)
        const uid = isbroadcaster ? 1 : 0
        init().then(() => {
            AgoraEngine.current.joinChannel(null, channel, null, uid)
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
          }, 15000);
          return () => clearInterval(interval);
        }else {
            const interval = setInterval(() => {
               props.getaudiancecount(channel,0);
            }, 15000);
          return () => clearInterval(interval);
        }
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
        if (nextState = "background") {
            //dispatch(destroyRoom(channel, 'Ended'))
            appState.current = nextState
            if (isbroadcaster) {
                props.navigation.navigate("Overview")
            }else {
                props.navigation.navigate("Search")
            }
        }
    }


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


    const muteaudio = async() => {
        if(mute==false){
            //AgoraEngine.current.UserMuteAudio(true);
            setMute(true);
        }else {
            //AgoraEngine.current.UserMuteAudio(false);
            setMute(false);
        }
        //alert(mute)
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
            <View style={{ marginTop: Platform.OS == 'android' ? 30 : 60,zIndex:1001, position:'relative',flexDirection: 'row', justifyContent: 'space-between' }}>
                 <View style={{ height:60, marginLeft:-10 }}>
                     <Image source={ImageIcons.videologo} />
                </View>
                <TouchableOpacity onPress={endStream} style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <View style={{ ...styles.live, alignSelf: 'center', width:'auto',marginRight:10,marginTop:0, height:27 }}>
                         { isbroadcaster == true ?
                         <Text style={{ ...newstyles.homecontinuebutton, color: Colors.white,justifyContent:'center',paddingTop:2, textAlign: 'center',paddingHorizontal:10 }}>End LIVE</Text>
                         :
                          <Text style={{ ...newstyles.homecontinuebutton, color: Colors.white,justifyContent:'center',paddingTop:2, textAlign: 'center',paddingHorizontal:10 }}>Leave</Text>
                        }
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const videoStateMessage = (state) => {
        switch (state) {
            case VideoRemoteState.Stopped:
                Alert.alert("Dropship", "Live Broadcasting has been ended by the user")
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
    const renderItemcart = ({ item }) => {
       return(
        <View style={newstyles.Viewcart2} >
            <Image source={{uri:item.productImage}}  style={newstyles.clothimage} />
            <View>
                <View style={{flexDirection: 'row',justifyContent:'space-between',marginHorizontal:5}}>
                    <View>
                         <Text style={newstyles.beautygreytext}>{item.productName}</Text>
                         <Text style={newstyles.beautygreytext}>Color : -</Text>
                         <Text style={newstyles.beautygreytext}>Size : -</Text>
                         <Text style={newstyles.beautygreytext}>Asin: -</Text>
                    </View>
                    <View>
                        <Text style={newstyles.pricebrandtext}>${item.productPrice}</Text>
                        <Text style={newstyles.brandcolortext}>MSRP: ${item.productPrice}</Text>
                    </View>
                </View>
                <View style={newstyles.pickerViewshort}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 30, width: 75 }}
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
                <View  style={{flexDirection: 'row',marginVertical:'4%',}} >
                        <Text style={newstyles.beautygreytext}>Move to</Text>
                        <Image source={ImageIcons.likee}  style={newstyles.likeimg} />
                    <TouchableOpacity style={newstyles.cartttview} onPress={() => cartpicker(item._id,item.productPrice)}>
                        <Text style={newstyles.adcartcolortext}>Add to Cart</Text>
                    </TouchableOpacity>
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
        <View style={{marginBottom:10,alignItems:'center',textAlign:'center'}}>
            <TouchableOpacity style={{marginBottom:5, justifyContent:'center', textAlign:'center'}} onPress={() =>setIsPress(false)}>
                <Image source={{uri:item.productImage}} style={[newstyles.blurimg,{borderRadius:10}]} />
          </TouchableOpacity>
        </View>
        );
    }

    const doComment = () => {

               let request ={
                      "liveevent":channel,
                      "message":comment
                    }
                props.postcomment(request, props.navigation, "vendor");

            try {
                if (comment) {
                    let i = 0;
                    const currentUser = {
                        id: i++,
                        message: comment
                    }
                    socketRef.current.emit('live-stream-comments', ({ currentUser, channel }));

                    console.log("new commments from my side => ", { currentUser, channel });
                    setcomment('');
                }
            } catch (error) {
                console.log("error is for send message => ", error)
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
                 <View style={{justifyContent:'space-between', zIndex:1010,position:'absolute',top:100, right:15, textAlign:'center'}}>

                    <View style={{marginBottom:1,}}>
                        <Image source={ImageIcons.Vector} style={newstyles.imgvector} />
                        <Text style={newstyles.liketext}>400</Text>
                    </View>

                    <TouchableOpacity onPress={() =>  openshare() } >
                        <View style={{marginBottom:1,marginRight:5}}>
                            <Image source={ImageIcons.copy} style={newstyles.imgvector2}  />
                            <Text style={newstyles.liketext}>0</Text>
                        </View>
                    </TouchableOpacity>
                    { isbroadcaster == false &&
                    <TouchableOpacity  onPress={() => props.navigation.navigate("Cart") }>
                    <View style={{marginBottom:1,marginRight:7}}>
                        <Image source={ImageIcons.Vectorcart} style={newstyles.imgcart3} />
                        <Text style={newstyles.liketext}>{purchaseCount}</Text>
                    </View>
                    </TouchableOpacity>
                    }
                    <TouchableOpacity onPress={muteaudio}>
                        { mute==false ?
                            <Image source={ImageIcons.speker} style={newstyles.imgvector} />
                        :
                            <Image source={ImageIcons.mutespeker} style={newstyles.imgvector} />
                        }
                    </TouchableOpacity>
                        { isbroadcaster == false ?
                            <View style={newstyles.Vieworangeleft}>
                                <Text style={newstyles.orangeboxtext}>{props?.audiancecount?.itemLeft} LEFT</Text>
                            </View>
                        :
                            <TouchableOpacity onPress={() =>opensidebar() }>
                                <View style={newstyles.Vieworangeleft}>
                                    <Text style={newstyles.orangeboxtext}>{showproduct} LEFT</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    <View style={newstyles.Viewlueleft}>
                        <Text style={newstyles.blueboxtext}>IN STOCK</Text>
                    </View>
                </View>

                <View>

                    <View style={{marginTop:'2%',marginLeft:20}}>
                        <Text style={newstyles.blurrtext}>{props?.showbrandName?.brandName}</Text>
                    </View>

                    <View style={{flexDirection:'row',marginHorizontal:'0%',marginTop:20,marginLeft:5}}>
                        <Image source={ImageIcons.timer} style={newstyles.imgtimer} />
                        <View style={{marginLeft:-14,marginTop:-5}}>
                        { props?.getliveeventlist?.EventDuration &&
                        <CountDown
                            until={props?.getliveeventlist?.EventDuration}
                            size={10}
                            onFinish={() => endStream }
                            digitStyle={{backgroundColor: '#FF000000'}}
                            digitTxtStyle={{color: '#ffffff'}}
                            timeToShow={['M', 'S']}
                            separatorStyle={{color: '#ffffff'}}
                            timeLabels={{m: null, s: null}}
                            showSeparator
                          />
                        }
                          </View>

                    </View>


                { isbroadcaster == false &&
                    <View style={{flexDirection:'row',marginTop:isKeyboardVisible?'1%':'3%',marginHorizontal:'3%'}}>
                      <TouchableOpacity>
                      <Image source={ImageIcons.greenphone}   />
                      </TouchableOpacity>
                      <TouchableOpacity style={{marginHorizontal:'2%'}}>
                        <Image source={ImageIcons.videoicon}  />
                      </TouchableOpacity>
                    </View>
                  }
                <View style={{flexDirection:'row',marginHorizontal:'2%',marginVertical:10}}>
                    <Image source={ImageIcons.client} style={newstyles.audioimg} />
                    <Text style={[newstyles.audiencetext,{paddingTop:3}]}>{props?.audiancecount?.audianceCount} audience</Text>
                </View>

                </View>
                   { ( props?.getliveeventlist?.eventType =='overstock') ?
                        <View style={[newstyles.Viewleftnewsell2,{marginLeft:20}]} >
                            <Text style={newstyles.yellowboxtextnew}>Overstock Goods</Text>
                        </View>
                    :
                        <View style={[newstyles.Viewleftnew,{marginLeft:20}]} >
                            <Text style={newstyles.yellowboxtextnew}>New Goods</Text>
                        </View>
                    }

                    <TouchableOpacity onPress={() =>showsaleview() }>
                        <View style={[newstyles.Viewyellow,{marginLeft:20}]} >
                            <Text style={newstyles.yellowboxtext}>On Sale </Text>
                        </View>
                    </TouchableOpacity>

                    { isbroadcaster == false &&
                        <View style={{marginLeft:5}}>
                        <TouchableOpacity>
                            <View style={newstyles.Viewwhite}>
                                <Text style={newstyles.yellowboxtextnew}>{props?.audiancecount?.itemDiscount}% OFF</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                    }

                    { isbroadcaster == true &&
                        <View>
                    { saleview  &&
                        <View style={{marginLeft:5}}>
                            <TouchableOpacity onPress={() =>hidesaleview(15) }>
                                <View style={newstyles.Viewwhite}>
                                    <Text style={newstyles.yellowboxtextnew}>15% OFF</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() =>hidesaleview(25) }>
                                <View style={newstyles.Viewwhite}>
                                    <Text style={newstyles.yellowboxtextnew}>25% OFF</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() =>hidesaleview(30) }>
                                <View style={newstyles.Viewwhite}>
                                    <Text style={newstyles.yellowboxtextnew}>30% OFF</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() =>opensidebar1() }>
                                <View style={newstyles.Viewwhiteplus}>
                                    <Text style={newstyles.yellowboxtextplus}>+</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                        </View>
                    }
                <View style={{ justifyContent: 'flex-end', flex: 1, marginHorizontal: 6, }}>
                    <View style={{ justifyContent: 'flex-end', flexDirection:'row', marginBottom: 1 }}>

                         { isbroadcaster == false ?
                        <FlatList
                            data={userComments}
                            keyExtractor={(item, index) => item.id + index + ""}
                            inverted={true}
                            style={{ maxHeight: 130,bottom:-90, left:15 }}
                            renderItem={({ index, item }) => Comments(index, item)}
                        />
                        :
                            <FlatList
                            data={userComments}
                            keyExtractor={(item, index) => item.id + index + ""}
                            inverted={true}
                            style={{ maxHeight: 150,bottom:0, left:15 }}
                            renderItem={({ index, item }) => Comments(index, item)}
                        />
                        }


                        { isbroadcaster == false &&
                        <View style={{marginRight:10}}>
                            <TouchableOpacity style={{marginBottom:5, justifyContent:'center', textAlign:'center'}} onPress={() =>showcartview() }>
                                <View style={{ ...styles.live, alignSelf: 'center', width:'auto',marginRight:10,marginTop:0, height:27 }}>
                                    <Text style={{ ...newstyles.homecontinuebutton, color: Colors.white,justifyContent:'center',paddingTop:2, textAlign: 'center',paddingHorizontal:10 }}>Buy Now</Text>
                                </View>
                            </TouchableOpacity>
                            {isPress == false &&
                            <TouchableOpacity  onPress={() =>openpress() }>
                                <View style={{marginVertical:'4%'}}>
                                    <Image source={ImageIcons.close} style={newstyles.imgclose}  />
                                </View>
                            </TouchableOpacity>
                            }
                            <View style={{marginVertical:'3%'}}>
                            <FlatList
                                style={{ height:isPress ? 80 : 180 }}
                                data={props?.getliveeventlist?.products || []}
                                renderItem={renderItem2}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                horizontal={false}
                            />
                            </View>

                        </View>
                    }

                    { isbroadcaster == true &&
                        <View style={{marginVertical:'5%',right:10,}}>

                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ ...styles.live, alignSelf: 'center', width:'auto', height:27,marginLeft:30,marginTop:15 }}>
                                     <Text style={{ ...styles.homecontinuebutton, color: Colors.white, textAlign: 'center',paddingTop:3, paddingHorizontal:10}}>Accept Call</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    }
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
                            <TouchableOpacity onPress={() => doComment()}>
                                <Image
                                    source={ImageIcons.messagesend}
                                    style={{ width: 18, height: 21 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View>

                            <View style={{marginTop:-10}}>
                                <TouchableOpacity onPress={() => props.navigation.navigate("Viewbrand",{brandId:props?.showbrandName?._id})}>
                                    <Image source={{uri:props?.showbrandName?.brandImage}} style={{width:40, height:40, borderRadius:25}} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                </View>

            { cartview  &&
                <View style={{backgroundColor:'#FFE7E7',position:'absolute',zIndex:2001,bottom:0}}>
                    <Text style={newstyles.textshoop}>Shop</Text>
                    <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7',height:450}} >
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
                        <TouchableOpacity style={newstyles.proceedcartview} onPress={() =>showcheckview() }>
                            <Text style={newstyles.proceedtext}>PROCEED TO CHECKOUT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }

            { checkview  &&
                <View style={{backgroundColor:'#FFE7E7',width:'100%',position:'absolute',zIndex:2001,bottom:0}}>
                <View style={{flexDirection:'row',marginHorizontal:'3%',marginVertical:'2%'}}>
                    <Image source={ImageIcons.backIcon} style={{marginRight:'15%',width:10,height:15}}/>
                    <Text style={newstyles.textshoop}>Checkout</Text>
                </View>
                    <Text style={newstyles.textshopcheck}>5 Items</Text>
                    <View style={{marginVertical:'3%'}}>
                        <FlatList
                            data={userCart || []}
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
                <View style={{backgroundColor:'#FFE7E7',position:'absolute',zIndex:2001,bottom:0}}>
                <View style={{flexDirection:'row',marginHorizontal:'3%',marginVertical:'2%'}}>
                    <Image source={ImageIcons.backIcon} style={{marginRight:'15%',width:10,height:15}}/>
                    <Text style={newstyles.textshoop}>Checkout</Text>
                </View>
                    <Text style={newstyles.textshopcheck}>5 Items</Text>
                    <View style={{marginVertical:'3%'}}>
                        <FlatList
                            data={userCart || []}
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
                                <Text style={newstyles.textshipcheck}>{First},{Address},{City}</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={newstyles.textshipcheck}>Payment</Text>
                            <TouchableOpacity style={newstyles.newcartttview2} onPress={() =>showAddpayment()}>
                                <Text style={newstyles.textshipcheck}>Add Payment info</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={newstyles.newcartttview2}>
                        <Text style={newstyles.suntotaltext}>Subtotal: <Text style={newstyles.textshopcheck}>${props?.totalcartprice}</Text></Text>
                    </View>
                    <TouchableOpacity style={newstyles.confirmView} onPress={() =>Alert('okk')}>
                        <Text style={newstyles.confirmtexxt}>CHECKOUT</Text>
                    </TouchableOpacity>
                </View>

            }
            { Addshipping  &&
                <View style={{backgroundColor:'#FFE7E7',position:'absolute',zIndex:2001,bottom:0}}>
                 <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7',height:550}} >
                    <View style={{flexDirection:'row',marginHorizontal:'3%',marginVertical:'2%'}}>
                        <Image source={ImageIcons.backIcon} style={{marginRight:'15%',width:10,height:15}}/>
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
                    <View style={newstyles.maincartviewfooter}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={newstyles.labeltext}>Set as Default</Text>
                        </View>

                    </View>
                    <TouchableOpacity style={newstyles.saveView} onPress={() =>saveAddshipping() }>
                        <Text style={newstyles.textshipcheck}>Save</Text>
                    </TouchableOpacity>
                </ScrollView>
                </View>
            }

            { Addpayment  &&

                 <View style={{backgroundColor:'#FFE7E7',position:'absolute',zIndex:2001,bottom:0}}>
                 <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7',height:450,}} >
                    <View style={{flexDirection:'row',marginHorizontal:'3%',marginVertical:'2%',}}>
                        <Image source={ImageIcons.backIcon} style={{marginRight:'15%',width:10,height:15}}/>
                        <Text style={newstyles.textshoop}>Add Payment info</Text>
                    </View>

                    <View style={newstyles.maincartviewfooter}>
                        <View style={{width:'30%',justifyContent:'center'}}>
                            <Text style={newstyles.labeltext}>Zip Code</Text>
                        </View>
                        <View style={{width:'70%'}}>
                            <TextInput
                             style={newstyles.inputshipping}
                             onChangeText={onChangeZip}
                             value={Zip}
                             autoCompleteType="off"
                             placeholder=""
                             placeholderTextColor="#999999"
                            />
                        </View>
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


            </KeyboardAvoidingView>

        )
    }
}

export default Blurbackground
