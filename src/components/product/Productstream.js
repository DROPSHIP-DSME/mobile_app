import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
import { UsersIcon } from "react-native-heroicons/solid";
import { PlayIcon } from "react-native-heroicons/solid";
import ImageIcons from '../../common/ImageIcons'

const Productstream = ({item, index, text, onPress, source, props}) => {

  useEffect(() => {
     // AsyncStorage.setItem('UserId','');
      //AsyncStorage.setItem('userLogin','');
      //getBrandUserId();
      //alert(props?.loginuserid)
      props.getsupportlist(props?.loginuserid);

      props.getAllproduct(1);
      props.getalleventlist(1);
      props.getwatchlistproduct(props?.loginuserid);
      console.log('props?.showwatchlistproduct',props?.showwatchlistproduct)
      if (Platform.OS === 'android') requestMultiplePermisisons();
  }, [])

  const DATA = [
    {
     text:'Beauty brands',
     image:ImageIcons.basket,
     image2:ImageIcons.liveicon,
    },
     {
    text:'Beauty brands',
     text2:'Live tomorrow at 10PM',
     image:ImageIcons.clothes,
    },
     {
     text:'Beauty brands',
     text2:'Live tomorrow at 10PM',
     image:ImageIcons.basket,
    },
  ];

   const DATA2 = [
    {
         text:'Beauty brands',
         image:ImageIcons.basket,
         imageicon:ImageIcons.theme3,
         text2:'Live tomorrow at 10PM',
    },
     {
         text:'Beauty brands',
         text2:'Live tomorrow at 10PM',
         image:ImageIcons.clothes,
         imageicon:ImageIcons.theme3,
    },
  ];

  const joinbroadcast = (itemid, startnow, eventtime) =>{
      //if (startnow == true){
          let request1 = {
              "channelName":itemid,
              "appID":"0c96ec2a0c9744c0bb3d21330bb0911d",
              "appCertificate":"f877b72b55264162bfc8b88421fa8b77",
              "uid":0
          }
          props.getchanneltoken(request1, props.navigation, "vendor");
          setTimeout(function(){
              props.navigation.navigate("Blurbackground", { isback: false, channel:itemid , isbroadcaster: false });
          },1000);
      // } else {
      //     setshowotherAlert(true)
      //     setshowalertmsg('Event will start at '+ moment(eventtime).format('MMM DD, hh:mm A'))
      // }
  };

  return (
    <View style={tw.style('ml-2')}>
      <TouchableOpacity onPress={() => joinbroadcast(item._id,item.startNow,item.eventdate)}>
        <View>
            <Image source={{uri: item.products[0]?.productImage}} style={tw.style('w-40 h-56 rounded-md')} />
              <Text style={styles.beautyproduct}></Text>

            <View style={tw.style('flex flex-row bg-red-700 w-16 h-6 rounded-lg px-1 absolute top-4 left-2')}>
                <Text style={tw.style('px-3 text-sm text-white text-center')}>Live</Text>
            </View>
            <View style={tw.style('flex flex-row bg-green-200 w-16 h-6 rounded-lg px-2 pt-1 absolute top-4 left-[55%]')}>
                <View style={tw.style('pt-[2%]')}>
                    <UsersIcon color="red" fill="#000000" size={14} />
                </View>
                <Text style={tw.style('text-xs text-gray-800 pl-1')}>68.3k</Text>
            </View>
        </View>

        <View style={tw.style('flex flex-row mt-2')}>
          <View>
            <Image source={ImageIcons.profileimage} style={tw.style('h-6 w-6 rounded-full')}/>
          </View>
          <View style={tw.style('pl-2 pt-1')}>
            <Text style={tw.style('text-gray-500 text-xs')}>{item.products[0]?.productName}</Text>
          </View>
        </View>
          <Text style={tw.style('text-gray-600 text-sm')}>Mens Classic Watch</Text>
       </TouchableOpacity>
    </View>

  );
}

export default Productstream
