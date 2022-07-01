import React from 'react';
import {Pressable, Image, StyleSheet,Text,View,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import ImageIcons from '../../../common/ImageIcons';

export default (ChildItem = ({
  item,
  style,
  onPress,
  index,
  imageKey,
  local,
  height
}) => { 
  return (
    <View style={{marginTop:0}}>
        { item[imageKey].includes("mp4") ?
        <TouchableOpacity>
          <Video    
             source={{uri: item[imageKey]}}
              paused={false}
              repeat={false}
              muted={true}
              resizeMode={"cover"}  
              style={[styles.image, style, {height: height}]}
          />
        </TouchableOpacity>
    :
        <Image
          style={[styles.image, style, {height: height}]}
          source={local ? item[imageKey] : {uri: item[imageKey]}}
        />
      }
        <Text style={{fontSize:20,fontWeight:'600',marginLeft:'4%',color:'#FFFFFF',bottom:'20%',
        lineHeight:25,fontFamily:'hinted-AvertaStd-Semibold',fontStyle:'normal',position:'absolute'}}>{item.desc}</Text>
        
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 230,
    resizeMode: 'stretch',
  },
});
