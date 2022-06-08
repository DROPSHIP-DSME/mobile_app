import React, { useRef, useState, useEffect } from 'react';
import {
    Text, View, TouchableOpacity,
    Image, TextInput, ImageBackground,
    ScrollView, Alert,
    FlatList, StatusBar,
    KeyboardAvoidingView, Platform,
    Keyboard
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { Colors, CommonStrings } from '../../common'
import ImageIcons from '../../common/ImageIcons'
import InputField from '../../components/forms/inputField';
import { RoundedButton } from '../../components/forms/button';
import { phoneRegExp } from '../../services/helper';
import DropdownField from '../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../components/modals/Loader';
import { RadioButton, Provider, Modal, Portal, Button, } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Footer3 from '../../screens/auth/Footer3';
import Shopheader from '../../screens/auth/Shopheader';

const ProductStore = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    const shopId = props?.route?.params?.shopId;
    const shopName = props?.route?.params?.shopName;
    // Local states
    const [checked, setChecked] = React.useState('first');

    const [visible, setVisible] = React.useState(false);
    const [starCount, setstarCount] = useState(3);

    const [Paypal, onChangePaypal] = React.useState("Paypal");
    const [Debit, onChangeDebit] = React.useState("Debit Card");

    const [wayToContact, setWayToContact] = useState("Phone");
    const [wayToContactList, setWayToContactList] = useState([
        {
            label: "Phone",
            value: "Phone"
        },
        {
            label: "Email",
            value: "Email"
        }
    ]);
    useEffect(() => {
        props.shopproduct(shopId);
        props.shopsellcount(shopId);
    }, [])


    const [showclassName, setshowclassName] = useState("#B80000");
    const handleScroll = (pageYOffset) => {
        if (pageYOffset > 0) {
            setshowclassName('#B80000');
        } else {
            setshowclassName('#B80000');
        }
    }
    const openpopup = () => {
        setVisible(true)

    }
    const closepopup = () => {
        setVisible(false)
    }

    const ratingCompleted = (ratingdata) => {
        console.log('rating', ratingdata)
        if (ratingdata != "" && ratingdata != undefined) {
            setstarCount(ratingdata)
        }

    }

    const containerStyle = { backgroundColor: 'white', padding: '5%', marginHorizontal: '5%', alignItems: 'center' };


    const DATA = [
        {
            height: 30,
            width: 30,
            image: ImageIcons.twit,
        },
        {
            height: 29.82,
            width: 30,
            image: ImageIcons.fb,
        },
        {
            height: 30,
            width: 30,
            image: ImageIcons.insta,
        },
        {
            height: 30,
            width: 30,
            image: ImageIcons.whatsapp,
        },
        {
            height: 30,
            width: 30,
            image: ImageIcons.mail,
        },
        {
            height: 25,
            width: 25,
            image: ImageIcons.email,
        },


    ];
    const renderItem = ({ item }) => {

        return (
            <View style={styles.maincartviewshop}>
                <TouchableOpacity onPress={() => { props.navigation.navigate("NameStore", { productId: item._id, shopId: shopId, userType: 'shopside' }) }}>
                    <View >
                        <Image source={{ uri: item.productImage }} style={styles.jeansimgshop} />
                        <View>
                            <Text style={styles.boldproduct}>{item.productName}</Text>
                            <Text style={styles.salestext}>${item.productPrice}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
            <StatusBar backgroundColor={showclassName} barStyle="dark-content" translucent={true} />
            <Shopheader />

            <View style={{ flex: 1, paddingTop: '5%', backgroundColor: '#ffffff' }}>
                <View style={{ flexDirection: 'row', marginTop: '2%' }}>
                    <Text style={styles.storetextname}>{shopName}</Text>
                </View>
                <ScrollView keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#ffffff' }} >
                    <View >
                        <View >
                            {props?.getshopproductlist == false ?
                                <View style={styles.bagimageView}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={styles.searchproducttext}>Products</Text>
                                    </View>

                                </View>
                                :
                                <View style={styles.bagimageView}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={styles.searchproducttext}>Products</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '30%', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Image source={ImageIcons.baga} style={styles.bagimage} />
                                            <Text style={[styles.fourtytext, { marginLeft: '5%' }]}>{props?.getshopproductlist?.length}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Image source={ImageIcons.redcart1} style={styles.bagimage} />
                                            <Text style={[styles.fourtytext, { marginLeft: '5%' }]}>{props?.getshopselllist?.topsellingproduct}</Text>
                                        </View>
                                    </View>
                                </View>
                            }
                        </View>



                        <View style={{ marginHorizontal: '2%', marginBottom: '25%' }}>
                            <FlatList
                                data={props?.getshopproductlist || []}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                numColumns={2}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
            <Footer3 onSelection="4" />

        </KeyboardAvoidingView>
    )
}



export default ProductStore