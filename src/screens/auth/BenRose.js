import React, { useEffect, useRef, useState } from 'react'
import { Text, View, Image, TouchableOpacity, Keyboard,TextInput, Dimensions, FlatList, AppState, KeyboardAvoidingView, Platform, Alert, ScrollView,StatusBar } from 'react-native'
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

const BenRose = (props) => {
    const AgoraEngine = useRef();
    const socketRef = useRef();
    const appState = useRef(AppState.currentState);
    const dispatch = useDispatch()

    const isback = props?.route?.params?.isback;
    //const channel = '43a24d31-f151-4acb-bb46-c2e8df0690ec';//props?.route?.params?.channel;
    const channel = props?.route?.params?.channel;
    const isbroadcaster = props?.route?.params?.isbroadcaster;
    const [visible, setVisible] = React.useState(false);
    const [showmodal, setshowmodal] = React.useState(false);
    const [showsidebar, setshowsidebar] = React.useState(false);
    const [purchaseCount, setpurchaseCount] = React.useState(0);
    const [showmodalname, setshowmodalname] = React.useState();
    const [showmodalprice, setshowmodalprice] = React.useState();
    const [showmodaldesc, setshowmodaldesc] = React.useState();
    const [showmodalimage, setshowmodalimage] = React.useState();
    
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
    
    const opensidebar = () => {
      setshowsidebar(true);
    }

    const hidesidebar = () => {
        setshowsidebar(false)
    }

    const closepopupcloth = () => {
        setshowmodal(false)
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
    const openpopup1= (price) => {
        let request = {
            "productId":showmodalid,
            "userId":props?.loginuserid,
            "productQuantity":1,
            "productPrice":price,
            "branduserId":props?.getliveeventlist?.userId._id
        }
        setpurchaseCount(purchaseCount+1);
        console.log('request',request)
        props.cartadd(request, props.navigation, "vendor");
        setshowmodal(false)
        setVisible(true)
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
               props.navigation.navigate('RegistrationShop');
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
            props.updateaudiancecount(channel,1);
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
            //alert(props?.audiancecount)
            //props.getaudiancecount(channel,1);
          }, 15000);
          return () => clearInterval(interval);
        }else {
            const interval = setInterval(() => {
                //alert(props?.audiancecount)
              //  props.getaudiancecount(channel,0);
            }, 15000);
          return () => clearInterval(interval);
        }
    }, []);


    useEffect(() => {
        videoStateMessage(broadcasterVideoState)
    }, [broadcasterVideoState])

    
    const resetchannel = (channeldata,startnow)=>{
        AgoraEngine.current.destroy();
        setshowsidebar(false)
        if(startnow == true){
            props.navigation.navigate("Blurbackground", { isback: false, channel: channeldata, isbroadcaster: false }) ;
        } else{
            alert('Event will start at')
        }
    }

    const inBackground = (nextState) => {
        if (nextState = "background") {
            //dispatch(destroyRoom(channel, 'Ended'))
            appState.current = nextState
            if (isbroadcaster) {
                props.navigation.navigate("Overview")
            }else {
                props.navigation.navigate("watchlist")
            }
        }
    }


    useEffect(() => {
       getBrandUserId();
    }, [])

    const getBrandUserId = async () => {
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
            props.navigation.navigate("watchlist")
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
       },{
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
                    props.navigation.navigate("watchlist")
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

    const renderItem5 = ({ item ,index }) => {
       return(
        <View style={newstyles.maincartviewshop}>
        <TouchableOpacity onPress={() => resetchannel(item._id,item.startNow)}>
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
            <TouchableOpacity style={{marginBottom:5, justifyContent:'center', textAlign:'center'}} onPress={() =>openpopupcloth(item._id,item.productName,item.productPrice,item.productDescription,item.productImage) }>
                <Image source={{uri:item.productImage}} style={[newstyles.blurimg,{borderRadius:50}]} />
          </TouchableOpacity>
          <View>
          <Text style={newstyles.upfclothtext}>{item.productName}</Text>
          <Text style={newstyles.uppricetext}>${item.productPrice}</Text>
          </View>
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
                    
                    { isbroadcaster == false &&
                        <TouchableOpacity onPress={() => opensidebar() }>
                        <View style={{marginBottom:15,}}>
                            <Image source={ImageIcons.white_search} style={{width:20, height:20}} />
                        </View>
                        </TouchableOpacity>
                    }
                    <View style={{marginBottom:15,}}>
                        <Image source={ImageIcons.Vector} style={newstyles.imgvector} />
                        <Text style={newstyles.liketext}>0</Text>
                    </View>
                    <View style={{marginBottom:15,}}>
                        <Image source={ImageIcons.copy} style={newstyles.imgvector2}  />
                        <Text style={newstyles.liketext}>0</Text>
                    </View>
                    { isbroadcaster == false &&
                    <TouchableOpacity  onPress={() => props.navigation.navigate("Cart") }>
                    <View style={{marginBottom:15,}}>
                        <Image source={ImageIcons.Vectorshare} style={newstyles.imgvector3} />
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
                </View>
                
                <View>
                    
                    <View style={{marginTop:'2%',marginLeft:20}}>
                        <Text style={newstyles.blurrtext}>{props?.showbrandName?.brandName}</Text>
                    </View>
                    
                    <View style={{flexDirection:'row',marginHorizontal:'0%',marginTop:30}}>
                        <Image source={ImageIcons.timer} style={newstyles.imgtimer} />
                        <View style={{marginLeft:-14,marginTop:-5}}>
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
                          </View>
                          
                    </View>
                    
                { isbroadcaster == false &&
                    <View style={{flexDirection:'row',marginTop:isKeyboardVisible?'18%':'38%',marginHorizontal:'5%'}}>
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
                    <Text style={[newstyles.audiencetext,{paddingTop:3}]}>{props?.audiancecount} audience</Text>
                </View>
                </View>
                <View style={{ justifyContent: 'flex-end', flex: 1, marginHorizontal: 6, }}>
                    <View style={{ justifyContent: 'flex-end', flexDirection:'row', marginBottom: 1 }}>
                         { isbroadcaster == false ?
                        <FlatList
                            data={userComments}
                            keyExtractor={(item, index) => item.id + index + ""}
                            inverted={true}
                            style={{ maxHeight: 130,bottom:-130, left:15 }}
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
                        <View style={{marginRight:40}}>
                            <FlatList
                                data={props?.getliveeventlist?.products || []}
                                renderItem={renderItem2}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                horizontal={false}
                                style={{ maxHeight: 210,marginRight:0, marginBottom:0 }}
                            />
                            <View style={{marginVertical:'10%',width:'100%', textAlign:'center', justifyContent:'center', alignItems:'center'}}>
                              <TouchableOpacity onPress={() => props.navigation.navigate("Viewbrand",{brandId:props?.showbrandName?._id})}>
                                    <Image source={{uri:props?.showbrandName?.brandImage}} style={{width:35, height:35, borderRadius:25}} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    }

                    { isbroadcaster == true &&
                        <View style={{marginVertical:'5%',right:10,}}>
                            <View style={{marginVertical:'0%',right:0,paddingLeft:60}}>
                              <TouchableOpacity onPress={() => props.navigation.navigate("Viewbrand",{brandId:props?.showbrandName?._id})}>
                                    <Image source={{uri:props?.showbrandName?.brandImage}} style={{width:35, height:35, borderRadius:25}} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ ...styles.live, alignSelf: 'center', width:'auto', height:27,marginLeft:30,marginTop:15 }}>
                                     <Text style={{ ...styles.homecontinuebutton, color: Colors.white, textAlign: 'center',paddingTop:3, paddingHorizontal:10}}>Accept Call</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    }
                    </View>
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
                    
                </View>
               { visible  &&
                    <Provider>
                    <Portal>
                    <Modal visible={visible} onDismiss={closepopup} contentContainerStyle={containerStyle}>
                    <Image source={ImageIcons.greencart}  />
                    <Text style={newstyles.produttext}>Added to cart</Text>
                        <Text style={newstyles.addimagetext}>Product added to your cart successfully</Text>
                    <TouchableOpacity style={newstyles.modalbutton} 
                    onPress={() => setVisible(false) }>
                        <Text style={newstyles.modaltouchablitytext2} >Continue Shopping</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => props.navigation.navigate("Cart") }>
                        <Text style={[newstyles.boldhadertext,{marginVertical:'5%'}]}>Go to cart</Text>
                    </TouchableOpacity>
                    </Modal>
                    </Portal>
                    </Provider>
                }
                 { showmodal  &&
                    <Provider>
                    <Portal>
                    <Modal visible={showmodal} onDismiss={closepopupcloth} contentContainerStyle={containerStyle2}>
                    <View style={newstyles.mobaileView}>
                         <View>
                          <Image source={{uri: showmodalimage }} style={newstyles.clothes} />
                          </View>
                          <View style={{marginHorizontal:'5%'}}>
                          <Text style={[newstyles.boldproduct,{marginLeft:'10%'}]}>{showmodalname}</Text>
                          <Text style={newstyles.clothcamtext}>${showmodalprice}</Text>
                          </View>
                         </View>
                         <View >
                         <Text style={[newstyles.viewdegaulletextcenter,{marginVertical:'1%'}]}>{showmodaldesc}</Text>
                        </View>
                        <View style={{alignItems:'center',marginTop:'7%'}}>
                            <TouchableOpacity
                                style={newstyles.TouchableOpacitytextadsum}
                                activeOpacity = { .5}
                                onPress={() => openpopup1(`${showmodalprice}`)}>
                                <Text style={newstyles.homecontinuebuttonmodal}>Buy now</Text>
                            </TouchableOpacity>
                       </View>
                    
                    <View style={{alignItems:'center',marginTop:'4%'}}>
                    <TouchableOpacity onPress={() => setshowmodal(false) }
                        style={newstyles.Touchableselltextaddd}
                        activeOpacity = { .5}
                        >
                        <Text style={newstyles.sellbutton}>Continue Shopping</Text>
                    </TouchableOpacity>
                </View>
                
                    </Modal>
                    </Portal>
                    </Provider>
                }

                { showsidebar  &&
                    <Provider>
                    <Portal>
                    <Modal visible={showsidebar} onDismiss={hidesidebar} contentContainerStyle={{ zIndex:1011,justifyContent:'center',backgroundColor: 'white', marginTop:60,marginBottom:0, padding: 10,marginLeft:'40%', width:'60%'}}>
                    <View>
                        <Text style={{fontFamily:'hinted-AvertaStd-Regular', color:'#333333',marginTop:10}}>Live Streams</Text>
                        <ScrollView style={{zIndex:1011, marginBottom:20,marginLeft:10}}>
                            <FlatList
                                data={props?.getalleventdata}
                                renderItem={renderItem5}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                
                            />
                        </ScrollView>
                    </View>
                    </Modal>
                    </Portal>
                    </Provider>
                }


            </KeyboardAvoidingView>

        )
    }
}

export default BenRose
