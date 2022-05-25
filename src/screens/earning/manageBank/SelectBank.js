import React, { useEffect, useState } from 'react';
import { Text, View, FlatList,   TouchableOpacity, Image, ScrollView } from 'react-native';
import { Fonts, Colors, ImageIcons } from '../../../common';
import Loader from '../../../components/modals/Loader';
import styles from './styles';

const SelectBank = (props) => {

    // Local states
    const [banks, setBanks] = useState([
        {
            bankName: "American Express",
            bankIcon: ImageIcons.americalExpressBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "JCB",
            bankIcon: ImageIcons.jcbBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "Citibank",
            bankIcon: ImageIcons.citiBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "ClickBank",
            bankIcon: ImageIcons.clickBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "Standard Chartered",
            bankIcon: ImageIcons.charteredBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "E- bank",
            bankIcon: ImageIcons.eBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "Discover Bank",
            bankIcon: ImageIcons.discoverBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "Citibank",
            bankIcon: ImageIcons.citiBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "E- bank",
            bankIcon: ImageIcons.eBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            ankName: "JCB",
            bankIcon: ImageIcons.jcbBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "Discover Bank",
            bankIcon: ImageIcons.discoverBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "Standard Chartered",
            bankIcon: ImageIcons.charteredBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "Discover Bank",
            bankIcon: ImageIcons.discoverBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankIcon: ImageIcons.jcbBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "Discover Bank",
            bankIcon: ImageIcons.discoverBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "E- bank",
            bankIcon: ImageIcons.eBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankIcon: ImageIcons.jcbBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "Citibank",
            bankIcon: ImageIcons.citiBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankIcon: ImageIcons.jcbBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "E- bank",
            bankIcon: ImageIcons.eBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "Discover Bank",
            bankIcon: ImageIcons.discoverBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "Citibank",
            bankIcon: ImageIcons.citiBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "E- bank",
            bankIcon: ImageIcons.eBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            ankName: "JCB",
            bankIcon: ImageIcons.jcbBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "American Express",
            bankIcon: ImageIcons.americalExpressBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "JCB",
            bankIcon: ImageIcons.jcbBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "Citibank",
            bankIcon: ImageIcons.citiBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
        {
            bankName: "ClickBank",
            bankIcon: ImageIcons.clickBankIcon,
            accountNumber: "4587 458 12365",
            routingNumber: "123456789",
        },
    ])

    useEffect(() => {
        props.getBankList();
    }, [props.isInternetConnected])

    return (
        <View style={styles.root}>
            
            <View style={styles.topBlueView} />
            <ScrollView>
                <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                    <Text style={styles.titleText}>Select Bank Account</Text>
                </View>
                <View style={styles.bankList}>
                    {
                        props?.banklist?.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => props.navigation.navigate("AddBankAccount", { bankDetail: item })}
                                    style={styles.bankListItem}>
                                    <Image source={{ uri: item?.bankImage }} style={styles.imgBank} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
            <Loader isVisible={props.bankListLoader} />
        </View>
    )
}

export default SelectBank;