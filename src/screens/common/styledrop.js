import { StyleSheet, Dimensions, Platform, PixelRatio } from 'react-native';
import { Colorss, fonts } from '../../common';
const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styl = StyleSheet.create({
  rowdrop:{
    flexDirection:'row',marginTop:5,

  },
  picstyle:{
    height:"1%",
    width:"2%"
  },
  comingshort1:{
  backgroundColor:'#AFFFE2',borderRadius:50,position:'absolute',top:10,left:"55%",flexDirection:"row"
},
txt1:{
  color:"#666666",fontSize:12,fontFamily:'hinted-AvertaStd-Bold'
},
txt2:{
  color:"#1A1A1A",fontSize:12,fontFamily: 'hinted-AvertaStd-Bold'
},
pickerViewshorttoday:{
  width:'70%'
}


});

export default styl;
