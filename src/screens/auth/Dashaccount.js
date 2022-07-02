import React, { useEffect,useRef, useState } from 'react';
import { Text, View,Image,TextInput, ImageBackground,FlatList,Picker,StatusBar,Dimensions,ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard,ProgressBarAndroid} from 'react-native';
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
import Footer2 from '../../screens/auth/Footer2';
import SellHeader from '../../screens/auth/Sellheader';

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


const Dashaccount = (props) => {

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
    

     const openpopup = () => {
        setVisible(true)

        };
    const closepopup = () => {
             setVisible(false)
          }

     
      

    const containerStyle = {backgroundColor: 'red', padding: '7%',marginHorizontal:'5%',alignItems:'center',};

      
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
     

     
    

 

     const renderItem3 = ({ item,index }) => {
   return(
           <View>

            <TouchableOpacity onPress={() => openpopup() } style={styles.seledataViewTODAYaccount}>
                     
                       <Text style={styles.seriestexttoday}>{item.text}</Text>
                      
                       <Text style={styles.seriestexttoday}>{item.text1}</Text>
                       <Text style={styles.seriestexttoday}>{item.text2}</Text>
                   </TouchableOpacity>
            
            </View>
    );
    }

    

    return (
         <View style={{flex:1}}>
         

       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} > 
          
               <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'4%',marginTop:'5%'}}>
                 <Text style={{fontSize:26,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>My Account</Text>
               </TouchableOpacity>

               <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'4%',marginTop:'5%'}}>
                 <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Account Balance</Text>
               </TouchableOpacity>

               <TouchableOpacity style={{marginHorizontal:'4%',marginTop:'2%'}}>
                 <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Regular',color:'#1a1a1a'}}>Monitor your current account balance.</Text>
               </TouchableOpacity>

              <View style={{width:deviceWidth/1.1,backgroundColor:'#ffffff',padding:'5%',alignSelf:'center',marginTop:'7%',borderRadius:15,}}>
                <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Regular',color:'#666666'}}>Account Balance</Text>
                
               <Text style={{fontSize:32,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a',marginTop:'2%'}}>US$0</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("Dashwith")} style={{backgroundColor:'#b80000',width:160,borderRadius:25,padding:8,marginTop:'6%'}}>
                      <Text style={styles.totalincometodayPLAN}>WIDTHDRAW MONEY</Text> 
                   </TouchableOpacity> 
                 
              </View>

              <TouchableOpacity onPress={() => props.navigation.navigate("Dashsetting")} style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'4%',marginTop:'5%'}}>
                 <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Bank Balance</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={() => props.navigation.navigate("Dashsupport")} style={{marginHorizontal:'4%',marginTop:'2%'}}>
                 <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Regular',color:'#1a1a1a'}}>Edit your associated bank account for withdrawals.</Text>
               </TouchableOpacity>

                
               <View style={{width:deviceWidth/1.1,backgroundColor:'#ffffff',padding:'5%',alignSelf:'center',marginTop:'7%',borderRadius:15,}}>

                   <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:'3%'}}>
                    <TouchableOpacity style={{backgroundColor:'#d0e3fb',height:35,borderRadius:10,padding:10,}}>
                          <Text style={styles.totalincometodayWIDRO1}>DEFAULT BANK ACCOUNT</Text> 
                       </TouchableOpacity>
                     <View style={{flexDirection:'row'}}>  
                       <TouchableOpacity style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,padding:8}}>
                      <Image source={ImageIcons.edittoday}  style={{height:12,width:12,marginTop:5,alignSelf:'center'}} />
                    </TouchableOpacity>
                     <View style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,marginLeft:'4%',padding:8,}}>
                      <Image source={ImageIcons.deletetoday}  style={{height:12,width:12,marginTop:5,alignSelf:'center'}} />
                    </View>
                    </View>
                   </View> 
                
                <TouchableOpacity onPress={() => props.navigation.navigate("Dashlive")}>
                <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a',marginTop:'3%'}}>Account Details</Text>
                </TouchableOpacity>

               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#666666'}}>Account Holder</Text>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a'}}>Mary Davis</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',color:'#666666'}}>Bank Name</Text>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a'}}>CRDB Bank</Text>
               </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',color:'#666666'}}>Order Status</Text>
                   <View style={[styles.pickerViewshorttodayagainsmall,{padding:4}]}>
                         <Text style={{fontSize:12,color: '#E25424',fontFamily:'hinted-AvertaStd-Regular',textAlign:'center'}}>PENDING</Text> 
                        </View>
               </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',color:'#666666'}}>Date</Text>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a'}}>13 - 05 - 2022</Text>
               </View>
                 
              </View>


               <View style={{backgroundColor:'#b80000',width:320,borderRadius:30,padding:'5%',alignSelf:'center',marginTop:'8%'}}>
                      <Text style={styles.totalincometodaycompaign}>ADD AN ACCOUNT</Text> 
                   </View>


                <View style={{backgroundColor:'#ffffff',marginBottom:'25%',padding:'4%',width:'92%',borderRadius:15,marginHorizontal:'3%',marginVertical:'8%'}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:'2%',}}>
                   <TouchableOpacity  onPress={() => props.navigation.navigate("Dashreturn")} >
                    <Text style={styles.totalincometodaysale}>Withdrawals</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => props.navigation.navigate("Dashaccountlist")} style={{backgroundColor:'#B80000',width:90,borderRadius:15,padding:6,}}>
                      <Text style={styles.totalincometodayWIDRO}>SEE ALL</Text> 
                   </TouchableOpacity> 
                  </View> 
                   <View style={styles.salesViewTODAY}>
                       <Text style={styles.seriestext}>Date</Text>
                       <Text style={styles.seriestext}>Account</Text>
                       <Text style={styles.seriestext}>Amount </Text>
                   </View>
                <View style={{marginLeft:-10}}>
                    <FlatList
                    data={DATA3}
                    renderItem={renderItem3}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                    />
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
                     <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Transaction Details</Text>
                       
                       
                     <TouchableOpacity onPress={() => closepopup() } style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,marginLeft:'4%',padding:8,}}>
                      <Image source={ImageIcons.closetoday}  style={{height:12,width:12,marginTop:5,alignSelf:'center'}} />
                    </TouchableOpacity>
                    
                   </View> 

                <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a',marginTop:'3%'}}>Transaction Information</Text>
                
               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#666666'}}>Transaction ID</Text>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a'}}>264554855</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#666666'}}>Receiving Account</Text>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a',width:140}}>CRDB Bank Limited (8391)</Text>
               </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#666666'}}>Transfer Amount</Text>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a'}}>$0*</Text>
               </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#666666'}}>Transfer Fee</Text>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a'}}>$0</Text>
               </View>
                 
              </View>

             
             <View style={{borderBottomWidth:2,borderColor:'#e6e6e6',width:'90%',alignSelf:'center',marginVertical:'5%'}}></View>
               
                <View style={{width:deviceWidth/1.15,backgroundColor:'#ffffff',padding:'5%',alignSelf:'center',borderRadius:15,}}> 
              <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a',marginTop:'3%'}}>Transaction Timeline</Text>
                
               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#666666'}}>Approved</Text>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a'}}>25 - 01 - 22</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#666666'}}>Sent to Bank</Text>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a'}}>25 - 01 - 22</Text>
               </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#666666'}}>Estimated deposit date**</Text>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a'}}>25 - 01 - 22</Text>
               </View>
              </View>
                
               <View style={{marginHorizontal:'4%',marginTop:'2%',marginBottom:'8%'}}>
                <Text style={{fontSize:14,fontFamily:'hinted-AvertaStd-Regular',color:'#000000'}}>*A transaction may take longer than described above if requested outside of business hours. If you experience a delay of more than 5 days, contact us.</Text>
                <Text style={{fontSize:14,fontFamily:'hinted-AvertaStd-Regular',color:'#000000'}}>**Total amount may be subject to fees charged by banks or third-party providers.</Text>
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


export default Dashaccount



