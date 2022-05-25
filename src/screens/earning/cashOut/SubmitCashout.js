import React, { useEffect, useRef, useState } from 'react';
import { Text, Image, View, SafeAreaView, ScrollView, Alert } from 'react-native';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { Colors,CommonStrings } from '../../../common'
import InputField from '../../../components/forms/inputField';
import { RoundedButton } from '../../../components/forms/button';

const SubmitCashout = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    useEffect(()=>{
        let { accountDetail } = props?.route?.params;
        values.accountName= accountDetail?.accountName || '',
        values.bankName= accountDetail?.bankName || '',
        values.accountNumber= accountDetail?.accountNumber || '',
        values.routingNumber= accountDetail?.routingNumber || '',
        values.amount= accountDetail?.amount || ''
    },[])

    // Cashout request submission
    const handleAccountSubmit = () => {
        if (errors.storeName) {
            Alert.alert(CommonStrings.AppName, errors.accountName)
        } else if (errors.accountName) {
            Alert.alert(CommonStrings.AppName, errors.bankName)
        } else if (errors.bankName) {
            Alert.alert(CommonStrings.AppName, errors.accountNumber)
        } else if (errors.accountNumber) {
            Alert.alert(CommonStrings.AppName, errors.accountNumber)
        } else if (errors.routingNumber) {
            Alert.alert(CommonStrings.AppName, errors.routingNumber)
        } else if (errors.amount) {
            Alert.alert(CommonStrings.AppName, errors.amount)
        } else {
            Alert.alert(CommonStrings.AppName, "Submitted successfully")
            handleSubmit();
        }
    }

    return (
        <SafeAreaView style={styles.root}>
            
            <View style={styles.topBlueView} />
            <ScrollView persistentScrollbar={true} keyboardShouldPersistTaps="always" >
                <View style={{ flex: 1, marginTop: '2%', marginBottom: 20 }}>
                    <InputField
                        id="accountName"
                        title="Account Name"
                        value={values.accountName}
                        onChangeText={handleChange('accountName')}
                        theme="white"
                    />
                    <InputField
                        id="bankName"
                        title="Bank Name"
                        value={values.bankName}
                        onChangeText={handleChange('bankName')}
                        theme="white"
                        iconTintColor={Colors.DARK_GREY}
                    />
                    <InputField
                        id="accountNumber"
                        title="Account Number"
                        value={values.accountNumber}
                        onChangeText={handleChange('accountNumber')}
                        theme="white"
                        keyboardType="numeric"
                    />
                    <InputField
                        id="routingNumber"
                        title="Routing Number"
                        value={values.routingNumber}
                        onChangeText={handleChange('routingNumber')}
                        theme="white"
                        keyboardType="numeric"
                    />
                    <InputField
                        id="amount"
                        title="Amount"
                        value={values.amount}
                        onChangeText={handleChange('amount')}
                        theme="white"
                        leftIcon={"$"}
                        keyboardType="numeric"
                    />
                    <View style={{ marginTop: '10%', paddingHorizontal: '25%' }}>
                        <RoundedButton
                            text="Submit"
                            onPress={() => handleAccountSubmit()}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const formikEnhancer = withFormik({
    // validateOnMount: true,
    validationSchema: Yup.object().shape({
        accountName: Yup.string().required('Please enter account name'),
        bankName: Yup.string().required('Please enter bacnk name'),
        accountNumber: Yup.string().required('Please enter account number'),
        routingNumber: Yup.string().required('Please enter routing number'),
        amount: Yup.number().required('Please enter amount'),
    }),
    mapPropsToValues:  (props) => {
        // let { accountDetail } = props?.route?.params;
        return {
            accountName:'',
            bankName: '',
            accountNumber:  '',
            routingNumber:'',
            amount: ''
        };
    },
    handleSubmit: (payload, { props }) => {
        console.log("handle edit account details submission")
    },
});


export default formikEnhancer(SubmitCashout);