import { connect } from 'react-redux';
import { SalesAnalytic } from '../../screens/seller/analytic';
import { getprocesstlist,gettopcountry,gettopsell } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
     getprocessorderlist: state.auth.getprocessorderlist,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    getlisttopcountry: state.auth.getlisttopcountry,
    gettopsellproduct: state.auth.gettopsellproduct,
});

const mapDispatchToProps = {
    getprocesstlist,
    gettopcountry,
    gettopsell
};

export default connect(mapStateToProps, mapDispatchToProps)(SalesAnalytic);
