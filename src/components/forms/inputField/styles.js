import React from 'react';
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors, Fonts } from '../../../common'

const styles = StyleSheet.create({
    root: {
        // flex: 1
        // justifyContent: 'center',
        paddingHorizontal: 15,
        marginTop: 15
    },
    inputContainer: {
        width: '100%',
        height: 50, //hp('7%')
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.LIGHT_BLACK,
        borderRadius: 10,
        color: Colors.WHITE,
        paddingHorizontal: 10
    },
    input: {
        flex: 1,
        color: Colors.WHITE,
        paddingLeft: 10,
        fontSize: 16,
        
    },
    inputContainer2: {
        width: '100%',
        height: 50, //hp('7%')
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.LIGHT_BLACK,
        borderRadius: 10,
        color: Colors.WHITE,
        paddingHorizontal: 0,
        borderRadius:3,
    },
    input2: {
        flex: 1,
        color: Colors.WHITE,
        paddingLeft: 10,
        fontSize: 16,
        backgroundColor:Colors.WHITE,
        
    },
    iconContainer: {
        width: 18,
        height: 18,
    },
    icon: {
        width: 18,
        height: 18,
        resizeMode: 'contain'
    },
    leftIcon: {
        fontSize: 18,
    },
    title: {
        color: Colors.WHITE,
        paddingVertical: 5,
        fontSize: 16,
        fontFamily: Fonts.RalewayExtraBold
    },
    rightTitle: {
        color: Colors.WHITE,
        paddingVertical: 5,
        fontSize: 16,
        fontFamily: Fonts.QuestrialRegular
    },
    phoneTitle: {
        color: Colors.LIGHT_BLACK,
        paddingVertical: 5,
        fontSize: 16,
        fontFamily: Fonts.RalewayExtraBold
    },
    phoneInput: {
        height: 50,
        backgroundColor: Colors.BLUE,
        color: Colors.LIGHT_BLACK,
        width: 0
    },
    phoneContainer: {
        // width: '100%',
        height: 50,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        // borderWidth: 1,
        width: '20%',
    },
    phoneTextContainer: {
        height: 50,
        backgroundColor: Colors.WHITE,
        color: Colors.LIGHT_BLACK,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: Colors.LIGHT_BLACK,
        width: 0
    },
    formattedView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        borderColor: Colors.GREY,
        // borderWidth: 1,
    },
    inputmask: {
        height: 50,
        width: '100%',
        backgroundColor: Colors.WHITE,
        // borderLeftWidth: 1,
        borderLeftColor: Colors.GREY,
        paddingLeft: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    searchInput: {
        width: '80%',
        height: 40,
        color: Colors.WHITE,
        borderRadius:5,
        paddingLeft:5
    },
    autocompleteContainer: {    // Search Autocomplete styles (Business Type)
        backgroundColor: '#ffffff',
        borderWidth: 0,
    },
    searchAutocompleteContainer: {
        flex: 1,
        paddingHorizontal: 15,
        marginTop: 10,
        position: 'relative',
    },
    descriptionContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    itemText: {
        fontSize: 15,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 2,
    },
    infoText: {
        textAlign: 'center',
        fontSize: 16,
    },   /// Search category styles
    vendorSearchContainer: {
        paddingHorizontal:5,
        backgroundColor:'rgba(0,0,0,0.2)',
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center'
      },
      categoryTextField: {
        position: 'relative',
      },
      categoryListContainer: {
        marginTop: 0,
        width: wp('93%'),
        maxHeight: hp('20%'),
        zIndex: 1,
        justifyContent:'center'
      },
      categoryListButton: {
        padding: 5,
      },
      categoryListButtonText: {
        fontSize: 16,
        lineHeight: 22,
      },
      categoryFlatList: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        marginBottom: wp('5%'),
      },
      searchButton: {
        zIndex: -1,
        backgroundColor: '#27BBE1',
        borderRadius: 10,
        padding: 15,
        marginTop: hp('2%'),
      },
      searchButtonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 24,
      },
      loaderContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('15%'),
      },
      loaderText: {
        textAlign: 'center',
        fontSize: 12,
        color: '#27BBE1',
        opacity: 0.6,
        marginLeft: 10,
      },   
})

export default styles;