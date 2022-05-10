import React, { useRef, useState,useEffect } from 'react';
import { Text, View,TouchableOpacity,Image,FlatList,TextInput, StatusBar,ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import CheckBox from '@react-native-community/checkbox';
import Footer3 from '../../screens/common/Footer3';
import Shopheader from '../../screens/common/Shopheader';
import styl from './styledrop';

import moment from 'moment';

const upcoming = (props) => {
 
    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    useEffect(() => {

        props.getalleventlist(1);

    }, [])

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();
 
    // Local states
     const [checked, setChecked] = React.useState('first');

    const [First, onChangeFirst] = React.useState("First name");
    const [Lastname, onChangeLastname] = React.useState("Last name");
    const [Email, onChangeEmail] = React.useState("Email address");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("Phone number");
    const [Street, onChangeStreet] = React.useState("Street address");
    const [Zip, onChangeZip] = React.useState("Zip");
    const [City, onChangeCity] = React.useState("City");
    const [Country, onChangeCountry] = React.useState("Country");
    const [showclassName, setshowclassName] = useState("#B80000");

    const [visible, setVisible] = React.useState(false);
    const [isSelected, setSelection] = useState(false);

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
    const joinbroadcast = (itemid,startnow,eventtime) =>{

        if (startnow == true){
            props.navigation.navigate("Blurbackground", { isback: false, channel:itemid , isbroadcaster: false });
        } else {
           alert('Event will start at '+ moment(eventtime).format('MMM DD, hh:mm A'))
        }
    }
    const openpopup = () => {
        setVisible(true)

        }
            const closepopup = () => {
          setVisible(false)
        }
       const containerStyle = {backgroundColor: 'white', padding: '7%',marginHorizontal:'5%',alignItems:'center'};

    // Vendor request submission
   

    const DATA = [
       {
        text:"Beauty brands",
        text1:"$75",
        image:ImageIcons.jeans,
        
       },
       {
        text:"Beauty brands",
        text1:"$75",
        image:ImageIcons.jeans,
        
       },
       

     ];

      const renderItem = ({ item ,index }) => {
        
    
  
   return(

    <View style={styles.maincartviewshop1812}>
    <TouchableOpacity onPress={() =>joinbroadcast(item._id,item.startNow,item.joinbroadcast) }>        
       <View style={{marginHorizontal:5}}>
            <Image source={{uri: item.products[0]?.productImage}} style={styles.jeansimg569} onPress={() => { props.navigation.navigate("clothing") }} />
            <Text style={styles.beautyproduct}>{item.products[0]?.productName}</Text>
                <View style={{borderRadius:50,position:'absolute',top:10,left:10, backgroundColor:'#E22020'}}>
                 <Text style={styles.shorttest1}>Live</Text>
                </View>
                <View style={styl.comingshort1}>
                <View style={{left:7,top:2}}>
                <Image source={ImageIcons.iconpath} style={{width:18,height:18}}/>
                </View>
                 <Text style={styles.shorttest}>45.8K</Text>
                </View>
        </View>
        <View style={{flexDirection:"row",marginTop:10}}>
        <View>
        <Image source={ImageIcons.profileimage} style={{width:35,height:35}}/>
        </View>
        <View style={{paddingTop:10,paddingLeft:10}}>
        <Text style={styl.txt1}>MARTHA STEWART</Text>
        </View>
        </View>
        <Text style={styl.txt2}>50% off Friday Sale for all</Text>
       </TouchableOpacity>
    </View>
   
  );
}

const data=[{text:"ALL"},{text:"CLOTHING & SHOES"},{text:"FURNITURE"},{text:"BEAUTY & HAIR"},{text:"ELECTRONICS"}]

const renderItem1 = ({ item ,index }) => {
   return(
    <View>
    <View style={styles.inorder11}>
            <TouchableOpacity >
            {index==1 ?
                <View style={[styles.livec24,{width:'auto',padding:10,backgroundColor:'#B80000',height:'auto'}]}>
                    <Text style={[styles.livec12,{color:'#ffffff'}]}>{item.text}</Text>
                </View>
            :
                <View style={[styles.livec24,{width:'auto',padding:10,height:'auto'}]}>
                    <Text style={styles.livec12}>{item.text}</Text>
                </View>
            }
            </TouchableOpacity>        
    </View> 
    </View>
  );
} 

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
            <StatusBar backgroundColor={'#B80000'} barStyle="dark-content" translucent={true} /> 
            <Shopheader />
             

            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#ffffff'}} >

             <View style={{marginHorizontal:'3%',paddingTop:'7%'}}>
               <TouchableOpacity onPress={() => props.navigation.navigate("shop")}>
               <Text style={{padding:10,fontSize:35,color:"#B80000",fontFamily:'SourceSansPro',fontWeight:"bold"}}>Livestreams</Text>
               </TouchableOpacity> 
                <View style={{width:'100%'}}>
                    <FlatList
                        data={data}
                        renderItem={renderItem1}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                         numColumns={3}
                    />
                </View>


              
                 
                    <View>
                        <FlatList
                            data={props?.getalleventdata || []}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            numColumns={2}
                        />
                    </View>
                

                    
                </View>
                { openpopup  &&
                    <Provider>
                    <Portal>
                    <Modal visible={visible} onDismiss={closepopup} contentContainerStyle={containerStyle}>
                    <Image source={ImageIcons.sucess} style={styles.sucessimage} />
                    <Text style={styles.Modaltext}>Purchase successful</Text>
                    <Text style={styles.modalsuceestext}>You have successfully the goods in your chart. We will update you as the goods gets dispatched</Text>
                    <TouchableOpacity style={styles.modalbutton} 
                    onPress={() => props.navigation.navigate("SearchProduct")}>
                    <Text style={styles.modaltouchablitytext} >Continue Shopping</Text></TouchableOpacity>
                    </Modal>
                    </Portal>
                    </Provider>
                }
                    </ScrollView>
        <Footer3 onSelection="2" />
        </KeyboardAvoidingView>
    )
}



export default upcoming