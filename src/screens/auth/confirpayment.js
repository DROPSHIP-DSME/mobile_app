import React, { useRef, useState,useEffect } from 'react';
import { Text, View,TouchableOpacity,
    Image,TextInput, ImageBackground,
    ScrollView, Alert,Dimensions,
      FlatList,StatusBar,Picker,
    KeyboardAvoidingView, Platform,
    Keyboard} from 'react-native';
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
import Footer3 from '../../screens/common/Footer3';
import * as Progress from 'react-native-progress';
import RnIncrementDecrementBtn  from 
'react-native-increment-decrement-button';
import Shopheader from '../../screens/common/Shopheader';


const confirpayment = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference
    const deviceWidth = Dimensions.get('window').width; 
    const deviceHeight = Dimensions.get('window').height; 
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    const shopId = props?.route?.params?.shopId;
    const shopName = props?.route?.params?.shopName;
    // Local states
     const [checked, setChecked] = React.useState('first');
    const [selectedValue, setSelectedValue] = useState("java");
    const [visible, setVisible] = React.useState(false);
    const [starCount, setstarCount] = useState(3);
    const [visiblebag, setVisiblebag] = React.useState(false);
    const [couponcode, setcouponcode] = React.useState(false);

    const [Paypal, onChangePaypal] = React.useState("Paypal");
    const [Debit, onChangeDebit] = React.useState("Debit Card");
    const [helppopup, sethelppopup] = React.useState(false);
    const [reportpopup, setreportpopup] = React.useState(false);
    const [showclassName, setshowclassName] = useState("#B80000");
    const [text1, onChangeText1] = React.useState("");
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
       props.shopproduct(shopId);
       props.shopsellcount(shopId);
    }, [])
    const openpopup = () => {
        setVisible(true)

        }
            const closepopup = () => {
          setVisible(false)
        }

        
            const closebagpopup = () => {
          setVisiblebag(false)
        }

     const ratingCompleted = (ratingdata) => {
            console.log('rating',ratingdata)
               if(ratingdata!="" && ratingdata!=undefined){
                setstarCount(ratingdata)  
               }
              
        } 
        const handleScroll=(pageYOffset)=>{
        if (pageYOffset > 0) {
            setshowclassName('#B80000');  
        }else{
            setshowclassName('#B80000');
        }
    }  

       const containerStyle = {backgroundColor: 'white', padding: '3%',marginHorizontal:'5%',borderRadius:10};

   
    const DATA = [
       {
        height:30,
        width:30,
        image:ImageIcons.twit,
       },
        {
        height:29.82,
        width:30,
        image:ImageIcons.fb,
       },
        {
        height:30,
        width:30,
        image:ImageIcons.insta,
       },
        {
        height:30,
        width:30,    
        image:ImageIcons.whatsapp,
       },
        {
        height:30,
        width:30,    
        image:ImageIcons.mail,
       },
        {
        height:25,
        width:25,    
        image:ImageIcons.email,
       },
       

     ];

    

        const DATA1 = [
       {
        text:"Beauty brands",
        text1:"$75",
        image:ImageIcons.winterimage,
        
       },
       {
        text:"Beauty brands",
        text1:"$75",
        image:ImageIcons.winterimage,
        
       },]


     const renderItem1 = ({ item ,index }) => {
   return(
    <View style={styles.maincartviewshopTODAYY}>
    <TouchableOpacity  onPress={() => {props.navigation.navigate("NameStore",{shopId:item._id, shopName:item.shopName}) }}>        
       <View style={{padding:2}}>
            <Image source={ImageIcons.winterimage} style={{height:150,width:deviceWidth/2.4,borderRadius:10}} onPress={() => { props.navigation.navigate("clothing") }} />
           
                
        </View>
        <View style={{flexDirection:"row",marginTop:10,justifyContent:"space-between"}}>
            <View style={{paddingLeft:8}}>
               <Text style={{color:"#1A1A1A",fontSize:12,fontFamily:'SourceSansPro-Regular'}}>Blue Purse</Text>
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


    

   
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
        <StatusBar backgroundColor={showclassName} barStyle="dark-content" translucent={true} />
             <Shopheader />
             
            <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
             }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFFFFF'}} >   
             
            

               <View style={{alignItems:"center",marginTop:"4%"}}>
               <Text style={{fontSize:32,fontWeight:"bold",fontFamily:"SourceSansPro-Regular",color:"#1F8B4D"}}>Your order is confirmed!</Text>
               </View>  
             
               <View style={{alignItems:"center",marginTop:"1%"}}>
               <Text style={{fontSize:18,fontWeight:"bold",fontFamily:"SourceSansPro-Regular",color:"#1A1A1A"}}>Order No: GSHM8U00S0004KH</Text>
               </View> 

               <View style={{alignItems:"center",marginTop:"1%"}}>
               <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"SourceSansPro-Regular",color:"#1A1A1A"}}>A copy of your order summary has been emailed </Text>
               </View>
               
               <View style={{alignItems:"center",marginTop:"1%"}}>
               <Text style={{fontSize:16,fontWeight:"normal",fontFamily:"SourceSansPro-Regular",color:"#1A1A1A"}}> to you at marydavis@gmail.com. </Text>
               </View>
              

              <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%',marginVertical:'5%'}}>
                 <Text style={{fontSize:26,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold',}}>Your Order</Text>
               </View>


               <View style={{alignSelf:'center',borderRadius:15,flexDirection:'row',marginTop:'7%',width:deviceWidth/1.1}}>
               <Image source={ImageIcons.teashop} style={{width:100,height:120,marginTop:6,alignSelf:'center',borderRadius:15}}/>
               <View style={{marginLeft:5,alignSelf:'center'}}>
                  <Text style={{fontSize:15,fontFamily:'SourceSansPro-SemiBold',marginLeft:6,color:'#1a1a1a'}}>Ribbed Knit Bardot Crossover Top</Text>
                 <Text style={{fontSize:20,fontFamily:'SourceSansPro-Bold',marginLeft:6,color:'#1a1a1a'}}>$52.50</Text>
                  <View style={{flexDirection:'row'}}>
                      <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>Color:</Text>
                       <View style={{height:15,width:15,borderRadius:10,backgroundColor:'#5999F1',marginLeft:2,alignSelf:'center'}}></View>
                      <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>  Size:</Text>
                      <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#1a1a1a'}}> 42</Text>
                    </View>
                     <View style={{flexDirection:'row'}}>
                       <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>Quantity:</Text>
                       <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#1a1a1a'}}> x1</Text>
                    </View>
                    <View style={{flexDirection:"row",marginTop:"4%",justifyContent:"flex-end"}}>
                       <Text style={{color:"#1A1A1A",fontSize:16,fontFamily:'SourceSansPro-Regular'}}>Total:</Text>
                       <Text style={{color:"#1A1A1A",fontSize:16,fontFamily:'SourceSansPro-Bold'}}>$52.50</Text>
                       </View>
               </View>
             </View>
             <View style={{borderBottomWidth:1.5,marginTop:"3%",marginHorizontal:"3%",borderColor:"#B3B3B3"}}></View>

             <View style={{alignSelf:'center',borderRadius:15,flexDirection:'row',marginTop:'7%',width:deviceWidth/1.1}}>
               <Image source={ImageIcons.teashop} style={{width:100,height:120,marginTop:6,alignSelf:'center',borderRadius:15}}/>
               <View style={{marginLeft:5,alignSelf:'center'}}>
                  <Text style={{fontSize:15,fontFamily:'SourceSansPro-SemiBold',marginLeft:6,color:'#1a1a1a'}}>Ribbed Knit Bardot Crossover Top</Text>
                 <Text style={{fontSize:20,fontFamily:'SourceSansPro-Bold',marginLeft:6,color:'#1a1a1a'}}>$52.50</Text>
                  <View style={{flexDirection:'row'}}>
                      <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>Color:</Text>
                       <View style={{height:15,width:15,borderRadius:10,backgroundColor:'#5999F1',marginLeft:2,alignSelf:'center'}}></View>
                      <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>  Size:</Text>
                      <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#1a1a1a'}}> 42</Text>
                    </View>
                     <View style={{flexDirection:'row'}}>
                       <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>Quantity:</Text>
                       <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#1a1a1a'}}> x1</Text>
                    </View>
                     <View style={{flexDirection:"row",marginTop:"4%",justifyContent:"flex-end"}}>
                       <Text style={{color:"#1A1A1A",fontSize:16,fontFamily:'SourceSansPro-Regular'}}>Total:</Text>
                       <Text style={{color:"#1A1A1A",fontSize:16,fontFamily:'SourceSansPro-Bold'}}>$52.50</Text>
                       </View>
               </View>
             </View>



             <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%',marginVertical:'5%'}}>
                 <Text style={{fontSize:26,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold',}}>Order Summary</Text>
               </View>


                <View style={{width:deviceWidth/1,padding:'5%',alignSelf:'center',borderRadius:15}}>
                
                
               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#666666'}}>Subtotal</Text>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#1a1a1a'}}>US$167.50</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#666666'}}>Taxes</Text>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#1a1a1a'}}>US$55.00</Text>
               </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'4%'}}>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#666666'}}>Shipping</Text>
                   <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#1a1a1a'}}>US$10.00</Text>
               </View>

              
                 
              </View>
              
             <View style={{borderBottomWidth:1.5,marginTop:"3%",marginHorizontal:"3%",borderColor:"#000000"}}></View>
              <View style={{marginHorizontal:"3%",marginTop:"4%",bottom:5}}> 
                  <View style={{flexDirection:"row",justifyContent:"space-between"}}> 
                  <Text style={{color:"#1A1A1A",fontSize:18,fontFamily:'SourceSansPro-Regular'}}>Grand Total:</Text>
                  <Text style={{color:"#1A1A1A",fontSize:18,fontFamily:'SourceSansPro-Bold'}}>US$232.50</Text>
                  </View>
              </View>

               <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%',marginVertical:'5%'}}>
                 <Text style={{fontSize:26,color:'#1a1a1a',fontFamily:'SourceSansPro-Bold',}}>Order Details</Text>
               </View>
                
                <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%"}}>
                <View style={{justifyContent:'space-between',marginVertical:'5%'}}>
                 <Text style={{fontSize:20,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold',}}>Personal Details</Text>
                  <Text style={{fontSize:18,fontFamily:"SourceSansPro-Regular",color:"#1A1A1A",padding:"2%"}}>Marry Davis {"\n"}2501 Stevens Ev{"\n"}Miniapolis MN,54404{"\n"}
                  USA{"\n"} {"\n"}marydavis@gmail.com{"\n"}+1-808-143-8506</Text>
               </View>

                <View style={{justifyContent:'space-between',marginVertical:'5%'}}>
                 <Text style={{fontSize:20,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold',}}>Shipping Information</Text>
                  <Text style={{fontSize:18,fontFamily:"SourceSansPro-Regular",color:"#1A1A1A",top:"-5%"}}>Standard Shipping {"\n"}2501 Stevens Ev{"\n"}Miniapolis MN,54404{"\n"}
                  USA</Text>
               </View>
               </View>

               <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%"}}>
                <View style={{justifyContent:'space-between',marginVertical:'3%'}}>
                 <Text style={{fontSize:20,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold'}}>Billing Information</Text>
                  <Text style={{fontSize:18,fontFamily:"SourceSansPro-Regular",color:"#1A1A1A",padding:"2%"}}>Same as shipping address</Text>
               </View>

                <View style={{justifyContent:'space-between',marginVertical:'3%'}}>
                 <Text style={{fontSize:20,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold',}}>Payment</Text>
                  <Text style={{fontSize:18,fontFamily:"SourceSansPro-Regular",fontWeight:"bold", color:"#1A1A1A",top:"-5%"}}>Pay by credit/debit card</Text>
               </View>
               </View>
               
               <TouchableOpacity  onPress={() => props.navigation.navigate("Shipaddress")} style={{width:deviceWidth/1.05, backgroundColor:"#B80000",borderRadius:30,marginVertical:"3%",height:60,marginHorizontal:"3%"  }} >
                    <Text style={{textAlign:'center',color:"#FFFFFF",fontWeight:'bold',fontSize:18,top:18}}>CONTINUE SHOPPING</Text> 
                    </TouchableOpacity>

                 <View style={{marginTop:"6%",marginHorizontal:"3%"}}>
                 <Text style={styles.clothpop}>Similar Products</Text>
                 </View>

                 <View style={{marginHorizontal:'3%', marginBottom:90}}>
                   <FlatList
                        data={DATA1}
                        renderItem={renderItem1}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        />
                </View>    

              
         </ScrollView>
          
          { visiblebag ==true &&
        <View style={{flex:1,backgroundColor:'#ffffff',paddingVertical:10,borderRadius:10,zIndex:4001, position:'absolute',bottom:'20%',margin:"5%"}}>

         <TouchableOpacity style={{position:'absolute',right:15}} onPress={() => closebagpopup()}>
                    <Image source={ImageIcons.closepopup}  style={styles.sendmsg2} />
                </TouchableOpacity>

            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"1%",marginVertical:"3%"}}>
            <View style={{marginTop:'3%',}}>
                    <Image source={ImageIcons.teashop} style={{width:177,height:183,borderRadius:10}}/>
            </View>
            <View style={{marginTop:'3%',marginLeft:"2%"}}>
                    <Image source={ImageIcons.teashop} style={{width:177,height:183,borderRadius:10}}/>
            </View>
            </View> 

             <View style={{marginLeft:"2%"}}>
                    <Text style={{fontSize:18,fontStyle:'normal',marginVertical:'2%',fontFamily:'SourceSansPro-Regular',color:'#1A1A1A'}}>Ribbed Knit Bardot Crossover Top</Text>
            </View>

            <View style={{marginLeft:"2%"}}>
                    <Text style={{fontSize:20,fontStyle:'normal',fontWeight:"bold", marginVertical:'2%',fontFamily:'SourceSansPro-Regular',color:'#1A1A1A'}}>$52.50</Text>
            </View>
            
            <View style={{flexDirection:"row"}}>
            <View>
             <View style={{flexDirection:'row',marginHorizontal:'4%',marginTop:'4%'}}>
               <Text style={{fontSize:18,fontFamily:'SourceSansPro-Bold',}}>Color :</Text>
                <Text style={{fontSize:18,fontFamily:'SourceSansPro-Regular',marginLeft:5}}>White</Text>
             </View> 

             <View style={{flexDirection:'row',marginHorizontal:'4%',marginVertical:'2%'}}>
              <View style={{height:20,width:20,borderRadius:10,backgroundColor:'#b3b3b3'}}></View>
              <View style={{height:20,width:20,borderRadius:10,backgroundColor:'#363e4d',marginLeft:'4%'}}></View>
              <View style={{height:20,width:20,borderRadius:10,backgroundColor:'#40b7c8',marginLeft:'4%'}}></View>
             </View> 
             </View>
                
              <View style={{flexDirection:'row',width:100}}>
            <View style={{marginHorizontal:'4%',marginVertical:'3%'}}> 
              <Text style={{fontSize:18,fontFamily:'SourceSansPro-Bold',}}>Size</Text>
             <View style={{flexDirection:'row'}}>
                <View style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,padding:9,}}>
                  <Text style={{textAlign:'center',color:'#4d4d4d',fontSize:16,fontFamily:'SourceSansPro-SemiBold'}}>XS</Text>    
                </View>
                 <View style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,padding:9,marginLeft:8}}>
                  <Text style={{textAlign:'center',color:'#4d4d4d',fontSize:16,fontFamily:'SourceSansPro-SemiBold'}}>S</Text>    
                </View>
                 <View style={{height:40,width:40,backgroundColor:'#8B0000',borderRadius:4,padding:9,marginLeft:8}}>
                  <Text style={{textAlign:'center',color:'#FFFFFF',fontSize:16,fontFamily:'SourceSansPro-SemiBold'}}>L</Text>    
                </View>
                 
             </View>
             <View style={{height:40,width:40,backgroundColor:'#999999',borderRadius:4,padding:9,marginTop:"2%"}}>
                  <Text style={{textAlign:'center',color:'#4d4d4d',fontSize:16,fontFamily:'SourceSansPro-SemiBold'}}>XL</Text>    
                </View>
            </View> 
            </View>
            </View>

            <TouchableOpacity  onPress={() =>{setVisiblebag(false);setcouponcode(true)}} style={{width:deviceWidth/1.3, backgroundColor:"#B80000",borderRadius:30,marginTop:"10%",height:38 ,marginHorizontal:"3%" }} >
                    <Text style={{textAlign:'center',color:"#FFFFFF",fontWeight:'bold',fontSize:18,top:8}}>UPDATE</Text> 
            </TouchableOpacity>
            
           
           
        </View>
        }

        <Footer3 onSelection="3"/>
         
         </KeyboardAvoidingView>
    )
}



export default confirpayment