import React, { useRef, useState,useEffect } from 'react';
import { Text, View,TouchableOpacity,FlatList,
    Image,TextInput, ImageBackground,
     ScrollView, Alert,StatusBar,
      KeyboardAvoidingView,Dimensions,
      Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../../screens/common/styles';
import styl from '../../../screens/common/styledrop';
import { Colors, CommonStrings } from '../../../common'
import ImageIcons from '../../../common/ImageIcons'
import InputField from '../../../components/forms/inputField';
import { RoundedButton } from '../../../components/forms/button';
import { phoneRegExp } from '../../../services/helper';
import DropdownField from '../../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../../components/modals/Loader';
import { RadioButton ,Provider ,Modal, Portal, Button,} from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Footer3 from '../../../screens/common/Footer3';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import tw from 'twrnc';
import { SearchIcon } from "react-native-heroicons/solid";

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

     const [enablesearch, setenablesearch] = useState(false);

    const [showclassName, setshowclassName] = useState("#B80000");

   
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
        if(First!=""){
            props.searchitems(First,props?.loginuserid);
            props.getsearchlist(props?.loginuserid); 
            setenablesearch(true);
        }

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
            <StatusBar backgroundColor={'#ffffff00'} barStyle="dark-content" translucent={true} />

            <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);}} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFFFFF',height:400}} >

            <View style={tw`mx-4 pt-5`}>

                <TouchableOpacity style={tw`h-14 mt-4 bg-gray-200 pl-3 pt-1 rounded-md`} onPress={()=> handleRegistrationSubmit()}>
                    <TextInput 
                      style={tw.style('w-11/12 sm:text-sm bg-zinc-200 rounded-lg text-gray-700 border-gray-300 pl-3')}
                      placeholder="Search for anything"
                      placeholderTextColor="#848484"
                      paddingLeft={35}
                      value={First}
                      onChangeText={(text) => {setFirst(text);}}
                      onSubmitEditing={() => handleRegistrationSubmit()}
                    />
                    <View style={tw`absolute mx-4 top-4`}>
                        <SearchIcon color="red" fill="#b80000" size={24} />
                    </View>
                </TouchableOpacity>
                {/*<TouchableOpacity style={{width:120, backgroundColor:"#B80000",marginHorizontal:'2%',borderRadius:30 }} onPress={() => { checklogin() }}>
                        <Text style={{textAlign:'center' ,color:"#FFFFFF",fontWeight:'bold',fontSize:14,top:12}}>Search</Text>
                    </TouchableOpacity>
                */}
           {enablesearch==false &&
            <View>
                <Text style={tw`flex flex-row mx-2 font-bold text-2xl mt-8 mb-3 text-gray-700`}>Search History</Text>
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
            }
            {enablesearch==false &&
            <View>
                <Text style={tw`flex flex-row mx-2 font-bold text-2xl mt-8 mb-3 text-gray-700`}>Recommendations</Text>
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
        }
            <View>
                
                <View style={tw`mt-15`}>
                   {props?.searchlistitmes?.length>0 ?

                    <FlatList
                        data={props?.searchlistitmes || []}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />
                    :
                    <View>
                     {enablesearch==true &&
                        <View style={{ marginTop:50}}>
                            <Text style={{textAlign:'center' ,color:"#333333",fontWeight:'bold',fontSize:14}}>There are currently no result for that query</Text>
                            <Text style={{textAlign:'center' ,color:"#333333",fontWeight:'bold',fontSize:14}}>Here are some popular suggesstions</Text>
                            <View style={{ marginTop:20}}>
                               <FlatList
                                data={DATA}
                                renderItem={renderItem2}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                numColumns={4}
                               />
                            </View>
                        </View>
                    }
                    </View>
                }
                </View>
            </View>
            </View>
            </ScrollView>
            <Footer3 />
        </KeyboardAvoidingView>
    )
}



export default Search
