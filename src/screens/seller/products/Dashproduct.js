import React, { useEffect,useRef, useState } from 'react';
import { Text, View,Image,TextInput, ImageBackground,FlatList,Picker,StatusBar,Dimensions,ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
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
import SellHeader from '../../../screens/common/Sellheader';

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


const Dashproduct = (props) => {

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
    const productreload = props?.route?.params?.productreload;
    
    
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

    const callnewfun = () => {
        props.getAllproduct(props?.loginuserid);
     }

    useFocusEffect(
        React.useCallback(() => {
          const unsubscribe = callnewfun();
          return () => unsubscribe;
        }, [])
    );


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
        //alert("okkkkk");
         var getUserId = await AsyncStorage.getItem('UserId');
        setUserID(getUserId);
        //alert(getUserId);
         //props.getAllproduct(props?.loginuserid);
         callnewfun();
         //console.log("getAllproduct",getAllproduct);
          props.getbrandName(props?.loginuserid);

        // if(userId!="" && userId!=undefined){
        //     await AsyncStorage.setItem('UserId',userId);
        //     await AsyncStorage.setItem('userLogin',"1");
        // }
    }
   
    const golivepage = async () => {
        props.liveeventdetail(props?.loginuserid);
        setTimeout(function(){ props.navigation.navigate("StartRecording",{userId:userId})},500)
    }
    // Local states
    const [UserID, setUserID] = useState("");
    const [subMsg, onChangeText1] = React.useState("");
      const [msg, onChangeText2] = React.useState("");
    const [isModalVisible, setModalVisible] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [dataload, setdataload] = useState(false);
    const [visible, setVisible] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const [showclassName, setshowclassName] = useState("#B80000");
    
   
       let colors = ['#8862E01A', '#19D8951A', '#E220201A', '#abcdef'];

     const openpopup = () => {
        setVisible(true)

        };
    const closepopup = () => {
        setVisible(false)
    }

       

    const containerStyle = {backgroundColor: 'red', padding: '7%',marginHorizontal:'5%',alignItems:'center',};

       const DATA = [
       {
        image:ImageIcons.redincome,
       },

    ];
    
 const renderItem2 = ({ item ,index }) => {
     return(
        <View>
           <TouchableOpacity onPress={() => props.navigation.navigate("ProductDetails",{productId:item._id,})} style={{padding:2,}}>
              <Image source={{uri:item.productImage}} style={{height:159,width:159}} />
           </TouchableOpacity>
           <View style={{marginTop:5,}}>
            <Text style={{fontSize:14,width:'80%',marginLeft:'5%'}}>{item.productName}</Text>
            <View style={{height:14,width:14,backgroundColor:'#e6e6e6',borderRadius:3,alignSelf:'flex-end',marginRight:'9%',marginTop:-10,}}></View>
            <Text style={{fontSize:16,width:'80%',fontFamily:'SourceSansPro-Bold',marginLeft:'5%'}}>{item.productPrice}</Text>
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
                       <Text style={styles.seriestexttoday}>{item.text}</Text>
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
    

    return (
         <View style={{flex:1}}>
         <StatusBar backgroundColor={'#B80000'} barStyle="dark-content" translucent={true} />
          <SellHeader />

       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#ffffff'}} > 
          
               <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%',marginVertical:'5%'}}>
               <TouchableOpacity>
                 <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold',}}>Products ({props?.getlistproduct?.length})</Text>
                 </TouchableOpacity>
                  { props?.brandName ?
                 <TouchableOpacity onPress={() => props.navigation.navigate("Accountproduct",{brandId:props?.brandName._id})} style={{backgroundColor:'#B80000',width:'40%',borderRadius:20,padding:10,}}>
                      <Text style={styles.totalincometodayWIDRO}>ADD PRODUCT</Text> 
                   </TouchableOpacity>
                   :
                   <TouchableOpacity onPress={() => props.navigation.navigate("CreateStore")} style={{backgroundColor:'#B80000',width:'40%',borderRadius:20,padding:10,}}>
                      <Text style={styles.totalincometodayWIDRO}>ADD PRODUCT</Text> 
                   </TouchableOpacity>
               }
               </View>

              <View style={{flexDirection:'row',marginHorizontal:'4%'}}>
               <View style={styles.pickerViewshorttodayagain}>
                      <Picker
                        selectedValue={selectedValue}
                        style={{ height: 30, width: 125,color:'#4d4d4d',}}
                        onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                       >
                        <Picker.Item label="Sort" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8" value="8" />
                        <Picker.Item label="9" value="9" />
                      </Picker>
                </View>
                <TouchableOpacity style={[styles.pickerViewshorttodayagain,{marginLeft:'8%',flexDirection:'row',justifyContent:'space-around',padding:4}]}>
                   <Image source={ImageIcons.filtertoday}  style={{height:11,width:11,marginTop:5}} />
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',textAlign:'center'}}>FILTERS</Text> 
                </TouchableOpacity>
              </View>

              <View style={{marginHorizontal:'4%',marginVertical:'4%',flexDirection:'row'}}>
               <View style={[styles.pickerViewshorttodayagain,{flexDirection:'row',justifyContent:'space-around',padding:4}]}>
                  <View style={{height:14,width:14,backgroundColor:'#ffffff',borderRadius:3,marginTop:3}}></View>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',textAlign:'center',}}>Select All</Text> 
                </View>
                <TouchableOpacity onPress={() => openpopup() } style={{height:30,width:30,backgroundColor:'#e6e6e6',borderRadius:4,marginLeft:'5%',padding:4}}>
                  <Image source={ImageIcons.edittoday}  style={{height:11,width:11,marginTop:5,alignSelf:'center'}} />
                </TouchableOpacity>
                <TouchableOpacity  style={{height:30,width:30,backgroundColor:'#e6e6e6',borderRadius:4,marginLeft:'5%',padding:4}}>
                  <Image source={ImageIcons.deletetoday}  style={{height:11,width:11,marginTop:5,alignSelf:'center'}} />
                </TouchableOpacity>
              </View> 

              
                 <View style={{marginTop:'8%',marginBottom:'20%',marginLeft:'5%'}}>
                    {props?.getlistproduct?.length>0 ?
                    <FlatList
                        data={props?.getlistproduct || []}
                        renderItem={renderItem2}
                        key={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        />
                    :
                     <View style={{ justifyContent:'center',alignItems:'center',paddingTop:40}}>
                        <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',textAlign:'center'}}>No Product added yet</Text>
                     </View>
                    }
               </View>  


                <View>   


        { openpopup  &&
                    <Provider>
                    <Portal>
                    <Modal visible={visible} style={{backgroundColor:'rgba(0, 0, 0, 0.8)',marginHorizontal:-20,marginVertical:-5}} onDismiss={closepopup} contentContainerStyle={containerStyle}>
          <View style={{ marginTop:150,position: 'absolute', textAlign: 'center',justifyContent: 'center',alignItems: 'center',top: 10,left: 0,right: 0 }}>
            <View style={{ width: 250, borderRadius: 10, backgroundColor:'#fff', borderColor:'#999', borderWidth:2 }}>
              
             
              <Text style={{marginVertical:'4%',marginHorizontal:'11%',fontSize:14,fontFamily:'SourceSansPro-SemiBold'}}>Adjust Price</Text>
              <View style={styles.pickerViewshorttodaymodal}>
                      <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 200,color:'#4d4d4d',}}
                        onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                       >
                        <Picker.Item label="Price" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8" value="8" />
                        <Picker.Item label="9" value="9" />
                      </Picker>
                </View>

                <View style={{borderBottomWidth:2,borderColor:'#e6e6e6',width:'90%',marginVertical:'7%',alignSelf:'center'}}></View>

                <Text style={{marginVertical:'3%',marginHorizontal:'11%',fontSize:14,fontFamily:'SourceSansPro-SemiBold'}}>Adjust Quantity</Text>
              <View style={styles.pickerViewshorttodaymodal}>
                      <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 200,color:'#4d4d4d',}}
                        onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                       >
                        <Picker.Item label="Quantity" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8" value="8" />
                        <Picker.Item label="9" value="9" />
                      </Picker>
                </View>

                <View style={{borderBottomWidth:2,borderColor:'#e6e6e6',width:'90%',marginVertical:'7%',alignSelf:'center'}}></View>

                <Text style={{marginVertical:'3%',marginHorizontal:'11%',fontSize:14,fontFamily:'SourceSansPro-SemiBold'}}>Apply Discount</Text>
              <View style={styles.pickerViewshorttodaymodal}>
                      <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 200,color:'#4d4d4d',}}
                        onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                       >
                        <Picker.Item label="Discount" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8" value="8" />
                        <Picker.Item label="9" value="9" />
                      </Picker>
                </View>

                <TouchableOpacity onPress={() => closepopup()} style={{backgroundColor:'#B80000',width:200,borderRadius:25,padding:15,alignSelf:'center',marginVertical:'8%'}}>
                      <Text style={styles.totalincometodaySAVECHANGE}>SAVE CHANGES</Text> 
                   </TouchableOpacity>

               
                  


            </View>
          </View>
       </Modal>
                    </Portal>
                    </Provider>
                }
         </View>
        
               </ScrollView>
            <Footer2 onSelelection="4"  />
        </View>


                
        
    )
}


export default Dashproduct