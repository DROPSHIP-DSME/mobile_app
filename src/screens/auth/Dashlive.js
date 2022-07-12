import React, { useEffect,useRef, useState } from 'react';
import { Text, View,Image,TextInput, Button, ImageBackground,FlatList,Picker,StatusBar,Dimensions,ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import CountDown from 'react-native-countdown-component';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Provider , Portal,} from 'react-native-paper';
import Modal from 'react-native-modal'
import tw from 'twrnc';
import Medbutton from '../../components/dropshipbutton/Medbutton';
import Smallbutton from '../../components/dropshipbutton/Smallbutton';
import Largebutton from '../../components/dropshipbutton/Largebutton';
import Sortorder from '../../components/pickers/Sortorder';
import Deletebutton from '../../components/pickers/Deletebutton';
import { DocumentDuplicateIcon } from "react-native-heroicons/solid";
const options = ['1', '2', '3', '4','5','6','7','8','9']

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const Dashlive = (props) => {

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
      //alert(props?.loginuserid)
      props.Brandslist();
      if(props?.livedetail && props?.livedetail[0]?._id!=undefined){
        //alert(props?.livedetail[0]?._id)
        //alert('no')
        setlivedetailId(props?.livedetail[0]?._id);
      }else {
        //alert('yes')
        //alert(props?.loginuserid)
        props.liveeventdetail(props?.loginuserid);
      }

    }, [props?.livedetail])

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
    const handlesch=()=>{
        setshowstream(true);
    }

    const getBrandUserId = async () => {
        var getUserId = await AsyncStorage.getItem('UserId');
        setUserID(getUserId);
        props.getAllproduct(props?.loginuserid);
    }

    // Local states

    const [showstream, setshowstream] = useState(false);
    const [UserID, setUserID] = useState("");
    const [isModalVisible, setModalVisible] = useState(false);
    const [visible, setVisible] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState("1");
    const [showclassName, setshowclassName] = useState("#B80000");
    const [timer, settimer] = useState(0);
    const [Duration, setDuration] = React.useState(1200);
    const [livedetailId, setlivedetailId] = React.useState('');

    const [producttype, setproducttype] = React.useState('new');

    const openpopup = () => {
        setVisible(true);
    };

    const closepopup = () => {
        setVisible(false);
    }

    const updateorderStatus = (itemValue) => {
    setSelectedValue(itemValue)
  }

    const containerStyle = {backgroundColor: 'red', padding: '7%',marginHorizontal:'5%',alignItems:'center',};

    const startlivebtn = ()=>{
        let request = {
            "eventId":livedetailId,
            "EventDuration":Duration,
            "startNow":true,
            "eventType":producttype
        }
        //alert(livedetailId)
        let request1 = {
            "channelName":livedetailId,
            "appID":"0c96ec2a0c9744c0bb3d21330bb0911d",
            "appCertificate":"f877b72b55264162bfc8b88421fa8b77",
            "uid":1
        }
        props.getchanneltoken(request1, props.navigation, "vendor");
        props.schuleEventstart(request, props.navigation, "vendor");
        settimer(10)
    }

    const openshare=()=>{
        let options = {
          message: 'To join our broadcast, click here',
          url: 'https://com.dropship/'+livedetailId,
        };
      Share.open(options);
    }

    const startBrodcast = ()=>{

        props.navigation.navigate("Blurbackground", { isback: false, channel:livedetailId, isbroadcaster: true })
    }

 const renderItem2 = ({ item ,index }) => {
     return(
        <View>
           <View style={{paddingHorizontal:2}}>
              <Image source={{uri:item.productImage}} style={{height:159,width:159}} />
           </View>
           <View style={{marginTop:5,}}>
            <Text style={tw`text-base w-9/11 ml-4`}>{item.productName}</Text>
            <View style={tw`h-4 w-4 bg-gray-600 rounded-md mr-8 mt-[-2]`}></View>
            <Text style={tw`text-base w-9/11 ml-10`}>{item.productPrice}</Text>
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

              <View style={tw.style('flex flex-row justify-between items-center mx-4 mt-8 mb-6')}>
                 <TouchableOpacity onPress={() => props.navigation.navigate("Dashlive2")}>
                   <Text style={tw.style('text-2xl text-gray-700 font-bold')}>Go Live</Text>
                   </TouchableOpacity>
               </View>

             { showstream==true ?

                <View style={tw`flex flex-row relative mx-4 shadow-sm`}>
                    <View
                      type="button"
                      style={tw`-ml-px w-2/4 relative inline-flex items-center px-4 py-4 rounded-r-md border border-red-300 bg-red-700 hover:bg-red-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500`}
                    >
                      <Text style={tw`text-base font-medium text-white`}>Go Live Now</Text>
                    </View>
                    <View
                      type="button"
                      style={tw`w-2/4 relative inline-flex items-center px-4 py-4 rounded-l-md border border-gray-200 bg-gray-200 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500`}
                    >
                      <TouchableOpacity onPress={() => setshowstream(true)}>
                        <Text style={tw`text-base font-medium text-gray-700`}>Schedule Livestream</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
          :

              <View style={tw`flex flex-row relative mx-4 shadow-sm`}>
                  <View
                    type="button"
                    style={tw`w-2/4 relative inline-flex items-center px-4 py-4 rounded-l-md border border-gray-200 bg-gray-200 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500`}
                  >
                    <TouchableOpacity onPress={() =>  setshowstream(false)}>
                      <Text style={tw`text-base font-medium text-gray-700`}>Go Live Now</Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    type="button"
                    style={tw`-ml-px w-2/4 relative inline-flex items-center px-4 py-4 rounded-r-md border border-red-300 bg-red-700 hover:bg-red-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500`}
                  >
                    <Text style={tw`text-base font-medium text-white`}>Schedule Livestream</Text>
                  </View>
                </View>

      }
             { showstream==true &&
                <View>
              <View style={tw`mx-4 mt-5`}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Dashsubscribe")}>
                 <Text style={tw`text-base text-gray-600`}>Date & Time</Text>
                </TouchableOpacity>
              </View>


                <View style={{backgroundColor:'#e6e6e6',width:200,borderRadius:10,padding:10,marginHorizontal:'4%',marginTop:'2%',flexDirection:'row',justifyContent:'space-between'}}>
                      <Text style={{fontSize:18,color:'#000000',fontFamily:'hinted-AvertaStd-Regular'}}>Select Date</Text>
                      <Image source={ImageIcons.caltoday} style={{width:15,height:15,marginTop:2}}/>
                   </View>

                 <View style={styles.pickerViewshorttodayagainlive2}>
                      <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />

                </View>
                </View>

              }

              <View style={tw.style('mt-8 mb-5 mx-4')}>
                      <TextInput
                        style={tw.style('h-18 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500')}
                        placeholder="Stream Title"
                        placeholderTextColor="#4d4d4d"
                        paddingLeft={15}
                        multiline
                        onChangeText={(text) => {}}
                      />
              </View>

               <View style={{marginHorizontal:'3%',marginTop:'7%'}}>
               <TouchableOpacity>
                 <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Stream Time</Text>
                 </TouchableOpacity>
               </View>

              <View style={tw.style('flex flex-row mx-4 my-5')}>
               <TouchableOpacity onPress={() =>setDuration(1200)} style={tw.style('mr-2')}>
                { Duration==1200 ?
                  <Smallbutton text="20 Min" />
                   :
                    <View  style={tw.style('w-auto items-center px-3 py-2 border border-transparent rounded-md shadow-sm  bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200')}>
                      <Text style={tw.style('text-sm text-gray-700')}>20 MIN</Text>
                   </View>
               }
                </TouchableOpacity>

                 <TouchableOpacity onPress={() =>setDuration(1800)} style={tw.style('mx-2')}>
                { Duration==1800 ?
                    <Smallbutton text="30 Min" />
                   :
                    <View  style={tw.style('w-auto items-center px-3 py-2 border border-transparent rounded-md shadow-sm  bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200')}>
                      <Text style={tw.style('text-sm text-gray-700')}>30 MIN</Text>
                   </View>
               }
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() =>setDuration(2700)} style={tw.style('mx-2')}>
                        { Duration==2700 ?
                      <Smallbutton text="45 Min" />
                   :
                    <View  style={tw.style('w-auto items-center px-3 py-2 border border-transparent rounded-md shadow-sm  bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200')}>
                      <Text style={tw.style('text-sm text-gray-700')}>45 MIN</Text>
                   </View>
               }
                   </TouchableOpacity>
              </View>




                 <View style={tw.style('mt-1')}>
                    <View style={tw.style('flex flex-row justify-between mx-4 my-2 items-center')}>
                       <Text style={tw.style('text-2xl text-gray-700')}>Products</Text>
                       <Medbutton
                       text="Add Product"
                       onPress={() => props.navigation.navigate("SearchProduct")}
                       />

                    </View>
                    <View style={{marginLeft:'5%'}}>
                      <FlatList
                          data={props?.getlistproduct || []}
                          renderItem={renderItem2}
                          key={item => item.id}
                          showsHorizontalScrollIndicator={false}
                          numColumns={2}
                          />
                      </View>
               </View>
               <View style={tw.style('flex flex-row mx-4 mt-2 mb-5 items-center')}>
                  <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />
                  <View style={tw.style('ml-3')}>
                    <Deletebutton />
                  </View>
               </View>


                <View style={tw.style('mt-10 mb-16 mx-4')}>
                      <Text style={tw.style('text-xl')}>Invite Audience</Text>
                      <TextInput
                        style={tw.style('h-18 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white')}
                        placeholder=""
                        placeholderTextColor="#4d4d4d"
                        value={livedetailId}
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

              { timer>0 &&
                        <View style={{marginTop:'6%'}}>
                            <Image source={ImageIcons.refresh} style={{width:43,height:43,alignSelf:'center'}}/>
                            <View style={{position:'absolute',alignSelf:'center',top:5}}>
                                <CountDown
                                    until={timer}
                                    size={12}
                                    onFinish={() => startBrodcast()  }
                                    digitStyle={{backgroundColor: '#FF000000'}}
                                    digitTxtStyle={{color: '#000000'}}
                                    timeToShow={['S']}
                                    separatorStyle={{color: '#000000'}}
                                    timeLabels={{m: null, s: null}}
                                    showSeparator
                                  />
                            </View>
                        </View>
                    }

                 { showstream==true ?
                        <View
                          type="button"
                          style={tw.style('inline-flex items-center mx-5 px-4 py-6 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500')}
                        >
                         <TouchableOpacity style={tw.style('w-10/11 items-center')}
                            onPress={() => startlivebtn() }>
                            <Text style={tw.style('text-lg text-white')}>Schedule Livestream</Text>
                          </TouchableOpacity>
                        </View>
                  :
                    <View style={tw`mx-4`}>
                       <Largebutton
                       text="Start Livesteam"
                       onPress={() => startlivebtn()}
                       />

                       <View
                        type="button"
                         style={tw.style('my-5 inline-flex items-center px-4 py-6 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500')}
                       >
                        <TouchableOpacity style={tw.style('w-10/11 items-center')}>
                           <Text style={tw.style('text-lg text-white')}>Test Livestream</Text>
                         </TouchableOpacity>
                       </View>
                    </View>
                   }
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
export default Dashlive
