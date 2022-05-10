import React from 'react';
import Modal from 'react-native-modal';

const InsightFilterModal = ({ isVisible, childComponent }) => {

    return (
        <Modal 
        isVisible={isVisible}
        style={{justifyContent:'center'}}
        >
            {childComponent}
        </Modal>
    )
}

export default InsightFilterModal;