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
import Footer3 from '../../screens/common/Footer3';
import AsyncStorage from '@react-native-community/async-storage'; 
import { useFocusEffect } from '@react-navigation/native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Shopheader from '../../screens/common/Shopheader';

const editaddress = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

   
    useEffect(() => {
       props.getAllshop(1);
       props.getuseraddress(props?.loginuserid);
       console.log("Addresses-->>",props.getuseraddresslist)
    }, [])
    useFocusEffect(() => {
         //props.getAllshop(1);
     })
    
    
     const deviceWidth = Dimensions.get('window').width; 
    const deviceHeight = Dimensions.get('window').height; 

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();
   
    // Local states
    const [text1, onChangeText1] = React.useState("");
    const [helppopup, sethelppopup] = React.useState(false);
    const [starCount, setstarCount] = useState(5);
    const [selectedValue, setSelectedValue] = useState("java");
    const [wayToContact, setWayToContact] = useState("Phone");
    const [showAlert, setshowAlert] = React.useState(false);
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
    const [showclassName, setshowclassName] = useState("#B80000");
     const handleScroll=(pageYOffset)=>{
        if (pageYOffset > 0) {
            setshowclassName('#B80000');  
        }else{
            setshowclassName('#B80000');
        }
    } 
   
    const ratingCompleted = (ratingdata) => {
            console.log('rating',ratingdata)
               if(ratingdata!="" && ratingdata!=undefined){
                f(ratingdata)  
               }
              
        } 
   
    const checklogin =  async () => {
        if(props?.loginuserstatus=="1"){
           props.navigation.navigate("AddStore")
        }else {
            setshowAlert(true)
        }  
    }
   

    const DATA = [
       {
        text:"Beauty brands",
        text1:"$75",
        image:ImageIcons.addstore,
        
       },
       {
        text:"Beauty brands",
        text1:"$75",
        image:ImageIcons.clothes,
        
       },
       

     ];

     const setdeleteaddress = async (id) => {
        props.deleteaddress(id);
        setTimeout(function(){ props.getuseraddress(props?.loginuserid); },100);   
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

     const renderItem = ({ item }) => {
    
  
    return(

    <View style={{marginHorizontal:"3%",backgroundColor:"#FFFFFF",marginTop:"4%",elevation:1,borderRadius:10,padding:6}}>
              <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%", marginTop:"1%"}}>
              
                 <Text style={{fontSize:18,fontFamily:"SourceSansPro-Regular",color:"#1A1A1A",padding:"2%"}}>{item?.firstName} {"\n"}{item?.streetAdress}{"\n"}{item?.city},{item?.state},{item?.zipCode}{"\n"}{item?.country}</Text>
               <View style={{flexDirection:'row'}}>
               <TouchableOpacity onPress={()=>props.navigation.navigate("editviewaddress")}>
                 <Image source={ImageIcons.edit} style={{width:45,height:40}}/>
              </TouchableOpacity>
              <TouchableOpacity   onPress={() =>setdeleteaddress(item._id)}>
                 <Image source={ImageIcons.del} style={{width:45,height:40,marginLeft:8}}/>
              </TouchableOpacity>
              </View>
              
              </View>
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
             
              <View style={{flexDirection:"row",marginHorizontal:"3%",marginVertical:"6%"}}>
              <Text style={{fontSize:15,fontWeight:"bold",fontFamily:"SourceSansPro-Regular",color:"#999999"}}>PERSONAL DETAILS /</Text>
              <Text style={{fontSize:15,fontWeight:"bold",fontFamily:"SourceSansPro-Regular",color:"#1A1A1A"}}>ADDRESSES</Text>
              
              </View>
               
               <View style={{marginHorizontal:"3%"}}>
               <Text style={{fontSize:26,fontFamily:"SourceSansPro-Regular",fontWeight:"bold"}}>My Addresses</Text>
               </View>

               <View style={{marginHorizontal:"3%",borderRadius:10,elevation:1 ,backgroundColor:"#ffffff",marginTop:"5%",padding:4}}>
              <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"2%",marginTop:"2%"}}>
                 <View style={{backgroundColor:"#E6E6E6",width:deviceWidth/3,height:25,paddingTop:"1%",borderRadius:5}}><Text style={{textAlign:"center", color:"#2F80ED",fontSize:12,fontWeight:"bold",fontFamily:"SourceSansPro-Regular"}}>
                 DEFAULT ADDRESS</Text></View>
                 <View style={{flexDirection:'row'}}>
                 <TouchableOpacity onPress={()=>props.navigation.navigate("editviewaddress")}>
                 <Image source={ImageIcons.edit} style={{width:45,height:40}}/>
                 </TouchableOpacity>
                  <View>
                 <Image source={ImageIcons.del} style={{width:45,height:40,marginLeft:8}}/>
                 </View>
                 </View>

              </View>
              <Text style={{fontSize:18,fontFamily:"SourceSansPro-Regular",color:"#1A1A1A",padding:"2%"}}>Marry Davis {"\n"}2501 Stevens Ev{"\n"}Miniapolis MN,54404{"\n"}USA</Text>
              </View>

              

              

               <View style={{ marginBottom:30}}>
           <FlatList
                data={props?.getuseraddresslist || []}
                renderItem={renderItem}
                keyExtractor={item => item.id}
               showsHorizontalScrollIndicator={false}
                />
        </View>
               
                
              
                 <TouchableOpacity style={{width:deviceWidth/1.1, backgroundColor:"#B80000",borderRadius:30,marginTop:"12%",height:63,marginLeft:"4%" }} >
                    <Text style={{textAlign:'center',color:"#FFFFFF",fontWeight:'bold',fontSize:18,top:18}}>ADD A NEW ADDRESS</Text> 
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


export default editaddress