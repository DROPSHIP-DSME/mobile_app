import { connect } from 'react-redux';
import { editpassword } from '../../screens/auth';
import { getAllshop,updatepassword } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistshop: state.auth.getlistshop,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
     updatepasswordLoader: state.auth.updatepasswordLoader,
     loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    getAllshop,
    updatepassword
};

export default connect(mapStateToProps, mapDispatchToProps)(editpassword);
