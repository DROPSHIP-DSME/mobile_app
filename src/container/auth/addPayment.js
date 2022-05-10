import { connect } from 'react-redux';
import { addPayment } from '../../screens/auth';
import { updateprofile,getprofileuser,savepaymentaddress } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    updateprofileLoader: state.auth.updateprofileLoader,
    getprofileuserlist: state.auth.getprofileuserlist,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

 
const mapDispatchToProps = { 
    updateprofile,
    getprofileuser,
    savepaymentaddress
};

export default connect(mapStateToProps, mapDispatchToProps)( addPayment);

