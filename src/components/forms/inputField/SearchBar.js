import React, { useRef } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { ImageIcons, Colors } from '../../../common'

const SearchBar = ({ ...others }) => {
  
  //References
  const searchRef = useRef();

  return (
    <View style={styles.vendorSearchContainer}>
      <TextInput
        ref={(ref) => searchRef.current = ref}
        style={styles.searchInput}
        {...others}
      />
      <TouchableOpacity onPress={() => searchRef.current?.focus()}>
        <Image source={ImageIcons.searchIcon} style={{ width: 20, height: 20, tintColor: Colors.GREY, resizeMode: 'contain', marginRight: 5 }} />
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar;