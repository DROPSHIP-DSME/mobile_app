import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import ImageIcons from '../../common/ImageIcons'

const LiveStreamRecap3 = () => {
    return (

        <ScrollView>
            <View style={{ height: '100%', width: '100%', backgroundColor: '#F5F5F5' }} >


                <View style={style.ViewStyle} >


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                        <Text style={style.TextStyle} >Title</Text>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }} >Sneakers Sale 50% OFF</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }} >
                        <Text style={style.TextStyle} >Date & Time</Text>
                        <Text style={{ fontSize: 16, color: '#1A1A1A' }} >24 April, 12:45PM ET</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }} >
                        <Text style={style.TextStyle} >Duration</Text>
                        <Text style={{ fontSize: 16, color: '#1A1A1A' }} >00:24</Text>
                    </View>

                </View>

                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 22, marginStart: 20, marginTop: 40 }} >Summary</Text>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginStart: 20, marginEnd: 121, marginTop: 15 }} >
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 22, }} >3,409</Text>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 22, }} >41</Text>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 22, }} >356</Text>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 22, }} >12</Text>

                </View>


                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginStart: 20, marginEnd: 78, marginTop: 1 }} >
                    <Text style={{ color: 'black', fontSize: 14, }} >Viewers</Text>
                    <Text style={{ color: 'black', fontSize: 14, }} >Saves</Text>
                    <Text style={{ color: 'black', fontSize: 14, }} >Likes</Text>
                    <Text style={{ color: 'black', fontSize: 14, }} >Messages</Text>

                </View>
                

                

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 4.7, marginStart: 10, marginEnd: 5 }} >
                    <Text style={{ fontSize: 12, color: '#333333' }} >Home</Text>
                    <Text style={{ fontSize: 12, color: '#333333', marginStart: 10 }}>Orders</Text>
                    <Text style={{ fontSize: 12, color: '#333333', marginStart: 15 }} >Buy</Text>
                    <Text style={{ fontSize: 12, color: '#333333', marginStart: 10 }} >Go Live</Text>
                    <Text style={{ fontSize: 12, color: '#333333' }} >Products</Text>

                </View>
                
                <Text style={{ marginTop: 40, marginStart: 20, fontWeight: 'bold', fontSize: 22, color: 'black' }} >Viewers</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginStart: 20, marginEnd: 38, marginTop: 10 }} >
                    <View>
                        <View style={{ flexDirection: 'row' }} >
                            <Image source={ImageIcons.profile} style={{ height: 36, width: 36 }} />
                            <Text style={{ fontSize: 14, color: '#1A1A1A', fontWeight: '500', marginStart: 10, marginTop: 8 }} >Andrea Miller</Text></View>

                        <View style={{ flexDirection: 'row' }} >
                            <Image source={ImageIcons.profile} style={{ height: 36, width: 36 }} />
                            <Text style={{ fontSize: 14, color: '#1A1A1A', fontWeight: '500', marginStart: 10, marginTop: 8 }} >Andrea Miller</Text></View>

                        <View style={{ flexDirection: 'row' }} >
                            <Image source={ImageIcons.profile} style={{ height: 36, width: 36 }} />
                            <Text style={{ fontSize: 14, color: '#1A1A1A', fontWeight: '500', marginStart: 10, marginTop: 8 }} >Andrea Miller</Text></View>

                        <View style={{ flexDirection: 'row' }} >
                            <Image source={ImageIcons.profile} style={{ height: 36, width: 36 }} />
                            <Text style={{ fontSize: 14, color: '#1A1A1A', fontWeight: '500', marginStart: 10, marginTop: 8 }} >Andrea Miller</Text></View>

                        <View style={{ flexDirection: 'row' }} >
                            <Image source={ImageIcons.profile} style={{ height: 36, width: 36 }} />
                            <Text style={{ fontSize: 14, color: '#1A1A1A', fontWeight: '500', marginStart: 10, marginTop: 8 }} >Andrea Miller</Text></View>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row' }} >
                            <Image source={ImageIcons.profile} style={{ height: 36, width: 36 }} />
                            <Text style={{ fontSize: 14, color: '#1A1A1A', fontWeight: '500', marginStart: 10, marginTop: 8 }} >Andrea Miller</Text></View>

                        <View style={{ flexDirection: 'row' }} >
                            <Image source={ImageIcons.profile} style={{ height: 36, width: 36 }} />
                            <Text style={{ fontSize: 14, color: '#1A1A1A', fontWeight: '500', marginStart: 10, marginTop: 8 }} >Andrea Miller</Text></View>

                        <View style={{ flexDirection: 'row' }} >
                            <Image source={ImageIcons.profile} style={{ height: 36, width: 36 }} />
                            <Text style={{ fontSize: 14, color: '#1A1A1A', fontWeight: '500', marginStart: 10, marginTop: 8 }} >Andrea Miller</Text></View>

                        <View style={{ flexDirection: 'row' }} >
                            <Image source={ImageIcons.profile} style={{ height: 36, width: 36 }} />
                            <Text style={{ fontSize: 14, color: '#1A1A1A', fontWeight: '500', marginStart: 10, marginTop: 8 }} >Andrea Miller</Text></View>

                        <View style={{ flexDirection: 'row' }} >
                            <Image source={ImageIcons.profile} style={{ height: 36, width: 36 }} />
                            <Text style={{ fontSize: 14, color: '#1A1A1A', fontWeight: '500', marginStart: 10, marginTop: 8 }} >Andrea Miller</Text></View>
                    </View>

                </View>
                <TouchableOpacity style={{ backgroundColor: '#B80000', marginStart: 20, marginEnd: 20, marginTop: 45, borderRadius: 50, marginBottom: 137 }} >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 20, marginBottom: 20 }} >Delete Stream</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

export default LiveStreamRecap3

const style = StyleSheet.create({
    ViewStyle: {
        backgroundColor: '#fff',
        marginTop: 25,
        paddingTop: 20,
        marginStart: 20,
        marginEnd: 20,
        paddingStart: 25,
        paddingEnd: 25,
        paddingBottom: 20
    },

    TextStyle: {
        fontSize: 16,
        color: '#666666',
        fontWeight: '400'

    }

})