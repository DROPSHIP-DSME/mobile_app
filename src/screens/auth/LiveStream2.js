import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native'
import * as Progress from 'react-native-progress';

const LiveStreamRecap2 = () => {

    const Data = ({ item }) => {
        return (
            <View style={{ marginTop: 25, flexDirection: 'row', justifyContent: 'space-between', paddingStart: 15, marginStart: 20, marginEnd: 20, paddingEnd: 15, paddingTop: 15, paddingBottom: 15, borderRadius: 10, backgroundColor: '#FFF' }} >
                <View>
                    <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold' }} >{item.title}</Text>
                    <Text style={{ color: '#808080', fontSize: 12, marginTop: 3 }} >{item.date}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 3 }}>
                        <Text style={{ fontSize: 12, color: 'black', }} >{item.id}</Text>
                        <Text style={{ fontSize: 12, color: '#2F80ED', fontWeight: 'bold' }} > {item.Number}</Text>
                    </View>
                </View>
                <Text style={{ color: '#2F80ED', fontSize: 12, backgroundColor: '#ADD8E6', paddingTop: 5, height: 25, width: 91, textAlign: 'center', borderRadius: 6, fontWeight: 'bold' }} >{item.status}</Text>

               

            </View>
        )
    }

    const name = [
        {
            title: 'Purchased by Anna.M ',
            date: 'jan 11, 2022',
            id: 'Order Number:',
            Number: 'GSHMU00S0004KH',
            status: 'Pending'
        }
    ]
    return (
        <View style={style.Container}>
            <FlatList
                data={name}
                renderItem={Data}
            />
        </View>
    )
}

export default LiveStreamRecap2
const style = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#F5F5F5'

    }
})