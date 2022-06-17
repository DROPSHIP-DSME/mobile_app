import React, { useRef, useState,useEffect } from 'react';
import { Text, View,TouchableOpacity,FlatList,Image,TextInput, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import Footer3 from '../../screens/auth/Footer3';
import { useFocusEffect } from '@react-navigation/native';

const AddStore = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

     useEffect(() => {
        props.getAllshop(props?.loginuserid,1);
    }, [])

     useFocusEffect(() => {
        // props.getAllshop(props?.loginuserid);
     })

    const renderItem = ({ item ,index }) => {
    
  
   return(
    
    <View style={[styles.maincartviewshop,{marginHorizontal:10}]}>
        <TouchableOpacity  onPress={() => {props.navigation.navigate("NameStore",{shopId:item._id, shopName:item.shopName}) }}>

         <View style={styles.comingViewflat}>
           <Image source={{uri: item.shopImage}} style={styles.storeimageflat} />
           <View>
            <Text style={[styles.namestoretext,{width:160, textAlign:'center', justifyContent:'center'}]} numberOfLines={1}>{item.shopName}</Text>
            <Text style={styles.storedropship}>{item.shopName}.dropship.com</Text>
           </View>
           <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:'10%'}}>
        <Image source={ImageIcons.shareicon} style={styles.bagimage} />
         <Text style={styles.boldhadertext}>Share this shop</Text>
        </View>
        </View>
         
        </TouchableOpacity>
       
    </View>
   
  );
}
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
             
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#fce8e8'}} >

             <View style={{paddingTop:'5%'}}>

                <View style={styles.addstoreView}>
                  <Text style={styles.stor2}>Shop</Text>
                   
                </View>
                { props?.getlistshop?.length>0 ?
                <View>
                    <View style={{alignItems:'center',marginVertical:'7%',marginTop:'10%'}}>
                        <TouchableOpacity
                            style={styles.TouchableOpacitybrand}
                            activeOpacity = { .5}
                            onPress={() => props.navigation.navigate("CreateStore")}>
                            <Text style={styles.storebuttontext}>Add more shop</Text>
                        </TouchableOpacity>
                   </View>

                   <View style={{marginHorizontal:'2%'}}>
                       <FlatList
                            data={props?.getlistshop || []}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            numColumns={2}
                            />
                   </View>
                </View>
                :
                <View>
                    <View>
                        <Image source={ImageIcons.store}  style={styles.store1} />
                    </View>
                    <Text style={styles.storetext}>You do not have a Shop</Text>

                           <TouchableOpacity style={styles.StoreTouchability}
                           onPress={() => props.navigation.navigate("CreateStore")}>
                                <Text style={styles.storeboldtext}>Create a Shop</Text> 
                            </TouchableOpacity>
                </View>
                }

             </View>
           </ScrollView>
          <View style={styles.footerView}>
         
         <View style={styles.maincartviewfooter}>

          <TouchableOpacity onPress={() => { navigation.navigate('watchlist'); }}>
        <View>
         <Image source={ImageIcons.tvicon}  style={[styles.home1,{marginTop:2}]} />
         <Text style={styles.customertext}>Live channels</Text>        
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Cart'); }}>
            <View>
             <Image source={ImageIcons.cart}  style={styles.homecart} />
             <Text style={[styles.customertext,{paddingTop:'1%'}]}>Cart</Text>         
            </View>
        </TouchableOpacity> 

        <TouchableOpacity onPress={() => navigation.navigate("shop")} >
         <Image source={ImageIcons.redshop}  style={styles.home1} />
         <Text style={styles.customertextred}>Shop</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Search'); }}>
         <View>
         <Image source={ImageIcons.searchicon}  style={styles.home1} />
         <Text style={styles.customertext}>Search</Text>         
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Newprofile'); }}>
         <View>
         <Image source={ImageIcons.prof}  style={styles.home1} />
         <Text style={styles.customertext}>Profile</Text>         
        </View>
        </TouchableOpacity>

        </View>

        </View>
        </KeyboardAvoidingView>
    )
}


export default AddStore