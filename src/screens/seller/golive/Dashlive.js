import React, { useEffect,useRef, useState } from 'react';
import { Text, View,Image,TextInput, ImageBackground,FlatList,Picker,StatusBar,Dimensions,ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { Colors, CommonStrings } from '../../../common'
import ImageIcons from '../../../common/ImageIcons'
import InputField from '../../../components/forms/inputField';
import { RoundedButton } from '../../../components/forms/button';
import { phoneRegExp } from '../../../services/helper';
import DropdownField from '../../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../../components/modals/Loader';
import Swipeout from 'react-native-swipeout';
import HorizontalSlider from 'react-horizontal-slider';
import Footer2 from '../../../screens/common/Footer2';
import SellHeader from '../../../screens/common/Sellheader';
import CountDown from 'react-native-countdown-component';

import AsyncStorage from '@react-native-community/async-storage'; 
import { useFocusEffect } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Provider , Portal,} from 'react-native-paper';
import Modal from 'react-native-modal'


import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const Dashlive = (props) => {

     const deviceHeight = Dimensions.get('window').height;
    const deviceWidth = Dimensions.get('window').width;


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
    const userId = props?.route?.params?.userId;
    const brandId = props?.route?.params?.brandId;
    
    //     var swipeoutBtns = [
    //   {
    //     text: 'Button'
    //   }
    // ]
 
    useEffect(() => {

      props.getincomingtlist(props?.loginuserid);
      props.getselldeshboard(props?.loginuserid);
      props.gettopsell(props?.loginuserid,3);
      props.liveeventdetail(props?.loginuserid);
    }, [])

    useEffect(() => {
       // AsyncStorage.setItem('UserId','');
       // AsyncStorage.setItem('userLogin','');
        getBrandUserId();
    }, [])

    // useFocusEffect(() => {
    //     getBrandUserId();
    //  })

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
    const handlesch=()=>{
        setshowstream(true);
    }

    const getBrandUserId = async () => {
         var getUserId = await AsyncStorage.getItem('UserId');
        setUserID(getUserId);
         props.getAllproduct(props?.loginuserid);
        // if(userId!="" && userId!=undefined){
        //     await AsyncStorage.setItem('UserId',userId);
        //     await AsyncStorage.setItem('userLogin',"1");
        // }
    }
   
    const golivepage = async () => {
        props.liveeventdetail(props?.loginuserid);
        setTimeout(function(){ props.navigation.navigate("StartRecording",{userId:userId})},500)
    }
    // Local states
    showstream
    const [showstream, setshowstream] = useState(false);
const [UserID, setUserID] = useState("");
    const [showname, setShowname] = useState(false);
    const [subMsg, onChangeText1] = React.useState("");
      const [msg, onChangeText2] = React.useState("");
    const [isModalVisible, setModalVisible] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [visible, setVisible] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const [showclassName, setshowclassName] = useState("#B80000");
    const [wayToContact, setWayToContact] = useState("Phone");
    const [timer, settimer] = useState(0);
    const [Duration, setDuration] = React.useState(1200);
    const [livedetailId, setlivedetailId] = React.useState('61ee89318b8222099736c255');

    const [producttype, setproducttype] = React.useState('new');
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

    const [fdata,setfdata]=useState([
        {total:"Total income",dollar:"100,000",withdraw:"withdraw money",icon:ImageIcons.arroricon},
          {total:"Total order",dollar:"10,000",withdraw:" "} ,
          {total:"Total order",dollar:"10,000"},]);

     const [orderdata,setorderdata]=useState([
        {name:"Kenitled",cloths:"winter cloths",orderby:"koyajosya"},
          {name:"Kenitled",cloths:"winter cloths",orderby:"koyajosya"},{name:"Kenitled",cloths:"winter cloths",orderby:"koyajosya"},]);

      const [ordertdata,setordertdata]=useState([
        {name:"Kenitled",cloths:"winter cloths",orderby:"10000"},
          {name:"Kenitled",cloths:"winter cloths",orderby:"10000"},{name:"Kenitled",cloths:"winter cloths",orderby:"10000"},]);


       let colors = ['#8862E01A', '#19D8951A', '#E220201A', '#abcdef'];

     const openpopup = () => {
        setVisible(true);
       

        };
    const closepopup = () => {
             setVisible(false);
            
          }

       const data1 = {
        labels: ["USA", "Canada", "Mexico"], // optional
        data: [0.4, 0.6, 0.8]
        };

       const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May",],
        datasets: [
        {
          data: [20, 45, 28, 80, 99,]
        }
        ]
    };

    const containerStyle = {backgroundColor: 'red', padding: '7%',marginHorizontal:'5%',alignItems:'center',};

       const DATA = [
       {
        image:ImageIcons.redincome,
       },

     ];
      const DATA3 = [
       {
        text:"GSHM8U00S0004KH ",
        text1:"Amy White ",
        text2:"amywhite@yahoo.com ",
       },
       {
        text:"GSHM8U00S0004KH ",
        text1:"Amy White ",
        text2:"amywhite@yahoo.com ",
       },
       {
        text:"GSHM8U00S0004KH ",
        text1:"Amy White ",
        text2:"amywhite@yahoo.com ",
       },
       {
        text:"GSHM8U00S0004KH ",
        text1:"Amy White ",
        text2:"amywhite@yahoo.com ",
       },
       {
        text:"GSHM8U00S0004KH ",
        text1:"Amy White ",
        text2:"amywhite@yahoo.com ",
       },

     ];
     const DATA4 = [
       {
         image:ImageIcons.girlcent,
        text1:"Clothing",
        text:"GSHM8U00S0004KH ",
       },
       {
        image:ImageIcons.girlcent,
        text1:"Clothing",
        text:"GSHM8U00S0004KH ",
       },
       {
        image:ImageIcons.girlcent,
        text1:"Clothing",
       text:"GSHM8U00S0004KH ",
       },
       {
        image:ImageIcons.girlcent,
        text1:"Clothing",
       text:"GSHM8U00S0004KH ",
       },
       {
        image:ImageIcons.girlcent,
        text1:"Clothing",
        text:"GSHM8U00S0004KH ",
       },

     ];

     const DATA2 = [
       {
        text:'Sneakers',
        text1:'$55.00',
        text2:'Orders (256)',
        image:ImageIcons.whiteshoetoday,
       },
        {
       text:'Sneakers',
       text1:'$55.00',
       text2:'Orders (256)',
        image:ImageIcons.whiteshoetoday,
       },
       {
       text:'Sneakers',
       text1:'$55.00',
       text2:'Orders (256)',
        image:ImageIcons.whiteshoetoday,
       },
       {
       text:'Sneakers',
       text1:'$55.00',
       text2:'Orders (256)',
        image:ImageIcons.whiteshoetoday,
       },
       {
       text:'Sneakers',
       text1:'$55.00',
       text2:'Orders (256)',
        image:ImageIcons.whiteshoetoday,
       },
       {
       text:'Sneakers',
       text1:'$55.00',
       text2:'Orders (256)',
        image:ImageIcons.whiteshoetoday,
       },
       

     ];

    
    const startlivebtn = ()=>{
        let request = {
            "eventId":livedetailId,
            "EventDuration":Duration,
            "startNow":true,
            "eventType":producttype
        }
        let request1 = {
            "channelName":livedetailId,
            "appID":"0c96ec2a0c9744c0bb3d21330bb0911d",
            "appCertificate":"f877b72b55264162bfc8b88421fa8b77",
            "uid":1
        }
        props.getchanneltoken(request1, props.navigation, "vendor");
        props.schuleEventstart(request, props.navigation, "vendor");
        settimer(10)
    }

    const openshare=()=>{
        let options = {
          message: 'To join our broadcast, click here',
          url: 'https://com.dropship/'+livedetailId,
        };
      Share.open(options);
    }

    const startBrodcast = ()=>{
        props.navigation.navigate("Blurbackground", { isback: false, channel:livedetailId, isbroadcaster: true })
    }

 const renderItem2 = ({ item ,index }) => {
     return(
        <View>
           <View style={{paddingHorizontal:2}}>
              <Image source={{uri:item.productImage}} style={{height:159,width:159}} />
           </View>
           <View style={{marginTop:5,}}>
            <Text style={{fontSize:14,width:'80%',marginLeft:'5%'}}>{item.productName}</Text>
            <View style={{height:14,width:14,backgroundColor:'#e6e6e6',borderRadius:3,alignSelf:'flex-end',marginRight:'9%',marginTop:-10,}}></View>
            <Text style={{fontSize:16,width:'80%',fontFamily:'SourceSansPro-Bold',marginLeft:'5%'}}>{item.productPrice}</Text>
             <View>
                <Rating
                type='custom'
                imageSize={18}
                ratingCount={5}
                ratingColor='#EB5757'
                tintColor='#FFE7E7'
                style={{ paddingVertical: 5,width:100,marginLeft:5}}
                />
             </View>
             <TouchableOpacity style={{backgroundColor:'#ffe6ff',width:90,borderRadius:5,padding:6,marginHorizontal:'4%',marginBottom:'12%'}}>
                      <Text style={{fontSize:12,color:'#E25424',fontFamily:'SourceSansPro-SemiBold',textAlign:'center'}}>NEW STOCK</Text> 
                   </TouchableOpacity>
          </View>
        </View>  
  );
}

    const renderItem3 = ({ item,index }) => {
   return(
           <View>

            <View style={styles.seledataViewTODAY}>
                       <Text style={styles.seriestexttoday}>{item.text}</Text>
                       <Text style={styles.seriestexttoday}>{item.text1}</Text>
                       <Text style={styles.seriestexttoday}>{item.text2}</Text>
                   </View>
            
            </View>
    );
    }

     const renderItem4 = ({ item,index }) => {
   return(
           <View>

            <View style={styles.seledataViewTODAYsecndrender}>
                    <View style={{flexDirection:'row'}}>
                      <Image source={item.image} style={{width:24,height:24,}}/>
                       <Text style={[styles.seriestexttoday,{alignSelf:'center',marginLeft:1}]}>{item.text}</Text>
                    </View>   
                       <Text style={styles.seriestexttoday}>{item.text1}</Text>
                   </View>
            
            </View>
    );
    }
    

    return (
         <View style={{flex:1}}>
         <StatusBar backgroundColor={'#B80000'} barStyle="dark-content" translucent={true} />
            <SellHeader />

       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#ffffff'}} > 
          
               <View style={{marginHorizontal:'3%',marginVertical:'5%'}}>
               <TouchableOpacity>
                 <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold',}}>Go Live</Text>
                 </TouchableOpacity>
               </View>

             { showstream==true ?

              <View style={{flexDirection:'row',marginHorizontal:'4%'}}>
                <TouchableOpacity onPress={() =>  setshowstream(false)} style={{backgroundColor:'#E6E6E6',width:'40%',borderRadius:10,padding:10,}}>
                      <Text style={styles.totalincometodayWIDRO17}>GO LIVE NOW</Text> 
                   </TouchableOpacity>

               
                <TouchableOpacity onPress={() => setshowstream(true)} style={{backgroundColor:'#B80000',width:'57%',borderRadius:10,padding:10,marginLeft:10}}>
                      <Text style={styles.totalincometodayWIDRO16}>SCHEDULE LIVESTREAM</Text> 
                   </TouchableOpacity>
              </View>
          :
           <View style={{flexDirection:'row',marginHorizontal:'4%'}}>
                <TouchableOpacity onPress={() =>  setshowstream(false)} style={{backgroundColor:'#B80000',width:'40%',borderRadius:10,padding:10,}}>
                      <Text style={styles.totalincometodayWIDRO16}>GO LIVE NOW</Text> 
                   </TouchableOpacity>

               
                <TouchableOpacity onPress={() => setshowstream(true)} style={{backgroundColor:'#E6E6E6',width:'57%',borderRadius:10,padding:10,marginLeft:10}}>
                      <Text style={styles.totalincometodayWIDRO17}>SCHEDULE LIVESTREAM</Text> 
                   </TouchableOpacity>
              </View>

      }
             { showstream==true &&
                <View>
              <View style={{marginHorizontal:'3%',marginTop:'5%'}}>
               <TouchableOpacity>
                 <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold',}}>Date & Time</Text>
                 </TouchableOpacity>
               </View>

              
                <View style={{backgroundColor:'#e6e6e6',width:200,borderRadius:10,padding:10,marginHorizontal:'4%',marginTop:'2%',flexDirection:'row',justifyContent:'space-between'}}>
                      <Text style={{fontSize:18,color:'#000000',fontFamily:'SourceSansPro-Regular'}}>Select Date</Text> 
                      <Image source={ImageIcons.caltoday} style={{width:15,height:15,marginTop:2}}/>
                   </View>
                 
                 <View style={styles.pickerViewshorttodayagainlive2}>
                      <Picker
                        selectedValue={selectedValue}
                        style={{ height: 42, width: 205,color:'#4d4d4d',}}
                        onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                       >
                        <Picker.Item label="8:00 AM" value="1" />
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
              
              }

               <View style={{marginHorizontal:'3%',marginTop:'7%'}}>
               <TouchableOpacity>
                 <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold',}}>Stream Time</Text>
                 </TouchableOpacity>
               </View>

              <View style={{flexDirection:'row',marginHorizontal:'4%',marginTop:'4%'}}>
               <TouchableOpacity onPress={() =>setDuration(1200)}> 
                { Duration==1200 ?
                <View  style={{backgroundColor:'#B80000',width:'100%',borderRadius:10,padding:10,borderWidth:1,borderColor:'#ff0000'}}>
                      <Text style={styles.totalincometodayWIDRO16}>20 MIN</Text> 
                   </View>
                   :
                    <View  style={{backgroundColor:'#e6e6e6',width:'100%',borderRadius:10,padding:10,}}>
                      <Text style={[styles.totalincometodayWIDRO16,{color:'#000000'}]}>20 MIN</Text> 
                   </View>
               }
                </TouchableOpacity>   

                 <TouchableOpacity onPress={() =>setDuration(1800)}> 
                { Duration==1800 ? 
                <View style={{backgroundColor:'#b80000',width:'95%',borderRadius:10,padding:10,marginLeft:10,borderWidth:1,borderColor:'#ff0000'}}>
                      <Text style={[styles.totalincometodayWIDRO17,{color:'#ffffff'}]}>30 MIN</Text> 
                   </View>
                   :
                    <View style={{backgroundColor:'#e6e6e6',width:'95%',borderRadius:10,padding:10,marginLeft:10}}>
                      <Text style={styles.totalincometodayWIDRO17}>30 MIN</Text> 
                   </View>
               }
                   </TouchableOpacity>
                  
                   <TouchableOpacity onPress={() =>setDuration(2700)}>
                        { Duration==2700 ?
                    <View style={{backgroundColor:'#b80000',width:'95%',borderRadius:10,padding:10,marginLeft:10,borderWidth:1,borderColor:'#ff0000'}}>
                      <Text style={[styles.totalincometodayWIDRO17,{color:'#ffffff'}]}>45 MIN</Text> 
                   </View>
                   :
                    <View style={{backgroundColor:'#e6e6e6',width:'95%',borderRadius:10,padding:10,marginLeft:10}}>
                      <Text style={styles.totalincometodayWIDRO17}>45 MIN</Text> 
                   </View>
               }
                   </TouchableOpacity>
              </View>

              

              
                 <View style={{marginTop:'8%',}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'4%',marginVertical:'2%'}}>
                     <Text style={{fontSize:22,fontFamily:'SourceSansPro-SemiBold'}}>Products</Text>
                      <TouchableOpacity onPress={() => props.navigation.navigate("Selectproduct")} style={{backgroundColor:'#B80000',width:'40%',borderRadius:20,padding:10,}}>
                      <Text style={styles.totalincometodayWIDRO}>ADD PRODUCT</Text> 
                   </TouchableOpacity>
                    </View>
                    <View style={{marginLeft:'5%'}}>
                    <FlatList
                        data={props?.getlistproduct || []}
                        renderItem={renderItem2}
                        key={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        />
                    </View>
               </View>  


                 <View style={{marginHorizontal:'4%',marginVertical:'6%',}}>
                  <Text style={{fontSize:22,fontFamily:'SourceSansPro-SemiBold',marginHorizontal:'3%'}}>Invite Audience</Text>
                <TextInput
                  style={styles.inputedittoday1234}
                  placeholder="com.dropship/61rlskejfl948009230"
                  placeholderTextColor="#4d4d4d"
                  paddingLeft={15}
                  width={330}
                  multiline
                  onChangeText={(text) => {}}
                />
                <View style={{position:'absolute',alignSelf:'flex-end',marginTop:'14%',right:'5%'}}>
                        <TouchableOpacity onPress={() =>  openshare() } >
                            <Image source={ImageIcons.copytoday} style={{height:21,width:21}} />
                        </TouchableOpacity>
                    </View>
              </View>
           
              { timer>0 &&
                        <View style={{marginTop:'6%'}}>
                            <Image source={ImageIcons.refresh} style={{width:43,height:43,alignSelf:'center'}}/>
                            <View style={{position:'absolute',alignSelf:'center',top:5}}>
                                <CountDown
                                    until={timer}
                                    size={12}
                                    onFinish={() => startBrodcast()  }
                                    digitStyle={{backgroundColor: '#FF000000'}}
                                    digitTxtStyle={{color: '#000000'}}
                                    timeToShow={['S']}
                                    separatorStyle={{color: '#000000'}}
                                    timeLabels={{m: null, s: null}}
                                    showSeparator
                                  />
                            </View>
                        </View>
                    }

                 { showstream==true ?
                <TouchableOpacity  onPress={() => startlivebtn() }  style={{backgroundColor:'#b80000',width:320,borderRadius:30,padding:'5%',alignSelf:'center',marginTop:'4%',marginBottom:'25%'}}>
                      <Text style={styles.totalincometodaycompaign}>SCHEDULE LIVESTREAM</Text> 
                   </TouchableOpacity>
                :
                 <TouchableOpacity  onPress={() => startlivebtn()} style={{backgroundColor:'#b80000',width:320,borderRadius:30,padding:'5%',alignSelf:'center',marginTop:'4%',marginBottom:'25%'}}>
                      <Text style={styles.totalincometodaycompaign}>START LIVESTREAM</Text> 
                   </TouchableOpacity>
                 }


                <View>   


        { openpopup  &&
                    <Provider>
                    <Portal>
                    <Modal visible={visible} style={{backgroundColor:'rgba(0, 0, 0, 0.8)',marginHorizontal:-20,marginVertical:-5}} onDismiss={closepopup} contentContainerStyle={containerStyle}>
          <View style={{ marginTop:150,position: 'absolute', textAlign: 'center',justifyContent: 'center',alignItems: 'center',top: 10,left: 0,right: 0 }}>
            <View style={{ width: 250, borderRadius: 10, backgroundColor:'#fff', borderColor:'#999', borderWidth:2 }}>
              
             
              <Text style={{marginVertical:'4%',marginHorizontal:'11%',fontSize:14,fontFamily:'SourceSansPro-SemiBold'}}>Adjust Price</Text>
              <View style={styles.pickerViewshorttodaymodal}>
                      <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 200,color:'#4d4d4d',}}
                        onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                       >
                        <Picker.Item label="Price" value="1" />
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

                <View style={{borderBottomWidth:2,borderColor:'#e6e6e6',width:'90%',marginVertical:'7%',alignSelf:'center'}}></View>

                <Text style={{marginVertical:'3%',marginHorizontal:'11%',fontSize:14,fontFamily:'SourceSansPro-SemiBold'}}>Adjust Quantity</Text>
              <View style={styles.pickerViewshorttodaymodal}>
                      <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 200,color:'#4d4d4d',}}
                        onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                       >
                        <Picker.Item label="Quantity" value="1" />
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

                <View style={{borderBottomWidth:2,borderColor:'#e6e6e6',width:'90%',marginVertical:'7%',alignSelf:'center'}}></View>

                <Text style={{marginVertical:'3%',marginHorizontal:'11%',fontSize:14,fontFamily:'SourceSansPro-SemiBold'}}>Apply Discount</Text>
              <View style={styles.pickerViewshorttodaymodal}>
                      <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 200,color:'#4d4d4d',}}
                        onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                       >
                        <Picker.Item label="Discount" value="1" />
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

                <TouchableOpacity onPress={() => closepopup()} style={{backgroundColor:'#B80000',width:200,borderRadius:25,padding:15,alignSelf:'center',marginVertical:'8%'}}>
                      <Text style={styles.totalincometodaySAVECHANGE}>SAVE CHANGES</Text> 
                   </TouchableOpacity>

               
                  


            </View>
          </View>
       </Modal>
                    </Portal>
                    </Provider>
                }
         </View>
        
               </ScrollView>
            
            <Footer2 onSelelection="3"  />
        </View>     
        
    )
}


export default Dashlive