import React, { useRef } from 'react';
import { Text, Image, TextInput, View, TouchableOpacity } from 'react-native';
import { Colors, ImageIcons } from '../../common'
import { Picker } from '@react-native-picker/picker';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import styles from './styles';

// const DropdownField2 = ({ data, customStyle, id, title, iconTintColor, theme, disable, textStyle, inputHeight, ...others }) => {
//     return (
//         <View style={styles.root} key={id}>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                 <Text style={[styles.title, { color: theme === "white" ? Colors.BLACK : Colors.WHITE }, textStyle]}>{title}</Text>
//             </View>
//             <View style={[styles.inputContainer,
//             {
//                 backgroundColor: theme === "white" ? Colors.WHITE : Colors.LIGHT_BLACK,
//                 borderColor: Colors.GREY,
//                 borderWidth: theme === "white" ? 1 : 0,
//                 height: inputHeight || 50
//             }]}>
//                 <Picker
//                     mode="dropdown"
//                     dropdownIconColor={theme === "white" ? Colors.WHITE : Colors.LIGHT_BLACK}
//                     style={[styles.input, { color: theme === "white" ? disable ? Colors.GREY : Colors.BLACK : Colors.WHITE }]} enabled={!disable || true}
//                     {...others}>
//                     {data && data?.map((item, index) => {
//                         return (
//                             <Picker.Item label={item.label} value={item.value} key={index} />
//                         )
//                     })}
//                 </Picker>
//                 <View style={styles.iconContainer}>
//                     <Image
//                         source={ImageIcons.downArrow}
//                         style={[styles.icon,{tintColor: theme === "white"?Colors.BLACK:Colors.WHITE }]}
//                     />
//                 </View>
//             </View>
//         </View>
//     )
// }

// export default DropdownField2;