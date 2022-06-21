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

    //Referenc
   
    // Local states
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
    

    const setdeleteaddress = async (id) => {
        return Alert.alert(
          "Are your sure?",
          "Are you sure you want to remove this address?",
          [
            // The "Yes" button
            {
              text: "Yes",
              onPress: () => {
                    props.deleteaddress(id);
                    setTimeout(function(){ props.getuseraddress(props?.loginuserid); },100); 
              },
            },
            // The "No" button
            // Does nothing but dismiss the dialog when tapped
            {
              text: "No",
            },
          ]
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

     const renderItem = ({ item, index }) => {
    
  
    return(

    <View style={{marginHorizontal:"3%",backgroundColor:"#FFFFFF",marginTop:"4%",elevation:1,borderRadius:10,padding:6}}>
              {index==0 &&
               <View style={{backgroundColor:"#E6E6E6",width:deviceWidth/3,height:25,paddingTop:"1%",borderRadius:5}}><Text style={{textAlign:"center", color:"#2F80ED",fontSize:12,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular"}}>
                 DEFAULT ADDRESS</Text></View>
            }
              <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%", marginTop:"1%"}}>
              
                 <Text style={{fontSize:18,fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A",padding:"2%"}}>{item?.firstName} {item?.lastName} {"\n"}{item?.streetAdress}, {item?.phoneNumber}{"\n"}{item?.city}{"\n"}{item?.zipCode}</Text>
               <View style={{flexDirection:'row'}}>
               
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
            style={{flex:1}}>
          <StatusBar backgroundColor={showclassName} barStyle="dark-content" translucent={true} />
            <Shopheader />
             
            <View >
             
              <View style={{flexDirection:"row",marginHorizontal:"3%",marginVertical:"6%"}}>
              <Text style={{fontSize:15,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#999999"}}>PERSONAL DETAILS /</Text>
              <Text style={{fontSize:15,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"}}>ADDRESS</Text>
              
              </View>
               
               <View style={{marginHorizontal:"3%"}}>
               <Text style={{fontSize:26,fontFamily:"hinted-AvertaStd-Regular",fontWeight:"bold"}}>My Address</Text>
               </View>

                <ScrollView style={{height:deviceHeight/1.8}}>
                    <View style={{ marginBottom:0}}>
                        <FlatList
                            data={props?.getuseraddresslist || []}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
               
              </ScrollView>
              </View>
               <TouchableOpacity onPress={()=>props.navigation.navigate("editviewaddress")} style={{width:deviceWidth/1.1, backgroundColor:"#B80000",borderRadius:30,marginTop:"5%",height:63,marginLeft:"4%" }} >
                    <Text style={{textAlign:'center',color:"#FFFFFF",fontWeight:'bold',fontSize:18,top:18}}>ADD A NEW ADDRESS</Text> 
                 </TouchableOpacity>

    <Footer3 onSelection="5"/>
       
    
    </KeyboardAvoidingView>
        
    )
}


export default editaddress