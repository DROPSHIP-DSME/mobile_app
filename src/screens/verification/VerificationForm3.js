import React, { useState, useRef } from 'react';
import { Text, View,   Image, Dimensions, Platform, ImageBackground, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import ImagePicker from 'react-native-image-crop-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import { Colors, ImageIcons, CommonStrings } from '../../common';
import { LinkButton, RoundedButton } from '../../components/forms/button';
import styles from './styles';
const { width, height } = Dimensions.get('window');
import Loader from '../../components/modals/Loader';
import { openSettings } from 'react-native-permissions';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { checkPermision, openPermissionSettings } from '../../services/permission';


const VerificationForm3 = (props) => {
    // References
    const cameraRef = useRef(null);

    // Local states
    const [billImgPath, setBillImgPath] = useState("");
    const [retakeFlag, setRetakeFlag] = useState(false);
    const [fromGallery, setFromGallery] = useState(false);

    // Select/Capture utility bill image
    const takePicture = async () => {
        let cameraPermission = await checkPermision("camera");
        if (cameraPermission) {
            try {
                setBillImgPath("");
                setFromGallery(false);
                setRetakeFlag(!retakeFlag);
                if (cameraRef) {
                    const options = {
                        quality: 0.5,
                        base64: true,
                        width: 720,
                        height: 906
                    };
                    const data = await cameraRef.current.takePictureAsync(options);
                    // console.log("image data===", data?.uri);
                    ImagePicker.openCropper({
                        path: data.uri,
                        width: 720,
                        height: 906
                    }).then(image => {
                        if (image?.path) {
                            setFromGallery(false);
                            setBillImgPath(image.path || data.uri);
                        }
                    }).catch((error) => {
                        console.log("Error in image cropping,", error)
                        setBillImgPath(data?.uri);
                    })
                }

            } catch (error) {
                setBillImgPath("");
                setFromGallery(false);
                setRetakeFlag(false);
                openPermissionSettings(cameraPermission);
            }
        } else {
            openPermissionSettings(cameraPermission);
        }
    };

    const selectPhoto = async () => {
        let options = {
            mediaType: "photo",
            quality: 0.5,
            maxWidth: 720,
            maxHeight: 906
        }
        launchImageLibrary(options, (res) => {
            console.log("image====>", res?.uri)
            if (res?.uri) {
                ImagePicker.openCropper({
                    path: res?.uri,
                    width: 720,
                    height: 906
                }).then(image => {
                    console.log("image====>", image?.path)
                    if (image?.path) {
                        setFromGallery(true);
                        setRetakeFlag(!retakeFlag);
                        setBillImgPath(image.path || res?.uri);
                    }
                }).catch((error) => {
                    console.log("Error in image cropping,", error)
                    setBillImgPath(res?.uri);
                })

            }
        })
    }

    // Utility bill request submission
    const handleSubmitBill = () => {
        // props.navigation.navigate("VerificationForm4")
        // return;
        let { selectedBill } = props.route?.params;
        if (!selectedBill || selectedBill === "" || selectedBill === null) {
            Alert.alert(CommonStrings.AppName, "Please select your utitlity bill")
        } else if (!billImgPath || billImgPath === "" || billImgPath === null) {
            Alert.alert(CommonStrings.AppName, "Please select your utitlity bill image")
        } else {
            let fileName = billImgPath.split('/').pop();
            let mimeType = billImgPath.split('.').pop();
            let file = {
                'uri': billImgPath,
                'type': `image/${mimeType}`,
                'name': fileName
            }
            const formData = new FormData();
            formData.append('utilityBill', selectedBill);
            formData.append('utilityBillFile', file);
            props.uploadStoreUtilityBill(formData, props.navigation)
        }
    }

    return (
        <View style={styles.cameraContainer}>
            
            {/* <View style={{ position: 'absolute', top: hp('7%'), right: 50, zIndex: 1 }}>
                <Text
                    style={{ color: Colors.BLUE }}
                    onPress={() => props.navigation.navigate("VerificationForm4")}
                >
                    Skip
                </Text>
            </View> */}
            {(billImgPath && retakeFlag) || (billImgPath && fromGallery) ?
                <ImageBackground source={ImageIcons.cropImageBg} style={styles.preview}>
                    <View style={styles.overlay}>
                        <Image source={{ uri: billImgPath }} style={{
                            width: width - 80,
                            height: Platform.OS === "ios" ? height * 0.6 : height * 0.65,
                            resizeMode: 'contain'
                        }} />
                    </View>
                </ImageBackground> :
                <RNCamera
                    ref={ref => {
                        cameraRef.current = ref;
                    }}
                    style={styles.preview}
                    flashMode={RNCamera.Constants.FlashMode.auto}
                    captureAudio={false}
                    onMountError={(error) => console.log("RNCamera=2=>", error)}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                />
            }
            <View style={{ flex: 0.4, backgroundColor: Colors.WHITE, alignItems: 'center' }}>
                <View style={styles.subTitle}>
                    <Text style={{ fontSize: 15, textAlign: 'center' }}>Make sure the address in the utility bill is visible. </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={[styles.buttonContainer, { flexDirection: 'row', alignSelf: 'center' }]}>
                        {
                            retakeFlag &&
                            <View style={{ width: '50%', marginRight: -20 }}>
                                <LinkButton
                                    text="Retake Photo"
                                    textStyle={{ color: Colors.BLUE }}
                                    customStyle={{ paddingVertical: 15 }}
                                    onPress={() => setRetakeFlag(!retakeFlag)}
                                />
                            </View>
                        }
                        <View style={{ width: '50%', marginLeft: -15, paddingVertical: 15 }}>
                            <RoundedButton
                                text={retakeFlag ? "Confirm" : "Take Photo"}
                                onPress={() => retakeFlag ? handleSubmitBill() : takePicture()}
                            />
                        </View>
                    </View>
                    {
                        !retakeFlag &&
                        <View style={{ width: wp('65%'), marginLeft: -15 }}>
                            <RoundedButton
                                text={"Choose from Gallery"}
                                isOutline={true}
                                onPress={() => selectPhoto()}
                            />
                        </View>
                    }
                </View>
            </View>
            <Loader isVisible={props?.uploadUtilitybillLoader} />
        </View >
    );
}

export default VerificationForm3;