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


const Dashchats = (props) => {

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
    const [isModalVisible, setModalVisible] = useState(false);
    const [visible, setVisible] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const [showclassName, setshowclassName] = useState("#B80000");
    

    const openpopup = () => {
        setVisible(true)
    };

    const closepopup = () => {
         setVisible(false)
    }

    
    const DATA3 = [
       {
         image:ImageIcons.girlcent,
        text1:"GSHM8U00S0004KH ",
        text:"Amy White ",
        text2:"Pending ",
       }
     ];

    const renderItem3 = ({ item,index }) => {
        return(
           <View>

            <TouchableOpacity  onPress={() => props.navigation.navigate("Dashreturn")} style={styles.seledataViewTODAYchat}>
                     <View style={{flexDirection:'row'}}>
                       <Image source={item.image} style={{width:18,height:18,}}/>
                       <Text style={[styles.seriestexttoday,{marginLeft:3}]}>{item.text}</Text>
                     </View>  
                       <Text style={styles.seriestexttoday}>{item.text1}</Text>
                       <View style={[styles.pickerViewshorttodayagain,{padding:4}]}>
                         <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular'}}>{item.text2}</Text> 
                        </View>
            </TouchableOpacity>

            
            </View>
        );
    }

    

    return (
         <View style={{flex:1}}>
         <StatusBar backgroundColor={'#B80000'} barStyle="dark-content" translucent={true} />
          <SellHeader />

       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} > 
          
               <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%',marginVertical:'5%'}}>
                 <Text style={{fontSize:26,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Chats (0)</Text>
               </View>

              <View style={{flexDirection:'row',marginHorizontal:'4%'}}>
               <View style={styles.pickerViewshorttodayagain}>
                      <Picker
                        selectedValue={selectedValue}
                        style={{ height: 30, width: 100,color:'#4d4d4d',}}
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
                <View style={[styles.pickerViewshorttodayagain,{marginLeft:'8%',flexDirection:'row',justifyContent:'space-around',padding:4}]}>
                   <Image source={ImageIcons.filtertoday}  style={{height:11,width:11,marginTop:5}} />
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',textAlign:'center'}}>FILTERS</Text> 
                </View>
              </View>

                    <View style={{marginHorizontal:'4%',marginVertical:'4%',flexDirection:'row'}}>
                       <View style={[styles.pickerViewshorttodayagain,{flexDirection:'row',justifyContent:'space-around',padding:4}]}>
                          <View style={{height:14,width:14,backgroundColor:'#ffffff',borderRadius:3,marginTop:3}}></View>
                           <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',textAlign:'center',}}>Select All</Text> 
                        </View>
                        <TouchableOpacity onPress={() => openpopup() } style={{height:30,width:30,backgroundColor:'#e6e6e6',borderRadius:4,marginLeft:'5%',padding:4}}>
                          <Image source={ImageIcons.edittoday}  style={{height:11,width:11,marginTop:5,alignSelf:'center'}} />
                        </TouchableOpacity>
                        <View style={{height:30,width:30,backgroundColor:'#e6e6e6',borderRadius:4,marginLeft:'5%',padding:4}}>
                          <Image source={ImageIcons.deletetoday}  style={{height:11,width:11,marginTop:5,alignSelf:'center'}} />
                        </View>
                      </View> 

              
                    <View style={{backgroundColor:'#ffffff',padding:'4%',width:'92%',borderRadius:15,marginHorizontal:'3%',marginVertical:'6%',marginBottom:'25%'}}>
                        <View style={styles.salesViewTODAY}>
                           <Text style={styles.seriestext}>Order Number</Text>
                           <Text style={styles.seriestext}>Ordered By</Text>
                           <Text style={styles.seriestext}>Status </Text>
                        </View>
                        <View style={{marginLeft:-10}}>
                            <FlatList
                            data={DATA3}
                            renderItem={renderItem3}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            horizontal={false}
                            />
                        </View>
                    </View>   
               </ScrollView>
            <Footer2 />
        </View>
    )
}


export default Dashchats