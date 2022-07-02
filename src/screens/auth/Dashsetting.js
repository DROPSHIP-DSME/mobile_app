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


const Dashsetting = (props) => {

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

    const deleetaccount = () => {
        return Alert.alert(
          "Are your sure?",
          "Are you sure you want to delete this account?",
          [
            // The "Yes" button
            {
              text: "Yes",
              onPress: () => {
                props.navigation.navigate("Login")
              },
            },
            // The "No" button
            // Does nothing but dismiss the dialog when tapped
            {
              text: "No",
            },
          ]
        );  
    }
          
  

    return (
         <View style={{flex:1}}>
       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} > 
          
               <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%',marginVertical:'5%'}}>
                 <Text style={{fontSize:26,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Settings</Text>
               </View>

             

              <View style={{width:deviceWidth/1.1,backgroundColor:'#ffffff',padding:'3%',alignSelf:'center',marginTop:'5%',borderRadius:15,}}>

                   <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:'3%'}}>
                     <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Brand Profile</Text>
                       
                       
                     <TouchableOpacity onPress={() => props.navigation.navigate("Dashbrand")}  style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,marginLeft:'4%',padding:8,}}>
                      <Image source={ImageIcons.edittoday}  style={{height:12,width:12,marginTop:5,alignSelf:'center'}} />
                    </TouchableOpacity>
                    
                   </View> 

                
                
               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#666666'}}>Brand Photo</Text>
                   <Image source={ImageIcons.colortodayshoe} style={{width:33,height:34,}}/>
               </View>

                <View style={{borderBottomWidth:2,borderColor:'#e6e6e6',width:'100%',alignSelf:'center',marginVertical:'4%'}}></View>

               <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#666666'}}>Brand Name</Text>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',color:'#1a1a1a'}}>Sneakers Store</Text>
               </View>

               <View style={{borderBottomWidth:2,borderColor:'#e6e6e6',width:'100%',alignSelf:'center',marginVertical:'4%'}}></View>

                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#666666'}}>Category</Text>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',color:'#1a1a1a'}}>Shoes</Text>
               </View>

               <View style={{borderBottomWidth:2,borderColor:'#e6e6e6',width:'100%',alignSelf:'center',marginVertical:'4%'}}></View>

                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#666666'}}>Description</Text>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',color:'#1a1a1a',width:200}}>Lorem ipsum dolor sit today amet,consectetur adipiscing elit.Pulvinar dictum quisque id sit ut.</Text>
               </View>
                 
              </View>
              <View style={{width:deviceWidth/1.1,backgroundColor:'#ffffff',padding:'3%',alignSelf:'center',marginTop:'12%',borderRadius:15,marginBottom:'25%'}}>

                   <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:'3%'}}>
                     <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Account Settings</Text>
                   </View> 
               <TouchableOpacity  onPress={() => props.navigation.navigate("Dashimport")} style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#666666'}}>Import Data</Text>
                   <Image source={ImageIcons.blackrighttoday} style={{width:11,height:11,marginTop:5}}/>
               </TouchableOpacity>

                <View style={{borderBottomWidth:2,borderColor:'#e6e6e6',width:'100%',alignSelf:'center',marginVertical:'4%'}}></View>

               <TouchableOpacity  onPress={() => props.navigation.navigate("Dashsupport")} style={{flexDirection:'row',justifyContent:'space-between',}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#666666'}}>Customer Support</Text>
                  <Image source={ImageIcons.blackrighttoday} style={{width:11,height:11,marginTop:5}}/>
               </TouchableOpacity>

               <View style={{borderBottomWidth:2,borderColor:'#e6e6e6',width:'100%',alignSelf:'center',marginVertical:'4%'}}></View>
               <TouchableOpacity  onPress={() => deleetaccount() } >
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:'5%'}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#666666'}}>Delete Account</Text>
                 <Image source={ImageIcons.blackrighttoday} style={{width:11,height:11,marginTop:5}}/>
               </View>
               </TouchableOpacity>
              </View>
               </ScrollView>
            <Footer2 />
        </View>    
    )
}


export default Dashsetting