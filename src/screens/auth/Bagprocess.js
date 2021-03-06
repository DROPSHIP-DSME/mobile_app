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


const Bagprocess = (props) => {

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


    

   
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
        <StatusBar backgroundColor={"#ffffff00"} barStyle="dark-content" translucent={true} />
             
            <ScrollView onScroll={({nativeEvent}) => {
                handleScroll(nativeEvent['contentOffset'].y);
             }} keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFFFFF'}} >   
             
             <View style={{marginHorizontal:'3%',marginTop:'20%',flexDirection:"row"}}>
              <Image source={ImageIcons.backpopup} style={{width:10,height:17}}/>
              <View style={{borderBottomWidth:3,width:40,marginLeft:"-2%",marginBottom:"2.8%"}}></View>
              <Text style={{fontSize:15,fontFamily:"SourceSansPro-Regular",fontWeight:"bold",paddingLeft:5}}>CONTINUE SHOPPING</Text>
              </View>
              
              
               
             

              <View style={[styles.textviewpop,{margin:"3%"}]}>
              <Text style={{fontSize:26,color:'#1A1A1A',paddingVertical:'1%',lineHeight:30,fontWeight:'bold',fontFamily:'SourceSansPro-Regular',fontStyle:'normal'}}>Shopping Bag</Text>
              </View> 

              <View style={{flexDirection:'row',marginHorizontal:"3%"}}>
                    <TouchableOpacity onPress={() => {closepopup();setVisiblebag(true)}} style={{marginTop:'3%',marginRight:"2%"}}>
                    <Image source={ImageIcons.teashop} style={{width:100,height:150,borderRadius:10}}/>
                    </TouchableOpacity> 

                   <View style={{alignSelf:'center',marginLeft:2}} >
                    
                    <View style={{}}>
                    <Text style={{fontSize:16,fontStyle:'normal',marginVertical:'2%',fontFamily:'SourceSansPro-Regular',color:'#1A1A1A'}}>Ribbed Knit Bardot Crossover Top</Text>
                    </View>
                    
                   

                    <View style={{flexDirection:'row'}}>
               <View>
                <View>
                <Text style={{fontSize:18,fontStyle:'normal',marginVertical:'4%',fontFamily:'SourceSansPro-Bold',color:'#1A1A1A'}}>Style</Text>
                </View>
                 <View style={styles.poppiker}>
                     <Picker
                        selectedValue={selectedValue}
                        style={{ height: 36, width: 86 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                      >
                        <Picker.Item label="S/0" value="Sort" />
                        <Picker.Item label="JavaScript" value="js" />
                      </Picker>
                    </View>
                </View>

                 <View style={{marginLeft:"2%"}}>
                 <View>
                 <Text style={{fontSize:18,fontStyle:'normal',marginVertical:'4%',fontFamily:'SourceSansPro-Bold',color:'#1A1A1A'}}>Quantity</Text>
                 </View>
                 <View style={{}}>
                            <RnIncrementDecrementBtn
                            minVal={1} 
                            minreq={1} 
                            max={99}
                            //val={parseInt(item.productQuantity)}
                            styleBtn={{width:40,height:33,backgroundColor:'#F3F3F3'}}
                            styleTextInput={{width:40,height:33,backgroundColor:'#F3F3F3'}}
                            labelStyle={{fontSize:15,marginTop:'1%',color:'#223263',fontFamily:'SourceSansPro-Regular'}}
                            //handleClick={(val)=> setIncrement(val,item._id)}
                            />
                </View> 
                </View>
            </View>
      
                      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:'5%'}}>
                      <View style={{flexDirection:"row"}}>
                       <View style={{marginRight:8}}>
                        <Image source={ImageIcons.iconheart} style={{width:35,height:35}}/>
                        </View>
                        <View style={{marginRight:8}}>
                        <Image source={ImageIcons.del} style={{width:35,height:35}}/>
                        </View>
                        </View>
                        <View style={{flexDirection:"row",marginTop:"6%"}}>
                       <Text style={{color:"#1A1A1A",fontSize:16,fontFamily:'SourceSansPro-Regular'}}>Total:</Text>
                       <Text style={{color:"#1A1A1A",fontSize:16,fontFamily:'SourceSansPro-Bold'}}>$52.50</Text>
                       </View>
                     </View> 
                   </View>
                   </View>
                  

                   <View style={{borderBottomWidth:1,marginTop:"8%",marginHorizontal:"3%",borderColor:"#B6B6B6"}}></View>

                      <View style={{flexDirection:'row',marginHorizontal:"3%",marginTop:"10%"}}>
                    <TouchableOpacity onPress={() => {closepopup();setVisiblebag(true)}} style={{marginTop:'3%',marginRight:"2%"}}>
                    <Image source={ImageIcons.teashop} style={{width:100,height:150,borderRadius:10}}/>
                    </TouchableOpacity> 

                   <View style={{alignSelf:'center',marginLeft:2}} >
                    
                    <View style={{}}>
                    <Text style={{fontSize:16,fontStyle:'normal',fontFamily:'SourceSansPro-Regular',color:'#1A1A1A'}}>Button Fly Crop Cardigan</Text>
                    </View>
                    
                   

                    <View style={{flexDirection:'row'}}>
               <View>
                <View>
                <Text style={{fontSize:18,fontStyle:'normal',marginVertical:'4%',fontFamily:'SourceSansPro-Bold',color:'#1A1A1A'}}>Style</Text>
                </View>
                 <View style={styles.poppiker}>
                     <Picker
                        selectedValue={selectedValue}
                        style={{ height: 36, width: 86 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                      >
                        <Picker.Item label="S/0" value="Sort" />
                        <Picker.Item label="JavaScript" value="js" />
                      </Picker>
                    </View>
                </View>

                 <View style={{marginLeft:"2%"}}>
                 <View>
                 <Text style={{fontSize:18,fontStyle:'normal',marginVertical:'4%',fontFamily:'SourceSansPro-Bold',color:'#1A1A1A'}}>Quantity</Text>
                 </View>
                 <View style={{}}>
                            <RnIncrementDecrementBtn
                            minVal={1} 
                            minreq={1} 
                            max={99}
                            //val={parseInt(item.productQuantity)}
                            styleBtn={{width:40,height:33,backgroundColor:'#F3F3F3'}}
                            styleTextInput={{width:40,height:33,backgroundColor:'#F3F3F3'}}
                            labelStyle={{fontSize:15,marginTop:'1%',color:'#223263',fontFamily:'SourceSansPro-Regular'}}
                            //handleClick={(val)=> setIncrement(val,item._id)}
                            />
                </View> 
                </View>
            </View>
              <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:'5%'}}>
                      <View style={{flexDirection:"row"}}>
                       <View style={{marginRight:8}}>
                        <Image source={ImageIcons.iconheart} style={{width:35,height:35}}/>
                        </View>
                        <View style={{marginRight:8}}>
                        <Image source={ImageIcons.del} style={{width:35,height:35}}/>
                        </View>
                        </View>
                        <View style={{flexDirection:"row",marginTop:"6%"}}>
                       <Text style={{color:"#1A1A1A",fontSize:16,fontFamily:'SourceSansPro-Regular'}}>Total:</Text>
                       <Text style={{color:"#1A1A1A",fontSize:16,fontFamily:'SourceSansPro-Bold'}}>$52.50</Text>
                       </View>
                     </View> 
                   </View>
                   </View>

               <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"4%"}}> 
               <View>
               <Text style={{color:"#1A1A1A",fontSize:18,fontFamily:'SourceSansPro-Bold'}}>Shipping: </Text>
               </View>

               <View style={{}}>
                      
                       <Text style={{color:"#1A1A1A",fontSize:18,fontFamily:'SourceSansPro-Bold'}}>US$0.00</Text>
               </View>
               </View>
               <View style={{borderBottomWidth:1.5,marginTop:"4%",marginHorizontal:"3%",borderColor:"#000000"}}></View>
               

               <View style={{marginHorizontal:"3%",marginTop:"4%",bottom:5}}> 
                  <View style={{flexDirection:"row",justifyContent:"space-between"}}> 
                  <Text style={{color:"#1A1A1A",fontSize:18,fontFamily:'SourceSansPro-Regular'}}>Grand Total:</Text>
                  <Text style={{color:"#1A1A1A",fontSize:18,fontFamily:'SourceSansPro-Bold'}}>US$232.50</Text>
                  </View>
              </View>

              <View style={{ flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%"}}>
              
              { couponcode==false &&  <View>
               <TextInput  style={{backgroundColor:'#E6E6E6',borderRadius:10,paddingLeft:'5%',fontSize:18,lineHeight:23,letterSpacing:-0.125172,width:'120%',height:50,color:'#878787',fontWeight:'normal',fontStyle:'normal',fontFamily:'SourceSansPro-Regular'}}
                placeholder="Enter coupon code"
                onChangeText={onChangeText1}
                value={text1}
                placeholderTextColor="#999999"
                />
              </View>
            }
              { couponcode ==true && <View>
               <TextInput  style={{backgroundColor:'#999999',borderRadius:10,paddingLeft:'5%',fontSize:18,lineHeight:23,letterSpacing:-0.125172,width:'120%',height:50,color:'#878787',fontWeight:'normal',fontStyle:'normal',fontFamily:'SourceSansPro-Regular'}}
                placeholder="Coupon code applied"
                onChangeText={onChangeText1}
                value={text1}
                placeholderTextColor="#ffffff"
                />
              </View>
            }
              <TouchableOpacity  style={{marginTop:"3%", backgroundColor:"#4AFFBD",height:38,width:110,borderRadius:20}}>
             <Text style={{textAlign:'center',paddingTop:"10%",color:"#1A1A1A",fontSize:12,fontFamily:"SourceSansPro-Bold",fontWeight:"bold"}}>APPLY</Text>
             </TouchableOpacity>
             </View>

             <View style={{marginHorizontal:"3%",marginTop:"5%"}}>
             <Text style={{color:"#1A1A1A",fontSize:18,fontFamily:"SourceSansPro-Bold",fontWeight:"bold"}}>We Accept:</Text>
             </View>

             <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",marginTop:"3%",marginBottom:"8%"}}>
             <View>
                 <Image source={ImageIcons.visa} style={{width:45,height:30}}/>
             </View>
             <View>
                 <Image source={ImageIcons.mastercard} style={{width:45,height:30}}/>
             </View>
             <View>
                 <Image source={ImageIcons.mastro} style={{width:45,height:30}}/>
             </View>
             <View>
                 <Image source={ImageIcons.paypal} style={{width:45,height:30}}/>
             </View>
             <View>
                 <Image source={ImageIcons.express} style={{width:45,height:30}}/>
             </View>
             <View>
                 <Image source={ImageIcons.affrim} style={{width:45,height:30}}/>
             </View>
             <View>
                 <Image source={ImageIcons.discover} style={{width:45,height:30}}/>
             </View>
             </View>
               
               

              
         </ScrollView>
          <View style={{marginHorizontal:"3%",marginTop:"4%",bottom:5,elevation:1,}}> 
                  <View style={{flexDirection:"row",justifyContent:"space-between"}}> 
                  <Text style={{color:"#1A1A1A",fontSize:18,fontFamily:'SourceSansPro-Regular'}}>Grand Total:</Text>
                  <Text style={{color:"#1A1A1A",fontSize:18,fontFamily:'SourceSansPro-Bold'}}>US$232.50</Text>
                  </View> 
                   
                   
                    <TouchableOpacity  onPress={() => props.navigation.navigate("Shipprocess")} style={{width:deviceWidth/1.05, backgroundColor:"#B80000",borderRadius:30,marginTop:"3%",height:38  }} >
                    <Text style={{textAlign:'center',color:"#FFFFFF",fontWeight:'bold',fontSize:18,top:8}}>CONTINUE TO SHIPPING</Text> 
                    </TouchableOpacity>
              </View>
          { visiblebag ==true &&
        <View style={{flex:1,backgroundColor:'#ffffff',paddingVertical:10,borderRadius:10,zIndex:4001, position:'absolute',bottom:'12%',width:deviceWidth/1.05,alignSelf:'center'}}>

         <TouchableOpacity style={{position:'absolute',right:15,top:7}} onPress={() => closebagpopup()}>
                    <Image source={ImageIcons.closepopup}  style={styles.sendmsg2} />
                </TouchableOpacity>

            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"4%",marginTop:"8%"}}>
            <View style={{marginTop:'3%',}}>
                    <Image source={ImageIcons.teashop} style={{width:150,height:170,borderRadius:10}}/>
            </View>
            <View style={{marginTop:'3%',}}>
                    <Image source={ImageIcons.teashop} style={{width:150,height:170,borderRadius:10}}/>
            </View>
            </View> 

             <View style={{marginLeft:"4%"}}>
                    <Text style={{fontSize:18,fontStyle:'normal',marginVertical:'2%',fontFamily:'SourceSansPro-Regular',color:'#1A1A1A'}}>Ribbed Knit Bardot Crossover Top</Text>
            </View>

            <View style={{marginLeft:"4%"}}>
                    <Text style={{fontSize:20,fontStyle:'normal',fontWeight:"bold", marginVertical:'2%',fontFamily:'SourceSansPro-Regular',color:'#1A1A1A'}}>$52.50</Text>
            </View>
            
            <View style={{flexDirection:"row",marginLeft:'4%'}}>
            <View>
             <View style={{flexDirection:'row',marginTop:'4%'}}>
               <Text style={{fontSize:18,fontFamily:'SourceSansPro-Bold',}}>Color :</Text>
                <Text style={{fontSize:18,fontFamily:'SourceSansPro-Regular',marginLeft:5}}>White</Text>
             </View> 

             <View style={{flexDirection:'row',marginVertical:'2%'}}>
              <View style={{height:20,width:20,borderRadius:10,backgroundColor:'#b3b3b3'}}></View>
              <View style={{height:20,width:20,borderRadius:10,backgroundColor:'#363e4d',marginLeft:'6%'}}></View>
              <View style={{height:20,width:20,borderRadius:10,backgroundColor:'#40b7c8',marginLeft:'6%'}}></View>
             </View> 
             </View>
                
              <View style={{flexDirection:'row',width:100,marginLeft:'10%'}}>
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

            <TouchableOpacity  onPress={() =>{setVisiblebag(false);setcouponcode(true)}} style={{width:deviceWidth/1.1, backgroundColor:"#B80000",borderRadius:30,marginTop:"10%",height:38 ,alignSelf:'center' }} >
                    <Text style={{textAlign:'center',color:"#FFFFFF",fontWeight:'bold',fontSize:18,top:8}}>UPDATE</Text> 
            </TouchableOpacity>
            
           
           
        </View>
        }
         
         </KeyboardAvoidingView>
    )
}



export default Bagprocess