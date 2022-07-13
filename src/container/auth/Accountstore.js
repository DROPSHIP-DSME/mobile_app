 import { connect } from 'react-redux';
import { Accountstore } from '../../screens/customer/account';
import { getselldeshboard,gettopsell,getincomingtlist,liveeventdetail,branddetails,Brandslist } from '../../redux/actions/Auth'


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
    Brandlistdata: state.auth.Brandlistdata,
});

const mapDispatchToProps = {
   getselldeshboard,
   gettopsell,
   getincomingtlist,
   liveeventdetail,
   branddetails,
   Brandslist, 
   // signup

};

export default connect(mapStateToProps, mapDispatchToProps)(Accountstore);

