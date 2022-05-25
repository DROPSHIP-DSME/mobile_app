import { StyleSheet, Dimensions, Platform, PixelRatio } from 'react-native';
import { Colorss, fonts } from '../../common';
const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginBottom:'15%'
  },
  header: {
    justifyContent: 'space-between',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 1,
    marginTop: Platform.OS == 'ios' ? 20 : 0,
  },
  recommend: {
    flexDirection: 'row', 
  },
  headingText: {
    color: Colors.white,
    fontSize: (PixelRatio.get() <= 2) ? 12 : 14,
    
    fontWeight: 'bold',
    // height: 25,
    paddingLeft:2
  },
  text: {
    color: Colors.white,
    fontSize: 14,
   
    fontWeight: 'bold',
    // height: 25,
    paddingLeft:5
  },
  background: {
    width: '100%',
    height: '92.5%',
  },
  newmslimg:{
    width:6, height:21,
  },
  newshrimg:{
    width:19.97, height:21,
  },
  newlkiimg:{
    width:20, height:19,
  },
  newspkimg:{
    width:21, height:19.38,
  },
  create: {
    backgroundColor: Colors.white,
    borderRadius: 30,
    width: 48,
    height: 48,
    // alignSelf: ‘flex-end’,
    // marginBottom: 30,
    // marginRight: 18,
    position: 'absolute',
    bottom: SCREEN_HEIGHT / 3.8,
    right: 30
  },
  description: {
    color: Colors.white,
    fontSize: 16,
    margin: 17,
   
    lineHeight: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 13,
    marginBottom: 18,
  },
  user: {
    fontSize: 14,
    
    marginLeft: 4,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    opacity: 0.6,
    marginLeft: 4,
  
    fontSize: 14
  },
  footer: {
    backgroundColor: Colors.blue,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',  
    //bottom:30  
  },
  footerSpace: {
    height:2,
    color:'#C3C3C3',
  },
  content: {
    color: Colors.white,
    fontSize: 16,
    marginLeft: 4,
  },
  footertext: {
    color: Colors.white,
    fontSize: 14,
    
    fontWeight: 'bold',
    opacity: 0.6,
    marginTop: 2
  },
  fllowview:{
    marginTop:"3%", backgroundColor:"#B80000",height:25,width:74,paddingHorizontal:'2%',borderRadius:20
  },
