import React, { useRef, useState,useEffect } from 'react';
import { Text, View,TouchableOpacity,FlatList,
    Image,TextInput, ImageBackground,
     ScrollView, Alert,StatusBar,  
      KeyboardAvoidingView,Dimensions,
      Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import styl from './styledrop';
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
import Footer3 from '../../screens/auth/Footer3';
import AsyncStorage from '@react-native-community/async-storage'; 
import moment from 'moment';
import Shopheader from '../../screens/auth/Shopheader';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const Search = (props) => {

    const {
        navigation, 
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

     useEffect(() => {
        //alert('d')
        console.log(props?.searchlistdata,'dataaa')
        props.getsearchlist(props?.loginuserid); 
        props.getalleventlist1(1);
    }, [])

    const getBrandUserId = async () => {
        
        onfilterData(props?.getalleventdata);
    }


    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    // Local states
     const [checked, setChecked] = React.useState('first');

    const [First, setFirst] = React.useState("");
    const [Lastname, onChangeLastname] = React.useState("Last name");
    const [Email, onChangeEmail] = React.useState("Email address");
    const [PhoneNumber, onChangePhoneNumber] = React.useState("Phone number");
    const [Street, onChangeStreet] = React.useState("Street address");
    const [Zip, onChangeZip] = React.useState("Zip");
    const [City, onChangeCity] = React.useState("City");
    const [Country, onChangeCountry] = React.useState("Country");
    const [UserID, setUserID] = useState("");
    const [visible, setVisible] = React.useState(false);
    const [pagetype, setpagetype] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefresh, setIsRefresh] = useState(false);
    const [updateextra, setupdateextra] = useState(0);

    const [Paypal, onChangePaypal] = React.useState("Paypal");
    const [Debit, onChangeDebit] = React.useState("Debit Card");
    const [filterData,onfilterData]= React.useState([]);
    const [wayToContact, setWayToContact] = useState("Phone");

    
    const [showclassName, setshowclassName] = useState("#B80000");

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
    const openpopup = () => {
        setVisible(true)

        }
            const closepopup = () => {
          setVisible(false)
        }

        const ratingCompleted = (ratingdata) => {
            console.log('rating',ratingdata)
               if(ratingdata!="" && ratingdata!=undefined){
                //setstarCount(ratingdata)  
               }
              
        }  

        const handleScroll=(pageYOffset)=>{
        if (pageYOffset > 0) {
            setshowclassName('#B80000');  
        }else{
            setshowclassName('#B80000');
        }
    } 

       const containerStyle = {backgroundColor: 'white', padding: '7%',marginHorizontal:'5%',alignItems:'center'};
      const joinbroadcast = (itemid,startnow,eventtime)=>{
            if (startnow == true){
                let request1 = {
                    "channelName":itemid,
                    "appID":"0c96ec2a0c9744c0bb3d21330bb0911d",
                    "appCertificate":"f877b72b55264162bfc8b88421fa8b77",
                    "uid":0
                }
                props.getchanneltoken(request1, props.navigation, "vendor");
                setTimeout(function(){
                    props.navigation.navigate("Blurbackground", { isback: false, channel:itemid , isbroadcaster: false });
                },1000);
                //props.navigation.navigate("Blurbackground", { isback: false, channel: itemid, isbroadcaster: false })
            } else {
                alert('Event will start at '+ moment(eventtime).format('MMM DD, hh:mm A'))
            }
      }
    
    const handleRegistrationSubmit = () => {
        Keyboard.dismiss();
        props.searchitems(First,props?.loginuserid);
        props.getsearchlist(props?.loginuserid); 
    }

    const DATA = [
       {text:"Socks"},{text:"Shirts"},{text:"Red Dress"},{text:"Sunglasses"},{text:"80s Skirt"},{text:"Sofas"}
     ];

const data=[{text:"Socks"},{text:"Shirts"},{text:"Red Dress"},{text:"Sunglasses"},{text:"80s Skirt"},{text:"Sofas"}]



const renderItem = ({ item ,index }) => {
   return(
    <View>
        <TouchableOpacity style={{marginHorizontal:5}} onPress={()=>props.navigation.navigate("NameStore",{productId:item._id,userId:item._id, productQuantity:item.productQuantity})}>
            <Image source={{uri: item.productImage}} style={styles.imgbasket} />
            <Text style={styles.beautyproduct}>{item.productName}</Text>
            <Text style={styles.uplivetext}>{item.productName}</Text>

            <View style={{borderRadius:50,position:'absolute',top:10,left:10, backgroundColor:'#E22020'}}>
                <Text style={styles.shorttest1}>Live</Text>
            </View>
            <View style={styl.comingshort1}>
                <View style={{left:7,top:2}}>
                    <Image source={ImageIcons.iconpath} style={{width:18,height:18}}/>
                </View>
                <Text style={styles.shorttest}>0K</Text>
            </View>

        </TouchableOpacity>
      <View style={styl.rowdrop}>
        <View>
        <Image source={ImageIcons.profileimage} style={{width:35,height:35}}/>
        </View>
        <View style={{paddingTop:10,paddingLeft:10}}>
        <Text style={styl.txt1}>{item.productName}</Text>
        </View>
        </View>
        <Text style={[styl.txt2,{paddingLeft:45}]}>{item.productDescription}</Text>
    </View> 
  );
}

const renderItem1 = ({ item ,index }) => {
   return(
    <View>
    <View style={styles.inorder113}>
        <TouchableOpacity>
        <View style={styles.livec24}>
            <Text style={styles.livec12}>{item.keyword}</Text>
        </View>
        </TouchableOpacity>        
    </View> 
    </View>
  );
} 
const renderItem2 = ({ item ,index }) => {
   return(
    <View>
    <View style={styles.inorder113}>
        <TouchableOpacity>
        <View style={styles.livec24}>
            <Text style={styles.livec12}>{item.text}</Text>
        </View>
        </TouchableOpacity>        
    </View> 
    </View>
  );
} 
 

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
            <StatusBar backgroundColor={showclassName} barStyle="dark-content" translucent={true} />
            <Shopheader />
            <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);}} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFFFFF',height:400}} >

            <View style={{marginHorizontal:'3%',paddingTop:'5%'}}>
             
                <TouchableOpacity style={{marginTop:'5%'}} onPress={()=> handleRegistrationSubmit()}>
                    <TextInput style={{height:50,width:deviceWidth/1.1,color:'#333333',backgroundColor:'#E6E6E6',borderRadius:10,alignSelf:'center'}}
                      placeholder="Search for anything"
                      placeholderTextColor="#848484"
                      paddingLeft={35}
                      value={First}
                      onChangeText={(text) => {setFirst(text);}}
                      onSubmitEditing={() => handleRegistrationSubmit()}
                    />
                    <View style={{position:'absolute',top:18,marginLeft:'4%'}}>
                        <Image source={ImageIcons.redsearchtoday}  style={{height:14,width:14,}} />
                    </View>
                </TouchableOpacity>
                {/*<TouchableOpacity style={{width:120, backgroundColor:"#B80000",marginHorizontal:'2%',borderRadius:30 }} onPress={() => { checklogin() }}>
                        <Text style={{textAlign:'center' ,color:"#FFFFFF",fontWeight:'bold',fontSize:14,top:12}}>Search</Text> 
                    </TouchableOpacity>
                */} 
            <View>   
                <Text style={styles.srchistry}>Search History</Text>  
                <View>
                   <FlatList
                    data={props?.searchlistdata || []}
                    renderItem={renderItem1}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    numColumns={4}
                   />
                </View>
            </View>
            <View>   
                <Text style={styles.srchistry}>Recommendations</Text>  
                <View>
                   <FlatList
                    data={DATA}
                    renderItem={renderItem2}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    numColumns={4}
                   />
                </View>
            </View>
            <View>
                <Text style={styles.srchistry}>Discover</Text>
                <View style={{marginBottom:"20%"}}>
                    <FlatList
                        data={props?.searchlistitmes || []}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />
                </View>
            </View>
            </View>
            </ScrollView>
            <Footer3 />
        </KeyboardAvoidingView>
    )
}



export default Search