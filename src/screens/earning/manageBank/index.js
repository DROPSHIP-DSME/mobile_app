import React, { useEffect, useState } from 'react';
import { Text, View, FlatList,   TouchableOpacity, Image } from 'react-native';
import { Fonts, Colors, ImageIcons } from '../../../common';
import { FloatingButton } from '../../../components/forms/button';
import Loader from '../../../components/modals/Loader';
import styles from './styles';

const ManageBank = (props) => {

    // Local states
    const [banks, setBanks] = useState([
        {
            accountName: "Prepa Adwif",
            bankName: "American Express",
            bankIcon: ImageIcons.americalExpressBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
            amount: 20.00
        },
        {
            accountName: "Prepa Adwif",
            bankName: "JCB",
            bankIcon: ImageIcons.jcbBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
            amount: 20.00
        },
        {
            accountName: "Prepa Adwif",
            bankName: "Citibank",
            bankIcon: ImageIcons.citiBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
            amount: 20.00
        },
        {
            accountName: "Prepa Adwif",
            bankName: "ClickBank",
            bankIcon: ImageIcons.clickBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            accountName: "Prepa Adwif",
            bankName: "Standard Chartered",
            bankIcon: ImageIcons.charteredBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
            amount: 20.00
        },
        {
            accountName: "Prepa Adwif",
            bankName: "E- bank",
            bankIcon: ImageIcons.eBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
            amount: 20.00
        },
        {
            accountName: "Prepa Adwif",
            bankName: "Discover Bank",
            bankIcon: ImageIcons.discoverBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
            amount: 20.00
        }
    ])

    useEffect(() => {
        props.getBankAccountList();
    }, [])

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => { }}
                style={styles.listItem}>
                <View>
                    <Image source={{ uri: item?.bank?.bankImage }} style={styles.img} />
                </View>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={styles.titleText}>{item?.bank?.bankName}</Text>
                    <Text style={styles.titleSubText}>{"Account Number: *** ***" + String(item?.accountNumber).slice(-5)}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.root}>
            
            <View style={styles.topBlueView} />
            <View style={styles.headerView}>
                <Text style={styles.headerSubText}>{"Connect your bank account for easier transaction cashing out."}</Text>
                <FloatingButton
                    text="Add Account"
                    onPress={() => {
                        props.navigation.navigate("SelectBank")
                    }}
                    customStyle={{ marginBottom: -45 }}
                />
            </View>
            <FlatList
                style={styles.list}
                data={props.bankAccountList}  //bankAccountList
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={() => <View style={{ height: 30 }} />}
            />
            <Loader isVisible={props.bankAccountListLoader} />
        </View>
    )
}

export default ManageBank;