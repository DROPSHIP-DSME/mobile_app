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


const Dashsuccess = (props) => {

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
          
               <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%',marginVertical:'5%'}}>
                 <Text style={{fontSize:26,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Orders (0)</Text>
               </View>

              <View style={{flexDirection:'row',marginHorizontal:'4%'}}>
               <View style={styles.pickerViewshorttodayagainorder}>
                      <Sortorder options={options} />
                </View>
                <View style={[styles.pickerViewshorttodayagainorder,{marginLeft:'8%',flexDirection:'row',justifyContent:'space-around',padding:4}]}>
                   <Image source={ImageIcons.whitefiltertoday}  style={{height:11,width:11,marginTop:5}} />
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',textAlign:'center',color:'#ffffff'}}>FILTERS</Text> 
                </View>
              </View>

              <View style={{marginHorizontal:'4%',marginVertical:'4%',flexDirection:'row'}}>
               <View style={[styles.pickerViewshorttodayagainorder,{flexDirection:'row',justifyContent:'space-around',padding:4}]}>
                  <View style={{height:14,width:14,backgroundColor:'#ffffff',borderRadius:3,marginTop:3}}></View>
                   <Text style={{fontSize:16,fontFamily:'hinted-AvertaStd-Regular',paddingHorizontal:10,textAlign:'center',color:'#ffffff'}}>Select All</Text> 
                </View>
                <TouchableOpacity onPress={() => openpopup() } style={{height:30,width:30,backgroundColor:'#999999',borderRadius:4,marginLeft:'5%',padding:4}}>
                  <Image source={ImageIcons.whiteedittoday}  style={{height:11,width:11,marginTop:5,alignSelf:'center'}} />
                </TouchableOpacity>
                <View style={{height:30,width:30,backgroundColor:'#999999',borderRadius:4,marginLeft:'5%',padding:4}}>
                  <Image source={ImageIcons.whitedeltoday}  style={{height:11,width:11,marginTop:5,alignSelf:'center'}} />
                </View>
              </View> 

              
                <Text style={{marginHorizontal:'4%',marginVertical:'5%',fontSize:16,fontFamily:'hinted-AvertaStd-Regular'}}>You have no Orders Currently</Text>   
               </ScrollView>
            <Footer2 onSelelection="2"  />
        </View>
    )
}
export default Dashsuccess