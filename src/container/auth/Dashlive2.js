 import { connect } from 'react-redux';
import { Dashlive2 } from '../../screens/seller/golive';
import { getselldeshboard,gettopsell,getincomingtlist,liveeventdetail } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    getlistselldeshboard: state.auth.getlistselldeshboard,
    gettopsellproduct: state.auth.gettopsellproduct,
    getinconeorderlist: state.auth.getinconeorderlist,
});

const mapDispatchToProps = {
   getselldeshboard,
   gettopsell,
   getincomingtlist,
   liveeventdetail
   // signup

};

export default connect(mapStateToProps, mapDispatchToProps)(Dashlive2);

