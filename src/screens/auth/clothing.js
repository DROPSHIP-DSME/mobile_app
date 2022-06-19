import React, { useRef, useState } from 'react';
import { Text, View,TouchableOpacity,Image,TextInput,FlatList, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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

const clothing = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference

    const [First, onChangeFirst] = React.useState("Send a message");
    const [visible, setVisible] = React.useState(false);

    const openpopup = () => {
        setVisible(true)
    }

    const closepopup = () => {
          setVisible(false)
    }
     
    const DATA = [
       {
        text:'@Full name',
        text2:'I want buy this one',
        image:ImageIcons.clothes,
       },
       {
        text:'@Full name',
        text2:'I want buy this one',
        image:ImageIcons.clothes,
       },
       {
        text:'@Full name',
        text2:'I want buy this one',
        image:ImageIcons.clothes,
       },
       {
        text:'@Full name',
        text2:'I want buy this one',
        image:ImageIcons.clothes,
       },
       {
        text:'@Full name',
        text2:'I want buy this one',
        image:ImageIcons.clothes,
       },
       {
        text:'@Full name',
        text2:'I want buy this one',
        image:ImageIcons.clothes,
       },
       {
        text:'@Full name',
        text2:'I want buy this one',
        image:ImageIcons.clothes,
       },

     ];
     const DATA2 = [
       {
        text:'Cloth',
        text2:'$90',
        image:ImageIcons.blurcoat,
       },
        {
        text:'Cloth',
        text2:'$90',
        image:ImageIcons.blurcoat,
       },
        {
        text:'Cloth',
        text2:'$90',
        image:ImageIcons.blurcoat,
       },
       

     ];
      const renderItem = ({ item }) => {
   return(
    <View style={{marginHorizontal:4,marginVertical:8}}>
           <Text style={styles.upfulltext}>{item.text}</Text>
           <Text style={styles.buyblurtext}>{item.text2}</Text>
    </View>
    );
    }

     const renderItem2 = ({ item }) => {
   return(
    <View style={{marginVertical:7,justifyContent:'space-between',}}>
    <TouchableOpacity style={{marginVertical:10,marginHorizontal:3}} >
      <Image source={item.image} style={styles.blurimg} />
      </TouchableOpacity>
      <Text style={styles.upfclothtext}>{item.text}</Text>
      <Text style={styles.uppricetext}>{item.text2}</Text>
    </View>
    );
    }



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
            
             <ImageBackground
                style={{ flex: 1,}}
                source={ImageIcons.boybackground}
                imageStyle={{ resizeMode: 'cover' }}
            >
            
            <TouchableOpacity onPress={() => {props.navigation.navigate("upcoming") }}>
            <Image source={ImageIcons.arrow} style={styles.leftIconwhite}  />
            </TouchableOpacity>

            <View style={{marginHorizontal:'6%',flexDirection:'row',justifyContent:'space-between',}}>
            <View >
            <View style={{marginBottom:'10%'}}>
               <Text style={styles.blurrtext}>Beauty brands 23</Text>
               <Text style={[styles.upcomingtext,{marginBottom:'5%'}]}>Live tomorrow by 10PM</Text>
            </View>
            <View style={{flexDirection:'row',marginHorizontal:'2%',marginVertical:'15%'}}>
            <Image source={ImageIcons.timer} style={styles.imgtimer} />
            <Text style={styles.liketext}>24.59</Text>
            </View>
            </View>

           <View style={{justifyContent:'space-between', zIndex:1010,position:'absolute',top:-8, right:10, textAlign:'center'}}>
              <View style={{marginBottom:10,}}>
              <Image source={ImageIcons.Vector} style={styles.imgvector} />
              <Text style={styles.liketext}>0</Text>
              </View>
              <View style={{marginBottom:10,}}>
              <Image source={ImageIcons.copy} style={styles.imgvector2}  />
              <Text style={styles.liketext}>0</Text></View>
              <View style={{marginBottom:10,}}>
                <Image source={ImageIcons.Vectorshare} style={styles.imgvector3} />
                <Text style={styles.liketext}>0</Text>
             </View>
             <Image source={ImageIcons.speker} style={styles.imgvector} />
            </View>
            </View>

            <View style={{marginVertical:'3%',marginHorizontal:'5%'}}>
              <Image source={ImageIcons.greenphone}  />
            </View>

            <View style={{flexDirection:'row',marginHorizontal:'2%',marginVertical:'5%'}}>
            <Image source={ImageIcons.client} style={styles.audioimg} />
            <Text style={styles.audiencetext}>0 audience</Text>
            </View>
            
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} >
            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'5%'}}>
                <View >
                    <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                    />
                </View>
                <View>
                    <FlatList
                    data={DATA2}
                    renderItem={renderItem2}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                     horizontal={false}
                    />
                </View>
             </View>
             </ScrollView>
             <View style={{alignItems:'flex-end',}}>
                    <TouchableOpacity
                        style={styles.shoertTouchableOpacitytext}
                        activeOpacity = { .5}
                        onPress={() => openpopup()}>
                        <Text style={styles.homecontinuebutton}>Buy now</Text>
                    </TouchableOpacity>
               </View>
            <View style={{marginHorizontal:'5%',marginVertical:'2%',}}>
            <TextInput
            style={styles.seView}
            onChangeText={onChangeFirst}
            value={First}
            placeholder="Send a message"
            placeholderTextColor="#999999" 
            />

            </View>
            </ImageBackground>
                    
        </KeyboardAvoidingView>
    )
}

export default clothing