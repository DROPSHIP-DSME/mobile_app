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
import { RadioButton ,Provider, Portal, Button,} from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Footer3 from '../../screens/common/Footer3';
import * as Progress from 'react-native-progress';
import RnIncrementDecrementBtn  from 
'react-native-increment-decrement-button';
import Shopheader from '../../screens/common/Shopheader';
import Modal from 'react-native-modal'


const Accountview2 = (props) => {

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
     const [text3, onChangeText3] = React.useState("");
    const [helppopup1, sethelppopup1] = React.useState(false);
     const [checked, setChecked] = React.useState('first');
    const [selectedValue, setSelectedValue] = useState("java");
    const [visible, setVisible] = React.useState(false);
    const [starCount, setstarCount] = useState(3);
    const [visiblebag, setVisiblebag] = React.useState(false);
    const [couponcode, setcouponcode] = React.useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

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
    <View style={styles.maincartviewshop}>
    <TouchableOpacity  onPress={() => {props.navigation.navigate("NameStore",{shopId:item._id, shopName:item.shopName}) }}>        
       <View style={{marginHorizontal:4}}>
            <Image source={ImageIcons.winterimage} style={{height:176,width:176,borderRadius:10}} onPress={() => { props.navigation.navigate("clothing") }} />
           
                
        </View>
        <View style={{flexDirection:"row",marginTop:10,justifyContent:"space-between"}}>
        <View style={{paddingTop:10,paddingLeft:8}}>
        <Text style={{color:"#1A1A1A",fontSize:12,fontFamily:'SourceSansPro-Regular'}}>Blue Purse</Text>
        </View>
        <View style={{marginRight:8}}>
        <Image source={ImageIcons.Iconlock} style={{width:35,height:35}}/>
        </View>
        </View>
         <View style={{flexDirection:"row",marginTop:6,justifyContent:"space-between"}}>
        <View style={{paddingLeft:8}}>
        <Text style={{color:"#1A1A1A",fontSize:16,fontFamily:'SourceSansPro-Bold'}}>$55.00</Text>
        <View style={{flexDirection:'row'}}>
                        <Rating
                        type='custom'
                        imageSize={18}
                        ratingCount={5}
                        ratingColor='#EB5757'
                        tintColor='#FFE7E7'
                        value={starCount}
                        onFinishRating={(start) => ratingCompleted(start)}
                        style={{ marginLeft:'3%'}}
                        />
                        <Text style={styles.TEXT}>4.0</Text>
                        
                     </View>
                     
        </View>
        <View style={{marginRight:8}}>
        <Image source={ImageIcons.iconheart} style={{width:35,height:35}}/>
        </View>
        </View>
        </TouchableOpacity>
    </View> 
  );
}

 const renderItem6 = ({ item }) => {
            return(
                <View>
                    { item.userId.userName=='Admin' ?
                       <View>
                        <View style={styles.chatrightView}>
                           <Text style={styles.hellotext}>{item.message}</Text>
                        </View>
                         <Text style={styles.chattingtime}>{ moment(item.msgDate).format('hh:mm A')}</Text>
                        </View>
                    :
                        <View>
                        <View style={styles.chatlongView}>
                          <Text style={styles.chattingtext}>{item.message}</Text>
                        </View>
                        <Text style={styles.chattingtime2}>{moment(item.msgDate).format('hh:mm A')}</Text>
                        </View>

                    }
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
             
             <View style={{flexDirection:"row",marginHorizontal:"4%",marginTop:"9%"}}>
              <Text style={{fontSize:15,fontFamily:"SourceSansPro-Regular",color:"#999999"}}>ORDER HISTORY /</Text>
              <Text style={{fontSize:15,fontFamily:"SourceSansPro-Regular",color:"#999999"}}>VIEW ORDER /</Text>
              <Text style={{fontSize:15,fontFamily:"SourceSansPro-Regular",color:"#1A1A1A"}}>CHAT WITH SELLER</Text>
              </View>

               
                <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'4%',marginVertical:'6%'}}>
                 <Text style={{fontSize:26,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold',}}>View Order</Text>
               </View>


              <View style={{marginHorizontal:'4%',}}>  
              <View>
               <View style={{alignItems:"center",flexDirection:'row',}}>
               <Text style={{fontSize:18,fontFamily:"SourceSansPro-SemiBold",color:"#1A1A1A"}}>Order No:</Text>
               <Text style={{fontSize:18,fontFamily:"SourceSansPro-Regular",color:"#1A1A1A"}}>GSHM8U00S0004KH</Text>
               </View>
               <View style={{alignItems:"center",marginTop:"1%",flexDirection:'row',}}>
               <Text style={{fontSize:18,fontFamily:"SourceSansPro-SemiBold",color:"#1A1A1A"}}>Date:</Text>
               <Text style={{fontSize:18,fontFamily:"SourceSansPro-Regular",color:"#1A1A1A"}}>13/05/2022</Text>
               </View>
              </View>
    
              </View> 


              <View style={{flexDirection:'row',marginTop:'5%',marginHorizontal:'4%'}}>
                   <View style={{backgroundColor:'#d0e3fb',width:'30%',borderRadius:15,padding:8,}}>
                     <Text style={styles.totalincometodayWIDROprocess}>PROCESSING</Text> 
                   </View>
                    <View style={{backgroundColor:'#b80000',width:'32%',borderRadius:15,padding:8,marginLeft:'4%'}}>
                     <Text style={[styles.totalincometodayWIDRO,{color:'#ffffff'}]}>CANCEL ORDER</Text> 
                   </View>
                 </View>


                  <View style={{backgroundColor:'#FFFFFF',width:deviceWidth/1.1,marginVertical:'10%',borderRadius:15,alignSelf:'center',padding:'5%',elevation:2}}>

                 <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'3%'}}>
                     <Text style={{fontSize:20,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold',}}>Chat with Seller</Text>
                       
                       
                     <TouchableOpacity onPress={() => closepopup() } style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,marginLeft:'4%',padding:8,}}>
                      <Image source={ImageIcons.closetoday}  style={{height:12,width:12,marginTop:5,alignSelf:'center'}} />
                    </TouchableOpacity>
                    
                   </View> 
                
                <View style={{marginTop:'7%'}}>
                <View style={{backgroundColor:'#AFFFE2',padding:8,width:'98%',borderRadius:10,alignSelf:'flex-end'}}>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#1a1a1a',}}>Hey! Just wanted to ask when my order will be processed?</Text>
                </View>
                 <Text style={{fontSize:14,fontFamily:'SourceSansPro-Regular',color:'#666666',marginHorizontal:'3%',marginTop:2}}>Today, 12:30PM</Text>
                </View>

                 <View style={{marginVertical:'8%'}}>
                  <View style={{backgroundColor:'#B80000',padding:8,width:'98%',borderRadius:10,alignSelf:'flex-end',}}>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#FFFFFF',}}>Hello! Thanks for your enquiry. Orders are processed in 3 business days.</Text>
                  </View>
                   <Text style={{fontSize:14,fontFamily:'SourceSansPro-Regular',color:'#666666',marginTop:2,alignSelf:'flex-end',right:4}}>Today, 12:30PM</Text>
                 </View>

                 <View style={{marginHorizontal:'3%'}}>
                  <View style={{backgroundColor:'#AFFFE2',padding:15,width:'45%',borderRadius:10,}}>
                  <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#1a1a1a',}}>Okay thanks!</Text>
                  </View>
                   <Text style={{fontSize:14,fontFamily:'SourceSansPro-Regular',color:'#666666',marginTop:2,}}>Today, 12:30PM</Text>
                 </View>

                <View style={{flexDirection:'row',marginVertical:'10%',justifyContent:'space-between'}}>
                 <View>
                   <TextInput
                  style={styles.inputedittoday}
                  placeholder="Type here..."
                  placeholderTextColor="#4d4d4d"
                  paddingLeft={15}
                  width={230}
                  multiline
                  onChangeText={(text) => {}}
                />
                <TouchableOpacity style={{position:'absolute',right:'7%',top:'25%'}}>
                 <Image source={ImageIcons.todaycam} style={{width:24,height:24,}}/>
                 </TouchableOpacity>
                 </View>

                 <View>
                   <Image source={ImageIcons.containtoday} style={{width:52,height:52,borderRadius:10,marginTop:'2%'}}/>
                 </View>
                </View>
              </View>
              
               

               <View style={{alignSelf:'center',borderRadius:15,flexDirection:'row',marginTop:'3%',width:deviceWidth/1.1}}>
               <Image source={ImageIcons.teashop} style={{width:100,height:120,alignSelf:'center',borderRadius:15}}/>
               <View style={{marginLeft:5,alignSelf:'center',}}>
                  <Text style={{fontSize:15,fontFamily:'SourceSansPro-SemiBold',marginLeft:6,color:'#1a1a1a'}}>Ribbed Knit Bardot Crossover Top</Text>
                <Text style={{fontSize:20,fontFamily:'SourceSansPro-Bold',marginLeft:6,color:'#1a1a1a'}}>$52.50</Text>
                  <View style={{flexDirection:'row',marginLeft:6,marginVertical:'2%'}}>
                      <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>Color:</Text>
                       <View style={{height:15,width:15,borderRadius:10,backgroundColor:'#5999F1',marginLeft:2,alignSelf:'center'}}></View>
                      <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>  Size:</Text>
                      <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#1a1a1a'}}> 42</Text>
                    </View>
                     <View style={{flexDirection:'row',marginLeft:6,}}>
                       <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>Quantity:</Text>
                       <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#1a1a1a'}}> x1</Text>
                    </View>
                    
               </View>
             </View>
             

             <View style={{alignSelf:'center',borderRadius:15,flexDirection:'row',marginTop:'7%',width:deviceWidth/1.1}}>
               <Image source={ImageIcons.teashop} style={{width:100,height:120,alignSelf:'center',borderRadius:15}}/>
               <View style={{marginLeft:5,alignSelf:'center'}}>
                  <Text style={{fontSize:15,fontFamily:'SourceSansPro-SemiBold',marginLeft:6,color:'#1a1a1a'}}>DuelSense Wireless Controller</Text>
                  <Text style={{fontSize:20,fontFamily:'SourceSansPro-Bold',marginLeft:6,color:'#1a1a1a'}}>$115.50</Text>
                 <View style={{flexDirection:'row',marginLeft:6,marginVertical:'2%'}}>
                      <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>Color:</Text>
                       <View style={{height:15,width:15,borderRadius:10,backgroundColor:'#5999F1',marginLeft:2,alignSelf:'center'}}></View>
                      <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>  Size:</Text>
                      <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#1a1a1a'}}> 42</Text>
                    </View>
                 <View style={{flexDirection:'row',marginLeft:6,marginVertical:'2%'}}>
                       <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>Type:</Text>
                       <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#1a1a1a'}}> DuelSense Midnight Black</Text>
                    </View>
                  
                     <View style={{flexDirection:'row',marginLeft:6}}>
                       <Text style={{fontSize:16,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a'}}>Quantity:</Text>
                       <Text style={{fontSize:16,fontFamily:'SourceSansPro-Regular',color:'#1a1a1a'}}> x1</Text>
                    </View>
                     
               </View>
             </View>



             

               <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%',marginTop:'10%'}}>
                 <Text style={{fontSize:26,color:'#1a1a1a',fontFamily:'SourceSansPro-Bold',}}>Order Details</Text>
               </View>
                
                <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"4%"}}>
                <View style={{justifyContent:'space-between',marginTop:'4%'}}>
                 <Text style={{fontSize:20,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold',}}>Personal Details</Text>
                  <Text style={{fontSize:16,fontFamily:"SourceSansPro-Regular",color:"#1A1A1A",padding:"1%"}}>Marry Davis {"\n"}2501 Stevens Ev{"\n"}Miniapolis MN,54404{"\n"}
                  USA{"\n"} {"\n"}marydavis@gmail.com{"\n"}+1-808-143-8506</Text>
               </View>

                <View style={{justifyContent:'space-between',marginTop:'4%'}}>
                 <Text style={{fontSize:20,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold',}}>Shipping {"\n"}Information</Text>
                  <Text style={{fontSize:16,fontFamily:"SourceSansPro-Regular",color:"#1A1A1A",}}>Standard Shipping {"\n"}2501 Stevens Ev{"\n"}Miniapolis MN,54404{"\n"}
                  USA</Text>
                   <View style={{backgroundColor:'#b80000',width:'45%',borderRadius:15,padding:6,marginLeft:'4%'}}>
                     <Text style={[styles.totalincometodayWIDRO,{color:'#ffffff'}]}>EDIT</Text> 
                   </View>
               </View>
               </View>


                



               <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"4%",marginTop:'5%',marginBottom:'30%'}}>
                <View style={{justifyContent:'space-between',}}>
                 <Text style={{fontSize:20,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold'}}>Billing Information</Text>
                  <Text style={{fontSize:16,fontFamily:"SourceSansPro-Regular",color:"#1A1A1A",top:-15}}>Same as shipping address</Text>
               </View>

                <View style={{marginLeft:8}}>
                 <Text style={{fontSize:20,color:'#1a1a1a',fontFamily:'SourceSansPro-SemiBold',}}>Payment</Text>
                  <Text style={{fontSize:16,fontFamily:"SourceSansPro-SemiBold", color:"#1A1A1A",}}>US$235.00
                    {"\n"}Pay by credit/debit card </Text>
               </View>
               </View>
               

         

         <View>   


        { openpopup  &&
                    <Provider>
                    <Portal>
                    <Modal visible={visible} style={{backgroundColor:'rgba(0, 0, 0, 0.8)',marginHorizontal:-20,marginVertical:-5}} onDismiss={closepopup} contentContainerStyle={containerStyle}>
          <View style={{ marginTop:40,position: 'absolute', textAlign: 'center',justifyContent: 'center',alignItems: 'center',top: 10,left: 0,right: 0 }}>
            <View style={{ width: 320, borderRadius: 10, backgroundColor:'#f2f2f2', borderColor:'#999', borderWidth:2 }}>
              
             
             
             

                 <View style={{width:deviceWidth/1.15,backgroundColor:'#f2f2f2',padding:'5%',alignSelf:'center',marginTop:'3%',borderRadius:15,}}>

                  
                     
                     <TouchableOpacity onPress={() => closepopup() } style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,padding:8,alignSelf:'flex-end'}}>
                      <Image source={ImageIcons.closetoday}  style={{height:12,width:12,marginTop:5,alignSelf:'center'}} />
                    </TouchableOpacity>
                    
                    

                <Text style={{fontSize:18,fontFamily:'SourceSansPro-SemiBold',color:'#1a1a1a',marginTop:'3%'}}>Select a shipping address:</Text>

                <View style={{borderWidth:2,borderColor:'#b80000',padding:4,borderRadius:15,marginVertical:'5%',backgroundColor:'#ffffff'}}>
                 <View style={{backgroundColor:'#d0e3fb',width:'45%',borderRadius:10,padding:8,marginHorizontal:'2%',marginVertical:'3%'}}>
                     <Text style={styles.totalincometodayWIDROprocess}>DEFAULT ADDRESS</Text> 
                   </View>
                  <Text style={{fontSize:18,fontFamily:"SourceSansPro-Regular",color:"#1A1A1A",marginHorizontal:'2%'}}>Marry Davis {"\n"}2501 Stevens Ev{"\n"}Miniapolis MN,54404{"\n"}
                  USA{"\n"}</Text>
                </View>


                 <View style={{padding:4,marginVertical:'5%',elevation:0.5,backgroundColor:'#ffffff',borderRadius:5}}>
                 
                  <Text style={{fontSize:18,fontFamily:"SourceSansPro-Regular",color:"#1A1A1A",marginHorizontal:'2%',marginTop:'2%'}}>Marry Davis {"\n"}2501 Stevens Ev{"\n"}Miniapolis MN,54404{"\n"}
                  USA{"\n"}</Text>
                </View>

                <View style={{padding:'4%',elevation:0.5,marginTop:'5%',flexDirection:'row',justifyContent:'space-between',backgroundColor:'#ffffff',borderRadius:5}}>
                 <Text style={{fontSize:18,fontFamily:"SourceSansPro-SemiBold",alignSelf:'center'}}>Add a New Addresss</Text>
                  <TouchableOpacity onPress={() => closepopup() } style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,padding:8,}}>
                      <Image source={ImageIcons.addwhytoday}  style={{height:15,width:15,marginTop:5,alignSelf:'center'}} />
                    </TouchableOpacity>
                </View>
                
              </View>

             
             
               
               
                
              
                

            </View>
          </View>
       </Modal>
                    </Portal>
                    </Provider>
                }
         </View>
              

                 

              
         </ScrollView>


          <View style={{ position:'absolute',zIndex:2001,right:20,bottom:70}}>
               <TouchableOpacity onPress={() => sethelppopup1(true)}>
                    <Image source={ImageIcons.exporthelp} style={{width:50,height:50}}/>
                </TouchableOpacity>
               </View>

               { helppopup1 ==true &&
        <View style={{flex:1,backgroundColor:'#ffffff',margin:20,paddingVertical:10,borderRadius:10,zIndex:4001, position:'absolute',bottom:'10%'}}>
            
           
              <View style={styles.chatViewrose}>
                    
                <Text style={styles.Benrosetext}>Chat with customer support</Text>
                <TouchableOpacity style={{position:'absolute',right:15,top:5}} onPress={() => sethelppopup1(false)}>
                    <Image source={ImageIcons.closepopup}  style={styles.sendmsg2} />
                </TouchableOpacity>
            </View>
            <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#ffffff', height:200}} >
            <View style={{marginVertical:'2%'}}>
                <FlatList
                    data={props?.getchatsupportlist1 || []}
                    renderItem={renderItem6}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                />
             </View>
           </ScrollView>
            <View style={[styles.accountmainview,{marginBottom:10, width:'100%'}]}>
            <View style={{width:'90%'}}>
                <TextInput  style={styles.chatinput}
                placeholder="Type here..."
                onChangeText={onChangeText3}
                value={text3}
                placeholderTextColor="#999999"
                />
            </View>
            <TouchableOpacity style={{position:'absolute',right:55,top:5}} onPress={() => handleSendRequestSubmit()}>
                    <Image source={ImageIcons.sendchat}  style={styles.sendmsg1} />
                </TouchableOpacity>
            </View>
        </View>
        }
          
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

        <Footer3 onSelection="5"/>
         
         </KeyboardAvoidingView>
    )
}



export default Accountview2