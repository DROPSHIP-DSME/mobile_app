import React, { useRef, useState,useEffect } from 'react';
import { Text, View,Image,TouchableOpacity, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import { useNavigation } from '@react-navigation/native';
import { RadioButton ,Provider ,Modal, Portal, Button,} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'; 
import { useFocusEffect } from '@react-navigation/native';


const Footer3 = (props) => {
 
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        onSelection,
    } = props;

    const navigation = useNavigation();

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    // Local states
    const [visible, setVisible] = React.useState(false);
    const [IsLogin, setIsLogin] = React.useState('');
    
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

    useEffect(() => {
       getBrandUserId();
    }, [])

    const getBrandUserId = async () => {
        var getIsLogin = await AsyncStorage.getItem('userLogin');
        setIsLogin(getIsLogin);
    }

    useFocusEffect(
        () => {
        getBrandUserId();
     })
  
    const containerStyle = {backgroundColor: 'white', padding: '7%',marginHorizontal:'5%',alignItems:'center'};
       
    const showConfirmDialog = () => {
        alert(props?.loginuserstatus)
       /* if(props?.loginuserstatus=="1"){
            navigation.navigate('Profilee'); 
        }else {
            return Alert.alert(
              "",
              "You need to login to access this screen",
              [
                // The "Yes" button
                {
                  text: "Login",
                  onPress: () => {
                   navigation.navigate('RegistrationShop');
                  },
                },
              ]
            );
        }*/
     };


  

    return (

        <View style={styles.footerView}>
         
         <View style={styles.maincartviewfooter}>
         

          <TouchableOpacity onPress={() => { navigation.navigate('watchlist'); }}>
            {onSelection==1 ?
                <View>
                     <Image source={ImageIcons.blackhome}  style={[styles.home2,{marginTop:2,tintColor:'#b80000'}]} />
                     <Text style={styles.customertextrednew}>Home</Text>        
                </View>
            :
                <View>
                     <Image source={ImageIcons.blackhome}  style={[styles.home2,{marginTop:2}]} />
                     <Text style={styles.customertext}>Home</Text>        
                </View>
            }
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('upcoming'); }}>
            {onSelection==2 ?
                <View>
                     <Image source={ImageIcons.camera}  style={[styles.home2,{tintColor:'#b80000'}]} />
                     <Text style={styles.customertextrednew}>Livestreams</Text>         
                </View>
            :
                <View>
                     <Image source={ImageIcons.camera}  style={styles.home2} />
                     <Text style={styles.customertext}>Livestreams</Text>         
                </View>
            }
        </TouchableOpacity> 

        <TouchableOpacity onPress={() => navigation.navigate("Overview")} >
            {onSelection==3 ?
                <View>
                     <Image source={ImageIcons.sell}  style={[styles.home2,{tintColor:'#b80000',height:20}]} />
                     <Text style={[styles.customertextrednew,{paddingTop:5}]}>Sell</Text>
                </View>
             :
                 <View>
                     <Image source={ImageIcons.sell}  style={[styles.home2,{height:20,tintColor:'#828282'}]} />
                     <Text style={[styles.customertext,{paddingTop:5}]}>Sell</Text>
                </View>
            }

        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('shop'); }}>
         {onSelection==4 ?
             <View>
                 <Image source={ImageIcons.event}  style={[styles.home2,{tintColor:'#b80000'}]} />
                 <Text style={styles.customertextrednew}>Seller</Text>         
            </View>
        :
            <View>
                 <Image source={ImageIcons.event}  style={styles.home2} />
                 <Text style={styles.customertext}>Seller</Text>         
            </View>
        }
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Account');  }}>
         {onSelection==5 ?
             <View>
                 <Image source={ImageIcons.account}  style={[styles.home2,{tintColor:'#b80000'}]}  />
                 <Text style={styles.customertextrednew}>Account</Text>         
            </View>
        :
            <View>
                 <Image source={ImageIcons.account}  style={styles.home2} />
                 <Text style={styles.customertext}>Account</Text>         
            </View>
        }
        </TouchableOpacity>

        </View>
       
        </View>

    )
}


export default Footer3