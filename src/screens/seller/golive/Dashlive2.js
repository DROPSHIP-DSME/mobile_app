import React, { useEffect,useRef, useState } from 'react';
import { Text, View,Image,TextInput, ImageBackground,FlatList,Picker,StatusBar,Dimensions,ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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

import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Provider , Portal,} from 'react-native-paper';
import Modal from 'react-native-modal'
import Sortorder from '../../../components/pickers/Sortorder';
import Datepicker from '../../../components/pickers/Datepicker';
const options = [ { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' },{ label: '5', value: '5' },{ label: '6', value: '6' },{ label: '7', value: '7' },{ label: '8', value: '8' },{ label: '9', value: '9' } ]
import tw from 'twrnc';
import Smallbutton from '../../../components/dropshipbutton/Smallbutton';
import SQsmallbutton from '../../../components/dropshipbutton/SQsmallbutton';
import Largebutton from '../../../components/dropshipbutton/Largebutton';
import { DocumentDuplicateIcon } from "react-native-heroicons/solid";

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
    const [Duration, setDuration] = React.useState(1200);

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
            <View style={tw`w-2/4 px-4 mb-6`}>
               <View style={tw`mx-1`}>
                  <Image source={item.image} style={tw`w-full h-40 rounded-lg`} />
               </View>
               <View style={tw`mt-3 mx-3`}>
                <Text style={tw`text-base w-9/11`}>{item.text}</Text>
                <Text style={tw`text-base w-9/11`}>Price: ${item.text1}</Text>
                 <View style={tw`items-center w-full`}>
                    <Rating
                    type='custom'
                    imageSize={18}
                    ratingCount={5}
                    ratingColor='#EB5757'
                    tintColor='#FFE7E7'
                    style={tw`w-28 py-2`}
                    />
                 </View>
                 <TouchableOpacity onPress={() => props.navigation.navigate("Dashsubscribe2")} style={tw`items-center px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-80`}>
                    <Text style={tw`text-sm text-gray-600`}>NEW STOCK</Text>
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


                  <View style={tw.style('flex flex-row justify-between items-center mx-4 mt-8 mb-6')}>
                    <Text style={tw.style('text-3xl text-gray-700 font-bold')}>Go Live</Text>
                 </View>



              <View style={tw`flex flex-row relative mx-4 shadow-sm`}>
                  <TouchableOpacity onPress={() => props.navigation.navigate("Dashlive")} style={tw.style('w-2/4')}>
                    <View
                      type="button"
                      style={tw`relative inline-flex items-center px-4 py-3 rounded-l-md border border-gray-200 bg-gray-200 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500`}
                    >
                        <Text style={tw`text-base sm:text-sm font-medium text-gray-700`}>Go Live Now</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => props.navigation.navigate("Dashlive2")} style={tw.style('w-2/4')}>
                    <View
                      type="button"
                      style={tw`-ml-px relative inline-flex items-center px-4 py-3 rounded-r-md border border-red-300 bg-red-700 hover:bg-red-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500`}
                    >
                      <Text style={tw`text-base sm:text-sm font-medium text-white`}>Schedule Livestream</Text>
                    </View>
                  </TouchableOpacity>
                </View>



                <View style={tw`mx-4 mt-10`}>
                  <TouchableOpacity>
                     <Text style={tw`text-2xl text-gray-700`}>Date & Time</Text>
                    </TouchableOpacity>
                </View>


                <View style={tw`mx-4 mt-5`}>
                  <Datepicker text="Select Date" options={options} onSelect={(checked) => updateorderStatus(checked)} />
                </View>
                <View style={tw`mx-4 mt-5`}>
                  <Sortorder text="Select time" options={options} onSelect={(checked) => updateorderStatus(checked)} />
                </View>







                <View style={tw`mx-4 mt-10`}>
                  <TouchableOpacity>
                     <Text style={tw`text-2xl text-gray-700`}>Stream Time</Text>
                    </TouchableOpacity>
                </View>

               <View style={tw.style('flex flex-row mx-4 my-5')}>
                  <TouchableOpacity onPress={() =>setDuration(1200)} style={tw.style('mr-2')}>
                   { Duration==1200 ?
                      <SQsmallbutton text="20 Min" />
                      :
                       <View  style={tw.style('w-auto items-center px-4 py-3 border border-transparent rounded-md shadow-sm  bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200')}>
                         <Text style={tw.style('text-sm text-gray-700')}>20 MIN</Text>
                       </View>
                 }
                   </TouchableOpacity>

                  <TouchableOpacity onPress={() =>setDuration(1800)} style={tw.style('mx-2')}>
                 { Duration==1800 ?
                     <SQsmallbutton text="30 Min" />
                    :
                     <View  style={tw.style('w-auto items-center px-4 py-3 border border-transparent rounded-md shadow-sm  bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200')}>
                       <Text style={tw.style('text-sm text-gray-700')}>30 MIN</Text>
                    </View>
                 }
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>setDuration(2700)} style={tw.style('mx-2')}>
                         { Duration==2700 ?
                       <SQsmallbutton text="45 Min" />
                    :
                     <View  style={tw.style('w-auto items-center px-4 py-3 border border-transparent rounded-md shadow-sm  bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200')}>
                       <Text style={tw.style('text-sm text-gray-700')}>45 MIN</Text>
                    </View>
                 }
                    </TouchableOpacity>
               </View>




                 <View style={tw.style('mt-1')}>
                   <View style={tw.style('flex flex-row justify-between mx-4 mt-4 mb-6 items-center')}>
                      <Text style={tw.style('text-2xl text-gray-700')}>Products</Text>
                      <Smallbutton
                      text="Add Product"
                      onPress={() => props.navigation.navigate("SearchProduct")}
                      />
                   </View>
                   <View style={tw`mt-3 mx-3`}>
                    <FlatList
                        data={DATA2}
                        renderItem={renderItem2}
                        key={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        />
                    </View>
               </View>


              <View style={tw.style('mt-10 mb-16 mx-4')}>
                    <Text style={tw.style('text-xl')}>Invite Audience</Text>
                    <TextInput
                      style={tw.style('h-18 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white')}
                      placeholder="com.dropship/61rlskejfl948009230"
                      placeholderTextColor="#4d4d4d"
                      paddingLeft={15}
                      multiline
                      onChangeText={(text) => {}}
                    />
                    <View style={tw.style('absolute flex flex-end mt-6 right-5 top-8')}>
                      <TouchableOpacity onPress={() =>  openshare() } >
                          <DocumentDuplicateIcon color="red" fill="gray" size={24} />
                      </TouchableOpacity>
                    </View>
              </View>

              <View style={tw`mx-4 mt-3 mb-8`}>
                <Largebutton text="Schedule Livesteam" />
              </View>




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
