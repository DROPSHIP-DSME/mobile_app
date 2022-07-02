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
    const userId = props?.route?.params?.userId;
    const brandId = props?.route?.params?.brandId;
    
    useEffect(() => {
      props.getincomingtlist(props?.loginuserid);
      props.getselldeshboard(props?.loginuserid);
      props.gettopsell(props?.loginuserid,3);
      props.liveeventdetail(props?.loginuserid);
    }, [])

    useEffect(() => {
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
          
               <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%',marginTop:'5%'}}>
                 <Text style={{fontSize:26,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Subscriptions</Text>
               </View>

               <View style={{marginHorizontal:'4%',marginTop:'2%'}}>
                 <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Regular'}}>Dropship gives you the option of increase the value of your livestreaming exprience through additional marketing features. Select the plan that best suits your goals.</Text>
               </View>

              <View style={{width:deviceWidth/1.1,backgroundColor:'#ffffff',padding:'5%',alignSelf:'center',marginTop:'8%',borderRadius:15}}>
                <Text style={{fontSize:20,fontFamily:'hinted-AvertaStd-Semibold',textAlign:'center',}}>Basic</Text>
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                  <Text style={{fontSize:32,fontFamily:'hinted-AvertaStd-Bold',}}>$0</Text>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',marginTop:'4%',color:'#666666'}}>/month</Text>
                </View>

                <View style={{flexDirection:'row',alignSelf:'center',marginTop:'2%'}}>
                   <Image source={ImageIcons.righttoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',marginLeft:6}}>Livestream Duration</Text>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',}}>- 10mins</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:'18%',marginTop:'2%'}}>
                   <Image source={ImageIcons.wrongtoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',marginLeft:6}}>No SMS</Text>
                </View>

                 <View style={{backgroundColor:'#B80000',width:140,borderRadius:25,padding:15,alignSelf:'center',marginTop:'6%'}}>
                      <Text style={styles.totalincometodayPLAN}>SELECT PLAN</Text> 
                   </View>
              </View>


               <View style={{width:deviceWidth/1.1,backgroundColor:'#ffffff',padding:'5%',alignSelf:'center',marginTop:'8%',borderRadius:15}}>
                <Text style={{fontSize:20,fontFamily:'hinted-AvertaStd-Semibold',textAlign:'center',}}>Standard</Text>
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                  <Text style={{fontSize:32,fontFamily:'hinted-AvertaStd-Bold',}}>$0</Text>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',marginTop:'4%',color:'#666666'}}>/month</Text>
                </View>

                <View style={{flexDirection:'row',alignSelf:'center',marginTop:'2%'}}>
                   <Image source={ImageIcons.righttoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',marginLeft:6}}>Livestream Duration</Text>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',}}>- 25mins</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:'18%',marginTop:'2%'}}>
                   <Image source={ImageIcons.wrongtoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',marginLeft:6}}>No SMS</Text>
                </View>

                 <View style={{backgroundColor:'#B80000',width:140,borderRadius:25,padding:15,alignSelf:'center',marginTop:'6%'}}>
                      <Text style={styles.totalincometodayPLAN}>SELECT PLAN</Text> 
                   </View>
              </View>

             
  
                <View style={{width:deviceWidth/1.1,backgroundColor:'#B80000',padding:'5%',alignSelf:'center',marginTop:'8%',borderRadius:15}}>
                <Text style={{fontSize:20,fontFamily:'hinted-AvertaStd-Semibold',textAlign:'center',color:'#FFFFFF'}}>Pro</Text>
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                  <Text style={{fontSize:32,fontFamily:'hinted-AvertaStd-Bold',color:'#FFFFFF'}}>$0</Text>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',marginTop:'4%',color:'#ffffff'}}>/month</Text>
                </View>

                <View style={{flexDirection:'row',alignSelf:'center',marginTop:'2%'}}>
                   <Image source={ImageIcons.whiterighttoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',marginLeft:6,color:'#FFFFFF'}}>Livestream Duration</Text>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#FFFFFF'}}>- 25mins</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:'14%',marginTop:'2%'}}>
                   <Image source={ImageIcons.whiterighttoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',marginLeft:6,color:'#FFFFFF'}}>0 SMS</Text>
                </View>
                 <View style={{flexDirection:'row',marginLeft:'14%',marginTop:'2%'}}>
                   <Image source={ImageIcons.whiterighttoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',marginLeft:6,color:'#FFFFFF'}}>Product Photoshoot</Text>
                </View>

                 <TouchableOpacity onPress={() => props.navigation.navigate("Dashsubscribe2")}  style={{backgroundColor:'#4AFFBD',width:140,borderRadius:25,padding:15,alignSelf:'center',marginTop:'6%'}}>
                      <Text style={styles.totalincometodayPLAN}>SELECT PLAN</Text> 
                   </TouchableOpacity>
              </View>



               <View style={{width:deviceWidth/1.1,backgroundColor:'#ffffff',padding:'5%',alignSelf:'center',marginTop:'8%',borderRadius:15,marginBottom:'25%'}}>
                <Text style={{fontSize:20,fontFamily:'hinted-AvertaStd-Semibold',textAlign:'center',}}>Enterprise</Text>
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                  <Text style={{fontSize:32,fontFamily:'hinted-AvertaStd-Bold',}}>$0</Text>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',marginTop:'4%',color:'#666666'}}>/month</Text>
                </View>

                <View style={{flexDirection:'row',alignSelf:'center',marginTop:'2%'}}>
                   <Image source={ImageIcons.righttoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',marginLeft:6}}>Livestream Duration</Text>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',}}>- 25mins</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:'14%',marginTop:'2%'}}>
                   <Image source={ImageIcons.righttoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',marginLeft:6}}>0 SMS</Text>
                </View>
                 <View style={{flexDirection:'row',marginLeft:'14%',marginTop:'2%'}}>
                   <Image source={ImageIcons.righttoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',marginLeft:6}}>Product Photoshoot and Short Videos</Text>
                </View>
                 <View style={{flexDirection:'row',marginLeft:'14%',marginTop:'2%'}}>
                   <Image source={ImageIcons.righttoday} style={{width:11,height:11,marginTop:6}}/>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',marginLeft:6}}>Manage Brand Livestreams</Text>
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