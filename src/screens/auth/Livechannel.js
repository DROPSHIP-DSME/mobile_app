import React, { useRef, useState,useEffect } from 'react';
import { Text, View,Image,FlatList,TextInput, ImageBackground,Dimensions, ScrollView, Alert, TouchableOpacity,  KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
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
import Footer3 from '../../screens/auth/Footer3';


const Livechannel = (props) => {

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
        props.getAllcategory(1);
        props.getAllproduct(1);
        //console.log('asdsd',props.getcartlist);
    }, [])

    //Reference
    const emailRef = useRef();
    const phoneRef = useRef();
    const bisinessnameRef = useRef();
    const fullnameRef = useRef();

    // Local states

    const [wayToContact, setWayToContact] = useState("Phone");
    const [CatId, setCatId] = useState("");
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

    const categoryproduct = async (categoryId) => {
        setCatId(categoryId);
        let request = {
            "categoryId":categoryId,
        }
        props.createcategoryproduct(request);
    };

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
        <TouchableOpacity onPress={() => props.navigation.navigate("ProductDetails2",{productId:item._id,userType:'shopside'})}>
        <View style={styles.comingViewflatlist}>
                <Image source={{uri:item.productImage}} style={styles.jeansimg} />
            <View style={{position:'absolute',bottom:'7%',left:15}}>
                <Text style={styles.upcomingtext2}>{item.productName}</Text>
            </View>
        </View>
        </TouchableOpacity>
        </View>
    );
}

const data = [
       {
        text:"Fashion",
       },
        {
        text:"Jewelry",
       },
        {
        text:"Fashion",
       },
        {
        text:"Fashion",
       },
        {
        text:"Fashion",
       },

     ];

    const renderItem2 = ({ item ,index }) => {
        return(
           <View>
                <TouchableOpacity onPress={() => categoryproduct(item._id)}>
                   { CatId == item._id ?
                        <View style={styles.livec24}>
                            <Text style={styles.livec12}>{item.categoryName}</Text>
                        </View>
                   :
                        <View style={styles.livec25}>
                            <Text style={styles.livec13}>{item.categoryName}</Text> 
                        </View>
                    }
                </TouchableOpacity>
           </View>
        );
    }

    return (
        

       <View style={{flex:1,backgroundColor:'#fce8e8',}}>
                    
                    <View style={{marginHorizontal:5}}>
                    <FlatList
                        data={props?.getlistcategory || []}
                        renderItem={renderItem2}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                     />
                    </View>
                   
                       
                  <ScrollView  keyboardShouldPersistTaps="handled" persistentScrollbar={true} style={{backgroundColor:'#FFE7E7'}} >
                   
                    <View style={{paddingBottom:'20%'}}>
                    <FlatList
                        data={props?.getlistproduct || []}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                     />
                    </View>
                  
         </ScrollView>
          <View style={styles.footerView}>
         
        <View style={styles.maincartviewfooter}>

        <TouchableOpacity onPress={() => { navigation.navigate('watchlist'); }}>
            <View >
                <Image source={ImageIcons.tvicon}  style={[styles.home1,{marginTop:2}]} />
                <Text style={styles.customerfoottext}>Live channels</Text>        
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Cart'); }}>
            <View >
                <Image source={ImageIcons.cart}  style={styles.homecart} />
                <Text style={styles.customerfoottext}>Cart</Text>         
            </View>
        </TouchableOpacity> 

        <TouchableOpacity onPress={() => navigation.navigate("shop")} >
            <View >
                 <Image source={ImageIcons.shop}  style={styles.home1} />
                 <Text style={styles.customerfoottext}>Shop</Text>
             </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Search'); }}>
            <View >
                <Image source={ImageIcons.searchicon}  style={styles.home1} />
                <Text style={styles.customerfoottext}>Search</Text>         
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Newprofile'); }}>
            <View>
                <Image source={ImageIcons.prof}  style={styles.home1} />
                <Text style={[styles.customerfoottext,{paddingTop:'1%'}]}>Profile</Text>         
            </View>
        </TouchableOpacity>

    </View>

     </View>
                    
    </View>
                
        
    )
}



export default Livechannel