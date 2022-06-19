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
import { RadioButton ,Provider ,Modal, Portal, Button,} from 'react-native-paper';
const deletaccount = (props) => {

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
    
    // Local states
     const [checked, setChecked] = React.useState('first');
    const [visible, setVisible] = React.useState(false);
    const [text1, onChangeText1] = React.useState("");
    const [helppopup, sethelppopup] = React.useState(false);
    const [showAlert, setshowAlert] = React.useState(false);
    
    const [showclassName, setshowclassName] = useState("#B80000");
     const handleScroll=(pageYOffset)=>{
        if (pageYOffset > 0) {
            setshowclassName('#B80000');  
        }else{
            setshowclassName('#B80000');
        }
    } 
   
    

    const openpopup = () => {
        setVisible(true)
    }

    const closepopup = () => {
        setVisible(false)
    }

    const setdeleteaddress = async (id) => {
        props.deleteaddress(id);
     }
   
   const containerStyle = {backgroundColor: 'white',padding:15, marginHorizontal:'5%',borderRadius:10};

    
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
              <Text style={{fontSize:15,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>DELETE ACCOUNT</Text>
              
              </View>
               
               <View style={{marginHorizontal:"3%"}}>
               <Text style={{fontSize:26,fontFamily:"hinted-AvertaStd-Regular",fontWeight:"bold"}}>Delete Account</Text>
               </View>

               <View style={{marginHorizontal:"3%",marginTop:"4%"}}>
               <Text style={{fontSize:20,fontFamily:"hinted-AvertaStd-Semibold",}}>Reasons for Deleting </Text>
               </View>

                <View style={{marginHorizontal:"3%",marginTop:"4%"}}>
               <Text style={{fontSize:18,fontFamily:"hinted-AvertaStd-Regular",}}>We’re sorry to see you go. 
                 Please let us know the 
               specific reason you’re choosing to terminate your account.</Text>
               </View>

                <View style={{marginTop:"6%"}}> 
              <View style={{flexDirection:"row",elevation:1,marginHorizontal:"4%",backgroundColor:"#FAFAFA"}}>
              <RadioButton
                value="first"
                status={ checked === 'first' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('first')}
              />

              <Text style={{paddingTop:"2%", fontSize:18,fontFamily:"hinted-AvertaStd-Semibold", color:"#B80000",lineHeight:23,paddingHorizontal:"2%"}}>I’m no longer interested in the {"\n"}selling/shopping online.</Text>
              </View>

              <View style={{flexDirection:"row",marginTop:"4%", flexDirection:"row",elevation:1,marginHorizontal:"4%",backgroundColor:"#FAFAFA"}}>
              <RadioButton
                value="second"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}
              />
              <Text style={{paddingTop:"2%", fontSize:18,fontFamily:"hinted-AvertaStd-Semibold",color:"#808080",lineHeight:23,paddingHorizontal:"2%"}}>I already have another platform.</Text>
              </View>

              <View style={{flexDirection:"row",marginTop:"4%", flexDirection:"row",elevation:1,marginHorizontal:"4%",backgroundColor:"#FAFAFA"}}>
              <RadioButton
                value="third"
                status={ checked === 'third' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('third')}
              />
              <Text style={{paddingTop:"2%", fontSize:18,fontFamily:"hinted-AvertaStd-Semibold", color:"#808080",lineHeight:23,paddingHorizontal:"2%"}}>I don’t have a specific reason.</Text>
              </View>

            </View>
               
               <View style={[styles.pickerViewshorttodaybrand,{marginTop:'7%',height:200, backgroundColor:"#e6e6e6",marginHorizontal:"3%",borderRadius:10}]}>
                 <TextInput 
                 placeholder="Add more details about your reason (optional)"
                 placeholderTextColor="#1a1a1a"
                 paddingLeft={15}
                 />
                </View>

                <View style={{marginHorizontal:"3%",marginTop:"4%"}}>
               <Text style={{fontSize:18,fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>Deleting your account will remove all of your 
               information from our database. This cannot be undone. </Text>
               </View>

               <View style={{marginHorizontal:"3%",marginTop:"6%"}}>
               <Text style={{fontSize:14,fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>To confirm this, type ‘DELETE’ below.</Text>
               </View>

               <View style={[styles.pickerViewshorttodaybranded1234,{marginTop:'2%',width:260, backgroundColor:"#e6e6e6",marginHorizontal:"3%",borderRadius:10}]}>
                 <TextInput 
                
                 placeholderTextColor="#1a1a1a"
                 paddingLeft={15}
                 />
                </View>


               <TouchableOpacity onPress={() =>setdeleteaddress(item._id)} style={{width:deviceWidth/2.1,padding:12, backgroundColor:"#B80000",borderRadius:30,marginTop:"5%",height:43,marginLeft:"4%" ,marginBottom:"50%"}} >
                    <Text style={{textAlign:'center',color:"#FFFFFF",fontWeight:'bold',fontSize:14,}}>DELETE ACCOUNT</Text> 
                 </TouchableOpacity>
              
                 { openpopup  &&
                    <Provider>
                    <Portal>
                    <Modal visible={visible}  contentContainerStyle={containerStyle}>

                    <TouchableOpacity style={{alignItems:"flex-end"}} onPress={() => closepopup()}>
                    <Image source={ImageIcons.closepopup}  style={styles.sendmsg2} />
                  </TouchableOpacity>
                  <View style={{marginTop:"10%",alignItems:"center"}}>
                  <Image source={ImageIcons.righticon}  style={{height:80,width:80}} />
                  </View>
                  <View style={{marginTop:"3%",alignItems:"center",marginBottom:"10%"}}>
                  <Text style={{fontFamily:"hinted-AvertaStd-Regular",fontSize:18,color:"#1A1A1A"}}>Password changed successfully.
                  </Text>
                  </View>

                   
                    </Modal>
                    </Portal>
                    </Provider>
                }

              
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
export default deletaccount