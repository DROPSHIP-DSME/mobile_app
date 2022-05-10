import React,{forwardRef} from 'react';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Colors } from '../../../common';
const InputField2 = ({
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
      <Text style={{ ...styles.title, color: Theme == 'black' ? Colors.white : Colors.black }}>{title}</Text>
      <View
        style={{
          ...styles.inputContainer2,
          backgroundColor: Theme == 'black' ? Colors.WHITE : Colors.lightblack,
          borderColor: Theme == 'white' ? Colors.gray : undefined,
          borderWidth: Theme == 'white' ? 1 : 0
        }}>
        <TextInput
          ref={myref}
          style={{
            ...styles.input2,
            color: Theme == 'black' ? Colors.white : Colors.lightblack,
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

export default InputField2;
