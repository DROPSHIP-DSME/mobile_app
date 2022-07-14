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
import Sortorder from '../../../components/pickers/Sortorder';
import Sortfilter from '../../../components/pickers/Sortfilter';
import Selectall from '../../../components/pickers/Selectall';
import Editbutton from '../../../components/pickers/Editbutton';
import Deletebutton from '../../../components/pickers/Deletebutton';

const options = [ { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' },{ label: '5', value: '5' },{ label: '6', value: '6' },{ label: '7', value: '7' },{ label: '8', value: '8' },{ label: '9', value: '9' } ]

import Modal from 'react-native-modal';
import tw from 'twrnc';


import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const Dashchats = (props) => {

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
    const [isModalVisible, setModalVisible] = useState(false);
    const [visible, setVisible] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState("1");
    const [showclassName, setshowclassName] = useState("#B80000");


    const openpopup = () => {
        setVisible(true)
    };

    const closepopup = () => {
         setVisible(false)
    }

    const updateorderStatus = (itemValue) => {
        setSelectedValue(itemValue)
    }
    
    const DATA3 = [
       {
         image:ImageIcons.girlcent,
        text1:"GSHM8U00S0004KH ",
        text:"Amy White ",
        text2:"Pending ",
       }
     ];

    const renderItem3 = ({ item,index }) => {
        return(
           <View>

            <TouchableOpacity  onPress={() => props.navigation.navigate("Dashreturn")} style={tw`flex flex-row justify-between mt-10 bg-whate p-1`}>
                     <View style={tw`flex flex-row`}>
                      <Text style={tw`ml-2 text-base text-gray-700 leading-4`}>{item.text1}</Text>
                     </View>
                       <Text style={tw`text-base text-gray-600 leading-4`}>{item.text}</Text>

            </TouchableOpacity>


            </View>
        );
    }



    return (
         <View style={tw`flex flex-1`}>


       <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
    }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#f2f2f2'}} >

               <View style={tw`flex-row justify-between mx-4 mt-10 mb-6`}>
                 <Text style={tw`text-3xl text-gray-700`}>Chats (0)</Text>
               </View>


                  <View style={tw.style('flex flex-row mx-4')}>
                    <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />

                    <Sortfilter
                      text="Filter"
                    />

                  </View>

                  <View style={tw.style('flex flex-row m-4 ')}>
                      <Selectall
                        text="Select All"
                      />

                      <Editbutton navigation={props.navigation} page='Dashachats' />

                      <Deletebutton />

                  </View>

                    <View style={tw.style('bg-white overflow-hidden shadow rounded-md mx-4 py-3 my-10')}>
                      <View style={tw.style('px-2 py-5')}>
                          <View style={tw`flex flex-row justify-between bg-gray-200 mx-2 px-3 rounded-md items-center h-15`}>
                             <Text style={tw`text-base leading-3 text-gray-600`}>Order Number</Text>
                             <Text style={tw`text-base leading-3 text-gray-600`}>Message</Text>
                          </View>
                          <View style={tw`mx-2`}>
                              <FlatList
                              data={DATA3}
                              renderItem={renderItem3}
                              keyExtractor={item => item.id}
                              showsHorizontalScrollIndicator={false}
                              horizontal={false}
                              />
                          </View>
                      </View>
                    </View>

               </ScrollView>
            <Footer2 />
        </View>
    )
}


export default Dashchats
