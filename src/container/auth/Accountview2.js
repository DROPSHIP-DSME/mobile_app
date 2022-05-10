import { connect } from 'react-redux';
import { Accountview2 } from '../../screens/auth';
import { shopproduct,shopsellcount } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    getshopproductlist: state.auth.getshopproductlist,
    getshopselllist: state.auth.getshopselllist,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    shopproduct,
    shopsellcount
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Accountview2);
