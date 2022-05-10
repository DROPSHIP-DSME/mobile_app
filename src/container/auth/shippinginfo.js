import { connect } from 'react-redux';
import { shippinginfo } from '../../screens/auth';
import { updateprofile,getprofileuser,saveaddress, } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    updateprofileLoader: state.auth.updateprofileLoader,
    getprofileuserlist: state.auth.getprofileuserlist,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    saveaddressLoder: state.auth.saveaddressLoder,
});


const mapDispatchToProps = { 
    updateprofile,
    getprofileuser,saveaddress
};

export default connect(mapStateToProps, mapDispatchToProps)( shippinginfo);

 