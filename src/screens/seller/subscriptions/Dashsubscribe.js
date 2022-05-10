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


const Dashsubscribe = (props) => {

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
        text:"GSHM8U00S0004KH ",
        text1:"Amy White ",
        text2:"amywhite@yahoo.com ",
       },
       {
        image:ImageIcons.girlcent,
        text:"GSHM8U00S0004KH ",
        text1:"Amy White ",
        text2:"amywhite@yahoo.com ",
       },
       {
        image:ImageIcons.girlcent,
        text:"GSHM8U00S0004KH ",
        text1:"Amy White ",
        text2:"amywhite@yahoo.com ",
       },
       {
        image:ImageIcons.girlcent,
        text:"GSHM8U00S0004KH ",
        text1:"Amy White ",
        text2:"amywhite@yahoo.com ",
       },
       {
        image:ImageIcons.girlcent,
        text:"GSHM8U00S0004KH ",
        text1:"Amy White ",
        text2:"amywhite@yahoo.com ",
       },
        {
        image:ImageIcons.girlcent,
        text:"GSHM8U00S0004KH ",
        text1:"Amy White ",
        text2:"amywhite@yahoo.com ",
       },
        {
        image:ImageIcons.girlcent,
        text:"GSHM8U00S0004KH ",
        text1:"Amy White ",
        text2:"amywhite@yahoo.com ",
       },
        {
        image:ImageIcons.girlcent,    
        text:"GSHM8U00S0004KH ",
        text1:"Amy White ",
        text2:"amywhite@yahoo.com ",
       },
        {
        image:ImageIcons.girlcent,
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

            <View style={styles.seledataViewTODAY}>
                     <View style={{flexDirection:'row'}}>
                       <Image source={item.image} style={{width:18,height:18,}}/>
                       <Text style={styles.seriestexttoday}>{item.text}</Text>
                     </View>  
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
          
               <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%',marginTop:'5%'}}>
                 <Text style={{fontSize:26,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold',}}>Subscriptions</Text>
               </View>

               <View style={{marginHorizontal:'4%',marginTop:'2%'}}>
                 <Text style={{fontSize:18,fontFamily:'SourceSansPro-Regular'}}>Dropship gives you the option of increase the value of your livestreaming exprience through additional marketing features. Select the plan that best suits your goals.</Text>
               </View>

              <View style={{width:deviceWidth/1.1,backgroundColor:'#ffffff',padding:'5%',alignSelf:'center',marginTop:'8%',borderRadius:15}}>
                <Text style={{fontSize:20,fontFamily:'SourceSansPro-SemiBold',textAlign:'center',}}>Basic</Text>
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                  <Text style={{fontSize:32,fontFamily:'SourceSansPro-Bold',}}>$9.00</Text>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',marginTop:'4%',color:'#666666'}}>/month</Text>
                </View>

                <View style={{flexDirection:'row',alignSelf:'center',marginTop:'2%'}}>
                   <Image source={ImageIcons.righttoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',marginLeft:6}}>Livestream Duration</Text>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',}}>- 10mins</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:'18%',marginTop:'2%'}}>
                   <Image source={ImageIcons.wrongtoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',marginLeft:6}}>No SMS</Text>
                </View>

                 <View style={{backgroundColor:'#B80000',width:140,borderRadius:25,padding:15,alignSelf:'center',marginTop:'6%'}}>
                      <Text style={styles.totalincometodayPLAN}>SELECT PLAN</Text> 
                   </View>
              </View>


               <View style={{width:deviceWidth/1.1,backgroundColor:'#ffffff',padding:'5%',alignSelf:'center',marginTop:'8%',borderRadius:15}}>
                <Text style={{fontSize:20,fontFamily:'SourceSansPro-SemiBold',textAlign:'center',}}>Standard</Text>
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                  <Text style={{fontSize:32,fontFamily:'SourceSansPro-Bold',}}>$35.00</Text>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',marginTop:'4%',color:'#666666'}}>/month</Text>
                </View>

                <View style={{flexDirection:'row',alignSelf:'center',marginTop:'2%'}}>
                   <Image source={ImageIcons.righttoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',marginLeft:6}}>Livestream Duration</Text>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',}}>- 25mins</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:'18%',marginTop:'2%'}}>
                   <Image source={ImageIcons.wrongtoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',marginLeft:6}}>No SMS</Text>
                </View>

                 <View style={{backgroundColor:'#B80000',width:140,borderRadius:25,padding:15,alignSelf:'center',marginTop:'6%'}}>
                      <Text style={styles.totalincometodayPLAN}>SELECT PLAN</Text> 
                   </View>
              </View>

             
  
                <View style={{width:deviceWidth/1.1,backgroundColor:'#B80000',padding:'5%',alignSelf:'center',marginTop:'8%',borderRadius:15}}>
                <Text style={{fontSize:20,fontFamily:'SourceSansPro-SemiBold',textAlign:'center',color:'#FFFFFF'}}>Pro</Text>
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                  <Text style={{fontSize:32,fontFamily:'SourceSansPro-Bold',color:'#FFFFFF'}}>$35.00</Text>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',marginTop:'4%',color:'#ffffff'}}>/month</Text>
                </View>

                <View style={{flexDirection:'row',alignSelf:'center',marginTop:'2%'}}>
                   <Image source={ImageIcons.whiterighttoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',marginLeft:6,color:'#FFFFFF'}}>Livestream Duration</Text>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#FFFFFF'}}>- 25mins</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:'14%',marginTop:'2%'}}>
                   <Image source={ImageIcons.whiterighttoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',marginLeft:6,color:'#FFFFFF'}}>2500 SMS</Text>
                </View>
                 <View style={{flexDirection:'row',marginLeft:'14%',marginTop:'2%'}}>
                   <Image source={ImageIcons.whiterighttoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',marginLeft:6,color:'#FFFFFF'}}>Product Photoshoot</Text>
                </View>

                 <TouchableOpacity onPress={() => props.navigation.navigate("Dashsubscribe2")}  style={{backgroundColor:'#4AFFBD',width:140,borderRadius:25,padding:15,alignSelf:'center',marginTop:'6%'}}>
                      <Text style={styles.totalincometodayPLAN}>SELECT PLAN</Text> 
                   </TouchableOpacity>
              </View>



               <View style={{width:deviceWidth/1.1,backgroundColor:'#ffffff',padding:'5%',alignSelf:'center',marginTop:'8%',borderRadius:15,marginBottom:'25%'}}>
                <Text style={{fontSize:20,fontFamily:'SourceSansPro-SemiBold',textAlign:'center',}}>Enterprise</Text>
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                  <Text style={{fontSize:32,fontFamily:'SourceSansPro-Bold',}}>$35.00</Text>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',marginTop:'4%',color:'#666666'}}>/month</Text>
                </View>

                <View style={{flexDirection:'row',alignSelf:'center',marginTop:'2%'}}>
                   <Image source={ImageIcons.righttoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',marginLeft:6}}>Livestream Duration</Text>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',}}>- 25mins</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:'14%',marginTop:'2%'}}>
                   <Image source={ImageIcons.righttoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',marginLeft:6}}>5000 SMS</Text>
                </View>
                 <View style={{flexDirection:'row',marginLeft:'14%',marginTop:'2%'}}>
                   <Image source={ImageIcons.righttoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',marginLeft:6}}>Product Photoshoot and Short Videos</Text>
                </View>
                 <View style={{flexDirection:'row',marginLeft:'14%',marginTop:'2%'}}>
                   <Image source={ImageIcons.righttoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',marginLeft:6}}>Manage Brand Livestreams</Text>
                </View>

                 <View style={{backgroundColor:'#B80000',width:'70%',borderRadius:25,padding:15,alignSelf:'center',marginTop:'6%'}}>
                      <Text style={styles.totalincometodayPLAN}>CONTACT DROPSHIP</Text> 
                   </View>
              </View>

  
              
                  
 


       
        
               </ScrollView>
            
            <Footer2 /> 
             </View>


                
        
    )
}


export default Dashsubscribe