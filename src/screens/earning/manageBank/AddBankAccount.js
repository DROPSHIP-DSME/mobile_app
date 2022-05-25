import React, { useEffect, useRef, useState } from 'react';
import { Text, Image, View, SafeAreaView, ScrollView, Alert,  KeyboardAvoidingView,Platform } from 'react-native';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../cashOut/styles';
import { Colors,CommonStrings } from '../../../common'
import InputField from '../../../components/forms/inputField';
import { LocationInputButton, RoundedButton } from '../../../components/forms/button';
import Loader from '../../../components/modals/Loader';

const AddBankAccount = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    // Local states
    const [bankDetail, setBankDetail] = useState()

    useEffect(() => {
        let { bankDetail } = props?.route?.params;
        values.bankName = bankDetail?.bankName || '';
        setBankDetail(bankDetail)
    }, [])

    // Add bank account request
    const handleAccountSubmit = () => {
        if (errors.accountName) {
            Alert.alert(CommonStrings.AppName, errors.accountName)
        } else if (errors.bankName) {
            Alert.alert(CommonStrings.AppName, errors.bankName)
        } else if (errors.accountNumber) {
            Alert.alert(CommonStrings.AppName, errors.accountNumber)
        } else if (errors.accountNumber) {
            Alert.alert(CommonStrings.AppName, errors.accountNumber)
        } else if (errors.routingNumber) {
            Alert.alert(CommonStrings.AppName, errors.routingNumber)
        } else {
            const { loginCredentials } = props;

            let request = {
                "accountName": values?.accountName,
                "accountNumber": values?.accountNumber,
                "routingNumber": values?.routingNumber,
                "bank": bankDetail?._id,
                "user": loginCredentials?._id
            }
            props.addNewBankAccount(request, props.navigation)
            // props.updateBankAccount(request, props.navigation)
        }
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.root}>
            
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
                    <LocationInputButton
                        id="bankName"
                        title="Bank Name"
                        value={values.bankName}
                        onChangeText={handleChange('businessAddress')}
                        theme="white"
                        disabled={true}

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
                        iconTintColor={Colors.DARK_GREY}
                        keyboardType="numeric"
                    />
                    <View style={{ marginTop: '10%', paddingHorizontal: '20%' }}>
                        <RoundedButton
                            text="Add Account"
                            onPress={() => handleAccountSubmit()}
                        />
                    </View>
                </View>
            </ScrollView>
            {props.updateBankLoader &&
                <Loader isVisible={props.updateBankLoader} />
            }
            {props.addBankAccountLoader &&
                <Loader isVisible={props.addBankAccountLoader} />
            }
        </KeyboardAvoidingView>
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
    mapPropsToValues: (props) => {
        return {
            accountName: '',
            bankName: '',
            accountNumber: '',
            routingNumber: '',
        };
    },
    handleSubmit: (payload, { props }) => {
       
    },
});

export default formikEnhancer(AddBankAccount);