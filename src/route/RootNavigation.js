import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import {
    View,
    Alert,
    StyleSheet,
    ActivityIndicator,Image,Dimensions
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Auth from '../route/Auth';
import RNBootSplash from "react-native-bootsplash";
import CustomDrawer from './CustomDrawer';
import { login, changeLoginCredentials, setNetworkConnection, logout } from '../redux/actions/Auth'
import NetInfo from "@react-native-community/netinfo";
import messaging from '@react-native-firebase/messaging';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import { Colors ,ImageIcons} from '../common';
const deviceWidth = Dimensions.get('window').width; 
const deviceHeight = Dimensions.get('window').height; 
import Video from 'react-native-video';

const RootNavigation = (props) => {

    //Local states
    const [isResetLink, setIsResetLink] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    // Redux states
    let { loginCredentials, defaultAuthScreen } = useSelector(state => state.auth)

    useEffect(() => {
        NetInfo.fetch().then(state => {
            props.setNetworkConnection(state.isConnected);
        });
    }, [loginCredentials])

    useEffect(async () => {
        validateLoginCredential();
        return () => {
            
        }
    }, [])

    // Set notification data
    const setVendorNotification = async () => {
       
    }

    // Validate login credential
    const validateLoginCredential = async () => {
       
        RNBootSplash.hide();
    }

    // handle dynamic link
    const handleDynamicLink = link => {
        // Handle dynamic link inside your own application
        if (link?.url) {
            console.log("link.url===>", link?.url)
            props.logout();
            setTimeout(() => {
                NetInfo.fetch().then(state => {
                    props.setNetworkConnection(state.isConnected);
                });
                props.setVendorIdResetPassword(link?.url)
            }, 500);
            setIsResetLink(true)
        }
        // if (link.url === 'https://invertase.io/offer') {
        //     // ...navigate to your offers screen
        // }
    };

    if (isLoading) {
        return <View style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: Colors.BLACK
        }}>
           <Video source={ImageIcons.vedioplay}  // Can be a URL or a local file.
                    ref={(ref) => {
                     this.player = ref
                   }}                                    
                     
                       
                        paused={false}
                        fullscreen={true}
                        repeat={true}
                      resizeMode={"stretch"}
                      

                            
                   style={styles.backgroundVideo} 
                   />
           
        </View >
    } else {
        return (
            <NavigationContainer >
                {!loginCredentials && <Auth />}
                {loginCredentials && <Auth />}
                {/* <CustomDrawer /> */}
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    root: {

    },
    backgroundVideo: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
     resizeMode:"contain",
   width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,



    
    
  },
});

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    login,
    changeLoginCredentials,
    setNetworkConnection,
    logout
};
export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation);
