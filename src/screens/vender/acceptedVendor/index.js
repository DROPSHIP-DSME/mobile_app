import React from 'react';
import { Text, Image, View,   ScrollView } from 'react-native';
import { ImageIcons } from '../../../common'
import styles from './styles';
import { RoundedButton } from '../../../components/forms/button';
import Loader from '../../../components/modals/Loader';

const AcceptedVendor = (props) => {

    // get data from route params
    const { requestVendorDetail } = props.route?.params;

    // Accept vendor request submission
    const acceptVendorRequest = async () => {
        let request = {
            "vendor": requestVendorDetail?._id
        }
        props.acceptVendor(request, props.navigation)
    }

    return (
        <View style={styles.root}>
            
            <ScrollView >
                <View style={styles.container}>
                    <View style={{ marginTop: 20 }}>
                        <LabelView title="Business Name:" subtitle={requestVendorDetail?.businessName || "-"} />
                        <LabelView title="Fullname:" subtitle={requestVendorDetail?.fullName || "-"} />
                        <LabelView title="Email:" subtitle={requestVendorDetail?.email || "-"} rightIcon={ImageIcons.envelopeIcon} />
                        <LabelView title="Phone:" subtitle={requestVendorDetail?.phone || "-"} rightIcon={ImageIcons.callIcon} />
                        <LabelView title="How would you like to be contacted: Email:" subtitle={requestVendorDetail?.contactType || "-"} />
                    </View>
                    <View style={{ paddingHorizontal: '25%', marginTop: '15%' }}>
                        <RoundedButton
                            text="Done"
                            onPress={() => acceptVendorRequest()}
                            customStyle={{ marginHorizontal: 10 }}
                        />
                    </View>
                </View>
            </ScrollView>
            {props.acceptVendorLoader && <Loader isVisible={props.acceptVendorLoader} />}

        </View>
    )
}

const LabelView = ({ title, subtitle, rightIcon }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={styles.labelView}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            {rightIcon &&
                <View>
                    <Image source={rightIcon} style={styles.imgIcon} />
                </View>
            }
        </View>
    )
}

export default AcceptedVendor;