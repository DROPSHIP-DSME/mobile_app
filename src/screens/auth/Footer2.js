import React, { useRef, useState } from 'react';
import { Text, View,TouchableOpacity,Image,TextInput, ImageBackground, ScrollView, Alert,   KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { Colors, CommonStrings } from '../../common';
import ImageIcons from '../../common/ImageIcons';
import { HomeIcon } from "react-native-heroicons/solid";
import { TagIcon } from "react-native-heroicons/solid";
import { VideoCameraIcon } from "react-native-heroicons/solid";
import { ShoppingBagIcon } from "react-native-heroicons/solid";
import { PresentationChartLineIcon } from "react-native-heroicons/solid";
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import { phoneRegExp } from '../../services/helper';
import DropdownField from '../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../components/modals/Loader';
import { RadioButton ,Provider ,Modal, Portal, Button,} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {useTailwind} from 'tailwind-rn';

const Footer2 = (props) => {

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        onSelelection
    } = props;

    const navigation = useNavigation();
    //Reference
    const tailwind = useTailwind();
    // Local states
    return (
       <View style={styles.footerView}>
            <View style={styles.maincartviewfooter}>
                <TouchableOpacity onPress={() => navigation.navigate("watchlist")} >
                    {onSelelection==1 ?
                        <View style={tailwind('items-center')}>
                            <Text>
                               <HomeIcon color="red" fill="#B80000" size={24} />
                            </Text>
                             <Text style={tailwind('text-sm text-right font-normal text-red-700')}>Dashboard</Text>
                        </View>
                    :
                        <View style={tailwind('items-center')}>
                            <Text>
                               <HomeIcon color="red" fill="gray" size={24} />
                            </Text>
                             <Text style={tailwind('text-sm text-right font-normal text-gray-700')}>Dashboard</Text>
                        </View>
                    }
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Dashorder")} >
                    {onSelelection==2 ?
                      <View style={tailwind('items-center')}>
                          <Text>
                             <TagIcon color="red" fill="#B80000" size={24} />
                          </Text>
                           <Text style={tailwind('text-sm text-right font-normal text-red-700')}>Orders</Text>
                      </View>
                  :
                      <View style={tailwind('items-center')}>
                          <Text>
                             <TagIcon color="red" fill="gray" size={24} />
                          </Text>
                           <Text style={tailwind('text-sm text-right font-normal text-gray-700')}>Orders</Text>
                      </View>
                    }
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Dashlive") } >
                    {onSelelection==3 ?
                      <View style={tailwind('items-center')}>
                          <Text>
                             <VideoCameraIcon color="red" fill="#b80000" size={24} />
                          </Text>
                           <Text style={tailwind('text-sm text-right font-normal text-red-700')}>Go Live</Text>
                      </View>
                  :
                      <View style={tailwind('items-center')}>
                          <Text>
                             <VideoCameraIcon color="red" fill="gray" size={24} />
                          </Text>
                           <Text style={tailwind('text-sm text-right font-normal text-gray-700')}>Go Live</Text>
                      </View>
                    }
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Dashproduct")} >
                    {onSelelection==4 ?
                      <View style={tailwind('items-center')}>
                          <Text>
                             <ShoppingBagIcon color="red" fill="#b80000" size={24} />
                          </Text>
                           <Text style={tailwind('text-sm text-right font-normal text-red-700')}>Products</Text>
                      </View>
                  :
                      <View style={tailwind('items-center')}>
                          <Text>
                             <ShoppingBagIcon color="red" fill="gray" size={24} />
                          </Text>
                           <Text style={tailwind('text-sm text-right font-normal text-gray-700')}>Products</Text>
                      </View>
                    }
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Dashsale")} >
                    {onSelelection==5 ?
                      <View style={tailwind('items-center')}>
                          <Text>
                             <PresentationChartLineIcon color="red" fill="#b80000" size={24} />
                          </Text>
                           <Text style={tailwind('text-sm text-right font-normal text-red-700')}>Account</Text>
                      </View>
                  :
                      <View style={tailwind('items-center')}>
                          <Text>
                             <PresentationChartLineIcon color="red" fill="gray" size={24} />
                          </Text>
                           <Text style={tailwind('text-sm text-right font-normal text-gray-700')}>Account</Text>
                      </View>
                    }
                </TouchableOpacity>
            </View>
        </View>

    )
}
export default Footer2
