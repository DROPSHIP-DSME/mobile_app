import React, { useRef, useState ,useEffect} from 'react';
import { Text, View,TouchableOpacity,FlatList,Picker, Image,TextInput, ImageBackground,Dimensions, ScrollView, Alert, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import * as Yup from 'yup';
import styles from '../../../screens/common/styles';
import { Colors, CommonStrings } from '../../../common'
import ImageIcons from '../../../common/ImageIcons'
import { RadioButton ,Provider ,Modal, Portal, Button,} from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Footer2 from '../../../screens/common/Footer2';
import tw from 'twrnc';
import { PlayIcon } from "react-native-heroicons/solid";
import Editbutton from '../../../components/pickers/Editbutton';
import Deletebutton from '../../../components/pickers/Deletebutton';

const ProductDetails = (props) => {
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

    // Local states
    const [checked, setChecked] = React.useState('first');
    const deviceHeight = Dimensions.get('window').height;
    const deviceWidth = Dimensions.get('window').width;
    const productId = props?.route?.params?.productId;
    const [visible, setVisible] = React.useState(false);
    const [starCount, setstarCount] = useState(5);

    useEffect(() => {
        props.getAllproductdetails(productId);
    }, [])

    const openpopup = () => {
        setVisible(true)

        }
            const closepopup = () => {
          setVisible(false)
        }

        const ratingCompleted = (ratingdata) => {
            console.log('rating',ratingdata)
           if(ratingdata!="" && ratingdata!=undefined){
            setstarCount(ratingdata)
           }
        }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>

            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} >


             <View style={tw`mt-10 mx-3`}>


             <View style={tw`flex flex-row mb-3 mx-3`}>
                {props?.getlistproductdetails?.ProductImages?.length>0 ?
                <FlatListSlider
                    data={props?.getlistproductdetails?.ProductImages}
                    height={300}
                    timer={5000}
                    imageKey={'Image'}
                    contentContainerStyle={{paddingHorizontal: 1,resizeMode:'cover'}}
                    indicatorContainerStyle={{position:'absolute', bottom: 20,left:20}}
                    indicatorActiveColor={'#8A8A8A'}
                    indicatorInActiveColor={'#ffffff'}
                    indicatorActiveWidth={5}
                    animation
                />
                :
                <View style={tw`justify-center items-center`}>
                  <Image source={{ uri: props?.getlistproductdetails?.data?.productImage }} style={tw.style('w-full bg-gray-200 h-64 rounded-lb', { width: deviceWidth / 1.1 })} />
                  <View style={tw.style('absolute m-[40%]')}>
                    <PlayIcon color="white" fill="black" size={96} />
                  </View>
                </View>
                }
             </View>


               <View style={tw.style('flex flex-row mx-5 justify-between mt-2 items-center')}>
                 <View>
                   <Text style={tw.style('text-lg text-gray-600')}>{props?.getlistproductdetails?.data?.productName}</Text>
                   <Text style={tw.style('text-2xl font-bold text-gray-600')}>${props?.getlistproductdetails?.data?.productPrice}</Text>
                 </View>

                  <View style={tw`items-center`}>
                   <Editbutton onPress={() => openpopup()} />
                   <View style={tw`mt-3`}>
                    <Deletebutton />
                   </View>
                  </View>
               </View>


                <View style={tw.style('flex flex-row mt-3 mx-3')}>
                  <View style={tw.style('mt-3')}>
                    <Image source={{ uri: props?.getlistproductdetails?.getbrands?.brandImage }} style={tw.style('w-14 h-14 rounded-full bg-gray-500')} />
                  </View>

                  <View style={tw.style('pt-2.5 pl-2.5')}>
                    <Text style={tw.style('text-[#1A1A1A] text-sm font-bold')}>{props?.getlistproductdetails?.getbrands?.brandName}</Text>
                    <View style={tw.style('flex flex-row')}>
                      <TouchableOpacity style={tw.style('mt-1 mr-2 py-1.5 px-3.3 bg-[#B80000] rounded-full')}>
                        <Text style={tw.style('text-center text-white text-xs font-bold')}>FOLLOW</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={tw.style('mt-1 mr-2 py-1.5 px-3.3 bg-[#4AFFBD] rounded-full')}>
                        <Text style={tw.style('text-center text-gray-700 text-xs font-bold')}>OPEN STORE</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                </View>


               <View style={tw.style('border-b my-8 mx-4 border-[#B6B6B6]')}></View>
               <View style={tw.style('mx-4')}>
                 <Text style={tw.style('text-gray-700 text-2xl font-bold')}>Product Details</Text>
                 <Text style={tw.style('text-[#1A1A1A] text-lg font-normal')}>{props?.getlistproductdetails?.data?.productDescription}</Text>
               </View>

            {/*<View style={{flexDirection:'row',marginHorizontal:'4%',marginTop:'4%'}}>
               <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Bold',}}>Color :</Text>
                <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Regular',marginLeft:5}}>{props?.getlistproductdetails?.data?.productColor}</Text>
             </View>

             <View style={{flexDirection:'row',marginHorizontal:'4%',marginVertical:'2%'}}>
              <View style={{height:20,width:20,borderRadius:10,backgroundColor:`${props?.getlistproductdetails?.data?.productColor}`}}></View>
             </View>


         <View style={{flexDirection:'row',marginBottom:'26%',marginTop:'5%'}}>
            <View style={{marginHorizontal:'4%',marginVertical:'3%'}}>
              <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Bold',}}>Size</Text>
             <View style={{flexDirection:'row'}}>
                <View style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,padding:9,}}>
                  <Text style={{textAlign:'center',color:'#4d4d4d',fontSize:16,fontFamily:'hinted-AvertaStd-Semibold'}}>{props?.getlistproductdetails?.data?.productSize}</Text>
                </View>

             </View>
            </View>

             <View style={{marginVertical:'3%',marginLeft:'6%'}}>
              <Text style={{fontSize:18,fontFamily:'hinted-AvertaStd-Bold',}}>Quantity</Text>

                <View style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,padding:9,}}>
                  <Text style={{textAlign:'center',color:'#4d4d4d',fontSize:16,fontFamily:'hinted-AvertaStd-Semibold'}}>{props?.getlistproductdetails?.data?.productInventory}</Text>
                </View>
            </View>
         </View>*/}

    </View>
    </ScrollView>

     <Footer2 onSelelection="4"  />
    </KeyboardAvoidingView>
    )
}
export default ProductDetails