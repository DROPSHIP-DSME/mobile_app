import React,{forwardRef} from 'react';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Colors } from '../../../common';
const InputField = ({
  passwordToogle,
  customStyle,
  id,
  title,
  rightIcon,
  Theme,
  myref,
  ...others
}) => {
  return (
    <View style={styles.root} key={id}>
      <Text style={{ ...styles.title, color: Theme == 'black' ? Colors.black : Colors.white }}>{title}</Text>
      <View
        style={{
          ...styles.inputContainer,
          backgroundColor: Theme == 'black' ? Colors.LIGHT_BLACK : Colors.white,
          borderColor: Theme == 'white' ? Colors.gray : undefined,
          borderWidth: Theme == 'white' ? 1 : 0
        }}>
        <TextInput
          ref={myref}
          style={{
            ...styles.input,
            color: Theme == 'black' ? Colors.LIGHT_BLACK : Colors.BLACK ,
          }}
          {...others}
        />
        {rightIcon && (
          <TouchableOpacity
            onPress={passwordToogle}
            style={styles.iconContainer}>
            <Image source={rightIcon} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputField;
