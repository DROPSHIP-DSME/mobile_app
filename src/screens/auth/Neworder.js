import React, { useRef, useState,useEffect } from 'react';
import { Text, View,Image,TextInput,FlatList, ImageBackground,Dimensions, ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const Neworder = (props) => {
 
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

     useEffect(() => {
        props.getincomingtlist(props?.loginuserid);
        //console.log('props?.getchatsupportlist1',props.getchatsupportlist1)
    }, [])

     const [orderdata,setorderdata]=useState([
        {name:"Kenitled",cloths:"winter cloths",orderby:"koyajosya"},
          {name:"Kenitled",cloths:"winter cloths",orderby:"koyajosya"},{name:"Kenitled",cloths:"winter cloths",orderby:"koyajosya"},
         {name:"Kenitled",cloths:"winter cloths",orderby:"koyajosya"},
          {name:"Kenitled",cloths:"winter cloths",orderby:"koyajosya"},{name:"Kenitled",cloths:"winter cloths",orderby:"koyajosya"},
           {name:"Kenitled",cloths:"winter cloths",orderby:"koyajosya"},
          {name:"Kenitled",cloths:"winter cloths",orderby:"koyajosya"},{name:"Kenitled",cloths:"winter cloths",orderby:"koyajosya"},
           {name:"Kenitled",cloths:"winter cloths",orderby:"koyajosya"},
          {name:"Kenitled",cloths:"winter cloths",orderby:"koyajosya"},{name:"Kenitled",cloths:"winter cloths",orderby:"koyajosya"},

          ]);


    

     const renderItem = ({ item,index }) => {
   return(
    <View>
           
           <View>     
                <View style={styles.over15}>
                  <Image source={{uri: item.productId.productImage}}  style={styles.over16} />
                  <View style={{width:'40%',marginLeft:'2%'}}> 
                        <Text style={styles.over29}>{item.productId.productName}</Text>
                        <Text style={styles.over29}>${item.productId.productPrice}</Text>
                   </View> 
                    <View style={{flexDirection:'row',marginHorizontal:'0%'}}> 
                       <Text style={styles.over30}>{item.loggedInUserId.userName}</Text>
                       <TouchableOpacity onPress={() => {props.navigation.navigate("Order",{orderNumber:item.orderNumber}) }}>
                              <Image source={ImageIcons.arroricon}  style={styles.over31} />
                       </TouchableOpacity>      
                    </View>      
                </View>
              <View style={styles.over21} ></View>
            </View>
          
            </View>
    );
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>

            
        
       <ScrollView style={{flex:1,backgroundColor:'#fce8e8'}}> 
                    
                    


             <View style={{flexDirection:'row',marginLeft:'6%',marginTop:'3%'}}>
                  <View style={{width:'48%'}}>
                     <Text style={styles.over13}>Product</Text>
                  </View>
                 <View >
                        <Text style={styles.over26}>Ordered by</Text>
                 </View>

             </View>


            <View style={{marginVertical:'2%'}}>
                <FlatList
                data={props?.getinconeorderlist || []}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal={false}
                />
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
  
        </KeyboardAvoidingView>

                
        
    )
}

export default Neworder