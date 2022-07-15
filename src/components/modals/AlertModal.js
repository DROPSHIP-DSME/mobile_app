import React, { useState } from 'react';
import {Text, View } from 'react-native';
import tw from 'twrnc';
import { CustomPicker } from 'react-native-custom-picker';
import { ChevronDownIcon } from "react-native-heroicons/solid";


import AwesomeAlert from 'react-native-awesome-alerts';


const AlertModal = ({showotherAlert, showalertmsg, onSelect}) => {
    return (
      <View>
         <AwesomeAlert
                show={showotherAlert}
                showProgress={false}
                title="DROPSHIP"
                message={showalertmsg}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={false}
                cancelText="Close"
                onCancelPressed={() => {
                    onSelect(false)
                }}
            />
      </View>
    );
}


export default AlertModal
