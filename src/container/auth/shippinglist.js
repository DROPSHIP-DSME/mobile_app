import { connect } from 'react-redux';
import { shippinglist } from '../../screens/auth';
import { updateprofile,getprofileuser,getuseraddress,deleteaddress} from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    updateprofileLoader: state.auth.updateprofileLoader,
    getprofileuserlist: state.auth.getprofileuserlist,
    getuseraddresslist: state.auth.getuseraddresslist,
    deleteaddresslioder: state.auth.deleteaddresslioder,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});


const mapDispatchToProps = { 
    updateprofile,
    getprofileuser,
    getuseraddress,
    deleteaddress,
};

export default connect(mapStateToProps, mapDispatchToProps)( shippinglist);

