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
import Sortorder from '../../components/pickers/Sortorder';
const options = ['1', '2', '3', '4','5','6','7','8','9']

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const Dashlive3 = (props) => {

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
    const [isModalVisible, setModalVisible] = useState(false);
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
     
    const DATA2 = [
       {
        text:'Sneakers',
        text1:'$0',
        text2:'Orders (0)',
        image:ImageIcons.whiteshoetoday,
       }
    ];

 const renderItem2 = ({ item ,index }) => {
     return(
        <View>
           <View style={{padding:2,}}>
              <Image source={item.image} style={{height:159,width:159}} />
           </View>
           <View style={{marginTop:5,}}>
            <Text style={{fontSize:14,width:'80%',marginLeft:'5%'}}>{item.text}</Text>
            <View style={{height:14,width:14,backgroundColor:'#e6e6e6',borderRadius:3,alignSelf:'flex-end',marginRight:'9%',marginTop:-10,}}></View>
            <Text style={{fontSize:16,width:'80%',fontFamily:'hinted-AvertaStd-Bold',marginLeft:'5%'}}>{item.text1}</Text>
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
             <TouchableOpacity onPress={() => props.navigation.navigate("Dashsubscribe2")} style={{backgroundColor:'#ffe6ff',width:90,borderRadius:5,padding:6,marginHorizontal:'4%',marginBottom:'12%'}}>
                      <Text style={{fontSize:12,color:'#E25424',fontFamily:'hinted-AvertaStd-Semibold',textAlign:'center'}}>NEW STOCK</Text> 
                   </TouchableOpacity>
          </View>
        </View>  
  );
}


    return (
         <View style={{flex:1}}>
         
       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#ffffff'}} > 
          
            <TouchableOpacity onPress={() => props.navigation.navigate("Dashlive")}>
             <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%',marginTop:'5%'}}>
                <Image source={ImageIcons.returnlivetoday} style={{width:160,height:18,marginTop:7}}/>
               </View>
            </TouchableOpacity>
               <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%',marginVertical:'5%'}}>
                 <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Add Products</Text>
               </View>

              <View style={{flexDirection:'row',marginHorizontal:'4%'}}>
               <View style={styles.pickerViewshorttodayagain}>
                      <Sortorder options={options} />

                </View>
                <View style={[styles.pickerViewshorttodayagain,{marginLeft:'6%',flexDirection:'row',justifyContent:'space-around',padding:4}]}>
                   <Image source={ImageIcons.filtertoday}  style={{height:11,width:11,marginTop:5}} />
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',textAlign:'center'}}>FILTERS</Text> 
                </View>
              </View>

              <View style={{marginHorizontal:'4%',marginVertical:'4%',flexDirection:'row'}}>
               <View style={[styles.pickerViewshorttodayagain,{flexDirection:'row',justifyContent:'space-around',padding:5}]}>
                  <View style={{height:14,width:14,backgroundColor:'#ffffff',borderRadius:3,marginTop:3}}></View>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',textAlign:'center',color:'#4d4d4d',marginLeft:2}}>Select All</Text> 
                </View>
                <TouchableOpacity onPress={() => openpopup() } style={{height:30,width:30,backgroundColor:'#e6e6e6',borderRadius:4,marginLeft:'5%',padding:4}}>
                  <Image source={ImageIcons.edittoday}  style={{height:11,width:11,marginTop:5,alignSelf:'center'}} />
                </TouchableOpacity>
              </View> 

              

              
                 <View style={{marginTop:'8%',marginLeft:'5%'}}>
                 <FlatList
                        data={DATA2}
                        renderItem={renderItem2}
                        key={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        />
               </View>  


                 
           
              

               
  



                <View>   


        { openpopup  &&
                    <Provider>
                    <Portal>
                    <Modal visible={visible} style={{backgroundColor:'rgba(0, 0, 0, 0.8)',marginHorizontal:-20,marginVertical:-5}} onDismiss={closepopup} contentContainerStyle={containerStyle}>
          <View style={{ marginTop:150,position: 'absolute', textAlign: 'center',justifyContent: 'center',alignItems: 'center',top: 10,left: 0,right: 0 }}>
            <View style={{ width: 300, borderRadius: 10, backgroundColor:'#fff', borderColor:'#999', borderWidth:2 }}>
              
             
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:'5%',marginHorizontal:'5%'}}>
                     <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Edit Product</Text>      
                     <TouchableOpacity onPress={() => closepopup() } style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,marginLeft:'4%',padding:8,}}>
                      <Image source={ImageIcons.closetoday}  style={{height:12,width:12,marginTop:5,alignSelf:'center'}} />
                    </TouchableOpacity> 
                   </View> 


                    <View style={{marginHorizontal:'3%',marginTop:'7%'}}>
               <TouchableOpacity>
                 <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Product Label</Text>
                 </TouchableOpacity>
               </View>

              <View style={{flexDirection:'row',marginHorizontal:'4%',marginTop:'4%'}}>
                <TouchableOpacity style={{backgroundColor:'#e25424',width:75,borderRadius:10,padding:5,}}>
                      <Text style={{fontSize:12,color:'#ffffff',fontFamily:'hinted-AvertaStd-Semibold',textAlign:'center',padding:2}}>ON SALE</Text> 
                   </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:'#e6f2ff',width:75,borderRadius:10,padding:5,marginLeft:10}}>
                      <Text style={{fontSize:12,color:'#2f80ed',fontFamily:'hinted-AvertaStd-Semibold',textAlign:'center',padding:2}}>NEW STOCK</Text> 
                   </TouchableOpacity>

                    <TouchableOpacity style={{backgroundColor:'#ffe6ff',width:80,borderRadius:10,padding:5,marginLeft:10}}>
                      <Text style={{fontSize:12,color:'#E3AE0E',fontFamily:'hinted-AvertaStd-Semibold',textAlign:'center',padding:2}}>LOW SUPPLY</Text> 
                   </TouchableOpacity>
              </View>

              <TouchableOpacity style={{backgroundColor:'#e6ffe6',width:90,borderRadius:10,padding:5,marginHorizontal:'4%',marginVertical:'5%'}}>
                 <Text style={{fontSize:12,color:'#27AE60',fontFamily:'hinted-AvertaStd-Semibold',textAlign:'center',padding:2}}>HIGHLY RATED</Text> 
              </TouchableOpacity>


               

                <TouchableOpacity onPress={() => closepopup()} style={{backgroundColor:'#B80000',width:270,borderRadius:25,padding:10,alignSelf:'center',marginVertical:'8%'}}>
                      <Text style={styles.totalincometodaySAVECHANGE}>APPLY CHANGES</Text> 
                   </TouchableOpacity>

               
                  


            </View>
          </View>
       </Modal>
                    </Portal>
                    </Provider>
                }
         </View>
        
               </ScrollView>
            
            
            



           <Footer2 onSelelection="3"  />
             </View>


                
        
    )
}


export default Dashlive3