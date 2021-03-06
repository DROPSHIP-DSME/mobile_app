import { connect } from 'react-redux';
import { NameStore } from '../../screens/auth';
import { shopproduct,shopsellcount,getAllproductdetails,getAllshop,cartadd } from '../../redux/actions/Auth'


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
});

const mapDispatchToProps = {
    shopproduct,
    shopsellcount,
    getAllproductdetails,
    getAllshop,
    cartadd
};
 
export default connect(mapStateToProps, mapDispatchToProps)(NameStore);
