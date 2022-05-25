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
    const [showvisible, setshowvisible] = React.useState(false);
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
        <View style={{backgroundColor:showclassName,alignItems:'center',zIndex:1001,width:'100%',padding:'3.5%'}}>
            <View style={{flexDirection:'row',top:'5%',width:'100%',height:78}}>    
                        <View style={{width:'35%'}}>
                            {showclassName=='#B80000' ?
                                <Image source={ImageIcons.logored} style={{width:58,height:47}}/>
                            :
                                <Image source={ImageIcons.logored} style={{width:58,height:47}}/>
                            }
                        </View>
                        <View style={{width:'65%',flexDirection:'row',justifyContent:'space-between',marginRight:15}}>
                            <View style={[styles.pickerViewshorttoday,{width:'60%'}]}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 30, width: '100%',color:'#4d4d4d',}}
                                    onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                                >
                                   {branddata && branddata.map((item, index) => {

                                      return (
                                          <Picker.Item label={item.brandName} value={item.brandName} key={index} />
                                      )
                                  })}
                                  </Picker>
                                  <Text style={{color:'#ffffff',fontSize:14,marginLeft:-35,fontFamily:'hinted-AvertaStd-Semibold'}}>{selectedValue}.dropship.shopping</Text>
                            </View>

                        <TouchableOpacity onPress={() => navigation.navigate("Dashsetting")}>
                            <View style={{marginHorizontal:'3%'}}>
                                <Image source={ImageIcons.colortodayshoe} style={{width:50,height:50,marginTop:4}}/>
                            </View>
                        </TouchableOpacity>
                            <TouchableOpacity onPress={()=>openpopup()}>
                                <Image source={ImageIcons.menutoday} style={{width:18,height:20.6,marginTop:18}}/>
                            </TouchableOpacity>
                        </View>
           </View>


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

                                        

                                         <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
                            <Image source={ImageIcons.redsearchtoday}  style={{height:14,width:14,position:'absolute',top:18,marginLeft:16}} />
                        </View>

            </View>
        }
        </View>
         </View>
    )
}




export default Sellheader