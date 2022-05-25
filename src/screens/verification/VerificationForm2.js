import React, { useState } from 'react';
import { Text, View, FlatList,   TouchableOpacity, Image } from 'react-native';
import { Colors, ImageIcons } from '../../common';
import styles from './styles';

const VerificationForm2 = (props) => {
    // Local states
    const [billList, setBillList] = useState([
        {
            billName: "Electric Bill",
            billId: 1
        },
        {
            billName: "Gas Bill",
            billId: 2
        },
        {
            billName: "Water and Sewage",
            billId: 3
        },
        {
            billName: "Internet Bill",
            billId: 4
        },
        {
            billName: "Telephone Bill",
            billId: 4
        }
    ])

    const renderEmptyList = () => {
        return (
            <View style={styles.emptyList}>
                <Text style={styles.emptyListText}>No bill types available</Text>
            </View>
        )
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => props.navigation.navigate("VerificationForm3", { selectedBill: item.billName })}
                style={[styles.listItem, index === billList.length - 1 && {
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.LIGHT_GREY
                }]}>
                <Text style={styles.billNameText}>{item?.billName}</Text>
                <Image source={ImageIcons.nextIcon} style={styles.nextArrowImg} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
            
            <FlatList
                data={billList}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={() => <View style={[styles.subTitle,{paddingBottom:'8%',paddingHorizontal:15}]}>
                    <Text style={{ fontSize: 15 }}> Select your utility bill. Make sure the utility bill is recent. </Text>
                </View>}
                ListEmptyComponent={renderEmptyList}
            />
        </View>
    )
}

export default VerificationForm2;