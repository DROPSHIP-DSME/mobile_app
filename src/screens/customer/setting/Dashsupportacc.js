import React, { useEffect,useRef, useState } from 'react';
import { Text, View,Image,TextInput, ImageBackground,FlatList,Picker,StatusBar,Dimensions,ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard,ProgressBarAndroid, Linking} from 'react-native';
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
import Footer3 from '../../../screens/common/Footer3';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Provider , Portal,} from 'react-native-paper';
import Modal from 'react-native-modal'
import moment from 'moment';
import tw from 'twrnc';
import { PhoneIcon } from "react-native-heroicons/solid";
import { MailIcon } from "react-native-heroicons/solid";
import Sendbutton from '../../../components/pickers/Sendbutton';
import Closebutton from '../../../components/pickers/Closebutton';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const Dashsupportacc = (props) => {

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
      props.getsupportlist(props?.loginuserid);
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
    const [text3, onChangeText3] = React.useState("");
    const [visible, setVisible] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const [showclassName, setshowclassName] = useState("#B80000");

    const openpopup = () => {
        setVisible(true)
    }

    const closepopup = () => {
        setVisible(false)
    }

    const handleSendRequestSubmit = async () => {
        let request = {
            "userId":props?.loginuserid,
            "message":text3,
            "msgDate":new Date()
        }
        onChangeText3('');
        props.support(request, props.navigation, "vendor");
    }

    const linkedin=()=>{
        Linking.openURL('https://www.linkedin.com/company/dropship-shop/?viewAsMember=true')
    }

    const instragram=()=>{
        Linking.openURL('https://www.instagram.com/dropship_la/')
    }

    const twitter=()=>{
        Linking.openURL('https://twitter.com/Dropship_app')
    }

    const facebook=()=>{
        Linking.openURL('https://www.facebook.com/dropship')
    }

    const phonenumber=(phoneNumber)=>{
        Linking.openURL(`tel:${phoneNumber}`)
    }

    const sendemail=(email)=>{
        Linking.openURL(`mailto:${email}`)
    }

    const google=()=>{
        Linking.openURL('https://www.google.com/')
    }


    const containerStyle = {backgroundColor: 'red', padding: '7%',marginHorizontal:'5%',alignItems:'center',};


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

       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} >


              <View style={tw.style('flex flex-row justify-between mx-4 mt-10')}>
                <Text style={tw.style('text-3xl text-gray-700 font-bold tracking-wide')}>Customer Support</Text>
              </View>

             <View style={tw.style('mx-4 my-4')}>
               <Text style={tw.style('text-base text-gray-700')}>You can reach out to us via the following channels.</Text>
             </View>


                    <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 my-12')}>
                      <View style={tw.style('px-2 py-5')}>
                          <View style={tw.style('flex flex-row px-4 items-center')}>
                              <PhoneIcon color="red" fill="#b80000" size={24} />
                              <Text style={tw.style('text-xl text-gray-700 ml-3')}>+1-555-555-5555</Text>
                          </View>
                          <View style={tw.style('flex flex-row px-4 mt-4 items-center')}>
                              <MailIcon color="red" fill="#b80000" size={24} />
                              <Text style={tw.style('text-xl text-gray-700 ml-3')}>info@dropship.com</Text>
                          </View>
                          <View style={tw.style('flex items-center my-6')}>
                            <View style={tw.style('w-full border-t border-gray-300')}></View>
                          </View>

                          <View style={tw.style('px-4')}>
                              <Text style={tw.style('text-base text-gray-700 ml-3')}>Or you can reach out to us via social media</Text>
                          </View>

                          <View style={tw.style('flex flex-row mx-4')}>
                            <View style={tw.style('h-12 w-12 bg-white shadow-sm p-3 items-center rounded-full mr-4')}>
                               <Image source={ImageIcons.facebook} style={tw.style('w-4 h-6')}/>
                            </View>

                            <View style={tw.style('h-12 w-12 bg-white shadow-sm p-3 items-center rounded-full mr-4')}>
                               <Image source={ImageIcons.message} style={tw.style('w-6 h-6')}/>
                            </View>

                            <View style={tw.style('h-12 w-12 bg-white shadow-sm p-3 items-center rounded-full mr-4')}>
                               <Image source={ImageIcons.twitter} style={tw.style('w-6 h-6')}/>
                            </View>

                            <View style={tw.style('h-12 w-12 bg-white shadow-sm p-3 items-center rounded-full mr-4')}>
                               <Image source={ImageIcons.linkin} style={tw.style('w-6 h-6')}/>
                            </View>
                          </View>
                      </View>
                    </View>




              <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4')}>
                <View style={tw.style('px-2 py-5')}>
                      <View style={tw`flex flex-row justify-between items-center mx-4`}>
                        <Text style={tw`text-gray-700 text-lg`}>Chat with customer support</Text>
                        <Closebutton onPress={() => sethelppopup(false)} />
                    </View>
                    <ScrollView  style={{backgroundColor:'#ffffff', height:200,flex:1}} >
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
                    <View style={tw`flex flex-row items-center justify-between my-2 mx-3`}>
                      <View style={tw`w-86`}>
                          <TextInput  style={tw`h-12 bg-zinc-200 rounded-lg p-3`}
                          placeholder="Type here..."
                          onChangeText={onChangeText3}
                          value={text3}
                          placeholderTextColor="#999999"
                          />
                      </View>
                        <Sendbutton onPress={() => handleSendRequestSubmit()} />
                    </View>
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
           <Footer3 onSelection="5"/>
        </View>
    )
}


export default Dashsupportacc
