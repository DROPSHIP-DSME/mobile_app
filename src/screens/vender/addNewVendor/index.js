import React, { useRef, useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView, Alert,   KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { Colors, ImageIcons, CommonStrings } from '../../../common'
import InputField from '../../../components/forms/inputField';
import { LocationInputButton, RoundedButton } from '../../../components/forms/button';
import { phoneRegExp } from '../../../services/helper';
import Loader from '../../../components/modals/Loader'
import PhoneMaskInput from '../../../components/forms/inputField/PhoneMaskInput';
import CategorySearch from '../../../components/forms/inputField/CategorySearch';

const AddNewVendor = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
        setFieldValue
    } = props;

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const contactPersonRef = useRef();
    // Local states
    const [coordinate, setCoordinate] = useState();
    const [businessType, setBusinessType] = useState();
    const [businessTypeId, setBusinessTypeId] = useState("60a8d6b899cb024d421cbb82");
    const [vendorId, setVendorId] = useState(null);
    const [isScrollEnabled, setIsScrollEnabled] = useState(true);

    useEffect(() => {
        let vendorDetail = props?.route?.params && props?.route?.params?.vendorDetail || null;
        if (vendorDetail && vendorDetail !== null) {
            values.businessName = vendorDetail?.businessName;
            values.businessAddress = vendorDetail?.businessAddress, // '5150 66th St N, Saint Petersburg, FL 33709-4602 ';
                values.contactPerson = vendorDetail?.fullName || '';
            values.countryCode = vendorDetail?.countryCode;
            values.phoneNumber = vendorDetail?.phone;
            setFieldValue(vendorDetail?.phone);
            values.email = vendorDetail?.email;
            setVendorId(vendorDetail?._id);
            setCoordinate({
                lat: vendorDetail?.latitude || 27.773056,
                lng: vendorDetail?.longitude || -82.639999,
            })
            setBusinessType(vendorDetail?.businessType);
            setBusinessTypeId(vendorDetail?.businessType?._id);
        }
    }, [])

    // Address coordinates
    const getLocation = (coordinate) => {
        setCoordinate(coordinate);
    }

    // Add new business request submission
    const handleAddVendorSubmit = async () => {
        Keyboard.dismiss();
        if (errors.businessName) {
            Alert.alert(CommonStrings.AppName, errors.businessName)
        } else if (errors.businessAddress) {
            Alert.alert(CommonStrings.AppName, errors.businessAddress)
        } else if (!businessTypeId || businessTypeId === "" || businessTypeId === null) {
            Alert.alert(CommonStrings.AppName, "Please select a business type.")
        } else if (errors.contactPerson) {
            Alert.alert(CommonStrings.AppName, errors.contactPerson)
        } else if (errors.phoneNumber) {
            Alert.alert(CommonStrings.AppName, errors.phoneNumber)
        } else if (errors.email) {
            Alert.alert(CommonStrings.AppName, errors.email)
        } else {
            let request = {
                "email": values.email,
                "phone": values.phoneNumber,
                "contactPerson": values.contactPerson,
                "businessName": values.businessName,
                "countryCode": values.countryCode,
                "businessAddress": values.businessAddress, //values.businessAddress,
                "businessType":businessTypeId, // "60a8d6b899cb024d421cbb82"
                "latitude": coordinate?.lat, // 27.773056,
                "longitude": coordinate?.lng, // -82.639999
                "isNewRequest": false,
            }
            props.updateVendor(request, vendorId, props.navigation);
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios"  && "padding"}
            keyboardVerticalOffset={80}
            style={styles.root} >
        
            <ScrollView keyboardShouldPersistTaps="handled" scrollEnabled={isScrollEnabled} >
                <View style={{ flex: 1, marginTop: '2%', marginBottom: 20 }}>
                    <InputField
                        id="businessName"
                        title="Name of Business"
                        value={values.businessName}
                        onChangeText={handleChange('businessName')}
                        theme="white"
                        placeholder={"Business Name"}
                        reference={bisinessnameRef}
                    // onSubmitEditing={() => fullnameRef?.current?.focus()}
                    />
                    <LocationInputButton
                        id="businessAddress"
                        title="Business Address"
                        value={values.businessAddress}
                        onChangeText={handleChange('businessAddress')}
                        theme="white"
                        rightIcon={ImageIcons.locationIcon}
                        iconTintColor={Colors.DARK_GREY}
                        placeholder={"Location"}
                        onOpenLocationSearch={() => props.navigation.navigate("SearchLocation", { changeAddress: handleChange('businessAddress'), getLocation: getLocation })}
                    />
                    <CategorySearch
                        id="businessType"
                        title="Business Type"
                        defaultValue={businessType}
                        onSelectBusinessType={(id) => setBusinessTypeId(id)}
                        theme="white"
                        placeholder={"Business Type"}
                        setScrollingState={(values) => setIsScrollEnabled(values)}
                    />
                    <InputField
                        id="contactPerson"
                        title="Contact Person"
                        value={values.contactPerson}
                        onChangeText={handleChange('contactPerson')}
                        theme="white"
                        placeholder={"Fullname"}
                        reference={contactPersonRef}
                    // onSubmitEditing={() => phoneRef?.current?.focus()}
                    />
                    <PhoneMaskInput
                        id="vendorPhone"
                        defaultValue={values.phoneNumber}
                        placeholder=""
                        defaultCode="US"
                        layout="second"
                        onCountryChange={handleChange('countryCode')}
                        onChangePhone={handleChange('phoneNumber')}
                        reference={phoneRef}
                    // onSubmitEditing={() => emailRef?.current?.focus()}
                    />
                    <InputField
                        id="email"
                        title="Email Address"
                        value={values.email}
                        onChangeText={handleChange('email')}
                        keyboardType="email-address"
                        theme="white"
                        placeholder={"email@email.com"}
                        reference={emailRef}
                        onSubmitEditing={() => Keyboard.dismiss()}
                    />
                    <View style={{ marginTop: '10%', paddingHorizontal: '22%' }}>
                        <RoundedButton
                            text="Submit"
                            onPress={handleAddVendorSubmit}
                        />
                    </View>
                </View>
            </ScrollView>
            <Loader isVisible={props?.updateVendorLoader} />
        </KeyboardAvoidingView>
    )
}

const formikEnhancer = withFormik({
    // validateOnMount: true,
    validationSchema: Yup.object().shape({
        businessName: Yup.string().required('Please enter business name'),
        businessAddress: Yup.string().required('Please enter business address'),
        businessType: Yup.string().required('Please select business type'),
        contactPerson: Yup.string().required('Please enter contact person name'),
        phoneNumber: Yup.string().required('Please enter phone number').matches(phoneRegExp, 'Phone number is not valid'),
        email: Yup.string().required('Please enter email address').email('Please enter a valid email address'),
        countryCode: Yup.string().required()
    }),
    mapPropsToValues: (props) => {
        return {
            businessName: '',
            businessAddress: '',
            businessType: '',
            contactPerson: '',
            phoneNumber: '',
            email: '',
            countryCode: '+1',
        };
    },
    handleSubmit: (payload, { props }) => {

    },

});


export default formikEnhancer(AddNewVendor);