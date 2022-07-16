import React, { useRef, useState,useEffect } from 'react';
import { Text, View,Image,TextInput,TouchableOpacity, Dimensions,ImageBackground, Picker,ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import { phoneRegExp } from '../../services/helper';
import DropdownField from '../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../components/modals/Loader';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import Whitelogo from '../../components/baseassests/Whitelogo';
import { SearchIcon } from "react-native-heroicons/solid";

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


const Sellheader = (props) => {

    const {
        values,
        errors,
        handleChange,
        branddata,
        handleSubmit,
    } = props;

    const navigation = useNavigation();

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();
    const brandId = props?.route?.params?.brandId;
    const brandName = props?.route?.params?.brandName;

    // Local states
    const [wayToContact, setWayToContact] = useState("Phone");
    const [showvisible, setshowvisible] = React.useState(true);
    const [visible1, setVisible1] = React.useState(true);
    const [selectedValue, setSelectedValue] = useState("sh");
    const [showclassName, setshowclassName] = useState("#B80000");
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
    useEffect(() => {

      //rootprops.Brandslist();
    }, [])


    const openpopup = () => {
        if(showvisible==true){
            setshowvisible(false);
        }else {
            setshowvisible(true);
        }
        //setVisible1(true);
    }

    const closepopup = () => {
        setshowvisible(false)
    }

    return (
        <View>
        <View style={tw.style('w-full p-4 z-50'),{backgroundColor:showclassName}}>



         { showvisible == true &&
                <View style={{marginHorizontal:'5%',paddingTop:'10%'}}>
                         <View style={{flexDirection:'row',backgroundColor:'#b80000',width:'100%',justifyContent:'space-between',marginHorizontal:'4%'}}>
                                  <View>

                                     <TouchableOpacity  onPress={() => navigation.navigate("Overview")}  style={{flexDirection:'row',marginVertical:'15%'}}>
                                       <Image source={ImageIcons.hometoday}  style={{height:21,width:21}} />
                                       <Text style={{color:'#ffffff',fontSize:16,marginLeft:'8%'}}>Home</Text>
                                     </TouchableOpacity>

                                     <TouchableOpacity  onPress={() => navigation.navigate("Dashproduct")} style={{flexDirection:'row',marginVertical:'15%'}}>
                                       <Image source={ImageIcons.producttoday}  style={{height:21,width:21}} />
                                       <Text style={{color:'#ffffff',fontSize:16,marginLeft:'8%'}}>Products</Text>
                                     </TouchableOpacity>
                                      <TouchableOpacity onPress={() => navigation.navigate("Dashorder")} style={{flexDirection:'row',marginVertical:'15%'}}>
                                       <Image source={ImageIcons.ordertoday}  style={{height:21,width:21}} />
                                       <Text style={{color:'#ffffff',fontSize:16,marginLeft:'8%'}}>Orders</Text>
                                     </TouchableOpacity>
                                      <TouchableOpacity onPress={() => navigation.navigate("Dashchats")} style={{flexDirection:'row',marginVertical:'15%'}}>
                                       <Image source={ImageIcons.chattoday}  style={{height:21,width:21}} />
                                       <Text style={{color:'#ffffff',fontSize:16,marginLeft:'8%'}}>Chats</Text>
                                     </TouchableOpacity>


                                      <TouchableOpacity onPress={() => navigation.navigate("Dashsale")} style={{flexDirection:'row',marginVertical:'15%'}}>
                                       <Image source={ImageIcons.saletoday}  style={{height:21,width:21}} />
                                       <Text style={{color:'#ffffff',fontSize:16,marginLeft:'8%'}}>Sales Analytic</Text>
                                     </TouchableOpacity>
                                  </View>

                                   <View>
                                         <TouchableOpacity onPress={() => navigation.navigate("Dashadvertise")} style={{flexDirection:'row',marginVertical:'15%'}}>
                                           <Image source={ImageIcons.advertisetoday}  style={{height:21,width:21}} />
                                           <Text style={{color:'#ffffff',fontSize:16,marginLeft:'8%'}}>Advertisements</Text>
                                         </TouchableOpacity>
                                         <TouchableOpacity onPress={() => navigation.navigate("Dashsubscribe")} style={{flexDirection:'row',marginVertical:'15%'}}>
                                           <Image source={ImageIcons.subscribetoday}  style={{height:21,width:21}} />
                                           <Text style={{color:'#ffffff',fontSize:16,marginLeft:'8%'}}>Subcriptions</Text>
                                         </TouchableOpacity>
                                          <TouchableOpacity onPress={() => navigation.navigate("Dashaccount")}  style={{flexDirection:'row',marginVertical:'15%'}}>
                                           <Image source={ImageIcons.accounttoday}  style={{height:21,width:21}} />
                                           <Text style={{color:'#ffffff',fontSize:16,marginLeft:'8%'}}>My Account</Text>
                                         </TouchableOpacity>
                                          <TouchableOpacity onPress={() => navigation.navigate("Dashsetting")}  style={{flexDirection:'row',marginVertical:'15%'}}>
                                               <Image source={ImageIcons.settingtoday}  style={{height:21,width:21}} />
                                               <Text style={{color:'#ffffff',fontSize:16,marginLeft:'8%'}}>Setting</Text>
                                         </TouchableOpacity>



                                         <TouchableOpacity onPress={() => navigation.navigate("watchlist")}>
                                          <View style={{flexDirection:'row',marginVertical:'7%'}}>
                                               <Image source={ImageIcons.exittoday}  style={{height:21,width:21}} />
                                               <Text style={{color:'#ffffff',fontSize:16,marginLeft:'8%'}}>Exit Dashboard</Text>
                                         </View>
                                         </TouchableOpacity>
                                  </View>
                        </View>

                        <View style={{marginVertical:'10%'}}>
                            <TextInput style={{height:50,width:deviceWidth/1.1,backgroundColor:'#ffffff',borderRadius:10,alignSelf:'center'}}
                              placeholder="Search"
                              placeholderTextColor="#848484"
                              paddingLeft={35}
                            />
                      
                            <View style={tw`absolute top-4 ml-4`}>
                              <SearchIcon color="white" fill="White" size={14} />
                            </View>
                        </View>

            </View>
        }
        </View>
         </View>
    )
}




export default Sellheader
