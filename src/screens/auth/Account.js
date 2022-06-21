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
import moment from 'moment';
const Account = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

   useEffect(() => {

        //alert(props?.loginuserid)
        props.getprofileuser(props?.loginuserid); 
        props.getuseraddress(props?.loginuserid);
        props.getusercard(props?.loginuserid);
        props.getsupportlist(props?.loginuserid);
        
    }, [])

    // Local states
    const [text1, onChangeText1] = React.useState("");
    const [helppopup, sethelppopup] = React.useState(false);
    
    const [showclassName, setshowclassName] = useState("#B80000");
     const handleScroll=(pageYOffset)=>{
        if (pageYOffset > 0) {
            setshowclassName('#B80000');  
        }else{
            setshowclassName('#B80000');
        }
    } 
   
    const logout =  async () => {
        await AsyncStorage.setItem('UserId',"");
        await AsyncStorage.setItem('userLogin',"");
        props.navigation.navigate("Golive")
    }

    const handleSendRequestSubmit = async () => {
        let request = {
            "userId":props?.loginuserid,
            "message":text1,
            "msgDate":new Date()
        }
        onChangeText1('');
        props.support(request, props.navigation, "vendor");
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
             }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#E5E5E5'}} >
             <View style={{marginHorizontal:'3%',paddingTop:'10%'}}>
                   <Text style={{fontSize:35,color:"#B80000",fontFamily:'hinted-AvertaStd-Bold',fontWeight:"bold"}}>My Account</Text>
              </View>
              <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",paddingTop:"8%"}}>
              <Text style={{fontSize:16,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Personal Details</Text>
              
              <TouchableOpacity onPress={() => props.navigation.navigate("Accountstore")}>
              <Text style={{fontSize:16,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#999999"}}>My store</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate("Accountsum")}>
              <Text style={{fontSize:16,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#999999"}}>Account Summary</Text>
              </TouchableOpacity>
              </View>
              
              <View style={{flexDirection:'row',marginHorizontal:"3%",marginTop:"2%"}}>
              <View style={{borderBottomWidth:2,borderColor:"#1A1A1A",width:"35%"}}></View>
              <View style={{borderBottomWidth:2,borderColor:"#999999",width:"65%"}}></View>
              </View>

              <View style={{marginTop:"8%",marginHorizontal:"3%",borderRadius:10,backgroundColor:"#ffffff"}}>
              <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%"}}>
              <View>
              <Text style={{fontSize:20,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Semibold",color:"#1A1A1A"}}>My Profile</Text>
              </View>
              <TouchableOpacity onPress={()=>props.navigation.navigate("editprofile")}> 
                <Image  source={ImageIcons.edit} style={{width:35,height:35}}/> 
              </TouchableOpacity>
              </View>
              
              <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"6%"}}>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>First Name</Text>
              </View>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Semibold",color:"#1A1A1A"}}>{props?.getprofileuserlist?.userName}</Text>
              </View>
              </View>
              <View style={{borderBottomWidth:0.7,marginTop:"2%",marginHorizontal:"3%",borderColor:"#999999"}}></View> 
               <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%"}}>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Last Name</Text>
              </View>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Semibold",color:"#1A1A1A"}}>{props?.getprofileuserlist?.lastName}</Text>
              </View>
              </View>
              <View style={{borderBottomWidth:0.7,marginTop:"2%",marginHorizontal:"3%",borderColor:"#999999"}}></View> 
               <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%"}}>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Email</Text>
              </View>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Semibold",color:"#1A1A1A"}}>{props?.getprofileuserlist?.email}</Text>
              </View>
              </View>
              <View style={{borderBottomWidth:0.7,marginTop:"2%",marginHorizontal:"3%",borderColor:"#999999"}}></View>  
              <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%",marginBottom:"3%"}}>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Number</Text>
              </View>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Semibold",color:"#1A1A1A"}}>{props?.getprofileuserlist?.phone}</Text>
              </View>
              </View>
              </View>


                <View style={{marginTop:"3%",marginHorizontal:"3%",borderRadius:10,backgroundColor:"#ffffff"}}>
              <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%"}}>
              <View>
              <Text style={{fontSize:20,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>My Address</Text>
              </View>
              <TouchableOpacity onPress={()=>props.navigation.navigate("editaddress")}>
              <Image source={ImageIcons.edit} style={{width:35,height:35}}/> 
              </TouchableOpacity>
              </View>
              
              <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%"}}>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Address line1</Text>
              </View>
              {(props?.getuseraddresslist && props?.getuseraddresslist?.length>0) &&
              <View>
                <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Semibold",color:"#1A1A1A"}}>{props?.getuseraddresslist[0]?.streetAdress}</Text>
              </View>
            }
              </View>
              <View style={{borderBottomWidth:0.7,marginTop:"2%",marginHorizontal:"3%",borderColor:"#999999"}}></View> 
               <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%"}}>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>City</Text>
              </View>
               {(props?.getuseraddresslist && props?.getuseraddresslist?.length>0) &&
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Semibold",color:"#1A1A1A"}}>{props?.getuseraddresslist[0]?.city}</Text>
              </View>
          }
              </View>
              <View style={{borderBottomWidth:0.7,marginTop:"2%",marginHorizontal:"3%",borderColor:"#999999"}}></View> 
               <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%"}}>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>State</Text>
              </View>
               {(props?.getuseraddresslist && props?.getuseraddresslist?.length>0) &&
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Semibold",color:"#1A1A1A"}}>{props?.getuseraddresslist[0]?.state}</Text>
              </View>
          }
              </View>
              <View style={{borderBottomWidth:0.7,marginTop:"2%",marginHorizontal:"3%",borderColor:"#999999"}}></View>  
              <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%",marginBottom:"3%"}}>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Country</Text>
              </View>
               {(props?.getuseraddresslist && props?.getuseraddresslist?.length>0) &&
                  <View>
                  <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Semibold",color:"#1A1A1A"}}>{props?.getuseraddresslist[0]?.country}</Text>
                  </View>
              }
              </View>
              </View> 

               <View style={{marginTop:"3%",marginHorizontal:"3%",borderRadius:10,backgroundColor:"#ffffff"}}>
              <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%"}}>
              <View>
              <Text style={{fontSize:20,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Payment Details</Text>
              </View>
               { /* <TouchableOpacity onPress={()=>props.navigation.navigate("paymentedit")}>
                    <Image source={ImageIcons.edit} style={{width:35,height:35}}/> 
              </TouchableOpacity> */}
              </View>
              
              <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%"}}>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Payment Type</Text>
              </View>
               {(props?.getusercardlist && props?.getusercardlist?.length>0) &&
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Semibold",color:"#1A1A1A"}}>{props?.getusercardlist[0]?.cardtype}</Text>
              </View>
          }
              </View>
              <View style={{borderBottomWidth:0.7,marginTop:"2%",marginHorizontal:"3%",borderColor:"#999999"}}></View> 
               <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%"}}>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Cashholder Name</Text>
              </View>
               {(props?.getusercardlist && props?.getusercardlist?.length>0) &&
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Semibold",color:"#1A1A1A"}}>{props?.getusercardlist[0]?.name}</Text>
              </View>
          }
              </View>
              <View style={{borderBottomWidth:0.7,marginTop:"2%",marginHorizontal:"3%",borderColor:"#999999"}}></View> 
               <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%"}}>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Card Number</Text>
              </View>
               {(props?.getusercardlist && props?.getusercardlist?.length>0) &&
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Semibold",color:"#1A1A1A"}}>{props?.getusercardlist[0]?.cardNumber}</Text>
              </View>
          }
              </View>
              <View style={{borderBottomWidth:0.7,marginTop:"2%",marginHorizontal:"3%",borderColor:"#999999"}}></View>  
              <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%",marginBottom:"3%"}}>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Expiry Date</Text>
              </View>
              {(props?.getusercardlist && props?.getusercardlist?.length>0) &&
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Semibold",color:"#1A1A1A"}}>{props?.getusercardlist[0]?.expiry}</Text>
              </View>
          }
              </View>
              </View>


               <View style={{marginTop:"3%",marginHorizontal:"3%",borderRadius:10,backgroundColor:"#ffffff",}}>
              <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%"}}>
              <View>
              <Text style={{fontSize:20,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Account Settings</Text>
              </View>
              
              </View>
              
              <TouchableOpacity  onPress={() => props.navigation.navigate("Dashsupportacc")} style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%"}}>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Customer Support</Text>
              </View>
              <View>
              <Image source={ImageIcons.rightpop} style={{width:10,height:15}}/>
              </View>
              </TouchableOpacity>
              <View style={{borderBottomWidth:0.7,marginTop:"2%",marginHorizontal:"3%",borderColor:"#999999"}}></View> 
               <TouchableOpacity onPress={() => props.navigation.navigate("editpassword")} style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%"}}>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Change Password</Text>
              </View>
              <View>
              <Image source={ImageIcons.rightpop} style={{width:10,height:15}}/>
              </View>
              </TouchableOpacity>
              <View style={{borderBottomWidth:0.7,marginTop:"2%",marginHorizontal:"3%",borderColor:"#999999"}}></View> 
               <TouchableOpacity onPress={() => props.navigation.navigate("deletaccount")} style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%"}}>
              <View style={{marginBottom:"3%"}}>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Delete Account</Text>
              </View>
              <View>
              <Image source={ImageIcons.rightpop} style={{width:10,height:15}}/>
              </View>
              </TouchableOpacity> 
              </View>
              
              <View style={{flexDirection:"row",marginBottom:'20%',borderRadius:10,backgroundColor:"#ffffff",marginHorizontal:"3%",marginTop:"3%"}}>
              <View style={{marginHorizontal:"3%",marginVertical:"5%"}}>
                    <Image source={ImageIcons.signout} style={{width:21,height:21}}/>
              </View>
              
              <View style={{marginVertical:"4%"}}>
              <TouchableOpacity onPress={() => logout()}>
              <Text style={{fontSize:20,fontFamily:"hinted-AvertaStd-Regular",fontWeight:"bold",color:"#1A1A1A"}}>
              Sign Out 
              </Text>
              </TouchableOpacity>
              </View>
              
              </View>


              
              </ScrollView>

               
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

    </KeyboardAvoidingView>
        
    )
}


export default Account