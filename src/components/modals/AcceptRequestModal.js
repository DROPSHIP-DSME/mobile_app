import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { Colors } from '../../common';
import { LinkButton, RoundedButton } from '../forms/button';
import styles from './styles'

const AcceptRequestModal = ({ isVisible, onAccept, onCancel, data }) => {

    return (
        <Modal
            isVisible={isVisible}
            animationIn='fadeIn'
            animationOut='fadeOut'
            style={{ justifyContent: 'center', alignItems: 'center', padding: 0, margin: 0 }}
        >
            <View style={styles.container}>
                <View style={styles.modalHeader}>
                    <Text style={styles.headerText}>Business Request</Text>
                </View>
                <View >
                    <View style={styles.rowSection}>
                        <Text style={styles.rowValueText}>{data?.fullName||"-"}</Text>
                    </View>
                    <RowItem lavel="Business Name" value={data?.businessName||"-"} isBlured={true} />
                    <RowItem lavel="Email Address" value={data?.email||"-"} isBlured={true} />
                    <RowItem lavel="Phone Number" value={data?.phone||"-"} isBlured={true} />
                </View>
                <View style={styles.bottons}>
                    <View style={{ marginTop: '10%', paddingHorizontal: '15%' }}>
                        <RoundedButton
                            text="Accept"
                            onPress={() => onAccept()}
                        />
                    </View>
                    <View style={{ marginTop: '2%' }}>
                        <LinkButton
                            text="Cancel"
                            onPress={() => onCancel()}
                            textStyle={{ color: Colors.BLUE, paddingBottom: 10 }}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const RowItem = ({ lavel, value, isBlured }) => {
    return (
        <View style={styles.rowSection}>
            <Text style={styles.rowLabelText}>{lavel}</Text>
            <Text style={isBlured ? styles.rowValueTextBlured : styles.rowValueText}>{value}</Text>
        </View>
    )
}

export default AcceptRequestModal;