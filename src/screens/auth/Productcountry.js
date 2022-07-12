import React, { useRef, useState ,useEffect} from 'react';
import { Text, View,Image,TextInput,FlatList, ImageBackground,Dimensions, ScrollView, Picker,Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import Sortorder from '../../components/pickers/Sortorder';
const options = [
      {
        label: 'USA',
        value: 'USA'
      },
      {
        label: 'India',
        value: 'India'
      },
      {
        label: 'Ghana',
        value: 'Ghana'
      },
      {
        label: 'Canada',
        value: 'Canada'
      }
    ]
const Productcountry = (props) => {

     const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

    const {
        navigation,
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    useEffect(() => {
        console.log(props.getlistshop,'newdata')
        props.getAllproduct(1);
        //console.log('asdsd',props.getcartlist);
    }, [])

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();
     const [selectedValue, setSelectedValue] = useState("USA");
    // Local states
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

    const updateorderStatus = (itemValue) => {
        setSelectedValue(itemValue)
    }

    const DATA = [
       {
        text:"Beauty brands",
        text1:"$75",
        image:ImageIcons.addstore,
        
       },

     ];

      const renderItem = ({ item ,index }) => {
   return(
        <View style={styles.maincartviewlist}>
           { index == 0 &&
            <TouchableOpacity onPress={() => props.navigation.navigate("ProductDetails2",{productId:item._id})}>
            <View style={styles.comingViewflatlist}>
                <Image source={{uri: item.productImage}} style={styles.jeansimg} />
                <View style={{flexDirection:'row',position:'absolute',top:15,left:15}}>
                    <View >
                    <Image source={ImageIcons.liveicon} style={styles.liveicon3} />
                    </View>
                    <Text style={styles.livetextred}>Live</Text>
                </View>
                <View style={{position:'absolute',bottom:'7%',left:15}}>
                   <Text style={styles.upcomingtext2}>{item.productName}</Text>
                </View>
            </View>
            </TouchableOpacity>
            }
            { index !== 0 &&
                <TouchableOpacity onPress={() => props.navigation.navigate("ProductDetails2",{productId:item._id})}>
             <View style={styles.comingViewflatlist}>
                 <Image source={{uri: item.productImage}} style={styles.jeansimg} />
                <View style={styles.comingshort}>
                 <Text style={styles.shorttest}>Notify me</Text>
                </View>
                <View style={{position:'absolute',bottom:'7%',left:15}}>
                    <Text style={styles.upcomingtext2}>{item.productName}</Text>
                </View>
            </View>
            </TouchableOpacity>
            }
        </View>
   
  );
}

    return (
        
       <View style={{flex:1,backgroundColor:'#fce8e8',}}>
     

            <View style={{flexDirection:'row'}}>
            <View style={{marginLeft:'2%',marginRight:'4%',marginTop:15,borderWidth:1,borderRadius:5,borderColor:'#A3A3A3',}}>
            <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />

            </View>
            <View style={{marginTop:15,borderWidth:1,borderRadius:5,borderColor:'#A3A3A3'}}>
            <Sortorder options={options} onSelect={(checked) => updateorderStatus(checked)} />

            </View>
            </View>
        <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7'}} >

            <View>
            <FlatList
                data={props?.getlistproduct || []}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
             />
            </View>
        
    </ScrollView>
        

        </View>
                
        
    )
}


export default Productcountry