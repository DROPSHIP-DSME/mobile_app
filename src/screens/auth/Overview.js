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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const Overview = (props) => {

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
    
    useEffect(() => {
      props.getincomingtlist();
      props.getselldeshboard(props?.loginuserid);
      props.gettopsell(props?.loginuserid,3);
      props.liveeventdetail(props?.loginuserid);
      props.Brandslist();
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
   
    const golivepage = async () => {
        props.liveeventdetail(props?.loginuserid);
        setTimeout(function(){ props.navigation.navigate("Dashlive",{userId:userId})},500)
    }
    // Local states
    const [showvisible, setshowvisible] = React.useState(false);
    const [visible1, setVisible1] = React.useState(true);
    const [selectedValue, setSelectedValue] = useState("");
    const [showclassName, setshowclassName] = useState("#B80000");
    const [wayToContact, setWayToContact] = useState("Phone");
    

    let colors = ['#8862E01A', '#19D8951A', '#E220201A', '#abcdef'];

    const data1 = {
        labels: ["USA", "Canada", "Mexico"], // optional
        data: [0.4, 0.6, 0.8]
    };

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{ data: [20, 45, 28, 80, 99,] }]
    };

    const DATA = [{ image:ImageIcons.redincome }];
      
const renderItem2 = ({ item,index }) => {
   return(
           <View style={{backgroundColor:'#ffffff',padding:5,width:deviceWidth/1.1,alignSelf:'center',borderRadius:15,}}>
             <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%'}}>     
               <Image source={item.image} style={{width:24,height:24,marginTop:'4%'}}/>
                <View style={styles.pickerViewshorttoday}>
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

              <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%'}}>
                  <View>
                    <Text style={styles.totalincometoday}>Total Income</Text>  
                    <Text style={styles.totalincometodaydollar}>${props?.getlistselldeshboard?.income}</Text> 
                  </View>
                   { props?.getlistselldeshboard?.income>0 &&
                    <Text style={styles.totalincometodaypercent}>+32%</Text> 
                    }
              </View> 
              <TouchableOpacity onPress={() => props.navigation.navigate("Dashwith")}>
                  <View style={{backgroundColor:'#B80000',width:'30%',borderRadius:15,padding:6,marginHorizontal:'3%',marginBottom:10}}>
                       <Text style={styles.totalincometodayWIDRO}>WITHDRAW</Text> 
                  </View> 
              </TouchableOpacity> 
            </View>
    );
    }

    const renderItem3 = ({ item,index }) => {
   return(
           <View>
 
            <View style={styles.seledataViewTODAY}>
                       <Text style={[styles.seriestexttoday,{width:150}]}>{item?.orderNumber}</Text>
                       <Text style={styles.seriestexttoday}>{item?.loggedInUserId?.userName}</Text>
                       <Text style={styles.seriestexttoday}>{item?.loggedInUserId?.userName}</Text>
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
          <SellHeader branddata={props.Brandlistdata} />

       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#E5E5E5'}} > 
          
            { visible1 == true &&
                <View>
                <View style={{marginTop:'8%'}}>
                    <FlatList
                    data={DATA}
                    renderItem={renderItem2}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                    />
                </View> 
 
                <View style={{width:deviceWidth/1.1,padding:5,backgroundColor:'#ffffff', marginVertical:'4%',
                      borderRadius: 16,marginHorizontal:'4%',alignSelf:'center'}}> 
                   <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:'4%',marginHorizontal:'3%'}}> 
                   <View>  
                     <Text style={styles.totalincometodaysale}>Sales Statistics</Text>
                     </View>
                      <View style={styles.pickerViewshorttodayagain}>
                      <Picker
                        selectedValue={selectedValue}
                        style={{ height: 30, width: 130,color:'#4d4d4d',}}
                        onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                       >
                        <Picker.Item label="2021" value="1" />
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
                <BarChart
                    data={data}
                    width={deviceWidth/1.13}
                    height={200}
                    yAxisLabel="$"
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
                      borderRadius: 16,
                      //marginHorizontal:'4%'
                    }}
                    verticalLabelRotation={0}
                    /> 
                </View> 

                <View style={{width:deviceWidth/1.1,padding:5,backgroundColor:'#ffffff', marginVertical:'4%',
                      borderRadius: 16,marginHorizontal:'4%',alignSelf:'center'}}>
                       <View> 
                      <Text style={styles.totalincometodaylive}>Livestream Viewers</Text>
                      </View>
                      <ProgressChart
                        data={data1}
                        width={deviceWidth/1.15}
                        height={220}
                        strokeWidth={16}
                        radius={32}
                         chartConfig={{
                          backgroundColor: "#e26a00",
                          backgroundGradientFrom: "#ffffff",
                          backgroundGradientTo: "#ffffff",
                          decimalPlaces: 1, // optional, defaults to 2dp
                          color: (opacity = 1) => `rgba(0, 153, 0, ${opacity})`,
                          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                         
                        }}
                        hideLegend={false}
                        />
                </View> 

                <View style={{backgroundColor:'#ffffff',padding:'4%',width:'92%',borderRadius:15,marginHorizontal:'3%',marginVertical:'6%',alignSelf:'center'}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:'2%',}}>
                   <View>
                    <Text style={styles.totalincometodaysale}>Recent Orders</Text>
                    </View>
                    {props?.getinconeorderlist?.length>0 &&
                    <TouchableOpacity  onPress={() => props.navigation.navigate("Dashorder")} style={{backgroundColor:'#B80000',width:'40%',borderRadius:15,padding:6,}}>
                      <Text style={styles.totalincometodayWIDRO}>SEE ALL ORDERS</Text> 
                   </TouchableOpacity>
                   }     
                  </View>
                   {props?.getinconeorderlist?.length>0 ? 
                   <View style={styles.salesViewTODAY}>
                       <Text style={styles.seriestext}>Order Number</Text>
                       <Text style={styles.seriestext}>Ordered By</Text>
                       <Text style={styles.seriestext}>Ema </Text>
                   </View>
                   :
                <View style={styles.salesView}>
                   <Text style={styles.norecord}>No Record Found</Text>
                </View>
            } 
                <View style={{marginLeft:-10}}>
                    <FlatList
                    data={props?.getinconeorderlist || []}
                    renderItem={renderItem3}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                    />
                </View>
                </View>   

                 <View style={{backgroundColor:'#ffffff',padding:'4%',width:'92%',marginBottom:'20%',borderRadius:15,marginHorizontal:'3%',marginVertical:'4%',alignSelf:'center'}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:'2%',}}>
                  <View>
                    <Text style={styles.totalincometodaysale}>Popular Products</Text>
                    </View>
                     {props?.gettopsellproduct?.length>0 &&
                    <TouchableOpacity onPress={() => props.navigation.navigate("Dashproduct")} style={{backgroundColor:'#B80000',width:'40%',borderRadius:15,padding:6,}}>
                      <Text style={styles.totalincometodayWIDRO}>SEE ALL PRODUCTS</Text> 
                   </TouchableOpacity> 
               }
                  </View> 
                   {props?.gettopsellproduct?.length>0 ?
                   <View style={styles.salesViewTODAYprod}>
                       <Text style={styles.seriestext}>Product</Text>
                       <Text style={styles.seriestext}>Category</Text>
                   </View>
                   :
                <View style={styles.salesView}>
                   <Text style={styles.norecord}>No Record Found</Text>
                </View>
            } 
                <View style={{marginLeft:-10}}>
                    <FlatList
                    data={props?.gettopsellproduct || []}
                    renderItem={renderItem4}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                    />
                </View>
                </View>
                </View>  

            }

         </ScrollView>
            
        <Footer2 onSelelection="1"  />
                 
            </View>
    )
}


export default Overview