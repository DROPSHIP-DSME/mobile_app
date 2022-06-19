import React, { useRef, useState,useEffect } from 'react';
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
import { Rating, AirbnbRating } from 'react-native-ratings';
 import {FlatListSlider} from 'react-native-flatlist-slider';

const AddStore2 = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference
    const productId = props?.route?.params?.productId;
    const shopId = props?.route?.params?.shopId;
    const categoryId = props?.route?.params?.categoryId;

    const [Suggested, onChangeSuggested] = React.useState("");
    const [Margin, onChangeMargin] = React.useState("");
    const [originalprice, onChangeoriginalprice] = React.useState("");
    const [Price, onChangePrice] = React.useState(props?.getlistproductdetails?.data?.productPrice);
    const [Profit, onChangeProfit] = React.useState("");
    const [Tittle, onChangeTittle] = React.useState(props?.getlistproductdetails?.data?.productName);
    const [Description, onChangeDescription] = React.useState(props?.getlistproductdetails?.data?.productDescription);
    const [Weight, onChangeWeight] = React.useState(props?.getlistproductdetails?.data?.productWeight);
    const [Inventory, onChangeInventory] = React.useState(props?.getlistproductdetails?.data?.productInventory);

    useEffect(() => {
        props.getAllproductdetails(productId);
        //console.log('asdsd',props.getcartlist);
    }, [])


    // Vendor request submission
    const handleSendRequestSubmit = async () => {
        Keyboard.dismiss();
        if (Tittle == "") {
            Alert.alert('Tittle is required')
        }else if (Description == "") {
            Alert.alert('Description is required')
        } else if (Weight == "") {
            Alert.alert('Weight is required')
        } else if (Inventory == "") {
            Alert.alert('Inventory is required')
        }else if (Price == "") {
            Alert.alert('Price is required')
        } else if (Suggested == "") {
            Alert.alert('Suggested price is required')
        } else if (originalprice == "") {
            Alert.alert('original price is required')
        } else if (Margin == "") {
            Alert.alert('Margin is required')
        } else if (Profit == "") {
            Alert.alert('Profit is required')
        } else {   
            let request = {
                "productName":Tittle,
                "categoryId":categoryId,
                "userId":props?.loginuserid,
                "productImage":props?.getlistproductdetails?.data?.productImage,
                "productDescription":Description,
                "productPrice":Suggested,
                "productWeight":Weight,
                "productInventory":Inventory,
                "shopId":shopId,
                "productSetPrice":Price,
                "productSuggestPrice":originalprice,
                "productMargin":Margin,
                "productProfit":Profit,
                "oldProductId": productId
            }
            props.createproduct3(request, props.navigation, "vendor");
        }
    }

    

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
            
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#fce8e8'}}>

             <View style={{marginHorizontal:'3%',marginTop:'4%'}}>
              <View style={{ padding:20}}>
                {props?.getlistproductdetails?.ProductImages?.length>0 ?
                <FlatListSlider
                    data={props?.getlistproductdetails?.ProductImages}
                    height={250}
                    timer={5000}
                    imageKey={'Image'}
                    contentContainerStyle={{paddingHorizontal: 1}}
                    indicatorContainerStyle={{position:'absolute', bottom: 20,left:20}}
                    indicatorActiveColor={'#8A8A8A'}
                    indicatorInActiveColor={'#ffffff'}
                    indicatorActiveWidth={5}
                    animation
                /> 
                :
                <View>
                    <Image source={{uri:props?.getlistproductdetails?.data?.productImage}} style={styles.jeansimg} />
                </View>
                }
                </View>
             
                <View style={styles.amazingtextView}>
                    <Image source={ImageIcons.girl} style={styles.girlimg} />
                    <Text style={styles.namebrandtext}>Name of brand {'\n'}
                    <Text style={styles.UNDERlinetext}>View brand</Text></Text>
                </View>
                <View style={{marginTop:'8%'}}>
                 <View>
                  <Text style={styles.CHANGETEXTTITLE}>Change Tittle(optional)</Text>
                 </View>
                     <View>
                        <TextInput
                         style={styles.inputstore}
                         onChangeText={onChangeTittle}
                         value={Tittle}
                         placeholder="Tittle"
                         placeholderTextColor="#999999" 

                        />
                    </View>
                    
                </View>
                <View style={{marginTop:'5%'}}>
                <Text style={styles.CHANGETEXTTITLE}>Change Description(optional)</Text>
                    <TextInput
                    style={styles.inputdescript}
                    onChangeText={onChangeDescription}
                    value={Description}
                    multiline={true}
                    placeholderTextColor="#999999" 
                     placeholder="Sunt do tempor amet dolore officla veniam execepteur. Aute consequat is non velit exercitation elit irure nostrud alliqua eu fuglat ut deserunt.Aute consequat is non velit exercitation elit irure nostrud alliqua eu fuglat ut deserunt.Aute consequat is non velit exercitation elit irure nostrud alliqua eu fuglat ut deserunt."
                    />
                </View>
                <View style={{marginTop:'6%',}}>
                   <View style={{marginTop:'2%',flexDirection: 'row',}}>
                         <View style={styles.labelview}>
                          <Text style={styles.DELIVERYTEXTTITLE}>Weight</Text>
                            <TextInput
                            style={styles.inputstore}
                            onChangeText={onChangeWeight}
                            value={Weight}
                             placeholder="20kg"
                             placeholderTextColor="#999999" 
                            />
                        </View>
                        <View style={styles.labelview}>
                         <Text style={styles.DELIVERYTEXTTITLE}>Inventory</Text>
                            <TextInput
                            style={styles.inputstore}
                            onChangeText={onChangeInventory}
                            value={Inventory}
                             placeholder="1000 available"
                             placeholderTextColor="#999999" 
                            />
                        </View>
                    </View>
                </View>
                <View style={{marginTop:'6%',}}>
                  <View>
                  <Text style={styles.boldhadertext1}>PRICING</Text>
                 </View>
                   <View style={{marginTop:'2%',flexDirection: 'row',}}>
                         <View style={styles.labelview}>
                          <Text style={styles.DELIVERYTEXTTITLE}>Set your price</Text>
                            <TextInput
                            style={styles.inputstore}
                            onChangeText={onChangePrice}
                            value={Price}
                             placeholder="$ 60"
                             placeholderTextColor="#999999" 
                            />
                        </View>
                        <View style={styles.labelview}>
                         <Text style={styles.DELIVERYTEXTTITLE}>Suggested price</Text>
                            <TextInput
                            style={styles.inputstore}
                            onChangeText={onChangeSuggested}
                            value={Suggested}
                             placeholder="$ 55"
                             placeholderTextColor="#999999" 
                            />
                        </View>
                    </View>
                </View>
                <View style={{marginTop:'8%'}}>
                 <View>
                  <Text style={styles.DELIVERYTEXTTITLE}>original price (customer will not see this)</Text>
                 </View>
                     <View>
                        <TextInput
                        style={styles.inputstore}
                        onChangeText={onChangeoriginalprice}
                        value={originalprice}
                         placeholder="$ 50"
                         placeholderTextColor="#999999" 
                        />
                    </View>
                    
                </View>
                <View style={{marginTop:'6%',}}>
                   <View style={{marginTop:'2%',flexDirection: 'row',}}>
                         <View style={styles.labelview}>
                          <Text style={styles.DELIVERYTEXTTITLE}>Margin</Text>
                            <TextInput
                            style={styles.inputstore}
                            onChangeText={onChangeMargin}
                            value={Margin}
                             placeholder="0%"
                             placeholderTextColor="#999999" 
                            />
                        </View>
                        <View style={styles.labelview}>
                         <Text style={styles.DELIVERYTEXTTITLE}>Profit</Text>
                            <TextInput
                            style={styles.inputstore}
                            onChangeText={onChangeProfit}
                            value={Profit}
                             placeholder="0"
                             placeholderTextColor="#999999" 
                            />
                        </View>
                    </View>
                </View>
                <View style={{alignItems:'center',marginVertical:'10%'}}>
                    <TouchableOpacity
                        style={styles.TouchableOpacitybrand}
                        activeOpacity = { .5}
                        onPress={() => handleSendRequestSubmit()}>
                        <Text style={styles.moretbutton}>Add to shop</Text>
                    </TouchableOpacity>
               </View>
                
             </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}


export default AddStore2