import React, { useEffect, useState, useRef } from 'react';
import { Text, Image, View,   TouchableOpacity, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Colors, ImageIcons,CommonStrings } from '../../../common'
import { FloatingButton } from '../../../components/forms/button';
import { checkPermision, openPermissionSettings, requestPermisison } from '../../../services/permission';
import styles from './styles';
import { MAP_API_KEY } from '../../../services/helper';

const SearchLocation = (props) => {

    //References
    const searchRef = useRef();

    // Local states
    const [addressLatLng, setAddressLatLng] = useState({
        latitude: props?.route?.params && props.route?.params?.location?.lat || 27.773056,
        longitude: props?.route?.params && props.route?.params?.location?.lng || -82.639999,
    })
    const [isClear, setIsClear] = useState(false);

    useEffect(() => {
        checkPermission()
    }, [])

    // check location permission
    const checkPermission = async () => {
        let locationPermission = await checkPermision("location");
        if (!locationPermission) {
            let granted = await requestPermisison("location");
            openPermissionSettings(granted);
        }
    }

    return (
        <View>
           
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: addressLatLng?.latitude || 27.773056,
                        longitude: addressLatLng?.longitude || -82.639999,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    <Marker
                        coordinate={addressLatLng}
                    // title={marker.title}
                    // description={marker.description}
                    >
                        <View style={{ width: 30, height: 30 }}>
                            <Image source={ImageIcons.locationIcon} style={{ width: 30, height: 30 }} />
                        </View>
                    </Marker>
                </MapView>
                <GooglePlacesAutocomplete
                    placeholder='Location'
                    fetchDetails={true}
                    ref={(ref) => searchRef.current = ref}
                    onPress={(data, details = null) => {
                        let { changeAddress, getLocation } = props.route?.params;
                        if (changeAddress) {
                            changeAddress(`${data?.structured_formatting?.main_text} ${data?.structured_formatting?.secondary_text || ""}`);
                        }
                        if (getLocation) {
                            setAddressLatLng({
                                latitude: details?.geometry?.location?.lat || 27.773056,
                                longitude: details?.geometry?.location?.lng || -82.639999,
                            })
                            getLocation(details?.geometry?.location)
                        }
                    }}
                    textInputProps={{
                        placeholderTextColor: Colors.LIGHT_GREY,
                        onChangeText: (text) => { String(text).length >= 1 ? setIsClear(true) : setIsClear(false)}
                    }}
                    query={{
                        key: MAP_API_KEY,
                        language: 'en',
                    }}
                    styles={{
                        textInputContainer: styles.inputContainer,
                        textInput: styles.textInput,
                        predefinedPlacesDescription: {
                            color: '#1faadb',
                        },
                        container: styles.textContainer
                    }}
                    renderLeftButton={() =>
                        <View style={styles.leftIconContainer}>
                            <TouchableOpacity
                                onPress={() => props.navigation.goBack()}
                                style={styles.backIcon}
                            >
                                <Image source={ImageIcons.backIcon} style={{ width: 20, height: 20 }} />
                            </TouchableOpacity>
                        </View>
                    }
                    renderRightButton={() =>
                        <TouchableOpacity onPress={() => {
                            if (isClear) {
                                searchRef.current?.clear();
                                setIsClear(false)
                            } else {
                                searchRef.current?.focus()
                            }
                        }} style={styles.rightIconContainer}>
                            <Image source={isClear ? ImageIcons.closeIcon : ImageIcons.searchIcon} style={styles.searchIcon} />
                        </TouchableOpacity>
                    }
                />
            </View>
            <FloatingButton
                text="Confirm Address"
                onPress={() => props.navigation.goBack()}
            />
        </View>
    )
}

export default SearchLocation;