import React, { useState } from "react";
import { View, StyleSheet,TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import PropTypes from "prop-types";
import { TextField } from "react-native-material-textfield";

const PasswordInputText = ({
  iconSize,
  iconColor,
  label,
  style,
  getRef,
  ...rest
}) => {
  const [eyeIcon, setEyeIcon] = useState("visibility-off");
  const [isPassword, setIsPassword] = useState(true);

  const changePwdType = () => {
    setEyeIcon(isPassword ? "visibility" : "visibility-off");
    setIsPassword((prevState) => !prevState);
  };

  const passReference = (ref) => {
    if (getRef) getRef(ref);
  };

  return (
    <View style={style}>
     <TextInput
        {...rest}
        ref={passReference}
        placeholder="Password"
        secureTextEntry={isPassword}
        style={{color:'#4D4D4D'}}
      />
      <Icon
        style={styles.icon}
        name={eyeIcon}
        size={iconSize}
        color={iconColor}
        onPress={changePwdType}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 7,
    right: 5,
    fontSize:20
  },
});

PasswordInputText.defaultProps = {
  iconSize: 25,
  label: "",
  iconColor: "#222222",
};

PasswordInputText.propTypes = {
  iconSize: PropTypes.number,
  label: PropTypes.string,
  iconColor: PropTypes.string,
};

export default PasswordInputText;
