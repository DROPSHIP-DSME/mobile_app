import React from 'react';
import { Platform } from 'react-native';
import { check, checkMultiple, PERMISSIONS, RESULTS, requestMultiple, request } from 'react-native-permissions';
import { Linking } from 'react-native';
//check location permission
export async function checkLocationPermision() {
    // let result = await check(Platform.OS === "ios" ? PERMISSIONS.IOS.LOCATION_ALWAYS : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    let result = await request(Platform.OS === "ios" ? PERMISSIONS.IOS.LOCATION_ALWAYS: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    try {   
        switch (result) {
            case RESULTS.UNAVAILABLE:
                console.log('This feature is not available (on this device / in this context)');
                return false;
            case RESULTS.DENIED:
                if (Platform.OS == 'ios') {
                    Linking.openSettings()
                }
                console.log('The permission has not been requested / is denied but requestable');
                return false;
            case RESULTS.LIMITED:
                console.log('The permission is limited: some actions are possible');
                return false;
            case RESULTS.GRANTED:
                console.log('The permission is granted');
                return true;
            case RESULTS.BLOCKED:
                console.log('The permission is denied and not requestable anymore');
                return false;
        }
    } catch (error) {
        console.log("Error in permission")
    }
}

//check audio permission
export async function checkAudioPermission() {
    let result = await check(Platform.OS === "ios" ? PERMISSIONS.IOS.MICROPHONE : PERMISSIONS.ANDROID.RECORD_AUDIO);
    try {
        switch (result) {
            case RESULTS.UNAVAILABLE:
                console.log('This feature is not available (on this device / in this context)');
                return false;
            case RESULTS.DENIED:
                console.log('The permission has not been requested / is denied but requestable');
                return false;
            case RESULTS.LIMITED:
                console.log('The permission is limited: some actions are possible');
                return false;
            case RESULTS.GRANTED:
                console.log('The permission is granted');
                return true;
            case RESULTS.BLOCKED:
                console.log('The permission is denied and not requestable anymore');
                return false;
        }
    } catch (error) {
        console.log("Error in audio permission")
    }
}

//check camera permission
export async function checkCameraPermission() {
    let result = await check(Platform.OS === "ios" ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA);
    try {
        switch (result) {
            case RESULTS.UNAVAILABLE:
                console.log('This feature is not available (on this device / in this context)');
                return false;
            case RESULTS.DENIED:
                console.log('The permission has not been requested / is denied but requestable');
                return false;
            case RESULTS.LIMITED:
                console.log('The permission is limited: some actions are possible');
                return false;
            case RESULTS.GRANTED:
                console.log('The permission is granted');
                return true;
            case RESULTS.BLOCKED:
                console.log('The permission is denied and not requestable anymore');
                return false;
        }
    } catch (error) {
        console.log("Error in audio permission")
    }
}

export async function checkStoragePermission() {
    let result = await check(Platform.OS === "ios" ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA);
    try {
        switch (result) {
            case RESULTS.UNAVAILABLE:
                console.log('This feature is not available (on this device / in this context)');
                return false;
            case RESULTS.DENIED:
                console.log('The permission has not been requested / is denied but requestable');
                return false;
            case RESULTS.LIMITED:
                console.log('The permission is limited: some actions are possible');
                return false;
            case RESULTS.GRANTED:
                console.log('The permission is granted');
                return true;
            case RESULTS.BLOCKED:
                console.log('The permission is denied and not requestable anymore');
                return false;
        }
    } catch (error) {
        console.log("Error in audio permission")
    }
}

//request multiple permissions
export const requestMultiplePermisisons = async () => {
    return new Promise((resolve, reject) => {
        requestMultiple([
            Platform.OS === "ios" ? PERMISSIONS.IOS.MICROPHONE : PERMISSIONS.ANDROID.RECORD_AUDIO,
            Platform.OS === "ios" ? PERMISSIONS.IOS.LOCATION_ALWAYS : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            Platform.OS === "ios" ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
            Platform.OS === "ios" ? PERMISSIONS.IOS.MEDIA_LIBRARY : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
        ]).then((statuses) => {
            let permission = false;
            if (statuses[PERMISSIONS.IOS.MICROPHONE] == 'blocked' || statuses[PERMISSIONS.IOS.CAMERA] == 'blocked' || statuses[PERMISSIONS.IOS.LOCATION_ALWAYS] == 'blocked' || statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] == 'blocked') {
                Linking.openSettings();
            }
            if (statuses[Platform.OS === "ios" ? PERMISSIONS.IOS.MICROPHONE : PERMISSIONS.ANDROID.RECORD_AUDIO] === "granted") {
                permission = true
            }
            else if (statuses[Platform.OS === "ios" ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA] === "granted") {
                permission = true
            } else if (statuses[Platform.OS === "ios" ? PERMISSIONS.IOS.MEDIA_LIBRARY : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] === "granted") {
                permission = true
            } else if (statuses[Platform.OS === "ios" ? (PERMISSIONS.IOS.LOCATION_ALWAYS || PERMISSIONS.IOS.LOCATION_WHEN_IN_USE) : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] === "granted") {
                permission = true
            }
            resolve(permission)
        }).catch(error => {
            console.log("error permission==>", error);
        });
    })

}
