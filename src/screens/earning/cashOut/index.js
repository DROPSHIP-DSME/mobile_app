import React, { useState } from 'react';
import { Text, View, FlatList,   TouchableOpacity, Image } from 'react-native';
import { Fonts, Colors, ImageIcons } from '../../../common';
import { FloatingButton } from '../../../components/forms/button';
import styles from './styles';

const CashOut = (props) => {

    // Local states
    const [banks, setBanks] = useState([
        {
            bankName: "American Express",
            bankIcon: ImageIcons.americalExpressBankIcon,
            accountNumber: "4587 458 12365",
            accountName:"Prepa Adwif",
            routingNumber:"123456789",
        },
        {
            bankName: "JCB",
            bankIcon: ImageIcons.jcbBankIcon,
            accountNumber: "4587 458 12365",
            accountName:"Prepa addd",
            routingNumber:"123456789",
        },
        {
            bankName: "Citibank",
            bankIcon: ImageIcons.citiBankIcon,
            accountNumber: "4587 458 12365",
            accountName:"Prepa Adwif",
            routingNumber:"123456789",
        },
        {
            bankName: "ClickBank",
            bankIcon: ImageIcons.clickBankIcon,
            accountNumber: "4587 458 12365"
        },
        {
            bankName: "Standard Chartered",
            bankIcon: ImageIcons.charteredBankIcon,
            accountNumber: "4587 458 12365",
            accountName:"Prepa Adwif",
            routingNumber:"123456789",
        },
        {
            bankName: "E- bank",
            bankIcon: ImageIcons.eBankIcon,
            accountNumber: "4587 458 12365",
            accountName:"Prepa Adwif",
            routingNumber:"123456789",
        },
        {
            bankName: "Discover Bank",
            bankIcon: ImageIcons.discoverBankIcon,
            accountNumber: "4587 458 12365",
            accountName:"Prepa Adwif",
            routingNumber:"123456789",
        }
    ])

    const renderListHeader = () => {
        return (
            <View style={{paddingHorizontal:10,paddingVertical:10}}>
                <Text style={styles.titleText}>Select Bank Account</Text>
            </View>
        )
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => props.navigation.navigate("SubmitCashout", { accountDetail: item })}
                style={styles.listItem}>
                <View>
                    <Image source={item?.bankIcon} style={styles.img} />
                </View>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={styles.titleText}>{item?.bankName}</Text>
                    <Text style={styles.titleSubText}>{"Account Number: *** ***" + String(item?.accountNumber).slice(-5)}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.root}>
            
            <View style={styles.topBlueView} />
            <FlatList
                style={styles.list}
                data={banks}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={() => <View style={{ height: 20 }} />}
                ListHeaderComponent={renderListHeader}
            />
        </View>
    )
}

export default CashOut;