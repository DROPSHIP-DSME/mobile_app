import React, { useRef, useState,useEffect } from 'react';
import { Text, View,Image,FlatList,Dimensions,StatusBar,Picker,TextInput, ImageBackground,TouchableOpacity, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import styl from './styledrop';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import { phoneRegExp } from '../../services/helper';
import DropdownField from '../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../components/modals/Loader';
import Footer3 from '../../screens/auth/Footer3';
import AsyncStorage from '@react-native-community/async-storage'; 
import { useFocusEffect } from '@react-navigation/native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Shopheader from '../../screens/auth/Shopheader';

const editviewaddress = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

   
    useEffect(() => {
       props.getAllshop(1);
    }, [])
    useFocusEffect(() => {
         //props.getAllshop(1);
     })
    
    
     const deviceWidth = Dimensions.get('window').width; 
    const deviceHeight = Dimensions.get('window').height; 

    //Reference
    
    const [text1, onChangeText1] = React.useState("");
    const [helppopup, sethelppopup] = React.useState(false);
    const [starCount, setstarCount] = useState(5);
    const [selectedValue, setSelectedValue] = useState("java");
    const [showAlert, setshowAlert] = React.useState(false);

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [address1, setaddress1] = useState("");
    const [address2, setaddress2] = useState("");
    const [city, setcity] = useState("");
    const [country, setcountry] = useState("");
    const [zipcode, setzipcode] = useState("");
    
    const [showclassName, setshowclassName] = useState("#B80000");
     const handleScroll=(pageYOffset)=>{
        if (pageYOffset > 0) {
            setshowclassName('#B80000');  
        }else{
            setshowclassName('#B80000');
        }
    } 
   
   const handleSendRequestSubmit = async () => {
        Keyboard.dismiss();
        if (firstname == "") {
            Alert.alert('First name is required')
        }else if(lastname ==""){
            Alert.alert('Last name is required')
        }else if (address1 == "") {
            Alert.alert('Address 1 is required')
        }else if(city ==""){
             Alert.alert('City is required')
        }else if(zipcode ==""){
             Alert.alert('Zipcode is required')
        } else {
            let request = {
                "firstName":firstname,
                "lastName":lastname,
                "streetAdress":address1,
                "phoneNumber":address2,
                "city":city,
                "userId":props?.loginuserid,
                "country":country,
                "zipCode":zipcode,
            }
           props.saveaddress(request, props.navigation, "vendor",0);
           setTimeout(function(){ 
                props.getuseraddress(props?.loginuserid); 
                props.navigation.navigate("editaddress")
            },1000);
        }
    }

    
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
    }



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
          <StatusBar backgroundColor={showclassName} barStyle="dark-content" translucent={true} />
             <Shopheader />
             
            <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
             }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFFFFF'}} >
             
              <View style={{flexDirection:"row",marginHorizontal:"3%",marginVertical:"6%"}}>
              <Text style={{fontSize:14,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#999999"}}>PERSONAL DETAILS /</Text>
              <Text style={{fontSize:14,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#999999"}}> ADDRESSES /</Text>
              <Text style={{fontSize:14,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}> Add ADDRESS</Text>
              </View>
               
               <View style={{marginHorizontal:"3%"}}>
               <Text style={{fontSize:26,fontFamily:"hinted-AvertaStd-Regular",fontWeight:"bold"}}>Add Address</Text>
               </View>
               
                <View style={[styles.pickerViewshorttodaybrand,{marginTop:'7%',backgroundColor:"#e6e6e6",marginHorizontal:"3%",borderRadius:10}]}>
                    <TextInput 
                         placeholder="First Name"
                         placeholderTextColor="#1a1a1a"
                         onChangeText={(firstname) =>setfirstname(firstname)}
                         style={{color:'#333333',marginTop:5}}
                         paddingLeft={15}
                         value={firstname}
                    />
                </View>

                <View style={[styles.pickerViewshorttodaybrand,{marginTop:'7%',backgroundColor:"#e6e6e6",marginHorizontal:"3%",borderRadius:10}]}>
                    <TextInput 
                         placeholder="Last Name"
                         placeholderTextColor="#1a1a1a"
                         onChangeText={(lastname) =>setlastname(lastname)}
                         style={{color:'#333333',marginTop:5}}
                         paddingLeft={15}
                         value={lastname}
                    />
                </View>

                <View style={[styles.pickerViewshorttodaybrand,{marginTop:'7%',backgroundColor:"#e6e6e6",marginHorizontal:"3%",borderRadius:10}]}>
                    <TextInput 
                         placeholder="Address Line 1"
                         placeholderTextColor="#1a1a1a"
                         onChangeText={(address1) =>setaddress1(address1)}
                         style={{color:'#333333',marginTop:5}}
                         paddingLeft={15}
                         value={address1}
                    />
                </View>


                <View style={[styles.pickerViewshorttodaybrand,{marginTop:'7%',backgroundColor:"#e6e6e6",marginHorizontal:"3%",borderRadius:10}]}>
                    <TextInput 
                         placeholder="Address Line 2"
                         placeholderTextColor="#1a1a1a"
                         onChangeText={(address2) =>setaddress2(address2)}
                         style={{color:'#333333',marginTop:5}}
                         paddingLeft={15}
                         value={address2}
                    />
                </View>


                <View style={[styles.pickerViewshorttodaybrand,{marginTop:'7%',backgroundColor:"#e6e6e6",marginHorizontal:"3%",borderRadius:10}]}>
                    <TextInput 
                         placeholder="City"
                         placeholderTextColor="#1a1a1a"
                         onChangeText={(city) =>setcity(city)}
                         style={{color:'#333333',marginTop:5}}
                         paddingLeft={15}
                         value={city}
                    />
                </View>

                <View style={{marginHorizontal:'4%',marginTop:'7%'}}>
                 <View style={{height:55,width:deviceWidth/1.1,backgroundColor:'#e6e6e6',borderRadius:10,}}>
                      <Picker
                        selectedValue={selectedValue}
                        style={{ height: 55,marginHorizontal:10, width: '96%',color:'#4d4d4d',marginTop:0}}
                        onValueChange={(itemValue, itemIndex) =>setcountry(itemValue)}
                       >
                        <Picker.Item label="USA" value="+1" />
                        <Picker.Item label="INDIA" value="+91" />
                        <Picker.Item label="Ghana" value="+233" />
                        <Picker.Item label="Kanya" value="+270" />
                        <Picker.Item label="Canada" value="+1" />
                      </Picker>
                </View>
                
                </View>

                
                <View style={[styles.pickerViewshorttodaybrand,{marginTop:'7%',backgroundColor:"#e6e6e6",marginHorizontal:"3%",borderRadius:10}]}>
                    <TextInput 
                         placeholder="Zipcode"
                         placeholderTextColor="#1a1a1a"
                         onChangeText={(zipcode) =>setzipcode(zipcode)}
                         style={{color:'#333333',marginTop:5}}
                         paddingLeft={15}
                         value={zipcode}
                    />
                </View>



                <View style={{flexDirection:'row',marginHorizontal:'4%',marginTop:"10%"}}>
                    <View style={{height:15,width:15,backgroundColor:'#848484',borderRadius:3,}}></View>
                    <Text style={{fontSize:16,marginTop:-5,marginBottom:15,fontFamily:'hinted-AvertaStd-Regular',color:'#1a1a1a',marginLeft:5}}>Make default shipping method</Text>
                </View>
              
                <TouchableOpacity onPress={()=>{ handleSendRequestSubmit()}} style={{width:deviceWidth/1.1, backgroundColor:"#B80000",borderRadius:30,marginTop:"3%",height:63,marginLeft:"4%",marginBottom:"25%" }} >
                    <Text style={{textAlign:'center',color:"#FFFFFF",fontWeight:'bold',fontSize:18,top:18}}>SAVE CHANGES</Text> 
                </TouchableOpacity>
            
        </ScrollView>
        
    <Footer3 onSelection="5"/>
       
    <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="DROPSHIP"
          message="You need to login to access this screen!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Cancel"
          confirmText="Login"
          confirmButtonColor="#E22020"
          onCancelPressed={() => {
            setshowAlert(false)
          }}
          onConfirmPressed={() => {
             setshowAlert(false)
             navigation.navigate('Golive');
          }}
        />
    </KeyboardAvoidingView>
        
    )
}


export default editviewaddress