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

const Accountsum = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

   
    useEffect(() => {
       props.getAllshop(1);
       props.getselldeshboard(props?.loginuserid);
    }, [])
    useFocusEffect(() => {
         //props.getAllshop(1);
     })


    
     const deviceWidth = Dimensions.get('window').width; 
    const deviceHeight = Dimensions.get('window').height; 

    //Reference
    const [text1, onChangeText1] = React.useState("");
    const [helppopup, sethelppopup] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    const [showAlert, setshowAlert] = React.useState(false);

    const [showclassName, setshowclassName] = useState("#B80000");
     const handleScroll=(pageYOffset)=>{
        if (pageYOffset > 0) {
            setshowclassName('#B80000');  
        }else{
            setshowclassName('#B80000');
        }
    } 
   
      const renderItem3 = ({ item,index }) => {
   return(
           <View>

            <TouchableOpacity  onPress={() => props.navigation.navigate("Accountorderview")} style={styles.seledataViewTODAYaccountsummary}>
                     
                       <Text style={styles.seriestexttoday}>{item?.totalorder}</Text>
                       <Text style={styles.seriestexttoday}>{item?.totalorder}</Text>
                       <Text style={styles.seriestexttoday}>{item?.totalorder}</Text>
                   </TouchableOpacity>
            
            </View>
    );
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
              <TouchableOpacity onPress={() => props.navigation.navigate("Account")}>
              <Text style={{fontSize:16,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#999999"}}>Personal Details</Text>
               </TouchableOpacity>

              <TouchableOpacity onPress={() => props.navigation.navigate("Accountstore")}>
              <Text style={{fontSize:16,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#999999"}}>My store</Text>
              </TouchableOpacity>
              <Text style={{fontSize:16,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Account Summary</Text>
              </View>
              
              <View style={{flexDirection:'row',marginHorizontal:"3%",marginTop:"2%"}}>
              <View style={{borderBottomWidth:2,borderColor:"#999999",width:"60%"}}></View>
              <View style={{borderBottomWidth:2,borderColor:"#1A1A1A",width:"40%"}}></View>
              </View>

              <View style={{backgroundColor:'#ffffff',padding:'4%',width:'92%',borderRadius:15,marginHorizontal:'3%',marginVertical:'8%'}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:'2%',}}>
                   <View>
                    <Text style={styles.totalincometodaysale}>Order History</Text>
                    </View>
                    <TouchableOpacity  onPress={() => props.navigation.navigate("Accountorderhist")} style={{backgroundColor:'#B80000',width:90,borderRadius:15,padding:6,}}>
                      <Text style={styles.totalincometodayWIDRO}>SEE ALL</Text> 
                   </TouchableOpacity> 
                  </View> 
                   <View style={styles.salesViewTODAY}>
                       <Text style={styles.seriestext}>Order Number</Text>
                       <Text style={styles.seriestext}>Ordered by</Text>
                       <Text style={styles.seriestext}>Email </Text>
                   </View>
                <View style={{marginLeft:-10}}>
                    <FlatList
                    data={props?.getlistselldeshboard || []}
                    renderItem={renderItem3}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                    />
                </View>
                </View>  
               


               <View style={{marginTop:"3%",marginHorizontal:"3%",borderRadius:10,backgroundColor:"#ffffff",marginBottom:'30%'}}>
              
              <View style={{marginHorizontal:"3%",marginTop:"4%"}}>
              <View>
               <Text style={{fontSize:20,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Saved Items</Text>
              </View>
              </View>
              
              <TouchableOpacity  onPress={() => props.navigation.navigate("Accountfav1")} style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%"}}>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>My Favourites</Text>
              </View>
              <View>
              <Image source={ImageIcons.rightpop} style={{width:8,height:11,marginRight:8}}/>
              </View>
              </TouchableOpacity>
              <View style={{borderBottomWidth:0.7,marginTop:"2%",marginHorizontal:"3%",borderColor:"#999999"}}></View> 
               <TouchableOpacity onPress={() => props.navigation.navigate("Accountdata")} style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%"}}>
              <View>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Bookmarks</Text>
              </View>
              <View>
              <Image source={ImageIcons.rightpop} style={{width:8,height:11,marginRight:8}}/>
              </View>
              </TouchableOpacity>
              <View style={{borderBottomWidth:0.7,marginTop:"2%",marginHorizontal:"3%",borderColor:"#999999"}}></View> 
               <TouchableOpacity onPress={() => props.navigation.navigate("Accountfollow")} style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%"}}>
              <View style={{marginBottom:"3%"}}>
              <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Following</Text>
              </View>
              <View>
              <Image source={ImageIcons.rightpop} style={{width:8,height:11,marginRight:8}}/>
              </View>
              </TouchableOpacity> 
              </View>
              
              


              
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


export default Accountsum