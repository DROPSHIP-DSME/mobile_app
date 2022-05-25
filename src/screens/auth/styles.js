import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../common';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Reactdim = require('react-native');

const { Dimensions } = Reactdim;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    registrationRoot: {
        flex: 1,
        justifyContent: 'center'
    },
    registrationRootscroll: {
        flex: 1,backgroundColor:'#ffffff'
    },
  map: {
        ...StyleSheet.absoluteFillObject,
    },
  screenimgg:{
   width:deviceWidth/1,height:deviceHeight/1
  },
  setlogonewdata:{
        width:90,
        height:73
  },
  setlogonewdatarow:{
   width:90,
    height:73,
  },
  tickmarkicon:{
    marginTop:-3,
    marginLeft:-3,
    width:16,
    height:16
 },
 stringerror:{
    color:'#cc0000',marginHorizontal:'5%',marginVertical:'1%'
 },
 txtsyz:{
  fontSize:18,fontFamily:'hinted-AvertaStd-Bold'
},
 fllowview:{
  marginTop:"3%", backgroundColor:"#B80000",height:25,width:74,paddingHorizontal:'2%',borderRadius:20
},
flltxt:{
  textAlign:'center',paddingTop:"3%",color:"#FFFFFF",fontSize:12,fontFamily:"hinted-AvertaStd-Bold",fontWeight:"bold"}
