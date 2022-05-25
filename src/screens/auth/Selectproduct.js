import React, { useRef, useState,useEffect } from 'react';
import { Text, View,TouchableOpacity,
    Image,TextInput, ImageBackground,
    ScrollView, Alert,
      FlatList,StatusBar,
    KeyboardAvoidingView, Platform,
    Keyboard} from 'react-native';
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
import Footer2 from '../../screens/auth/Footer2';

const Selectproduct = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

//Reference
const eventId = props?.route?.params?.eventId;
const pageName = props?.route?.params?.pageName;
// Local states
 const [checked, setChecked] = React.useState('first');

const [showall, setshowall] = React.useState(false);
const [checkedId, setcheckedId] = React.useState([]);
const [alreadycheckedId, setalreadycheckedId] = React.useState([]);


useEffect(() => {
   props.getAllproduct(props?.loginuserid);
   getalreadyadded();
}, [])

const getalreadyadded = async () => {
    //console.log('alreadycheckedId',props?.livedetail[0].products)
    for (var i = 0; i < props?.livedetail[0].products?.length; i++) {
        alreadycheckedId.push(props?.livedetail[0].products[i]._id);
        setalreadycheckedId(alreadycheckedId)
    }
    console.log('alreadycheckedId',alreadycheckedId)
    setTimeout(function(){ showatochecked();},1000);
}

const showatochecked = async () => {
    for (var i = 0; i < props?.getlistproduct?.length; i++) {
        if(alreadycheckedId.indexOf(props.getlistproduct[i]._id) > -1) {
            checkedId.push(props.getlistproduct[i]._id);
            setcheckedId(checkedId)
        }
    }
    if(props?.getlistproduct?.length>checkedId.length){
        setshowall(false)
    }else {
        setshowall(true)
    }
}

const onlyUnique = async (value, index, self) => {
  return self.indexOf(value) === index;
}

const saveproducttoevent = async () => {
    //for (var i = 0; i < checkedId?.length; i++) {
        var unique = checkedId.filter(onlyUnique);
        props.addproducttoevent(eventId, unique,props?.loginuserid);
    //}
    setTimeout(function(){ props.navigation.navigate(pageName); },1000);
}

const selectAll = async () => {
    if(showall==false){
        setshowall(true)
        for (var i = 0; i < props?.getlistproduct?.length; i++) {
            checkedId.push(props.getlistproduct[i]._id);
            setcheckedId(checkedId)
        }
       // console.log('newcheckedId',checkedId)
    }else {
        setshowall(false)
        setcheckedId([])
        
    }
}

const callAction = async (value) => {
    props.selectAllproduct(props?.getlistproduct);
    for (var i = 0; i < props?.getlistproduct?.length; i++) {
        if(props.getlistproduct[i]._id==value){
            if(checkedId.indexOf(value) > -1) {
              var index = checkedId.indexOf(value);
              checkedId.splice(index, 1);
              setcheckedId(checkedId)
            } else {
                checkedId.push(value);
                setcheckedId(checkedId)
            }
        }
    }
    if(props?.getlistproduct?.length>checkedId.length){
        setshowall(false)
    }else {
        setshowall(true)
    }
}

const renderItem = ({ item }) => {
    console.log('renderItem',checkedId)
  return(
    <View style={styles.maincartviewshop}>
        <TouchableOpacity onPress={() =>callAction(item._id)}>
            <View>
                <View style={styles.tickmarkview}>
                   {( checkedId.indexOf(item._id) > -1) &&
                    <Image source={ImageIcons.tickmark}  style={styles.tickmarkicon} />
                   }
                </View>
                <Image source={{uri: item.productImage}} style={styles.jeansimgshop} />
                <View>
                   <Text style={styles.boldnewproduct}>{item.productName}</Text>
                   <Text style={styles.salesnewtext}>${item.productPrice}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
  );
}
     return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
           <StatusBar backgroundColor={'#FFE7E7'} barStyle="dark-content" translucent={true} /> 
            <View style={{flex:1,backgroundColor:'#FFE7E7'}}>
                <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7'}} >   
                    <View >
                        <View style={styles.bagimageView}>
                            <View style={{alignItems:'center'}}>
                               <Text style={styles.productstext}>Products</Text>
                            </View>
                            <TouchableOpacity onPress={() =>saveproducttoevent()}>
                                <View style={styles.newcolorView}>
                                    <Text style={styles.fourtytextne}>save</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                            <TouchableOpacity onPress={() =>selectAll()}>
                                <View style={{flexDirection:'row',marginHorizontal:'5%',alignItems:'center',marginTop:'1%'}}>
                                        <View style={{width:15,height:15,borderWidth:2,borderColor:'#585858'}}>
                                            { showall==true &&
                                                <Image source={ImageIcons.tickmark}  style={styles.tickmarkicon} />
                                            }

                                        </View>
                                    <Text style={styles.selecttstext}>Select all</Text>
                                </View>
                            </TouchableOpacity>
                        <View style={{marginHorizontal:'2%',paddingBottom:'18%'}}>
                            <FlatList
                                data={props?.getlistproduct || []}
                                renderItem={renderItem}
                                keyExtractor={item => item._id}
                                showsHorizontalScrollIndicator={false}
                                numColumns={2}
                                extraData={checkedId}
                            />
                       </View>
                    </View>
                </ScrollView>
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
                 <Image source={ImageIcons.neworder}  style={styles.footer4img} />
                 <Text style={styles.customertextfooter}>Orders</Text>         
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


export default Selectproduct