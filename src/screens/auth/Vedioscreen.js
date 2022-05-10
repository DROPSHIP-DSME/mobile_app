import React, { useRef, useState } from 'react';
import { Text, View,Image, ImageBackground,TouchableOpacity, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import Footer from '../../screens/common/Footer';
import Video from 'react-native-video';

const Vedioscreen = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference
    
   

    return (
        <View style={{
                    alignItems: "center",
                    justifyContent: "center"
}}>
        
    
              <View
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            width: "100%",  
                           
                            alignItems: "center",
                            height: '100%',
                            backgroundColor: null
                        }}
                    >

                
                

        </View>
        </View>


        
    )
}


export default Vedioscreen