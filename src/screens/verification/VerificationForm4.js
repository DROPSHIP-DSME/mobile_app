import React, { useState, useRef } from 'react';
import { Text, View,   Alert, Image, Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { launchImageLibrary } from 'react-native-image-picker';
import { Colors, CommonStrings } from '../../common';
import { LinkButton, RoundedButton } from '../../components/forms/button';
import Loader from '../../components/modals/Loader';
import { openSettings } from 'react-native-permissions';
import { CommonActions } from '@react-navigation/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles';
import { checkPermision, openPermissionSettings } from '../../services/permission';
const { width, height } = Dimensions.get('window');

const VerificationForm4 = (props) => {
    // References
    const cameraRefStore = useRef(null);
    // Local states
    const [storeImgPath, setStoreImgPath] = useState("");
    const [retakeFlag, setRetakeFlag] = useState(false);
    const [fromGallery, setFromGallery] = useState(false);

    // Select/Capture utility bill image
    const takePicture = async () => {
        let cameraPermission = await checkPermision("camera");
        if (cameraPermission) {
            try {
                setStoreImgPath("");
                setFromGallery(false);
                setRetakeFlag(!retakeFlag);
                if (cameraRefStore) {
                    const options = { quality: 0.5, base64: true, width: 720, height: 906 };
                    const data = await cameraRefStore.current.takePictureAsync(options);
                    console.log(data.uri);
                    setFromGallery(false);
                    setStoreImgPath(data.uri);
                }
            } catch (error) {
                setStoreImgPath("");
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
            if (res?.uri) {
                setFromGallery(true);
                setRetakeFlag(!retakeFlag);
                setStoreImgPath(res?.uri);
            }
        })
    }

    // Upload image of Store's facade request submission
    const handleSubmitStoreImage = () => {
        if (!storeImgPath || storeImgPath === "" || storeImgPath === null) {
            Alert.alert(CommonStrings.AppName, "Please select your store image")
        } else {
            let fileName = storeImgPath.split('/').pop();
            let mimeType = storeImgPath.split('.').pop();
            let file = {
                'uri': storeImgPath,
                'type': `image/${mimeType}`,
                'name': fileName
            }
            console.log("file fedace", file)
            const formData = new FormData();
            formData.append('storeFacade', file);
            props.uploadStoreFacade(formData, props.navigation)
        }
    }

    return (
        <View style={styles.cameraContainer}>
           
            {/* <View style={{ position: 'absolute', top: hp('7%'), right: 50, zIndex: 1 }}>
                <Text
                    style={{ color: Colors.BLUE }}
                    onPress={() => {
                        props.navigation?.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: "CouponsStack" }],
                            })
                        );
                    }}
                >
                    Skip
                </Text>
            </View> */}
            {storeImgPath && retakeFlag ?
                <View style={styles.preview}>
                    <Image source={{ uri: storeImgPath }} style={{
                        width: width, height: height * 0.8,
                        resizeMode: 'contain'
                    }} />
                </View> :
                <RNCamera
                    ref={ref => {
                        cameraRefStore.current = ref;
                    }}
                    style={styles.preview}
                    flashMode={RNCamera.Constants.FlashMode.auto}
                    captureAudio={false}
                    onMountError={(error) => console.log("RNCamera==>", error)}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                />
            }
            <View style={{ flex: 0.4, backgroundColor: Colors.WHITE }}>
                <View style={styles.subTitle}>
                    <Text style={{ fontSize: 15, textAlign: 'center' }}>Take a photo of your store's facade </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={[styles.buttonContainer, { flexDirection: retakeFlag ? 'row' : 'column', alignItems: 'center' }]}>
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
                                onPress={() => retakeFlag ? handleSubmitStoreImage() : takePicture()}
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
            <Loader isVisible={props?.storeImageUploadLoader} />
        </View >
    );
}

export default VerificationForm4;