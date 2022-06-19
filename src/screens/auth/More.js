import React, { useRef, useState } from 'react';
import { Text, View,Image,TextInput, ImageBackground,Dimensions, ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import Footer2 from '../../screens/auth/Footer2';


const More = (props) => {


     const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference
    return (
       <View style={{flex:1,backgroundColor:'#fce8e8'}}> 
       <ScrollView style={{marginBottom:80}}>
                     <View style={styles.more1}> 
                           <Text style={styles.more2}>More </Text>
                                
                     </View>
                     <View style={styles.more3}>
                           <Text style={styles.more4}>Support </Text>
                           <TouchableOpacity  onPress={() => {props.navigation.navigate("Support") }}>
                        <Image source={ImageIcons.rightarrow} style={styles.more5} />
                        </TouchableOpacity>
                     </View>



                      <View style={styles.more6}>
                         
                           <Text style={styles.more7}>Sales analytic </Text>
                          <TouchableOpacity  onPress={() => {props.navigation.navigate("SalesAnalytic") }}>
                           <Image source={ImageIcons.rightarrow} style={styles.more8} />
                          </TouchableOpacity>
                     </View>




                    <View style={styles.more9}>
                           <Text style={styles.more10}>Chat with Support </Text>
                            <TouchableOpacity  onPress={() => {props.navigation.navigate("ChatSupport",{userType:'sellside'}) }}>
                           <Image source={ImageIcons.rightarrow} style={styles.more11} />
                           </TouchableOpacity>
                    </View>

                    <View style={styles.more9}>
                           <Text style={styles.more10}>Logout</Text>
                            <TouchableOpacity  onPress={() => {props.navigation.navigate("Login") }}>
                                <Image source={ImageIcons.rightarrow} style={styles.more11} />
                           </TouchableOpacity>
                    </View>

                       <View style={styles.more12}>
                       <View style={{height:deviceWidth/2.5+90}}>
                       
                           <Image source={ImageIcons.vphoto} style={styles.more13} />
                             
                        </View>
                        <View style={{height:deviceWidth/2.5+90}}>     
                           <Image source={ImageIcons.vphoto} style={styles.more13} />
                        </View>   
                       </View>

                     <View style={styles.more12}>
                           <View style={{height:deviceWidth/2.5+90}}>
                        
                           <Image source={ImageIcons.vphoto} style={styles.more13} />
                            
                        </View>
                        <View style={{height:deviceWidth/2.5+90}} >     
                           <Image source={ImageIcons.vphoto} style={styles.more13} />
                        </View>   
                     </View>


</ScrollView>

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

        <TouchableOpacity onPress={() => navigation.navigate("Inorder")} >
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
                     
        </View>
    )
}
export default More