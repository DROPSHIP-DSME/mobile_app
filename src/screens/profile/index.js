import React, { useEffect, useState } from 'react';
import { Text, View, FlatList,   TouchableOpacity,ImageBackground ,Image,Dimensions} from 'react-native';
import { Fonts, Colors } from '../../common';
import Loader from '../../components/modals/Loader';
import styles from './styles';
import { FloatingButton, RoundedButton } from '../../components/forms/button';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get('window').width;
const Profile = (props) => {

    // Local states
    const [isRefresh, setIsRefresh] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
     const [userData, setuserData] = useState('username');
    
    useEffect(() => {
        props.getRedeemedCoupons();
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
            setIsRefresh(false)
        }, 500);
    }, [props?.vendorList])

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.listItem}>
                <View style={{ width: '100%' }}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>{item?.title}</Text>
                    </View>
                    <View style={[styles.subTitleContainer, { marginTop: 10 }]}>
                        <Text style={styles.titleSubText}>{"Times Redeemed"}</Text>
                        <Text style={styles.titleSubText}>{item?.NoOfTimesRedeemed}</Text>
                    </View>
                    <View style={[styles.subTitleContainer, { paddingBottom: 10, marginTop: 5 }]}>
                        <Text style={styles.timeLeftText}>{"Time Left"}</Text>
                        <Text style={[styles.timeLeftText, { color: item?.daysLeft >= 0 ? Colors.DARK_GREY : Colors.RED }]}>{item?.daysLeft >= 0 ? item?.daysLeft + " Days" : "Expired"}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.root}>
         
         <ImageBackground source={require('../../Images/curve.png')} style={{width:deviceWidth,height:deviceHeight,marginTop:'35%'}}>
         <View style={{justifyContent:'center',alignItems:'center',marginTop:'-15%',borderColor:'#6DBE45',}}>
         <View style={{width:110,height:110,borderRadius:60,borderColor:'#6DBE45',borderWidth:5}}>
             <Image source={require('../../Images/profile.png')} style={{width:100,height:100,borderRadius:75,}}/>
         </View>
         </View>
         <View style={{marginTop:'10%',flexDirection:'row',justifyContent:'space-between',width:deviceWidth,marginRight:10}}>
         <View style={{justifyContent:'flex-start',alignItems:'center',width:deviceWidth/2,}}>
            <Text style={{color:'#fff',fontSize:18,fontFamily:'Raleway-SemiBold',padding:10}}>username:</Text>
            <Text style={{color:'#fff',fontSize:18,fontFamily:'Raleway-SemiBold',padding:10}}>Email:</Text>
            <Text style={{color:'#fff',fontSize:18,fontFamily:'Raleway-SemiBold',padding:10}}>Phone:</Text>
            <Text style={{color:'#fff',fontSize:18,fontFamily:'Raleway-SemiBold',padding:10}}>Address:</Text>
           
         </View>
         <View style={{justifyContent:'flex-end',alignItems:'center',width:deviceWidth/2}}>
             <Text style={{color:'#fff',fontSize:18,fontFamily:'Raleway-SemiBold',padding:10}}>@Jacob wills wills wills</Text>
            <Text style={{color:'#fff',fontSize:18,fontFamily:'Raleway-SemiBold',padding:10}}>email@yopmail.com</Text>
             <Text style={{color:'#fff',fontSize:18,fontFamily:'Raleway-SemiBold',padding:10}}>9876543212</Text>
             <Text style={{color:'#fff',fontSize:18,fontFamily:'Raleway-SemiBold',padding:10}}>User Address</Text>
         </View>
         
         </View>
         
         </ImageBackground> 
          
        
      </View>
    )
}

export default Profile;

