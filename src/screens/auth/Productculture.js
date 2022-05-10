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



const Productculture = (props) => {

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
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    // Local states
    const [wayToContact, setWayToContact] = useState("Phone");
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

    return (

    <View style={{flex:1,backgroundColor:'#fce8e8',}}>
    
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'6%',marginTop:'5%'}}>
        <View style={styles.livec24}>
        <Text style={styles.livec12}>Footwear</Text>
        </View>

        <View
        style={styles.livec25}>
        <Text style={styles.livec13}>Soccer</Text> 
        </View>

        <View
        style={styles.livec26}>
        <Text style={styles.livec13}>Rainbow</Text>
        </View>
        </View>
      <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7'}} >
        <View style={styles.maincartview}>
         <View style={styles.comingView}>
        <Image source={ImageIcons.basket} style={styles.jeansimg} />
        <View style={{flexDirection:'row',position:'absolute',top:15,left:15}}>
        <View >
        <Image source={ImageIcons.liveicon} style={styles.liveicon3} />
        </View>
        <Text style={styles.livetextred}>Live</Text>
        </View>
        <View style={{position:'absolute',bottom:'7%',left:15}}>
        
          <Text style={styles.upcomingtext2}>Beauty brands</Text>
          </View>
        </View>

        <View style={styles.comingView}>
        <Image source={ImageIcons.clothes} style={styles.jeansimg} />
        <View style={styles.comingshort}>
         <Text style={styles.shorttest}>Notify me</Text>
        </View>
        <View style={{position:'absolute',bottom:'7%',left:15}}>
         <Text style={styles.upcomingtext}>Live tomorrow by 10PM</Text>
          <Text style={styles.upcomingtext2}>Beauty brands</Text>
          </View>
        </View>
        </View>
        
        <View style={styles.maincartview}>
         <View style={styles.comingView}>
        <Image source={ImageIcons.theme} style={styles.jeansimg} />
        <View style={styles.comingshort}>
         <Text style={styles.shorttest}>Notify me</Text>
        </View>
        <View style={{position:'absolute',bottom:'7%',left:15}}>
         <Text style={styles.upcomingtext}>Live tomorrow by 10PM</Text>
          <Text style={styles.upcomingtext2}>Beauty brands</Text>
          </View>
        </View>

        <View style={styles.comingView}>
        <Image source={ImageIcons.clothes} style={styles.jeansimg} />
        <View style={styles.comingshort}>
         <Text style={styles.shorttest}>Notify me</Text>
        </View>
        <View style={{position:'absolute',bottom:'7%',left:10}}>
         <Text style={styles.upcomingtext}>Live tomorrow by 10PM</Text>
          <Text style={styles.upcomingtext2}>Beauty brands</Text>
          </View>
        </View>
        </View>

        <View style={styles.maincartview}>
         <View style={styles.comingView}>
        <Image source={ImageIcons.basket} style={styles.jeansimg} />
        <View style={{flexDirection:'row',position:'absolute',top:15,left:15}}>
        <View >
        <Image source={ImageIcons.liveicon} style={styles.liveicon3} />
        </View>
        <Text style={styles.livetextred}>Live</Text>
        </View>
        <View style={{position:'absolute',bottom:'7%',left:15}}>
         
          <Text style={styles.upcomingtext2}>Beauty brands</Text>
          </View>
        </View>

        <View style={styles.comingView}>
        <Image source={ImageIcons.clothes} style={styles.jeansimg} />
        <View style={styles.comingshort}>
         <Text style={styles.shorttest}>Notify me</Text>
        </View>
        <View style={{position:'absolute',bottom:'7%',left:15}}>
         <Text style={styles.upcomingtext}>Live tomorrow by 10PM</Text>
          <Text style={styles.upcomingtext2}>Beauty brands</Text>
          </View>
        </View>
        </View>
      </ScrollView>
    </View>

        
    )
}


export default Productculture