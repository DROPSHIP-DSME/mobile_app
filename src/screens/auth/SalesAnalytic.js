import React, { useRef, useState,useEffect } from 'react';
import { Text, View,TouchableOpacity,Image,FlatList,TextInput, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
  
const SalesAnalytic = (props) => {

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
     const [checked, setChecked] = React.useState('first');
    const [Paypal, onChangePaypal] = React.useState("Paypal");
    const [Debit, onChangeDebit] = React.useState("Debit Card");

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
        props.gettopsell(props?.loginuserid,3);
        props.getprocesstlist(props?.loginuserid);
        props.gettopcountry(props?.loginuserid);
        //console.log('props?.getchatsupportlist1',props.getchatsupportlist1)
    }, [])

    const renderItem = ({ item,index }) => {
   return(
        <View>

            <View style={styles.seledataView}>
                   <Text style={styles.textseriessale}>{index+1}</Text>
                   <Text style={styles.textseriessale}>{item.productData.productName}</Text>
                   <Text style={styles.textseriessale}>{item.totalAmount}</Text>
               </View>
               <View style={styles.salesBottom}>
               </View>
        </View>
    );
    }

    const renderItem2 = ({ item,index }) => {
   return(
        <View>

            <View style={styles.seledataView}>
                   <Text style={styles.textseriessale}>{index+1}</Text>
                   <Text style={styles.textseriessale}>{item._id}</Text>
                   <Text style={styles.textseriessale}>{item.totalAmount}</Text>
               </View>
               <View style={styles.salesBottom}>
               </View>
        </View>
    );
    }


    return (
        <View>
        <ScrollView style={{ height:'100%',backgroundColor:'#FFE7E7'}}>
               <View>
                  <Text style={[styles.salestext,{marginHorizontal:'3%'}]}>Top selling product</Text>
               </View>
            <View>
               <View style={styles.salesView}>
                   <Text style={styles.seriestext}>S/N</Text>
                   <Text style={styles.seriestext}>Product</Text>
                   <Text style={styles.seriestext}>Units sold</Text>
               </View>
               <View style={{marginVertical:'2%'}}>
                    <FlatList
                    data={props?.gettopsellproduct || []}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                    />
                </View>
            </View>  

             <View style={{marginVertical:'10%'}}>
             <Text style={[styles.salestext,{marginHorizontal:'3%'}]}>Top countries</Text>
               <View>
               <View style={styles.salesView}>
                   <Text style={styles.seriestext}>S/N</Text>
                   <Text style={styles.seriestext}>Country</Text>
                   <Text style={styles.seriestext}>Units sold</Text>
               </View>

               <View style={{marginVertical:'2%'}}>
                    <FlatList
                    data={props?.getlisttopcountry || []}
                    renderItem={renderItem2}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                    />
                </View>
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
        </View>
    )
}

export default SalesAnalytic