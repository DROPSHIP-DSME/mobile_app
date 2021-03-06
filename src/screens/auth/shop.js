import React, { useRef, useState,useEffect } from 'react';
import { Text, View,Image,FlatList,Dimensions,StatusBar,Picker, ImageBackground,TouchableOpacity, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import Footer3 from '../../screens/common/Footer3';
import Shopheader from '../../screens/common/Shopheader';

import AsyncStorage from '@react-native-community/async-storage'; 
import { useFocusEffect } from '@react-navigation/native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Rating, AirbnbRating } from 'react-native-ratings';

const shop = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

   
    useEffect(() => {
       props.getAllshop(1);
    }, [])
    useFocusEffect(() => {
         //props.getAllshop(1);
     })
    
    
     const deviceWidth = Dimensions.get('window').width; 
    const deviceHeight = Dimensions.get('window').height; 

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();
   
    // Local states
    const [starCount, setstarCount] = useState(5);
    const [selectedValue, setSelectedValue] = useState("java");
    const [wayToContact, setWayToContact] = useState("Phone");
    const [showAlert, setshowAlert] = React.useState(false);
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
    const [showclassName, setshowclassName] = useState("#B80000");
     const handleScroll=(pageYOffset)=>{
        if (pageYOffset > 0) {
            setshowclassName('#B80000');  
        }else{
            setshowclassName('#B80000');
        }
    } 
   
    const ratingCompleted = (ratingdata) => {
            console.log('rating',ratingdata)
               if(ratingdata!="" && ratingdata!=undefined){
                f(ratingdata)  
               }
              
        } 
   
    const checklogin =  async () => {
        if(props?.loginuserstatus=="1"){
           props.navigation.navigate("AddStore")
        }else {
            setshowAlert(true)
        }  
    }
   

    const DATA = [
       {
        text:"Beauty brands",
        text1:"$75",
        image:ImageIcons.addstore,
        
       },
       {
        text:"Beauty brands",
        text1:"$75",
        image:ImageIcons.clothes,
        
       },
       

     ];
     const renderItem = ({ item ,index }) => {
   return(
    <View style={styles.maincartviewshopTODAYY}>
    <TouchableOpacity  onPress={() => {props.navigation.navigate("ProductStore",{productId:item._id,shopId:item._id, shopName:item.shopName}) }}>        
       <View style={{padding:2}}>
            <Image source={{uri:item.shopImage}} style={{height:150,width:deviceWidth/2.4,borderRadius:10}} onPress={() => { props.navigation.navigate("clothing") }} />
           
                
        </View>
        <View style={{flexDirection:"row",marginTop:10,justifyContent:"space-between"}}>
            <View style={{paddingLeft:8}}>
               <Text style={{color:"#1A1A1A",fontSize:12,fontFamily:'SourceSansPro-Regular'}}>{item.shopName}</Text>
               <Text style={{color:"#1A1A1A",fontSize:16,fontFamily:'SourceSansPro-Bold',}}>$55.00</Text>
                <View style={{flexDirection:'row',marginTop:5}}>
                        <Rating
                        type='custom'
                        imageSize={15}
                        ratingCount={5}
                        ratingColor='#EB5757'
                        tintColor='#FFE7E7'
                        value={starCount}
                        onFinishRating={(start) => ratingCompleted(start)}
                        style={{ marginLeft:'2%'}}
                        />
                        <Text style={styles.TEXT}>4.0</Text>
                        
                     </View>
            </View>
            <View style={{marginRight:8}}>
               <Image source={ImageIcons.Iconlock} style={{width:30,height:30}}/>
               <Image source={ImageIcons.iconheart} style={{width:30,height:30,marginTop:5}}/>
            </View>
        </View>
        
       
       
       
        
        </TouchableOpacity>
    </View> 
  );
} 

//      const renderItem = ({ item ,index }) => {
    
  
//    return(

//     <View style={styles.maincartviewshop}>
//         <TouchableOpacity  onPress={() => {props.navigation.navigate("NameStore",{shopId:item._id, shopName:item.shopName}) }}>

//          <View style={styles.comingViewflatshop}>
//            <Image source={{uri: item.shopImage}} style={styles.storeimageflat} />
//            <View>
//                <View style={{flexDirection:'row',marginTop:'10%',width:160,justifyContent:'center'}}>
//                     <Text style={[styles.namestoretext,{ textAlign:'center', justifyContent:'center'}]} numberOfLines={1}>{item.shopName}</Text>
//                     <Image source={ImageIcons.brandicon} style={styles.bagimage} />
//                 </View>
//             <Text style={styles.storedropship}>{item.shopName}.dropship.com</Text>
//            </View>
           
//         </View>
         
//         </TouchableOpacity>
        
//     </View>
   
//   );
// }
//  <View style={{marginHorizontal:'3%', marginBottom:90}}>
//            <FlatList
//                 data={props?.getlistshop || []}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.id}
//                 showsHorizontalScrollIndicator={false}
//                 numColumns={2}
//                 />
//         </View>

const data=[{text:"ALL"},{text:"CLOTHING & SHOES"},{text:"FURNITURE"},{text:"BEAUTY & HAIR"},{text:"ELECTRONICS"}]

const renderItem1 = ({ item ,index }) => {
   return(
    <View>
    <View style={styles.inorder11}>
            <TouchableOpacity>
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
          <StatusBar backgroundColor={showclassName} barStyle="dark-content" translucent={true} />
             <Shopheader />
             
            <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
             }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFFFFF'}} >
             <View style={{marginHorizontal:'3%',paddingTop:'10%'}}>
                   <Text style={{fontSize:40,color:"#B80000",fontFamily:'SourceSansPro',fontWeight:"bold"}}>Shop</Text>
              </View>
              <View style={{marginHorizontal:"3%"}}>
              <Text style={{fontWeight:"bold",fontFamily:"SourceSansPro-Regular",fontSize:16,color:"#666666"}}>1,506 products</Text>
              </View>
             <View style={{width:'100%'}}>
                    <FlatList
                        data={data}
                        renderItem={renderItem1}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                         numColumns={3}
                    />
                </View>

              <View style={{borderBottomWidth:1,marginTop:"8%",marginHorizontal:"3%",borderColor:"#B6B6B6"}}></View>
               <View style={{flexDirection:"row",marginHorizontal:"3%",marginTop:"5%"}}>
                <View style={{backgroundColor:'#E6E6E6',borderRadius:10,height:40}}>
                     <Picker
                        selectedValue={selectedValue}
                        style={{ height: 35, width: 140 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                      >
                        <Picker.Item label="Sort" value="Sort" />
                        <Picker.Item label="JavaScript" value="js" />
                      </Picker>
                </View>
                 
                <TouchableOpacity style={{flexDirection:"row", backgroundColor:'#E6E6E6',borderRadius:10,marginHorizontal:"2%",padding:'2%',paddingHorizontal:'7%',width:deviceWidth/3,}}>
                    <Image source={ImageIcons.filter} style={styles.fiterimg}/>
                    <Text style={[styles.filterpop,{alignSelf:'center'}]}>FILTERS</Text>
                </TouchableOpacity>
                </View>
                  <View style={{marginHorizontal:'3%', marginBottom:90}}>
                   <FlatList
                        data={props?.getlistshop || []}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        />
                </View>
              </ScrollView>
           
        
    <Footer3 onSelection="3"/>
       
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


export default shop