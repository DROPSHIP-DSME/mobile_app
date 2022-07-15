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
import Footer3 from '../../../screens/common/Footer3';
import tw from 'twrnc';
import Smallbutton from '../../../components/dropshipbutton/Smallbutton';
import { ShoppingBagIcon } from "react-native-heroicons/solid";
import { TagIcon } from "react-native-heroicons/solid";


import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const Accountbrand = (props) => {

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
    const [text1, onChangeText3] = React.useState("");
    const [helppopup, sethelppopup] = React.useState(false);
    const [showclassName, setshowclassName] = useState("#B80000");

    const renderItem = ({ item }) => {
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
    }

    const renderItem1 =({item,index}) =>{

      return(
        <View style={tw`mt-6 mx-2 bg-gray-100 p-2 rounded-lg`}>

            <TouchableOpacity style={tw.style('items-center',{width:deviceWidth/2.4})} onPress={() => props.navigation.navigate("Accountbrandlist",{brandId:item._id})}>
                <Image source={{uri: item.brandImage}} style={tw`w-full h-50 border-7 items-center`} />

                <Text style={tw`text-base text-gray-700 my-1 text-center`}>{item.brandName}</Text>
                <Text style={tw`text-sm text-blue-700 text-center`}>store.dropship.com</Text>
            </TouchableOpacity>


            <View style={tw`items-center`}>
              <View style={tw`flex flex-row mt-4 items-center`}>
                  <ShoppingBagIcon color="red" fill="red" size={18} />
                 <Text style={tw`text-base text-gray-700 ml-3`}>0 products</Text>
              </View>
              <View style={tw`flex-row items-center`}>
                 <TagIcon color="red" fill="red" size={18} />
                 <Text style={tw`text-lg text-gray-700 ml-3`}>0 sales</Text>
              </View>
            </View>

              <Text style={tw`text-2xl text-gray-700 font-smibold text-center my-2`}>My Brands</Text>

        </View>
      );
    }


    return (
         <View style={{flex:1}}>

       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} >

               <View style={tw`flex flex-row justify-betwwen mx-4 my-6`}>
                 <Text style={tw`text-3xl text-gray-700`}>My Brands</Text>
               </View>


            <View style={{marginHorizontal:'2%',marginBottom:'18%'}}>
              <FlatList
                data={props?.Brandlistdata || []}
                renderItem={renderItem1}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
              />
            </View>

              <TouchableOpacity onPress={()=>props.navigation.navigate("CreateStore")} style={{backgroundColor:'#b80000',marginBottom:'20%',width:deviceWidth/1.1,borderRadius:30,padding:'5%',alignSelf:'center',marginTop:'8%'}}>
                <Text style={styles.totalincometodaycompaign}>ADD A NEW BRAND</Text>
              </TouchableOpacity>



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
                    renderItem={renderItem}
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

             <Footer3 onSelection="5"/>
        </View>
    )
}


export default Accountbrand
