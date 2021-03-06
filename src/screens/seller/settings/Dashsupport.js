import React, { useEffect,useRef, useState } from 'react';
import { Text, View,Image,TextInput, ImageBackground,FlatList,Picker,StatusBar,Dimensions,ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard,ProgressBarAndroid} from 'react-native';
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


const Dashsupport = (props) => {

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

    useFocusEffect(() => {
        getBrandUserId();
     })

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

    const getBrandUserId = async () => {
        if(userId!="" && userId!=undefined){
            await AsyncStorage.setItem('UserId',userId);
            await AsyncStorage.setItem('userLogin',"1");
        }
    }
   
    const golivepage = async () => {
        props.liveeventdetail(props?.loginuserid);
        setTimeout(function(){ props.navigation.navigate("StartRecording",{userId:userId})},500)
    }
    // Local states
    const [subMsg, onChangeText1] = React.useState("");
      const [msg, onChangeText2] = React.useState("");
    const [isModalVisible, setModalVisible] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [visible, setVisible] = React.useState(false);
     const [selectedValue, setSelectedValue] = useState("");
    const [showclassName, setshowclassName] = useState("#B80000");
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
        setVisible(true)

        };
    const closepopup = () => {
             setVisible(false)
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
         image:ImageIcons.girlcent,
        text:"25 - 01 - 22 ",
        text1:"CRDB Bank Limited (8391) ",
        text2:"$1,000.00",
       },
       {
        image:ImageIcons.girlcent,
        text:"25 - 01 - 22 ",
        text1:"CRDB Bank Limited (8391)",
        text2:"$1,000.00",
       },
       {
        image:ImageIcons.girlcent,
        text:"25 - 01 - 22 ",
        text1:"CRDB Bank Limited (8391)",
        text2:"$1,000.00",
       },
       {
        image:ImageIcons.girlcent,
        text:"25 - 01 - 22 ",
        text1:"CRDB Bank Limited (8391) ",
        text2:"$1,000.00",
       },
       {
        image:ImageIcons.girlcent,
        text:"25 - 01 - 22 ",
        text1:"CRDB Bank Limited (8391)",
        text2:"$1,000.00",
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

    
    

 const renderItem2 = ({ item ,index }) => {
     return(
        <View>
           <View style={{padding:2,marginHorizontal:7}}>
              <Image source={item.image} style={{height:162,width:162}} />
           </View>
           <View style={{marginTop:5,}}>
            <Text style={{fontSize:14,width:'80%',marginLeft:'5%'}}>{item.text}</Text>
            <View style={{height:14,width:14,backgroundColor:'#e6e6e6',borderRadius:3,alignSelf:'flex-end',marginRight:'9%',marginTop:-10,}}></View>
            <Text style={{fontSize:16,width:'80%',fontFamily:'SourceSansPro-Bold',marginLeft:'5%'}}>{item.text1}</Text>
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
             <Text style={{fontSize:14,width:'80%',marginLeft:'5%',fontFamily:'SourceSansPro-Regular',color:'#4d4d4d',marginBottom:'20%'}}>{item.text2}</Text>
          </View>
        </View>  
  );
}

     const renderItem3 = ({ item,index }) => {
   return(
           <View>

            <View style={styles.seledataViewTODAYaccount}>
                     
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
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} > 
          
               <TouchableOpacity onPress={() => props.navigation.navigate("Dashwith")} style={{flexDirection:'row',marginHorizontal:'4%',marginTop:'7%'}}>
                <Text style={{fontSize:18,fontFamily:'SourceSansPro-Regular',color:'#666666'}}>SETTINGS /</Text>
                <Text style={{fontSize:18,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>CUSTOMER SUPPORT</Text>
               </TouchableOpacity>

               <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'4%',marginTop:'8%'}}>
               <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold',}}>CUSTOMER SUPPORT</Text>
               </View>

               <View style={{marginHorizontal:'4%',marginTop:'2%'}}>
                 <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#1a1a1a'}}>You can reach out to us via the following channels.</Text>
               </View>

             

              <View style={{width:deviceWidth/1.1,backgroundColor:'#ffffff',padding:'4%',alignSelf:'center',marginTop:'5%',borderRadius:15,}}>

              
               <View style={{flexDirection:'row',marginTop:'4%'}}>
               <Image source={ImageIcons.calltoday} style={{width:21,height:21,}}/>
                  <Text style={{fontSize:18,fontFamily:'SourceSansPro-Regular',color:'#1a1a1a',alignSelf:'center',marginLeft:'3%'}}>+1-555-555-5555</Text>
               </View>

               
               <View style={{flexDirection:'row',marginTop:'4%'}}>
               <Image source={ImageIcons.smstoday} style={{width:21,height:21,}}/>
                  <Text style={{fontSize:18,fontFamily:'SourceSansPro-Regular',color:'#1a1a1a',alignSelf:'center',marginLeft:'3%'}}>info@dropship.com</Text>
               </View>

               <View style={{borderBottomWidth:2,borderColor:'#e6e6e6',width:'100%',alignSelf:'center',marginVertical:'4%'}}></View>

                <View>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#000000'}}>Or you can reach out to us via social media</Text>
               </View>

              <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:'5%'}}>
                <View style={{height:45,width:45,borderRadius:25,backgroundColor:'#ffffff',elevation:4,padding:'4%'}}>
                   <Image source={ImageIcons.facebook} style={{width:21,height:21,alignSelf:'center',}}/>
                </View>
                 <View style={{height:45,width:45,borderRadius:25,backgroundColor:'#ffffff',elevation:4,padding:'4%'}}>
                   <Image source={ImageIcons.google} style={{width:21,height:21,alignSelf:'center',}}/>
                </View>
                 <View style={{height:45,width:45,borderRadius:25,backgroundColor:'#ffffff',elevation:4,padding:'4%'}}>
                   <Image source={ImageIcons.message} style={{width:21,height:21,alignSelf:'center',}}/>
                </View>
                 <View style={{height:45,width:45,borderRadius:25,backgroundColor:'#ffffff',elevation:4,padding:'4%'}}>
                   <Image source={ImageIcons.twitter} style={{width:21,height:21,alignSelf:'center',}}/>
                </View>
                 <View style={{height:45,width:45,borderRadius:25,backgroundColor:'#ffffff',elevation:4,padding:'4%'}}>
                   <Image source={ImageIcons.linkin} style={{width:21,height:21,alignSelf:'center',}}/>
                </View>
              </View>
   
              </View>



                <View style={{backgroundColor:'#FFFFFF',width:deviceWidth/1.1,marginVertical:'10%',borderRadius:15,alignSelf:'center',padding:'5%',marginBottom:'25%'}}>

                 <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'3%'}}>
                     <Text style={{fontSize:20,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold',}}>Chat with Customer Support</Text>
                       
                       
                     <TouchableOpacity onPress={() => closepopup() } style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,marginLeft:'4%',padding:8,}}>
                      <Image source={ImageIcons.closetoday}  style={{height:12,width:12,marginTop:5,alignSelf:'center'}} />
                    </TouchableOpacity>
                    
                   </View> 
                
                <View style={{marginTop:'7%'}}>
                <View style={{backgroundColor:'#AFFFE2',padding:8,width:'98%',borderRadius:10,alignSelf:'flex-end'}}>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#1a1a1a',}}>Hey! Just wanted to ask when my order will be processed?</Text>
                </View>
                 <Text style={{fontSize:14,fontFamily:'SourceSansPro-Regular',color:'#666666',marginHorizontal:'3%',marginTop:2}}>Today, 12:30PM</Text>
                </View>

                 <View style={{marginVertical:'8%'}}>
                  <View style={{backgroundColor:'#B80000',padding:8,width:'98%',borderRadius:10,alignSelf:'flex-end',}}>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#FFFFFF',}}>Hello! Thanks for your enquiry. Orders are processed in 3 business days.</Text>
                  </View>
                   <Text style={{fontSize:14,fontFamily:'SourceSansPro-Regular',color:'#666666',marginTop:2,alignSelf:'flex-end',right:4}}>Today, 12:30PM</Text>
                 </View>

                 <View style={{marginHorizontal:'3%'}}>
                  <View style={{backgroundColor:'#AFFFE2',padding:15,width:'45%',borderRadius:10,}}>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#1a1a1a',}}>Okay thanks!</Text>
                  </View>
                   <Text style={{fontSize:14,fontFamily:'SourceSansPro-Regular',color:'#666666',marginTop:2,}}>Today, 12:30PM</Text>
                 </View>

                <View style={{flexDirection:'row',marginVertical:'10%',justifyContent:'space-between'}}>
                 <View>
                   <TextInput
                  style={styles.inputedittoday}
                  placeholder="Type here..."
                  placeholderTextColor="#4d4d4d"
                  paddingLeft={15}
                  width={230}
                  multiline
                  onChangeText={(text) => {}}
                />
                <TouchableOpacity style={{position:'absolute',right:'7%',top:'25%'}}>
                 <Image source={ImageIcons.todaycam} style={{width:24,height:24,}}/>
                 </TouchableOpacity>
                 </View>

                 <View>
                   <Image source={ImageIcons.containtoday} style={{width:52,height:52,borderRadius:10,marginTop:'2%'}}/>
                 </View>
                </View>
              </View>

                

             



                 <View>   


        { openpopup  &&
                    <Provider>
                    <Portal>
                    <Modal visible={visible} style={{backgroundColor:'rgba(0, 0, 0, 0.8)',marginHorizontal:-20,marginVertical:-5}} onDismiss={closepopup} contentContainerStyle={containerStyle}>
          <View style={{ marginTop:40,position: 'absolute', textAlign: 'center',justifyContent: 'center',alignItems: 'center',top: 10,left: 0,right: 0 }}>
            <View style={{ width: 320, borderRadius: 10, backgroundColor:'#fff', borderColor:'#999', borderWidth:2 }}>
              
             
             
             

                 <View style={{width:deviceWidth/1.15,backgroundColor:'#ffffff',padding:'5%',alignSelf:'center',marginTop:'7%',borderRadius:15,}}>

                   <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:'3%'}}>
                     <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold',}}>Transaction Details</Text>
                       
                       
                     <TouchableOpacity onPress={() => closepopup() } style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,marginLeft:'4%',padding:8,}}>
                      <Image source={ImageIcons.closetoday}  style={{height:12,width:12,marginTop:5,alignSelf:'center'}} />
                    </TouchableOpacity>
                    
                   </View> 

                <Text style={{fontSize:18,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a',marginTop:'3%'}}>Transaction Information</Text>
                
               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#666666'}}>Transaction ID</Text>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>264554855</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#666666'}}>Receiving Account</Text>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a',width:140}}>CRDB Bank Limited (8391)</Text>
               </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#666666'}}>Transfer Amount</Text>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>$1,000.00*</Text>
               </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#666666'}}>Transfer Fee</Text>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>$10</Text>
               </View>
                 
              </View>

             
             <View style={{borderBottomWidth:2,borderColor:'#e6e6e6',width:'90%',alignSelf:'center',marginVertical:'5%'}}></View>
               
                <View style={{width:deviceWidth/1.15,backgroundColor:'#ffffff',padding:'5%',alignSelf:'center',borderRadius:15,}}> 
              <Text style={{fontSize:18,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a',marginTop:'3%'}}>Transaction Timeline</Text>
                
               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#666666'}}>Approved</Text>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>25 - 01 - 22</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#666666'}}>Sent to Bank</Text>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>25 - 01 - 22</Text>
               </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#666666'}}>Estimated deposit date**</Text>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>25 - 01 - 22</Text>
               </View>
              </View>
                
               <View style={{marginHorizontal:'4%',marginTop:'2%',marginBottom:'8%'}}>
                <Text style={{fontSize:14,fontFamily:'SourceSansPro-Regular',color:'#000000'}}>*A transaction may take longer than described above if requested outside of business hours. If you experience a delay of more than 5 days, contact us.</Text>
                <Text style={{fontSize:14,fontFamily:'SourceSansPro-Regular',color:'#000000'}}>**Total amount may be subject to fees charged by banks or third-party providers.</Text>
               </View>

                

            </View>
          </View>
       </Modal>
                    </Portal>
                    </Provider>
                }
         </View>
               </ScrollView>
            <Footer2 />
        </View>
    )
}


export default Dashsupport