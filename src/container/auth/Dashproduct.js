 import { connect } from 'react-redux';
import { Dashproduct } from '../../screens/auth';
import { getselldeshboard,gettopsell,getincomingtlist,Brandslist,
  liveeventdetail,getAllproduct,getbrandName } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    getlistselldeshboard: state.auth.getlistselldeshboard,
    gettopsellproduct: state.auth.gettopsellproduct,
    getinconeorderlist: state.auth.getinconeorderlist,
    getlistproduct: state.auth.getlistproduct,
    brandName:state.auth.brandName,
    Brandlistdata: state.auth.Brandlistdata,
});
 
const mapDispatchToProps = {
   getselldeshboard,
   gettopsell,
   getincomingtlist,
   liveeventdetail,
   getAllproduct,
   getbrandName,
   Brandslist
   // signup

};

export default connect(mapStateToProps, mapDispatchToProps)(Dashproduct);

