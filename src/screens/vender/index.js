import React, { useState, useEffect, useRef } from 'react';
import { Text, View, FlatList,   TouchableOpacity, Image } from 'react-native';
import { Colors, ImageIcons } from '../../common';
import { FloatingButton, RoundedButton } from '../../components/forms/button';
import SearchBar from '../../components/forms/inputField/SearchBar';
import AcceptRequestModal from '../../components/modals/AcceptRequestModal';
import Loader from '../../components/modals/Loader';
import styles from './styles';

const Vendor = (props) => {

    // Local states
    const [venders, setVenders] = useState([])
    const [noData, setNoData] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [isRefresh, setIsRefresh] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [requestedVendor, setRequestedVendor] = useState();

    useEffect(() => {
        props.getVendorList();
        setTimeout(() => {
            if (props?.vendorList) {
                setVenders(props?.vendorList || [])
            }
        }, 500);
    }, [])

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            if (props?.vendorInfo && props?.vendorInfo !== null) {
                setRequestedVendor(props?.vendorInfo);
                setModalVisible(true)
                setIsLoading(false)
            }
        }, 500);
    }, [props?.vendorInfo])

    useEffect(() => {
        setIsLoading(true)
        setVenders([])
        setTimeout(() => {
            setVenders(props?.vendorList || [])
            setIsLoading(false)
            setIsRefresh(false)
        }, 500);
    }, [props?.vendorList])

    // search vendor by address/vendor name
    const searchText = (e) => {
        setSearch(e);
        let data = venders || props?.vendorList;
        let text = String(e).toLowerCase()
        let filteredName = data?.filter((item) => {
            return String(item?.businessName).toLowerCase().match(text) || String(item?.businessAddress).toLowerCase().match(text)
        })
        if (!text || text === '') {
            setVenders(props?.vendorList);
        } else if (!Array.isArray(filteredName) && !filteredName?.length) {
            // set no data flag to true so as to render flatlist conditionally
            setVenders(data);
            setNoData(true)
        } else if (Array.isArray(filteredName)) {
            setVenders(filteredName);
            setNoData(true)
        }
    }

    // Navigate to Accept vendor screen
    const acceptRequest = () => {
        setModalVisible(false);
        props.navigation.navigate("AcceptedVendor", { requestVendorDetail: requestedVendor })
    }

    const renderEmptyList = () => {
        return (
            <View style={styles.emptyList}>
                <Image source={ImageIcons.noVendorIcon} style={styles.emptyIcon} />
                <Text style={styles.emptyListText}>You haven't added any vendor yet.</Text>
                <View style={{ marginTop: '5%', paddingHorizontal: '20%', width: '100%' }}>
                    <RoundedButton
                        text="Add New Business"
                        onPress={() => props?.navigation?.navigate("AddNewVendor")}
                    />
                </View>
            </View>
        )
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.listItem}>
                <TouchableOpacity
                    onPress={() => props?.navigation?.navigate("VendorDetails", { vendorDetail: item })}
                    style={{ width: item?.isNewRequest ? '80%' : '100%' }}>
                    <Text style={styles.titleText}>{item?.businessName}</Text>
                    <Text style={styles.titleSubText}>{item?.businessAddress}</Text>
                    <Text style={styles.phoneNumberText}>{`${item.countryCode}-${item?.phone}`}</Text>
                </TouchableOpacity>
                <View style={[styles.rightContent]}>
                    {item?.isNewRequest && <TouchableOpacity
                        onPress={() => props?.navigation?.navigate("AddNewVendor", { vendorDetail: item })}                    >
                        <Image source={ImageIcons.editIcon} style={styles.editIcon} />
                    </TouchableOpacity>}
                    {item?.isNewRequest && <Text style={styles.flagText}>New Request</Text>}
                </View>
            </View>
        )
    }

    return (
        <>
            
            <View style={styles.customHeader}>
                <View style={styles.headerItem}>
                    <TouchableOpacity
                        onPress={() => props?.navigation?.toggleDrawer()}
                        style={styles.leftButton}
                    >
                        <Image source={ImageIcons.menuIcon} style={styles.leftIcon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.headerItem}>
                    <Text style={styles.headerTitle}>CLIENTS</Text>
                </View>
                <View style={[styles.headerItem, { width: '36%', }]}>
                    <SearchBar
                        value={search}
                        onChangeText={(search) => searchText(search)}
                        placeholder="Search"
                        placeholderTextColor={Colors.GREY}
                    />
                </View>
            </View>
            <View style={styles.topBlueView} />
            <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
                <FlatList
                    style={styles.list}
                    data={venders && venders.length > 0 ? venders : props?.vendorList}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    ListEmptyComponent={renderEmptyList}
                    refreshing={isRefresh}
                    extraData={isLoading}
                    onRefresh={() => {
                        setVenders([])
                        setIsLoading(true);
                        props.getVendorList();
                        setTimeout(() => {
                            setIsLoading(false)
                        }, 500);
                    }}
                />
                {props?.vendorList && props?.vendorList?.length > 0 &&
                    <FloatingButton
                        text="Add New Business"
                        onPress={() => props.navigation.navigate("AddNewVendor")}
                    />}
                <Loader isVisible={props.vendorListLoader} />
            </View>
            {/* {modalVisible && */}
            <AcceptRequestModal
                isVisible={modalVisible}
                onAccept={() => acceptRequest()}
                onCancel={() => setModalVisible(false)}
                data={requestedVendor}
            />
            {/* } */}
        </>
    )
}

export default Vendor;