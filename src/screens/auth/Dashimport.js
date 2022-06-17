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


const Dashimport = (props) => {

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
    const [visible, setVisible] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const [showclassName, setshowclassName] = useState("#B80000");

    const openpopup = () => {
        setVisible(true)
    }

    const closepopup = () => {
        setVisible(false)
    }


    return (
         <View style={{flex:1}}>
         <StatusBar backgroundColor={'#B80000'} barStyle="dark-content" translucent={true} />
            <SellHeader />

       <ScrollView onScroll={({nativeEvent}) => { handleScroll(nativeEvent['contentOffset'].y); }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} > 
          
                   <TouchableOpacity onPress={() => props.navigation.navigate("Dashwith")} style={{flexDirection:'row',marginHorizontal:'4%',marginTop:'7%'}}>
                    <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Regular',color:'#666666'}}>SETTINGS /</Text>
                    <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a'}}>Import Data </Text>
                   </TouchableOpacity>

                   <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'4%',marginTop:'8%'}}>
                   <Text style={{fontSize:26,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Import Data</Text>
                   </View>

                   <View style={{marginHorizontal:'4%',marginTop:'2%'}}>
                     <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Regular',color:'#1a1a1a'}}>Import product data from other platforms.</Text>
                   </View>

                  
                 <View style={{width:deviceWidth/1.1,padding:'5%',backgroundColor:'#ffffff',borderRadius:20,flexDirection:'row',alignSelf:'center',justifyContent:'center',elevation:4,marginVertical:'6%'}}>
                   <Image source={ImageIcons.easytoday} style={{width:33,height:15,marginTop:2}}/>
                   <Text style={{fontSize:14,fontFamily:'hinted-AvertaStd-Bold',color:'#1a1a1a',marginLeft:'2%'}}>CONNECT WITH ETSY</Text>
                 </View>

                 <View style={{width:deviceWidth/1.1,padding:'4%',backgroundColor:'#ffffff',borderRadius:20,flexDirection:'row',alignSelf:'center',justifyContent:'center',elevation:4,}}>
                   <Image source={ImageIcons.shoptoday} style={{width:20,height:22,marginTop:2}}/>
                   <Text style={{fontSize:14,fontFamily:'hinted-AvertaStd-Bold',color:'#1a1a1a',marginLeft:'2%',alignSelf:'center'}}>CONNECT WITH SHOPIFY</Text>
                 </View>

                 <View style={{width:deviceWidth/1.1,padding:'4%',backgroundColor:'#ffffff',borderRadius:20,flexDirection:'row',alignSelf:'center',justifyContent:'center',elevation:4,marginVertical:'6%'}}>
                   <Image source={ImageIcons.commercetoday} style={{width:22,height:22,marginTop:2}}/>
                   <Text style={{fontSize:14,fontFamily:'hinted-AvertaStd-Bold',color:'#1a1a1a',marginLeft:'2%',alignSelf:'center'}}>CONNECT WITH BIG COMMERCE</Text>
                 </View>

                 <View style={{width:deviceWidth/1.1,padding:'4%',backgroundColor:'#ffffff',borderRadius:20,flexDirection:'row',alignSelf:'center',justifyContent:'center',elevation:4,marginVertical:'1%'}}>
                   <Image source={ImageIcons.wootoday} style={{width:39,height:23,marginTop:2}}/>
                   <Text style={{fontSize:14,fontFamily:'hinted-AvertaStd-Bold',color:'#1a1a1a',marginLeft:'2%',alignSelf:'center'}}>CONNECT WITH WOOCOMMERCE</Text>
                 </View>
               </ScrollView>
           <Footer2 />
        </View>   
    )
}
export default Dashimport