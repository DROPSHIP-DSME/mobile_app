import { connect } from 'react-redux';
import { ProfileDetail } from '../../screens/auth';
import { updateprofile,getprofileuser } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    updateprofileLoader: state.auth.updateprofileLoader,
    getprofileuserlist: state.auth.getprofileuserlist,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});


const mapDispatchToProps = { 
    updateprofile,
    getprofileuser
};

export default connect(mapStateToProps, mapDispatchToProps)( ProfileDetail);

