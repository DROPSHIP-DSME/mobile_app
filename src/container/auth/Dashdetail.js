 import { connect } from 'react-redux';
import { Dashdetail } from '../../screens/auth';
import { getselldeshboard,gettopsell,getincomingtlist,liveeventdetail,getorderdetail,updateorderdetail } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    getlistselldeshboard: state.auth.getlistselldeshboard,
    gettopsellproduct: state.auth.gettopsellproduct,
    getinconeorderlist: state.auth.getinconeorderlist,
    getorderlist: state.auth.getorderlist,
});

const mapDispatchToProps = {
   getselldeshboard,
   gettopsell,
   getincomingtlist,
   liveeventdetail,
   getorderdetail,
   updateorderdetail
   // signup

};

export default connect(mapStateToProps, mapDispatchToProps)(Dashdetail);

