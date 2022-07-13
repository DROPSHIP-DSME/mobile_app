 import { connect } from 'react-redux';
import { Dashsale } from '../../screens/seller/analytic';
import { getselldeshboard,gettopsell,getincomingtlist,liveeventdetail,gettopcountry,Brandslist } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    getlistselldeshboard: state.auth.getlistselldeshboard,
    gettopsellproduct: state.auth.gettopsellproduct,
    getinconeorderlist: state.auth.getinconeorderlist,
    getlisttopcountry: state.auth.getlisttopcountry,
    Brandlistdata: state.auth.Brandlistdata,
});
 
const mapDispatchToProps = {
   getselldeshboard,
   gettopsell,
   getincomingtlist,
   liveeventdetail,
   gettopcountry,
   Brandslist
   // signup

};

export default connect(mapStateToProps, mapDispatchToProps)(Dashsale);

