import React from 'react'
import { View, Image, Text } from 'react-native';
import styles from './styles'
import { ImageIcons } from '../../common'

const VerificationHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <HeaderItem id={"reviews"} image={ImageIcons.noteIcon} text={"Review listed information"} />
            <HeaderItem id={"photo_bill"} image={ImageIcons.listIcon} text={"Photo of store's utility bill"} />
            <HeaderItem id={"photo_store"} image={ImageIcons.homeIcon} text={"Any photo of your store"} />
        </View>
    )
}

const HeaderItem = ({ id, image, text }) => {
    return (
        <View key={id} style={{ width: '32%', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={image} style={styles.headerItemImg} />
            <Text style={styles.headerItemText}>{text}</Text>
        </View>
    )
}

export default VerificationHeader;
