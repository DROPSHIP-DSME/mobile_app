import React, { useRef, useState,useEffect } from 'react';
import { Text, View,FlatList,TouchableOpacity,Image,TextInput, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import { RadioButton ,Provider ,Modal, Portal, Button,} from 'react-native-paper';
import Footer2 from '../../screens/auth/Footer2';
import moment from 'moment';
 
 
const ChatSupport = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    useEffect(() => {
        props.getsupportlist(props?.loginuserid);
        props.getprofileuser(props?.loginuserid);
        //console.log('props?.getchatsupportlist1',props.getchatsupportlist1)
    }, [])

    //Reference

    const userType = props?.route?.params?.userType;
    const [visible, setVisible] = React.useState(false);
    const [text1, onChangeText1] = React.useState("");
    
    // Vendor request submission
    const handleSendRequestSubmit = async () => {
        let request = {
            "userId":props?.loginuserid,
            "message":text1,
            "msgDate":new Date()
        }
        onChangeText1('');
        props.support(request, props.navigation, "vendor");
    }
    

    const renderItem = ({ item }) => {
            return(
                <View>
                    { item.userId.userName=='Admin' ?
                        <View style={styles.chatrightView}>
                           <Text style={styles.hellotext}>{item.message}</Text>
                           <Text style={styles.chattingtime}>{ moment(item.msgDate).format('hh:mm A')}</Text>
                        </View>
                    :
                        <View style={styles.chatlongView}>
                          <Text style={styles.chattingtext}>{item.message}</Text>
                          <Text style={styles.chattingtime2}>{moment(item.msgDate).format('hh:mm A')}</Text>
                        </View>
                    }
                </View>
            );
    }

    return (
       
             <View style={{flex:1,backgroundColor:'#FFE7E7',}}>
            
           
              <View style={styles.chatViewrose}>
                    { props?.getprofileuserlist?.profileImage ?
                        <Image source={{uri: props?.getprofileuserlist?.profileImage}} style={{height:40,width:40,borderRadius:50}} />
                    :
                        <Image source={ImageIcons.profile} style={{height:40,width:40,borderRadius:50,borderWidth:1, borderColor:'#333333'}} />
                    }
                <Text style={styles.Benrosetext}>{props?.getprofileuserlist?.userName}</Text>
            </View>
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7'}} >

            <View style={{marginVertical:'2%'}}>
                <FlatList
                    data={props?.getchatsupportlist1 || []}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                />
             </View>
           </ScrollView>
            <View style={[styles.accountmainview,{marginBottom:70}]}>
            <View style={{width:'100%'}}>
                <TextInput  style={styles.chatinput}
                placeholder="Type here"
                onChangeText={onChangeText1}
                value={text1}
                placeholderTextColor="#999999"
                />
                <TouchableOpacity style={{position:'absolute',right:15,top:15}} onPress={() => handleSendRequestSubmit()}>
                <Image source={ImageIcons.sending}  style={styles.sendmsg1} />
                </TouchableOpacity>
            </View>

           { /* <View style={styles.chatsupportimgView}>
                 <Image source={ImageIcons.audioo}  style={styles.audio1} />
            </View> */}
            </View>

{userType=='sellside' &&
            <View style={styles.footerView}>
       <View style={styles.maincartviewfooter}>
       <TouchableOpacity onPress={() => navigation.navigate("Overview")} >
        <View>
         <Image source={ImageIcons.blackhome}  style={styles.footer2img} />
         <Text style={styles.customertextfooter}>Home</Text>
        </View>
        </TouchableOpacity>
 
        <TouchableOpacity onPress={() => navigation.navigate("SearchProduct2")} >
        <View>
         <Image source={ImageIcons.products}  style={styles.footer5img} />
         <Text style={styles.customertextfooter}>Products</Text>         
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("StartRecording",{userId:props?.loginuserid})} >
        <View style={{alignItems:'center'}}>
         <Image source={ImageIcons.cart2}  style={styles.footer3img} />
         <Text style={styles.customertextfooter}>Go Live</Text>        
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Inorder")} >
         <View>
         <Image source={ImageIcons.neworder}  style={styles.footer4img} />
         <Text style={styles.customertextfooter}>Orders</Text>         
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("More")} >
         <View >
         <Image source={ImageIcons.redmore}  style={styles.footer2img} />
         <Text style={styles.customertextfooter2}>More</Text>         
        </View>
        </TouchableOpacity>

        </View>

   </View>
}

{ userType=='shopside' &&
    <View style={styles.footerView}>
         
        <View style={styles.maincartviewfooter}>

        <TouchableOpacity onPress={() => { navigation.navigate('watchlist'); }}>
            <View >
                <Image source={ImageIcons.tvicon}  style={[styles.home1,{marginTop:2}]} />
                <Text style={styles.customerfoottext}>Live channels</Text>        
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Cart'); }}>
            <View >
                <Image source={ImageIcons.cart}  style={styles.homecart} />
                <Text style={styles.customerfoottext}>Cart</Text>         
            </View>
        </TouchableOpacity> 

        <TouchableOpacity onPress={() => navigation.navigate("shop")} >
            <View >
                 <Image source={ImageIcons.redshop}  style={styles.home1} />
                 <Text style={[styles.customertextred,{paddingTop:'1%'}]}>Shop</Text>
             </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Search'); }}>
            <View >
                <Image source={ImageIcons.searchicon}  style={styles.home1} />
                <Text style={styles.customerfoottext}>Search</Text>         
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Newprofile'); }}>
            <View >
                <Image source={ImageIcons.prof}  style={styles.home1} />
                <Text style={[styles.customertext,{paddingTop:'1%'}]}>Profile</Text>         
            </View>
        </TouchableOpacity>

        </View>

    </View>
       
}

       </View>
    )
}


export default ChatSupport