flltxt:{
  textAlign:'center',paddingTop:"3%",color:"#FFFFFF",fontSize:12,fontFamily:"hinted-AvertaStd-Bold",fontWeight:"bold"
},
  modal: {
    backgroundColor: Colors.white,
    height: SCREEN_HEIGHT / 2,
    width: '100%',
    margin: 0,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
  },
  box: {
    marginTop:10,
   // width:'75%',
    borderRadius: 25,
    marginHorizontal:'2%',
    //padding:'1%',
    flexDirection: 'row',
    borderColor: Colors.white,
    borderWidth: 1,
    marginBottom: '5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    marginLeft: 5,
    // padding: Platform.OS == 'ios' ? 10 : 7,
    
    height: 40,
    width: '65%',
  },
  flagModal: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 16,
    // height: 160,
  },
  flagcontent: {
    
    color: Colors.black,
    marginTop: 10,
  },
  flagissues: {
    
    color: Colors.black,
    fontSize: 16,
    marginBottom: 16,
  },
  feedtype: {
   
    fontSize: 18,
  },
  preview: {
    height: SCREEN_HEIGHT,
    width: '100%',
  },
  capture: {
    backgroundColor: '#fff',
    borderRadius: 80,
    height: 90,
    width: 90,
    padding: 5,
    marginLeft: 30,
    marginRight: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  start: {
    marginLeft: 30,
    marginRight: 30,
    height: 80,
    width: 80,
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 50,
    borderWidth: 7,
    borderColor: Colors.white
  },
  circle: {
    borderRadius: 80,
    height: 80,
    width: 80,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
  },
  sqaure: {
    backgroundColor: '#FF0000',
    borderRadius: 7,
    alignSelf: 'center',
    height: 30,
    width: 30,
  },
  live: {
    backgroundColor: '#FF0000',
    borderRadius: 15,
    height: 26,
    //alignSelf: 'center',
    //width: 44,
  },
  gallerysection: {
    bottom: hp('15%'),
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  gallery: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  headingtext: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 16,
    
  },
  headingtextBackground: {
    backgroundColor: Colors.charcol,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20,
    marginLeft: 30,
  },
  colorbox: {
    margin: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0.5
    },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2,
    backgroundColor: Colors.white,
    borderRadius: 10
  },
  caption: {
    color: Colors.black,
    
    fontSize: 16,
    marginLeft: 16,
    marginTop: 30,
  },
  captiontext: {
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 10,
    margin: 20,
    height: hp('20%'),
    paddingLeft: 12,
  },
  button: {
    backgroundColor: Colors.blue,
    alignSelf: 'center',
    width: wp('50%'),
    borderRadius: 25,
  },
  buttonSmall: {
    backgroundColor: Colors.blue,
    alignSelf: 'center',
    width: wp('15%'),
    borderRadius: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  livePeople: {
    flexDirection: 'row',
    // alignItems:'center', 
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 4,
    shadowOpacity: 1.0,
    width: SCREEN_WIDTH / 2,
    marginBottom: 20,

  },
  Peopleprofile: {
    width: SCREEN_WIDTH / 2.2,
    height: SCREEN_HEIGHT / 2,
  },
  Peopledetails: {
    fontSize: 16,
    color: Colors.matblack,
  },
  flatlistPeople: {
    width: SCREEN_WIDTH,
    padding: 5
  },
  fullscreen: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    position: 'absolute',
  },
  broadcasterVideoStateMessage: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  broadcasterVideoStateMessageText: {
    color: '#fff',
    fontSize: 20,
  },
  charcol: {
    backgroundColor: Colors.charcol,
    flexDirection: 'row',
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 15,
    opacity: 0.7
  },
  headerbtn: {
    backgroundColor: Colors.charcol,
  },
  createOptions: {
    backgroundColor: Colors.charcol,
    paddingVertical: Platform.OS == 'ios' ? hp('1%') : hp('1%'),
    paddingHorizontal: Platform.OS == 'ios' ? wp('4%') : wp('3%'),
    // paddingVertical: Platform.OS == 'ios' ? 9 : 6,
    // paddingHorizontal: Platform.OS == 'ios' ? 16 : 15,
    borderRadius: 18
  },
  track: {
    height: 2,
    borderRadius: 2,
  },
  thumb: {
    width: 14,
    height: 14,
    borderRadius: 30 / 2,
    backgroundColor: Colors.white,
    borderColor: Colors.blue,
    borderWidth: 2,
  },
  headerbtnLeft: {
    backgroundColor: Colors.charcol,
    width:Platform.OS == 'ios' ? wp(22) : wp(26), 
    paddingTop: Platform.OS == 'ios' ? 6 : 4,
    marginTop: 20,
    paddingRight:15,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    height:30,
    marginRight:10
  },
  headerbtnCenter: {
    backgroundColor: Colors.charcol,
    // padding:hp('30%'), 
    height:30,
    paddingTop: Platform.OS == 'ios' ? 6 : 4,
    marginTop: 20,
    paddingHorizontal: 6,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    width:Platform.OS == 'ios' ? ((PixelRatio.get() <= 2) ? wp(29) : wp(28)) : wp(33), 
    marginLeft:-12,
    paddingLeft:10
  },
  headerbtnRight: {
    backgroundColor: Colors.charcol,
    paddingVertical: hp('1%'),
    paddingRight: wp('3%'),
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,

  }
});

export default styles;
