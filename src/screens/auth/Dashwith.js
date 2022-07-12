import React, { useEffect,useRef, useState } from 'react';
import { Text, View,Image,TextInput, ImageBackground,FlatList,Picker,StatusBar,Dimensions,ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import newstyles from './styles';
import { Colors, CommonStrings } from '../../common';
import ImageIcons from '../../common/ImageIcons';
import { ArrowNarrowLeftIcon } from "react-native-heroicons/solid";
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import { phoneRegExp } from '../../services/helper';
import DropdownField from '../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../components/modals/Loader';
import Swipeout from 'react-native-swipeout';
import HorizontalSlider from 'react-horizontal-slider';
import Footer2 from '../../screens/auth/Footer2';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Provider , Portal,} from 'react-native-paper';
import Modal from 'react-native-modal'
import SellHeader from '../../screens/auth/Sellheader';
import tw from 'twrnc';
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


const Dashwith = (props) => {

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

    const updateorderStatus = (itemValue) => {
    setSelectedValue(itemValue)
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
    const [subMsg, onChangeText1] = React.useState("");
    const [visible, setVisible] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState("1");
    const [showclassName, setshowclassName] = useState("#B80000");
    
   const openpopup = () => {
        setVisible(true)
    }

    const closepopup = () => {
        setVisible(false)
    }


    const containerStyle = {backgroundColor: 'red', padding: '7%',marginHorizontal:'5%',alignItems:'center',};

    return (
         <View style={{flex:1}}>
         

       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} >

               <View style={tw.style('flex flex-row m-5 ml-3')}>
                    <ArrowNarrowLeftIcon style={tw.style('basis-7 mr-3')} color="red" fill="black" size={24} />
                    <Text style={tw.style('basis-auto text-base mt-1')}>
                      Return To My Account
                    </Text>

               </View>

               <TouchableOpacity onPress={() => props.navigation.navigate("Dashwith")} style={tw.style('ml-5 mt-4')}>
                 <Text style={tw.style('text-3xl mt-5 text-gray-800 font-bold font-sans')}>Withdrawals</Text>
               </TouchableOpacity>

              <View style={tw.style('mt-3 mx-6 pl-3 sm:text-sm border-gray-300 bg-gray-200 rounded-lg h-16 w-auto')}>
              <Text style={tw.style('text-sm text-gray-600 mt-2 ml-2')}>Choose a Bank Account</Text>
                      <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />

                </View>

                <View style={tw.style('mt-5 mx-6 pl-3 sm:text-sm border-gray-300 bg-gray-200 rounded-lg h-16 w-auto')}>
                  <Text style={tw.style('text-sm text-gray-600 mt-2 ml-2')}>Amount to Withdraw</Text>
                      <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />

                </View>

                 <View style={tw.style('mt-5 mx-6 pl-3 sm:text-sm border-gray-300 bg-gray-200 rounded-lg h-16 w-auto')}>
                    <Text style={tw.style('text-sm text-gray-600 mt-2 ml-2')}>Amount to Deposit*
                    <TextInput  style={tw.style('mx-5 pl-3 sm:text-sm border-gray-300 bg-gray-200 rounded-lg')}
                     placeholder="US$"
                     onChangeText={onChangeText1}
                     onSubmitEditing={() => handleRegistrationSubmit()}
                     placeholderTextColor="#999999"
                    />
                    </Text>
                 </View>

              <View style={tw.style('mt-5 mx-6 pl-3 sm:text-sm border-gray-300 bg-gray-200 rounded-lg h-56 w-auto')}>
                <TextInput
                  style={tw.style('pl-3 sm:text-sm border-gray-300 bg-gray-200 rounded-lg')}
                  placeholder="Description (optional)"
                  placeholderTextColor="#4d4d4d"
                  paddingLeft={3}
                  width={330}
                  multiline
                  onChangeText={(text) => {}}
                />
              </View>

               <View style={tw.style('mt-5 mx-6 pl-3')}>
                <Text style={{fontSize:14,fontFamily:'hinted-AvertaStd-Regular',color:'#000000'}}>*Fee: 15.00 USD</Text>
                <Text style={{fontSize:14,fontFamily:'hinted-AvertaStd-Regular',color:'#000000'}}>Withdrawals of $1,000.00 and under are subject to a minimum fee of 15.00 USD</Text>
               </View>

               <View style={tw.style('items-center')}>
                  <TouchableOpacity  onPress={() => openpopup() }  style={tw.style('items-center w-11/12 py-3 mt-5 border border-transparent font-medium rounded-full text-white bg-red-800')}>
                     <Text style={tw.style('text-lg font-bold text-white font-sans')}>ADD WITHDRAWALS</Text>
                  </TouchableOpacity>
               </View>

               <View>


        { openpopup  &&
                    <Provider>
                    <Portal>
                    <Modal visible={visible} style={{backgroundColor:'rgba(0, 0, 0, 0.8)',marginHorizontal:-20,marginVertical:-5}} onDismiss={closepopup} contentContainerStyle={containerStyle}>
          <View style={{ marginTop:90,position: 'absolute', textAlign: 'center',justifyContent: 'center',alignItems: 'center',top: 10,left: 0,right: 0 }}>
            <View style={{ width: 320, borderRadius: 10, backgroundColor:'#fff', borderColor:'#999', borderWidth:2 }}>





                 <View style={{width:deviceWidth/1.15,backgroundColor:'#ffffff',padding:'5%',alignSelf:'center',marginTop:'7%',borderRadius:15,}}>

                   <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:'3%'}}>
                     <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',width:190}}>Withdrawal to Bank Account</Text>


                     <TouchableOpacity onPress={() => closepopup() } style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,marginLeft:'4%',padding:8,}}>
                      <Image source={ImageIcons.closetoday}  style={{height:12,width:12,marginTop:5,alignSelf:'center'}} />
                    </TouchableOpacity>

                   </View>

                <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a',marginTop:'3%'}}>Withdrawal Details</Text>

               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#666666'}}>Receiving Account</Text>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a',width:140}}>CRDB Bank Limited (0)</Text>
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
                   <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                      <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#666666'}}>Amount to Deposit</Text>
                       <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a'}}>$0</Text>
                   </View>

              </View>

               <View style={{marginHorizontal:'4%',marginTop:'2%',}}>
                <Text style={{fontSize:14,fontFamily:'hinted-AvertaStd-Regular',color:'#000000',textAlign:'center'}}>Amount to deposit may be subject to fees charged by banks or third-party providers. By clicking Withdraw, you confirm the withdrawal details above.</Text>
               </View>

              <TouchableOpacity onPress={() => closepopup()} style={{backgroundColor:'#B80000',width:280,borderRadius:25,padding:15,alignSelf:'center',marginVertical:'6%'}}>
                      <Text style={styles.totalincometodaySAVECHANGE}>WITHDRAW</Text>
                   </TouchableOpacity>


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


export default Dashwith
