import React, { useRef, useState } from 'react';
import { Text, View,TouchableOpacity,Image,TextInput, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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

const EmmaRose = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference
   
    // Local states

    const [text1, onChangeText1] = React.useState("Type here");



    return (
       <View style={{flex:1,backgroundColor:'#FFE7E7',}}>
            
           <View style={{flex:8}}>
           </View>
             
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7'}} >
            <View >
            <View style={styles.chatView}>
                 <Text style={styles.chattingtime}>12:23</Text>
                 <Text style={styles.chattingtext}>There are many variations of passages</Text>
            </View>

            <View style={styles.chatlongView}>
            <Text style={styles.chattingtext}>Country to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical
                 Latin litrature from 45 BC making over 2000 years old.It is difficult to believe.</Text>
            <Text style={styles.chattingtime2}>12:23</Text>
            </View>
            <View style={styles.chatView}>
                 <Text style={styles.chattingtime}>12:23</Text>
                 <Text style={styles.chattingtext}>There are many variations of passages</Text>
            </View>
             </View>
            
            <View >
            <View style={styles.chatrightView}>
                  <Text style={styles.hellotext}>Hello</Text>
                  <Text style={styles.chattingtime}>12:25</Text>
            </View>

            <View style={styles.chatrightView}>
                  <Text style={styles.hellotext}>I am very well</Text>
                  <Image source={ImageIcons.smile}  style={styles.smile1} />
                  <Text style={styles.chattingtime}>12:25</Text>
            </View>
            </View>
           </ScrollView>
            <View style={styles.accountmainview}>
            <View style={{width:'75%'}}>
                <TextInput  style={styles.chatinput}
                placeholder="Enter your message"
                onChangeText={onChangeText1}
                value={text1}
                placeholderTextColor="#999999"
                />
                
                <Image source={ImageIcons.sending}  style={styles.sendmsg1} />
                
            </View>

            <View style={styles.chatsupportimgView}>
                 <Image source={ImageIcons.audioo}  style={styles.audio1} />
            </View>
            </View>
       </View>       
    )
}
export default EmmaRose