import React, { useEffect,useRef, useState } from 'react';
import { Text, View,Image,TextInput, ImageBackground,FlatList,Picker,StatusBar,Dimensions,ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../../screens/common/styles';
import newstyles from '../../../screens/common/styles';
import { Colors, CommonStrings } from '../../common';
import ImageIcons from '../../../common/ImageIcons';
import { DatabaseIcon } from "react-native-heroicons/solid";
import InputField from '../../../components/forms/inputField';
import { RoundedButton } from '../../../components/forms/button';
import { phoneRegExp } from '../../../services/helper';
import DropdownField from '../../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../../components/modals/Loader';
import Swipeout from 'react-native-swipeout';
import HorizontalSlider from 'react-horizontal-slider';
import tw from 'twrnc';
import Smallbutton from '../../../components/dropshipbutton/Smallbutton';
import Sortorder from '../../../components/pickers/Sortorder';
import Salesyear from '../../../components/pickers/Salesyear';
import Footer2 from '../../../screens/common/Footer2';
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

 const options = [ { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' },{ label: '5', value: '5' },{ label: '6', value: '6' },{ label: '7', value: '7' },{ label: '8', value: '8' },{ label: '9', value: '9' } ]


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
        // if(userId!="" && userId!=undefined){
        //     await AsyncStorage.setItem('UserId',userId);
        //     await AsyncStorage.setItem('userLogin',"1");
        // }
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
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
        datasets: [{ data: [20, 45, 28, 80, 99, 73] }]
    };

    const updateorderStatus = (itemValue) => {
        setSelectedValue(itemValue)
    }

    const DATA = [{ image:ImageIcons.redincome }];

const renderItem2 = ({ item,index }) => {
   return(

       <View style={tw.style('max-w-7xl bg-white overflow-hidden rounded-lg p-3 md:p-4 m-4')}>
         <View style={tw.style('flex items-center flex-row justify-between')}>
             <Text style={tw.style('mt-1 mb-5')}>
                <DatabaseIcon color="red" fill="#B80000" size={32} />
             </Text>
          </View>

          <View style={tw.style('flex justify-between')}>
              <View>
                <Text style={tw.style('font-bold text-lg text-gray-700 mt-1 md:mt-2 mb-1')}>Sales Earnings</Text>
                <View style={tw.style('flex-row h-14 mb-1')}>
                  <View style={tw.style('flex-1 w-2/3')}>
                    <Text style={tw.style('text-4xl font-bold text-gray-800')}>${props?.getlistselldeshboard?.income}</Text>
                  </View>
                  <View style={tw.style('flex-none')}>
                    <Text style={tw.style('items-center text-lg font-semibold text-green-600')}>+32%</Text>
                  </View>
                </View>
              </View>
               { props?.getlistselldeshboard?.income>0 &&
                <Text style={tw.style('items-center text-lg font-semibold text-green-600')}>+32%</Text>
                }
          </View>

        </View>
    );
    }

    const renderItem3 = ({ item,index }) => {
       return(
           <View>
              <View style={tw.style('flex flex-row justify-between')}>
                   <Text style={tw`text-base font-bold text-gray-800`}>{item?.loggedInUserId?.userName}</Text>
                   <View style={tw`inline-flex items-center px-2.5 py-0.5 rounded-md`}>
                    <Text style={tw`text-xs font-medium bg-blue-100 text-blue-800`}>Processing</Text>
                   </View>
               </View>
               <View style={tw`flex flex-row`}>
                   <Text style={tw`text-base text-gray-700`}>{item?.loggedInUserId?.userName}</Text>
               </View>
               <View style={tw`flex flex-row`}>
                   <Text style={tw`text-base text-gray-700 mr-2`}>Order number:</Text>
                   <Text style={tw`text-base text-blue-700`}>{item?.orderNumber}</Text>
               </View>
            </View>
        );
      }

     const renderItem4 = ({ item,index }) => {
       return(

              <View>
                  <View style={tw`flex flex-row mb-3`}>
                     <Image source={item.image} style={{width:24,height:24,}}/>
                     <Text style={tw`text-base font-bold text-gray-700 ml-2`}>{item.text}</Text>
                  </View>
                  <View style={tw`flex flex-row justify-between mb-3`}>
                     <Text style={tw`text-base font-bold text-blue-700`}>Orders: {item.text1}</Text>
                     <Text style={tw`text-base font-bold text-green-700`}>Revenue: ${item.text1}</Text>
                  </View>
              </View>

        );
      }


    return (
     <View style={{flex:1}}>


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

                <View style={tw.style('max-w-7xl bg-white overflow-hidden rounded-lg p-4 m-4')}>
                  <View style={tw.style('flex items-center flex-row justify-between mb-3')}>
                   <View>
                      <Text style={tw.style('text-lg text-gray-700 font-bold')}>Recent Orders</Text>
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
                  <View style={tw.style('items-center')}>
                    <Text style={tw.style('text-base font-bold text-gray-700 my-3')}>No Record Found</Text>
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

                <View style={tw.style('max-w-7xl bg-white overflow-hidden rounded-lg p-4 m-4')}>
                   <View style={tw.style('flex items-center flex-row justify-between mb-3')}>
                       <View>
                         <Text style={tw.style('font-bold text-xl text-gray-700 pl-2')}>Sales Statistics</Text>
                       </View>

                        <Sortorder text="Sort" options={options} onSelect={(checked) => updateorderStatus(checked)} />
                
                  </View>

                  <BarChart
                      data={data}
                      width={Dimensions.get("window").width - 65}
                      height={220}
                      yAxisLabel="$"
                      chartConfig={{
                        backgroundColor: "#12cc89",
                        backgroundGradientFrom: "#ffffff",
                        backgroundGradientTo: "#ffffff",
                        decimalPlaces: 1, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(18, 201, 9, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

                      }}
                      style={tw.style('mr-2'),{
                        //marginVertical: 4,
                        //marginHorizontal:'1%'
                      }}
                      propsForDots={{
                          r: "2",
                          strokeWidth: "1",
                          stroke: "#ffa726"
                        }}
                      propsForVerticalLabels={{
                        marginTop: 4,
                      }}
                      verticalLabelRotation={0}
                      />
                  </View>

                <View style={tw.style('max-w-7xl bg-white overflow-hidden rounded-lg p-4 m-4')}>
                    <View>
                      <Text style={tw.style('text-xl text-center font-bold text-gray-700')}>Livestream Viewers</Text>
                      </View>
                      <View style={tw.style('items-center mr-8')}>
                      <ProgressChart
                        data={data1}
                        width={deviceWidth/1.20}
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
                </View>

                 <View style={tw.style('max-w-7xl bg-white overflow-hidden rounded-lg p-4 m-4')}>
                  <View style={tw.style('flex items-center flex-row justify-between mb-3')}>
                  <View>
                    <Text style={tw.style('text-lg text-gray-700 font-bold')}>Popular Products</Text>
                    </View>
                     {props?.gettopsellproduct?.length>0 &&
                       <Smallbutton
                         text="See all products"
                         onPress={() => props.navigation.navigate("Dashproduct")}
                       />
               }
                  </View>
                   {props?.gettopsellproduct?.length>0 ?
                   <View style={styles.salesViewTODAYprod}>
                       <Text style={styles.seriestext}>Product</Text>
                       <Text style={styles.seriestext}>Category</Text>
                   </View>
                   :
                <View style={tw.style('items-center')}>
                   <Text style={tw.style('text-base font-bold text-gray-700 my-3')}>No Record Found</Text>
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
