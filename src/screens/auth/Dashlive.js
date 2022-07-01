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
    const [selectedValue, setSelectedValue] = useState("");
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
            <Text style={{fontSize:14,width:'80%',marginLeft:'5%'}}>{item.productName}</Text>
            <View style={{height:14,width:14,backgroundColor:'#e6e6e6',borderRadius:3,alignSelf:'flex-end',marginRight:'9%',marginTop:-10,}}></View>
            <Text style={{fontSize:16,width:'80%',fontFamily:'hinted-AvertaStd-Bold',marginLeft:'5%'}}>{item.productPrice}</Text>
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
         <StatusBar backgroundColor={'#B80000'} barStyle="dark-content" translucent={true} />
            <SellHeader branddata={props.Brandlistdata}/>

       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#ffffff'}} >

              <View style={tw.style('flex flex-row justify-between items-center mx-4 mt-8 mb-6')}>
                 <TouchableOpacity onPress={() => props.navigation.navigate("Dashlive2")}>
                   <Text style={tw.style('text-2xl text-gray-700 font-bold')}>Go Live</Text>
                   </TouchableOpacity>
               </View>

             { showstream==true ?

              <View style={tw.style('flex flex-row mx-4')}>
                   <Medbutton
                   text="Go Live Now" />

                   <View style={tw.style('w-auto items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-700 bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300')}>
                      <TouchableOpacity onPress={() => setshowstream(true)}>
                        <Text style={tw.style('text-lg text-gray-700')}>Schedule Livestream</Text>
                      </TouchableOpacity>
                   </View>
              </View>
          :
            <View style={tw.style('flex flex-row mx-4')}>
                  <View style={tw.style('mr-3 w-auto items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-700 bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300')}>
                    <TouchableOpacity onPress={() =>  setshowstream(false)}>
                      <Text style={tw.style('text-lg text-gray-700')}>Go Live Now</Text>
                    </TouchableOpacity>
                  </View>


                   <Medbutton
                   text="Schedule Livestream" />
              </View>

      }
             { showstream==true &&
                <View>
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
                      <Picker
                        selectedValue={selectedValue}
                        style={{ height: 42, width: 205,color:'#4d4d4d',}}
                        onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                       >
                        <Picker.Item label="8:00 AM" value="1" />
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

              }

               <View style={{marginHorizontal:'3%',marginTop:'7%'}}>
               <TouchableOpacity>
                 <Text style={{fontSize:22,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',}}>Stream Time</Text>
                 </TouchableOpacity>
               </View>

              <View style={tw.style('flex flex-row mx-4 my-5')}>
               <TouchableOpacity onPress={() =>setDuration(1200)} style={tw.style('mr-2')}>
                { Duration==1200 ?
                  <Smallbutton
                  text="20 Min" />
                   :
                    <View  style={tw.style('w-auto items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm  bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200')}>
                      <Text style={tw.style('text-lg text-gray-700')}>20 MIN</Text>
                   </View>
               }
                </TouchableOpacity>

                 <TouchableOpacity onPress={() =>setDuration(1800)} style={tw.style('mx-2')}>
                { Duration==1800 ?
                    <Smallbutton
                    text="30 Min" />
                   :
                    <View  style={tw.style('w-auto items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm  bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200')}>
                      <Text style={tw.style('text-lg text-gray-700')}>30 MIN</Text>
                   </View>
               }
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() =>setDuration(2700)} style={tw.style('mx-2')}>
                        { Duration==2700 ?
                      <Smallbutton
                      text="45 Min" />
                   :
                    <View  style={tw.style('w-auto items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm  bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200')}>
                      <Text style={tw.style('text-lg text-gray-700')}>45 MIN</Text>
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


                <View style={tw.style('mt-10 mb-16 mx-4')}>
                      <Text style={tw.style('text-xl')}>Invite Audience</Text>
                      <TextInput
                        style={tw.style('bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500')}
                        placeholder=""
                        placeholderTextColor="#4d4d4d"
                        value={livedetailId}
                        paddingLeft={15}
                        multiline
                        onChangeText={(text) => {}}
                      />
                      <View style={tw.style('absolute flex flex-end mt-6 right-5 top-5')}>
                        <TouchableOpacity onPress={() =>  openshare() } >
                            <Image source={ImageIcons.copytoday} style={{height:21,width:21}} />
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

                     <Largebutton
                     text="Start Livesteam"
                     onPress={() => startlivebtn()}
                     />
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

                <Text style={{marginVertical:'3%',marginHorizontal:'11%',fontSize:14,fontFamily:'hinted-AvertaStd-Semibold'}}>Adjust Quantity</Text>
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

                <Text style={{marginVertical:'3%',marginHorizontal:'11%',fontSize:14,fontFamily:'hinted-AvertaStd-Semibold'}}>Apply Discount</Text>
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

            <Footer2 onSelelection="3"  />

        </View>

    )
}
export default Dashlive
