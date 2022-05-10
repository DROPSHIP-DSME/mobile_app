import React from 'react';
import {Pressable, Image, StyleSheet,Text,View} from 'react-native';
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
        <Video    
           source={{uri: item[imageKey]}}
            paused={false}
            repeat={false}
            resizeMode={"cover"}  
            style={[styles.image, style, {height: height}]}
        />
    :
        <Image
          style={[styles.image, style, {height: height}]}
          source={local ? item[imageKey] : {uri: item[imageKey]}}
        />
    }
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
