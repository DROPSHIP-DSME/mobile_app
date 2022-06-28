import React, { useRef, Component } from 'react';
import { Text, Image, TextInput, View, TouchableOpacity } from 'react-native';
import { Colors, ImageIcons } from '../../common'
import { Picker } from '@react-native-picker/picker';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import styles from './styles';

class DropdownField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: "Menu item 1"
        }
        this._menu = null
    }

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = (item) => {
        const { onValueChange } = this.props;
        this._menu.hide();
        // this.setState({ selectedItem: item })
        if (onValueChange) {
            onValueChange(item)
        }
    };

    showMenu = () => {
        this._menu.show();
    };

    render() {
        const { data, customStyle, id, title, iconTintColor, theme, textStyle, inputHeight, selectedValue, ...others } = this.props;
        return (
            <View style={styles.root} key={id}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[styles.title, { color: theme === "white" ? Colors.BLACK : Colors.WHITE }, textStyle]}>{title}</Text>
                </View>
                <TouchableOpacity
                    onPress={this.showMenu}
                    style={[styles.inputContainer,
                    {
                        backgroundColor: theme === "white" ? Colors.WHITE : Colors.LIGHT_BLACK,
                        borderColor: Colors.GREY,
                        borderWidth: theme === "white" ? 1 : 0,
                        height: inputHeight || 50
                    }]}>
                    <Menu
                        ref={(ref) => this._menu = ref}
                        button={<Text style={{ color: theme === "white" ? Colors.BLACK : Colors.WHITE }}>{selectedValue}</Text>}
                    >
                        {data && data?.map((item, index) => {
                            return (
                                <MenuItem onPress={() => this.hideMenu(item.value)} key={index} textStyle={{ color: Colors.BLACK }}>{item.label}</MenuItem>
                            )
                        })}
                    </Menu>
                    <View style={styles.iconContainer}>
                        <Image
                            source={ImageIcons.downArrow}
                            style={[styles.icon, { tintColor: theme === "white" ? Colors.GREY : Colors.WHITE }]}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

}


export default DropdownField;
