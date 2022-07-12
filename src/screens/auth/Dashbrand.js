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
import Sortorder from '../../components/pickers/Sortorder';
const options = [ { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' },{ label: '5', value: '5' },{ label: '6', value: '6' },{ label: '7', value: '7' },{ label: '8', value: '8' },{ label: '9', value: '9' } ]

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const Dashbrand = (props) => {

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
    const [visible, setVisible] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState("1");
    const [showclassName, setshowclassName] = useState("#B80000");

    const updateorderStatus = (itemValue) => {
    setSelectedValue(itemValue)
  }
  
    const openpopup = () => {
        setVisible(true)

        };
    const closepopup = () => {
             setVisible(false)
          }

    

    const containerStyle = {backgroundColor: 'red', padding: '7%',marginHorizontal:'5%',alignItems:'center',};

    
    return (
         <View style={{flex:1}}>
        

       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} > 
          
               <TouchableOpacity onPress={() => props.navigation.navigate("Dashwith")} style={{flexDirection:'row',marginHorizontal:'4%',marginTop:'7%'}}>
                <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Regular',color:'#666666'}}>SETTINGS /</Text>
                <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a'}}>BRAND PROFILE </Text>
               </TouchableOpacity>

               <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'4%',marginTop:'5%'}}>
               <Text style={{fontSize:26,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Brand Profile</Text>
               </View>

               <View style={{marginHorizontal:'4%',marginTop:'2%'}}>
                 <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Regular',color:'#1a1a1a'}}>Edit your brand information.</Text>
               </View>

              
              <View style={{marginHorizontal:'3%',marginVertical:'5%'}}>
                <Image source={ImageIcons.colortodayshoe} style={{width:100,height:100,}}/>
              </View>
             
              <View style={styles.pickerViewshorttodaybrand}>
              <Text style={{fontSize:12,fontFamily:'hinted-AvertaStd-Regular',color:'4d4d4d',marginLeft:'3%',marginTop:'2%'}}>Brand Name</Text>
              <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Regular',color:'4d4d4d',marginLeft:'3%',marginTop:'1%'}}>Sneakers Store</Text>       
                </View> 

                 <View style={{marginHorizontal:'4%',marginVertical:'7%'}}>
                <TextInput
                  style={styles.inputedittodaywithdrawbrand}
                  placeholder="Tell us about your brand"
                  placeholderTextColor="#4d4d4d"
                  paddingLeft={15}
                  width={330}
                  multiline
                  onChangeText={(text) => {}}
                />
              </View>

              <View style={styles.pickerViewshorttodaybrand}>
              <Text style={{fontSize:12,fontFamily:'hinted-AvertaStd-Regular',color:'4d4d4d',marginLeft:'3%',marginTop:'2%'}}>Category</Text>
                      <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />

                </View>   


               <TouchableOpacity  onPress={() => props.navigation.navigate("Dashsetting")}  style={{backgroundColor:'#b80000',width:320,borderRadius:30,padding:'5%',alignSelf:'center',marginTop:'8%',marginBottom:'25%'}}>
                      <Text style={styles.totalincometodaycompaign}>ADD YOUR BRAND</Text> 
                   </TouchableOpacity>
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


export default Dashbrand