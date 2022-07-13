 import { connect } from 'react-redux';
import { Dashsupportacc } from '../../screens/customer/setting';
import { getselldeshboard,gettopsell,getincomingtlist,liveeventdetail ,getsupportlist,support} from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    getlistselldeshboard: state.auth.getlistselldeshboard,
    gettopsellproduct: state.auth.gettopsellproduct,
    getinconeorderlist: state.auth.getinconeorderlist,
    getchatsupportlist1: state.auth.getchatsupportlist1,
});

const mapDispatchToProps = {
   getselldeshboard,
   gettopsell,
   getincomingtlist,
   liveeventdetail,
   getsupportlist,
    support
   // signup

};

export default connect(mapStateToProps, mapDispatchToProps)(Dashsupportacc);

