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
import tw from 'twrnc'


const options = [
      {
        label: 'Prcoessing',
        value: 'Prcoessing'
      },
      {
        label: 'Shipped',
        value: 'Shipped'
      },
      {
        label: 'Delivered',
        value: 'Delivered'
      },
      {
        label: 'Cancelled',
        value: 'Cancelled'
      }
    ]
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const Dashdetail = (props) => {

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
    const orderNumber = props?.route?.params?.orderNumber;


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
    const [selectedValue, setSelectedValue] = useState("Delivered");
    const [showclassName, setshowclassName] = useState("#B80000");

   useEffect(() => {
        props.getorderdetail(orderNumber);
        console.log('getorderlist',props.getorderdetail);
    }, [])

    const updateorderStatus = (itemValue) => {
        setSelectedValue(itemValue)
        props.updateorderdetail(orderNumber,itemValue);
    }


    const renderItem = ({ item,index }) => {
        return(
            <View style={styles.heartratingView}>
                <View style={{marginHorizontal:10,padding:5,alignItems:'center'}}>
                    <Image source={{uri: item?.productId?.productImage}} style={{width:80,height:80,marginVertical:5,borderRadius:5,alignSelf:'center'}}/>
                    <Text style={styles.pdnme}>{item?.productId?.productName}</Text>
                    <View style={styles.heartratingView}>
                       <Text style={styles.pdclr}>Price: </Text>
                       <Text style={styles.pdnme}>${item.productPrice}</Text>
                    </View>
                    <View style={styles.heartratingView}>
                       <Text style={styles.pdclr}>Quantity:</Text>
                       <Text style={styles.pdnme}> {item.productQuantity}</Text>
                    </View>
                </View>
            </View>
        );
    }



    return (
         <View style={{flex:1}}>

       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} >



               <View style={tw`mt-10 mx-3`}>
                 <Text style={tw`text-3xl text-gray-900 mx-3 mb-3`}>Product Info</Text>
               </View>


              <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 mt-10')}>
                <View style={tw.style('px-2 py-5')}>
                    <Text style={tw`text-xl text-gray-900 mx-3 mb-3`}>Products Ordered: {props?.getorderlist?.data?.orderStatus}</Text>
                    <FlatList
                      data={props?.getorderlist?.ItemList || []}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                      showsHorizontalScrollIndicator={false}
                      horizontal={true}
                    />
                </View>
              </View>

              <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 mt-10')}>
                <View style={tw.style('px-6 py-5')}>
                    <View style={styles.dirspcView}>
                      <Text style={tw`text-xl text-gray-900 mb-3`}>Buyer Details</Text>
                      {/* <TouchableOpacity onPress={() => props.navigation.navigate("Dashreturn")} style={{backgroundColor:'#B80000',width:130,borderRadius:20,padding:8,}}>
                            <Text style={styles.totalincometodayWIDRO}>SEND MESSAGE</Text>
                         </TouchableOpacity>*/}
                    </View>

                   <View style={tw`flex flex-row justify-between items-center `}>
                      <Text style={tw`text-base text-gray-700`}>Name:</Text>
                       <Text style={tw`text-base text-gray-900`}>{props?.getorderlist?.data?.firstName} {props?.getorderlist?.data?.lastName}</Text>
                   </View>
                   <View style={tw`flex flex-row justify-between items-center my-1.5`}>
                      <Text style={tw`text-base text-gray-700`}>phoneNumber:</Text>
                       <Text style={styles.ustxt}>{props?.getorderlist?.data?.phoneNumber}</Text>
                   </View>
                    <View style={tw`flex flex-row justify-between items-center  my-1.5`}>
                      <Text style={tw`text-base text-gray-700`}>Address:</Text>
                      <Text style={tw`text-base text-gray-900`}>{props?.getorderlist?.data?.zipCode}, {props?.getorderlist?.data?.city} {props?.getorderlist?.data?.country}, {props?.getorderlist?.data?.streetAdress}</Text>
                    </View>
                </View>
              </View>



              <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 mt-10')}>
                <View style={tw.style('px-6 py-5')}>
                      <Text style={tw`text-xl text-gray-900 mb-3`}>Shipping Details</Text>

                     <View style={tw`flex flex-row justify-between items-center my-1.5`}>
                        <Text style={tw`text-base text-gray-700`}>Shipping Method:</Text>
                         <Text style={tw`text-base text-gray-900`}>Standard</Text>
                     </View>
                     <View style={tw`flex flex-row justify-between items-center my-1.5`}>
                        <Text style={tw`text-base text-gray-700`}>Address:</Text>
                         <Text style={tw`text-base text-gray-900`}>{props?.getorderlist?.data?.zipCode}, {props?.getorderlist?.data?.city} {props?.getorderlist?.data?.country}, {props?.getorderlist?.data?.streetAdress}</Text>
                     </View>
                </View>
              </View>



              <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 my-10')}>
                <View style={tw.style('px-6 py-5')}>
                      <Text style={tw`text-xl text-gray-900 mb-3`}>Payment Details</Text>

                     <View style={tw`flex flex-row justify-between items-center my-1.5`}>
                        <Text style={tw`text-base text-gray-700`}>Subtotal:</Text>
                         <Text style={tw`text-lg text-gray-900`}>${props?.getorderlist?.data?.orderAmount}</Text>
                     </View>
                     <View style={tw`flex flex-row justify-between items-center my-1.5`}>
                        <Text style={tw`text-base text-gray-700`}>Taxes</Text>
                         <Text style={tw`text-lg text-gray-700`}>$0</Text>
                     </View>
                      <View style={tw`flex flex-row justify-between items-center my-1.5`}>
                        <Text style={tw`text-base text-gray-700`}>Shipping:</Text>
                         <Text style={tw`text-lg text-gray-700`}>$0</Text>
                     </View>

                     <View style={styles.grndline}></View>

                      <View style={tw`flex flex-row justify-between items-center my-1.5`}>
                        <Text style={tw`text-2xl text-gray-900`}>Grand Total</Text>
                         <Text style={tw`text-2xl text-gray-900`}>${props?.getorderlist?.data?.orderAmount}</Text>
                     </View>
                </View>
              </View>


            </ScrollView>
            <Footer2 onSelelection="2"  />
        </View>
    )
}
export default Dashdetail
