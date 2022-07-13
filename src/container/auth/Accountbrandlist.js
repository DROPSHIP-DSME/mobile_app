 import { connect } from 'react-redux';
import { Accountbrandlist } from '../../screens/customer/account';
import { getselldeshboard,gettopsell,getincomingtlist,liveeventdetail,branddetails } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    getlistselldeshboard: state.auth.getlistselldeshboard,
    gettopsellproduct: state.auth.gettopsellproduct,
    getinconeorderlist: state.auth.getinconeorderlist,
    getBranddetails: state.auth.getBranddetails,
    getlistbranddetails: state.auth.getlistbranddetails,
});

const mapDispatchToProps = {
   getselldeshboard,
   gettopsell,
   getincomingtlist,
   liveeventdetail,
   branddetails
   // signup

};

export default connect(mapStateToProps, mapDispatchToProps)(Accountbrandlist);

