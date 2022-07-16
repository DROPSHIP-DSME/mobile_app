import { connect } from 'react-redux';
import { StoreOwner } from '../../screens/customer/cart';
import { chekout,countrylist,cartPrice,getprofileuser,getuseraddress } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    chekoutLoder: state.auth.chekoutLoder,
    countrylistdata: state.auth.countrylistdata,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    totalcartprice:state.auth.totalcartprice,
    getprofileuserlist: state.auth.getprofileuserlist,
    getuseraddresslist: state.auth.getuseraddresslist,
});
 
const mapDispatchToProps = {
    chekout,
    countrylist,
    cartPrice,
    getprofileuser,
    getuseraddress, 
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreOwner);
