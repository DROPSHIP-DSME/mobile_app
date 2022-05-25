import React, { useEffect, useState } from 'react';
import { Text, View, FlatList,   TouchableOpacity, ScrollView, Image,ImageBackground,Dimensions, } from 'react-native';
import { Fonts, Colors, ImageIcons } from '../../common';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { BarChart } from "react-native-chart-kit";
import styles from './styles';
import InputField2 from '../../components/forms/inputField/inputfielddata'
import { RoundedButton } from '../../components/forms/button';



import InsightFilterModal from '../../components/modals/InsightFilterModal';
import moment from 'moment';
import Loader from '../../components/modals/Loader';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get('window').width;
   


const Editprofile = (props) => {
    const [email, setemail] = useState('');
    const [name, setname] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [tagline, settagline] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(true);
    // Local states
   

    return (
         <View style={styles.root}>
         
         <View  style={{width:deviceWidth,height:deviceHeight,backgroundColor:'#E6E6E6'}}>
         <View style={{justifyContent:'center',alignItems:'center',borderColor:'#6DBE45',marginTop:'5%'}}>
         <View style={{width:110,height:110,borderRadius:60,borderColor:'#6DBE45',borderWidth:5}}>
             <Image source={require('../../Images/profile.png')} style={{width:100,height:100,borderRadius:75,}}/>
         </View>
         </View>
         <View style={{justifyContent:'center',alignItems:'center'}}>
         <View style={{backgroundColor:'#E6E6E6',borderWidth:1,borderColor:'#2E479E',width:deviceWidth/2.2,height:40,borderRadius:30,alignItems:'center',justifyContent:'center',marginTop:10}}>
            <Text style={{color:'#2E479E',textAlign:'center',}}> Change profile image</Text>
         </View>
         </View>
         <ScrollView style={{height:deviceHeight/1.5}}>
          <View>
                            <InputField2
                                id="username"
                                title="Username"
                                Theme='white'
                                value={username}
                                onChangeText={(text) => setusername(text)}
                                returnKeyType="next"
                                
                                // onSubmitEditing={() => nameRef.current.focus()}
                            />
                            <InputField2
                                // myref={nameRef}
                                id="name"
                                title="Name"
                                Theme='white'
                                value={name}
                                onChangeText={(text) => setname(text)}
                                returnKeyType="next"
                                // onSubmitEditing={() => taglineRef.current.focus()}
                            />
                            <InputField2
                                // myref={taglineRef}
                                id="tagline"
                                title="Tagline"
                                Theme='white'
                                value={tagline}
                                onChangeText={(text) => settagline(text)}
                                returnKeyType="next"
                                // onSubmitEditing={() => emailRef.current.focus()}
                            />
                            <InputField2
                                // myref={emailRef}
                                id="email"
                                title="Email Address"
                                value={email}
                                Theme='white'
                                onChangeText={(text) => setemail(text)}
                                keyboardType="email-address"
                                returnKeyType="next"
                                // onSubmitEditing={() => setVisible(true)}
                            />
                            <TouchableOpacity onPress={() => setVisible(true)}>
                                <InputField2
                                    id="password"
                                    title="Password"
                                    value={password}
                                    Theme='white'
                                    editable={false}
                                    onChangeText={(text) => setpassword(text)}
                                    secureTextEntry={isShowPassword ? true : false}
                                    // rightIcon={isShowPassword ? Images.eye : Images.hideeye}
                                    passwordToogle={() => setIsShowPassword(!isShowPassword)}
                                />
                            </TouchableOpacity>
                            <View style={{ paddingHorizontal: '20%', marginTop: '5%', marginBottom: '10%' }}>
                                
                                <RoundedButton
                                    text="Save"
                                    onPress={() => handleRegistrationSubmit()}
                                />
                            </View>

        </View>
        </ScrollView>
         </View> 
         
      </View>
    )
}

export default Editprofile;
