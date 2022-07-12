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
          
                

               <View style={styles.stsview}>
                 <Text style={styles.odrstxt}>ORDER STATUS</Text>
               </View>

             
               <View style={[styles.pickerViewshorttodayagainpending,{marginHorizontal:'5%',marginTop:'2%'}]}>
                     <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />
                </View>

              
               
              <View style={[styles.odrmainview,{marginTop:30}]}>
                <Text style={styles.dtlodrtxt}>Order Details: {props?.getorderlist?.data?.orderStatus}</Text>
                <FlatList
                  data={props?.getorderlist?.ItemList || []}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                />
              </View>
               <View style={styles.dtlvw}>
                
                <View style={styles.dirspcView}>
                <Text style={styles.dtlodrtxt}>Buyer Details</Text>
                {/* <TouchableOpacity onPress={() => props.navigation.navigate("Dashreturn")} style={{backgroundColor:'#B80000',width:130,borderRadius:20,padding:8,}}>
                      <Text style={styles.totalincometodayWIDRO}>SEND MESSAGE</Text> 
                   </TouchableOpacity>*/}
                </View>

               <View style={styles.textviewpop1}>
                  <Text style={styles.proregultxt}>Name</Text>
                   <Text style={styles.ustxt}>{props?.getorderlist?.data?.firstName} {props?.getorderlist?.data?.lastName}</Text>
               </View>
               <View style={styles.textviewpop1}>
                  <Text style={styles.proregultxt}>phoneNumber</Text>
                   <Text style={styles.ustxt}>{props?.getorderlist?.data?.phoneNumber}</Text>
               </View>
                <View style={styles.textviewpop1}>
                  <Text style={styles.proregultxt}>Address</Text>
                  <Text style={{color:'#333333'}}>{props?.getorderlist?.data?.zipCode}, {props?.getorderlist?.data?.city} {props?.getorderlist?.data?.country}, {props?.getorderlist?.data?.streetAdress}</Text>
                </View>
               
              </View>
              


               <View style={styles.dtlvw}>
                
                <Text style={styles.dtlodrtxt}>Shipping Details</Text>
                 
               <View style={styles.textviewpop1}>
                  <Text style={styles.mtdtxt}>Shipping Method</Text>
                   <Text style={styles.ustxt}>Standard</Text>
               </View>
               <View style={styles.textviewpop1}>
                  <Text style={styles.proregultxt}>Address</Text>
                   <Text style={{color:'#333333'}}>{props?.getorderlist?.data?.zipCode}, {props?.getorderlist?.data?.city} {props?.getorderlist?.data?.country}, {props?.getorderlist?.data?.streetAdress}</Text>
               </View>
               
              </View>



               <View style={styles.botmdtlvw}>
                <Text style={styles.dtlodrtxt}>Payment Details</Text>
                
               <View style={styles.textviewpop1}>
                  <Text style={styles.proregultxt}>Subtotal</Text>
                   <Text style={styles.shptxt}>${props?.getorderlist?.data?.orderAmount}</Text>
               </View>
               <View style={styles.textviewpop1}>
                  <Text style={styles.proregultxt}>Taxes</Text>
                   <Text style={styles.shptxt}>$0</Text>
               </View>
                <View style={styles.textviewpop1}>
                  <Text style={styles.proregultxt}>Shipping</Text>
                   <Text style={styles.shptxt}>$0</Text>
               </View>

               <View style={styles.grndline}></View>

                <View style={styles.textviewpop1}>
                  <Text style={styles.proregultxt}>Grand Total</Text>
                   <Text style={styles.ustxt}>${props?.getorderlist?.data?.orderAmount}</Text>
               </View>
                 
              </View>
            </ScrollView>    
            <Footer2 onSelelection="2"  /> 
        </View>
    )
}
export default Dashdetail