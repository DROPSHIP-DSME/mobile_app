import React, { useEffect, useRef, useState } from 'react';
import { Text, Image,
 View, SafeAreaView, ScrollView,
 Alert,  NativeBaseProvider,
  TouchableOpacity, KeyboardAvoidingView, 
 Platform, Keyboard } from 'react-native';
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

const footer = (props) => {

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

     const [selected, setSelected] = React.useState(1);

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
        <NativeBaseProvider>
      <Box flex={1} bg="white" safeAreaTop>
        <Center flex={1}></Center>
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(0)}>
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 0 ? 'home' : 'home-outline'}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Icon
                mb="1"
                as={<MaterialIcons name="search" />}
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Search
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon
                mb={1}
                as={
                  <MaterialCommunityIcons
                    name={selected === 2 ? 'cart' : 'cart-outline'}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize={12}>
                Cart
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 3 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(3)}
          >
            <Center>
              <Icon
                mb={1}
                as={
                  <MaterialCommunityIcons
                    name={selected === 3 ? 'account' : 'account-outline'}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
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


export default formikEnhancer(footer);