import React from 'react';
import { Alert, Platform } from 'react-native';
import { check, checkMultiple, PERMISSIONS, RESULTS, request, requestMultiple, openSettings } from 'react-native-permissions';
import { CommonStrings } from '../common';

//check permission
export async function checkPermision(permissionName) {
    let result;
    if (permissionName === "location") {
        result = await check(Platform.OS === "ios" ? PERMISSIONS.IOS.LOCATION_ALWAYS || PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else if (permissionName === "camera") {
        result = await check(Platform.OS === "ios" ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA);
    }
    try {
        if (result === RESULTS.GRANTED) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log("Error in permission")
    }
}

//request permissions
export const requestPermisison = async (permissionName) => {
    return new Promise((resolve, reject) => {
        let permission = false;
        if (permissionName === "location") {
            request(Platform.OS === "ios" ? PERMISSIONS.IOS.LOCATION_ALWAYS : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
                .then((status) => {
                    if (status === RESULTS.GRANTED) {
                        resolve(permission)
                    } else {
                        request(Platform.OS === "ios" ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
                            .then((status2) => {
                                if (status2 === RESULTS.GRANTED) {
                                    resolve(permission)
                                } else {
                                    resolve(false);
                                }
                            })
                    }
                })
        } else if (permissionName === "camera") {
            request(Platform.OS === "ios" ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA)
                .then((status2) => {
                    if (status2 === RESULTS.GRANTED) {
                        resolve(permission)
                    } else {
                        resolve(false);
                    }
                })
        }
    })
}

export const openPermissionSettings = (permission) => {
    if (!permission) {
        Alert.alert(
            CommonStrings.AppName,
            "Please grant all required permissions from settings",
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                { text: 'OK', onPress: () => { openSettings() } }
            ],
            { cancelable: false }
        );
    }
}

// export const requestMultiplePermisisons = async () => {
//     return new Promise((resolve, reject) => {
//         requestMultiple([
//             Platform.OS === "ios" ? PERMISSIONS.IOS.MICROPHONE : PERMISSIONS.ANDROID.RECORD_AUDIO,
//             Platform.OS === "ios" ? PERMISSIONS.IOS.LOCATION_ALWAYS : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
//             Platform.OS === "ios" ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
//         ]).then((statuses) => {
//             let permission = false;

//             if (statuses[Platform.OS === "ios" ? PERMISSIONS.IOS.MICROPHONE : PERMISSIONS.ANDROID.RECORD_AUDIO] === "granted") {
//                 permission = true
//             } else if (statuses[Platform.OS === "ios" ? PERMISSIONS.IOS.LOCATION_ALWAYS : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] === "granted") {
//                 permission = true
//             } else if (statuses[Platform.OS === "ios" ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA] === "granted") {
//                 permission = true
//             }
//             resolve(permission)
//         });
//     })
// }
