import React, { useEffect, useRef, useState } from 'react';
import { Text, Image, View, SafeAreaView, ScrollView, Alert,TextInput,   TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { withFormik } from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';
import moment from 'moment';
import * as Yup from 'yup';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles';
import { Colors, ImageIcons, CommonStrings } from '../../common'
import InputField from '../../components/forms/inputField';
import { LinkButton, LocationInputButton, RoundedButton } from '../../components/forms/button';
import Loader from '../../components/modals/Loader';

const AddCoupon = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
        setFieldValue
    } = props;

    //Reference
    const titleRef = useRef();
    const descriptionRef = useRef();
    const discountRef = useRef();

    // Local states
    const [expireDate, setExpireDate] = useState(moment().add(30, 'day'));
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [couponId, setCouponId] = useState();
    const [couponStatus, setCouponStatus] = useState("Draft");

    useEffect(() => {
        if (props?.route?.params && props?.route?.params?.couponData) {
            let couponData = props?.route?.params?.couponData;
            setCouponId(couponData?._id);
            values.couponTitle = couponData?.title;
            values.description = couponData?.description;
            values.discount = String(couponData?.discount);
            let fileName = couponData?.couponImage?.split('/').pop();
            let mimeType = couponData?.couponImage?.split('.').pop();
            let file = {
                'uri': couponData?.couponImage,
                'type': `image/${mimeType}`,
                'name': fileName
            }
            setFieldValue("couponImage", file);
            values.couponImage = file;
            values.dateOfExpiration = moment(couponData?.dateOfExpiration).toDate();
            setFieldValue("dateOfExpiration", moment(couponData?.dateOfExpiration).toDate());
            setCouponStatus(couponData?.status);
        }else{
            values.dateOfExpiration =moment().add(30, 'day').toDate();
            setFieldValue("dateOfExpiration", moment().add(30, 'day').toDate());
        }
    }, [])

    // Change expiration date
    const onChangeDate = (dateTime) => {
        if (dateTime?.nativeEvent?.timestamp) {
            setShowDatePicker(false)
            let timestamp = dateTime?.nativeEvent?.timestamp;
            setExpireDate(timestamp)
            setFieldValue("dateOfExpiration", timestamp);
        } else {
            setShowDatePicker(false)
        }
    }

    // Select coupon image
    const onSelectImage = () => {
        let options = {
            mediaType: "photo",
            quality: 0.5,
            maxWidth:750,
            maxHeight:350
        }
        launchImageLibrary(options, (res) => {
            if (res?.uri) {
                let fileName = res?.uri?.split('/').pop();
                let mimeType = res?.uri?.split('.').pop();
                let file = {
                    'uri': res.uri,
                    'type': `image/${mimeType}`,
                    'name': fileName
                }
                setFieldValue("couponImage", file);
            }
        })
    }

    // Add Coupon request submission
    const handleAddCouponSubmit = (couponStatus) => {
        Keyboard.dismiss();
        if (errors.couponTitle) {
            Alert.alert(CommonStrings.AppName, errors.couponTitle)
        } else if (errors.description) {
            Alert.alert(CommonStrings.AppName, errors.description)
        } else if (errors.discount) {
            Alert.alert(CommonStrings.AppName, errors.discount)
        } else if (errors.couponImage) {
            Alert.alert(CommonStrings.AppName, "Please select a coupon image")
        } else {
            const formData = new FormData();
            formData.append("title", values.couponTitle)
            formData.append("description", values.description)
            formData.append("discount", Number(values.discount))
            formData.append("dateOfExpiration", moment().add(30,'day').toDate().toISOString())
            formData.append("couponImage", values.couponImage)
            formData.append("status", couponStatus)
            // formData.append("isEditMode", couponStatus === "Published" ? true : false) // 'Draft', 'Published', 'Deactivated' 
            props.createNewCoupon(formData, props.navigation, couponId);
        }
    }

    return (
     <View>
      
               <View style={{flex:1,backgroundColor:'#eb5757'}}> 
                     <View > 
                           <Text style={{fontSize:16,paddingLeft:'20%'}}>To add goods to store for distribution,you {"\n"}              need to create a store first </Text>
                
                     </View>
                     <View style={{marginLeft:'38%',marginTop:'10%'}}>
                           <Image source={ImageIcons.cam} style={{height:'40%',width:'40%',borderRadius:70}} />
                     </View>
                     <View style={{marginTop:'-28%'}}> 
                           <Text style={{fontSize:16,paddingLeft:'5%',fontWeight:'bold'}}>Enter store name</Text>
                     </View>
                     <View style={{marginLeft:'5%',marginRight:'5%'}}>
                            <TextInput style = {{borderWidth:1,borderRadius:4}}
                              underlineColorAndroid = "transparent"
                              placeholder = "Email"
                              placeholderTextColor = "#1D1D1D"
                              autoCapitalize = "none"
                              />
                     </View>
                       <View style={{marginTop:'-28%'}}> 
                           <Text style={{fontSize:16,paddingLeft:'5%',fontWeight:'bold'}}>Enter store name</Text>
                     </View>
                    
               </View>
               </View> 


    )
}

const formikEnhancer = withFormik({
    // validateOnMount: true,
    validationSchema: Yup.object().shape({
        couponTitle: Yup.string().required('Please enter coupon title'),
        description: Yup.string().required('Please enter description'),
        discount: Yup.string().required('Please enter discount'),
        dateOfExpiration: Yup.date(moment().add(30, 'day')).required('Please enter expiration date'),
        couponImage: Yup.object().required()
    }),
    mapPropsToValues: (props) => {
        return {
            couponTitle: '',
            description: '',
            discount: '',
            dateOfExpiration: new Date(),
            couponImage: null
        };
    },
    handleSubmit: (payload, { props }) => {
        //  console.log("payload===>",payload);
    },
});


export default formikEnhancer(AddCoupon);