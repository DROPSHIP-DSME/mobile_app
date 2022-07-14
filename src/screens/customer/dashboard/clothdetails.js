import React, { useRef, useState } from 'react';
import { Text, View,TouchableOpacity,Image,TextInput, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../../screens/common/styles';
import { Colors, CommonStrings } from '../../../common'
import ImageIcons from '../../../common/ImageIcons'
import InputField from '../../../components/forms/inputField';
import { RoundedButton } from '../../../components/forms/button';
import { phoneRegExp } from '../../../services/helper';
import DropdownField from '../../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../../components/modals/Loader';
import { RadioButton ,Provider ,Modal, Portal, Button,} from 'react-native-paper';

const clothdetails = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference
    
    const [visible, setVisible] = React.useState(false);
    const cartdataSubmit = async () => {
        openpopup();
        
        let request = {
             "productId":"619cae1899ca84ee9ee92685",
            "userId":"60f97db9122e4bd68dd61c4a",
            "productQuantity":5
            }
            props.cartadd(request, props.navigation, "vendor");
        }

    const openpopup = () => {
        setVisible(true)

        }
            const closepopup = () => {
          setVisible(false)
        }
       const containerStyle = {backgroundColor: 'white', padding: '7%',marginHorizontal:'5%',alignItems:'center'};



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
        
            <ImageBackground
                style={{ flex: 1,}}
                source={ImageIcons.boybackground}
                imageStyle={{ resizeMode: 'cover' }}
            >
            <View >
            <TouchableOpacity onPress={() => {props.navigation.navigate("watchlist") }}>
            <Image source={ImageIcons.arrow} style={styles.leftIconwhite}  />
            </TouchableOpacity>
            <View style={{marginBottom:10,marginHorizontal:'5%'}}>
             <Image source={ImageIcons.Vector} style={styles.imgvector} /></View>
             <View style={{marginBottom:10,marginHorizontal:'5%'}}>
             <Image source={ImageIcons.copy} style={styles.imgvector2}  /></View>
             <View style={{marginBottom:10,marginHorizontal:'5%'}}>
             <Image source={ImageIcons.Vectorshare} style={styles.imgvector} /></View>
            </View>

            <View style={{width:'95%',height:345,borderRadius:5,borderWidth:1,borderColor:'#F2F2F2',backgroundColor:'rgba(255, 255, 255, 0.9)',marginHorizontal:'3%',top:'35%'}}>
             <View style={styles.mobaileView}>
             <View>
              <Image source={ImageIcons.clothes} style={styles.clothes} />
              </View>
              <View>
              <Text style={[styles.boldproduct,{marginLeft:'7%'}]}>Clothing items to be sold</Text>
              <Text style={styles.clothcamtext}>$0</Text>
              </View>
             </View>
             <View >
             <Text style={[styles.viewdegaulletext,{marginVertical:'1%'}]}>Sunt do tempor amet dolore officia veniam excepteur. Aute consequat in non velit exercitation elit irure nostrud aliqua eu fugiat ut deserunt. Aute consequat in non velit exercitation elit irure nostrud aliqua eu fugiat ut deserunt.</Text>
            </View>
            
                <View style={{alignItems:'center',marginTop:'7%'}}>
                    <TouchableOpacity
                        style={styles.TouchableOpacitytext}
                        activeOpacity = { .5}
                        onPress={() => cartdataSubmit()}>
                        <Text style={styles.homecontinuebutton}>Buy now</Text>
                    </TouchableOpacity>
               </View>
               <View style={{alignItems:'center',marginTop:'4%'}}>
                    <TouchableOpacity
                        style={styles.Touchableselltext}
                        activeOpacity = { .5}
                        >
                        <Text style={styles.sellbutton}>Add to shop</Text>
                    </TouchableOpacity>
                </View>
            </View>
            { openpopup  &&
                    <Provider>
                    <Portal>
                    <Modal visible={visible} onDismiss={closepopup} contentContainerStyle={containerStyle}>
                    <Image source={ImageIcons.greencart}  />
                    <Text style={styles.produttext}>Added to cart</Text>
                    <Text style={styles.addimagetext}>Product added to your cart successfully</Text>
                    <TouchableOpacity style={styles.modalbutton} 
                    onPress={() => props.navigation.navigate("shop")}>
                    <Text style={styles.modaltouchablitytext2} >Continue Shopping</Text></TouchableOpacity>
                    <TouchableOpacity  
                    onPress={() => props.navigation.navigate("Cart") }>
                    <Text style={[styles.boldhadertext,{marginVertical:'5%'}]}>Go to cart</Text>
                    </TouchableOpacity>
                    </Modal>
                    </Portal>
                    </Provider>
                }
           
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

export default clothdetails