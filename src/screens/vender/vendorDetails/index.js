import React, { useEffect, useState } from 'react';
import { Text, Image, View,   ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { CommonActions } from '@react-navigation/native';
import { ImageIcons, Colors } from '../../../common'
import styles from './styles';
import { RoundedButton } from '../../../components/forms/button';

const VendorDetails = (props) => {
    // get data from route params
    const vendorDetail = props.route?.params && props.route?.params?.vendorDetail;
    //Local states
    const [addressLatLng, setAddressLatLng] = useState({
        latitude: 27.773056,
        longitude: -82.639999,
    })

    useEffect(() => {
        const vendorDetail = props.route?.params && props.route?.params?.vendorDetail;
        if (vendorDetail && vendorDetail !== null) {
            setAddressLatLng({
                latitude: vendorDetail?.location?.coordinates[1] || 27.773056,
                longitude: vendorDetail?.location?.coordinates[0] || -82.639999,
            })
        }
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
        
            <ScrollView >
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    loadingEnabled={true}
                    loadingIndicatorColor={Colors.GREEN}
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
                <View style={styles.bottomContainer}>
                    <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                        <Text style={styles.headingText}>{vendorDetail?.businessName}</Text>
                    </View>
                    <View>
                        <LabelView title="Address:" subtitle={vendorDetail?.businessAddress || "-"} />
                        <LabelView title="Contact Person:" subtitle={vendorDetail?.fullName || "-"} />
                        <LabelView title="Phone Number:" subtitle={`${vendorDetail.countryCode}-${vendorDetail?.phone}` || "-"} />
                        <LabelView title="Email Address:" subtitle={vendorDetail?.email || "-"} />
                    </View>
                    <View style={{ marginTop: '10%', paddingHorizontal: '22%' }}>
                        <RoundedButton
                            text="Track Earning"
                            onPress={() => {
                                props.navigation?.dispatch(
                                    CommonActions.reset({
                                        index: 0,
                                        routes: [{ name: "Earning" }],
                                    })
                                );
                            }}
                            customStyle={{ marginHorizontal: 10 }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const LabelView = ({ title, subtitle }) => {
    return (
        <View style={styles.labelView}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}

export default VendorDetails;