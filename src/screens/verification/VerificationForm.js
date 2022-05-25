import React, { useRef, useState } from 'react';
import { Text, View, ScrollView, Alert,   LogBox, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { Colors, ImageIcons, CommonStrings } from '../../common'
import InputField from '../../components/forms/inputField';
import { LocationInputButton, RoundedButton } from '../../components/forms/button';
import { phoneRegExp } from '../../services/helper';
import VerificationHeader from './VerificationHeader';
import Loader from '../../components/modals/Loader';
import PhoneMaskInput from '../../components/forms/inputField/PhoneMaskInput';
import { useEffect } from 'react';
import CategorySearch from '../../components/forms/inputField/CategorySearch';

const VerificationForm = (props) => {
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
    const [businessTypeId, setBusinessTypeId] = useState();
    const [isScrollEnabled, setIsScrollEnabled] = useState(true);

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    useEffect(() => {
        if (props.storeAutofilInfo) {
            values.businessName = props?.storeAutofilInfo?.businessName;
            values.businessAddress = props?.storeAutofilInfo?.businessAddress || '';
            values.contactPerson = props?.storeAutofilInfo?.contactPerson || props?.storeAutofilInfo?.fullName || '';
            values.countryCode = props?.storeAutofilInfo?.countryCode;
            values.phoneNumber = props?.storeAutofilInfo?.phone;
            values.email = props?.storeAutofilInfo?.email;
            setCoordinate({
                lat: props?.storeAutofilInfo?.location?.coordinates[1],
                lng: props?.storeAutofilInfo?.location?.coordinates[0],
            })
            setBusinessType(props?.storeAutofilInfo?.businessType);
            setBusinessTypeId(props?.storeAutofilInfo?.businessType?._id);
        }
    }, [props.storeAutofilInfo])

    // Address location coordinates
    const getLocation = (coordinate) => {
        setCoordinate(coordinate);
    }

    // Create store request submission
    const handleLoginSubmit = () => {
        // props.navigation.navigate("VerificationForm2")
        // return;
        Keyboard.dismiss();
        if (errors.businessName) {
            Alert.alert(CommonStrings.AppName, errors.businessName)
        } else if (errors.businessAddress) {
            Alert.alert(CommonStrings.AppName, errors.businessAddress)
        } else if (errors.contactPerson) {
            Alert.alert(CommonStrings.AppName, errors.contactPerson)
        } else if (errors.phoneNumber) {
            Alert.alert(CommonStrings.AppName, errors.phoneNumber)
        } else if (errors.email) {
            Alert.alert(CommonStrings.AppName, errors.email)
        } else {
            let request = {
                "businessName": values.businessName,
                "businessAddress": values.businessAddress, //"5150 66th St N, Saint Petersburg, FL 33709-4602 ",
                "businessType":businessTypeId , //"60a8d6b899cb024d421cbb82"
                "contactPerson": values.contactPerson,
                "countryCode": values.countryCode,
                "phone": values.phoneNumber,
                "email": values.email,
                "latitude": coordinate?.lat || 27.773056,
                "longitude": coordinate?.lng || -82.639999,
            }
            props.createOrUpdateStore(request, props?.navigation)
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={80}
            style={styles.root}>
            
            <ScrollView keyboardShouldPersistTaps="handled" scrollEnabled={isScrollEnabled}>
                <View style={{ flex: 1, marginTop: '2%', marginBottom: 20 }}>
                    <VerificationHeader />
                    <View style={styles.subTitle}>
                        <Text style={{ fontSize: 15 }}> Please review information listed below </Text>
                    </View>
                    <InputField
                        id="businessName"
                        title="Name of Store"
                        value={values.businessName}
                        onChangeText={handleChange('businessName')}
                        theme="white"
                        placeholder={"Store Name"}
                        reference={bisinessnameRef}
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
                        onOpenLocationSearch={() => props.navigation.navigate("SearchLocation", { changeAddress: handleChange('businessAddress'), getLocation: getLocation, location: coordinate })}
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
                    />
                    <PhoneMaskInput
                        id="storePhone"
                        defaultValue={values.phoneNumber}
                        placeholder=""
                        defaultCode="US"
                        layout="second"
                        onCountryChange={handleChange('countryCode')}
                        onChangePhone={handleChange('phoneNumber')}
                        reference={phoneRef}
                    // theme="white"
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
                        onSubmitEditing={() => handleLoginSubmit()}
                    />
                    <View style={{ marginTop: '10%', paddingHorizontal: '22%' }}>
                        <RoundedButton
                            text="Next"
                            onPress={() => handleLoginSubmit()}
                        />
                    </View>
                </View>
            </ScrollView>
            <Loader isVisible={props?.createStoreLoader} />
        </KeyboardAvoidingView>
    )
}

const formikEnhancer = withFormik({
    // validateOnMount: true,
    validationSchema: Yup.object().shape({
        businessName: Yup.string().required('Please enter store name'),
        businessAddress: Yup.string().required('Please enter business address'),
        contactPerson: Yup.string().required('Please enter contact person name'),
        phoneNumber: Yup.string().required('Please enter phone number').matches(phoneRegExp, 'Phone number is not valid'),
        email: Yup.string().required('Please enter email address').email('Please enter a valid email address'),
        countryCode: Yup.string().required()
    }),
    mapPropsToValues: (props) => {
        return {
            businessName: '',
            businessAddress: '',
            contactPerson: '',
            phoneNumber: '',
            email: '',
            countryCode: '+1'
        };
    },
    handleSubmit: (payload, { props }) => {
    },
});


export default formikEnhancer(VerificationForm);