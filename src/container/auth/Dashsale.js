 import { connect } from 'react-redux';
import { Dashsale } from '../../screens/auth';
import { getselldeshboard,gettopsell,getincomingtlist,liveeventdetail,gettopcountry } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    getlistselldeshboard: state.auth.getlistselldeshboard,
    gettopsellproduct: state.auth.gettopsellproduct,
    getinconeorderlist: state.auth.getinconeorderlist,
     getlisttopcountry: state.auth.getlisttopcountry,
});

const mapDispatchToProps = {
   getselldeshboard,
   gettopsell,
   getincomingtlist,
   liveeventdetail,
   gettopcountry
   // signup

};

export default connect(mapStateToProps, mapDispatchToProps)(Dashsale);

