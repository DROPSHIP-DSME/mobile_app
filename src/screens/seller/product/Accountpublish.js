import React, { useEffect,useRef, useState } from 'react';
import { Text, View,Image,TextInput, ImageBackground,FlatList,Picker,StatusBar,Dimensions,ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../../screens/common/styles';
import newstyles from '../../../screens/common/styles';
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

import AsyncStorage from '@react-native-community/async-storage'; 
import { useFocusEffect } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Provider , Portal,} from 'react-native-paper';
import Modal from 'react-native-modal'
import Footer3 from '../../../screens/common/Footer3';
import Help from '../../../components/help/Help';


import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const Accountpublish = (props) => {

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

    const helpbuttonsubmit = async (textval) => {
        if(textval!=''){
            let request = {
                "userId": props?.loginuserid,
                "message": textval,
                "msgDate": new Date()
            }
            props.support(request, props.navigation, "vendor");
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
   

    // Local states
    const [text1, onChangeText3] = React.useState("");
    const [showclassName, setshowclassName] = useState("#B80000");


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
         <StatusBar backgroundColor={'#ffffff00'} barStyle="dark-content" translucent={true} />
            

       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} >

     <View style={{flexDirection:"row",marginHorizontal:"4%",marginTop:"12%"}}>
              <Text style={{fontSize:15,fontFamily:"hinted-AvertaStd-Regular",color:"#999999"}}>MY STORES /</Text>
              <Text style={{fontSize:15,fontFamily:"hinted-AvertaStd-Regular",color:"#999999"}}> MANAGE BRANDS /</Text>
              <Text style={{fontSize:15,fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}> CREATE A BRAND</Text>
              </View> 
          
               <View style={{marginTop:'5%',}}>
                <Text style={{fontSize:26,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Bold',textAlign:'center'}}>Your Store is Ready to Be Published!</Text>
               </View>
               <Text style={styles.storecamtexttodayy12}>Congrats! You’re almost there. Preview your store before publishing to confirm the details or go live immediately. </Text>

              <View style={{width:deviceWidth/1.1,backgroundColor:'#ffffff',padding:'5%',marginTop:'2%',borderRadius:15,marginHorizontal:'4%',alignSelf:'center'}}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Accountbrandlist")}>
                <Image source={ImageIcons.colortodayshoe} style={{width:85,height:85,borderRadius:30,alignSelf:'center'}}/>
                </TouchableOpacity>
                  <Text style={{fontSize:20,fontFamily:'hinted-AvertaStd-Semibold',textAlign:'center'}}>Sneakers Store</Text>

                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',textAlign:'center',color:'#2F80ED',marginVertical:5}}>store.dropship.com</Text>
                 
               <View style={{alignSelf:'center'}}>
               <Text style={styles.storecamtexttodayy12}>Congrats! You’re almost there. Preview your store before publishing to confirm the details or go live immediately. </Text>
                </View> 
                 <View style={{backgroundColor:'#b80000',width:100,borderRadius:25,padding:8,alignSelf:'center',marginVertical:'8%'}}>
                      <Text style={styles.totalincometodayPLAN}>PREVIEW</Text> 
                   </View>
              </View>

              <View style={{backgroundColor:'#b80000',width:deviceWidth/1.1,borderRadius:30,padding:'5%',alignSelf:'center',marginTop:'8%'}}>
                      <Text style={styles.totalincometodaycompaign}>PUBLISH</Text> 
                   </View>
              <View style={{backgroundColor:'#4AFFBD',marginBottom:'30%',width:deviceWidth/1.1,borderRadius:30,padding:'5%',alignSelf:'center',marginTop:'8%'}}>
                      <Text style={[styles.totalincometodaycompaign,{color:'#1a1a1a'}]}>PUBLISH & GO LIVE</Text> 
                   </View>     

              
                 
               </ScrollView>
             
             <Help onPress={(text1) => helpbuttonsubmit(text1)} />


               <Footer3 onSelection="5"/>
        </View>
    )
}


export default Accountpublish