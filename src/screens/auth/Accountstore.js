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
import Shopheader from '../../screens/auth/Shopheader';
import Footer3 from '../../screens/auth/Footer3';

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


const Accountstore = (props) => {

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
      props.Brandslist(); 
    }, [])

    useEffect(() => {

       // AsyncStorage.setItem('UserId','');
       // AsyncStorage.setItem('userLogin','');
        getBrandUserId();
    }, [])

    useFocusEffect(() => {
        getBrandUserId();
     })

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
        if(userId!="" && userId!=undefined){
            await AsyncStorage.setItem('UserId',userId);
            await AsyncStorage.setItem('userLogin',"1");
        }
    }
   
    const golivepage = async () => {
        props.liveeventdetail(props?.loginuserid);
        setTimeout(function(){ props.navigation.navigate("StartRecording",{userId:userId})},500)
    }
    // Local states
    const [text1, onChangeText3] = React.useState("");
    const [subMsg, onChangeText1] = React.useState("");
      const [msg, onChangeText2] = React.useState("");
    const [isModalVisible, setModalVisible] = useState(false);
     const [helppopup, sethelppopup] = React.useState(false);
    const [isSelected, setSelection] = useState(false);
    const [visible, setVisible] = React.useState(false);
     const [selectedValue, setSelectedValue] = useState("");
    const [showclassName, setshowclassName] = useState("#B80000");
    const [wayToContact, setWayToContact] = useState("Phone");
    const [wayToContactList, setWayToContactList] = useState([
        {
            label: "Phone",
            value: "Phone"
        },
        {
            label: "Email",
            value: "Email"
        }
    ]);

    
       let colors = ['#8862E01A', '#19D8951A', '#E220201A', '#abcdef'];

     const openpopup = () => {
        setVisible(true)

        };
    const closepopup = () => {
       setVisible(false)
    }

    const containerStyle = {backgroundColor: 'red', padding: '7%',marginHorizontal:'5%',alignItems:'center',};
      const renderItem6 = ({ item }) => {
            return(
                <View>
                    { item.userId.userName=='Admin' ?
                       <View>
                        <View style={styles.chatrightView}>
                           <Text style={styles.hellotext}>{item.message}</Text>
                        </View>
                         <Text style={styles.chattingtime}>{ moment(item.msgDate).format('hh:mm A')}</Text>
                        </View>
                    :
                        <View>
                        <View style={styles.chatlongView}>
                          <Text style={styles.chattingtext}>{item.message}</Text>
                        </View>
                        <Text style={styles.chattingtime2}>{moment(item.msgDate).format('hh:mm A')}</Text>
                        </View>

                    }
                </View>
            );
    };

      const renderItem1 =({item,index}) =>{
      return(
        <View>
        {index ==0 &&
        <View style={styles.mainbrandsingl}>
          <View style={styles.dirspcView}>
            <Text style={styles.mybrdtxt}>My Brands</Text>
            <TouchableOpacity style={styles.allsebtn} onPress={() => props.navigation.navigate("Accountbrand")}>
              <Text style={styles.totalincometodayWIDRO}>SEE ALL</Text> 
            </TouchableOpacity>
          </View>
          <View style={styles.dirspcView}>
            <TouchableOpacity style={styles.heartratingView} onPress={() => props.navigation.navigate("Accountbrandlist")}>
              <View>
                <Image source={{uri: item.brandImage}} style={styles.produtbrandimage2} />
              </View>
              <View style={{alignSelf:'center'}}>
                <Text style={styles.droptxttt}>{item.brandName}</Text>
                <Text style={styles.dropcom}>store.dropship.com</Text>
              </View>
            </TouchableOpacity>
            <View style={{alignSelf:'center'}}>
              <View style={{flexDirection:'row',marginTop:'2%',}}>
                 <Image source={ImageIcons.redcolorbag} style={styles.bgsaimg}/>
                 <Text style={styles.optext}>0 products</Text>
              </View>
              <View style={{flexDirection:'row',marginVertical:'3%',}}>
                 <Image source={ImageIcons.rededit} style={styles.bgsaimg}/>
                 <Text style={styles.optext}>0 sales</Text>
              </View>
            </View>
            
          </View>
        </View>
      }
      </View>
      );
    }

    return (
         <View style={{flex:1}}>
         <StatusBar backgroundColor={'#B80000'} barStyle="dark-content" translucent={true} />
            <Shopheader />

       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} >

     
          
               <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%',marginTop:'9%'}}>
                 <Text style={{fontSize:40,color:'#b80000',fontFamily:'hinted-AvertaStd-Bold',}}>My Account</Text>
               </View>

               <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",paddingTop:"5%"}}>
               <TouchableOpacity onPress={() => props.navigation.navigate("Account")}>
              <Text style={{fontSize:16,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#999999"}}>Personal Details</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate("Accountstore")}>
              <Text style={{fontSize:16,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#1a1a1a"}}>My store</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate("Accountsum")}>
              <Text style={{fontSize:16,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#999999"}}>Account Summary</Text>
              </TouchableOpacity>
              </View>

               <View style={{flexDirection:'row',marginHorizontal:"3%",marginTop:"2%"}}>
              <View style={{borderBottomWidth:2,borderColor:"#999999",width:"35%"}}></View>
              <View style={{borderBottomWidth:2,borderColor:"#1A1A1A",width:"25%"}}></View>
              <View style={{borderBottomWidth:2,borderColor:"#999999",width:"40%"}}></View>
              </View>

              <View style={{alignItems:'center',}}>
              <FlatList
                data={props?.Brandlistdata || []}
                renderItem={renderItem1}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
              />
            </View>

             <View style={{flexDirection:'row',width:deviceWidth/1.1,backgroundColor:'#ffffff',padding:'4%',marginHorizontal:'4%',marginVertical:'5%',borderRadius:10,alignSelf:'center',justifyContent:'space-between'}}>
               <Text style={{fontSize:20,fontFamily:'hinted-AvertaStd-Semibold',marginLeft:5,color:'#1a1a1a'}}>Seller’s Dashboard</Text>
                <Image source={ImageIcons.rightpop} style={{width:10,height:15,marginTop:5}}/>
             </View>

              
                 
               </ScrollView>
             
             <View style={{ position:'absolute',zIndex:2001,right:20,bottom:70}}>
               <TouchableOpacity onPress={() => sethelppopup(true)}>
                    <Image source={ImageIcons.exporthelp} style={{width:50,height:50}}/>
                </TouchableOpacity>
               </View>

               { helppopup ==true &&
        <View style={{flex:1,backgroundColor:'#ffffff',margin:20,paddingVertical:10,borderRadius:10,zIndex:4001, position:'absolute',bottom:'10%'}}>
            
           
              <View style={styles.chatViewrose}>
                    
                <Text style={styles.Benrosetext}>Chat with customer support</Text>
                <TouchableOpacity style={{position:'absolute',right:15,top:5}} onPress={() => sethelppopup(false)}>
                    <Image source={ImageIcons.closepopup}  style={styles.sendmsg2} />
                </TouchableOpacity>
            </View>
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#ffffff', height:200}} >
            <View style={{marginVertical:'2%'}}>
                <FlatList
                    data={props?.getchatsupportlist1 || []}
                    renderItem={renderItem6}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                />
             </View>
           </ScrollView>
            <View style={[styles.accountmainview,{marginBottom:10, width:'100%'}]}>
            <View style={{width:'90%'}}>
                <TextInput  style={styles.chatinput}
                placeholder="Type here..."
                onChangeText={onChangeText3}
                value={text1}
                placeholderTextColor="#999999"
                />
            </View>
            <TouchableOpacity style={{position:'absolute',right:55,top:5}} onPress={() => handleSendRequestSubmit()}>
                    <Image source={ImageIcons.sendchat}  style={styles.sendmsg1} />
                </TouchableOpacity>
            </View>
        </View>
        }


            <Footer3 onSelection="5"  />
        </View>
    )
}


export default Accountstore