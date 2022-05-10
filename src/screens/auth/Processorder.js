import React, { useRef, useState,useEffect} from 'react';
import { Text, View,Image,TextInput,FlatList, StatusBar,ImageBackground, ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import Footer2 from '../../screens/common/Footer2';
import { useFocusEffect } from '@react-navigation/native';

const Processorder = (props) => { 

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    useEffect(() => {
        //props.getprocesstlist(props?.loginuserid);
        //console.log('props?.getchatsupportlist1',props.getchatsupportlist1)
    }, [])

    useFocusEffect(() => {
        props.getprocesstlist(props?.loginuserid);
     })
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
     


    const [orderdata,setorderdata]=useState([
        {
            name:"Kenitled",cloths:"winter cloths",orderby:"koyajosya"
        },
          {
            name:"Kenitled",cloths:"winter cloths",orderby:"koyajosya"
        },
         {
            name:"Kenitled",cloths:"winter cloths",orderby:"koyajosya"
        },
         {
            name:"Kenitled",cloths:"winter cloths",orderby:"koyajosya"
        },
        
         ]);

    const renderItem = ({ item,index }) => {
   return(
    <View>
           
           <View>     
                <View style={styles.process13}>
                <Image source={{uri: item.productId.productImage}}  style={styles.over16} />
                <View style={{width:'28%',marginLeft:'2%'}}>
                <Text style={styles.over17}>{item.productId.productName}</Text>
                <Text style={styles.over17}>${item.productId.productPrice}</Text>
                </View> 
                <Text style={styles.process17}>{item.loggedInUserId.userName}</Text>
                <View style={{justifyContent:"space-between",flexDirection:'row',width:'32%'}}> 
                <Text style={styles.process18}>{item.status}</Text>
                <TouchableOpacity  onPress={() => {props.navigation.navigate("Order",{orderNumber:item.orderNumber}) }}>
                <Image source={ImageIcons.arroricon}  style={styles.process19} />
                </TouchableOpacity>
                </View>    
                </View>
            </View>
          
            </View>
    );
    }

    return (
        
       <View style={{flex:1,backgroundColor:'#fce8e8'}}>
       <StatusBar backgroundColor={'#B80000'} barStyle="dark-content" translucent={true} /> 
            <View style={styles.addstoreView}>
             <Text style={styles.over2}>Orders</Text>
                
            </View>
                <View style={styles.process7}>
                    <TouchableOpacity  onPress={() => {props.navigation.navigate("Inorder") }}> 
                    <Text style={styles.process8}>Incoming Orders</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'column',justifyContent:'space-between'}}>
                      <View style={{marginLeft:10}}>
                       <Text style={styles.process9}>Processed orders</Text></View>
                      <View style={styles.process10} />
                    </View> 
                </View>

                <View style={{flexDirection:'row',marginLeft:'4%',marginTop:'4%'}}>
                    <Text style={styles.process11}>{props?.getprocessorderlist?.length} Orders</Text>
                    <Text style={styles.process12}>processed</Text>
                </View>
                <View style={{marginVertical:'2%'}}>
                    <FlatList
                    data={props?.getprocessorderlist || []}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                    />
                </View>
            
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
         <Image source={ImageIcons.neworderred}  style={styles.footer4img} />
         <Text style={styles.customertextfooter2}>Orders</Text>         
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("More")} >
         <View >
         <Image source={ImageIcons.more}  style={styles.footer2img} />
         <Text style={styles.customertextfooter}>More</Text>         
        </View>
        </TouchableOpacity>

        </View>

       </View>
               </View>




                
        
    )
}


export default Processorder