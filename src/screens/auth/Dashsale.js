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


const Dashsale = (props) => {

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
      props.gettopcountry(props?.loginuserid);
      props.Brandslist();
    }, [])

    useEffect(() => {
       getBrandUserId();
    }, [])


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
    const [isSelected, setSelection] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const [showclassName, setshowclassName] = useState("#B80000");



       const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May",],
        datasets: [
        {
          data: [20, 45, 28, 80, 99,]
        }
        ]
    };

    const DATA3 = [
       {
        text:"1 ",
        text1:"Shoe",
        text2:"10,000",
       }
     ];
    

    const renderItem3 = ({ item,index }) => {
        return(
           <View>

            <View style={styles.seledataViewTODAYsaleana}>
                       <Text style={styles.seriestexttoday}>{index+1}</Text>
                       <Text style={styles.seriestexttoday}>{item?.productData?.productName}</Text>
                       <Text style={styles.seriestexttoday}>{item.totalAmount}</Text>
                   </View>
            
            </View>
        );
    }

    return (
         <View style={{flex:1}}>
         <StatusBar backgroundColor={'#B80000'} barStyle="dark-content" translucent={true} />
            <SellHeader branddata={props.Brandlistdata}/>
            

       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} > 
          
                <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%',marginVertical:'7%'}}>
                 <Text style={{fontSize:24,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Sales Analytics</Text>
                 <View style={{backgroundColor:'#B80000',width:'40%',borderRadius:20,padding:10,}}>
                      <Text style={styles.totalincometodayWIDRO}>WITHDRAW MONEY</Text> 
                   </View>
               </View>

              <View style={{flexDirection:'row',marginHorizontal:'4%'}}>
               <View style={styles.pickerViewshorttodayagainsale}>
                      <Picker
                        selectedValue={selectedValue}
                        style={{ height: 30, width: 150,color:'#4d4d4d',}}
                        onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                       >
                        <Picker.Item label="Time Frame" value="1" />
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

             <View style={{alignItems:'center',marginTop:'10%'}}>
               <LineChart
                    data={data}
                    width={deviceWidth/1.13}
                    height={256}
                    verticalLabelRotation={30}
                    chartConfig={{
                      backgroundColor: "#e26a00",
                      backgroundGradientFrom: "#ffffff",
                      backgroundGradientTo: "#ffffff",
                      decimalPlaces: 1, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(0, 153, 0, ${opacity})`,
                      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                     
                    }}
                    style={{
                      //marginVertical: 8,
                      borderRadius: 10,
                      //marginHorizontal:'4%'
                    }}
                    verticalLabelRotation={0}
                    bezier
                    />

             </View>

             <View style={{backgroundColor:'#ffffff',padding:'4%',width:'92%',borderRadius:15,marginHorizontal:'3%',marginTop:'12%'}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:'2%',}}>
                   <View >
                    <Text style={styles.totalincometodaysale}>Top Selling Product</Text>
                    </View>
                   <View style={styles.pickerViewshorttodaysaleing}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 30, width: 130,color:'#4d4d4d',}}
                        onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Last 30 days" value="1" />
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
                  </View> 
                   <View style={styles.salesViewTODAY}>
                       <Text style={styles.seriestext}>S/N</Text>
                       <Text style={styles.seriestext}>Products</Text>
                       <Text style={styles.seriestext}>Units sold</Text>
                   </View>
                <View style={{marginLeft:-10}}>
                    <FlatList
                    data={props?.gettopsellproduct || []}
                    renderItem={renderItem3}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                    />
                </View>
                </View>   


                 <View style={{backgroundColor:'#ffffff',padding:'4%',width:'92%',borderRadius:15,marginHorizontal:'3%',marginTop:'12%',marginBottom:'20%'}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:'2%',}}>
                   <View >
                    <Text style={styles.totalincometodaysale}>Top Selling Product</Text>
                    </View>
                   <View style={styles.pickerViewshorttodaysaleing}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 30, width: 130,color:'#4d4d4d',}}
                        onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Last 30 days" value="1" />
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
                  </View> 
                   <View style={styles.salesViewTODAY}>
                       <Text style={styles.seriestext}>S/N</Text>
                       <Text style={styles.seriestext}>Products</Text>
                       <Text style={styles.seriestext}>Units sold</Text>
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
            <Footer2 onSelelection="5"  />
             </View>
    )
}

export default Dashsale