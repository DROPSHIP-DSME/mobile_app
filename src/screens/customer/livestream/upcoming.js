import React, { useRef, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions, FlatList, TextInput, StatusBar, ImageBackground, ScrollView, Alert, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../../screens/auth/styles';
import { Colors, CommonStrings } from '../../../common'
import ImageIcons from '../../../common/ImageIcons'
import InputField from '../../../components/forms/inputField';
import { RoundedButton } from '../../../components/forms/button';
import { phoneRegExp } from '../../../services/helper';
import DropdownField from '../../../components/dropdown/DropDownMenu';
import PhoneMaskInput from '../../../components/forms/inputField/PhoneMaskInput';
import Loader from '../../../components/modals/Loader';
import { RadioButton, Provider, Modal, Portal, Button, } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import Footer3 from '../../../screens/auth/Footer3';
import styl from '../../../screens/auth/styledrop';
import Moment from 'moment';
import tw from 'twrnc';
import { UsersIcon } from "react-native-heroicons/solid";
import { ChatAlt2Icon } from "react-native-heroicons/solid";
import Largebutton from '../../../components/dropshipbutton/Largebutton';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AwesomeAlert from 'react-native-awesome-alerts';

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
    const [showlist, setshowlist] = useState(true);

    const [showalertmsg, setshowalertmsg] = useState('');
    const [showotherAlert, setshowotherAlert] = useState(false);

    const [EventId, setEventId] = useState('');

    const joinbroadcast = (itemid) => {
        setEventId(itemid);
        props.getlivestreamrecap(itemid);
        setshowlist(false)
    }

    const deletebroadcast = () => {
        //props.getlivestreamrecap(EventId);
        setshowotherAlert(true);
        setshowalertmsg('Are you sure, you want to delete this Event?')
    }

    const deleteeventbroadcast = () => {
         props.deletelivestreamrecap(EventId);
         props.navigation.navigate('upcoming');
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
            text: "Lavlesh",
            image: ImageIcons.profileimage,

        }

    ];
    const renderItemview = ({ item, index }) => {
        return (
            <View style={tw.style('m-2')}>
                <View style={tw.style('flex flex-row items-center my-1')}>
                    <Image source={item.image} style={tw.style('h-12 w-12')} />
                    <Text style={tw.style('text-base text-gray-800 text-center mx-2')}>Dropship User</Text>
                </View>
            </View>
        );
    }

    const renderItem5 = ({ item ,index }) => {
       return(
          <View style={tw.style('ml-2 mr-2 mt-3')}>
              <TouchableOpacity onPress={() => joinbroadcast(item._id)}>
                  <View>
                      <Image source={{ uri: item.products[0]?.productImage }} style={tw.style('w-40 h-56 rounded-md')} />
                      <Text style={tw`text-sm text-white absolute bottom-4 left-3 leading-4`}></Text>

                      <View style={tw.style('flex flex-row bg-red-700 w-16 h-6 rounded-lg px-1 absolute top-4 left-2')}>
                          <Text style={tw.style('px-3 text-sm text-white text-center')}>Live</Text>
                      </View>
                      <View style={tw.style('flex flex-row bg-green-200 w-16 h-6 rounded-lg px-2 items-center absolute top-4 left-[55%]')}>
                          <View style={tw.style('pt-[2%]')}>
                              <UsersIcon color="red" fill="#000000" size={14} />
                          </View>
                          <Text style={tw.style('text-xs text-gray-800 pl-1')}>0</Text>
                      </View>
                  </View>

                  <View style={tw.style('flex flex-row mt-2')}>
                      <View>
                          <Image source={ImageIcons.profileimage} style={tw.style('h-6 w-6 rounded-full')} />
                      </View>
                      <View style={tw.style('pl-2 pt-1')}>
                          <Text style={tw.style('text-gray-500 text-xs')}>{item.products[0]?.productName}</Text>
                      </View>
                  </View>
              </TouchableOpacity>
          </View>
      );
    }

    const rendermessage = ({ item }) => {
        console.log("messagedsdsd------->", item)
        return (
            <View style={tw`flex flex-row justify-between mt-3 items-center`} >

                <View style={tw`ml-1`}>
                    <Text style={tw`text-lg text-gray-700 font-bold`} >{item?.user?.userName}</Text>
                    <View style={tw`flex-row items-center`}>
                      <Text style={tw`text-base text-gray-600`} >{item.message}</Text>
                      <Text style={tw`text-sm text-blue-500 ml-4`} >{Moment(item.createdAt).format("HH:mm A")}</Text>
                    </View>
                </View>
                <View>
                    <ChatAlt2Icon color="red" fill="#000000" size={28} />
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
            <View style={tw.style('mt-6 mx-4')}>
                <Text style={tw.style('text-2xl text-gray-800 font-bold')}>Livestreams</Text>
            </View>
            {showlist==true ?
                <View style={tw`flex flex-1 mx-4`}>
                   <View style={tw`mt-4`}>
                    {props?.getalleventdata?.length>0 ?
                    <FlatList
                        data={props?.getalleventdata || []}
                        renderItem={renderItem5}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                    />
                    :
                        <Text style={tw`text-center text-xl mt-65 text-gray-700`}>No Events Found</Text>
                    }
                    </View>
                </View>
            :
            <ScrollView keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={tw.style('bg-gray-100')} >

                <View style={tw.style('pt-2 mx-5')}>
                    <View style={tw.style('flex flex-row justify-between border-gray-800 border-b-2')}>
                        <TouchableOpacity onPress={() => { settab1(true); settab2(false); settab3(false); }} style={tw.style('m-3')} >
                            {tab1 == false ?
                                <Text style={tw.style('text-base text-gray-700')}>Stats</Text>
                                :
                                <Text style={tw.style('text-base text-gray-800 font-bold')}>Stats</Text>
                            }
                        </TouchableOpacity >
                        <TouchableOpacity onPress={() => { settab1(false); settab2(true); settab3(false); }} style={tw.style('m-3')}>

                            {tab2 == false ?
                                <Text style={tw.style('text-base text-gray-700')}>Orders(0)</Text>
                                :
                                <Text style={tw.style('text-base text-gray-800 font-bold')}>Orders(0)</Text>
                            }
                        </TouchableOpacity >
                        <TouchableOpacity onPress={() => { settab1(false); settab2(false); settab3(true); }} style={tw.style('m-3')} >
                            {tab3 == false ?
                                <Text style={tw.style('text-base text-gray-700')}>Messages({props?.livestreamrecaplist?.geteventcomment?.length})</Text>
                                :
                                <Text style={tw.style('text-base text-gray-800 font-bold')}>Messages({props?.livestreamrecaplist?.geteventcomment?.length})</Text>
                            }
                        </TouchableOpacity >
                    </View>

                    {tab2 == true &&
                        <View style={tw.style('h-screen w-screen p-6')} >
                            <FlatList
                                data={props?.getinconeorderlist || []}
                                renderItem={Data}
                            />
                        </View>

                    }

                    {tab1 == true &&
                        <ScrollView>
                            <View style={tw.style('bg-gray-100')} >
                                <View style={{ backgroundColor: '#FFFFFF', padding: '4%', borderRadius: 10, marginTop: '4%', elevation: 3 }} >
                                    <View style={tw.style('flex flex-row justify-between')} >
                                        <Text style={tw.style('text-base text-gray-600 font-base')} >Title</Text>
                                        <Text style={tw.style('text-base text-gray-800 font-bold')} >{props?.livestreamrecaplist?.getBrandDetails?.brandName}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }} >
                                        <Text style={tw.style('text-base text-gray-600 font-base')}  >Date & Time</Text>
                                        <Text style={tw.style('text-base text-gray-800')} >{props?.livestreamrecaplist?.getBrandDetails?.createdAt}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }} >
                                        <Text style={tw.style('text-base text-gray-600 font-base')} >Duration</Text>
                                        <Text style={tw.style('text-base text-gray-800 font-bold')} >{props?.livestreamrecaplist?.getchannelAudiance?.EventDuration}</Text>
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

                                <View style={tw.style('p-3 my-8')}>
                                    <Text style={tw.style('text-2xl font-bold text-gray-700 ')}>Summary</Text>
                                    <View style={tw.style('flex flex-row justify-between my-3')}>
                                        <View>
                                            <Text style={tw.style('text-2xl font-bold text-gray-800')}>{props?.livestreamrecaplist?.getchannelAudiance?.audianceCount}</Text>
                                            <Text style={tw.style('text-base text-gray-800')}>Viewers</Text>
                                        </View>
                                        <View>
                                            <Text style={tw.style('text-2xl font-bold text-gray-800')}>0</Text>
                                            <Text style={tw.style('text-base text-gray-800')}>Saves</Text>
                                        </View>
                                        <View>
                                            <Text style={tw.style('text-2xl font-bold text-gray-800')}>0</Text>
                                            <Text style={tw.style('text-base text-gray-800')}>Likes</Text>
                                        </View>
                                        <View>
                                            <Text style={tw.style('text-2xl font-bold text-gray-800')}>{props?.livestreamrecaplist?.geteventcomment?.length}</Text>
                                            <Text style={tw.style('text-base text-gray-800')}>Messages</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        width: deviceWidth / 1.1, padding: 5, backgroundColor: '#ffffff', marginVertical: '4%',
                                        borderRadius: 16, marginHorizontal: '4%', alignSelf: 'center', elevation: 3
                                    }}>
                                        <View style={tw.style('flex flex-row justify-between my-3')}>
                                            <View>
                                                <Text style={tw.style('text-xl text-gray-800 font-bold pl-3')}>Live Attendance</Text>
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
                                        <View style={tw.style('my-2 p-3')}>
                                            <View>
                                                <Text style={tw.style('text-xl text-gray-800 font-bold')}>Livestream Benchmarks</Text>
                                            </View>
                                            <View style={tw.style('flex flex-row mt-4')}>
                                                <View style={tw.style('bg-gray-200 py-2 px-4 rounded-lg')}>
                                                    <Text style={tw.style('text-base text-gray-700')}>Viewers</Text>
                                                </View>
                                                <View style={tw.style('bg-red-700 py-2 px-4 rounded-lg ml-3')}>
                                                    <Text style={tw.style('text-base text-white')}>Likes</Text>
                                                </View>
                                                <View style={tw.style('bg-gray-200 py-2 px-4 rounded-lg ml-3')}>
                                                    <Text style={tw.style('text-base text-gray-700')}>Saves</Text>
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
                                            <Text style={tw`text-2xl font-bold text-center text-gray-700 mt-4`}>Livestream Viewers</Text>
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

                               {/* <View style={{ marginHorizontal: '2%' }}>
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

                                </View> */ }
                                </View>


                            <View style={tw`my-10`}>
                              <Largebutton
                              text="Delete stream"
                              />
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


            </ScrollView>
        }

        <AwesomeAlert
                show={showotherAlert}
                showProgress={false}
                title="DROPSHIP"
                message={showalertmsg}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Close"
                confirmText="Delete"
                confirmButtonColor="#B80000"
                onCancelPressed={() => {
                    setshowotherAlert(false)
                }}
                onConfirmPressed={() => {
                    deleteeventbroadcast();
                    setshowotherAlert(false);
                }}
            />


        <Footer3 onSelection="2" />

        </KeyboardAvoidingView>
    )
}



export default upcoming