,
strtxt:{
  marginHorizontal:"3%",marginTop:"3%", backgroundColor:"#4AFFBD",height:25,width:90,borderRadius:20
},
stwtxt:{
  color:"#1A1A1A",fontSize:14,fontFamily:'hinted-AvertaStd-Regular',fontWeight:"bold"
},
 tickmarkview:{
    width:15,height:15,top:5, left:5,borderWidth:2,borderColor:'#585858',position:'absolute',zIndex:1001
},
  leftIconwhite: {
        width:40,
        height:40,
        marginTop:'5%',left:20
       
    },
     leftIconblack: {
        width:23.33,
        height:13.33,
        left:20,top:'20%'
       
    },
    leftlogView:{
      flexDirection:'row',marginTop:'14%',marginHorizontal:'5%'
    },
    bluecss:{
      width:deviceWidth/1.1,height:223,borderRadius:10
    },

     headingpass: {
        // paddingVertical: '2%',
        alignItems: 'center',
        marginVertical: '1%',
        // paddingBottom:hp('5%')
    },

    heading: {
        // paddingVertical: '2%',
        alignItems: 'center',
        marginVertical: '6%',
        // paddingBottom:hp('5%')
    },
    accountmainview:{
        flexDirection:'row', justifyContent:'space-between',marginHorizontal:'5%',marginVertical:'4%',
    },
    accountmainview2:{
        flexDirection:'row', justifyContent:'space-between',
        marginHorizontal:'7%',
    },
    newimg:{
        width:deviceWidth/1.1,height:200,borderRadius:10
    },
    showimge:{
        borderWidth:1,borderColor:'#e6e6e6',padding:5, borderRadius:50
    },
    google1: {
       width:25,height:25   
    },
    droparrow: {
       width:18,height:18   
    },
    copyimg:{
     width:21.4,height:24,
    },
    sparrowimg:{
      width:24,height:24,marginHorizontal:'3%',marginVertical:'3%'
    },
    reddelete:{
       marginHorizontal:'1%',width:14,height:17,alignSelf:'center'
    },
    reddeleteimg:{
     width:14,height:17,marginTop:'5%'
    },
    clothes:{
      width:60,height:60,borderRadius:5,marginVertical:'5%'
    },
    clothimage:{
       width:deviceWidth/3,height:175,borderRadius:10, borderColor:'#c3c3c3',borderWidth:1
    },
    clothcartimage:{
       width:deviceWidth/4,height:deviceHeight/8,borderRadius:10
    },
    Clothe:{
     width:30,height:30,marginHorizontal:3,borderRadius:2,marginVertical:1
    },
    deleteimg:{
      height:17.38,
      width:14.25,
      marginHorizontal:'5%'
    },
    shoesboximg:{
       position:'absolute',marginTop:'10%'
    },
    shoeswhiteimg:{
       position:'absolute',bottom:-53
    },
    facebook1: {
        
       width:25, height:25
    },
    newmslimg:{
      width:5, height:5,
    },
    blurimg:{
     width:40,height:45,
    },

    home1: {
        alignSelf:'center',
        width:24,height:24,
    },
    home2:{
       alignSelf:'center',
       width:24,height:24,
    },
    footer2img:{
     alignSelf:'center',
     width:24,height:24,

    },
      footer2imgtoday:{
     alignSelf:'center',
     width:21,height:21,marginTop:4

    },
    footer5img:{
        alignSelf:'center',
        width:30,height:30,
        marginTop:-7
    },
    footer5imgtoday:{
        alignSelf:'center',
        width:21,height:21,
        marginTop:3
    },
    footer3img:{
        width:31.5,
        height:20,
        marginBottom:2,alignSelf:'center',
    },
     footer3imgtoday:{
        width:21,
        height:21,
        marginBottom:2,alignSelf:'center',marginTop:1
    },
    footer4img:{
       width:18,height:24, 
       alignSelf:'center',
    },
     footer4imgtoday:{
       width:21,height:21, 
       alignSelf:'center',marginTop:4
    },
    footersel:{
        tintColor:'#B80000',
        color:'#B80000'
    },
    homecart:{
       alignSelf:'center',
       width:20,height:24,
    },
    cart1: {
         width:20,
       
    },
    tvicon1: {
          width: 20,
       
        //alignItems:'center'
         //marginLeft:'17%',
    },
    share1: {
          width: 20,
       
    },
    prof1: {
        width: 20,
       
    },
    products1: {
         width: wp('8%'),
        height: wp('8%'),
    },
    more1: {
         width: wp('7%'),
        height: wp('7%'),
    },
    chatarrow1: {
         width: wp('8%'),
        height: wp('8%'),
    },
    cart2: {
         width: wp('10%'),
        height: wp('8%'),
    },
   
    phone1: {
        height:40,width:40,
    },
    man1: {
        height:30,width:30
    },
    man2: {
        width: wp('12%'),
        height: wp('12%'),
        borderRadius:40
    },
    man3: {
         width:30,
        height:30,
        borderRadius:40,marginLeft:'5%'
    },
   
    next1: {
        width:4,
        height: 8,
    },
    smile1: {
        width: wp('5%'),
        height: wp('5%'),
    },
    jeansimg:{
      width:'100%',height:250,borderRadius:5
    },
     jeansimg569:{
      width:'98%',height:250,borderRadius:5
    },
     jeansimg2:{
      height:220,borderRadius:5,width:160
    },
    jeansimgshop:{
      height:deviceWidth/2.2+80,borderRadius:5,width:deviceWidth/2.3
    },
     jeansimggg:{
      height:deviceHeight/3.5,borderRadius:5,width:deviceWidth/2.4,marginVertical:5
    },

     shopimg2:{
      height:150,borderRadius:5,width:deviceWidth/2.2
    },

    chatinput: {
       backgroundColor:'#E6E6E6',borderRadius:10,paddingLeft:'5%',fontSize:11.3,lineHeight:14,letterSpacing:-0.125172,width:'75%',color:'#878787',fontWeight:'normal',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular'
    },
    chatsupportimgView:{
        width:62,backgroundColor:'#E1E1E1',
        borderRadius:29,alignItems:'center',justifyContent:'center'
    },
    redcart11: {
         width: wp('6%'),
        height: wp('6%'),
        //marginLeft:'8%'
    },
    liveicon1: {
        width:20,height:15,margin:'4%'
    },
    redcart:{
       width:15,height:15,margin:'4%'
    },
    backiconimg:{
       width:25,height:20
    },
    store1: {
        width: 150,
        height: 150,
        marginTop:'40%',alignSelf:'center'
    },
    devider1:{
        flexDirection: 'row', marginHorizontal:'7%',marginTop:'5%',marginBottom:'5%'
    },
    devider2:{
        backgroundColor: '#B3B3B3', height: 1, flex: 1, alignSelf: 'center'
    },
    devider3:{
        alignSelf:'center', fontFamily: 'hinted-AvertaStd-Regular',paddingHorizontal:20, fontSize: 12, color:'#808080'
    },
    message1: {
        
       
    },
    twitter1: {
        
       width:15, height:15
    },
    linkin1: {
       width:15, height:15
    },
     headingTextpass: {
        textAlign: 'center',marginHorizontal:'4%',
        fontSize: 20,
        color:"#888585",
        fontFamily: 'hinted-AvertaStd-Regular',
        fontStyle:'normal',
        marginTop:'10%',fontWeight:'600'
    },
    groupimg:{
        width:375,
        height:402
    },
    headingText: {
        textAlign: 'center',
        fontSize: 20,
        color:"#888585",
        fontFamily: 'hinted-AvertaStd-Regular',
        fontStyle:'normal',lineHeight:25.14,
        marginTop:'10%',fontWeight:'600'
    },
    headingText1: {
        fontSize: 25,
        color:"#1A1A1A",
        fontFamily: 'hinted-AvertaStd-Regular',
        fontStyle:'normal',
        marginTop:'5%',fontWeight:'700',marginLeft:'5%'
    },
    headingTextfrgt: {
        fontSize: 26,
        color:"#1A1A1A",
        fontFamily: 'hinted-AvertaStd-Bold',
        fontStyle:'normal',
        marginTop:'5%',fontWeight:'400',marginLeft:'5%'
    },
     headingText1today: {
        fontSize: 16,
        color:"#000000",
        fontFamily: 'AvertaStd-Regular',
        fontStyle:'normal',
        marginTop:'5%',fontWeight:'400',marginLeft:'5%'
    },
    phoneTitle: {
        color: Colors.WHITE,
        paddingVertical: 5,
        fontSize: 16,
        fontFamily: Fonts.RalewayExtraBold
    },
    phoneContainer: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.LIGHT_BLACK,
        borderRadius: 10,
        color: Colors.WHITE,
    },
    phoneTextContainer: {
        height: 50,
        backgroundColor: Colors.LIGHT_BLACK,
        color: Colors.WHITE,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    phoneInput: {
        height: 50,
        backgroundColor: Colors.LIGHT_BLACK,
        color: Colors.WHITE,
    },
    logoImg: {
        // resizeMode: 'contain',
        width: wp('70%'),
        height: wp('60%'),
    },
    loginSubtitleContainer: {
        // paddingHorizontal: 30,
        marginTop: 10,
        width: wp('60%')
    },
    loginSubtitleText: {
        textAlign: 'center',
        color: Colors.WHITE,
        fontSize: 16
    },
    countdown: {
        marginTop: '5%',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center'
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '8%',
        paddingHorizontal:'5%',
    },
    rememberMeText: {
        color: Colors.WHITE,
        fontSize: 16,
        fontFamily: Fonts.RalewayExtraBold,
        paddingLeft:20
    },
    privacyText: {
        color: Colors.WHITE,
        fontSize: 14,
        paddingLeft:10
    },
    linkText:{
        color:Colors.GREEN,
        textDecorationLine:'underline'
    },
    matterText:{
        fontFamily:Fonts.HomepageBaukastenBold,
        fontSize:20,
        color:Colors.GREEN,
        textAlign:'right',
        marginTop:-50,
        width: wp('60%')
    },
    subtitleLogoText:{
        fontFamily:Fonts.HomepageBaukastenBold,
        fontSize:20,
        textAlign:'center',
        width:'70%',
        color:Colors.GREEN,
        position:'relative',
        top:-30
    },
    subtitleSubText:{
        fontFamily:Fonts.HomepageBaukastenBold,
        fontSize:16,
        textAlign:'center',
        width:'70%',
        color:Colors.WHITE,
        position:'relative',
        top:-20
    },
    shoertTouchableOpacitytext:{
        backgroundColor:'#E22020',padding:'5%',marginRight:10,
        borderRadius:50,justifyContent:'center',alignItems:'center'
    },
    TouchableOpacitytext:{
        marginLeft:'1%',width:'70%',
        backgroundColor:'#E22020',padding:'3%',
        borderRadius:50,justifyContent:'center',alignItems:'center'
    },
    TouchableOpacitytextadsum:{
        marginLeft:'1%',width:'80%',
        backgroundColor:'#E22020',padding:'3%',
        borderRadius:50,justifyContent:'center',alignItems:'center'
    },

        homecontinuebutton:{
        textAlign:'center',fontSize:15,
        color:'#FFFFFF',fontFamily:'hinted-AvertaStd-Regular',
        fontStyle:'normal', justifyContent:'center', lineHeight:20
   },
   homecontinuebuttonmodal:{
        textAlign:'center',fontSize:15,padding:'1%',
        color:'#FFFFFF',lineHeight:19,fontFamily:'hinted-AvertaStd-Regular',
        fontStyle:'normal'
   },
   Touchableselltextaddd:{
        width:'80%',height:48,padding:'3%',
        backgroundColor:'#AFFFE2',
        borderRadius:50,justifyContent:'center',alignItems:'center'
   },
   
   Touchableselltext:{
        width:'70%',height:48,
        backgroundColor:'#AFFFE2',
        borderRadius:50,justifyContent:'center',alignItems:'center'
   },
   Touchableselltexte:{
        marginLeft:'1%',width:'90%',
        backgroundColor:'#B80000',
        borderRadius:50,justifyContent:'center'
   },
   sellbutton:{
        textAlign:'center',fontSize:15,fontFamily:'hinted-AvertaStd-Regular',
        fontStyle:'normal',lineHeight:19,
        color:'#0B0022',
   },
  input1: {
    
    marginHorizontal:'5%',marginTop:'5%',
    borderWidth: 1,borderColor:'#E6E6E6',paddingLeft:'5%',
    borderRadius:12,backgroundColor:'#E6E6E6', color:'#000000', height:50
  },
  input2: {
    marginHorizontal:'5%',marginTop:'5%',
    borderWidth: 1,borderColor:'#E6E6E6',paddingLeft:'5%',
    borderRadius:12,backgroundColor:'#E6E6E6', color:'#000000', height:50
  },
  inputlive:{
       marginHorizontal:'5%',justifyContent:'center',textAlign:'center',marginVertical:'1%'
  },
  inputlive1:{
      marginVertical:'1%'
  },
  inputcategory:{
     
    marginHorizontal:'4%',marginTop:'4%',
    paddingLeft:'5%',borderWidth:1,borderColor:"#4E4E4E",
    borderRadius:5, color:'#000000', height:47,backgroundColor:"#FFFFFF"
   },
    inputcategorytodayy:{
     
    marginHorizontal:'4%',marginTop:'4%',
    paddingLeft:'5%',fontSize:16,
    borderRadius:5, color:'#000000', height:50,backgroundColor:"#e6e6e6"
   },
    inputcategorytodayyaccount:{
     
    marginHorizontal:'4%',
    paddingLeft:'5%',fontSize:16,width:deviceWidth/2.1,
    borderRadius:5, color:'#000000', height:50,backgroundColor:"#e6e6e6"
   },
    inputcategorytodayy123:{
     
    marginHorizontal:'4%',marginTop:'4%',
    paddingLeft:12,fontSize:16,
    borderRadius:5, color:'#000000', height:120,backgroundColor:"#e6e6e6",textAlignVertical:'top'
   },
   inputcategory1:{
     
    marginTop:'4%',
    paddingLeft:'5%',elevation:1,
    borderRadius:5, color:'#000000', height:200,backgroundColor:"#FFFFFF"
   },
   inputshipping:{
    backgroundColor:'#FFF7F7',
    borderWidth: 0,paddingLeft:'5%',
    borderRadius:5, color:'#000000', height:45
   },
   inputlink:{
      height: 53,
    marginHorizontal:'4%',marginTop:'4%',backgroundColor:'#FFF0F0',
    paddingLeft:'5%',
    borderRadius:5, color:'#999999'
   },

maincarbrand:{
  marginTop:'5%',marginHorizontal:'1%',
  backgroundColor:'#f9f9f9',padding:10,borderRadius:10
},
mainbrandsingl:{
  width:deviceWidth/1.1,backgroundColor:'#ffffff',
  padding:'4%',marginTop:'8%',borderRadius:15,alignSelf:'center'
},
maincartviewshop:{
  flexDirection:'row',justifyContent:'space-between',marginTop:'5%',marginHorizontal:'2%',
  backgroundColor:'#f9f9f9',borderRadius:10
},
maincartviewshop1812:{
  flexDirection:'row',justifyContent:'space-between',marginTop:'5%',marginHorizontal:'1%',
  backgroundColor:'#F2F2F2',padding:10,borderRadius:10,width:deviceWidth/2.2
},
maincartviewshopTODAYY:{
  flexDirection:'row',marginTop:'5%',marginHorizontal:'2%',
  borderRadius:10
},

maincartviewlist:{
  flexDirection:'row',justifyContent:'space-between',marginTop:'5%',marginHorizontal:'2%'
},
maincartview:{
  marginTop:'5%',marginHorizontal:'4%',flexDirection:'row',justifyContent:'space-between'
},
maincartviewproduct:{
  flexDirection:'row',justifyContent:'space-between',marginTop:'5%',marginHorizontal:'.5%', width:'49%'
},
maincartviewproductonce:{
  flexDirection:'row',justifyContent:'space-between',marginTop:'1%',marginHorizontal:'.5%', width:'49%',marginBottom:'3%'
},
maincartviewfooter:{
  flexDirection:'row',justifyContent:'space-between',marginTop:'1%',marginHorizontal:'4%'
},
maincartviewpayment:{
  flexDirection:'row',justifyContent:'center',marginTop:'1%',marginHorizontal:'1%'
},
maincartviewprofile:{
  flexDirection:'row',justifyContent:'space-between',marginTop:'1%',
  marginHorizontal:'4%',marginVertical:'2%'
},
buyertext:{
    color:'#9098B1',marginTop:'1%',fontSize:15,
    fontWeight:'normal',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular',
    letterSpacing:0.5,
},
pricebrandtext:{
   color:'#E33232',fontSize:13,lineHeight:16,
    fontWeight:'600',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',
},
suntotaltext:{
   color:'#F41616',fontSize:14,lineHeight:18,textAlign:'center',
    fontWeight:'600',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',
},
brandcolortext:{
   color:'#919191',fontSize:10,lineHeight:13,
    fontWeight:'normal',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular',marginRight:'13%'
},
crt1:
{
    flexDirection:'row',justifyContent:'space-between',margin:'4%',marginTop:'20%'
},
crt2:
{
    fontSize:20,marginLeft:'2%',fontWeight:'bold',fontFamily:'hinted-AvertaStd-Regular',fontStyle:'normal',
},
crt3:{
    color:"#E22020",marginTop:'2%',marginLeft:'2%',fontSize:15,fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',fontWeight:'600',
},
Viewcart:{
    flexDirection:'row' ,justifyContent:'space-between',marginTop:'3%',paddingHorizontal:'3%',
    backgroundColor:'#f9f9f9',marginHorizontal:'3%',alignItems:'center',borderRadius:5,
    borderColor:'#f9f9f9',
},
Viewcart2:{
    flexDirection:'row' ,marginVertical:'3%',
    marginHorizontal:'3%',alignItems:'center',borderRadius:5,
    
},
crt5:{ 
    width:68.85, height:72,borderRadius:5
},
newdirection:{
    flexDirection:'row',justifyContent:'space-between',marginHorizontal:'1%'
},
carttextView:{
    flexDirection:'row',justifyContent:'space-between',marginHorizontal:'2%'
},
profiltextView:{
    flexDirection:'row',justifyContent:'space-between',
    marginHorizontal:'3%',marginVertical:'2%'
},
proceedcartview:{
     backgroundColor:'#E33232',borderRadius:5,justifyContent:'center',
   textAlign:'center',marginHorizontal:'2%',
},
confirmView:{
   backgroundColor:'#F41616',borderRadius:25,
   justifyContent:'center',alignSelf:'center',marginVertical:'2%',
   textAlign:'center',marginHorizontal:'5%',padding:'2%',width:'50%',justifyContent:'center'
},
saveView:{
   backgroundColor:'#AFFFE2',borderRadius:25,
   justifyContent:'center',alignSelf:'center',marginVertical:'2%',
   textAlign:'center',marginHorizontal:'5%',padding:'2%',width:'30%',justifyContent:'center'
},
newcartttview:{
    backgroundColor:'#AFFFE2',borderRadius:25,justifyContent:'center',
   textAlign:'center',marginHorizontal:'2%',
},
checkmarkcls:{
    color: "#D41818",
    fontWeight: "bold",
    fontSize: 48,
    marginRight: 10,
    marginBottom:-30,
    marginTop:-15
  },
newcartttview2:{
    backgroundColor:'#AFFFE2',borderRadius:25,justifyContent:'center',
   textAlign:'center',marginHorizontal:'5%',padding:'1%',
},
srchistry:{
  fontSize:22,color:"#000000",fontFamily:'hinted-AvertaStd-Semibold',fontWeight:"400",marginTop:'4%'
},
greencartttview:{
    backgroundColor:'#ADFFCE',borderRadius:5,justifyContent:'center',
   textAlign:'center',marginHorizontal:'2%',
},
clothingtext:{
    fontSize:12,color:'#223263',fontWeight:'bold',letterSpacing:0.5,
    fontFamily:'hinted-AvertaStd-Bold',fontStyle:'normal',
},
confirmtexxt:{
    fontSize:12,color:'#FFFFFF',fontWeight:'normal',padding:'1%',textAlign:'center',
    fontFamily:'hinted-AvertaStd-Regular',fontStyle:'normal',lineHeight:15,
},
textshipcheck:{
    fontSize:11,color:'#000000',fontWeight:'normal',letterSpacing:0.5,
    marginVertical:'2%',paddingHorizontal:'2%',
    fontFamily:'hinted-AvertaStd-Regular',fontStyle:'normal',lineHeight:14,textAlign:'center'
},
greecolortext:{
    fontSize:13,color:'#000000',fontWeight:'600',padding:'1%',textAlign:'center',
    fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',lineHeight:15,paddingHorizontal:'2%'
},
adcartcolortext:{
    fontSize:12,color:'#FFFFFF',fontWeight:'normal',padding:'1%',textAlign:'center',
    fontFamily:'hinted-AvertaStd-Regular',fontStyle:'normal',lineHeight:15,paddingHorizontal:'2%'
},
proceedtext:{
    fontSize:13,color:'#FFFFFF',fontWeight:'600',padding:'2%',textAlign:'center',
    fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',lineHeight:15,paddingHorizontal:'2%'
},
cartrate:{
    color:"#E22020",fontSize:12,fontWeight:'bold',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Bold',
    letterSpacing:0.5,
},
heartratingView:{
    flexDirection:'row',
},
pdnme:{
  fontSize:16,fontFamily:'hinted-AvertaStd-Regular',color:'#1a1a1a'
},
pdclr:{
  fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a'
},
prctxt:{
  fontSize:20,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a'
},
likeimg:{
  width:25,height:21,marginHorizontal:'4%'
},
likeimgred:{
  width:25,height:21,marginHorizontal:'4%'
},
cartttview:{
   backgroundColor:'#E33232',borderRadius:25,justifyContent:'center',
   textAlign:'center',marginLeft:'15%'
},
crt10:{ width:12.95, height:14,marginHorizontal:'1%',alignSelf:'center',marginHorizontal:'4%'},
crt11:{
     flexDirection:'row' ,marginLeft:'6%',height:'14%',width:'88%',
    borderWidth:0.5,borderColor:"#EBF0FF",borderRadius:5,backgroundColor:'#ffffff',marginTop:'2%',
},

crt18:{
    flexDirection:'row' ,marginTop:'7%',backgroundColor:"#E22020",marginLeft:'5%',
height:'7%',width:'90%',borderWidth:0.5,borderColor:"#EBF0FF",borderRadius:5
},
crt19:{
    borderColor:"#EBF0FF",width:'70%',height:"101%",backgroundColor:'#ffffff' ,
borderBottomLeftRadius:5,borderTopLeftRadius:5
},

crt20:{paddingTop:"5%",paddingLeft:'10%',color:'#ffffff',fontSize:12,fontWeight:'bold',fontFamily:'hinted-AvertaStd-Regular'},

crt21:{textAlign:'center' ,color:"#FFFFFF",fontWeight:'bold',padding:'4%'},

crt22:{position:'absolute',alignSelf:'flex-end',right:15,bottom:10},

crt23:{ width:100, height:100,},
cartimg:{
  width:50, height:50,marginRight:'2%'
},

goback1:{
    fontSize:20,fontWeight:'600',textAlign:'center',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'
},
goback2:{
    height:deviceHeight/2.6,width:deviceWidth/1.26,borderRadius:5
},


inorder1:{
    flexDirection:'row',justifyContent:'space-between',margin:'4%',marginTop:'20%'
},
inorder2:
{fontSize:15,marginLeft:'2%',fontWeight:'600',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'
},
inorder3:{
    height:28,width:'28%',borderWidth:1,borderColor:"#B80000",borderRadius:25,
},
inorder4:{
    flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%'
},
inorder5:{
 width:20, height:20,marginLeft:'10%'
},
inorder6:{
    color:"#B80000",marginTop:'2%',marginRight:'8%',fontSize:12,fontWeight:'600',textAlign:'center',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'
},
inorder7:{
    flexDirection:'row',justifyContent:'space-between',marginHorizontal:'8%',marginTop:'8%',
},
inorder8:{
    fontSize:15,marginLeft:'10%',color:"#E22020",fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',fontWeight:'600',

},
inorder9:{
    fontSize:15,marginLeft:'10%',color:"#828282",fontFamily: "hinted-AvertaStd-Semibold",fontStyle: "normal",fontWeight:'600',

},
inorder10:{
    borderBottomWidth:3,width:140,borderColor:'#E22020',marginLeft:'10%',marginTop:'5%'
},
inorder11:{
    flexDirection:'row',marginLeft:8,marginTop:8
},
inorder113:{
    flexDirection:'row',marginTop:10
},

inorder12:{
    fontSize:13,marginLeft:'2%',fontFamily: "hinted-AvertaStd-Regular",fontStyle: "normal",fontWeight:'600',
},

inorder13:{
    fontSize:13,marginLeft:'2%',fontWeight:'bold',color:"#E22020",fontFamily: "hinted-AvertaStd-Semibold",fontStyle: "normal",fontWeight:'600',
},

livec1:{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'6%',marginTop:'15%'},

livec2:{fontSize:20,paddingLeft:'4%',fontWeight:'bold'},

livec3:{color:"#B80000",marginTop:'2%',marginLeft:'2%',fontFamily: "hinted-AvertaStd-Semibold",fontStyle: "normal",fontWeight:'600'},

livec4:{fontSize:12,paddingLeft:'6%',paddingTop:"2%",color:'#686868',fontFamily: "hinted-AvertaStd-Regular",fontStyle: "normal",fontWeight:'normal'},

livec5:{textAlign:'center' ,color:"#FFFFFF",fontSize:10,fontFamily: "hinted-AvertaStd-Semibold",fontStyle: "normal",fontWeight:'600'},

livec6:{textAlign:'center' ,fontSize:8,paddingTop:'3%',color:"#FFFFFF",fontFamily: "hinted-AvertaStd-Regular",fontStyle: "normal",fontWeight:'normal'},

livec7:{textAlign:'center' , color:"#000000",fontSize:10,fontFamily: "hinted-AvertaStd-Semibold",fontStyle: "normal",fontWeight:'600'},
livec27:{textAlign:'center' , color:"#ffffff",fontSize:10,fontFamily: "hinted-AvertaStd-Semibold",fontStyle: "normal",fontWeight:'600'},

livec8:{textAlign:'center' ,fontSize:8,paddingTop:'3%',color:"#4A4B57",fontFamily: "hinted-AvertaStd-Regular",fontStyle: "normal",fontWeight:'normal'},

livec28:{textAlign:'center' ,fontSize:8,paddingTop:'3%',color:"#ffffff",fontFamily: "hinted-AvertaStd-Regular",fontStyle: "normal",fontWeight:'normal'},


livec12:{textAlign:'center',fontSize:12 ,color:"#0B0022",fontWeight:'normal',fontFamily: "hinted-AvertaStd-Regular",fontStyle: "normal"},

livec13:{textAlign:'center' ,padding:5,color:"#ffffff",fontSize:12 ,fontWeight:'normal',fontFamily: "hinted-AvertaStd-Regular",fontStyle: "normal"},



livec15:{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'6%',marginTop:'3%'},

livec16:{height:deviceHeight/5.4,width:deviceWidth/2.3,borderRadius:5},

livec17:{height:deviceHeight/5.4,width:deviceWidth/2.3,borderRadius:5,},

livec18:{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'6%',marginTop:'3%'},



livec22:{height:180,width:180,borderRadius:10},

livec23:{height:180,width:180,borderRadius:10,marginLeft:'5%',},
livec24one:{
 width:deviceWidth/4,
 height:25,
 borderRadius:10, 
 backgroundColor:"#E6E6E6",marginHorizontal:8,height:40,padding:6
},

livec24:{
 
 padding:10,
 borderRadius:10, 
 backgroundColor:"#E6E6E6",marginHorizontal:8
},
newlivec24:{
    width:deviceWidth/4,
    borderRadius:30, 
    backgroundColor:"#00B84A66",marginHorizontal:8
},
newlivec25:{
    width:deviceWidth/5,
    borderRadius:30,marginVertical:4,
    backgroundColor:"#DCDCDC",marginHorizontal:3 
}, 
livec25789:{ 
    width:deviceWidth/4,
    height:25,
    borderRadius:10,
    backgroundColor:"#B80000",marginHorizontal:8,height:40,padding:6  
},    

livec25:{ 
    width:deviceWidth/4,
    height:25,
    borderRadius:10,
    backgroundColor:"#B80000",marginHorizontal:8  
},

livec26:{
                         width:deviceWidth/4,
                         
                           borderRadius:30,
                          
                           backgroundColor:"#EDEDF0",
                          
                          },




more1:{flexDirection:'row',marginTop:'18%'},

more2:{fontSize:16,paddingLeft:'8%',fontWeight:'bold'},

more3:{flexDirection:'row',justifyContent:'space-between',marginTop:'6%',marginHorizontal:'8%'},

more4:{fontSize:16,paddingTop:"2%",color:'#223263',fontWeight:'bold'},

more5:{height:30,width:30,borderRadius:70},

more6:{flexDirection:'row',justifyContent:'space-between',marginTop:'5%',marginHorizontal:'8%'},

more7:{fontSize:16,paddingTop:"2%",color:'#223263',fontWeight:'bold'},

more8:{height:30,width:30,borderRadius:70},

more9:{flexDirection:'row',justifyContent:'space-between',marginTop:'5%',marginHorizontal:'8%'},

more10:{fontSize:16,paddingTop:"2%",color:'#223263',fontWeight:'bold'},

more11:{height:30,width:30,borderRadius:70},

more12:{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'8%',marginTop:'8%'},

more13:{height:deviceWidth/2.5+80,width:deviceWidth/2.5,borderRadius:5},

more14:{height:180,width:180,borderRadius:10,marginLeft:'5%',},





newor1:{flexDirection:'row', marginLeft:'6%',marginTop:'15%'},

newor2:{fontSize:16,marginLeft:'30%',fontWeight:'600',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'},




over1:{flexDirection:'row',justifyContent:'space-between',margin:'4%',marginTop:'20%'},

over2:{
    fontSize:15,marginLeft:'2%',fontWeight:'600',lineHeight:19,
    fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',color:'#000000'
},

over3:{height:28,width:'28%',borderWidth:1,borderColor:"#E22020",borderRadius:25,},

over4:{
  width:15,height:15
},


carttextshop:{
    color:"#E22020",lineHeight:15,
    fontSize:12,fontWeight:'600',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'
},

over5:{color:"#E22020",marginTop:'2%',marginRight:'8%',fontSize:12,fontWeight:'600',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'},

over6:{fontSize:12,paddingTop:8,textAlign:'center',fontWeight:'normal',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular'},

over7:{fontSize:18,paddingTop:20, textAlign:'center',fontWeight:'600',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold'},

over8:{fontSize:12,color:"#E22020",paddingTop:10,paddingLeft:10,fontWeight:'600',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'},

over9:{ width:16, height:16,borderRadius:15,marginLeft:10,marginTop:10,marginRight:5},

over10:{flexDirection:'row',justifyContent:'space-between',margin:'4%',marginTop:'8%'},

over11:{fontSize:15,marginLeft:'2%',fontWeight:'600',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold'},

over12:{fontSize:15,marginLeft:'3%',fontWeight:'bold',color:"#E22020",fontWeight:'600',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'},

over13:{fontSize:12,color:"#4F4F4F",fontWeight:'normal',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular'},

norecord:{fontSize:12,paddingHorizontal:100,color:"#4F4F4F",fontWeight:'normal',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular'},


over14:{fontSize:12,marginHorizontal:'36%',color:"#4F4F4F",fontWeight:'400',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular'},

over15:{flexDirection:'row',marginLeft:'2%',marginTop:"4%"},

over16:{ width:30, height:30,marginLeft:'4%'},

over17:{fontSize:12,color:"#4F4F4F",fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',fontWeight:'600',},


over19:{fontSize:12,marginLeft:'18%',color:"#4F4F4F",fontFamily:'hinted-AvertaStd-Semibold',fontStyle: "normal",fontWeight:'600',},

over20:{ width:20, height:20,marginLeft:'22%',borderRadius:20},

over21:{borderBottomWidth:1,marginTop:"2%",height:0.5,borderColor:'#BDBDBD',marginLeft:'6%',marginRight:'6%'},

over22:{flexDirection:'row',justifyContent:'space-between',margin:'4%',marginTop:'8%'},

over23:{fontSize:15,marginLeft:'2%',fontFamily: "hinted-AvertaStd-Semibold",fontStyle: "normal",fontWeight:'600'},

over24:{fontSize:15,marginRight:'3%',color:"#E22020",fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',fontWeight:'600'},



over26:{fontSize:12,color:"#4F4F4F",fontWeight:'normal',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular'},

over27:{flexDirection:'row',marginLeft:'2%',marginTop:"4%"},



over29:{fontSize:12,marginLeft:'0%',color:"#4F4F4F",fontWeight:'600',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'},

over30:{fontSize:12,color:"#4F4F4F",width:'36%',fontWeight:'600',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'},

 over31:{ width:20, height:20,marginLeft:'20%', borderRadius:20},






process1:{flexDirection:'row',justifyContent:'space-between',margin:'4%',marginTop:'20%'},

process2:{fontSize:15,marginLeft:'2%',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',fontWeight:'600',},

process3:{height:28,width:'23%',borderWidth:1,borderColor:"#E22020",borderRadius:25,},

process4:{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'3%'},

process5:{ width:20, height:20,marginLeft:'10%'},

process6:{color:"#E22020",marginTop:'2%',marginRight:'8%',fontSize:12,fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',fontWeight:'600'},

process7:{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'8%',marginTop:'8%'},

process8:{fontSize:15,marginLeft:'15%',color:"#828282",fontFamily: "hinted-AvertaStd-Semibold",fontStyle: "normal",fontWeight:'600',},

process9:{fontSize:15,fontWeight:'bold',color:"#E22020",fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',fontWeight:'600',marginLeft:'2%'},

process10:{borderBottomWidth:3,width:'110%' ,borderColor:'#E22020',marginTop:'15%'},

process11:{fontSize:13,marginLeft:'2%',color:"#E22020",fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',fontWeight:'600',},

process12:{fontSize:13,marginLeft:'2%',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',fontWeight:'600',},

process13:{flexDirection:'row',marginLeft:'2%',marginTop:"6%"},



process15:{fontSize:10,marginLeft:'6%',color:"#27AE60",fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',fontWeight:'600'},

process16:{fontSize:14,marginLeft:'5%',color:"#828282"},

process17:{fontSize:10,marginLeft:'8%',color:"#4F4F4F",fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',fontWeight:'600',},

process18:{fontSize:10,marginLeft:'8%',color:"#2F80ED",fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',fontWeight:'600',},

process19:{ width:20, height:20,marginLeft:'9%',borderRadius:20},

process24:{ width:20, height:20,marginLeft:'6%',borderRadius:20},

process25:{ width:20, height:20,marginLeft:'8%',borderRadius:20},

process26:{ width:20, height:20,marginLeft:'7%',borderRadius:20},



process21:{fontSize:10,marginLeft:'8%',color:"#A78C01",fontFamily: "hinted-AvertaStd-Semibold",fontStyle: "normal",fontWeight:'600',},

process22:{fontSize:14,marginLeft:'6%',color:"#179935"},

process23:{fontSize:10,marginLeft:'10%',color:"#E22020",fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',fontWeight:'600',},



stor1:{flexDirection:'row',justifyContent:'space-between',margin:'4%'},

stor2:{
    fontSize:20,fontWeight:'bold',fontStyle:'normal',marginHorizontal:'2%',
    color:'#000000',lineHeight:25,fontFamily:'hinted-AvertaStd-Semibold',textAlign:'center'
},
comingtext:{
    fontSize:20,fontWeight:'600',fontStyle:'normal',marginHorizontal:'3%',
    color:'#000000',lineHeight:25,fontFamily:'hinted-AvertaStd-Semibold',
},
exclusivetext:{
  fontSize:14,fontWeight:'bold',fontStyle:'normal',marginHorizontal:'3%',lineHeight:168,
    color:'#000000',lineHeight:25,fontFamily:'hinted-AvertaStd-Semibold',
    textAlign:'center',marginVertical:'3%'
},

goliveView:{
    borderWidth:1,borderColor:"#E22020",justifyContent:'center',
    borderRadius:25,height:25,width:100,alignItems:'center'
},
aligncenterView:{
  flexDirection:'row',justifyContent:'center',alignItems:'center'
},
dirspcView:{
   flexDirection:'row',justifyContent:'space-between',
},
mybrdtxt:{
  fontSize:20,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a'
},
allsebtn:{
  backgroundColor:'#B80000',width:80,borderRadius:20,padding:8,
},
stor3:{height:28,width:'25%',borderWidth:1,borderColor:"#B80000",borderRadius:25,marginTop:'20%'},

stor4:{color:"#B80000",marginTop:'2%'},

storetext:{
    textAlign:'center',fontSize:20,fontWeight:'600',fontStyle:'normal',marginVertical:'8%',
    color:'#000000',lineHeight:20,alignItems:'center',fontFamily:'hinted-AvertaStd-Semibold',
},
storetextname:{
    textAlign:'center',fontSize:20,fontWeight:'600',fontStyle:'normal',marginVertical:'3%',
    color:'#000000',lineHeight:20,alignItems:'center',fontFamily:'hinted-AvertaStd-Semibold',marginLeft:'10%'
},


storetext5:{
    textAlign:'center',fontSize:20,fontWeight:'600',fontStyle:'normal',marginTop:'8%',
    color:'#000000',lineHeight:20,alignItems:'center',fontFamily:'hinted-AvertaStd-Semibold',
},
recodingproduct:{
  fontSize:20,fontWeight:'600',fontStyle:'normal',marginVertical:'3%',marginHorizontal:'5%',
    color:'#000000',lineHeight:20,fontFamily:'hinted-AvertaStd-Semibold',marginTop:'7%'
},

StoreTouchability:{
      height:57, width:'60%',
      borderRadius:50, 
      backgroundColor:"#E22020",alignSelf:'center',
      marginTop:'2%',justifyContent:'center'
   },

storeboldtext:{
    textAlign:'center' ,color:"#FFFFFF",fontWeight:'bold',
    fontSize:14,letterSpacing:0.5,color:'#FFFFFF',fontStyle:'normal',
    fontFamily:'hinted-AvertaStd-Semibold',
},
JANUARYtext:{
  fontSize:15,fontWeight:'600',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',
  color:'#223263',letterSpacing:0.5,textAlign:'right'
},
rettext:{
  fontSize:15,fontWeight:'600',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',
  color:'#40BFFF',letterSpacing:0.5,textAlign:'right'
},


tops1:{flexDirection:'row', marginLeft:'6%',marginTop:'15%'}, 

tops2:{fontSize:16,marginLeft:'20%',fontWeight:'600',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'},


  searchmainView:{
     borderColor:'#686868',height:48,width:240,
     borderRadius:10,paddingLeft:30,color:'#000000',backgroundColor:"#E6E6E6"
  },
   searchmainViewour:{
     borderColor:'#686868',height:48,width:deviceWidth/1.1,
     borderRadius:10,paddingLeft:20,color:'#000000',backgroundColor:"#E6E6E6"
  },
  seView:{
       borderWidth: 1.5,borderColor:'#FFFFFF',
     borderRadius:40,paddingLeft:'5%',color:'#ffffff'
  },
  Touchablestarttext:{
     marginLeft:'1%',width:'70%',height:48,
        backgroundColor:'#00B84A',justifyContent:'center',
        borderRadius:50,
    },
    Touchablereview:{
     marginLeft:'1%',width:'90%',
        backgroundColor:'#ffffff',justifyContent:'center', textAlign:'center',
        borderRadius:20,elevation:4
    },
    Touchablestarttextnew:{
     marginLeft:'1%',width:'90%',height:48,
        backgroundColor:'#ffffff',justifyContent:'center', textAlign:'center',
        borderRadius:50,elevation:4
    },
     startbutton1:{
        fontSize:14,fontWeight:'bold',fontStyle:'normal',
        fontFamily:'hinted-AvertaStd-Semibold',color:'#FFFFFF',textAlign:'center',
    },
    addstoreView:{
       flexDirection:'row',justifyContent:'space-between',marginTop:'10%',marginHorizontal:'4%',
    },
    skipview:{
       height:47,width:139,backgroundColor:'#B80000',borderRadius:50,marginTop:'7%',
       justifyContent:'center',alignSelf:'center'
    },
     skipviewtoday:{
       height:63,width:139,backgroundColor:'#B80000',borderRadius:50,marginTop:'7%',
       justifyContent:'center',alignSelf:'center'
    },
     skipviewtodayfree:{
       height:63,width:139,backgroundColor:'#B80000',borderRadius:50,marginTop:'25%',
       justifyContent:'center',alignSelf:'center'
    },
    skiptext:{
       fontSize:18,fontWeight:'bold',fontStyle:'normal',lineHeight:23,
        fontFamily:'hinted-AvertaStd-Bold',color:'#FFFFFF',textAlign:'center',
    },
    grouptext:{
       fontSize:22,fontWeight:'600',fontStyle:'normal',lineHeight:25.6,
        fontFamily:'hinted-AvertaStd-Semibold',color:'#1A1A1A',textAlign:'center',
    },
    numtext:{
         fontSize:20,fontWeight:'bold',fontStyle:'normal',lineHeight:25,marginLeft:5,
        fontFamily:'hinted-AvertaStd-Bold',color:'#FFFFFF',textAlign:'center',
    },
    goodtext:{
        fontSize:40,fontWeight:'900',fontStyle:'normal',lineHeight:45.6,
        fontFamily:'hinted-AvertaStd-Semibold',color:'#FFFFFF',textAlign:'center',
    },
    groupView:{
        marginTop:'10%',marginHorizontal:'4%',alignItems:'center'
    },
    LIVESTREAM:{
       fontSize:34,fontFamily:'hinted-AvertaStd-Semibold',
       color:'#FFFFFF',marginHorizontal:'3%',
       fontWeight:'600',fontStyle:'normal',lineHeight:43
    },
    LIVESTREAMshop:{
        fontSize:28,fontFamily:'hinted-AvertaStd-Semibold',
       color:'#FFFFFF',marginHorizontal:'3%',
       fontWeight:'600',fontStyle:'normal',lineHeight:35,textAlign:'center'
    },
    LIVEpeopleshop:{
        fontSize:24,fontFamily:'hinted-AvertaStd-Semibold',
       color:'#000000',marginHorizontal:'3%',
       fontWeight:'600',fontStyle:'normal',lineHeight:29,textAlign:'center'
    },

    textbrand:{
        fontSize:19,alignItems:'center',marginTop:'4%',textAlign:'center',lineHeight:24,
       fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular',fontWeight:'normal',color:'#FFFFFF'
    },
    textexp:{
       fontSize:15,marginTop:'4%',textAlign:'center',lineHeight:19,marginHorizontal:'19%',
       fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular',fontWeight:'normal',color:'#000000'
    },
    textexpext:{
       fontSize:18,marginTop:'4%',textAlign:'center',lineHeight:19,marginHorizontal:'19%',
       fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular',fontWeight:'normal',color:'#666666'
    },
    logintxet:{
        fontSize:13,alignItems:'center',marginTop:'6%',textAlign:'center',lineHeight:16,
       fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular',fontWeight:'normal',color:'#FFFFFF'
    },
    newstext:{
       fontSize:16,alignItems:'center',marginTop:'4%',textAlign:'center',
       fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular',fontWeight:'300',
    },
    ortext:{
       fontSize:10,alignItems:'center',marginTop:'4%',textAlign:'center',lineHeight:13,
       fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular',fontWeight:'normal',color:'#FFFFFF'
    },
    ortextnew:{
       fontSize:10,alignItems:'center',marginTop:'4%',textAlign:'center',lineHeight:13,
       fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular',fontWeight:'normal',color:'rgba(255,255,255,0.4)'
    },
    Benrosetext:{
        fontSize:20,fontWeight:'600',color:'#282828', paddingLeft:'5%',
        lineHeight:25,fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'
    },
    baskettext:{
        fontSize:20,fontWeight:'600',marginLeft:'5%',color:'#FFFFFF',bottom:'9%',
        lineHeight:25,fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',position:'absolute'
    },
    baskettext5:{
        fontSize:20,fontWeight:'600',marginLeft:'4%',color:'#FFFFFF',bottom:'10%',
        lineHeight:25,fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',position:'absolute'
    },
    blurrtext:{
        fontSize:20,fontWeight:'600',color:'#FFFFFF',
        lineHeight:25,fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',
    },
    imgtimer:{
        width:16,height:16,marginHorizontal:'3%'
    },
    audioimg:{
        width:24,height:24,marginHorizontal:'2%'
    },
    audioimg1:{
        width:40,height:40,marginHorizontal:'2%'
    },
    imgclose:{
       alignSelf:'center',width:30,height:30,marginVertical:'3%'
    },
    imgvector:{
       alignSelf:'center',width:24,height:22,
    },
    imgaudivector:{
        alignSelf:'center',width:24,height:22,
    },
    imgvector2:{
       alignSelf:'center',width:28,height:22,
    },
    imgcart3:{
       alignSelf:'center',width:20,height:25, 
    },
    imgvector3:{
       alignSelf:'center',width:24,height:22, 
    },
    imgvectorproduct:{
       width:12.5,height:12.5,position:'absolute',top:'13%',right:20
    },
     imgvectorproduct2:{
       right:23,marginVertical:'1%',position:'absolute',top:'17%',width:6.55,height:6
    },
     imgvectorproduct3:{
       right:22,marginVertical:'1%',position:'absolute',top:'23%',height:5
    },
    liveicon3:{
      width:25,height:13,left:'5%',marginTop:'8%'
    },
    imageposition:{
         width:15,height:15,position:'absolute',top:'15%',alignSelf:'flex-end',right:10
    },
    imageposition1:{
         width:8,height:13,position:'absolute',top:'25%',alignSelf:'flex-end',right:12
    },
    imageposition2:{
        position:'absolute',top:'30%',alignSelf:'flex-end',right:10
    },
    livetextred:{
  fontSize:12,fontWeight:'600',fontStyle:'normal',marginHorizontal:'6%',
  color:'#E22020',fontFamily:'hinted-AvertaStd-Semibold',lineHeight:15,
  
},

    seriestext:{
       fontSize:15,fontWeight:'600',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',
       lineHeight:16,color:'#282828'
    },
     seriestexttoday:{
       fontSize:14,fontWeight:'600',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',
       lineHeight:16,color:'#282828'
    },
    
    moretbutton:{
        textAlign:'center',fontSize:14,fontFamily:'hinted-AvertaStd-Regular',fontStyle:'normal',
        color:'#FFFFFF',fontWeight:'bold',letterSpacing:0.5
    },
    inputabotbrand:{
         height: 106,
    marginHorizontal:'4%',marginTop:'4%',
    borderWidth: 1,borderColor:'#ABABAB',paddingLeft:'5%',
    textAlignVertical: 'top',paddingTop:'3%',
    borderRadius:5,color:'#000000'
    },
    pickerViewshort: {
        borderWidth: 1,marginTop:'4%',marginHorizontal:'3%',
        borderColor:'#ABABAB', borderRadius:5,width:50,backgroundColor:'#E6E6E6',height:30
        
    },
    totalincometodaylive:{
    fontFamily: 'hinted-AvertaStd-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    textAlign:'center',
    //line-height: 23,
    color: '#1a1a1a',
    marginVertical:'3%'
    },
    totalincometodaysale:{
    fontFamily: 'hinted-AvertaStd-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    //line-height: 23,
    color: '#1a1a1a',
    //marginVertical:'3%'
    },
    totalincometodayWIDRO:{
    fontFamily:'hinted-AvertaStd-Bold',
    fontStyle:'normal',
    fontWeight:'600',
    fontSize: 12,
    textAlign:'center',
    //line-height: 23,
    color: '#FFFFFF',
    //alignSelf:'center',
   // marginRight:8
    },
     totalincometodayWIDROprocess:{
    fontFamily:'hinted-AvertaStd-Bold',
    fontStyle:'normal',
    fontWeight:'600',
    fontSize: 12,
    textAlign:'center',
    //line-height: 23,
    color: '#2F80ED',
    //alignSelf:'center',
   // marginRight:8
    },
     totalincometodayWIDRO16:{
    fontFamily:'hinted-AvertaStd-Semibold',
    fontStyle:'normal',
    fontWeight:'500',
    fontSize: 16,
    textAlign:'center',
    //line-height: 23,
    color: '#FFFFFF',
    //alignSelf:'center',
   // marginRight:8
    },
     totalincometodayWIDRO17:{
    fontFamily:'hinted-AvertaStd-Semibold',
    fontStyle:'normal',
    fontWeight:'500',
    fontSize: 16,
    textAlign:'center',
    //line-height: 23,
    color: '#000000',
    //alignSelf:'center',
   // marginRight:8
    },
     totalincometodayWIDRO1:{
    fontFamily:'hinted-AvertaStd-Semibold',
    fontStyle:'normal',
    fontWeight:'500',
    fontSize: 12,
    textAlign:'center',
    //line-height: 23,
    color: '#2f80ed',
    //alignSelf:'center',
   // marginRight:8
    },
     totalincometodayPLAN:{
    fontFamily:'hinted-AvertaStd-Bold',
    fontStyle:'normal',
    fontWeight:'600',
    fontSize: 14,
    textAlign:'center',
    //line-height: 23,
    color: '#FFFFFF',
    //alignSelf:'center',
   // marginRight:8
    },
  opendashtxt:{
    fontFamily:'hinted-AvertaStd-Bold',
    fontStyle:'normal',
    fontWeight:'600',
    fontSize: 14,
    textAlign:'center',
    color: '#1a1a1a',
  },
     totalincometodaycompaign:{
    fontFamily:'hinted-AvertaStd-Semibold',
    fontStyle:'normal',
    fontWeight:'600',
    fontSize: 18,
    textAlign:'center',
    //line-height: 23,
    color: '#FFFFFF',
    //alignSelf:'center',
   // marginRight:8
    },
     totalincometodaycompaign123:{
    fontFamily:'hinted-AvertaStd-Semibold',
    fontStyle:'normal',
    fontWeight:'600',
    fontSize: 18,
    textAlign:'center',
    //line-height: 23,
    color: '#000000',
    //alignSelf:'center',
   // marginRight:8
    },
     totalincometodaySAVECHANGE:{
    fontFamily:'hinted-AvertaStd-Bold',
    fontStyle:'normal',
    fontWeight:'600',
    fontSize: 14,
    textAlign:'center',
    //line-height: 23,
    color: '#FFFFFF',
    //alignSelf:'center',
   // marginRight:8
    },
    totalincometodaypercent:{
    fontFamily:'hinted-AvertaStd-Bold',
    fontStyle:'normal',
    fontWeight:'600',
    fontSize: 20,
    //line-height: 23,
    color: '#27AE60',
    alignSelf:'center',
    marginRight:8
    },
    totalincometodaydollar:{
    fontFamily: 'hinted-AvertaStd-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 26,
    //line-height: 23,
    color: '#1a1a1a',
    marginVertical:'7%'
    },
    totalincometoday:{
    fontFamily: 'hinted-AvertaStd-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    //line-height: 23,
    color: '#666666',
    marginTop:6
    },
     pickerViewshorttoday: {
        marginTop:'5%',
        borderColor:'#e6e6e6', borderRadius:5,width:115,backgroundColor:'#e6e6e6',height:30
        
    },
     pickerViewshorttodaysaleing: {
        //marginTop:'4%',
        borderColor:'#e6e6e6', borderRadius:5,width:115,backgroundColor:'#e6e6e6',height:30
        
    },
    modalreasontoday: {
    height:42,
    marginHorizontal:'3%',
    //marginVertical:'1%',
    borderWidth: 1,borderColor:'#000000',
    borderRadius:5, 
    color:'#000000'
  },
   inputedittoday: {
    //textAlignVertical: "top",
    height: 55,
    fontSize: 18,
     fontFamily: 'hinted-AvertaStd-Regular',
    borderRadius: 15,
    backgroundColor:'#e6e6e6',
    //borderColor: "#e3e2e8",
    //marginVertical:'10%',
  },
   inputedittoday1234: {
    //textAlignVertical: "top",
    height: 55,
    fontSize: 18,
     fontFamily: 'hinted-AvertaStd-Regular',
    borderRadius: 10,
    backgroundColor:'#e6e6e6',
    //borderColor: "#e3e2e8",
    marginVertical:'2%',
  },
   inputedittodaywithdraw: {
    textAlignVertical: "top",
    height: 130,
    fontSize: 18,
     fontFamily: 'hinted-AvertaStd-Regular',
    borderRadius: 15,
    backgroundColor:'#e6e6e6',
    //borderColor: "#e3e2e8",
    //marginVertical:'10%',
  },
    inputedittodaywithdrawbrand: {
    textAlignVertical: "top",
    height: 130,
    fontSize: 12,
     fontFamily: 'hinted-AvertaStd-Regular',
    borderRadius: 15,
    backgroundColor:'#e6e6e6',
    //borderColor: "#e3e2e8",
    //marginVertical:'10%',
  },
     pickerViewshorttodayagain: {
        //marginHorizontal:'4%',
        borderColor:'#e6e6e6', borderRadius:5,width:115,backgroundColor:'#e6e6e6',height:30
        
    },
     pickerViewshorttodayagainpending: {
        //marginHorizontal:'4%',
        borderColor:'#e6e6e6', borderRadius:5,width:130,backgroundColor:'#ffe6ff',height:35
        
    },
    dashorderpicker:{
      borderColor:'#e6e6e6', borderRadius:5,width:100,backgroundColor:'#e6e6e6',height:40
    },
     pickerViewshorttodayagainsmall: {
        //marginHorizontal:'4%',
        borderColor:'#e6e6e6', borderRadius:5,width:85,backgroundColor:'#ffccff',height:24
        
    },
     pickerViewshorttodayagainsale: {
        //marginHorizontal:'4%',
        borderColor:'#e6e6e6', borderRadius:5,width:140,backgroundColor:'#e6e6e6',height:30
        
    },
      pickerViewshorttodayagainlive2: {
        //marginHorizontal:'4%',
        borderColor:'#e6e6e6', borderRadius:10,width:200,backgroundColor:'#e6e6e6',height:45,
        marginHorizontal:'4%',marginTop:'4%',
        
    },
     pickerViewshorttodayAdvertise: {
        //marginHorizontal:'4%',
        borderColor:'#e6e6e6', borderRadius:10,width:deviceWidth/1.1,backgroundColor:'#e6e6e6',height:55,
        alignSelf:'center',marginTop:'7%'
        
    },
     pickerViewshorttodaybrand: {
        //marginHorizontal:'4%',
        borderColor:'#e6e6e6', borderRadius:10,width:deviceWidth/1.1,backgroundColor:'#e6e6e6',height:55,
        alignSelf:'center',
        
    },
     pickerViewshorttodaybranded1234: {
        //marginHorizontal:'4%',
        borderColor:'#e6e6e6', borderRadius:10,width:deviceWidth/1.1,backgroundColor:'#e6e6e6',height:55,
        
        
    },
     pickerViewshorttodaybrandaccount: {
        //marginHorizontal:'4%',
        borderColor:'#e6e6e6', borderRadius:10,width:deviceWidth/2.5,backgroundColor:'#e6e6e6',height:50,
        fontSize:16, color:'#000000'
        
    },
     pickerViewshorttodaybrandaccount123: {
        //marginHorizontal:'4%',
        borderColor:'#e6e6e6', borderRadius:10,width:deviceWidth/3,backgroundColor:'#e6e6e6',height:50,
        marginLeft:-4,color:'#000000'
        
    },
     pickerViewshorttodaybrandtodayy: {
        //marginHorizontal:'4%',
        borderColor:'#e6e6e6', borderRadius:5,width:deviceWidth/1.17,backgroundColor:'#e6e6e6',height:50,
        alignSelf:'center',marginTop:'3%'
        
    },
     pickerViewshorttodaybrandtodayy1: {
        //marginHorizontal:'4%',
        borderColor:'#e6e6e6', borderRadius:5,width:deviceWidth/1.17,backgroundColor:'#e6e6e6',height:50,
        alignSelf:'center',marginTop:'7%'
        
    },
     pickerViewshorttodayAdvertise123: {
        //marginHorizontal:'4%',
        borderColor:'#e6e6e6', borderRadius:20,width:deviceWidth/1.1,backgroundColor:'#e6e6e6',height:50,
        alignSelf:'center',marginTop:'1%'
        
    },
     pickerViewshorttodayagainprodtal: {
        //marginHorizontal:'4%',
        borderColor:'#e6e6e6', borderRadius:5,width:12,backgroundColor:'#f2f2f2',height:30
        
    },
     pickerViewshorttodayagainorder: {
        //marginHorizontal:'4%',
        borderColor:'#e6e6e6', borderRadius:5,width:'30%',backgroundColor:'#999999',height:30
        
    },
      pickerViewshorttodayagainorderstore: {
        //marginHorizontal:'4%',
        borderColor:'#e6e6e6', borderRadius:5,width:'30%',backgroundColor:'#d9d9d9',height:30
        
    },
    pickerViewshorttodaymodal: {
        //marginHorizontal:'4%',
        borderColor:'#e6e6e6', borderRadius:5,width:200,backgroundColor:'#e6e6e6',height:60,alignSelf:'center'
        
    },
     pickerViewshorttodaymodallist: {
        //marginHorizontal:'4%',
        borderColor:'#e6e6e6', borderRadius:10,width:130,backgroundColor:'#e6e6e6',height:40,marginHorizontal:'10%'
        
    },
    pickerView: {
        borderWidth: 1,marginTop:'4%',marginHorizontal:'4%',
        borderColor:'#ABABAB', borderRadius:5,
        alignItems: "center"
    },
  orderpickerView:{
    width:'92%',marginTop:'4%',marginHorizontal:'4%',
     borderRadius:4,backgroundColor:'#FFF0F0',
    alignItems: "center"
  },
  camimage:{
    height:100,width:100,borderRadius:70,marginTop:'7%'
},
girlimg:{
    height:40,width:40,borderRadius:30
},
brandlogotext:{
    color:'#000000',fontWeight:'500',fontSize:15,
    fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular',lineHeight:18
},
orderproducttext:{
   fontSize:14,fontWeight:'600',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',
   lineHeight:18,letterSpacing:0.5,color:'#223263',marginHorizontal:'3%'
},
brandimagetextview:{
    alignItems:'center',marginTop:'10%'
},
brandimagetextviewMY:{
    alignItems:'center',marginTop:'5%'
},
dtlvw:{
  width:deviceWidth/1.1,backgroundColor:'#ffffff',padding:'5%',
alignSelf:'center',marginTop:'7%',borderRadius:15,
},
grndline:{
  borderBottomWidth:2,borderColor:'#e6e6e6',alignSelf:'center',width:'100%',marginVertical:'4%'
},
botmdtlvw:{
  width:deviceWidth/1.1,backgroundColor:'#ffffff',padding:'5%',
  alignSelf:'center',marginTop:'7%',borderRadius:15,marginBottom:'25%'
},
odrstxt:{
  fontSize:14,color:'#1a1a1a',fontFamily:'hinted-AvertaStd-Semibold',
},
proregultxt:{
  fontSize:16,fontFamily:'hinted-AvertaStd-Regular',color:'#666666'
},
shptxt:{
  fontSize:16,fontFamily:'hinted-AvertaStd-Regular',color:'#1a1a1a'
},
mtdtxt:{
  fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#666666'
},
ustxt:{
  fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a'
},
ustxtwdth:{
  fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a',width:120
},
inputproduct:{
     height:100,
    marginHorizontal:'4%',marginTop:'4%',
    borderWidth: 1,borderColor:'#ABABAB',paddingLeft:'5%',
    textAlignVertical: 'top',paddingTop:'3%',
    borderRadius:5, color:'#000000'
},
inputdescript:{
    height: 100,
    marginHorizontal:'4%',marginTop:'4%',
    paddingLeft:'5%',backgroundColor:'#FFF0F0',
    textAlignVertical: 'top',paddingTop:'3%',
    borderRadius:5, color:'#000000'
},
inputproduct1:{
    
    marginHorizontal:'3%',marginTop:'4%',
    borderWidth: 1,borderColor:'#BDBDBD',paddingLeft:'10%',
    borderRadius:6
},
inputSHORT:{
    
    marginHorizontal:'3%',marginTop:'4%',
    borderWidth: 1,borderColor:'#ABABAB',paddingLeft:'10%',
    borderRadius:5, color:'#000000', height:40
},
inputstore:{
    
    marginHorizontal:'3%',marginTop:'4%',
    paddingLeft:'10%',backgroundColor:'#FFF0F0',
    borderRadius:5, color:'#000000'
},
uploadimage:{
    height:30,width:37.5,marginTop:'15%'
},
 loadimage:{
    width:100,height:100,marginTop:'15%'
  },

loadimage1:{
    width:'18%',height:60,marginTop:'5%',marginRight:'2%', borderRadius:5
  },
whitebox:{
    height:58,marginHorizontal:'1%',
    backgroundColor:'#FFF0F0',
    borderRadius:5,width:'22%'
},
whiteboxView:{
   flexDirection:'row',width:'100%',marginTop:'5%',marginLeft:'2%'
},
 checkboxView:{
     width:'46%',flexDirection:'row',justifyContent:'space-between',
    marginHorizontal:'1%',
    borderWidth: 1,borderColor:'#BDBDBD',padding:'1%',
    borderRadius:6
 },

sucessimage:{
    marginVertical:'4%', width:100, height:100
},
modalbutton:{
    height:64,width:'80%',justifyContent:'center',textAlign:'center',alignItems:'center',
    borderRadius:50,backgroundColor:'#00B84A',color:'#FFFFFF',marginTop:'10%'
},

GOLIVETEXT:{
   fontSize:15,fontWeight:'600',fontStyle:'normal',lineHeight:19,
   color:'#E22020',textAlign:'right',fontFamily:'hinted-AvertaStd-Semibold'
},

shoptextred:{
   fontSize:15,fontWeight:'normal',fontStyle:'normal',lineHeight:19,
   color:'#E22020',textAlign:'right',fontFamily:'hinted-AvertaStd-Regular'
},
cartView:{
      height:202,width:'47%',
    borderRadius:5,backgroundColor:'#FFF0f0',alignItems:'center'
},
comingView:{
      height:240,width:'49%',
    borderRadius:5,backgroundColor:'#FFF0f0',alignItems:'center'
},
comingViewflatlist:{
      width:deviceWidth/2.2,
    borderRadius:5,backgroundColor:'#FFF0f0',alignItems:'center'
},
comingViewflat:{
      height:290,width:deviceWidth/2.3,
    borderRadius:5,backgroundColor:'#FFF0f0',alignItems:'center'
},
comingViewflatshop:{
      width:deviceWidth/2.3,paddingVertical:'5%',paddingHorizontal:'2%',
    borderRadius:5,backgroundColor:'#FFF0f0',alignItems:'center'
},
productView:{
      height:144,width:'49%',
    borderRadius:5,backgroundColor:'#FFF0F0',alignItems:'center'
},
productViewbrand:{
      height:144,width:deviceWidth/2.4,padding:'5%',
    borderRadius:5,alignItems:'center'
},

optext:{
    fontSize:16,fontFamily:'hinted-AvertaStd-Regular',marginLeft:5
},
dashbtn:{
  backgroundColor:'#4AFFBD',width:150,borderRadius:25,padding:8,alignSelf:'center',marginVertical:'8%'
},
bgsaimg:{
  width:15,height:15,marginTop:2
},
snekimg:{
  width:85,height:85,borderRadius:40,alignSelf:'center'
},
brndhedr:{
  marginTop:'15%',borderRadius:15,marginHorizontal:'4%'
},
threebtn:{
  height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,padding:8
},
imgthree:{
  height:18,width:5,marginTop:5,alignSelf:'center'
},
sharimg:{
  height:15,width:15,marginTop:5,alignSelf:'center'
},
shareview:{
  height:40,width:40,backgroundColor:'#e6e6e6',borderRadius:4,padding:8,marginTop:10
},
nametxt:{
  fontSize:32,fontFamily:'hinted-AvertaStd-Bold',textAlign:'center',color:"#b80000",marginTop:'2%'
},
abouttxt:{
  fontSize:18,fontFamily:'hinted-AvertaStd-Regular',textAlign:'center',color:'#1a1a1a',marginVertical:5
},
arroundview:{
  flexDirection:'row',justifyContent:'space-around',marginTop:'3%'
},
spacearround:{
  flexDirection:'row',justifyContent:'space-around'
},
stview:{
  flexDirection:"row",marginHorizontal:"4%",
},
picview:{
  flexDirection:'row',marginHorizontal:'4%',marginTop:'5%'
},
rowline:{
  flexDirection:'row',marginHorizontal:"4%",marginTop:"2%"
},
linecolor:{
  borderBottomWidth:2,borderColor:"#1A1A1A",width:"20%"
},
line999clr:{
  borderBottomWidth:2,borderColor:"#999999",width:"78%"
},
stlinetxt:{
  fontSize:16,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#1A1A1A"
},
nolvtxt:{
  fontSize:16,fontWeight:"bold",fontFamily:"hinted-AvertaStd-Regular",color:"#999999"
},
fitrtxt:{
  fontSize:16,fontFamily:'hinted-AvertaStd-Regular',textAlign:'center',color:'#000000'
},
zerotxt:{
  fontSize:22,fontFamily:'hinted-AvertaStd-Bold',textAlign:'center',color:"#1a1a1a"
},
stremtxt:{
  fontSize:16,fontFamily:'hinted-AvertaStd-Regular',textAlign:'center',color:"#1a1a1a"
},
btnfllow:{backgroundColor:'#b80000',marginBottom:'20%',width:deviceWidth/1.1,
borderRadius:30,padding:'3%',alignSelf:'center',marginTop:'8%'
},
droptxttt:{
  fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',
  color:'#1a1a1a'
},
dropcom:{
  fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',
  textAlign:'center',color:'#2F80ED',
},
beautyproductView:{
     borderWidth: 1,borderColor:'#FFE7E7',
    borderRadius:5,backgroundColor:'#FFE7E7', 
    shadowColor: '#470000',  shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    elevation: 2
},
beautyproductView2345:{
     borderWidth: 1,borderColor:'#FFE7E7',
    borderRadius:5,backgroundColor:'#f2f2f2', 
    shadowColor: '#470000',  shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    elevation: 2
},
showshadow:{
    shadowColor: '#000000',  shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.5,
    elevation: 10,
    backgroundColor:'#FFE7E7',flexDirection:'row',
    paddingTop:'10%',paddingHorizontal:'5%',
},
watchView:{
   height:245,width:'40%',borderWidth: 1,borderColor:'#FFE7E7',
    borderRadius:5,backgroundColor:'green',marginHorizontal:3
},
imgbasket:{
 width:deviceWidth/2.4,height:deviceWidth/2.4+80,borderRadius:5,
},
productdetailsView:{
     backgroundColor:'#FFF0F0',height:'auto',marginTop:'5%',
     alignItems:'center',
    marginHorizontal:'4%',borderRadius:10,flexDirection:'row',
},
StoreView:{
     width:'49%',height:91,
    borderRadius:5,backgroundColor:'#FFF0F0',alignItems:'center'
},
categoryView:{
    height:80,width:'49%',flexDirection:'row',justifyContent:'space-between',
    borderRadius:5,backgroundColor:'#FFF0F0',alignItems:'center'
},
categoryViewnew:{
    height:80,width:deviceWidth/2.2,flexDirection:'row',justifyContent:'space-between',
    borderRadius:5,backgroundColor:'#FFF0F0',alignItems:'center'
},
categoryttext:{
   fontSize:13,fontWeight:'bold',marginTop:'7%',marginHorizontal:'10%'
},
storeimage:{
    height:50,width:50,marginTop:'5%'
},
storeimageflat:{
    height:70,width:70,marginTop:'5%',borderRadius:50
},
produtimage:{
    height:47,width:50,marginTop:'15%'
},
produtbrandimage:{
    
    width:70,height:70,borderRadius:40,alignSelf:'center'
},
produtbrandimage2:{
    
    width:70,height:70,borderRadius:40,
},
themeimage:{
    height:deviceHeight/14,width:deviceWidth/2.4,borderRadius:5
},
bagimage:{
     height:20,width:20,marginTop:'6%',marginHorizontal:'1%'
},
donlaodimg:{
   height:14.39,width:16,margin:'10%'
},
CREAMimage:{
   height:deviceHeight/4.5,width:deviceWidth/2.7,
   borderRadius:5,marginHorizontal:'5%',marginTop:'5%'
},
hydrocreamimg:{
   height:deviceHeight/12,width:deviceWidth/4.8,borderRadius:5
},
bagimageView:{
    flexDirection:'row',justifyContent:'space-between',marginTop:'5%',marginHorizontal:'3%'
},
stsview:{
  flexDirection:'row',justifyContent:'space-between',marginHorizontal:'5%',marginTop:'5%'
},
downloadimageView:{
     flexDirection:'row',justifyContent:'space-between',width:'100%'
},
storecamtext:{
    fontSize:15,fontWeight:'normal',fontFamily:'hinted-AvertaStd-Regular',fontStyle:'normal',
    color:'#000000',textAlign:'center',marginHorizontal:'7%'
},
storecamtexttodayy:{
    fontSize:18,fontWeight:'normal',fontFamily:'hinted-AvertaStd-Regular',fontStyle:'normal',
    color:'#000000',textAlign:'center',marginHorizontal:'1%'
},
storecamtexttodayy12:{
    fontSize:18,fontWeight:'normal',fontFamily:'hinted-AvertaStd-Regular',fontStyle:'normal',
    color:'#000000',textAlign:'center',marginHorizontal:'2%',marginVertical:'3%'
},
clothcamtext:{
 fontSize:15,fontWeight:'normal',fontFamily:'hinted-AvertaStd-Regular',fontStyle:'normal',
    color:'#000000',marginHorizontal:'7%'
},
produttext:{
  fontSize:15,fontWeight:'bold',
  marginVertical:'10%',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Bold',
  letterSpacing:0.5,color:'#000000',marginHorizontal:'7%'
},
uploadimageView:{
    backgroundColor:'#FFF0F0',height:150,marginTop:'5%',
    marginHorizontal:'4%',borderRadius:5,alignItems:'center'
},
VIDEOimageView:{
    height:250,borderRadius:5,
    marginHorizontal:'3%',alignItems:'center',
},
fullcreamimage:{
  height:250,width:deviceWidth-50,borderRadius:5
},

shoesimage:{
    height:100,width:100,marginHorizontal:'10%'
},
shoesTEXT:{
    fontSize:13,fontWeight:'bold',marginHorizontal:'1%',fontStyle:'normal',
    color:'#223263',letterSpacing:0.5,fontFamily:'hinted-AvertaStd-Semibold',
},
shoesrateTEXT:{
  fontSize:11,fontWeight:'bold',marginHorizontal:'1%',color:'#E22020',marginTop:'5%',
  letterSpacing:0.5,fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',
},
amazingtext:{
  fontSize:10,color:'#000000',fontFamily:'hinted-AvertaStd-Regular',alignItems:'center',
  letterSpacing:0.5,marginTop:'2%',
  marginLeft:'3%',fontWeight:'normal',fontStyle:'normal', width:'80%'
},
recodingtext:{
   fontSize:10,color:'#000000',fontFamily:'hinted-AvertaStd-Regular',alignItems:'center',
  letterSpacing:0.5,alignSelf:'center',
  marginHorizontal:'2%',fontWeight:'normal',fontStyle:'normal',
},
recodingtextmint:{
   fontSize:10,color:'#FFFFFF',fontFamily:'hinted-AvertaStd-Regular',
  letterSpacing:0.5,padding:'2%',paddingHorizontal:'3%',
  fontWeight:'normal',fontStyle:'normal',
},

recodingtext2:{
   fontSize:10,color:'#828282',fontFamily:'hinted-AvertaStd-Regular',alignItems:'center',
  letterSpacing:0.5,alignSelf:'center',color:'#000000',
  marginHorizontal:'2%',fontWeight:'normal',fontStyle:'normal',
},
recodingtextred:{
   fontSize:10,color:'#E22020',fontFamily:'hinted-AvertaStd-Regular',alignItems:'center',
  letterSpacing:0.5,alignSelf:'center',padding:'2%',lineHeight:13,
  fontWeight:'normal',fontStyle:'normal',
},
addimagetext:{
  fontSize:12,fontWeight:'600',fontStyle:'normal',
  lineHeight:15,fontFamily:'hinted-AvertaStd-Regular',color:'#828282',textAlign:'center'
},
updateordertext:{
  fontSize:12,fontWeight:'600',fontStyle:'normal',marginHorizontal:'3%',
  lineHeight:15,fontFamily:'hinted-AvertaStd-Regular',color:'#828282',
},
checkboxtext:{
  fontSize:12,fontWeight:'500',fontStyle:'normal',marginHorizontal:'3%',
  lineHeight:14,fontFamily:'hinted-AvertaStd-Regular',color:'#000000',marginTop:'2%'
},

buyerdetailsView:{
    backgroundColor:'#FFF0F0',height:217,
    marginTop:'5%',marginHorizontal:'4%',borderRadius:10,
},
buyerdetailsView2:{
    backgroundColor:'#FFF0F0',width:'92%',paddingVertical:'5%',
    marginTop:'5%',marginHorizontal:'4%',borderRadius:10,
},
buyerdetailsView3:{
    backgroundColor:'#FFF0F0',height:195,width:'92%',marginBottom:'10%',
    marginTop:'5%',marginHorizontal:'4%',borderRadius:10,
},
buyertext2:{
    color:'#223263',marginTop:'1%',fontSize:15,
    letterSpacing:0.5,fontStyle:'normal',fontWeight:'normal',fontFamily:'hinted-AvertaStd-Regular'
},
supporttext:{
   color:'#282828',fontWeight:'600',lineHeight:20,marginHorizontal:'4%',
   fontSize:16,fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',

},
clothingbrandtext:{
   color:'#424347',fontWeight:'600',lineHeight:20,marginHorizontal:'4%',
   fontSize:16,fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',

},
beautytext:{
   color:'#424347',fontWeight:'normal',lineHeight:18,marginHorizontal:'4%',
   fontSize:14,fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular',

},
beautycarttext:{
   color:'#8688BC',fontWeight:'normal',lineHeight:18,marginHorizontal:'1%',
   fontSize:14,fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular',

},

numbertext:{
   fontSize:14,fontWeight:'600',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',
   color:'#282828',alignItems:'center',lineHeight:30
},

orderboxView:{
    flexDirection:'row',
    backgroundColor:'rgba(0, 184, 184, 0.2)',
    width:'55%',height:40,justifyContent:'center',alignItems:'center',
    borderRadius:20,
},
orderboxView2:{
    flexDirection:'row',
    backgroundColor:'rgba(0, 184, 184, 0.2)',
    width:'48%',height:40,alignItems:'center',justifyContent:'center',
    borderRadius:20,
},

chatimage:{
    height:20,width:20,marginVertical:'4%',marginHorizontal:'1%'
},
searchimg:{
 height:16.67,width:16.7,
},
menuimg:{
       height:18,width:16,position:'absolute',alignSelf:'center',top:12.5
},
 audio1: {
        height:24,
        width:24,position:'absolute',alignSelf:'center',top:12.5
    },
    sendmsg1:{
       width:49,height:41,
    },
    sendmsg2:{
       width:36,height:27,
    },
categorycircletext:{
    alignItems:'center',flexDirection:'row',justifyContent:'center',marginVertical:'10%'
},
productcircletext:{
    alignItems:'center',flexDirection:'row',marginVertical:'5%',
},
productcircleview:{
    flexDirection:'row',marginVertical:'5%',alignSelf:'center',padding:'2%',
    marginHorizontal:'3%',backgroundColor:'#FFFFFF',borderRadius:20
},
produview:{
    flexDirection:'row',marginTop:'10%',alignSelf:'center',padding:'2%',
    backgroundColor:'#AFFFE2',borderRadius:10,justifyContent:'center'
},
amazingtextView:{
    flexDirection:'row',marginTop:'2%',marginHorizontal:'4%'
},
categoryredtext:{
    color:"#E22020",fontWeight:'normal',fontStyle:'normal',marginHorizontal:'2%',
    fontSize:18,textAlign:'center',fontFamily:'Montserrat-Regular'
},
addredtext:{
   color:"#E22020",fontWeight:'600',fontStyle:'normal',marginHorizontal:'2%',
    fontSize:16,fontFamily:'hinted-AvertaStd-Semibold',lineHeight:20
},
categoryredboldtext:{
     color:"#E22020",fontSize:24,textAlign:'center',fontWeight:'bold',
     letterSpacing:0.5,fontFamily:'hinted-AvertaStd-Bold',fontStyle:'normal'
},
searchproducttext:{
    fontSize:12,fontWeight:'bold',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Bold',
    marginHorizontal:'4%',color:'#223263',paddingTop:'2%'
},
productstext:{
    fontSize:16,fontWeight:'600',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',
    marginHorizontal:'2%',color:'#686868',alignSelf:'center'
},
selecttstext:{
    fontSize:14,fontWeight:'normal',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular',
    marginHorizontal:'3%',color:'#686868',
},
namebrandtext:{
   fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular',fontSize:16,
   fontWeight:'normal',color:'#000000',lineHeight:20,marginHorizontal:'5%',
},
PRICBLACKTEXT:{
    fontSize:13,color:'#000000',fontWeight:'600',
    fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',lineHeight:16
},
DeGaulletext:{
    fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',fontWeight:'600',
    lineHeight:16,fontSize:13,color:'#000000',marginHorizontal:'5%',marginTop:'4%'
},
DeGaullefullView:{
  borderRadius:5,backgroundColor:'#FFF0F0',marginHorizontal:'5%',marginVertical:'1%',
  paddingVertical:'2%',marginBottom:'5%'
},
shorttest:{
  fontSize:10,fontWeight:'600',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',
  lineHeight:13,color:'#000000',padding:'3%',paddingHorizontal:'6%',textAlign:'center'
},
shortwhitetest:{
  fontSize:10,fontWeight:'600',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',
  lineHeight:13,color:'#FFFFFF',padding:'3%',paddingHorizontal:'6%',textAlign:'center'
},
shorttest1:{
  fontSize:12,fontWeight:'600',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',
  lineHeight:15,color:'#ffffff',textAlign:'center',paddingHorizontal:20, paddingVertical:5
},
comingshort:{
  backgroundColor:'#AFFFE2',borderRadius:50,position:'absolute',top:10,left:15
},
redcomingshort:{
  backgroundColor:'#F44B4B',borderRadius:50,position:'absolute',bottom:45,right:5
},
newcolorView:{
  backgroundColor:'#AFFFE2',borderRadius:50,justifyContent:'center',paddingHorizontal:'3%'
},
beautyshort:{
  backgroundColor:'#AFFFE2',borderRadius:50,width:64,marginHorizontal:'6%',marginVertical:'6%',height:20
},
bluetext:{
    color:'#223263',fontSize:12,
    fontStyle:'normal',fontFamily:'hinted-AvertaStd-Bold',
    letterSpacing:0.5,
    fontWeight:'bold',marginHorizontal:'5%'
},
bluepricetext:{
  fontSize:16,fontWeight:'600',fontStyle:'normal',
  fontFamily:'hinted-AvertaStd-Regular',letterSpacing:0.5,color:'#0C7CFF'
},
TEXT:{
    fontSize:14,marginHorizontal:'2%',color:'#000000',fontWeight:'normal',
    fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular',

},
listcategory:{
    fontSize:14,marginHorizontal:'5%',color:'#000000',fontWeight:'normal',
    fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular',

},
storebuttontext:{
   fontSize:14,fontWeight:'bold',letterSpacing:0.5,
   fontStyle:'normal',fontFamily:'hinted-AvertaStd-Bold',color:'#FFE7E7',textAlign:'center'
},
TEXT2:{
  fontSize:13,color:'#4F4F4F',marginHorizontal:'4%',marginVertical:'1%',
  fontWeight:'600',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',
},
CHANGETEXTTITLE:{
  fontSize:12,fontWeight:'normal',fontStyle:'normal',
  fontFamily:'hinted-AvertaStd-Regular',color:'#4F4F4F',marginHorizontal:'3%',marginTop:'1%'
},
startrecordtext:{
  fontSize:12,fontWeight:'normal',fontStyle:'normal',
  fontFamily:'hinted-AvertaStd-Regular',color:'#4F4F4F',marginHorizontal:'5%',
},
Degaretext:{
  fontSize:15,fontWeight:'600',fontStyle:'normal',marginVertical:'1%',width:'80%',
  fontFamily:'hinted-AvertaStd-Regular',lineHeight:19,color:'#4F4F4F',textAlign:'center'
},
DeGaulleView:{
   height:132,backgroundColor:'#FFF0F0',marginHorizontal:'5%',marginTop:'1%',paddingHorizontal:'5%', color:'#000000'
},
viewdegaulletext:{
   fontSize:12,fontWeight:'normal',fontStyle:'normal',
   fontFamily:'hinted-AvertaStd-Regular',color:'#4E4E4E',marginVertical:'4%',marginHorizontal:'4%',
},
viewdegaulletextcenter:{
   fontSize:12,fontWeight:'normal',fontStyle:'normal',
   fontFamily:'hinted-AvertaStd-Regular',color:'#4E4E4E',marginVertical:'4%',marginHorizontal:'5%',
},
Linesorttext:{
   fontSize:13,color:'#4E4E4E',fontWeight:'normal',fontStyle:'normal',
   fontFamily:'hinted-AvertaStd-Regular',lineHeight:16
},
boderlineview:{
  borderBottomWidth:1,borderColor:"#BDBDBD",
  marginHorizontal:'4%',marginVertical:'2%'
},
addViewtext:{
  fontSize:13,color:'#FFFFFF',fontWeight:'600',fontFamily:'hinted-AvertaStd-Semibold',
  lineHeight:16,fontStyle:'normal',textAlign:'center',
},
addViewtext2:{
  fontSize:13,color:'#E22020',fontWeight:'600',fontFamily:'hinted-AvertaStd-Semibold',
  lineHeight:16,fontStyle:'normal',textAlign:'center',
},
chattingtime:{
  fontSize:10,fontWeight:'normal',fontStyle:'normal',color:'#434343',lineHeight:12,
  fontFamily:'Montserrat-Regular',letterSpacing:-0.125172,textAlign:'right',marginHorizontal:'10%'
},
chattingtime2:{
  fontSize:10,fontWeight:'300',fontStyle:'normal',color:'#434343',lineHeight:12,
  fontFamily:'Montserrat-Regular',letterSpacing:-0.125172,marginHorizontal:'7%'
},
chatrightView:{
 backgroundColor:"#B80000",marginHorizontal:'7%',flexDirection:'row',padding:'3%',
 borderRadius:36,alignSelf:'flex-end',marginTop:'2%',alignItems:'center',marginBottom:'2%'
},
chatrightViewhello:{
  backgroundColor:"#F5C9C9",marginHorizontal:'7%',flexDirection:'row',
 borderRadius:36,alignSelf:'flex-end',marginTop:'2%',alignItems:'center',paddingHorizontal:'4%',padding:'3%'
},
chatrightViewhello22:{
  backgroundColor:"#F5C9C9",marginHorizontal:'7%',flexDirection:'row',
 borderRadius:36,alignSelf:'flex-end',marginTop:'2%',alignItems:'center',paddingHorizontal:'4%',padding:'3%',marginTop:'5%'
},
chatView:{
      flexDirection:'row',backgroundColor:"#EBEBEB",padding:'2%',width:'73%',
      marginHorizontal:'5%',borderRadius:36,alignItems:'center'
},
checkimg:{
  width:18.75,height:18.75
},
chatView22:{
      flexDirection:'row',backgroundColor:"#EBEBEB",height:47,width:'73%',
      marginHorizontal:'5%',borderRadius:36,alignItems:'center',marginTop:'5%'
},
chatView2:{
    flexDirection:'row',backgroundColor:"#EBEBEB",width:'63%',
      marginHorizontal:'5%',borderRadius:36,alignItems:'center',padding:'3%'
},
chatView23:{
    flexDirection:'row',backgroundColor:"#EBEBEB",width:'63%',
      marginHorizontal:'5%',borderRadius:36,alignItems:'center',padding:'3%',marginTop:'5%'
},
hellotext:{
  fontSize:12,fontWeight:'normal',fontStyle:'normal',color:'#ffffff',lineHeight:15,
  fontFamily:'Montserrat-Regular',letterSpacing:-0.125172,textAlign:'center',marginHorizontal:'2%'
},
chattingtext:{
    fontSize:12,fontWeight:'normal',fontStyle:'normal',lineHeight:15,padding:'3%',
    fontFamily:'hinted-AvertaStd-Regular',letterSpacing:-0.125172,color:'#434343'
},
chatlongView:{
   borderRadius:13,backgroundColor:'#AFFFE2',paddingLeft:'2%',
   width:'55%',marginHorizontal:'5%',marginVertical:'1%',padding:'3%'
},
chatlongView2:{
   borderRadius:13,backgroundColor:'#EBEBEB',paddingLeft:'2%',
   width:'55%',marginHorizontal:'5%',marginVertical:'5%',padding:'3%'
},
chatheadView:{
  flexDirection:'row',justifyContent:'center',alignItems:'center',marginVertical:'20%'
},
chatViewrose:{
  flexDirection:'row',marginTop:'8%',marginBottom:'5%'
},
labelview:{
   width:'45%',marginLeft:'3%'
},
redeye:{
    width:22,height:22,marginHorizontal:'1%'
},
ordertext:{
    color:'#686868',marginHorizontal:'3%',fontSize:15,fontWeight:'600',fontStyle:'normal',
    fontFamily:'hinted-AvertaStd-Semibold',textAlign:'right',lineHeight:19
},
parktext:{
    color:'#686868',fontFamily:'hinted-AvertaStd-Semibold',fontWeight:'600',
    fontSize:16,fontStyle:'normal',lineHeight:20,marginHorizontal:'4%'
},
labeltext:{
    color:'#000000',fontFamily:'hinted-AvertaStd-Regular',fontWeight:'normal',
    fontSize:15,fontStyle:'normal',lineHeight:19,alignSelf:'center'
},
labeltext1:{
    color:'#000000',fontFamily:'hinted-AvertaStd-Semibold',fontWeight:'500',
    fontSize:18,fontStyle:'normal',lineHeight:19, textAlign:'right'
},
labeltext2:{
    color:'#000000',fontFamily:'hinted-AvertaStd-Semibold',fontWeight:'500',
    fontSize:18,fontStyle:'normal',lineHeight:19,marginLeft:30
},
directionView:{
    flexDirection:'row',justifyContent:'space-between', width:'100%'
},
directionViewprofile:{
    flexDirection:'row',justifyContent:'space-between', width:'95%'
},

directionViewble:{
    flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:'3%'
},
Viewleftnew:{
   width:37,height:35,backgroundColor:'#FFB054',marginRight:10,
   marginHorizontal:'4%',borderRadius:5,
   textAlign:'center',alignItems:'center',justifyContent:'center',marginVertical:'3%'
},
Viewleftnewsell:{
   width:55,height:55,backgroundColor:'#FFB054',marginRight:10,borderRadius:5,
   alignItems:'center',justifyContent:'center',textAlign:'center',marginVertical:'3%'
},
Viewleftnewsell2:{
   width:55,height:55,backgroundColor:'#AA2ABF',borderRadius:5,
   alignItems:'center',justifyContent:'center',marginVertical:'3%',textAlign:'center'
},
Viewyellow:{
   width:35,height:35,backgroundColor:'#FAD202',borderRadius:30,marginHorizontal:'4%',
   textAlign:'center',alignItems:'center',justifyContent:'center',marginVertical:'3%'
},
Viewyellowleft:{
   width:35,height:35,backgroundColor:'#FAD202',borderRadius:30,marginRight:10,
   textAlign:'center',alignItems:'center',justifyContent:'center',marginVertical:'3%'
},
Viewwhite:{
   width:35,height:35,borderWidth:1,borderColor:'#C4C4C4',borderRadius:30,marginHorizontal:'4%',
   textAlign:'center',alignItems:'center',justifyContent:'center',marginVertical:'1%'
},
Viewwhiteplus:{
   width:35,height:35,marginHorizontal:'4%',justifyContent:'center',
   marginVertical:0
},
Vieworangeleft:{
   width:35,height:35,backgroundColor:'#F57272',borderRadius:30,marginTop:'9%',
   textAlign:'center',alignItems:'center',justifyContent:'center',marginVertical:'3%',marginRight:10
},
Viewlueleft:{
   width:35,height:35,backgroundColor:'#0348CD',borderRadius:30,
   textAlign:'center',alignItems:'center',justifyContent:'center',marginVertical:'3%',marginRight:10
},
blueboxtext:{
   fontSize:7,color:'#FFFFFF',fontWeight:'600',
    fontFamily:'hinted-AvertaStd-Semibold',lineHeight:9,fontStyle:'normal'
},
yellowboxtext:{
   fontSize:10,color:'#000000',fontWeight:'600',
    fontFamily:'hinted-AvertaStd-Semibold',lineHeight:10,fontStyle:'normal'
},
yellowboxtextnew:{
   fontSize:10,color:'#FFFFFF',fontWeight:'600',padding:2,textAlign:'center',
    fontFamily:'hinted-AvertaStd-Semibold',lineHeight:10,fontStyle:'normal'
},
yellowboxtextplus:{
   fontSize:26,color:'#FFFFFF',fontWeight:'600',padding:2,textAlign:'center',
    fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'
},
orangeboxtext:{
   fontSize:7,color:'#FFFFFF',fontWeight:'600',
    fontFamily:'hinted-AvertaStd-Semibold',lineHeight:9,fontStyle:'normal'
},
textshoop:{
   fontSize:22,color:'#000000',fontWeight:'600',
    fontFamily:'hinted-AvertaStd-Semibold',lineHeight:25,fontStyle:'normal',
},
dtlodrtxt:{
  fontSize:18,fontFamily:'hinted-AvertaStd-Semibold',color:'#1a1a1a',
},
textshoop1:{
    marginBottom:10,marginTop:5
},
textshoop2:{
    right:10, position:'absolute',
},
textshoop4:{
    width:10,height:15
},
textshoop3:{
    marginHorizontal:'3%',marginVertical:'2%',paddingTop:10,
},
textshopcheck:{
    fontSize:13,color:'#000000',fontWeight:'normal',textAlign:'center',
    fontFamily:'hinted-AvertaStd-Regular',lineHeight:16,fontStyle:'normal'
},
beautyclaratext:{
    fontSize:9,color:'#000000',fontWeight:'600',textAlign:'center',
    fontFamily:'hinted-AvertaStd-Semibold',lineHeight:11,fontStyle:'normal'
},
beautygreytext:{
   fontSize:14,color:'#000000',fontWeight:'normal',marginLeft:'5%',
    fontFamily:'hinted-AvertaStd-Regular',lineHeight:18,fontStyle:'normal'
},
arrowimg:{
    height:25,width:25,borderRadius:70
},
profilimg:{
    height:30,width:30,borderRadius:5
},
alreadytextblack:{
    fontSize:13,color:'#000000',fontWeight:'bold',
    fontFamily:'hinted-AvertaStd-Bold',lineHeight:16,fontStyle:'normal'
},
alreadytext:{
    fontSize:13,color:'#FFFFFF',fontWeight:'bold',
    fontFamily:'hinted-AvertaStd-Bold',lineHeight:16,fontStyle:'normal'
},
cartclothtext:{
    fontSize:13,color:'#BBBBBB',fontWeight:'normal',marginLeft:'4%',
    fontFamily:'hinted-AvertaStd-Regular',lineHeight:16,fontStyle:'normal'
},
alreadytextlogin:{
    fontSize:13,color:'#27AE60',fontWeight:'bold',
    fontFamily:'hinted-AvertaStd-Bold',lineHeight:16,fontStyle:'normal'
},
shoptext:{
    fontSize:8,fontWeight:'normal',fontStyle:'normal',
    fontFamily:'Montserrat-Regular',color:'#FFFFFF'
},
productorder:{
  fontSize:15,fontWeight:'600',fontStyle:'normal',marginVertical:'2%',marginHorizontal:'5%',
  letterSpacing:0.5,color:'#000000',fontFamily:'Montserrat-SemiBold'
},
livetext:{
    fontSize:8,fontWeight:'normal',fontStyle:'normal',
    fontFamily:'hinted-AvertaStd-Regular',color:'#E22020',lineHeight:9
},
DELIVERYTEXT:{
  fontStyle:'normal',color:'#828282',fontFamily:'hinted-AvertaStd-Regular',fontWeight:'normal',
  fontSize:13,marginHorizontal:'1%',
},
DELIVERYTEXTTITLE:{
  fontStyle:'normal',color:'#828282',fontFamily:'hinted-AvertaStd-Regular',fontWeight:'normal',
  fontSize:12,marginHorizontal:'4%',
},
mobaileView:{
  flexDirection:'row',marginHorizontal:'5%',marginVertical:'3%',
},
imagesView:{
  flexDirection:'row',justifyContent:'space-between',
   marginTop:'5%',marginHorizontal:'4%',width:'70%'
},

TouchableOpacitybrand:{
     marginLeft:'1%',width:'70%',padding:'4%',
        backgroundColor:'#00B84A',justifyContent:'center',
        borderRadius:50,alignItems:'center'
},

Touchablelogin:{
    backgroundColor:'#B80000',borderRadius:50,justifyContent:'center',alignSelf:'center',
    width:'80%',marginHorizontal:'5%',marginTop:'10%',marginBottom:'3%',padding:'4%'
},
Touchableloginblack:{
    backgroundColor:'#1a1a1a',borderRadius:50,justifyContent:'center',alignSelf:'center',
    width:'80%',marginHorizontal:'5%',marginTop:'3%',marginBottom:'3%',padding:'4%'
},
TouchableloginTEXT:{
    fontSize:16,fontStyle:'normal',textAlign:'center',
    fontFamily:'hinted-AvertaStd-Bold',lineHeight:20,color:'#FFFFFF'
},
BUYnowtext:{
   fontSize:16,fontWeight:'600',fontStyle:'normal',textAlign:'center',
   fontFamily:'hinted-AvertaStd-Semibold',lineHeight:20,color:'#FFFFFF'
},
chaticontext:{
  fontSize:12,color:'#00B8B8',fontWeight:'bold',
  lineHeight:15,fontFamily:'hinted-AvertaStd-Bold',fontStyle:'normal'
},
modalcomingtext:{
    fontSize:12,lineHeight:15,fontStyle:'normal',fontWeight:'600',marginVertical:'4%',fontFamily:'hinted-AvertaStd-Semibold',color:'#000000',textAlign:'center',
},
modalcomingtext2:{
    fontSize:12,lineHeight:15,fontStyle:'normal',fontWeight:'600',marginVertical:'1%',
    fontFamily:'hinted-AvertaStd-Semibold',color:'#000000',textAlign:'center',
},
customertext:{
    fontSize:12,lineHeight:15,fontStyle:'normal',fontWeight:'600',
    fontFamily:'hinted-AvertaStd-Semibold',color:'#000000',textAlign:'center',
},
customerfoottext:{
    fontSize:12,lineHeight:15,fontStyle:'normal',fontWeight:'600',paddingTop:'1%',
    fontFamily:'hinted-AvertaStd-Semibold',color:'#000000',textAlign:'center',
},
footerpadding:{
    fontSize:12,lineHeight:15,fontStyle:'normal',fontWeight:'600',paddingTop:'1%',
    fontFamily:'hinted-AvertaStd-Semibold',color:'#000000',textAlign:'center',
},

customertextred:{
     fontSize:12,lineHeight:15,fontStyle:'normal',fontWeight:'600',
    fontFamily:'hinted-AvertaStd-Semibold',color:'#55ACEE',textAlign:'center',
},
customertextrednew:{
     fontSize:12,lineHeight:15,fontStyle:'normal',fontWeight:'600',
    fontFamily:'hinted-AvertaStd-Semibold',color:'#B80000',textAlign:'center',
},
customertextfooter:{
    fontSize:14,fontWeight:'normal',fontFamily:'hinted-AvertaStd-Regular',
    color:'#000000',fontStyle:'normal',lineHeight:18,textAlign:'right',
},
customertextfooter2:{
    fontSize:14,fontWeight:'normal',fontFamily:'hinted-AvertaStd-Regular',
    color:'#E22020',fontStyle:'normal',lineHeight:18,textAlign:'right',
},

popuptext:{
    fontSize:32,fontWeight:'bold',fontFamily:'hinted-AvertaStd-Semibold',
    color:'#B80000',fontStyle:'normal',
},
accounttext:{
   fontSize:12,fontStyle:'normal',fontWeight:'normal',fontFamily:'hinted-AvertaStd-Regular',
   color:'#000000',
},
salesnewtext:{
  fontSize:12,fontStyle:'normal',fontWeight:'normal',fontFamily:'hinted-AvertaStd-Regular',
   color:'#000000',lineHeight:15,marginHorizontal:0,marginVertical:'1%'
},
salestext:{
  fontSize:12,fontStyle:'normal',fontWeight:'normal',fontFamily:'hinted-AvertaStd-Regular',
   color:'#000000',lineHeight:15,
},
salestextonce:{
  fontSize:16,fontStyle:'normal',fontWeight:'normal',fontFamily:'hinted-AvertaStd-Semibold',
   color:'#1a1a1a',height:30,padding:5,width:deviceWidth/1.1,borderRadius:25,lineHeight:15,marginHorizontal:2,
},
salestextbtn:{
    fontSize:12,fontStyle:'normal', width:'60%',fontWeight:'normal',fontFamily:'hinted-AvertaStd-Regular',
   color:'#ffffff',textAlign:'center',padding:10,borderRadius:25,lineHeight:15,marginLeft:'20%',marginTop:'6%', backgroundColor:'#B80000'

},
salestext3:{
  fontSize:12,fontStyle:'normal',fontWeight:'normal',fontFamily:'hinted-AvertaStd-Regular',
   color:'#000000',lineHeight:15,marginHorizontal:'4%',marginVertical:'3%',alignSelf:'center'
},
salesView:{
  flexDirection:'row',justifyContent:'space-between',
  marginHorizontal:'5%',marginTop:'3%',width:'85%'
},
salesViewTODAY:{
  flexDirection:'row',justifyContent:'space-between',padding:15,
  marginTop:'3%',width:'110%',backgroundColor:'#E6E6E6',alignSelf:'center'
},
salesViewTODAYprod:{
  flexDirection:'row',justifyContent:'space-between',padding:15,
  marginTop:'3%',width:'110%',backgroundColor:'#E6E6E6',alignSelf:'center'
},
seledataView:{
  flexDirection:'row',justifyContent:'space-between',
  marginHorizontal:'6%',marginTop:'3%',width:'80%'
},
seledataViewTODAYsaleana:{
  flexDirection:'row',justifyContent:'space-between',
  marginTop:'3%',backgroundColor:'#ffffff',width:'100%',padding:5
},
seledataViewTODAY:{
  flexDirection:'row',justifyContent:'space-between',
  marginTop:'3%',backgroundColor:'#ffffff',padding:5
},
seledataViewTODAYaccount:{
  flexDirection:'row',justifyContent:'space-between',
  marginTop:'3%',backgroundColor:'#ffffff',padding:8
},
seledataViewTODAYaccountsummary:{
  flexDirection:'row',justifyContent:'space-between',
  marginTop:'3%',backgroundColor:'#ffffff',padding:8
},
seledataViewTODAYchat:{
  flexDirection:'row',justifyContent:'space-between',
  marginTop:'3%',backgroundColor:'#ffffff',padding:5
},
seledataViewTODAYsecndrender:{
  flexDirection:'row',justifyContent:'space-between',
  marginTop:'3%',backgroundColor:'#ffffff',width:'100%',padding:5,
},
textseriessale:{
  fontSize:15,fontWeight:'normal',fontStyle:'normal',
  color:'#828282',fontFamily:'hinted-AvertaStd-Regular',lineHeight:16
},
salesBottom:{
  borderBottomWidth:1,borderColor:"#BDBDBD",marginTop:'3%',width:'88%',marginLeft:'5%'
},
odrmainview:{
  width:deviceWidth/1.1,backgroundColor:'#ffffff',padding:15,alignSelf:'center',
  marginTop:10,borderRadius:15,
},

UNDERlinetext:{
  fontSize:12,fontWeight:'600',fontStyle:'normal',
  color:'#E22020',fontFamily:'hinted-AvertaStd-Semibold',lineHeight:15,
  textDecorationLine:'underline'
},

namestoretext:{
  fontSize:14,fontWeight:'600',marginTop:'5%',fontFamily:'hinted-AvertaStd-Semibold',
  color:'#000000',fontStyle:'normal',textAlign:'center'
},

    buttontext:{
       fontStyle:'normal',fontFamily:'Open Sans',fontWeight:'bold',
       fontSize:14,letterSpacing:0.5,color:'#FFFFFF',textAlign:'center'
    },
    goshoptext:{
       fontSize:15,fontWeight:'bold',fontStyle:'normal',
       fontFamily:'hinted-AvertaStd-Bold',color:'#000000'
    },
    startbutton:{
        textAlign:'center',fontSize:16,
        color:'#FFFFFF',fontWeight:'600',
        fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular'
    },

    barlotext:{
        fontSize:16,fontWeight:'500',fontStyle:'normal',
        fontFamily:'hinted-AvertaStd-Regular',color:'#000000',lineHeight:19,marginHorizontal:'4%'
    },
    Modaltext:{
       fontSize:15,fontWeight:'bold',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular',
       color:'#000000',letterSpacing:0.0075,
    },
    modaltouchablitytext:{
        fontSize:15,fontWeight:'500',fontStyle:'normal',
        fontFamily:'hinted-AvertaStd-Regular',lineHeight:18,color:'#FFFFFF',textAlign:'center'
    },
    modaltouchablitytext2:{
       fontSize:15,fontWeight:'600',fontStyle:'normal',textAlign:'center',
       fontFamily:'hinted-AvertaStd-Semibold',lineHeight:19,color:'#FFFFFF'
    },
    beautyproduct:{
         fontSize:15,fontWeight:'600',fontStyle:'normal',position:'absolute',bottom:'6%',left:'5%',
       fontFamily:'hinted-AvertaStd-Semibold',lineHeight:19,color:'#FFFFFF'
    },
     uplivetext:{
 fontSize:10,fontWeight:'normal',fontStyle:'normal',color:'#FFFFFF',
 fontFamily:'hinted-AvertaStd-Regular',lineHeight:13,position:'absolute',bottom:'15%',left:'5%',
},
    modalsuceestext:{
      fontSize:12,fontWeight:'normal',fontStyle:'normal',marginVertical:'4%',marginHorizontal:'3%',
      fontFamily:'hinted-AvertaStd-Regular',color:'#828282',letterSpacing:0.0075,textAlign:'center'
    },
    phonetext:{
      fontSize:14,fontWeight:'600',fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',
      color:'#828282',alignItems:'center',lineHeight:16,
    },
    boldhadertext:{
  color:'#000000',fontSize:15,marginLeft:'5%',fontWeight:'600',
  fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',lineHeight:19
},
boldproduct:{
  color:'#000000',fontSize:15,fontWeight:'600',marginVertical:'4%',
  fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',lineHeight:19
},
boldnewproduct:{
  color:'#000000',fontSize:15,fontWeight:'600',marginVertical:'1%',
  fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',lineHeight:19
},
boldhadertext1:{
    color:'#000000',fontSize:12,marginLeft:'5%',fontWeight:'600',
  fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold',lineHeight:15,
},
 textheadinginput:{
    color:'#000000',fontSize:16,fontWeight:'600',
    fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold'
},
 textheadinginput2:{
    color:'#000000',fontSize:16,fontWeight:'600',marginHorizontal:'5%',
    fontStyle:'normal',fontFamily:'hinted-AvertaStd-Semibold'
},
 recodingbutton:{
    color:'#FFFFFF',fontSize:16,fontWeight:'600',marginHorizontal:'5%',
    fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular',lineHeight:19
},

storedropship:{
  color:"#E22020",fontSize:10,textAlign:'center',lineHeight:13,
  fontStyle:'normal',fontFamily:'hinted-AvertaStd-Regular',fontWeight:'normal'
},
upcomingtext:{
 fontSize:10,fontWeight:'normal',fontStyle:'normal',color:'#FFFFFF',
 fontFamily:'hinted-AvertaStd-Regular',
},
uppricetext:{
 fontSize:10,fontWeight:'normal',fontStyle:'normal',color:'#FFFFFF',
 fontFamily:'hinted-AvertaStd-Regular',textAlign:'center'
},
liketext:{
 fontSize:10,fontWeight:'600',fontStyle:'normal',color:'#FFFFFF',
 fontFamily:'hinted-AvertaStd-Semibold',textAlign:'center',
},
audiencetext:{
 fontSize:12,fontWeight:'600',fontStyle:'normal',color:'#AFFFE2',
 fontFamily:'hinted-AvertaStd-Semibold',textAlign:'center'
},
upfulltext:{
 fontSize:12,fontWeight:'normal',fontStyle:'normal',color:'#FFFFFF',
 fontFamily:'hinted-AvertaStd-Regular',
},
upfclothtext:{
 fontSize:12,fontWeight:'600',fontStyle:'normal',color:'#FFFFFF',
 fontFamily:'hinted-AvertaStd-Semibold',textAlign:'center',
},
buyblurtext:{
  fontSize:15,fontWeight:'600',fontStyle:'normal',color:'#FFFFFF',
 fontFamily:'hinted-AvertaStd-Semibold',
}, 
sharetext:{
    fontSize:12,fontWeight:'bold',fontStyle:'normal',color:'rgba(61, 90, 128, 0.5)',marginVertical:'5%',
 fontFamily:'hinted-AvertaStd-Semibold',textAlign:'center',lineHeight:15
},

upcomingtext2:{
 fontSize:15,fontWeight:'600',fontStyle:'normal',color:'#FFFFFF',
 fontFamily:'hinted-AvertaStd-Semibold',lineHeight:19,
},
fourtytext:{
 fontSize:18,fontWeight:'600',fontStyle:'normal',textAlign:'center',marginTop:'3%',
 color:'#000000',fontFamily:'hinted-AvertaStd-Semibold',lineHeight:23
},
fourtytextne:{
 fontSize:13,fontWeight:'600',fontStyle:'normal',textAlign:'center',
 color:'#000000',fontFamily:'hinted-AvertaStd-Semibold',paddingHorizontal:'2%'
},
linketext:{
   fontSize:16,fontWeight:'600',fontStyle:'normal',marginTop:'3%',
 color:'#000000',fontFamily:'hinted-AvertaStd-Semibold',lineHeight:20,
},
invitetext:{
   fontSize:16,fontWeight:'600',fontStyle:'normal',
 color:'#000000',fontFamily:'hinted-AvertaStd-Semibold',lineHeight:20,
},
selectlinketext:{
  fontSize:16,fontWeight:'600',fontStyle:'normal',marginTop:'3%',
 color:'#686868',fontFamily:'hinted-AvertaStd-Semibold',lineHeight:20,
},

detailtext:{
   fontSize:15,color:'#888585',fontWeight:'600',
   fontStyle:'normal',lineHeight:19,
   fontFamily:'hinted-AvertaStd-Semibold',marginHorizontal:'3%'
},
footerView:{
    width: '100%', 
    backgroundColor: '#FFFFFF',
    height: 66,justifyContent:'center',
     shadowColor: '#000000',  shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        elevation: 5,
   
    
    position:'absolute', 
    bottom:0
},
twotextviewlive:{
    marginTop:'20%',flexDirection:'row',justifyContent:'center'
},
poppiker:{
   backgroundColor:'#E6E6E6',borderRadius:10,
},
poppiker2:{
   backgroundColor:'#E6E6E6',borderRadius:10,
   padding:'3%',paddingHorizontal:'7%',width:deviceWidth/2.3
},
poppiker3:{
   backgroundColor:'#E6E6E6',borderRadius:10,marginHorizontal:"2%",padding:'3%',paddingHorizontal:'7%',width:195
},
filterpop:{
   fontSize:16,color:'#4D4D4D',fontWeight:'600',
    fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',
},
filterpop1:{
   fontSize:12,color:'#4D4D4D',
    fontFamily:'hinted-AvertaStd-Regular',fontStyle:'normal',
},
twotextview:{
    marginTop:'35%',flexDirection:'row',justifyContent:'center'
},
twotextviewcreate:{
    flexDirection:'row',justifyContent:'center'
},
twotextviewcreatetop:{
    flexDirection:'row',justifyContent:'center',marginTop:'4%'
},
popdirection:{
    flexDirection:'row',marginVertical:'4%'
},
addView:{
    height:40,borderRadius:50,backgroundColor:'#E22020',width:'48%',justifyContent:'center'
},
addView2:{
    height:40,borderRadius:50,borderColor:'#E22020',borderWidth:1,width:'48%',justifyContent:'center'
},
gendertex:{
    fontSize:12,color:'#223263',fontWeight:'bold',paddingHorizontal:'5%',
    fontFamily:'hinted-AvertaStd-Bold',fontStyle:'normal'
},
gmaletext:{
    fontSize:12,color:'#9098B1',fontWeight:'bold',paddingHorizontal:'5%',
    fontFamily:'hinted-AvertaStd-Bold',fontStyle:'normal'
},
clothpop:{
    fontSize:18,color:'#1A1A1A',paddingVertical:'1%',lineHeight:30,fontWeight:'bold',fontFamily:'hinted-AvertaStd-Regular',fontStyle:'normal',
},
clothpop1:{
    fontSize:16,color:'#1A1A1A',paddingVertical:'1%',lineHeight:30,
    fontFamily:'hinted-AvertaStd-Regular',fontStyle:'normal',
},
redfre:{
    fontSize:16,color:'#B80000',paddingVertical:'1%',lineHeight:20,
    fontWeight:'600',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',
},
todaytxt3:{
    fontSize:20,color:'#1A1A1A',
    fontWeight:'600',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',
},
todaytxt3:{
    fontSize:16,color:'#1A1A1A',
    fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',
},
todaytxt2:{
    fontSize:16,color:'#000000',
    fontFamily:'hinted-AvertaStd-Regular',fontStyle:'normal',
},
todaytxt1:{
    fontSize:16,color:'#1A1A1A',
    fontWeight:'bold',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',
},
dartxt:{
    fontSize:14,color:'#666666',lineHeight:18,
    fontWeight:'normal',fontFamily:'hinted-AvertaStd-Regular',fontStyle:'normal',
},
textviewpop:{
    flexDirection:'row',justifyContent:'space-between',marginTop:'3%',marginRight:"20%"
},
textviewpop1:{
    flexDirection:'row',justifyContent:'space-between',
    marginTop:'3%'
},
fiterimg:{
    width:17,height:19,marginRight:8,marginTop:4
},
popimg:{
    resizeMode: 'cover',width: null,height:deviceHeight/3,borderRadius:20,
},
rarrow:{
    height:20,width:20,
},
genderimg:{
    height:24,width:24,
},
edittext:{
    fontSize:14,color:'#3D4974',
    fontWeight:'bold',fontFamily:'hinted-AvertaStd-Bold',fontStyle:'normal'
},
paymenttext:{
    fontSize:17,color:'#000000',
    fontWeight:'600',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'
},
needtext:{
    fontSize:17,color:'#000000',paddingBottom:'3%',
    fontWeight:'600',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'
},
nametext:{
     fontSize:18,color:'#000000',fontWeight:'600',
     fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'
},
addresstext:{
     fontSize:15,color:'#000000',paddingVertical:'1%',
    fontWeight:'normal',fontFamily:'hinted-AvertaStd-Regular',fontStyle:'normal',
    
},
plusstext:{
     fontSize:25,color:'#000000',textAlign:'center',
    fontWeight:'normal',fontFamily:'hinted-AvertaStd-Regular',fontStyle:'normal'
},
plusstext1:{
     fontSize:14,color:'#000000',textAlign:'center',
    fontWeight:'normal',fontFamily:'hinted-AvertaStd-Regular',fontStyle:'normal',
    paddingTop:8,paddingLeft:10
},
profileview:{
    backgroundColor:'#f9f9f9',flexDirection:'row',justifyContent:'space-between',
    paddingHorizontal:'6%',paddingVertical:'2%',marginTop:'1%',
    borderBottomColor:'#FCDBDB',borderBottomWidth:5,
},
profileview2:{
    backgroundColor:'#ffffff',
    paddingHorizontal:'6%',paddingVertical:'2%',marginTop:'1%'
},
logouttext:{
     fontSize:11,color:'#223263A1',marginVertical:'1%',alignSelf:'flex-end',
    fontWeight:'bold',fontFamily:'hinted-AvertaStd-Regular',fontStyle:'normal'
},
feedsendtext:{
     fontSize:17,color:'#000000',marginVertical:'2%',
    fontWeight:'600',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'
},
noordertext:{
     fontSize:10,color:'#223263',textAlign:'center',
    fontWeight:'600',fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal'
},
proplusview:{
    backgroundColor:'#FFF7F7',width:80,height:80,justifyContent:'center', borderRadius:10
},
proplusviewlist:{
    backgroundColor:'#FFF7F7',width:deviceWidth-40, marginVertical:10,
    paddingHorizontal:20,paddingVertical:10,borderRadius:10, flexDirection:'row'
},
addressviewlist:{
    backgroundColor:'#FFF7F7',width:deviceWidth-40, marginVertical:5,justifyContent:'space-between',
    paddingVertical:10,borderRadius:10,flexDirection:'row',marginHorizontal:'4%',paddingHorizontal:'4%'
},
addviewlist:{
    paddingHorizontal:'4%'
},
backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,


},
imagegirl:{
   width:deviceWidth/1,height:deviceHeight/2
},


})

export default styles;