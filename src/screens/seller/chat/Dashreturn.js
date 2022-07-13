import React, { useEffect,useRef, useState } from 'react';
import { Text, View,Image,TextInput, ImageBackground,FlatList,Picker,StatusBar,Dimensions,ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../../screens/auth/styles';
import newstyles from '../../../screens/auth/styles';
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
import Footer2 from '../../../screens/auth/Footer2';

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


const Dashreturn = (props) => {

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
   
    // Local states
    const [showclassName, setshowclassName] = useState("#B80000");
    
    return (
         <View style={{flex:1}}>
         

       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} > 
          
            
               <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%',marginVertical:'7%'}}>
                
                <TouchableOpacity onPress={() => props.navigation.navigate("Dashorder")} >
                     <View style={{backgroundColor:'#B80000',width:130,borderRadius:20,padding:10,}}>
                          <Text style={styles.totalincometodayWIDRO}>VIEW ORDER</Text> 
                       </View>
                </TouchableOpacity>
               </View>
            



              <View style={{width:deviceWidth/1.1,backgroundColor:'#ffffff',padding:'5%',alignSelf:'center',marginTop:'7%',borderRadius:15,}}>
                <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a'}}>Buyer Details</Text>
                
               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#666666'}}>Name</Text>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a'}}>Mary Davis</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',color:'#666666'}}>Order No</Text>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a'}}>GSHM8U00S0004KH</Text>
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


              <View style={{backgroundColor:'#FFFFFF',width:deviceWidth/1.1,marginVertical:'10%',borderRadius:15,alignSelf:'center',padding:'5%',marginBottom:'25%'}}>
                
                <View>
                <View style={{backgroundColor:'#AFFFE2',padding:8,width:'98%',borderRadius:10,alignSelf:'flex-end'}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',color:'#1a1a1a',}}>Hey! Just wanted to ask when my order will be processed?</Text>
                </View>
                 <Text style={{fontSize:14,fontFamily:'hinted-AvertaStd-Regular',color:'#666666',marginHorizontal:'3%',marginTop:2}}>Today, 12:30PM</Text>
                </View>

                 <View style={{marginVertical:'8%'}}>
                  <View style={{backgroundColor:'#B80000',padding:8,width:'98%',borderRadius:10,alignSelf:'flex-end',}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',color:'#FFFFFF',}}>Hello! Thanks for your enquiry. Orders are processed in 3 business days.</Text>
                  </View>
                   <Text style={{fontSize:14,fontFamily:'hinted-AvertaStd-Regular',color:'#666666',marginTop:2,alignSelf:'flex-end',right:4}}>Today, 12:30PM</Text>
                 </View>

                 <View style={{marginHorizontal:'3%'}}>
                  <View style={{backgroundColor:'#AFFFE2',padding:15,width:'45%',borderRadius:10,}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',color:'#1a1a1a',}}>Okay thanks!</Text>
                  </View>
                   <Text style={{fontSize:14,fontFamily:'hinted-AvertaStd-Regular',color:'#666666',marginTop:2,}}>Today, 12:30PM</Text>
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
               </ScrollView>
            <Footer2 />
        </View>  
    )
}


export default Dashreturn