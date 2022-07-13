import React, { useEffect,useRef, useState } from 'react';
import { Text, View,Image,TextInput, ImageBackground,FlatList,Picker,StatusBar,Dimensions,ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../../screens/auth/styles';
import newstyles from '../../../screens/auth/styles';
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
import Footer2 from '../../../screens/auth/Footer2';

import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Provider , Portal,} from 'react-native-paper';
import Modal from 'react-native-modal'
import Sortorder from '../../../components/pickers/Sortorder';
const options = [ { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' },{ label: '5', value: '5' },{ label: '6', value: '6' },{ label: '7', value: '7' },{ label: '8', value: '8' },{ label: '9', value: '9' } ]
import tw from 'twrnc';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const Dashlive2 = (props) => {

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

    const openpopup = () => {
        setVisible(true)
    }

    const updateorderStatus = (itemValue) => {
        setSelectedValue(itemValue)
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

               <View style={{marginHorizontal:'3%',marginVertical:'5%'}}>
               <View>
                 <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Go Live</Text>
                 </View>
               </View>

              
              <View style={tw`flex flex-row relative mx-4 shadow-sm`}>
                  <View
                    type="button"
                    style={tw`w-1.5/4 relative inline-flex items-center px-4 py-4 rounded-l-md border border-gray-200 bg-gray-200 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500`}
                  >
                    <TouchableOpacity onPress={() => props.navigation.navigate("Dashlive") }>
                      <Text style={tw`text-base font-medium text-gray-700`}>Go Live Now</Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    type="button"
                    style={tw`-ml-px w-2.5/4 relative inline-flex items-center px-4 py-4 rounded-r-md border border-red-300 bg-red-700 hover:bg-red-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500`}
                  >
                   <TouchableOpacity onPress={() => props.navigation.navigate("Dashlive2") }>
                    <Text style={tw`text-base font-medium text-white`}>Schedule Livestream</Text>
                    </TouchableOpacity>
                  </View>
                </View>



               <View style={{marginHorizontal:'3%',marginTop:'5%'}}>
               <TouchableOpacity onPress={() => props.navigation.navigate("Dashsubscribe")}>
                 <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Date & Time</Text>
                 </TouchableOpacity>
               </View>


                <View style={{backgroundColor:'#e6e6e6',width:200,borderRadius:10,padding:10,marginHorizontal:'4%',marginTop:'2%',flexDirection:'row',justifyContent:'space-between'}}>
                      <Text style={{fontSize:18,color:'#000000',fontFamily:'hinted-AvertaStd-Regular'}}>Select Date</Text>
                      <Image source={ImageIcons.caltoday} style={{width:15,height:15,marginTop:2}}/>
                   </View>

                 <View style={styles.pickerViewshorttodayagainlive2}>
                      <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />

                </View>







               <View style={{marginHorizontal:'3%',marginTop:'7%'}}>
               <TouchableOpacity onPress={() => props.navigation.navigate("Dashsubscribe")}>
                 <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Stream Time</Text>
                 </TouchableOpacity>
               </View>

              <View style={{flexDirection:'row',marginHorizontal:'4%',marginTop:'4%'}}>
                <TouchableOpacity style={{backgroundColor:'#B80000',width:'25%',borderRadius:10,padding:10,}}>
                      <Text style={styles.totalincometodayWIDRO16}>20 MIN</Text>
                   </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:'#e6e6e6',width:'25%',borderRadius:10,padding:10,marginLeft:10}}>
                      <Text style={styles.totalincometodayWIDRO17}>30 MIN</Text>
                   </TouchableOpacity>

                    <TouchableOpacity style={{backgroundColor:'#e6e6e6',width:'25%',borderRadius:10,padding:10,marginLeft:10}}>
                      <Text style={styles.totalincometodayWIDRO17}>45 MIN</Text>
                   </TouchableOpacity>
              </View>




                 <View style={{marginTop:'8%',}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'4%',marginVertical:'2%'}}>
                     <Text style={{fontSize:22,fontFamily:'hinted-AvertaStd-Semibold'}}>Products</Text>
                      <TouchableOpacity onPress={() => props.navigation.navigate("Dashlive3")} style={{backgroundColor:'#B80000',width:'40%',borderRadius:20,padding:10,}}>
                      <Text style={styles.totalincometodayWIDRO}>ADD PRODUCT</Text>
                   </TouchableOpacity>
                   </View>
                   <View style={{marginLeft:'5%'}}>
                    <FlatList
                        data={DATA2}
                        renderItem={renderItem2}
                        key={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        />
                    </View>
               </View>


                 <View style={{marginHorizontal:'4%',marginVertical:'6%',}}>
                  <Text style={{fontSize:22,fontFamily:'hinted-AvertaStd-Semibold',marginHorizontal:'3%'}}>Invite Audience</Text>
                <TextInput
                  style={styles.inputedittoday1234}
                  placeholder="com.dropship/61rlskejfl948009230"
                  placeholderTextColor="#4d4d4d"
                  paddingLeft={15}
                  width={330}
                  multiline
                  onChangeText={(text) => {}}
                />
                <View style={{position:'absolute',alignSelf:'flex-end',marginTop:'14%',right:'5%'}}>
                        <TouchableOpacity>
                            <Image source={ImageIcons.copytoday} style={{height:21,width:21}} />
                        </TouchableOpacity>
                    </View>
              </View>



                <TouchableOpacity style={{backgroundColor:'#b80000',width:320,borderRadius:30,padding:'5%',alignSelf:'center',marginTop:'4%',marginBottom:'25%'}}>
                      <Text style={styles.totalincometodaycompaign}>SCHEDULE LIVESTREAM</Text>
                   </TouchableOpacity>




                <View>


        { openpopup  &&
                    <Provider>
                    <Portal>
                    <Modal visible={visible} style={{backgroundColor:'rgba(0, 0, 0, 0.8)',marginHorizontal:-20,marginVertical:-5}} onDismiss={closepopup} contentContainerStyle={containerStyle}>
          <View style={{ marginTop:150,position: 'absolute', textAlign: 'center',justifyContent: 'center',alignItems: 'center',top: 10,left: 0,right: 0 }}>
            <View style={{ width: 250, borderRadius: 10, backgroundColor:'#fff', borderColor:'#999', borderWidth:2 }}>


              <Text style={{marginVertical:'4%',marginHorizontal:'11%',fontSize:14,fontFamily:'hinted-AvertaStd-Semibold'}}>Adjust Price</Text>
              <View style={styles.pickerViewshorttodaymodal}>
                      <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />

                </View>

                <View style={{borderBottomWidth:2,borderColor:'#e6e6e6',width:'90%',marginVertical:'7%',alignSelf:'center'}}></View>

                <Text style={{marginVertical:'3%',marginHorizontal:'11%',fontSize:14,fontFamily:'hinted-AvertaStd-Semibold'}}>Adjust Quantity</Text>
              <View style={styles.pickerViewshorttodaymodal}>
                      <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />

                </View>

                <View style={{borderBottomWidth:2,borderColor:'#e6e6e6',width:'90%',marginVertical:'7%',alignSelf:'center'}}></View>

                <Text style={{marginVertical:'3%',marginHorizontal:'11%',fontSize:14,fontFamily:'hinted-AvertaStd-Semibold'}}>Apply Discount</Text>
              <View style={styles.pickerViewshorttodaymodal}>
                      <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />

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
            <Footer2 onSelelection="3"  />
        </View>
    )
}
export default Dashlive2