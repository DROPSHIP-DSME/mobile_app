import { connect } from 'react-redux';
import { NameStore } from '../../screens/customer/dashboard';
import { shopproduct,shopsellcount,getAllproduct,getAllproductdetails,getAllshop,cartadd } from '../../redux/actions/Auth'



const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    getshopproductlist: state.auth.getshopproductlist,
    getshopselllist: state.auth.getshopselllist,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    getlistproductdetails: state.auth.getlistproductdetails,
    getlistshop: state.auth.getlistshop,
    addcartLoader: state.auth.addcartLoader,
    getlistproduct: state.auth.getlistproduct,
});

const mapDispatchToProps = {
    shopproduct,
    shopsellcount,
    getAllproductdetails,
    getAllshop,
    cartadd,
    getAllproduct
};
 
export default connect(mapStateToProps, mapDispatchToProps)(NameStore);
