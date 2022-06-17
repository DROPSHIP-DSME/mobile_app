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
       props.editUser();

    }, [])

    useFocusEffect(() => {
         //props.getAllshop(1);
     })
    
    
     const deviceWidth = Dimensions.get('window').width; 
    const deviceHeight = Dimensions.get('window').height; 

    //Reference
   
    // Local states
    
    const [number, onChangeNumber] = React.useState("");
    const [Email, onChangeEmail] = React.useState("");
    const [lastname, onChangelastname] = React.useState("");
    const [name, onChangeName] = React.useState("");
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
                "email":Email
            }
            console.log("request-->>",request)
           props.newprofile(request, props.navigation, "vendor",0);
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
              <Text style={{fontSize:12,fontFamily:'hinted-AvertaStd-Regular',color:'4d4d4d',marginLeft:'4%'}}>First Name</Text>
               <TextInput 
                 placeholder="mary"
                 placeholderTextColor="#1a1a1a"
                 onChangeText={(name) =>onChangeName(name)}
                 paddingLeft={15}
                 />     
                </View>

                <View style={[styles.pickerViewshorttodaybrand,{marginTop:'7%',backgroundColor:"#e6e6e6",marginHorizontal:"3%",borderRadius:10}]}>
                 <TextInput 
                 placeholder="Last Name"
                 placeholderTextColor="#1a1a1a"
                 onChangeText={(lastname) =>onChangelastname(lastname)}
                 paddingLeft={15}
                 />
                </View>
                <View style={[styles.pickerViewshorttodaybrand,{marginTop:'7%',backgroundColor:"#e6e6e6",marginHorizontal:"3%",borderRadius:10}]}>
                 <TextInput 
                 placeholder="Email Address"
                 placeholderTextColor="#1a1a1a"
                 onChangeText={(Email) =>onChangeEmail(Email)}
                 paddingLeft={15}
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
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8" value="8" />
                        <Picker.Item label="9" value="9" />
                      </Picker>
                </View>
                 <View style={{ borderColor:'#e6e6e6', borderRadius:10,width:198,backgroundColor:'#e6e6e6',height:55,alignSelf:'center',}}>
                 <TextInput 
                 placeholder="Phone Number"
                 placeholderTextColor="#1a1a1a"
                 onChangeText={(number) =>onChangeNumber(number)}
                 paddingLeft={15}
                 />
                </View>
                </View>
              
                 <TouchableOpacity onPress={()=>{props.navigation.navigate("Account"),handleSendRequestSubmit()}} style={{width:deviceWidth/1.1, backgroundColor:"#B80000",borderRadius:30,marginTop:"3%",height:63,marginLeft:"4%" }} >
                    <Text style={{textAlign:'center',color:"#FFFFFF",fontWeight:'bold',fontSize:18,top:18}}>SAVE CHANGES</Text> 
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
                    renderItem={renderItem6}
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
                onChangeText={onChangeText1}
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