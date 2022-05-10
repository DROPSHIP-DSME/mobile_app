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
import Shopheader from '../../screens/common/Shopheader';

import * as Progress from 'react-native-progress';
import RnIncrementDecrementBtn  from 
'react-native-increment-decrement-button';


const NameStore = (props) => {

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
     const productId = props?.route?.params?.productId;
    const shopId = props?.route?.params?.shopId;
    const categoryId = props?.route?.params?.categoryId;
   
    // Local states
     const [checked, setChecked] = React.useState('first');
    const [selectedValue, setSelectedValue] = useState("java");
    const [visible, setVisible] = React.useState(false);
    const [starCount, setstarCount] = useState(3);
    const [visiblebag, setVisiblebag] = React.useState(false);

    const [Paypal, onChangePaypal] = React.useState("Paypal");
    const [Debit, onChangeDebit] = React.useState("Debit Card");

    const [showclassName, setshowclassName] = useState("#B80000");

    const [helppopup, sethelppopup] = React.useState(false);
    const [reportpopup, setreportpopup] = React.useState(false);
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
      console.log(props?.getlistproductdetails,'ritu')
      props.getAllproductdetails(productId);
       props.shopproduct(shopId);
       props.shopsellcount(shopId);
      }, [])

     const cartdataSubmit = async (productId,productQuantity) => {

        openpopup();
        
        let request = {
             "productId":productId,
            "userId":props?.loginuserid,
            "productQuantity":productQuantity
            }
            
            props.cartadd(request, props.navigation, "vendor");
        }

    const openpopup = () => {
        setVisible(true)

        }
            const closepopup = () => {
          setVisible(false)
        }

        
            const closebagpopup = () => {
          setVisiblebag(false)
        }
        const setIncrement = async (Incval,cartId) => {
           props.increcartlist(cartId, Incval);  
     };

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

    const renderItem = ({ item }) => {
   
  return(
    <View style={styles.maincartviewshop}>
        <TouchableOpacity  onPress={() => {props.navigation.navigate("ProductDetails2",{productId:item._id,shopId:shopId,userType:'shopside'}) }}>
        <View >
           <Image source={{uri: item.productImage}} style={styles.jeansimgshop} />
           <View>
               <Text style={styles.boldproduct}>{item.productName}</Text>
               <Text style={styles.salestext}>${item.productPrice}</Text>
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
             
             <View style={{marginHorizontal:'3%'}}>
                <TouchableOpacity onPress={() => props.navigation.navigate("shop")}> 
                    <View style={{marginTop:'10%',flexDirection:"row"}}>
                          <Image source={ImageIcons.backpopup} style={{width:10,height:17}}/>
                          <View style={{borderBottomWidth:3,width:40,marginLeft:"-2%",marginBottom:"2.5%"}}></View>
                           <Text style={{fontSize:14,fontFamily:"SourceSansPro-Regular",fontWeight:"bold",paddingLeft:5}}>GO BACK</Text>
                          </View>
                          </TouchableOpacity>
                    </View>
                
              <View style={{marginHorizontal:'4%',marginTop:"10%"}}>
               <Image source={{uri:props?.getlistproductdetails?.data?.productImage}} style={{width:deviceWidth/1.1,height:365,borderRadius:10}}/>
               <View style={{position:"absolute",margin:"40%",}}><Image source={ImageIcons.playicon} style={{width:59,height:51}}/></View>
               </View>
               
               <View style={{marginHorizontal:'4%',marginTop:"10%",flexDirection:"row"}}>
               <View>
                    <Image source={{uri:props?.getlistproductdetails?.data?.productImage}} style={{width:70,height:70,borderRadius:10}}/>
               <View style={{position:"absolute",margin:"40%",}}><Image source={ImageIcons.camera} style={{width:15,height:10}}/></View>
               </View>
               <View style={{marginHorizontal:'4%'}}>
               <Image source={{uri:props?.getlistproductdetails?.data?.productImage}} style={{width:70,height:70,borderRadius:10}}/></View>
                <Image source={{uri:props?.getlistproductdetails?.data?.productImage}} style={{width:70,height:70,borderRadius:10}}/>
               </View>

              <View style={{margin:"3%",flexDirection:"row",flexDirection:'row',justifyContent:'space-between',marginTop:'3%',}}>
              <Text style={styles.clothpop}>{props?.getlistproductdetails?.data?.productName}</Text>
              <TouchableOpacity style={{marginRight:3}}  onPress={() => sethelppopup(true)}> 
              <Image source={ImageIcons.shareshop} style={{width:45,height:40}}/>
              </TouchableOpacity>
              </View> 
              <View style={[styles.textviewpop,{margin:"3%"}]}>
              <Text style={{fontSize:24,color:'#1A1A1A',paddingVertical:'1%',lineHeight:30,fontWeight:'bold',fontFamily:'SourceSansPro-Regular',fontStyle:'normal'}}>${props?.getlistproductdetails?.data?.productPrice}</Text>
              </View> 
              
              <View style={{borderBottomWidth:1,marginTop:"4%",marginHorizontal:"3%",borderColor:"#B6B6B6"}}></View>
               <View style={{flexDirection:'row',marginTop:"4%"}}>
              <View style={{marginTop:"3%"}}>
              <Image source={ImageIcons.Elli} style={{width:50,height:50}}/>
              </View>
             
              <View style={{paddingTop:10,paddingLeft:10}}>
                <Text style={{color:"#1A1A1A",fontSize:14,fontFamily:'SourceSansPro-Regular',fontWeight:"bold"}}>MARTHA STEWART</Text>
                    <View style={{flexDirection:"row"}}>
                          <TouchableOpacity style={{marginTop:"3%", backgroundColor:"#B80000",height:25,width:74,borderRadius:20}}>
                                <Text style={{textAlign:'center',paddingTop:"6%",color:"#FFFFFF",fontSize:12,fontFamily:"SourceSansPro-Bold",fontWeight:"bold"}}>FOLLOW</Text>
                         </TouchableOpacity>
                          <TouchableOpacity style={{marginHorizontal:"3%",marginTop:"3%", backgroundColor:"#4AFFBD",height:25,width:90,borderRadius:20}}>
                                <Text style={{textAlign:'center',paddingTop:"3%",color:"#FFFFFF",fontSize:12,fontFamily:"SourceSansPro-Bold",fontWeight:"bold"}}>OPEN STORE</Text>
                         </TouchableOpacity>
                    </View>
             </View>

             </View>

              <View style={{marginHorizontal:"3%",marginTop:"3%"}}>
              <Text style={{color:"#1A1A1A", fontSize:18,fontFamily:"SourceSansPro-Regular",}}>{props?.getlistproductdetails?.data?.productDescription}</Text></View> 
               

               <View style={{flexDirection:'row',marginHorizontal:'4%',marginTop:'4%'}}>
               <Text style={{fontSize:18,fontFamily:'SourceSansPro-Bold',}}>Color :</Text>
                <Text style={{fontSize:18,fontFamily:'SourceSansPro-Regular',marginLeft:5}}>{props?.getlistproductdetails?.data?.productColor}</Text>
             </View> 

             <View style={{flexDirection:'row',marginHorizontal:'4%',marginVertical:'2%'}}>
              <View style={{height:20,width:20,borderRadius:10,backgroundColor:'#b3b3b3'}}></View>
              <View style={{height:20,width:20,borderRadius:10,backgroundColor:'#363e4d',marginLeft:'4%'}}></View>
              <View style={{height:20,width:20,borderRadius:10,backgroundColor:'#40b7c8',marginLeft:'4%'}}></View>
             </View> 
             

         <View style={{flexDirection:'row',marginTop:'5%'}}>
            <View style={{marginHorizontal:'4%',marginVertical:'3%'}}> 
              <Text style={{fontSize:18,fontFamily:'SourceSansPro-Bold',}}>Size</Text>
             <View style={{flexDirection:'row'}}>
                <View style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,padding:9,}}>
                  <Text style={{textAlign:'center',color:'#4d4d4d',fontSize:16,fontFamily:'SourceSansPro-SemiBold'}}>XS</Text>    
                </View>
                 <View style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,padding:9,marginLeft:8}}>
                  <Text style={{textAlign:'center',color:'#4d4d4d',fontSize:16,fontFamily:'SourceSansPro-SemiBold'}}>S</Text>    
                </View>
                 <View style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,padding:9,marginLeft:8}}>
                  <Text style={{textAlign:'center',color:'#4d4d4d',fontSize:16,fontFamily:'SourceSansPro-SemiBold'}}>L</Text>    
                </View>
                 <View style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,padding:9,marginLeft:8}}>
                  <Text style={{textAlign:'center',color:'#4d4d4d',fontSize:16,fontFamily:'SourceSansPro-SemiBold'}}>XL</Text>    
                </View>
             </View>
            </View> 

             <View style={{marginVertical:'3%',marginLeft:'6%'}}> 
              <Text style={{fontSize:18,fontFamily:'SourceSansPro-Bold',}}>Quantity</Text>
             
                <View style={{height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,padding:9,}}>
                  <Text style={{textAlign:'center',color:'#4d4d4d',fontSize:16,fontFamily:'SourceSansPro-SemiBold'}}>45</Text>    
                </View>
            </View> 
         </View> 
         <View style={{flexDirection:"row"}}>
         <TouchableOpacity  onPress={() => {cartdataSubmit(props?.getlistproductdetails?.data?._id)}} style={{width:deviceWidth/2, backgroundColor:"#B80000",borderRadius:30,marginTop:"3%",height:63,marginHorizontal:"5%" }}>
            <Text style={{textAlign:'center',color:"#FFFFFF",fontWeight:'bold',fontSize:18,top:18}}>ADD TO BAG</Text> 
         </TouchableOpacity>  
         <View style={{marginLeft:"2%",marginTop:"4%"}}>
         <Image source={ImageIcons.iconheart} style={{width:59,height:51}}/>
         </View>  
         </View>
         <View style={{marginTop:"4%",marginHorizontal:"4%"}}>
         <Text style={styles.clothpop}>Customer Reviews (4,307)</Text>
         </View>
         <View style={{flexDirection:'row',marginTop:"5%"}}>
                        <Rating
                        type='custom'
                        imageSize={18}
                        ratingCount={5}
                        ratingColor='#EB5757'
                        tintColor='#FFE7E7'
                        value={starCount}
                        onFinishRating={(start) => ratingCompleted(start)}
                        style={{ marginLeft:'3%',marginTop:"1%"}}
                        />
                        <Text style={[styles.TEXT,{fontWeight:"bold",fontFamily:"SourceSansPro-Regular",fontSize:18}]}>Avg. Rating 4.5</Text>
        </View>
         <View style={{flexDirection:'row',marginTop:"5%"}}>
                        <Rating
                        type='custom'
                        imageSize={18}
                        ratingCount={5}
                        ratingColor='#EB5757'
                        tintColor='#FFE7E7'
                        value={starCount}
                        onFinishRating={(start) => ratingCompleted(start)}
                        style={{ marginLeft:'3%',marginTop:"1%"}}
                        />
                        <View style={{marginLeft:"2%",backgroundColor:"#B3B3B3",borderRadius:5,height:21}}>
                        <Progress.Bar progress={0.84} width={200} height={20} color={"#B80000"} />
                        </View>
                        <Text style={[styles.TEXT,{fontWeight:"bold",fontFamily:"SourceSansPro-Regular",fontSize:18}]}>84%</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:"5%"}}>
                        <Rating
                        type='custom'
                        imageSize={18}
                        ratingCount={5}
                        ratingColor='#EB5757'
                        tintColor='#FFE7E7'
                        value={starCount}
                        onFinishRating={(start) => ratingCompleted(start)}
                        style={{ marginLeft:'3%',marginTop:"1%"}}
                        />
                        <View style={{marginLeft:"2%",backgroundColor:"#B3B3B3",borderRadius:5,height:21}}>
                        <Progress.Bar progress={0.10} width={200} height={20} color={"#B80000"} />
                        </View>
                        <Text style={[styles.TEXT,{fontWeight:"bold",fontFamily:"SourceSansPro-Regular",fontSize:18}]}>10%</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:"5%"}}>
                        <Rating
                        type='custom'
                        imageSize={18}
                        ratingCount={5}
                        ratingColor='#EB5757'
                        tintColor='#FFE7E7'
                        value={starCount}
                        onFinishRating={(start) => ratingCompleted(start)}
                        style={{ marginLeft:'3%',marginTop:"1%"}}
                        />
                        <View style={{marginLeft:"2%",backgroundColor:"#B3B3B3",borderRadius:5,height:21}}>
                        <Progress.Bar progress={0.03} width={200} height={20} color={"#B80000"} />
                        </View>
                        <Text style={[styles.TEXT,{fontWeight:"bold",fontFamily:"SourceSansPro-Regular",fontSize:18}]}>3%</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:"5%"}}>
                        <Rating
                        type='custom'
                        imageSize={18}
                        ratingCount={5}
                        ratingColor='#EB5757'
                        tintColor='#FFE7E7'
                        value={starCount}
                        onFinishRating={(start) => ratingCompleted(start)}
                        style={{ marginLeft:'3%',marginTop:"1%"}}
                        />
                        <View style={{marginLeft:"2%",backgroundColor:"#B3B3B3",borderRadius:5,height:21}}>
                        <Progress.Bar progress={0.01} width={200} height={20} borderWidth={1} color={"#B80000"} />
                        </View>
                        <Text style={[styles.TEXT,{fontWeight:"bold",fontFamily:"SourceSansPro-Regular",fontSize:18}]}>1%</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:"5%"}}>
                        <Rating
                        type='custom'
                        imageSize={18}
                        ratingCount={5}
                        ratingColor='#EB5757'
                        tintColor='#FFE7E7'
                        value={starCount}
                        onFinishRating={(start) => ratingCompleted(start)}
                        style={{ marginLeft:'3%',marginTop:"1%"}}
                        />
                        <View style={{marginLeft:"2%",backgroundColor:"#B3B3B3",borderRadius:5,height:21}}>
                        <Progress.Bar progress={0.01} width={200} height={20} color={"#B80000"} />
                        </View>
                        <Text style={[styles.TEXT,{fontWeight:"bold",fontFamily:"SourceSansPro-Regular",fontSize:18}]}>1%</Text>
        </View>
        <View style={{flexDirection:"row",marginHorizontal:"3%",marginTop:"5%"}}>
                <View style={{backgroundColor:'#E6E6E6',borderRadius:10,height:40}}>
                     <Picker
                        selectedValue={selectedValue}
                        style={{ height: 35, width: 140 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                      >
                        <Picker.Item label="View" value="Sort" />
                        <Picker.Item label="JavaScript" value="js" />
                      </Picker>
                </View>
                 
                <View style={{backgroundColor:'#E6E6E6',borderRadius:10,height:40,marginLeft:"4%"}}>
                     <Picker
                        selectedValue={selectedValue}
                        style={{ height: 35, width: 140 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                      >
                        <Picker.Item label="Sort" value="Sort" />
                        <Picker.Item label="JavaScript" value="js" />
                      </Picker>
                </View>
                </View>
                <View style={{flexDirection:'row',marginTop:"5%"}}>
                        <Text style={[styles.TEXT,{fontWeight:"bold",fontFamily:"SourceSansPro-Regular",fontSize:18,marginLeft:'4%'}]}>Alex Davis</Text>
                        <Rating
                        type='custom'
                        imageSize={18}
                        ratingCount={5}
                        ratingColor='#EB5757'
                        tintColor='#FFE7E7'
                        value={starCount}
                        onFinishRating={(start) => ratingCompleted(start)}
                        style={{ marginLeft:'3%',marginTop:"1%"}}
                        />
                        
                </View>
                <View style={{marginHorizontal:"4%"}}>
                <Text style={{fontSize:16,color:"#1A1A1A",fontFamily:"SourceSansPro-Regular,lineHeight:20"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget bibendum ultrices non malesuada mattis. Id suscipit enim in pretium nunc viverra. Scelerisque est id mauris semper quis. At tincidunt bibendum enim justo nisi. Fames eget massa elit, arcu consectetur 
                venenatis ac pretium. Quis nunc nulla quis sit mattis id. Donec risus amet donec enim.</Text>
                <Text style={{fontFamily:"SourceSansPro-Regular",fontSize:16,color:"#808080"}}>05 Jan ‘22</Text>
                </View>
                <View style={{marginHorizontal:"4%",marginTop:"3%",flexDirection:"row"}}>
                <Image source={ImageIcons.likethumb} style={{width:16,height:15}}/>
                 <Text style={[styles.TEXT,{fontWeight:"bold",fontFamily:"SourceSansPro-Bold",fontSize:14}]}>1,029 users </Text>
                 <Text style={{fontSize:14,color:"#1A1A1A",fontFamily:"SourceSansPro-Regular,lineHeight:20"}}>found this helpful</Text>
                 <View style={{backgroundColor:"#E6E6E6",marginLeft:"1%",width:deviceWidth/3,height:25,paddingTop:"1%",borderRadius:5}}>
                 <Text style={{textAlign:"center", color:"#4D4D4D",fontSize:12,fontWeight:"bold",fontFamily:"SourceSansPro-Regular"}}>REPORT COMMENT</Text></View>
                </View>
                 <View style={{flexDirection:'row',marginTop:"5%",}}>
                        <Text style={[styles.TEXT,{fontWeight:"bold",fontFamily:"SourceSansPro-Regular",fontSize:18,marginLeft:'4%'}]}>Alex Davis</Text>
                        <Rating
                        type='custom'
                        imageSize={18}
                        ratingCount={5}
                        ratingColor='#EB5757'
                        tintColor='#FFE7E7'
                        value={starCount}
                        onFinishRating={(start) => ratingCompleted(start)}
                        style={{ marginLeft:'3%',marginTop:"1%"}}
                        />
                        
                </View>
                <View style={{marginHorizontal:"4%"}}>
                <Text style={{fontSize:16,color:"#1A1A1A",fontFamily:"SourceSansPro-Regular,lineHeight:20"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget bibendum ultrices non malesuada mattis. Id suscipit enim in pretium nunc viverra. Scelerisque est id mauris semper quis. At tincidunt bibendum enim justo nisi. Fames eget massa elit, arcu consectetur 
                venenatis ac pretium. Quis nunc nulla quis sit mattis id. Donec risus amet donec enim.</Text>
                <Text style={{fontFamily:"SourceSansPro-Regular",fontSize:16,color:"#808080"}}>05 Jan ‘22</Text>
                </View>
                <View style={{marginHorizontal:"4%",marginTop:"3%",flexDirection:"row"}}>
                <Image source={ImageIcons.likethumb} style={{width:16,height:15}}/>
                 <Text style={[styles.TEXT,{fontWeight:"bold",fontFamily:"SourceSansPro-Bold",fontSize:14}]}>1,029 users </Text><Text style={{fontSize:14,color:"#1A1A1A",fontFamily:"SourceSansPro-Regular,lineHeight:20"}}>found this helpful</Text>
                 <TouchableOpacity onPress={() => setreportpopup(true)} style={{backgroundColor:"#E6E6E6",marginLeft:"1%",width:deviceWidth/3,height:25,paddingTop:"1%",borderRadius:5}}>
                 <Text style={{textAlign:"center", color:"#4D4D4D",fontSize:12,fontWeight:"bold",fontFamily:"SourceSansPro-Regular"}}>REPORT COMMENT</Text></TouchableOpacity>
                </View>
                <View style={{marginTop:"6%",marginHorizontal:"4%"}}>
                 <Text style={styles.clothpop}>More Products from this Store</Text>
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
      { openpopup  &&
                    <Provider>
                    <Portal>
                    <Modal visible={visible}  contentContainerStyle={containerStyle}>

                    <View style={{flexDirection:'row'}}>
                    <View style={{marginTop:'3%',marginRight:"2%"}}>
                    <Image source={{uri: props?.getlistproductdetails?.data?.productImage}} style={{width:83,height:96,borderRadius:10}}/>
                    </View> 

                   <View>
                    <View style={{flexDirection:"row"}}>
                    <View style={{width:"60%"}}>
                    <Text style={{fontSize:16,lineHeight:20,fontStyle:'normal',fontWeight:'400',marginVertical:'4%',fontFamily:'SourceSansPro-Regular',color:'#1A1A1A'}}>{props?.getlistproductdetails?.data?.productName}</Text>
                    </View>
                    <View style={{marginLeft:"10%",marginTop:"2%"}}>
                   <Image source={ImageIcons.del} style={{width:41,height:36}}/>
                   </View>
                   </View>

                   <View>
                   <Text  style={{fontSize:22, fontWeight:'bold',marginVertical:'4%',fontFamily:'SourceSansPro-Regular',color:'#1A1A1A'}}>${props?.getlistproductdetails?.data?.productPrice}</Text>
                   </View>

                    
                   <View style={{flexDirection:"row"}}>
                   <View>
                   <Text style={{fontSize:16, fontWeight:'bold',marginVertical:'1%',fontFamily:'SourceSansPro-Regular',color:'#1A1A1A'}}>Color:</Text>
                   </View>
                   <View style={{height:20,width:20,borderRadius:10,backgroundColor:'#b3b3b3',marginLeft:"1%"}}></View>
                   <Text style={{fontSize:16, fontWeight:'bold',fontFamily:'SourceSansPro-Regular',color:'#1A1A1A'}}>/ Size :S</Text>
                   </View>
                   
                   

                   <View style={{flexDirection:"row"}}>
                       <View style={{marginTop:"4%"}}>
                            <RnIncrementDecrementBtn
                            minVal={1} 
                            minreq={1} 
                            max={99}
                            //val={parseInt(item.productQuantity)}
                            styleBtn={{width:30.6,height:26,backgroundColor:'#F3F3F3'}}
                            styleTextInput={{width:38.25,height:26,backgroundColor:'#F3F3F3'}}
                            labelStyle={{fontSize:15,marginTop:'1%',color:'#223263',fontFamily:'SourceSansPro-Regular'}}
                            handleClick={(val)=> setIncrement(val,item._id)}
                            />
                        </View> 
                      <View style={{marginLeft:"25%"}}>
                     <Text style={{color:"#1A1A1A",fontSize:16,fontFamily:'SourceSansPro-Regular'}}>Total:</Text>
                     <Text style={{color:"#1A1A1A",fontSize:16,fontFamily:'SourceSansPro-Bold'}}>$52.50</Text>
                     </View> 
                   </View>
                   </View>
                   </View>

                    <View style={{borderBottomWidth:1,marginTop:"2%",borderColor:"#B3B3B3"}}></View>

                     <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
                     <Text style={{color:"#1A1A1A",fontSize:20,fontFamily:'SourceSansPro-Regular'}}>Total:</Text>
                     <Text style={{color:"#1A1A1A",fontSize:20,fontFamily:'SourceSansPro-Bold'}}>$52.50</Text>
                     </View> 

                    <TouchableOpacity  onPress={() => {closepopup();setVisiblebag(true)}} style={{width:deviceWidth/1.3, backgroundColor:"#B80000",borderRadius:30,marginTop:"3%",height:38 ,marginHorizontal:"3%" }} >
                    <Text style={{textAlign:'center',color:"#FFFFFF",fontWeight:'bold',fontSize:18,top:8}}>VIEW BAG</Text> 
                    </TouchableOpacity>
                    </Modal>
                    </Portal>
                    </Provider>
                }

              
         </ScrollView>
          { visiblebag ==true &&
        <View style={{flex:1,backgroundColor:'#ffffff',paddingVertical:10,borderRadius:10,zIndex:4001, position:'absolute',bottom:'40%',margin:"10%"}}>
            
           
              <View>
                    
                <Text style={{fontSize:20,fontFamily:"SourceSansPro-Regular",color:"#666666",paddingLeft:"16%"}}>Your shopping bag is empty.</Text>
                
            </View>
            <TouchableOpacity  onPress={() =>{setVisiblebag(false);props.navigation.navigate("Bagprocess")} } style={{width:deviceWidth/1.3, backgroundColor:"#B80000",borderRadius:30,marginTop:"10%",height:38 ,marginHorizontal:"3%" }} >
                    <Text style={{textAlign:'center',color:"#FFFFFF",fontWeight:'bold',fontSize:18,top:8}}>START SHOPPING</Text> 
            </TouchableOpacity>
            
           
           
        </View>
        }
          { helppopup ==true &&
        <View style={{flex:1,backgroundColor:'#ffffff',width:deviceWidth/1.5,paddingVertical:10,borderRadius:10,zIndex:4001, position:'absolute',bottom:'40%',margin:"20%"}}>
            
           
              <View style={[styles.chatViewrose,{alignSelf:'center'}]}>
                    
                <Text style={{fontSize:14,color:'#1a1a1a',fontFamily:'SourceSansPro-Regular',}}>Share this product:</Text>
                
            </View>
            <View style={styles.accountmainview}>
                <TouchableOpacity onPress={() => sethelppopup(false)}>
                    <View style={styles.showimge}>
                        <Image source={ImageIcons.google} style={styles.google1} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => facebookSignIn()}>
                    <View style={styles.showimge}>
                        <Image source={ImageIcons.facebook} style={styles.facebook1} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => instaLogin.current.show()}>
                    <View style={styles.showimge}>
                        <Image source={ImageIcons.message} style={styles.message1} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => twitterSignIn()}>
                    <View style={[styles.showimge, { padding: 10 }]}>
                        <Image source={ImageIcons.twitter} style={styles.twitter1} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>linkedInLogin.current.open()}>
                    <View style={[styles.showimge, { padding: 10 }]}>
                        <Image source={ImageIcons.linkin} style={styles.linkin1} />
                    </View>
                </TouchableOpacity>
            </View>
           
           
        </View>
        }

        { reportpopup ==true &&
        <View style={{backgroundColor:'#ffffff',width:'90%',alignSelf:'center',paddingVertical:10,borderRadius:10,position:'absolute',marginTop:"8%",marginRight:"2%",elevation:1,}}>
            
           
              <View style={styles.chatViewrose}>

                <TouchableOpacity style={{position:'absolute',right:15}} onPress={() => setreportpopup(false)}>
                    <Image source={ImageIcons.closepopup}  style={styles.sendmsg2} />
                </TouchableOpacity>
                    
                <Text style={[styles.Benrosetext,{marginTop:"10%"}]}>Reason for reporting the following comment:</Text>
                
            </View>
            <View style={{borderRadius:5,borderWidth:1,marginHorizontal:"4%",backgroundColor:"#FAFAFA"}}>
            <Text style={{fontSize:18,fontFamily:"SourceSansPro-Regular",color:"#1A1A1A",lineHeight:23,paddingHorizontal:"2%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget bibendum ultrices non malesuada mattis.
             Id suscipit enim in pretium nunc viverra. Scelerisque est id mauris semper quis. </Text>
            </View>
            <View style={{marginTop:"2%"}}> 
              <View style={{flexDirection:"row",elevation:1,marginHorizontal:"4%",backgroundColor:"#FAFAFA"}}>
              <RadioButton
                value="first"
                status={ checked === 'first' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('first')}
              />

              <Text style={{paddingTop:"2%", fontSize:18,fontFamily:"SourceSansPro-Regular",fontWeight:"bold", color:"#B80000",lineHeight:23,paddingHorizontal:"2%"}}>This comment was offensive.</Text>
              </View>

              <View style={{flexDirection:"row",marginTop:"2%", flexDirection:"row",elevation:1,marginHorizontal:"4%",backgroundColor:"#FAFAFA"}}>
              <RadioButton
                value="second"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}
              />
              <Text style={{paddingTop:"2%", fontSize:18,fontFamily:"SourceSansPro-Regular",fontWeight:"bold", color:"#808080",lineHeight:23,paddingHorizontal:"2%"}}>This comment is spam.</Text>
              </View>

              <View style={{flexDirection:"row",marginTop:"2%", flexDirection:"row",elevation:1,marginHorizontal:"4%",backgroundColor:"#FAFAFA"}}>
              <RadioButton
                value="third"
                status={ checked === 'third' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('third')}
              />
              <Text style={{paddingTop:"2%", fontSize:18,fontFamily:"SourceSansPro-Regular",fontWeight:"bold", color:"#808080",lineHeight:23,paddingHorizontal:"2%"}}>I don’t have a specific reason.</Text>
              </View>

            </View>

          
            <View style={{margin:'3%'}}>
                <TextInput  style={{backgroundColor:'#E6E6E6',borderRadius:10,paddingLeft:'5%',fontSize:18,lineHeight:23,letterSpacing:-0.125172,width:'100%',height:100,color:'#878787',fontWeight:'normal',fontStyle:'normal',fontFamily:'SourceSansPro-Regular'}}
                placeholder="Add more details about your reason (optional)"
                onChangeText={onChangeText1}
                value={text1}
                placeholderTextColor="#999999"
                />
            </View>
            <TouchableOpacity style={{width:deviceWidth/1.3, backgroundColor:"#B80000",borderRadius:30,marginTop:"3%",height:38,width:300 ,marginHorizontal:"3%" }}>
            <Text style={{textAlign:'center',color:"#FFFFFF",fontWeight:'bold',fontSize:18,top:8}}>REPORT COMMENT</Text> 
         </TouchableOpacity>
           
           
        </View>
        }
  
       <Footer3 onSelection="3" />
            
        </KeyboardAvoidingView>
    )
}



export default NameStore