 import { connect } from 'react-redux';
import { Dashlive } from '../../screens/auth';
import { getselldeshboard,gettopsell,getincomingtlist,getchanneltoken,liveeventdetail,getAllproduct,schuleEventstart } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    getlistselldeshboard: state.auth.getlistselldeshboard,
    gettopsellproduct: state.auth.gettopsellproduct,
    getinconeorderlist: state.auth.getinconeorderlist,
     getlistproduct: state.auth.getlistproduct,
      livedetail: state.auth.livedetail,
      removedatalioder: state.auth.removedatalioder,
});

const mapDispatchToProps = {
   getselldeshboard,
   gettopsell,
   getincomingtlist,
   liveeventdetail,
   getAllproduct,
   schuleEventstart,
   getchanneltoken
   // signup

};

export default connect(mapStateToProps, mapDispatchToProps)(Dashlive);

