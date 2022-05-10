import { connect } from 'react-redux';
import { Editprofiledetail } from '../../screens/auth';
import { updateprofile,getprofileuser,newprofile } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    updateprofileLoader: state.auth.updateprofileLoader,
    getprofileuserlist: state.auth.getprofileuserlist,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    newprofileLoader: state.auth.newprofileLoader,
});


const mapDispatchToProps = { 
    updateprofile,
    getprofileuser,
    newprofile,
};

export default connect(mapStateToProps, mapDispatchToProps)( Editprofiledetail);

