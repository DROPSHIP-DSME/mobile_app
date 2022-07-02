import React, { useRef, useState,useEffect } from 'react';
import { Text, View,Image,TextInput, ImageBackground, ScrollView,FlatList, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard,StatusBar} from 'react-native';
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
import { Rating ,AirbnbRating} from 'react-native-ratings';
import RnIncrementDecrementBtn  from 
'react-native-increment-decrement-button';
import DashedLine from 'react-native-dashed-line';
import Footer3 from '../../screens/auth/Footer3';
import Shopheader from '../../screens/auth/Shopheader';

import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-community/async-storage'; 
import AwesomeAlert from 'react-native-awesome-alerts';


const Cart = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    useEffect(() => {
        
    }, [])

    useEffect(() => {
       getBrandUserId();
       console.log(props?.cartlistdata1,'poonam')
    }, [])

    const getBrandUserId = async () => {
        //alert(props?.loginuserid)
        props.cartdata(props?.loginuserid);
    }

    //Reference
    const [UserID, setUserID] = useState("");
    const [IsLogin, setIsLogin] = useState("");
    // Local states
    const [showAlert, setshowAlert] = React.useState(false);
    const [Incval, setIncval] = useState(1);


    const setIncrement = async (Incval,cartId) => {
           props.increcartlist(cartId, Incval);  
     };

    const setdeletedata = async (cartId) => {
        props.deletedata(cartId,props.navigation);
         props.cartdata(props?.loginuserid); 
     }

   
    const checklogin =  async () => {
        if(props?.loginuserstatus=="1"){
           props.navigation.navigate("StoreOwner")
         }else {
            setshowAlert(true)
        }  
    }
    

    const renderItem = ({ item, index }) => {
        return (
    <View>
       <View style={styles.Viewcart} >
            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                <CheckBox
                checkedColor='red'
                value={true}
                disabled={false}
                />
            <View>
                <Text style={styles.clothingbrandtext}>{item.productId?.productName}</Text>
             
                <View style={{flexDirection: 'row',}}>
                    <Text style={styles.beautytext}>${item.productId?.productPrice}</Text>
                    <Text style={styles.beautycarttext}>In stock</Text>
                </View>
                <View  style={{flexDirection: 'row',marginVertical:'4%',}} >
                    <View>
                        <RnIncrementDecrementBtn
                        minVal={1} 
                        minreq={1} 
                        max={99}
                        val={parseInt(item.productQuantity)}
                        styleBtn={{width:30.6,height:26,backgroundColor:'#F3F3F3'}}
                        styleTextInput={{width:38.25,height:26,backgroundColor:'#F3F3F3'}}
                        labelStyle={{fontSize:15,marginTop:'1%',color:'#223263',fontFamily:'hinted-AvertaStd-Regular'}}
                        handleClick={(val)=> setIncrement(val,item._id)}
                        />
                    </View>
                    <TouchableOpacity   onPress={() =>setdeletedata(item._id)}>
                        <Image source={ImageIcons.deleticon}  style={styles.crt10} />
                    </TouchableOpacity>
                </View>
            </View>
            </View>
                <View>
                    <Image source={{uri:item.productId?.productImage}}  style={styles.sucessimage} />
                </View>
        </View>

        
    </View>
        )
    }

    return (
    
     <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
     style={styles.registrationRoot}> 

      <ScrollView style={{backgroundColor:'#ffffff'}}> 
        <View style={{paddingTop:0}}>
        <View style={styles.addstoreView} >
        <View style={{alignSelf:'center'}}>
              <Text style={{padding:10,fontSize:35,color:"#B80000",fontFamily:'hinted-AvertaStd-Bold',fontWeight:"bold"}}>Cart</Text>

          </View>
           
        </View>
        <View style={{marginHorizontal:'3%',marginVertical:'2%'}}>
        <Text style={styles.cartclothtext}>Aded items</Text>
        </View>

        <View>
            <FlatList
                data={props?.cartlistdata1 || []}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
        { props?.cartlistdata1?.length>0 ?
            <TouchableOpacity style={{ backgroundColor:"#E22020",marginHorizontal:'6%',borderRadius:30,marginBottom:'18%',marginTop:'10%' }} onPress={() => { checklogin() }}>
                <Text style={styles.crt21}>Check Out</Text> 
            </TouchableOpacity>
        :
          <Text style={{ textAlign:'center',paddingTop:30,fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'}}>No Items added in cart yet</Text>
        } 
      </View>
     </ScrollView>

     
        <Footer3  />          
 
    <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="DROPSHIP"
          message="You need to login to access this screen!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Cancel"
          confirmText="Login"
          confirmButtonColor="#E22020"
          onCancelPressed={() => {
            setshowAlert(false)
          }}
          onConfirmPressed={() => {
             setshowAlert(false)
             navigation.navigate('Golive');
          }}
        />

</KeyboardAvoidingView>


                
        
    )
}

export default Cart