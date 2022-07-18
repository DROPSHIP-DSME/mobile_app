import React, { useState } from 'react';
import { TouchableOpacity, Text, View,Image,TextInput } from 'react-native';
import tw from 'twrnc';
import ImageIcons from '../../common/ImageIcons'
import styles from '../../screens/common/styles';


const Help = ({onPress}) => {

    const [helppopup, sethelppopup] = React.useState(false);
    const [text1, onChangeText1] = React.useState("");

    return (
        <View>
            {helppopup == true &&
                <View style={{ flex: 1, backgroundColor: '#f9f9f9', margin: 20, paddingVertical: 10, borderRadius: 10, zIndex: 4001, position: 'absolute', bottom: '20%' }}>
                    <View style={styles.chatViewrose}>
                        <Text style={styles.Benrosetext}>Write to Customer Support</Text>
                        <TouchableOpacity style={{ position: 'absolute', right: 15, top: 5 }} onPress={() => sethelppopup(false)}>
                            <Image source={ImageIcons.closepopup} style={styles.sendmsg2} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.accountmainview, { marginBottom: 50, width: '100%' }]}> 
                        <View style={{ width: '90%' }}>
                            <TextInput style={[styles.chatinput, { height: 120, width: '100%' }]}
                                placeholder="Type here..."
                                onChangeText={onChangeText1}
                                value={text1}
                                placeholderTextColor="#999999"
                            />
                        </View>
                        <TouchableOpacity style={{ position: 'absolute', right: '50%', bottom: -50 }} onPress={() => onPress(text1)}> 
                            <View style={{ borderRadius: 10, marginRight: 10, padding: 10, backgroundColor: '#B80000' }}>
                                <Text style={{ color: '#ffffff', fontFamily: 'hinted-AvertaStd-Semibold', paddingHorizontal: 10 }}>Send</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            }

          <View style={{ position: 'absolute', zIndex: 2001, right: 20, bottom: 70 }}>
              <TouchableOpacity onPress={() => sethelppopup(true)}>
                  <Image source={ImageIcons.exporthelp} style={{ width: 50, height: 50 }} />
              </TouchableOpacity>
          </View>
      </View>
    );
}
export default Help