import React, { useRef, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions, FlatList, TextInput, StatusBar, ImageBackground, ScrollView, Alert, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
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
import CheckBox from '@react-native-community/checkbox';
import Footer3 from '../../screens/auth/Footer3';
import Shopheader from '../../screens/auth/Shopheader';
import styl from './styledrop';
import Moment from 'moment';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { TabBar, TabBarIndicator } from 'react-native-tab-view';
//import { NavigationContainer } from '@react-navigation/native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const Tab = createMaterialTopTabNavigator()

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


const upcoming = (props) => {

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;
    const channel = props?.route?.params?.channel;
    useEffect(() => {

        props.getalleventlist(1);
        props.getincomingtlist();
        props.getlivestreamrecap("6263d7ed034c210138cdb9b3");

        console.log("liststream-------->", props?.livestreamrecaplist)
    }, [])

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    // Local states
    const [checked, setChecked] = React.useState('first');

    const [visible, setVisible] = React.useState(false);

    const [tab1, settab1] = useState(true);
    const [tab2, settab2] = useState(false);
    const [tab3, settab3] = useState(false);

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
    const joinbroadcast = (itemid, startnow, eventtime) => {

        // if (startnow == true){
        props.navigation.navigate("Blurbackground", { isback: false, channel: itemid, isbroadcaster: false });
        //} else {
        // alert('Event will start at '+ moment(eventtime).format('MMM DD, hh:mm A'))
        //}
    }
    const openpopup = () => {
        setVisible(true)

    }
    const closepopup = () => {
        setVisible(false)
    }
    const containerStyle = { backgroundColor: 'white', padding: '7%', marginHorizontal: '5%', alignItems: 'center' };

    // Vendor request submission
    const name = [
        {
            title: 'Purchased by Anna.M ',
            date: 'jan 11, 2022',
            id: 'Order Number:',
            Number: 'GSHMU00S0004KH',
            status: 'Pending'
        },

        {
            title: 'Purchased by Anna.M ',
            date: 'jan 11, 2022',
            id: 'Order Number:',
            Number: 'GSHMU00S0004KH',
            status: 'Processing'

        },

        {
            title: 'Purchased by Anna.M ',
            date: 'jan 11, 2022',
            id: 'Order Number:',
            Number: 'GSHMU00S0004KH',
            status: 'Processing'

        },

        {
            title: 'Purchased by Anna.M ',
            date: 'jan 11, 2022',
            id: 'Order Number:',
            Number: 'GSHMU00S0004KH',
            status: 'Processing'

        }
    ]

    const DATA = [
        {
            text: "Beauty brands",
            text1: "$0",
            image: ImageIcons.jeans,

        },
        {
            text: "Beauty brands",
            text1: "$0",
            image: ImageIcons.jeans,

        },


    ];
    const data1 = {
        labels: ["USA", "Canada", "Mexico"], // optional
        data: [0.4, 0.6, 0.8]
    };

    const data2 = {
        labels: ["This stream stats", "Average stream stats",],
        datasets: [{ data: [490, 1000,] }]
    };

    const viewprofile = [

        {
            text: "Beauty brands",
            image: ImageIcons.profileimage,

        },
        {
            text: "Beauty brands",
            image: ImageIcons.profileimage,

        },
        {
            text: "Beauty brands",
            image: ImageIcons.profileimage,

        },
        {
            text: "Beauty brands",
            image: ImageIcons.profileimage,

        },
        {
            text: "Beauty brands",
            image: ImageIcons.profileimage,

        },
        {
            text: "Beauty brands",
            image: ImageIcons.profileimage,

        },

    ];
    const renderItemview = ({ item, index }) => {
        return (
            <View style={{ margin: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                    <Image source={item.image} style={{ width: 30, height: 30 }} />
                    <Text style={{ fontSize: 14, color: '#1A1A1A', fontWeight: '400', textAlign: 'center', marginHorizontal: 6 }}>Andrea Miller</Text>
                </View>
            </View>
        );
    }

    const rendermessage = ({ item }) => {
        console.log("message------->", item)
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 }} >
                <Image source={ImageIcons.profile} style={{ height: 36, width: 36, borderRadius: 20 }} />
                <View style={{ marginLeft: 5, width: 270 }}>
                    <Text style={{ color: '#666666', fontSize: 14, }} >{item.user}username</Text>
                    <Text style={{ color: '#000000', fontSize: 12, marginTop: 5 }} >{item.message}</Text>
                    <Text style={{ color: '#666666', fontSize: 12, marginTop: 5 }} >{Moment(item.createdAt).format("HH:mm A")}</Text>
                </View>
                <View>
                    <Image source={ImageIcons.messagebox} style={{ height: 30, width: 34, }} />
                </View>
            </View>
        );
    }


    const Data = ({ item }) => {
        console.log("itemdata------->", item)
        return (
            <TouchableOpacity style={{ marginHorizontal: 2, borderRadius: 10, backgroundColor: '#FFF', padding: 15, marginVertical: 5 }} onPress={() => props.navigation.navigate("Dashdetail", { orderNumber: item.orderNumber })}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View>
                        <Text style={{ fontSize: 14, color: '#1A1A1A', fontFamily: 'AvertaStd-SemiBold' }} >{item?.productId?.productName}</Text>
                        <Text style={{ color: '#808080', fontSize: 12, marginTop: 3 }} >{Moment(item.createdAt).format('MMM DD YYYY')}</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text style={{ color: '#2F80ED', fontSize: 12, backgroundColor: '#ADD8E6', paddingTop: 3, height: 25, width: 91, textAlign: 'center', borderRadius: 6, fontWeight: 'bold' }} >{item.status}</Text>
                    </View>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ width: 230, marginVertical: 3 }}>
                        <Text style={{ fontSize: 12, color: 'black', }} >Order Number:<Text style={{ fontSize: 12, color: '#2F80ED', fontWeight: 'bold', }} > {item.orderNumber}</Text></Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Dashdetail", { orderNumber: item.orderNumber })}>
                            <Image source={ImageIcons.dropDownIcon} style={{ width: 15, height: 15, marginRight: 5 }} />
                        </TouchableOpacity>

                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.registrationRoot}>
            <StatusBar backgroundColor={'#B80000'} barStyle="dark-content" translucent={true} />
            <Shopheader />
            <View style={{ marginTop: '7%', marginHorizontal: '3%' }}>
                <Text style={{ fontSize: 26, color: '#1A1A1A', fontFamily: 'AvertaStd-Bold' }}>Livestream Recap</Text>
            </View>

            <ScrollView keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{ backgroundColor: '#F5F5F5' }} >

                <View style={{ marginHorizontal: '3%', paddingTop: '2%', }}>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: '#999999', borderBottomWidth: 1, }}>
                        <TouchableOpacity onPress={() => { settab1(true); settab2(false); settab3(false); }} style={{ backgroundColor: '#f2f2f2', margin: '3%', borderColor: '#1A1A1A' }} >
                            {tab1 == false ?
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>Stats</Text>
                                :
                                <Text style={{ fontSize: 16, fontWeight: '800', fontFamily: "hinted-AvertaStd-Bold" }}>Stats</Text>
                            }
                        </TouchableOpacity >
                        <TouchableOpacity onPress={() => { settab1(false); settab2(true); settab3(false); }} style={{ backgroundColor: '#f2f2f2', margin: '3%' }}>

                            {tab2 == false ?
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>Orders(0)</Text>
                                :
                                <Text style={{ fontSize: 16, fontWeight: '800', fontFamily: "hinted-AvertaStd-Bold" }}>Orders(0)</Text>
                            }
                        </TouchableOpacity >
                        <TouchableOpacity onPress={() => { settab1(false); settab2(false); settab3(true); }} style={{ backgroundColor: '#f2f2f2', margin: '3%' }} >
                            {tab3 == false ?
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>Messages({props?.livestreamrecaplist?.geteventcomment?.length})</Text>
                                :
                                <Text style={{ fontSize: 16, fontWeight: '800', fontFamily: "hinted-AvertaStd-Bold" }}>Messages({props?.livestreamrecaplist?.geteventcomment?.length})</Text>
                            }
                        </TouchableOpacity >
                    </View>

                    {tab2 == true &&
                        <View style={{ height: '100%', width: '100%', backgroundColor: '#F5F5F5', padding: 10 }} >
                            <FlatList
                                data={props?.getinconeorderlist || []}
                                renderItem={Data}
                            />
                        </View>

                    }

                    {tab1 == true &&
                        <ScrollView>
                            <View style={{ backgroundColor: '#F5F5F5' }} >


                                <View style={{ backgroundColor: '#FFFFFF', padding: '4%', borderRadius: 10, marginTop: '4%', elevation: 3 }} >


                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                        <Text style={{ fontSize: 16, color: '#666666', fontWeight: '400', fontStyle: 'normal', fontFamily: 'SourceSansPro-Regular' }} >Title</Text>
                                        <Text style={{ fontSize: 16, color: 'black', fontWeight: '600', fontStyle: 'normal', fontFamily: 'SourceSansPro-SemiBold' }} >{props?.livestreamrecaplist?.getBrandDetails?.brandName}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }} >
                                        <Text style={{ fontSize: 16, color: '#666666', fontWeight: '400', fontStyle: 'normal', fontFamily: 'SourceSansPro-Regular' }}  >Date & Time</Text>
                                        <Text style={{ fontSize: 16, color: '#1A1A1A', fontStyle: 'normal', fontFamily: 'SourceSansPro-Regular' }} >{props?.livestreamrecaplist?.getBrandDetails?.createdAt}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }} >
                                        <Text style={{ fontSize: 16, color: '#666666', fontWeight: '400', fontStyle: 'normal', fontFamily: 'SourceSansPro-Regular' }} >Duration</Text>
                                        <Text style={{ fontSize: 16, color: '#1A1A1A', fontStyle: 'normal', fontFamily: 'SourceSansPro-Regular' }} >{props?.livestreamrecaplist?.getchannelAudiance?.EventDuration}</Text>
                                    </View>

                                </View>

                                {/*<View>
                                    <FlatList
                                        data={props?.getalleventdata || []}
                                        renderItem={renderItem}
                                        keyExtractor={item => item.id}
                                        showsHorizontalScrollIndicator={false}
                                        numColumns={2}
                                    />
                                </View>*/}

                                {/*<---------Summary------------>*/}

                                <View style={{ paddingVertial: '3%', margin: '3%', marginVertical: '5%' }}>
                                    <Text style={{ fontSize: 22, color: '#1A1A1A', fontWeight: '400', fontStyle: 'normal', fontFamily: 'AvertaStd-Semibold' }}>Summary</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: '3%' }}>
                                        <View>
                                            <Text style={{ fontSize: 22, color: '#1A1A1A', fontWeight: '400', fontStyle: 'normal', fontFamily: 'SourceSansPro-SemiBold', textAlign: 'center' }}>{props?.livestreamrecaplist?.getchannelAudiance?.audianceCount}</Text>
                                            <Text style={{ fontSize: 14, color: '#1A1A1A', fontWeight: '400', fontStyle: 'normal', fontFamily: 'SourceSansPro-Regular' }}>Viewers</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 22, color: '#1A1A1A', fontWeight: '400', fontStyle: 'normal', fontFamily: 'SourceSansPro-SemiBold', textAlign: 'center' }}>0</Text>
                                            <Text style={{ fontSize: 14, color: '#1A1A1A', fontWeight: '400', fontStyle: 'normal', fontFamily: 'SourceSansPro-Regular' }}>Saves</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 22, color: '#1A1A1A', fontWeight: '400', fontStyle: 'normal', fontFamily: 'SourceSansPro-SemiBold', textAlign: 'center' }}>0</Text>
                                            <Text style={{ fontSize: 14, color: '#1A1A1A', fontWeight: '400', fontStyle: 'normal', fontFamily: 'SourceSansPro-Regular' }}>Likes</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 22, color: '#1A1A1A', fontWeight: '400', fontStyle: 'normal', fontFamily: 'SourceSansPro-SemiBold', textAlign: 'center' }}>{props?.livestreamrecaplist?.geteventcomment?.length}</Text>
                                            <Text style={{ fontSize: 14, color: '#1A1A1A', fontWeight: '400', fontStyle: 'normal', fontFamily: 'SourceSansPro-Regular' }}>Messages</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        width: deviceWidth / 1.1, padding: 5, backgroundColor: '#ffffff', marginVertical: '4%',
                                        borderRadius: 16, marginHorizontal: '4%', alignSelf: 'center', elevation: 3
                                    }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: '4%', marginHorizontal: '3%' }}>
                                            <View>
                                                <Text style={styles.totalincometodaysale}>Live Attendance</Text>
                                            </View>

                                        </View>
                                        {/*<BarChart
                                            data={{
                                                labels: ["This stream stats", "Average stream stats",],
                                                datasets: [
                                                    {
                                                        data: props?.livestreamrecaplist(item => {
                                                            return (

                                                                item.audianceCount

                                                            )
                                                        })

                                                    }
                                                ]
                                            }}
                                            width={deviceWidth / 1.13}
                                            height={200}
                                            yAxisSuffix="k"
                                            yAxisInterval={2}
                                            chartConfig={{
                                                backgroundColor: "#e26a00",
                                                backgroundGradientFrom: "#ffffff",
                                                backgroundGradientTo: "#ffffff",
                                                color: (opacity = 1) => `rgba(0, 153, 0, ${opacity})`,
                                                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

                                            }}
                                            style={{
                                                //marginVertical: 8,
                                                borderRadius: 16,
                                                //marginHorizontal:'4%'
                                            }}
                                            verticalLabelRotation={0}
                                        />*/}
                                    </View>
                                    <View style={{
                                        width: deviceWidth / 1.1, padding: 5, backgroundColor: '#ffffff', marginVertical: '4%',
                                        borderRadius: 16, marginHorizontal: '4%', alignSelf: 'center', elevation: 3
                                    }}>
                                        <View style={{ marginVertical: '4%', marginHorizontal: '3%' }}>
                                            <View>
                                                <Text style={styles.totalincometodaysale}>Livestream Benchmarks</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', marginTop: '4%' }}>
                                                <View style={{ backgroundColor: '#E6E6E6', paddingHorizontal: '5%', padding: 10, borderRadius: 6 }}>
                                                    <Text style={{ fontSize: 12, color: '#4D4D4D', fontWeight: '400' }}>Viewers</Text>
                                                </View>
                                                <View style={{ backgroundColor: '#B80000', padding: 10, borderRadius: 6, marginHorizontal: '3%' }}>
                                                    <Text style={{ fontSize: 12, color: '#FFFFFF', fontWeight: '400' }}>Likes</Text>
                                                </View>
                                                <View style={{ backgroundColor: '#E6E6E6', padding: 10, borderRadius: 6 }}>
                                                    <Text style={{ fontSize: 12, color: '#4D4D4D', fontWeight: '400' }}>Saves</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <BarChart
                                            data={data2}
                                            width={deviceWidth / 1.13}
                                            height={200}
                                            yAxisSuffix="k"
                                            yAxisInterval={2}
                                            chartConfig={{
                                                backgroundColor: "#e26a00",
                                                backgroundGradientFrom: "#ffffff",
                                                backgroundGradientTo: "#ffffff",
                                                color: (opacity = 1) => `rgba(0, 153, 0, ${opacity})`,
                                                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

                                            }}
                                            style={{
                                                //marginVertical: 8,
                                                borderRadius: 16,
                                                //marginHorizontal:'4%'
                                            }}
                                            verticalLabelRotation={0}
                                        />
                                    </View>
                                    <View style={{
                                        width: deviceWidth / 1.1, padding: 5, backgroundColor: '#ffffff', marginVertical: '4%',
                                        borderRadius: 16, marginHorizontal: '4%', alignSelf: 'center', elevation: 3
                                    }}>
                                        <View>
                                            <Text style={styles.totalincometodaylive}>Livestream Viewers</Text>
                                        </View>
                                        <ProgressChart
                                            data={data1}
                                            width={deviceWidth / 1.15}
                                            height={220}
                                            strokeWidth={16}
                                            radius={32}
                                            chartConfig={{
                                                backgroundColor: "#e26a00",
                                                backgroundGradientFrom: "#ffffff",
                                                backgroundGradientTo: "#ffffff",
                                                decimalPlaces: 1, // optional, defaults to 2dp
                                                color: (opacity = 1) => `rgba(0, 153, 0, ${opacity})`,
                                                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

                                            }}
                                            hideLegend={false}
                                        />
                                    </View>
                                </View>

                                <View style={{ marginHorizontal: '2%' }}>
                                    <Text style={{ fontSize: 22, color: '#1A1A1A', fontWeight: '400' }}>Viewers</Text>
                                    <View>
                                        <FlatList
                                            data={viewprofile}
                                            renderItem={renderItemview}
                                            keyExtractor={item => item.id}
                                            showsHorizontalScrollIndicator={false}
                                            numColumns={2}
                                        />
                                    </View>

                                </View>

                                <TouchableOpacity style={{ backgroundColor: '#B80000', marginStart: 20, marginEnd: 20, marginTop: 45, borderRadius: 50, marginBottom: 137 }} >
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 20, marginBottom: 20 }} >Delete Stream</Text>
                                </TouchableOpacity>

                            </View>
                        </ScrollView>
                    }


                    {tab3 == true &&
                        <View style={{ backgroundColor: '#F5F5F5', padding: 10 }} >
                            
                            <View>

                                <FlatList
                                    data={props?.livestreamrecaplist?.geteventcomment || []}
                                    renderItem={rendermessage}
                                    keyExtractor={item => item.id}
                                />

                            </View>

                        </View >
                    }







                </View>
                {openpopup &&
                    <Provider>
                        <Portal>
                            <Modal visible={visible} onDismiss={closepopup} contentContainerStyle={containerStyle}>
                                <Image source={ImageIcons.sucess} style={styles.sucessimage} />
                                <Text style={styles.Modaltext}>Purchase successful</Text>
                                <Text style={styles.modalsuceestext}>You have successfully the goods in your chart. We will update you as the goods gets dispatched</Text>
                                <TouchableOpacity style={styles.modalbutton}
                                    onPress={() => props.navigation.navigate("SearchProduct")}>
                                    <Text style={styles.modaltouchablitytext} >Continue Shopping</Text></TouchableOpacity>
                            </Modal>
                        </Portal>
                    </Provider>
                }
            </ScrollView>
            <Footer3 onSelection="2" />
        </KeyboardAvoidingView>
    )
}



export default upcoming