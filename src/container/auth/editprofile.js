import { connect } from 'react-redux';
import { editprofile } from '../../screens/auth';
import { getAllshop,editUser,newprofile } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistshop: state.auth.getlistshop,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    seteditprofileuser: state.auth.seteditprofileuser,
    newprofileLoader: state.auth.newprofileLoader,
});

const mapDispatchToProps = {
    getAllshop,
    editUser,
    newprofile
};

export default connect(mapStateToProps, mapDispatchToProps)(editprofile);
