import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import * as Progress from 'react-native-progress';
import ImageIcons from '../../common/ImageIcons'

const LiveStreamRecap = () => {
    return (
        <View style={style.Container} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginStart: 20, marginEnd: 20, marginTop: 25 }} >
                <Image style={{ height: 36, width: 36, backgroundColor:'#c9c9c9',borderRadius:20 }} />
                <View>
                    <Text style={{ color: '#666666', fontSize: 14, }} >Andrea Miller</Text>
                    <Text style={{ color: '#000000', fontSize: 12, marginTop: 5 }} >Just wanted to say I love all your products and I{'\n'} was wondering when you’d be releasing the new{'\n'} collection?</Text>
                    <Text style={{ color: '#666666', fontSize: 12, marginTop: 5 }} >12:03PM</Text>
                </View>
                <Image style={{ height: 36, width: 36, backgroundColor:'#c9c9c9',borderRadius:20 }} />


            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginStart: 20, marginEnd: 20, marginTop: 25 }} >
                <Image source={ImageIcons.profile} style={{ height: 36, width: 36 }} />
                <View>
                    <Text style={{ color: '#666666', fontSize: 14, }} >Andrea Miller</Text>
                    <Text style={{ color: '#000000', fontSize: 12, marginTop: 5 }} >Just wanted to say I love all your products and I{'\n'} was wondering when you’d be releasing the new{'\n'} collection?</Text>
                    <Text style={{ color: '#666666', fontSize: 12, marginTop: 5 }} >12:03PM</Text>
                </View>
                <Image style={{ height: 36, width: 36, backgroundColor:'#c9c9c9',borderRadius:20 }} />


            </View>
        </View >
    )
}

export default LiveStreamRecap

const style = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#F5F5F5'
    },

})