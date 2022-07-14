import { connect } from 'react-redux';
import { StoreOwner } from '../../screens/customer/cart';
import { chekout,countrylist,cartPrice } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    chekoutLoder: state.auth.chekoutLoder,
     countrylistdata: state.auth.countrylistdata,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    totalcartprice:state.auth.totalcartprice
});
 
const mapDispatchToProps = {
    chekout,
    countrylist,
    cartPrice 
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreOwner);
