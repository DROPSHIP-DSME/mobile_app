import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import Modal from 'react-native-modal';
import { Colors } from '../../common';
import styles from './styles'

const Loader = ({ isVisible }) => {

    return (
        <Modal
            isVisible={isVisible}
            animationIn='fadeIn'
            animationOut='fadeOut'
            style={{ justifyContent: 'center', alignItems: 'center',padding:0,margin:0 }}
        >
            <View style={styles.loader}>
                <ActivityIndicator size="large" color={Colors.BLUE} />
            </View>
        </Modal>
    )
}

export default Loader;