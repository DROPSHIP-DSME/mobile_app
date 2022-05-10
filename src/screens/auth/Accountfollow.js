import React, { useEffect,useRef, useState } from 'react';
import { Text, View,Image,TextInput, ImageBackground,FlatList,Picker,StatusBar,Dimensions,ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import newstyles from './styles';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import { phoneRegExp } from '../../services/helper';
import DropdownField from '../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../components/modals/Loader';
import Swipeout from 'react-native-swipeout';
import HorizontalSlider from 'react-horizontal-slider';
import Footer2 from '../../screens/common/Footer2';
import SellHeader from '../../screens/common/Sellheader';
import Shopheader from '../../screens/common/Shopheader';
import Footer3 from '../../screens/common/Footer3';

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


const Accountfollow = (props) => {

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
    const [text1, onChangeText3] = React.useState("");
    const [subMsg, onChangeText1] = React.useState("");
      const [msg, onChangeText2] = React.useState("");
    const [isModalVisible, setModalVisible] = useState(false);
     const [helppopup, sethelppopup] = React.useState(false);
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
    

    return (
         <View style={{flex:1}}>
         <StatusBar backgroundColor={'#B80000'} barStyle="dark-content" translucent={true} />
            <Shopheader />

       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} >

     <View style={{flexDirection:"row",marginHorizontal:"4%",marginTop:"9%"}}>
              <Text style={{fontSize:15,fontFamily:"SourceSansPro-Regular",color:"#999999"}}>ACCOUNT SUMMARY /</Text>
              <Text style={{fontSize:15,fontFamily:"SourceSansPro-Regular",color:"#1A1A1A"}}> FOLLOWING</Text>
              </View> 
          
               <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%',marginVertical:'5%'}}>
                 <Text style={{fontSize:26,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold',}}>Following</Text>
               </View>

              <View style={{width:deviceWidth/1.9,backgroundColor:'#ffffff',padding:'5%',marginTop:'2%',borderRadius:15,marginHorizontal:'4%'}}>
                <Image source={ImageIcons.colortodayshoe} style={{width:70,height:70,borderRadius:30,alignSelf:'center'}}/>
               
                  <Text style={{fontSize:20,fontFamily:'SourceSansPro-SemiBold',textAlign:'center'}}>Sneakers Store</Text>

                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',textAlign:'center',color:'#2F80ED',marginVertical:5}}>store.dropship.com</Text>
                 
               
                <View style={{flexDirection:'row',marginTop:'2%',alignSelf:'center'}}>
                   <Image source={ImageIcons.redcolorbag} style={{width:15,height:15,marginTop:2}}/>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',marginLeft:5}}>56 products</Text>
                </View>

                 <View style={{backgroundColor:'#4AFFBD',width:100,borderRadius:25,padding:8,alignSelf:'center',marginVertical:'8%'}}>
                      <Text style={[styles.totalincometodayPLAN,{color:'#1a1a1a'}]}>UNFOLLOW</Text> 
                   </View>
              </View>

             

              
                 
               </ScrollView>
             
             <View style={{ position:'absolute',zIndex:2001,right:20,bottom:70}}>
               <TouchableOpacity onPress={() => sethelppopup(true)}>
                    <Image source={ImageIcons.exporthelp} style={{width:50,height:50}}/>
                </TouchableOpacity>
               </View>

               { helppopup ==true &&
        <View style={{flex:1,backgroundColor:'#ffffff',margin:20,paddingVertical:10,borderRadius:10,zIndex:4001, position:'absolute',bottom:'10%'}}>
            
           
              <View style={styles.chatViewrose}>
                    
                <Text style={styles.Benrosetext}>Chat with customer support</Text>
                <TouchableOpacity style={{position:'absolute',right:15,top:5}} onPress={() => sethelppopup(false)}>
                    <Image source={ImageIcons.closepopup}  style={styles.sendmsg2} />
                </TouchableOpacity>
            </View>
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#ffffff', height:200}} >
            <View style={{marginVertical:'2%'}}>
                <FlatList
                    data={props?.getchatsupportlist1 || []}
                    renderItem={renderItem6}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                />
             </View>
           </ScrollView>
            <View style={[styles.accountmainview,{marginBottom:10, width:'100%'}]}>
            <View style={{width:'90%'}}>
                <TextInput  style={styles.chatinput}
                placeholder="Type here..."
                onChangeText={onChangeText3}
                value={text1}
                placeholderTextColor="#999999"
                />
            </View>
            <TouchableOpacity style={{position:'absolute',right:55,top:5}} onPress={() => handleSendRequestSubmit()}>
                    <Image source={ImageIcons.sendchat}  style={styles.sendmsg1} />
                </TouchableOpacity>
            </View>
        </View>
        }


            <Footer3 onSelection="5"  />
        </View>
    )
}


export default Accountfollow