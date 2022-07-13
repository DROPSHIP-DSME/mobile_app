import { connect } from 'react-redux';
import { editprofile } from '../../screens//customer/account';
import { getAllshop,editUser,newprofile,getprofileuser } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistshop: state.auth.getlistshop,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    seteditprofileuser: state.auth.seteditprofileuser,
    getprofileuserlist: state.auth.getprofileuserlist,
    newprofileLoader: state.auth.newprofileLoader,
});

const mapDispatchToProps = {
    getAllshop,
    editUser,
    newprofile,
    getprofileuser
};

export default connect(mapStateToProps, mapDispatchToProps)(editprofile);
