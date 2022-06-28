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
import Shopheader from '../../screens/auth/Shopheader';
import { Rating, AirbnbRating } from 'react-native-ratings';


const editprofile = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

   
    useEffect(() => {
       //props.editUser();
       props.getprofileuser(props?.loginuserid); 

    }, [])

    useFocusEffect(() => {
         //props.getAllshop(1);
     })
    
    
     const deviceWidth = Dimensions.get('window').width; 
    const deviceHeight = Dimensions.get('window').height; 

    //Reference
   
    // Local states
    
    const [number, onChangeNumber] = React.useState(props?.getprofileuserlist?.phone);
    const [Email, onChangeEmail] = React.useState(props?.getprofileuserlist?.email);
    const [lastname, onChangelastname] = React.useState(props?.getprofileuserlist?.lastName);
    const [name, onChangeName] = React.useState(props?.getprofileuserlist?.userName);
    const [text1, onChangeText1] = React.useState("");
    const [helppopup, sethelppopup] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    const [showAlert, setshowAlert] = React.useState(false);
    


    const handleSendRequestSubmit = async () => {
        Keyboard.dismiss();
        if (name == "") {
            Alert.alert('First name is required')
        }else if(lastname ==""){
            Alert.alert('Last name is required')
        }else if (Email == "") {
            Alert.alert('Email is required')
        }else if(number ==""){
             Alert.alert('Phone Number is required')
        } else {
            let request = {
                //"userName":First,
                "phone":number,
                "lastName":lastname,
                "userName":name,
                "fullName":name,
                "email":Email,
                "userId":props?.loginuserid,
                "bio":''
            }
            console.log("request-->>",request)
           props.newprofile(request, props.navigation, "vendor",0);
           setTimeout(function(){ 
                props.getprofileuser(props?.loginuserid); 
                props.navigation.navigate("Account")
            },1000);
        }
    }



    const [showclassName, setshowclassName] = useState("#B80000");
     const handleScroll=(pageYOffset)=>{
        if (pageYOffset > 0) {
            setshowclassName('#B80000');  
        }else{
            setshowclassName('#B80000');
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
             }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#ffffff'}} >
             
              <View style={{flexDirection:"row",marginHorizontal:"3%",marginVertical:"6%"}}>
              <Text style={{fontSize:15,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#999999"}}>PERSONAL DETAILS /</Text>
              <Text style={{fontSize:15,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}> EDIT PROFILE</Text>
              
              </View>
               
               <View style={{marginHorizontal:"3%"}}>
               <Text style={{fontSize:26,fontFamily:"hinted-AvertaStd-Regular",fontWeight:"bold"}}>Edit Profile</Text>
               </View>
               
                <View style={[styles.pickerViewshorttodaybrand,{marginTop:'7%',backgroundColor:"#e6e6e6",marginHorizontal:"3%",borderRadius:10}]}>
               <TextInput 
                 placeholder="First Name"
                 placeholderTextColor="#1a1a1a"
                 onChangeText={(name) =>onChangeName(name)}
                 style={{color:'#333333'}}
                 paddingLeft={15}
                 value={name}
                 />     
                </View>

                <View style={[styles.pickerViewshorttodaybrand,{marginTop:'7%',backgroundColor:"#e6e6e6",marginHorizontal:"3%",borderRadius:10}]}>
                 <TextInput 
                 placeholder="Last Name"
                 placeholderTextColor="#1a1a1a"
                 onChangeText={(lastname) =>onChangelastname(lastname)}
                 style={{color:'#333333'}}
                 paddingLeft={15}
                 value={lastname}
                 />
                </View>
                <View style={[styles.pickerViewshorttodaybrand,{marginTop:'7%',backgroundColor:"#e6e6e6",marginHorizontal:"3%",borderRadius:10}]}>
                 <TextInput 
                 placeholder="Email Address"
                 placeholderTextColor="#1a1a1a"
                 onChangeText={(Email) =>onChangeEmail(Email)}
                 style={{color:'#333333'}}
                 paddingLeft={15}
                 value={Email}
                 />
                </View>

                <View style={{flexDirection:'row',marginHorizontal:'4%',justifyContent:'space-between',marginTop:'7%'}}>
                 <View style={{height:55,width:120,backgroundColor:'#e6e6e6',borderRadius:10,}}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 55, width: 120,color:'#4d4d4d',}}
                        onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                       >
                        <Picker.Item label="+1" value="1" />
                        <Picker.Item label="+233" value="233" />
                        <Picker.Item label="+91" value="91" />
                    </Picker>
                </View>
                 <View style={{ borderColor:'#e6e6e6', borderRadius:10,width:198,backgroundColor:'#e6e6e6',height:55,alignSelf:'center',}}>
                 <TextInput 
                 placeholder="Phone Number"
                 placeholderTextColor="#1a1a1a"
                 onChangeText={(number) =>onChangeNumber(number)}
                 paddingLeft={15}
                 style={{color:'#333333'}}
                 value={number}
                 />
                </View>
                </View>
              
                 <TouchableOpacity onPress={()=>{ handleSendRequestSubmit()}} style={{width:deviceWidth/1.1, backgroundColor:"#B80000",borderRadius:30,marginTop:"3%",height:63,marginLeft:"4%" }} >
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

export default editprofile